"use client"

import { ArrowRight, Heart, Clock, Users, Shield } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useQuoteSubmission } from "@/hooks/use-quote-submission"

export default function MedicalChartersPage() {
  const [departureSearch, setDepartureSearch] = useState("")
  const [arrivalSearch, setArrivalSearch] = useState("")
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false)
  const [showArrivalDropdown, setShowArrivalDropdown] = useState(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState("+254")
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const { submitQuote, isLoading, error, success, referenceNumber, reset } = useQuoteSubmission()

  const airports = [
    { name: "Jomo Kenyatta International", city: "Nairobi", iata: "NBO", icao: "KBIA", country: "Kenya" },
    { name: "Julius Nyerere International", city: "Dar es Salaam", iata: "DAR", icao: "HHDA", country: "Tanzania" },
    { name: "Bole International", city: "Addis Ababa", iata: "ADD", icao: "HAAB", country: "Ethiopia" },
    { name: "Entebbe International", city: "Kampala", iata: "EBB", icao: "HUEN", country: "Uganda" },
    { name: "OR Tambo International", city: "Johannesburg", iata: "JNB", icao: "FAOR", country: "South Africa" },
    { name: "Cape Town International", city: "Cape Town", iata: "CPT", icao: "FACT", country: "South Africa" },
    { name: "London Heathrow", city: "London", iata: "LHR", icao: "EGLL", country: "United Kingdom" },
    { name: "Paris Charles de Gaulle", city: "Paris", iata: "CDG", icao: "LFPG", country: "France" },
    { name: "Frankfurt am Main", city: "Frankfurt", iata: "FRA", icao: "EDDF", country: "Germany" },
    { name: "Dubai International", city: "Dubai", iata: "DXB", icao: "OMDB", country: "UAE" },
    { name: "Singapore Changi", city: "Singapore", iata: "SIN", icao: "WSSS", country: "Singapore" },
    { name: "Hong Kong International", city: "Hong Kong", iata: "HKG", icao: "VHHH", country: "Hong Kong" },
    { name: "Tokyo Haneda", city: "Tokyo", iata: "HND", icao: "RJTT", country: "Japan" },
    { name: "Delhi Indira Gandhi", city: "Delhi", iata: "DEL", icao: "VIDP", country: "India" },
    { name: "John F. Kennedy International", city: "New York", iata: "JFK", icao: "KJFK", country: "United States" },
    { name: "Los Angeles International", city: "Los Angeles", iata: "LAX", icao: "KLAX", country: "United States" },
    { name: "Toronto Pearson", city: "Toronto", iata: "YYZ", icao: "CYYZ", country: "Canada" },
    { name: "Sydney Kingsford Smith", city: "Sydney", iata: "SYD", icao: "YSSY", country: "Australia" },
    { name: "Auckland International", city: "Auckland", iata: "AKL", icao: "NZAA", country: "New Zealand" },
    { name: "Cairo International", city: "Cairo", iata: "CAI", icao: "HECA", country: "Egypt" },
  ]

  const countryCodes = [
    { code: "+1", country: "United States" },
    { code: "+7", country: "Russia" },
    { code: "+20", country: "Egypt" },
    { code: "+27", country: "South Africa" },
    { code: "+33", country: "France" },
    { code: "+44", country: "United Kingdom" },
    { code: "+49", country: "Germany" },
    { code: "+65", country: "Singapore" },
    { code: "+81", country: "Japan" },
    { code: "+86", country: "China" },
    { code: "+91", country: "India" },
    { code: "+212", country: "Morocco" },
    { code: "+254", country: "Kenya" },
    { code: "+255", country: "Tanzania" },
    { code: "+256", country: "Uganda" },
    { code: "+27", country: "South Africa" },
    { code: "+234", country: "Nigeria" },
    { code: "+233", country: "Ghana" },
    { code: "+971", country: "UAE" },
    { code: "+852", country: "Hong Kong" },
  ]

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
      departure: formData.get('departure') as string,
      arrival: formData.get('arrival') as string,
      date: formData.get('date') as string,
      charterType: 'medical',
      notes: formData.get('notes') as string,
    }

    const result = await submitQuote(data)
    if (result.success) {
      setFormSubmitted(true)
      e.currentTarget.reset()
      setDepartureSearch('')
      setArrivalSearch('')
    }
  }

  if (formSubmitted && referenceNumber) {
    return (
      <main className="min-h-screen bg-background text-foreground">
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
                onClick={() => {
                  setFormSubmitted(false)
                  reset()
                }}
                className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition"
              >
                Submit Another Quote
              </button>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header with Image */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                Medical Charters
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Specialized air transport for medical professionals, patients, and healthcare equipment with full life support capabilities and trained personnel.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-red-white-and-blue-air-ambulance-helicopter-N4kM6p9tkyJbYnERIf5ENoKuBkLkjR.jpg"
                alt="Medical charter aircraft with medical staff"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">
            Comprehensive Medical Charter Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Patient Transport</h3>
              <p className="text-foreground/80 leading-relaxed">
                Safe and comfortable transport for medical patients requiring specialized care during flight. Our aircraft are equipped with medical monitoring equipment and staffed with qualified healthcare professionals.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Medical Team Transport</h3>
              <p className="text-foreground/80 leading-relaxed">
                Rapid deployment of medical teams, specialists, and surgical teams to emergency locations or medical facilities for critical interventions and patient care.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Equipment Transport</h3>
              <p className="text-foreground/80 leading-relaxed">
                Secure transport of sensitive medical equipment, diagnostic devices, and emergency medical supplies with temperature and pressure control where required.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Emergency Medical Evacuation</h3>
              <p className="text-foreground/80 leading-relaxed">
                Urgent medical evacuation services from remote areas or during medical emergencies with full intensive care capabilities on board.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">
            Why Choose Our Medical Charters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Medical Compliance</h3>
                <p className="text-sm text-foreground/80">
                  All aircraft meet international medical transport standards and regulations with certified medical equipment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">24/7 Availability</h3>
                <p className="text-sm text-foreground/80">
                  Round-the-clock availability for urgent medical evacuations and time-critical patient transport.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Trained Personnel</h3>
                <p className="text-sm text-foreground/80">
                  Experienced medical crew and flight attendants trained in emergency medical procedures and patient care.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Safety & Hygiene</h3>
                <p className="text-sm text-foreground/80">
                  Strict sanitation protocols, HEPA filtration systems, and infection control measures for patient safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">
            Related Emergency Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/ground-transport" className="bg-muted rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Ground Transport</h3>
              <p className="text-sm text-foreground/80 mb-4">
                Coordinated ground transport services to complement your medical air charter.
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/in-flight-care" className="bg-muted rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">In Flight Care</h3>
              <p className="text-sm text-foreground/80 mb-4">
                Comprehensive in-flight medical care and monitoring services during transport.
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/life-support-systems" className="bg-muted rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Life Support Systems</h3>
              <p className="text-sm text-foreground/80 mb-4">
                Advanced life support and intensive care equipment available on all medical charters.
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-primary/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">Medical Charter - Get a Quote</h2>
            <p className="text-sm text-foreground/70 mb-6">Contact our medical charter specialists to arrange patient transport or emergency medical evacuations.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700 text-sm">
                  <strong>Error:</strong> {error}
                </div>
              )}

              {/* Row 1: Departure, Arrival, Date */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <label className="block text-sm font-semibold text-foreground mb-2">Departure Location *</label>
                  <input
                    type="text"
                    name="departure"
                    value={departureSearch}
                    onChange={(e) => {
                      setDepartureSearch(e.target.value)
                      setShowDepartureDropdown(true)
                    }}
                    onFocus={() => setShowDepartureDropdown(true)}
                    placeholder="Search city, airport, IATA, ICAO"
                    className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40"
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
                <div className="relative">
                  <label className="block text-sm font-semibold text-foreground mb-2">Arrival Location *</label>
                  <input
                    type="text"
                    name="arrival"
                    value={arrivalSearch}
                    onChange={(e) => {
                      setArrivalSearch(e.target.value)
                      setShowArrivalDropdown(true)
                    }}
                    onFocus={() => setShowArrivalDropdown(true)}
                    placeholder="Search city, airport, IATA, ICAO"
                    className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40"
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
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Date of Travel *</label>
                  <input 
                    type="date"
                    name="date"
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Contact Person */}
              <div className="border-t border-primary/10 pt-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Contact Person</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <input 
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                    required
                  />
                  <input 
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                    required
                  />
                  <input 
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                    required
                  />
                </div>

                {/* Phone and Notes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <select 
                      value={selectedCountryCode}
                      onChange={(e) => setSelectedCountryCode(e.target.value)}
                      className="px-3 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm max-w-[150px]"
                    >
                      {countryCodes.map((item) => (
                        <option key={item.code} value={item.code}>
                          {item.code} {item.country}
                        </option>
                      ))}
                    </select>
                    <input 
                      type="tel"
                      name="phone"
                      placeholder="Phone *"
                      className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                      required
                    />
                  </div>
                  <input 
                    type="text"
                    name="notes"
                    placeholder="Additional Notes"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? 'Submitting...' : 'Request Medical Charter'}
                {!isLoading && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
