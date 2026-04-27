"use client"

import { ArrowRight, MapPin, Clock, Users, FileText, PhoneIcon, Heart, Ambulance } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useQuoteSubmission } from '@/hooks/use-quote-submission'
import { StaggeredText } from './staggered-text'

interface QuoteFormProps {
  charterType: 'sports' | 'film-tv' | 'executive-events' | 'helicopter' | 'humanitarian' | 'perishable' | 'medical'
  title: string
  description: string
  additionalFieldsComponent?: React.ReactNode
}

export const airports = [
  { name: 'Jomo Kenyatta International', city: 'Nairobi', iata: 'NBO', icao: 'KBIA', country: 'Kenya' },
  { name: 'Julius Nyerere International', city: 'Dar es Salaam', iata: 'DAR', icao: 'HHDA', country: 'Tanzania' },
  { name: 'OR Tambo International', city: 'Johannesburg', iata: 'JNB', icao: 'FAOR', country: 'South Africa' },
  { name: 'Cape Town International', city: 'Cape Town', iata: 'CPT', icao: 'FACT', country: 'South Africa' },
  { name: 'London Heathrow', city: 'London', iata: 'LHR', icao: 'EGLL', country: 'United Kingdom' },
  { name: 'Paris Charles de Gaulle', city: 'Paris', iata: 'CDG', icao: 'LFPG', country: 'France' },
  { name: 'Frankfurt am Main', city: 'Frankfurt', iata: 'FRA', icao: 'EDDF', country: 'Germany' },
  { name: 'Dubai International', city: 'Dubai', iata: 'DXB', icao: 'OMDB', country: 'UAE' },
  { name: 'Singapore Changi', city: 'Singapore', iata: 'SIN', icao: 'WSSS', country: 'Singapore' },
  { name: 'Hong Kong International', city: 'Hong Kong', iata: 'HKG', icao: 'VHHH', country: 'Hong Kong' },
  { name: 'Tokyo Haneda', city: 'Tokyo', iata: 'HND', icao: 'RJTT', country: 'Japan' },
  { name: 'John F. Kennedy International', city: 'New York', iata: 'JFK', icao: 'KJFK', country: 'United States' },
  { name: 'Los Angeles International', city: 'Los Angeles', iata: 'LAX', icao: 'KLAX', country: 'United States' },
  { name: 'Toronto Pearson', city: 'Toronto', iata: 'YYZ', icao: 'CYYZ', country: 'Canada' },
  { name: 'Sydney Kingsford Smith', city: 'Sydney', iata: 'SYD', icao: 'YSSY', country: 'Australia' },
]

export const countryCodes = [
  { code: '+1', country: 'United States' },
  { code: '+1', country: 'Canada' },
  { code: '+1', country: 'Mexico' },
  { code: '+7', country: 'Russia' },
  { code: '+20', country: 'Egypt' },
  { code: '+27', country: 'South Africa' },
  { code: '+30', country: 'Greece' },
  { code: '+31', country: 'Netherlands' },
  { code: '+32', country: 'Belgium' },
  { code: '+33', country: 'France' },
  { code: '+34', country: 'Spain' },
  { code: '+36', country: 'Hungary' },
  { code: '+39', country: 'Italy' },
  { code: '+40', country: 'Romania' },
  { code: '+41', country: 'Switzerland' },
  { code: '+43', country: 'Austria' },
  { code: '+44', country: 'United Kingdom' },
  { code: '+45', country: 'Denmark' },
  { code: '+46', country: 'Sweden' },
  { code: '+47', country: 'Norway' },
  { code: '+48', country: 'Poland' },
  { code: '+49', country: 'Germany' },
  { code: '+51', country: 'Peru' },
  { code: '+52', country: 'Mexico' },
  { code: '+55', country: 'Brazil' },
  { code: '+56', country: 'Chile' },
  { code: '+57', country: 'Colombia' },
  { code: '+58', country: 'Venezuela' },
  { code: '+60', country: 'Malaysia' },
  { code: '+61', country: 'Australia' },
  { code: '+62', country: 'Indonesia' },
  { code: '+63', country: 'Philippines' },
  { code: '+64', country: 'New Zealand' },
  { code: '+65', country: 'Singapore' },
  { code: '+66', country: 'Thailand' },
  { code: '+81', country: 'Japan' },
  { code: '+82', country: 'South Korea' },
  { code: '+84', country: 'Vietnam' },
  { code: '+86', country: 'China' },
  { code: '+90', country: 'Turkey' },
  { code: '+91', country: 'India' },
  { code: '+92', country: 'Pakistan' },
  { code: '+93', country: 'Afghanistan' },
  { code: '+94', country: 'Sri Lanka' },
  { code: '+98', country: 'Iran' },
  { code: '+212', country: 'Morocco' },
  { code: '+213', country: 'Algeria' },
  { code: '+216', country: 'Tunisia' },
  { code: '+218', country: 'Libya' },
  { code: '+220', country: 'Gambia' },
  { code: '+221', country: 'Senegal' },
  { code: '+222', country: 'Mauritania' },
  { code: '+223', country: 'Mali' },
  { code: '+224', country: 'Guinea' },
  { code: '+225', country: 'Ivory Coast' },
  { code: '+226', country: 'Burkina Faso' },
  { code: '+227', country: 'Niger' },
  { code: '+228', country: 'Togo' },
  { code: '+229', country: 'Benin' },
  { code: '+230', country: 'Mauritius' },
  { code: '+231', country: 'Liberia' },
  { code: '+232', country: 'Sierra Leone' },
  { code: '+233', country: 'Ghana' },
  { code: '+234', country: 'Nigeria' },
  { code: '+235', country: 'Chad' },
  { code: '+236', country: 'Central African Republic' },
  { code: '+237', country: 'Cameroon' },
  { code: '+238', country: 'Cape Verde' },
  { code: '+239', country: 'São Tomé and Príncipe' },
  { code: '+240', country: 'Equatorial Guinea' },
  { code: '+241', country: 'Gabon' },
  { code: '+242', country: 'Congo' },
  { code: '+243', country: 'Democratic Republic of Congo' },
  { code: '+244', country: 'Angola' },
  { code: '+245', country: 'Guinea-Bissau' },
  { code: '+246', country: 'British Indian Ocean Territory' },
  { code: '+248', country: 'Seychelles' },
  { code: '+249', country: 'Sudan' },
  { code: '+250', country: 'Rwanda' },
  { code: '+251', country: 'Ethiopia' },
  { code: '+252', country: 'Somalia' },
  { code: '+253', country: 'Djibouti' },
  { code: '+254', country: 'Kenya' },
  { code: '+255', country: 'Tanzania' },
  { code: '+256', country: 'Uganda' },
  { code: '+257', country: 'Burundi' },
  { code: '+258', country: 'Mozambique' },
  { code: '+260', country: 'Zambia' },
  { code: '+261', country: 'Madagascar' },
  { code: '+262', country: 'Reunion' },
  { code: '+263', country: 'Zimbabwe' },
  { code: '+264', country: 'Namibia' },
  { code: '+265', country: 'Malawi' },
  { code: '+266', country: 'Lesotho' },
  { code: '+267', country: 'Botswana' },
  { code: '+268', country: 'Eswatini' },
  { code: '+269', country: 'Comoros' },
  { code: '+290', country: 'Saint Helena' },
  { code: '+350', country: 'Gibraltar' },
  { code: '+351', country: 'Portugal' },
  { code: '+352', country: 'Luxembourg' },
  { code: '+353', country: 'Ireland' },
  { code: '+354', country: 'Iceland' },
  { code: '+355', country: 'Albania' },
  { code: '+356', country: 'Malta' },
  { code: '+357', country: 'Cyprus' },
  { code: '+358', country: 'Finland' },
  { code: '+359', country: 'Bulgaria' },
  { code: '+370', country: 'Lithuania' },
  { code: '+371', country: 'Latvia' },
  { code: '+372', country: 'Estonia' },
  { code: '+380', country: 'Ukraine' },
  { code: '+381', country: 'Serbia' },
  { code: '+382', country: 'Montenegro' },
  { code: '+383', country: 'Kosovo' },
  { code: '+385', country: 'Croatia' },
  { code: '+386', country: 'Slovenia' },
  { code: '+387', country: 'Bosnia and Herzegovina' },
  { code: '+389', country: 'North Macedonia' },
  { code: '+420', country: 'Czech Republic' },
  { code: '+421', country: 'Slovakia' },
  { code: '+500', country: 'Falkland Islands' },
  { code: '+501', country: 'Belize' },
  { code: '+502', country: 'Guatemala' },
  { code: '+503', country: 'El Salvador' },
  { code: '+504', country: 'Honduras' },
  { code: '+505', country: 'Nicaragua' },
  { code: '+506', country: 'Costa Rica' },
  { code: '+507', country: 'Panama' },
  { code: '+508', country: 'Saint Pierre and Miquelon' },
  { code: '+509', country: 'Haiti' },
  { code: '+590', country: 'Guadeloupe' },
  { code: '+591', country: 'Bolivia' },
  { code: '+592', country: 'Guyana' },
  { code: '+593', country: 'Ecuador' },
  { code: '+594', country: 'French Guiana' },
  { code: '+595', country: 'Paraguay' },
  { code: '+597', country: 'Suriname' },
  { code: '+598', country: 'Uruguay' },
  { code: '+599', country: 'Curaçao' },
  { code: '+670', country: 'Timor-Leste' },
  { code: '+672', country: 'Norfolk Island' },
  { code: '+673', country: 'Brunei' },
  { code: '+674', country: 'Nauru' },
  { code: '+675', country: 'Papua New Guinea' },
  { code: '+676', country: 'Tonga' },
  { code: '+677', country: 'Solomon Islands' },
  { code: '+678', country: 'Vanuatu' },
  { code: '+679', country: 'Fiji' },
  { code: '+680', country: 'Palau' },
  { code: '+681', country: 'Wallis and Futuna' },
  { code: '+682', country: 'Cook Islands' },
  { code: '+683', country: 'Niue' },
  { code: '+684', country: 'American Samoa' },
  { code: '+685', country: 'Samoa' },
  { code: '+686', country: 'Kiribati' },
  { code: '+687', country: 'New Caledonia' },
  { code: '+688', country: 'Tuvalu' },
  { code: '+689', country: 'French Polynesia' },
  { code: '+690', country: 'Tokelau' },
  { code: '+691', country: 'Micronesia' },
  { code: '+692', country: 'Marshall Islands' },
  { code: '+850', country: 'North Korea' },
  { code: '+852', country: 'Hong Kong' },
  { code: '+853', country: 'Macau' },
  { code: '+855', country: 'Cambodia' },
  { code: '+856', country: 'Laos' },
  { code: '+880', country: 'Bangladesh' },
  { code: '+886', country: 'Taiwan' },
  { code: '+960', country: 'Maldives' },
  { code: '+961', country: 'Lebanon' },
  { code: '+962', country: 'Jordan' },
  { code: '+963', country: 'Syria' },
  { code: '+964', country: 'Iraq' },
  { code: '+965', country: 'Kuwait' },
  { code: '+966', country: 'Saudi Arabia' },
  { code: '+967', country: 'Yemen' },
  { code: '+968', country: 'Oman' },
  { code: '+970', country: 'Palestine' },
  { code: '+971', country: 'UAE' },
  { code: '+972', country: 'Israel' },
  { code: '+973', country: 'Bahrain' },
  { code: '+974', country: 'Qatar' },
  { code: '+975', country: 'Bhutan' },
  { code: '+976', country: 'Mongolia' },
  { code: '+977', country: 'Nepal' },
  { code: '+992', country: 'Tajikistan' },
  { code: '+993', country: 'Turkmenistan' },
  { code: '+994', country: 'Azerbaijan' },
  { code: '+995', country: 'Georgia' },
  { code: '+996', country: 'Kyrgyzstan' },
  { code: '+998', country: 'Uzbekistan' },
]

const tripTypes = [
  { id: 'one-way', label: 'One Way' },
  { id: 'round-trip', label: 'Round Trip' },
  { id: 'multi-leg', label: 'Multi-Leg' },
  { id: 'cargo', label: 'Cargo' },
  { id: 'general', label: 'General Inquiry' },
]

const medicalTripTypes = [
  { id: 'medical-charter', label: 'Medical Charter' },
  { id: 'ground-transport', label: 'Ground Transport' },
  { id: 'inflight-medical-care', label: 'Inflight Medical Care' },
  { id: 'life-support', label: 'Life Support Systems' },
  { id: 'family-travel', label: 'Family Travel Arrangements' },
]

const sourceOptions = [
  'Google',
  'Social Media',
  'Referral',
  'Direct Website',
  'News/Media',
  'Other',
]

export function QuoteForm({
  charterType,
  title,
  description,
  additionalFieldsComponent,
}: QuoteFormProps) {
  const [tripType, setTripType] = useState(charterType === 'medical' ? 'medical-charter' : 'one-way')
  const [departureSearch, setDepartureSearch] = useState('')
  const [arrivalSearch, setArrivalSearch] = useState('')
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false)
  const [showArrivalDropdown, setShowArrivalDropdown] = useState(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState('+254')
  const [additionalFields, setAdditionalFields] = useState<Record<string, any>>({})

  const { submitQuote, isLoading, error, success, referenceNumber, reset } = useQuoteSubmission()
  
  // Determine which trip types to show based on charter type
  const currentTripTypes = charterType === 'medical' ? medicalTripTypes : tripTypes

  const filterAirports = (searchText: string) => {
    if (!searchText.trim()) return []
    const query = searchText.toLowerCase()
    return airports.filter(
      (airport) =>
        airport.city.toLowerCase().includes(query) ||
        airport.country.toLowerCase().includes(query) ||
        airport.iata.toLowerCase().includes(query) ||
        airport.icao.toLowerCase().includes(query) ||
        airport.name.toLowerCase().includes(query)
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      countryCode: selectedCountryCode,
      phone: formData.get('phone') as string,
      departure: departureSearch,
      arrival: arrivalSearch,
      date: formData.get('date') as string,
      charterType,
      tripType,
      ...additionalFields,
    }

    const result = await submitQuote(data)
    if (result.success) {
      e.currentTarget.reset()
      setDepartureSearch('')
      setArrivalSearch('')
    }
  }

  if (success && referenceNumber) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 md:p-12 max-w-2xl mx-auto">
            <div className="text-5xl mb-4">✓</div>
            <h2 className="text-3xl font-bold text-green-700 mb-3">Quote Request Submitted Successfully!</h2>
            <p className="text-green-700 mb-6">Thank you for choosing Transafrican Air. We've received your request and will contact you within 24 hours.</p>
            <div className="bg-white border-2 border-green-300 rounded p-4 mb-6">
              <p className="text-sm text-foreground mb-2">Your Reference Number:</p>
              <p className="text-2xl font-bold text-primary font-mono">{referenceNumber}</p>
            </div>
            <p className="text-sm text-foreground/70 mb-6">Check your email for confirmation details.</p>
            <button
              onClick={() => reset()}
              className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition"
            >
              Submit Another Quote
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="bg-background rounded-lg p-2 md:p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">{title}</h2>
          <p className="text-sm text-foreground/70 mt-1">{description}</p>
        </div>
      </div>

      {/* Trip Type Selection - Top on All Views */}
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
        <h3 className="text-sm font-bold text-foreground/60 uppercase mb-4 tracking-wide flex items-center gap-2">
          {charterType === 'medical' ? (
            <>
              <Heart className="w-4 h-4 text-primary" />
              Medical Service
            </>
          ) : (
            'Trip Type'
          )}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
          {currentTripTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setTripType(type.id)}
              className={`px-3 md:px-4 py-2 rounded-lg font-semibold transition text-sm border-2 ${
                tripType === type.id
                  ? 'bg-primary/10 text-primary border-primary'
                  : 'text-foreground/70 border-foreground/20 hover:text-foreground'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Form - Full Width */}
      <div className="w-full">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6">
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700 text-sm">
                <strong>Error:</strong> {error}
              </div>
            )}

            {/* Dynamic Form Content Based on Trip Type */}
            
            {/* MEDICAL CHARTER FORMS */}
            {charterType === 'medical' && (
              <div>
                {/* Medical Charter Service */}
                {tripType === 'medical-charter' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                      <p className="text-sm text-blue-700">
                        <strong>Medical Charter:</strong> Dedicated aircraft equipped with medical personnel and specialized equipment for patient transport.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          Departure Location
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={departureSearch}
                            onChange={(e) => {
                              setDepartureSearch(e.target.value)
                              setShowDepartureDropdown(true)
                            }}
                            onFocus={() => setShowDepartureDropdown(true)}
                            placeholder="Search by airport or medical facility"
                            className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40"
                            required
                          />
                          {showDepartureDropdown && filterAirports(departureSearch).length > 0 && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-primary/20 rounded-lg shadow-lg max-h-64 overflow-y-auto z-10">
                              {filterAirports(departureSearch).map((airport, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    setDepartureSearch(`${airport.iata} - ${airport.city}, ${airport.country}`)
                                    setShowDepartureDropdown(false)
                                  }}
                                  className="w-full text-left px-4 py-2.5 hover:bg-primary/10 border-b border-primary/10 last:border-b-0 text-sm"
                                >
                                  <div className="font-semibold">{airport.iata} - {airport.city}</div>
                                  <div className="text-xs text-foreground/60">{airport.name}</div>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          Destination Location
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={arrivalSearch}
                            onChange={(e) => {
                              setArrivalSearch(e.target.value)
                              setShowArrivalDropdown(true)
                            }}
                            onFocus={() => setShowArrivalDropdown(true)}
                            placeholder="Search by airport or medical facility"
                            className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40"
                            required
                          />
                          {showArrivalDropdown && filterAirports(arrivalSearch).length > 0 && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-primary/20 rounded-lg shadow-lg max-h-64 overflow-y-auto z-10">
                              {filterAirports(arrivalSearch).map((airport, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    setArrivalSearch(`${airport.iata} - ${airport.city}, ${airport.country}`)
                                    setShowArrivalDropdown(false)
                                  }}
                                  className="w-full text-left px-4 py-2.5 hover:bg-primary/10 border-b border-primary/10 last:border-b-0 text-sm"
                                >
                                  <div className="font-semibold">{airport.iata} - {airport.city}</div>
                                  <div className="text-xs text-foreground/60">{airport.name}</div>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          <Clock className="w-4 h-4 text-primary inline mr-2" />
                          Date of Transport
                        </label>
                        <input
                          type="date"
                          name="date"
                          className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          <Users className="w-4 h-4 text-primary inline mr-2" />
                          Patients + Companions
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="number"
                            name="patients"
                            placeholder="# Patients"
                            min="1"
                            className="px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm"
                          />
                          <input
                            type="number"
                            name="companions"
                            placeholder="Companions"
                            min="0"
                            className="px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Medical Requirements & Special Equipment Needed</label>
                      <textarea
                        name="medicalRequirements"
                        placeholder="Specify patient medical conditions, oxygen requirements, ventilation needs, ICU beds, or any specialized equipment..."
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40"
                      />
                    </div>
                  </div>
                )}

                {/* Ground Transport */}
                {tripType === 'ground-transport' && (
                  <div className="space-y-6">
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Ground Transport:</strong> Specialized ground ambulance services coordinated with your medical charter.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Pickup Location</label>
                        <input type="text" name="pickupLocation" placeholder="Hospital, residence, or facility name" className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm" required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Dropoff Location</label>
                        <input type="text" name="dropoffLocation" placeholder="Destination hospital or facility" className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Date & Time Required</label>
                      <div className="grid grid-cols-2 gap-3">
                        <input type="date" name="date" className="px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm" required />
                        <input type="time" name="time" className="px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Special Instructions</label>
                      <textarea name="groundTransportNotes" placeholder="Any special requests or medical assistance needed..." rows={3} className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm placeholder-foreground/40" />
                    </div>
                  </div>
                )}

                {/* Inflight Medical Care */}
                {tripType === 'inflight-medical-care' && (
                  <div className="space-y-6">
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                      <p className="text-sm text-purple-700">
                        <strong>Inflight Medical Care:</strong> Qualified medical personnel onboard to provide care during flight.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Flight Route</label>
                        <input type="text" name="flightRoute" placeholder="From - To locations" className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm" required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Flight Duration (approx.)</label>
                        <input type="text" name="flightDuration" placeholder="e.g., 4 hours" className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Medical Personnel Requirements</label>
                      <textarea name="medicalPersonnel" placeholder="Specify required medical professionals (doctors, nurses, paramedics), experience level, and certifications needed..." rows={4} className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm placeholder-foreground/40" />
                    </div>
                  </div>
                )}

                {/* Life Support Systems */}
                {tripType === 'life-support' && (
                  <div className="space-y-6">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                      <p className="text-sm text-red-700">
                        <strong>Life Support Systems:</strong> Aircraft equipped with critical care systems for intensive patient care.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">From</label>
                        <input type="text" name="departure" placeholder="Departure point" className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm" required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">To</label>
                        <input type="text" name="arrival" placeholder="Destination" className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Life Support Equipment Needed</label>
                      <textarea name="lifeSupportEquipment" placeholder="Ventilators, ICU beds, dialysis machines, ECMO, cardiac support systems, or other specialized equipment..." rows={4} className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm placeholder-foreground/40" />
                    </div>
                  </div>
                )}

                {/* Family Travel Arrangements */}
                {tripType === 'family-travel' && (
                  <div className="space-y-6">
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                      <p className="text-sm text-yellow-700">
                        <strong>Family Travel Arrangements:</strong> Comfortable travel solutions for families accompanying patients to medical centers.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          <MapPin className="w-4 h-4 text-primary inline mr-2" />
                          Departure
                        </label>
                        <input type="text" name="departure" placeholder="Starting location" className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm" required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          <MapPin className="w-4 h-4 text-primary inline mr-2" />
                          Destination
                        </label>
                        <input type="text" name="arrival" placeholder="Medical center location" className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Travel Date</label>
                        <input type="date" name="date" className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm" required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Number of Family Members</label>
                        <input type="number" name="familyMembers" placeholder="Total travelers" min="1" className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Special Requests & Preferences</label>
                      <textarea name="familySpecialRequests" placeholder="Meal preferences, seating arrangements, accommodation needs, or any other requirements..." rows={3} className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary text-sm placeholder-foreground/40" />
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Regular trip types only for non-medical charters */}
            {charterType !== 'medical' && (
              <>
            {tripType === 'one-way' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Fly From
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={departureSearch}
                        onChange={(e) => {
                          setDepartureSearch(e.target.value)
                          setShowDepartureDropdown(true)
                        }}
                        onFocus={() => setShowDepartureDropdown(true)}
                        placeholder="Search by airport, city, ICAO, or IATA"
                        className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40"
                        required
                      />
                      {showDepartureDropdown && filterAirports(departureSearch).length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-primary/20 rounded-lg shadow-lg max-h-64 overflow-y-auto z-10">
                          {filterAirports(departureSearch).map((airport, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setDepartureSearch(`${airport.iata} - ${airport.city}, ${airport.country}`)
                                setShowDepartureDropdown(false)
                              }}
                              className="w-full text-left px-4 py-2.5 hover:bg-primary/10 border-b border-primary/10 last:border-b-0 text-sm"
                            >
                              <div className="font-semibold">{airport.iata} - {airport.city}</div>
                              <div className="text-xs text-foreground/60">
                                {airport.name} ({airport.icao}) • {airport.country}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Fly To
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={arrivalSearch}
                        onChange={(e) => {
                          setArrivalSearch(e.target.value)
                          setShowArrivalDropdown(true)
                        }}
                        onFocus={() => setShowArrivalDropdown(true)}
                        placeholder="Search by airport, city, ICAO, or IATA"
                        className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40"
                        required
                      />
                      {showArrivalDropdown && filterAirports(arrivalSearch).length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-primary/20 rounded-lg shadow-lg max-h-64 overflow-y-auto z-10">
                          {filterAirports(arrivalSearch).map((airport, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setArrivalSearch(`${airport.iata} - ${airport.city}, ${airport.country}`)
                                setShowArrivalDropdown(false)
                              }}
                              className="w-full text-left px-4 py-2.5 hover:bg-primary/10 border-b border-primary/10 last:border-b-0 text-sm"
                            >
                              <div className="font-semibold">{airport.iata} - {airport.city}</div>
                              <div className="text-xs text-foreground/60">
                                {airport.name} ({airport.icao}) • {airport.country}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Departing
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="date"
                        name="date"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                        required
                      />
                      <input
                        type="time"
                        name="time"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Passengers
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="number"
                        name="adultsCount"
                        placeholder="13+ Years"
                        min="0"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm placeholder-foreground/40"
                      />
                      <input
                        type="number"
                        name="childrenCount"
                        placeholder="2-12 Years"
                        min="0"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm placeholder-foreground/40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ROUND TRIP FORM */}
            {tripType === 'round-trip' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Departure City
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={departureSearch}
                        onChange={(e) => {
                          setDepartureSearch(e.target.value)
                          setShowDepartureDropdown(true)
                        }}
                        onFocus={() => setShowDepartureDropdown(true)}
                        placeholder="Search by airport, city, ICAO, or IATA"
                        className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40"
                        required
                      />
                      {showDepartureDropdown && filterAirports(departureSearch).length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-primary/20 rounded-lg shadow-lg max-h-64 overflow-y-auto z-10">
                          {filterAirports(departureSearch).map((airport, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setDepartureSearch(`${airport.iata} - ${airport.city}, ${airport.country}`)
                                setShowDepartureDropdown(false)
                              }}
                              className="w-full text-left px-4 py-2.5 hover:bg-primary/10 border-b border-primary/10 last:border-b-0 text-sm"
                            >
                              <div className="font-semibold">{airport.iata} - {airport.city}</div>
                              <div className="text-xs text-foreground/60">{airport.name} ({airport.icao}) • {airport.country}</div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Destination City
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={arrivalSearch}
                        onChange={(e) => {
                          setArrivalSearch(e.target.value)
                          setShowArrivalDropdown(true)
                        }}
                        onFocus={() => setShowArrivalDropdown(true)}
                        placeholder="Search by airport, city, ICAO, or IATA"
                        className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40"
                        required
                      />
                      {showArrivalDropdown && filterAirports(arrivalSearch).length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-primary/20 rounded-lg shadow-lg max-h-64 overflow-y-auto z-10">
                          {filterAirports(arrivalSearch).map((airport, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setArrivalSearch(`${airport.iata} - ${airport.city}, ${airport.country}`)
                                setShowArrivalDropdown(false)
                              }}
                              className="w-full text-left px-4 py-2.5 hover:bg-primary/10 border-b border-primary/10 last:border-b-0 text-sm"
                            >
                              <div className="font-semibold">{airport.iata} - {airport.city}</div>
                              <div className="text-xs text-foreground/60">{airport.name} ({airport.icao}) • {airport.country}</div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Outbound Date
                    </label>
                    <input
                      type="date"
                      name="outboundDate"
                      className="w-full px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Return Date
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      className="w-full px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Adults (13+ Years)
                    </label>
                    <input
                      type="number"
                      name="adultsCount"
                      placeholder="Number of adults"
                      min="0"
                      className="w-full px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm placeholder-foreground/40"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Children (2-12 Years)
                    </label>
                    <input
                      type="number"
                      name="childrenCount"
                      placeholder="Number of children"
                      min="0"
                      className="w-full px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm placeholder-foreground/40"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* MULTI-LEG FORM */}
            {tripType === 'multi-leg' && (
              <div>
                <p className="text-sm text-foreground/70 mb-4">Define each leg of your journey</p>
                
                <div className="space-y-6 mb-6">
                  <div className="border-2 border-primary/20 rounded-lg p-4 bg-primary/5">
                    <h4 className="font-semibold text-foreground mb-4">Leg 1</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="leg1From"
                        placeholder="From Location"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm placeholder-foreground/40"
                        required
                      />
                      <input
                        type="text"
                        name="leg1To"
                        placeholder="To Location"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm placeholder-foreground/40"
                        required
                      />
                      <input
                        type="date"
                        name="leg1Date"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                        required
                      />
                      <input
                        type="time"
                        name="leg1Time"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                      />
                    </div>
                  </div>

                  <div className="border-2 border-primary/20 rounded-lg p-4 bg-primary/5">
                    <h4 className="font-semibold text-foreground mb-4">Leg 2</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="leg2From"
                        placeholder="From Location"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm placeholder-foreground/40"
                        required
                      />
                      <input
                        type="text"
                        name="leg2To"
                        placeholder="To Location"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm placeholder-foreground/40"
                        required
                      />
                      <input
                        type="date"
                        name="leg2Date"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                        required
                      />
                      <input
                        type="time"
                        name="leg2Time"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                      />
                    </div>
                  </div>

                  <div className="border-2 border-primary/20 rounded-lg p-4 bg-primary/5">
                    <h4 className="font-semibold text-foreground mb-4">Leg 3 (Optional)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="leg3From"
                        placeholder="From Location"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm placeholder-foreground/40"
                      />
                      <input
                        type="text"
                        name="leg3To"
                        placeholder="To Location"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm placeholder-foreground/40"
                      />
                      <input
                        type="date"
                        name="leg3Date"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                      />
                      <input
                        type="time"
                        name="leg3Time"
                        className="px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Total Passengers
                    </label>
                    <input
                      type="number"
                      name="totalPassengers"
                      placeholder="Number of passengers"
                      min="0"
                      className="w-full px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm placeholder-foreground/40"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* CARGO FORM */}
            {tripType === 'cargo' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Pickup Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={departureSearch}
                        onChange={(e) => {
                          setDepartureSearch(e.target.value)
                          setShowDepartureDropdown(true)
                        }}
                        onFocus={() => setShowDepartureDropdown(true)}
                        placeholder="Search by airport, city, ICAO, or IATA"
                        className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40"
                        required
                      />
                      {showDepartureDropdown && filterAirports(departureSearch).length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-primary/20 rounded-lg shadow-lg max-h-64 overflow-y-auto z-10">
                          {filterAirports(departureSearch).map((airport, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setDepartureSearch(`${airport.iata} - ${airport.city}, ${airport.country}`)
                                setShowDepartureDropdown(false)
                              }}
                              className="w-full text-left px-4 py-2.5 hover:bg-primary/10 border-b border-primary/10 last:border-b-0 text-sm"
                            >
                              <div className="font-semibold">{airport.iata} - {airport.city}</div>
                              <div className="text-xs text-foreground/60">{airport.name} ({airport.icao}) • {airport.country}</div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Delivery Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={arrivalSearch}
                        onChange={(e) => {
                          setArrivalSearch(e.target.value)
                          setShowArrivalDropdown(true)
                        }}
                        onFocus={() => setShowArrivalDropdown(true)}
                        placeholder="Search by airport, city, ICAO, or IATA"
                        className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40"
                        required
                      />
                      {showArrivalDropdown && filterAirports(arrivalSearch).length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-primary/20 rounded-lg shadow-lg max-h-64 overflow-y-auto z-10">
                          {filterAirports(arrivalSearch).map((airport, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setArrivalSearch(`${airport.iata} - ${airport.city}, ${airport.country}`)
                                setShowArrivalDropdown(false)
                              }}
                              className="w-full text-left px-4 py-2.5 hover:bg-primary/10 border-b border-primary/10 last:border-b-0 text-sm"
                            >
                              <div className="font-semibold">{airport.iata} - {airport.city}</div>
                              <div className="text-xs text-foreground/60">{airport.name} ({airport.icao}) • {airport.country}</div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Cargo Type</label>
                    <select
                      name="cargoType"
                      className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                      required
                    >
                      <option value="">Select cargo type</option>
                      <option value="perishable">Perishable Goods</option>
                      <option value="hazmat">Hazardous Materials</option>
                      <option value="valuables">Valuables/Art</option>
                      <option value="equipment">Equipment</option>
                      <option value="machinery">Machinery</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Approximate Weight (kg)</label>
                    <input
                      type="number"
                      name="cargoWeight"
                      placeholder="Weight in kilograms"
                      min="0"
                      className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm placeholder-foreground/40"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      className="w-full px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Special Handling Requirements</label>
                    <input
                      type="text"
                      name="specialHandling"
                      placeholder="e.g., Temperature controlled, Fragile handling"
                      className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm placeholder-foreground/40"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* GENERAL INQUIRY FORM */}
            {tripType === 'general' && (
              <div className="space-y-4">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-700">
                    Share your inquiry details and let us know how we can assist you with your charter needs.
                  </p>
                </div>
              </div>
            )}

            {/* Contact Person */}
            <div className="border-t border-primary/10 pt-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Contact Person</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  className="px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  className="px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <select
                    value={selectedCountryCode}
                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                    className="w-full px-3 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                  >
                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.code} {item.country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                    required
                  />
                </div>
              </div>
            </div>
              </>
            )}

            {/* Comments and Source - shown for all charter types */}
            <div className="border-t border-primary/10 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Comments
                </label>
                <textarea
                  name="comments"
                  placeholder="Please advise if you have any special requirements for your flight."
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">How you found us</label>
                <select
                  name="source"
                  className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                >
                  <option value="">Select an option</option>
                  {sourceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Fields Component */}
            {additionalFieldsComponent && (
              <div className="border-t border-primary/10 pt-6">{additionalFieldsComponent}</div>
            )}

            {/* Submit Button */}
            <div className="border-t border-primary/10 pt-6 flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm stagger-on-hover tracking-tighter"
              >
                {isLoading ? <StaggeredText text="Submitting..." delay={0.01} /> : <StaggeredText text="Submit" delay={0.01} />}
                {!isLoading && <ArrowRight className="w-5 h-5" />}
              </button>
            </div>
          </form>
      </div>
    </div>
  )
}
