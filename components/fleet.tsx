"use client"

import Image from "next/image"
import { StaggeredText } from "./staggered-text"

interface Aircraft {
  id: string
  name: string
  image: string
  specs: {
    label: string
    value: string
  }[]
  description: string[]
}

const aircraftData: Aircraft[] = [
  {
    id: "bae-atp-f",
    name: "BAE ATP-F",
    image: "https://images.unsplash.com/photo-1540962614-d9897e6e59e5?w=600&h=400&fit=crop",
    specs: [
      { label: "Aircraft Configuration", value: "Freighter" },
      { label: "Cargo Payload", value: "8,400 Kgs" },
      { label: "Maximum Take-off Weight", value: "23,678 Kgs" },
      { label: "Maximum Landing Weight", value: "23,133 Kgs" },
      { label: "Maximum Zero Fuel Weight", value: "21,772 Kgs" },
      { label: "Cabin Length", value: "17.5 m" },
      { label: "Cabin Width", value: "1.98 m" },
      { label: "Cabin Height", value: "1.91 m" },
      { label: "Main Cargo Door Dimensions", value: "1.72 × 2.64 m" },
      { label: "Speed", value: "250 Knots or 463 Kph" },
      { label: "Range", value: "985 Knots or 1825 Kms" },
      { label: "Engines", value: "2 Pratt & Whitney PW126" },
    ],
    description: [
      "The BAe ATP-F is a fuel efficient, environmentally friendly turboprop freighter.",
      "The BAe ATP-F offers a logical way forward from the ageing HS748 type of aircraft that Transafrican Air operated back in 2017, by giving improved efficiency whilst meeting all current and proposed future noise and equipment regulations.",
      "In addition, the BAe ATP-F delivers all this with increased range, speed and cargo payload capacity.",
    ],
  },
]

export default function FleetComponent() {
  return (
    <div>
      {/* Page Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Fleet</h1>
          <div className="flex items-center gap-2 text-accent-light">
            <a href="/" className="hover:text-accent transition">
              Home
            </a>
            <span>»</span>
            <span>Our Fleet</span>
          </div>
        </div>
      </section>

      {/* Fleet Container */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {aircraftData.map((aircraft) => (
              <div key={aircraft.id} className="grid md:grid-cols-2 gap-8 items-start">
                {/* Aircraft Image */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative w-full h-96">
                    <Image
                      src={aircraft.image || "/placeholder.svg"}
                      alt={aircraft.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Aircraft Details */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">{aircraft.name}</h2>

                  {/* Specifications Table */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Specifications</h3>
                    <div className="space-y-3">
                      {aircraft.specs.map((spec, index) => (
                        <div key={index} className="flex justify-between border-b pb-2">
                          <span className="text-foreground font-medium">{spec.label}</span>
                          <span className="text-gray-600">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    {aircraft.description.map((para, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Cargo Transport?</h3>
            <p className="text-accent-light mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your transportation needs and learn more about our modern, reliable fleet.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition stagger-on-hover"
            >
              <StaggeredText text="Get A Quote Today" delay={0.01} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
