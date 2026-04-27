"use client"

import Link from "next/link"
import { ArrowRight, Thermometer, CheckCircle, Clock, Shield } from "lucide-react"
import { useState } from "react"

export default function PerishableCargoPage() {
  const [departureSearch, setDepartureSearch] = useState("")
  const [arrivalSearch, setArrivalSearch] = useState("")
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false)
  const [showArrivalDropdown, setShowArrivalDropdown] = useState(false)

  const airports = [
    { name: "Jomo Kenyatta International", city: "Nairobi", iata: "NBO", icao: "KBIA", country: "Kenya" },
    { name: "Julius Nyerere International", city: "Dar es Salaam", iata: "DAR", icao: "HHDA", country: "Tanzania" },
    { name: "OR Tambo International", city: "Johannesburg", iata: "JNB", icao: "FAOR", country: "South Africa" },
    { name: "Cape Town International", city: "Cape Town", iata: "CPT", icao: "FACT", country: "South Africa" },
    { name: "London Heathrow", city: "London", iata: "LHR", icao: "EGLL", country: "United Kingdom" },
    { name: "Paris Charles de Gaulle", city: "Paris", iata: "CDG", icao: "LFPG", country: "France" },
    { name: "Frankfurt am Main", city: "Frankfurt", iata: "FRA", icao: "EDDF", country: "Germany" },
    { name: "Dubai International", city: "Dubai", iata: "DXB", icao: "OMDB", country: "UAE" },
    { name: "Singapore Changi", city: "Singapore", iata: "SIN", icao: "WSSS", country: "Singapore" },
    { name: "Hong Kong International", city: "Hong Kong", iata: "HKG", icao: "VHHH", country: "Hong Kong" },
    { name: "Tokyo Haneda", city: "Tokyo", iata: "HND", icao: "RJTT", country: "Japan" },
    { name: "John F. Kennedy International", city: "New York", iata: "JFK", icao: "KJFK", country: "United States" },
    { name: "Los Angeles International", city: "Los Angeles", iata: "LAX", icao: "KLAX", country: "United States" },
    { name: "Toronto Pearson", city: "Toronto", iata: "YYZ", icao: "CYYZ", country: "Canada" },
    { name: "Sydney Kingsford Smith", city: "Sydney", iata: "SYD", icao: "YSSY", country: "Australia" },
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
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                Perishable Cargo Transport
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Premium temperature-controlled logistics for fresh produce, seafood, and perishable goods with zero compromise on quality.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/air-cargo-logistic-containers-are-loading-to-an-airplane-tYUQZ6cRjxgEe6aJZgdYOP3iIkuldP.jpg"
                alt="Perishable cargo in refrigerated container"
                className="w-full h-full object-cover object-center"
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
            Superior Cold Chain Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Thermometer className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Precision Temperature</h3>
              </div>
              <p className="text-sm text-foreground/80">
                Precise climate control within critical temperature ranges for optimal preservation of perishable goods.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Quality Assurance</h3>
              </div>
              <p className="text-sm text-foreground/80">
                Real-time monitoring and certification ensuring regulatory compliance and product integrity throughout transport.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Direct Routing</h3>
              </div>
              <p className="text-sm text-foreground/80">
                Point-to-point flights minimizing transit time to maintain freshness and extend shelf life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">Our Perishable Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Fresh Produce Transport",
              "Seafood & Fish Logistics",
              "Frozen Goods Shipments",
              "Dairy Product Transport",
              "Flowers & Cut Produce",
              "Specialty Foods & Delicacies"
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-primary/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">Perishable Cargo Charter - Get a Quote</h2>
            <p className="text-sm text-foreground/70 mb-6">Request a perishable cargo charter quote with guaranteed cold chain integrity and timely delivery.</p>

            <form className="space-y-6">
              {/* Row 1: Departure, Arrival, Date */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <label className="block text-sm font-semibold text-foreground mb-2">Departure Location</label>
                  <input
                    type="text"
                    value={departureSearch}
                    onChange={(e) => {
                      setDepartureSearch(e.target.value)
                      setShowDepartureDropdown(true)
                    }}
                    onFocus={() => setShowDepartureDropdown(true)}
                    placeholder="Search city, airport, IATA, ICAO"
                    className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40"
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
                  <label className="block text-sm font-semibold text-foreground mb-2">Arrival Location</label>
                  <input
                    type="text"
                    value={arrivalSearch}
                    onChange={(e) => {
                      setArrivalSearch(e.target.value)
                      setShowArrivalDropdown(true)
                    }}
                    onFocus={() => setShowArrivalDropdown(true)}
                    placeholder="Search city, airport, IATA, ICAO"
                    className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40"
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
                  <label className="block text-sm font-semibold text-foreground mb-2">Delivery Date</label>
                  <input 
                    type="date"
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                  />
                </div>
              </div>

              {/* Row 2: Cargo Type & Temperature */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Cargo Type</label>
                  <select className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm">
                    <option>Select Cargo Type</option>
                    <option>Fresh Produce</option>
                    <option>Seafood</option>
                    <option>Meat & Dairy</option>
                    <option>Pharmaceuticals</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Temperature Range (°C)</label>
                  <input 
                    type="text"
                    placeholder="e.g., 2-8°C or -18°C"
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Weight (kg)</label>
                  <input 
                    type="number"
                    placeholder="Approximate weight"
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                </div>
              </div>

              {/* Row 3: Contact Person */}
              <div className="border-t border-primary/10 pt-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Contact Person</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <input 
                    type="text"
                    placeholder="First Name *"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                  <input 
                    type="text"
                    placeholder="Last Name *"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                  <input 
                    type="email"
                    placeholder="Email *"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <select className="px-3 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm max-w-[150px]">
                      <option>Country Code</option>
                      {countryCodes.map((item) => (
                        <option key={item.code} value={item.code}>
                          {item.code} {item.country}
                        </option>
                      ))}
                    </select>
                    <input 
                      type="tel"
                      placeholder="Phone *"
                      className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                    />
                  </div>
                  <input 
                    type="text"
                    placeholder="Company / Shipper Name"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition flex items-center gap-2"
              >
                Request Perishable Charter
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
