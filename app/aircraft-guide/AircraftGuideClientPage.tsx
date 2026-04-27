"use client"

import { Mail, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AircraftGuideClientPage() {
  const aircraftCategories = [
    {
      id: "cargo",
      title: "Cargo Aircraft",
      description: "Specialized aircraft for transporting goods, equipment, and freight across Africa and beyond.",
      image: "/images/cargo-loading.jpg",
      features: [
        "High payload capacity",
        "Wide cargo doors",
        "Temperature controlled options",
        "Quick turnaround times",
      ],
    },
    {
      id: "private-jets",
      title: "Private Aircrafts",
      description: "Executive and luxury aircraft for business travel and private charters with premium comfort.",
      image: "/images/private-aircraft-flight.jpg",
      features: ["Luxury seating", "Direct point-to-point routes", "VIP privacy", "Flexible scheduling"],
    },
    {
      id: "passenger",
      title: "Group Aircraft", // renamed from "Passenger Aircraft" to "Group Aircraft"
      description: "Modern commercial airliners for group charters and scheduled passenger services.",
      image: "/images/regional-bush-aircraft.jpg",
      features: [
        "50+ passenger capacity",
        "Full service amenities",
        "Multi-class configuration",
        "Advanced safety features",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Aircraft Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Aircraft Guide</h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Each aircraft category is specifically equipped and configured to meet the unique demands of different
              charter operations. Our diverse fleet ensures we can meet virtually any aviation requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aircraftCategories.map((aircraft) => (
              <div
                key={aircraft.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="h-32 overflow-hidden bg-gray-100">
                  <img
                    src={aircraft.image || "/placeholder.svg"}
                    alt={aircraft.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-primary mb-2">{aircraft.title}</h3>
                  <p className="text-sm text-foreground/70 mb-3 flex-grow">{aircraft.description}</p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {aircraft.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span className="text-xs text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  {aircraft.id === "private-jets" ? (
                    <Link
                      href={`/private-jets-guide`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <Link
                      href={
                        aircraft.id === "cargo"
                          ? "/cargo-guide"
                          : aircraft.id === "passenger"
                            ? "/passenger-guide"
                            : `/${aircraft.id}-guide`
                      }
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
