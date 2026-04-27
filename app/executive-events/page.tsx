"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ExecutiveEventsPage() {
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
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Executive Events</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Luxury transport for corporate retreats, conferences, and high-profile business events with premium service
            standards.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Executive Event Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Corporate Retreats",
                  description: "Luxurious transport for executive retreats and team-building events",
                },
                {
                  title: "Conference Travel",
                  description: "Group travel solutions for industry conferences and trade shows",
                },
                {
                  title: "VIP Accommodations",
                  description: "Premium cabin configurations with luxury amenities and services",
                },
                {
                  title: "Meeting Facilities",
                  description: "Onboard workspace with high-speed connectivity for business discussions",
                },
                {
                  title: "Concierge Services",
                  description: "Full concierge support for ground arrangements and hospitality",
                },
                {
                  title: "Discretion & Privacy",
                  description: "Confidential operations for sensitive corporate events and executives",
                },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-primary/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">Executive Event Charter - Get a Quote</h2>
            <p className="text-sm text-foreground/70 mb-6">Contact our executive event specialists to arrange premium charter transport for your corporate gathering or high-profile event.</p>

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
                  <label className="block text-sm font-semibold text-foreground mb-2">Date of Event</label>
                  <input 
                    type="date"
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                  />
                </div>
              </div>

              {/* Row 2: Contact Person */}
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

                {/* Phone and Guests Count */}
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
                    type="number"
                    placeholder="Number of Guests"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition flex items-center gap-2"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
