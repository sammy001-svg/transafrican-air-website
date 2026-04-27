import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { Resend } from 'resend';
import { allQuoteSchemas } from '@/lib/validation/quote-schemas';
import { generateCompanyNotificationEmail, generateClientConfirmationEmail } from '@/lib/email/templates';
import { verifyCSRFToken } from '@/lib/security/csrf';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting: track submissions by IP
const ipSubmissions = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // 5 submissions per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const submission = ipSubmissions.get(ip);

  if (!submission || now > submission.resetTime) {
    ipSubmissions.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (submission.count >= RATE_LIMIT) {
    return false;
  }

  submission.count++;
  return true;
};

// Generate unique reference number
const generateReferenceNumber = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `TAA-${timestamp}-${random}`;
};

// Sanitize input to prevent XSS
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '')
    .trim()
    .substring(0, 500);
};

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Check rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Verify CSRF token
    const csrfToken = body.csrfToken;
    if (!csrfToken) {
      return NextResponse.json(
        { error: 'Security validation failed. Please refresh the page and try again.' },
        { status: 403 }
      );
    }

    const isValidCSRF = await verifyCSRFToken(csrfToken);
    if (!isValidCSRF) {
      return NextResponse.json(
        { error: 'Security validation failed. Please refresh the page and try again.' },
        { status: 403 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      ...body,
      firstName: sanitizeInput(body.firstName),
      lastName: sanitizeInput(body.lastName),
      email: sanitizeInput(body.email).toLowerCase(),
      departure: sanitizeInput(body.departure),
      arrival: sanitizeInput(body.arrival),
      notes: body.notes ? sanitizeInput(body.notes) : undefined,
      productionCompany: body.productionCompany ? sanitizeInput(body.productionCompany) : undefined,
      organizationName: body.organizationName ? sanitizeInput(body.organizationName) : undefined,
      company: body.company ? sanitizeInput(body.company) : undefined,
    };

    // Validate data against schema
    const validatedData = allQuoteSchemas.parse(sanitizedData);

    // Generate reference number
    const referenceNumber = generateReferenceNumber();

    // Store in database
    try {
      const [result] = await pool.execute(
        `INSERT INTO quote_submissions (
          reference_number, charter_type, first_name, last_name, email, phone, 
          departure_location, arrival_location, travel_date, team_size, 
          production_company, guest_count, passengers, organization_name, 
          cargo_type, temperature_range, weight_kg, notes, company_name, 
          ip_address, user_agent, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          referenceNumber,
          validatedData.charterType,
          validatedData.firstName,
          validatedData.lastName,
          validatedData.email,
          `${validatedData.countryCode}${validatedData.phone}`,
          validatedData.departure,
          validatedData.arrival,
          validatedData.date,
          (validatedData as any).teamSize || null,
          (validatedData as any).productionCompany || null,
          (validatedData as any).guestCount || null,
          (validatedData as any).passengers || null,
          (validatedData as any).organizationName || null,
          (validatedData as any).cargoType || null,
          (validatedData as any).temperature || null,
          (validatedData as any).weight || null,
          (validatedData as any).notes || null,
          (validatedData as any).company || null,
          ip === 'unknown' ? null : ip,
          request.headers.get('user-agent'),
          'new'
        ]
      );
    } catch (dbError) {
      console.error('[v0] Database insert error:', dbError);
      return NextResponse.json(
        { error: 'Failed to store submission. Please try again.' },
        { status: 500 }
      );
    }

    // Send company notification email
    const companyEmailContent = generateCompanyNotificationEmail(validatedData, referenceNumber);

    const companyEmailPromise = resend.emails.send({
      from: 'Transafrican Air <noreply@transafricanair.com>',
      to: 'info@transafricanair.com',
      subject: companyEmailContent.subject,
      html: companyEmailContent.html,
    });

    // Send client confirmation email
    const clientEmailContent = generateClientConfirmationEmail(
      validatedData.firstName,
      referenceNumber,
      validatedData.charterType
    );

    const clientEmailPromise = resend.emails.send({
      from: 'Transafrican Air <noreply@transafricanair.com>',
      to: validatedData.email,
      subject: clientEmailContent.subject,
      html: clientEmailContent.html,
    });

    // Wait for both emails to be sent (non-blocking for the response)
    Promise.all([companyEmailPromise, clientEmailPromise]).catch((err) => {
      console.error('[v0] Email sending error:', err);
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Quote request submitted successfully!',
        referenceNumber,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[v0] Quote submission error:', error);

    // Determine if we're in production
    const isProduction = process.env.NODE_ENV === 'production';

    // Handle validation errors
    if (error instanceof Error && error.message.includes('ZodError')) {
      return NextResponse.json(
        {
          error: isProduction 
            ? 'Validation failed. Please check your input and try again.'
            : `Validation failed: ${error.message}`,
        },
        { status: 400 }
      );
    }

    // Generic error message for production
    const errorMessage = isProduction
      ? 'An error occurred while processing your request. Please try again later.'
      : error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred';

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
