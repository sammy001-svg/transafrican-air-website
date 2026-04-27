"use client"

import { Mail, Phone, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function GroupAircraftGuidePage() {
  const [selectedCapacity, setSelectedCapacity] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState("")

  const groupAircrafts = [
    {
      id: 1,
      name: "Bombardier Q400",
      image: "/bombardier-q400-aircraft.jpg",
      capacity: 70,
      description: "Twin-turboprop regional airliner",
    },
    {
      id: 2,
      name: "Bombardier Q300",
      image: "/bombardier-q300-aircraft.jpg",
      capacity: 50,
      description: "Regional turboprop transport aircraft",
    },
    {
      id: 3,
      name: "DHC-8",
      image: "/dhc-8-dash-aircraft.jpg",
      capacity: 60,
      description: "De Havilland twin-engine turboprop",
    },
    {
      id: 4,
      name: "Boeing 737",
      image: "/boeing-737-aircraft.jpg",
      capacity: 180,
      description: "Narrow-body jet airliner",
    },
    {
      id: 5,
      name: "Boeing 777",
      image: "/boeing-777-aircraft.jpg",
      capacity: 350,
      description: "Wide-body long-range jet",
    },
    {
      id: 6,
      name: "Boeing 787 Dreamliner",
      image: "/boeing-787-dreamliner-aircraft.jpg",
      capacity: 242,
      description: "Modern wide-body jet",
    },
    {
      id: 7,
      name: "Airbus A320",
      image: "/airbus-a320-aircraft.jpg",
      capacity: 180,
      description: "Single-aisle commercial jet",
    },
    {
      id: 8,
      name: "Airbus A330",
      image: "/airbus-a330-aircraft.jpg",
      capacity: 295,
      description: "Wide-body long-range jet",
    },
    {
      id: 9,
      name: "Airbus A380",
      image: "/airbus-a380-aircraft.jpg",
      capacity: 555,
      description: "World's largest passenger airliner",
    },
    {
      id: 10,
      name: "Fokker 70",
      image: "/fokker-70-aircraft.jpg",
      capacity: 80,
      description: "Dutch-built regional jet",
    },
    {
      id: 11,
      name: "Fokker 50",
      image: "/fokker-50-aircraft.jpg",
      capacity: 58,
      description: "Twin-turboprop regional transport",
    },
    {
      id: 12,
      name: "Embraer E170",
      image: "/embraer-e170-aircraft.jpg",
      capacity: 78,
      description: "Regional jet transport",
    },
  ]

  const filteredAircrafts = groupAircrafts
    .filter((aircraft) => {
      if (selectedCapacity === "50-100") return aircraft.capacity >= 50 && aircraft.capacity <= 100
      if (selectedCapacity === "100-200") return aircraft.capacity > 100 && aircraft.capacity <= 200
      if (selectedCapacity === "200-300") return aircraft.capacity > 200 && aircraft.capacity <= 300
      if (selectedCapacity === "300+") return aircraft.capacity > 300
      return true
    })
    .filter((aircraft) => aircraft.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Group Aircraft</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Browse our comprehensive collection of modern commercial aircraft perfect for group charters, events, and
            large passenger movements across Africa.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20 flex flex-col h-fit">
                <h3 className="text-lg font-bold text-foreground mb-6">Refine Your Search</h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-2">Search Aircraft</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter aircraft name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    />
                  </div>
                </div>

                {/* Capacity Filter */}
                <div className="mb-8 flex-1">
                  <label className="block text-sm font-semibold text-foreground mb-3">Passenger Capacity</label>
                  <div className="space-y-2">
                    {[
                      { value: "", label: "All Capacities" },
                      { value: "50-100", label: "50-100 Passengers" },
                      { value: "100-200", label: "100-200 Passengers" },
                      { value: "200-300", label: "200-300 Passengers" },
                      { value: "300+", label: "300+ Passengers" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="capacity"
                          value={option.value}
                          checked={selectedCapacity === option.value}
                          onChange={(e) => setSelectedCapacity(e.target.value)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm text-foreground/80 group-hover:text-foreground transition">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Charter Button - Fixed at bottom */}
                <Link
                  href="/get-quote"
                  className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold hover:bg-primary/90 transition text-center border-b-4 border-primary/30 hover:border-primary/50"
                >
                  Get Quote for Group Charter
                </Link>
              </div>
            </div>

            {/* Aircraft Grid */}
            <div className="lg:col-span-3">
              {filteredAircrafts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredAircrafts.map((aircraft) => (
                    <div
                      key={aircraft.id}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                    >
                      <div className="h-40 overflow-hidden bg-gray-200">
                        <img
                          src={aircraft.image || "/placeholder.svg"}
                          alt={aircraft.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-primary mb-1">{aircraft.name}</h3>
                        <p className="text-sm text-foreground/70 mb-3">{aircraft.description}</p>
                        <p className="text-sm font-semibold text-primary mb-4">Passengers: {aircraft.capacity}</p>
                        <Link
                          href="/get-quote"
                          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group"
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-foreground/70">No aircraft found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Group Charter?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Contact our team to discuss your group travel requirements and get a customized quote for your journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold mb-2">Charters Enquiries</p>
                <a href="mailto:charters@transafricanair.com" className="text-primary hover:text-primary/80 transition">
                  charters@transafricanair.com
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold mb-2">Sales & Commercial</p>
                <a href="mailto:sales@transafricanair.com" className="text-primary hover:text-primary/80 transition">
                  sales@transafricanair.com
                </a>
              </div>
            </div>

            <Link
              href="/get-quote"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Get A Quote
            </Link>
          </div>
        </div>
  </section>
  </main>
  )
}
