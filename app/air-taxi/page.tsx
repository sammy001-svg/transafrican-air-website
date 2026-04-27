"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AirTaxiPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Air Taxi Services</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            On-demand air taxi services for rapid point-to-point travel, bypassing congested roads and airports.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Air Taxi Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Beat Traffic", description: "Avoid congested highways and surface transportation delays" },
                { title: "On-Demand Availability", description: "Book flights with minimal advance notice" },
                { title: "City Center Access", description: "Depart from and arrive at downtown locations" },
                { title: "Time Savings", description: "Reduce travel time significantly on mid-range distances" },
                { title: "Executive Efficiency", description: "Maximize productivity by minimizing travel time" },
                { title: "All-Weather Capable", description: "Operate in conditions where ground transport struggles" },
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
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 border border-primary/20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Skip the Traffic with Air Taxi</h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Experience the future of urban mobility with our air taxi services.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Book Air Taxi
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
