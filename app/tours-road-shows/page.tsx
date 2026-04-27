"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ToursRoadShowsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-balance md:text-3xl">Tours & Road Shows</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl md:text-base text-left">
            Elevate your tours and road shows with premium aviation logistics. From equipment transport to VIP
            delegation travel, we provide seamless aerial support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Services Overview */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Tours & Road Shows Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Exhibition Transport",
                  description:
                    "Secure transport of exhibition materials, equipment, and displays to multiple venues across Africa and beyond.",
                },
                {
                  title: "Delegate Travel",
                  description:
                    "Premium group charter for speakers, organizers, and VIP delegates traveling between tour locations.",
                },
                {
                  title: "Equipment Logistics",
                  description:
                    "Specialized handling of sensitive equipment, merchandise, and promotional materials for road shows.",
                },
                {
                  title: "Multi-Stop Itineraries",
                  description:
                    "Flexible scheduling for complex multi-city tours with tailored aircraft options for each leg.",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 border border-primary/20 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">Why Choose Transafrican Air?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Logistics Expertise</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Experienced in coordinating complex multi-stop tours with seamless equipment handling and transfers.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Flexible Scheduling</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Adapt aircraft and schedules to your tour timeline, with real-time coordination and support.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Cost Efficiency</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Competitive rates for multi-leg tours with volume discounts and customized charter packages.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Regional Network</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Access to multiple African destinations with local ground support and logistics partnerships.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to Plan Your Tour?</h3>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Request a Tour Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
