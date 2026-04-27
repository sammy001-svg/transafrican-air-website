import { z } from 'zod';

// Country code with phone number validation
const countryPhoneCodes: Record<string, { code: string; pattern: RegExp; maxLength: number }> = {
  '+1': { code: '+1', pattern: /^\d{10}$/, maxLength: 10 }, // US/Canada
  '+7': { code: '+7', pattern: /^\d{10}$/, maxLength: 10 }, // Russia
  '+20': { code: '+20', pattern: /^\d{9,10}$/, maxLength: 10 }, // Egypt
  '+27': { code: '+27', pattern: /^\d{9}$/, maxLength: 9 }, // South Africa
  '+33': { code: '+33', pattern: /^\d{9}$/, maxLength: 9 }, // France
  '+44': { code: '+44', pattern: /^\d{10}$/, maxLength: 10 }, // UK
  '+49': { code: '+49', pattern: /^\d{9,11}$/, maxLength: 11 }, // Germany
  '+65': { code: '+65', pattern: /^\d{8}$/, maxLength: 8 }, // Singapore
  '+81': { code: '+81', pattern: /^\d{9,10}$/, maxLength: 10 }, // Japan
  '+86': { code: '+86', pattern: /^\d{7,11}$/, maxLength: 11 }, // China
  '+91': { code: '+91', pattern: /^\d{10}$/, maxLength: 10 }, // India
  '+212': { code: '+212', pattern: /^\d{9}$/, maxLength: 9 }, // Morocco
  '+254': { code: '+254', pattern: /^\d{9}$/, maxLength: 9 }, // Kenya
  '+255': { code: '+255', pattern: /^\d{9}$/, maxLength: 9 }, // Tanzania
  '+256': { code: '+256', pattern: /^\d{9}$/, maxLength: 9 }, // Uganda
  '+234': { code: '+234', pattern: /^\d{10}$/, maxLength: 10 }, // Nigeria
  '+233': { code: '+233', pattern: /^\d{9}$/, maxLength: 9 }, // Ghana
  '+971': { code: '+971', pattern: /^\d{9}$/, maxLength: 9 }, // UAE
  '+852': { code: '+852', pattern: /^\d{8}$/, maxLength: 8 }, // Hong Kong
};

// Validate phone number with country code
const validatePhone = (countryCode: string, phone: string) => {
  const countryConfig = countryPhoneCodes[countryCode];
  if (!countryConfig) return false;
  return countryConfig.pattern.test(phone);
};

// Base quote submission schema
export const baseQuoteSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(100),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  countryCode: z.string().refine(
    (code) => Object.keys(countryPhoneCodes).includes(code),
    'Invalid country code'
  ),
  phone: z.string().min(7, 'Phone number is too short').max(15),
  departure: z.string().min(1, 'Departure location is required'),
  arrival: z.string().min(1, 'Arrival location is required'),
  date: z.string().refine(
    (date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    },
    'Date must be in the future'
  ),
  charterType: z.string().min(1, 'Charter type is required'),
});

// Validate combined country code and phone
const phoneValidation = (data: { countryCode: string; phone: string }) =>
  validatePhone(data.countryCode, data.phone);

// Medical Charter specific schema
export const medicalQuoteSchema = baseQuoteSchema
  .extend({
    charterType: z.literal('medical'),
    notes: z.string().max(500).optional(),
  })
  .refine(phoneValidation, {
    message: 'Invalid phone number for the selected country code',
    path: ['phone'],
  });

// Sports Charter specific schema
export const sportsQuoteSchema = baseQuoteSchema
  .extend({
    charterType: z.literal('sports'),
    teamSize: z.string().optional(),
  })
  .refine(phoneValidation, {
    message: 'Invalid phone number for the selected country code',
    path: ['phone'],
  });

// Film/TV Media specific schema
export const filmTvQuoteSchema = baseQuoteSchema
  .extend({
    charterType: z.literal('film-tv'),
    productionCompany: z.string().max(200).optional(),
  })
  .refine(phoneValidation, {
    message: 'Invalid phone number for the selected country code',
    path: ['phone'],
  });

// Executive Events specific schema
export const executiveEventsQuoteSchema = baseQuoteSchema
  .extend({
    charterType: z.literal('executive-events'),
    guestCount: z.string().optional(),
  })
  .refine(phoneValidation, {
    message: 'Invalid phone number for the selected country code',
    path: ['phone'],
  });

// Helicopter specific schema
export const helicopterQuoteSchema = baseQuoteSchema
  .extend({
    charterType: z.literal('helicopter'),
    passengers: z.string().optional(),
  })
  .refine(phoneValidation, {
    message: 'Invalid phone number for the selected country code',
    path: ['phone'],
  });

// Humanitarian Relief specific schema
export const humanitarianQuoteSchema = baseQuoteSchema
  .extend({
    charterType: z.literal('humanitarian'),
    organizationName: z.string().max(200).optional(),
  })
  .refine(phoneValidation, {
    message: 'Invalid phone number for the selected country code',
    path: ['phone'],
  });

// Perishable Cargo specific schema
export const perishableCargoQuoteSchema = baseQuoteSchema
  .extend({
    charterType: z.literal('perishable'),
    cargoType: z.string().optional(),
    temperature: z.string().optional(),
    weight: z.string().optional(),
    company: z.string().max(200).optional(),
  })
  .refine(phoneValidation, {
    message: 'Invalid phone number for the selected country code',
    path: ['phone'],
  });

// Union of all quote schemas
export const allQuoteSchemas = z.union([
  medicalQuoteSchema,
  sportsQuoteSchema,
  filmTvQuoteSchema,
  executiveEventsQuoteSchema,
  helicopterQuoteSchema,
  humanitarianQuoteSchema,
  perishableCargoQuoteSchema,
]);

export type QuoteSubmission = z.infer<typeof allQuoteSchemas>;
