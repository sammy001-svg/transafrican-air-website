-- Create quote_submissions table
CREATE TABLE IF NOT EXISTS quote_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  -- Contact Information
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  country_code VARCHAR(5) NOT NULL,
  
  -- Charter Details
  charter_type VARCHAR(100) NOT NULL, -- e.g., 'cargo', 'medical', 'sports', 'film', 'executive-events', 'helicopter', 'humanitarian', 'perishable'
  departure_location VARCHAR(255) NOT NULL,
  arrival_location VARCHAR(255) NOT NULL,
  travel_date DATE NOT NULL,
  
  -- Optional Charter Details
  payload_type VARCHAR(255),
  weight VARCHAR(100),
  dimensions VARCHAR(100),
  team_size_or_passengers INTEGER,
  production_company_or_organization VARCHAR(255),
  cargo_type VARCHAR(100),
  temperature_range VARCHAR(50),
  
  -- Additional Information
  additional_notes TEXT,
  source_attribution VARCHAR(100), -- e.g., 'Google', 'Social Media', etc.
  
  -- Submission Tracking
  ip_address INET,
  user_agent TEXT,
  submission_status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'reviewed', 'contacted', 'converted'
  company_email_sent BOOLEAN DEFAULT FALSE,
  client_confirmation_sent BOOLEAN DEFAULT FALSE,
  reference_number VARCHAR(20) UNIQUE,
  
  -- Metadata
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX idx_quote_submissions_email ON quote_submissions(email);
CREATE INDEX idx_quote_submissions_created_at ON quote_submissions(created_at DESC);
CREATE INDEX idx_quote_submissions_charter_type ON quote_submissions(charter_type);
CREATE INDEX idx_quote_submissions_reference_number ON quote_submissions(reference_number);

-- Enable Row Level Security
ALTER TABLE quote_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow reading by authenticated users (your team)
CREATE POLICY "Allow authenticated users to read all submissions"
  ON quote_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create policy to allow inserting new submissions (from the API)
CREATE POLICY "Allow inserting new submissions"
  ON quote_submissions
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow updating status (from your team)
CREATE POLICY "Allow authenticated users to update submission status"
  ON quote_submissions
  FOR UPDATE
  USING (auth.role() = 'authenticated');
