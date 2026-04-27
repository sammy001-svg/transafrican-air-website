-- MySQL Schema for Transafrican Air
-- This file defines the structure for the quote_submissions table.

-- Create Database (Optional, depending on environment)
-- CREATE DATABASE IF NOT EXISTS transafrican_air;
-- USE transafrican_air;

CREATE TABLE IF NOT EXISTS quote_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reference_number VARCHAR(50) NOT NULL UNIQUE,
    charter_type VARCHAR(50) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    departure_location VARCHAR(255) NOT NULL,
    arrival_location VARCHAR(255) NOT NULL,
    travel_date DATE NOT NULL,
    team_size VARCHAR(50) DEFAULT NULL,
    production_company VARCHAR(200) DEFAULT NULL,
    guest_count VARCHAR(50) DEFAULT NULL,
    passengers VARCHAR(50) DEFAULT NULL,
    organization_name VARCHAR(200) DEFAULT NULL,
    cargo_type VARCHAR(100) DEFAULT NULL,
    temperature_range VARCHAR(50) DEFAULT NULL,
    weight_kg VARCHAR(50) DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    company_name VARCHAR(200) DEFAULT NULL,
    ip_address VARCHAR(45) DEFAULT NULL,
    user_agent TEXT DEFAULT NULL,
    status VARCHAR(20) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
