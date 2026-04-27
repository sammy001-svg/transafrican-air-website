"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EventsCharterConceptsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-balance md:text-3xl">Events & Charter Concepts</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl md:text-base text-left">
            Create unforgettable experiences with innovative charter concepts. From aerial events to bespoke aviation
            experiences, we bring your vision to life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Event Concepts */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Innovative Event Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Corporate Events",
                  description:
                    "Fly your team to exclusive off-site meetings, conferences, and corporate retreats with style and sophistication.",
                },
                {
                  title: "Incentive Charters",
                  description:
                    "Premium aviation experiences as employee rewards, incentive trips, and team-building adventures.",
                },
                {
                  title: "Celebrity & VIP Events",
                  description:
                    "Discreet, secure travel for high-profile individuals attending premieres, galas, and exclusive gatherings.",
                },
                {
                  title: "Wedding & Celebration Flights",
                  description:
                    "Create memorable moments with bespoke charter experiences for weddings, anniversaries, and milestone celebrations.",
                },
              ].map((concept, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{concept.title}</h3>
                  <p className="text-foreground/70">{concept.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Customization */}
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 border border-primary/20 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">Tailored Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Custom Catering</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Gourmet dining options and beverage services tailored to your event specifications and preferences.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Entertainment Options</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Onboard entertainment, connectivity, and amenities to enhance your event experience.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Ground Coordination</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Seamless ground transportation, hotel arrangements, and concierge services for complete event support.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Exclusive Routing</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Access to private terminals, exclusive airports, and unique routing options for maximum flexibility.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Let's Create Your Perfect Event Experience</h3>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Request Event Charter Details
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
