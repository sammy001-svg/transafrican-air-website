"use client"

import { Mail, Phone, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"

export default function CargoGuidePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPayload, setSelectedPayload] = useState("all")

  const cargoAircraft = [
    {
      id: 1,
      name: "Boeing 777F",
      manufacturer: "Boeing",
      payload: "102,000",
      mtow: "347,800",
      passengers: 0,
      image: "/boeing-777f-cargo-aircraft.jpg",
    },
    {
      id: 2,
      name: "Boeing 767-300F",
      manufacturer: "Boeing",
      payload: "58,500",
      mtow: "198,100",
      passengers: 0,
      image: "/boeing-767-cargo-aircraft.jpg",
    },
    {
      id: 3,
      name: "Boeing 747-8F",
      manufacturer: "Boeing",
      payload: "140,000",
      mtow: "447,700",
      passengers: 0,
      image: "/boeing-747-cargo-aircraft.jpg",
    },
    {
      id: 4,
      name: "Boeing 777-200F",
      manufacturer: "Boeing",
      payload: "100,000",
      mtow: "345,800",
      passengers: 0,
      image: "/boeing-777-200f.jpg",
    },
    {
      id: 5,
      name: "Airbus A330-200F",
      manufacturer: "Airbus",
      payload: "70,000",
      mtow: "242,000",
      passengers: 0,
      image: "/airbus-a330-cargo.jpg",
    },
    {
      id: 6,
      name: "Airbus A300-600F",
      manufacturer: "Airbus",
      payload: "50,000",
      mtow: "175,000",
      passengers: 0,
      image: "/airbus-a300-cargo.jpg",
    },
    {
      id: 7,
      name: "Airbus A400M",
      manufacturer: "Airbus",
      payload: "37,000",
      mtow: "141,000",
      passengers: 0,
      image: "/airbus-a400m.jpg",
    },
    {
      id: 8,
      name: "Ilyushin IL-76",
      manufacturer: "Ilyushin",
      payload: "60,000",
      mtow: "190,000",
      passengers: 0,
      image: "/ilyushin-il-76.jpg",
    },
    {
      id: 9,
      name: "Antonov An-124",
      manufacturer: "Antonov",
      payload: "150,000",
      mtow: "405,000",
      passengers: 0,
      image: "/antonov-an-124.jpg",
    },
    {
      id: 10,
      name: "Antonov An-225",
      manufacturer: "Antonov",
      payload: "250,000",
      mtow: "640,000",
      passengers: 0,
      image: "/antonov-an-225.jpg",
    },
    {
      id: 11,
      name: "Embraer E190F",
      manufacturer: "Embraer",
      payload: "22,000",
      mtow: "64,850",
      passengers: 0,
      image: "/embraer-e190-cargo.jpg",
    },
    {
      id: 12,
      name: "ATR 72F",
      manufacturer: "ATR",
      payload: "9,500",
      mtow: "23,000",
      passengers: 0,
      image: "/atr-72-cargo.jpg",
    },
  ]

  const payloadRanges = [
    { label: "All", value: "all" },
    { label: "0-50,000 kg", value: "small", min: 0, max: 50000 },
    { label: "50,000-100,000 kg", value: "medium", min: 50000, max: 100000 },
    { label: "100,000+ kg", value: "large", min: 100000, max: Number.POSITIVE_INFINITY },
  ]

  const filteredAircraft = useMemo(() => {
    return cargoAircraft.filter((aircraft) => {
      const matchesSearch =
        aircraft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        aircraft.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())

      if (selectedPayload === "all") return matchesSearch

      const range = payloadRanges.find((r) => r.value === selectedPayload)
      if (!range) return matchesSearch

      const payload = Number.parseInt(aircraft.payload.replace(/,/g, ""))
      return matchesSearch && payload >= range.min && payload <= range.max
    })
  }, [searchTerm, selectedPayload])

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Cargo Aircraft Guide</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Explore our comprehensive cargo aircraft fleet designed for heavy lift operations, specialized freight
            handling, and global logistics solutions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with filters */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-primary mb-6">Refine your search</h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-2">Search Aircraft</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Boeing, Airbus..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    />
                    <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Payload Range */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Payload Capacity</h4>
                  <div className="space-y-2">
                    {payloadRanges.map((range) => (
                      <label key={range.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="payload"
                          value={range.value}
                          checked={selectedPayload === range.value}
                          onChange={(e) => setSelectedPayload(e.target.value)}
                          className="w-4 h-4 text-primary cursor-pointer"
                        />
                        <span className="ml-2 text-sm text-foreground/80">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Charter This Aircraft */}
              <div className="bg-primary text-white p-6 rounded-lg mt-6">
                <h4 className="font-bold mb-2">Charter this aircraft</h4>
                <p className="text-sm mb-4 text-primary-foreground/90">
                  Need a specific cargo aircraft? Contact our team.
                </p>
            <Link
              href="/aircraft-guide"
              className="text-primary hover:underline"
            >
              Aircraft Fleet
            </Link>
              </div>
            </div>

            {/* Aircraft Grid */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-sm text-foreground/70">
                  Showing <span className="font-semibold text-foreground">{filteredAircraft.length}</span> aircraft
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAircraft.map((aircraft) => (
                  <div
                    key={aircraft.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="h-40 bg-gray-100 overflow-hidden">
                      <img
                        src={aircraft.image || "/placeholder.svg"}
                        alt={aircraft.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-primary mb-1">{aircraft.name}</h3>
                      <p className="text-sm text-foreground/70 mb-3">{aircraft.manufacturer}</p>
                      <div className="space-y-1 text-sm mb-4">
                        <p>
                          <span className="font-semibold">Payload:</span> {aircraft.payload} kg
                        </p>
                        <p>
                          <span className="font-semibold">MTOW:</span> {aircraft.mtow} kg
                        </p>
                      </div>
                      <Link
                        href="/get-quote"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {filteredAircraft.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-foreground/70 mb-4">No aircraft found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedPayload("all")
                    }}
                    className="text-primary font-semibold hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Cargo Charter Support?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Our cargo specialists are ready to assist with your freight requirements and provide competitive quotes.
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
