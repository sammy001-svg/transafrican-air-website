import { QuoteSubmission } from '@/lib/validation/quote-schemas';

export const generateCompanyNotificationEmail = (
  submission: QuoteSubmission,
  referenceNumber: string
) => {
  const charterTypeLabel: Record<string, string> = {
    medical: 'Medical Charter',
    sports: 'Sports Team Charter',
    'film-tv': 'Film & TV Production Charter',
    'executive-events': 'Executive Events Charter',
    helicopter: 'Helicopter Charter',
    humanitarian: 'Humanitarian Relief Charter',
    perishable: 'Perishable Cargo Charter',
  };

  const charterType = charterTypeLabel[submission.charterType] || submission.charterType;

  return {
    subject: `New Quote Request - ${charterType} (Ref: ${referenceNumber})`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #003d99; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background-color: #f9f9f9; padding: 20px; }
    .section { margin-bottom: 20px; }
    .section-title { font-weight: bold; font-size: 14px; color: #003d99; margin-bottom: 10px; text-transform: uppercase; }
    .field { margin-bottom: 10px; }
    .field-label { font-weight: bold; color: #555; }
    .field-value { color: #333; margin-top: 4px; }
    .reference { background-color: #e8f0ff; border-left: 4px solid #003d99; padding: 10px; margin: 15px 0; }
    .footer { background-color: #003d99; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Quote Request Received</h2>
      <p style="margin: 0; font-size: 12px;">${new Date().toLocaleString()}</p>
    </div>
    
    <div class="content">
      <div class="reference">
        <strong>Reference Number: ${referenceNumber}</strong><br>
        <strong>Charter Type: ${charterType}</strong>
      </div>

      <div class="section">
        <div class="section-title">Contact Information</div>
        <div class="field">
          <div class="field-label">Name:</div>
          <div class="field-value">${submission.firstName} ${submission.lastName}</div>
        </div>
        <div class="field">
          <div class="field-label">Email:</div>
          <div class="field-value"><a href="mailto:${submission.email}">${submission.email}</a></div>
        </div>
        <div class="field">
          <div class="field-label">Phone:</div>
          <div class="field-value">${submission.countryCode} ${submission.phone}</div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Charter Details</div>
        <div class="field">
          <div class="field-label">Departure:</div>
          <div class="field-value">${submission.departure}</div>
        </div>
        <div class="field">
          <div class="field-label">Arrival:</div>
          <div class="field-value">${submission.arrival}</div>
        </div>
        <div class="field">
          <div class="field-label">Date:</div>
          <div class="field-value">${new Date(submission.date).toLocaleDateString()}</div>
        </div>
      </div>

      ${submission.charterType === 'sports' && (submission as any).teamSize ? `
      <div class="section">
        <div class="field">
          <div class="field-label">Team Size:</div>
          <div class="field-value">${(submission as any).teamSize}</div>
        </div>
      </div>
      ` : ''}

      ${submission.charterType === 'film-tv' && (submission as any).productionCompany ? `
      <div class="section">
        <div class="field">
          <div class="field-label">Production Company:</div>
          <div class="field-value">${(submission as any).productionCompany}</div>
        </div>
      </div>
      ` : ''}

      ${submission.charterType === 'executive-events' && (submission as any).guestCount ? `
      <div class="section">
        <div class="field">
          <div class="field-label">Guest Count:</div>
          <div class="field-value">${(submission as any).guestCount}</div>
        </div>
      </div>
      ` : ''}

      ${submission.charterType === 'helicopter' && (submission as any).passengers ? `
      <div class="section">
        <div class="field">
          <div class="field-label">Passengers:</div>
          <div class="field-value">${(submission as any).passengers}</div>
        </div>
      </div>
      ` : ''}

      ${submission.charterType === 'humanitarian' && (submission as any).organizationName ? `
      <div class="section">
        <div class="field">
          <div class="field-label">Organization:</div>
          <div class="field-value">${(submission as any).organizationName}</div>
        </div>
      </div>
      ` : ''}

      ${submission.charterType === 'perishable' ? `
      <div class="section">
        <div class="section-title">Cargo Details</div>
        ${(submission as any).cargoType ? `
        <div class="field">
          <div class="field-label">Cargo Type:</div>
          <div class="field-value">${(submission as any).cargoType}</div>
        </div>
        ` : ''}
        ${(submission as any).temperature ? `
        <div class="field">
          <div class="field-label">Temperature Range:</div>
          <div class="field-value">${(submission as any).temperature}</div>
        </div>
        ` : ''}
        ${(submission as any).weight ? `
        <div class="field">
          <div class="field-label">Weight:</div>
          <div class="field-value">${(submission as any).weight}</div>
        </div>
        ` : ''}
      </div>
      ` : ''}

      ${submission.charterType === 'medical' && (submission as any).notes ? `
      <div class="section">
        <div class="field">
          <div class="field-label">Additional Notes:</div>
          <div class="field-value">${(submission as any).notes}</div>
        </div>
      </div>
      ` : ''}
    </div>

    <div class="footer">
      <p>This is an automated message from Transafrican Air's quote management system.</p>
    </div>
  </div>
</body>
</html>
    `,
  };
};

export const generateClientConfirmationEmail = (
  firstName: string,
  referenceNumber: string,
  charterType: string
) => {
  const charterTypeLabel: Record<string, string> = {
    medical: 'Medical Charter',
    sports: 'Sports Team Charter',
    'film-tv': 'Film & TV Production Charter',
    'executive-events': 'Executive Events Charter',
    helicopter: 'Helicopter Charter',
    humanitarian: 'Humanitarian Relief Charter',
    perishable: 'Perishable Cargo Charter',
  };

  const charter = charterTypeLabel[charterType] || charterType;

  return {
    subject: `Quote Request Confirmed - Reference: ${referenceNumber}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #003d99; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background-color: #f9f9f9; padding: 20px; }
    .highlight { background-color: #e8f0ff; border-left: 4px solid #003d99; padding: 15px; margin: 15px 0; border-radius: 4px; }
    .highlight-title { font-weight: bold; color: #003d99; margin-bottom: 5px; }
    .button { display: inline-block; background-color: #003d99; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin: 10px 0; }
    .footer { background-color: #003d99; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Thank You, ${firstName}!</h2>
      <p style="margin: 0; font-size: 12px;">Your quote request has been received</p>
    </div>
    
    <div class="content">
      <p>Thank you for choosing Transafrican Air for your ${charter} needs.</p>
      
      <div class="highlight">
        <div class="highlight-title">Your Reference Number</div>
        <div style="font-size: 18px; font-weight: bold; color: #003d99; font-family: monospace;">${referenceNumber}</div>
        <p style="margin: 10px 0 0 0; font-size: 12px; color: #666;">Please keep this reference number for your records. Use it when contacting us about this quote.</p>
      </div>

      <h3 style="color: #003d99;">What Happens Next?</h3>
      <ol>
        <li>Our team will review your quote request within 24 hours</li>
        <li>We'll contact you via email or phone with detailed information and pricing</li>
        <li>We'll work with you to customize the charter to meet your specific needs</li>
      </ol>

      <h3 style="color: #003d99;">Questions?</h3>
      <p>If you have any urgent questions, please don't hesitate to contact us:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:info@transafricanair.com">info@transafricanair.com</a></li>
        <li><strong>Phone:</strong> +254 (0) 20 XXX XXXX</li>
        <li><strong>Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM (East Africa Time)</li>
      </ul>

      <p style="margin-top: 30px; font-size: 14px; color: #666;">
        <strong>Charter Type:</strong> ${charter}<br>
        <strong>Submitted:</strong> ${new Date().toLocaleDateString()}
      </p>
    </div>

    <div class="footer">
      <p style="margin: 0;">Transafrican Air - Premium Charter Services</p>
      <p style="margin: 5px 0 0 0; font-size: 11px;">www.transafricanair.com</p>
    </div>
  </div>
</body>
</html>
    `,
  };
};
