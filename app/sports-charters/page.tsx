"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { QuoteForm } from "@/components/quote-form"
import { useState } from "react"

const SportsAdditionalFields = ({ onFieldsChange }: { onFieldsChange: (fields: any) => void }) => (
  <div>
    <h3 className="text-lg font-bold text-foreground mb-4">Team Details</h3>
    <input 
      type="number"
      placeholder="Team Size / Number of Passengers"
      onChange={(e) => onFieldsChange({ teamSize: e.target.value })}
      className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
    />
  </div>
)

export default function SportsChartersPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Sports Charters</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Team transport for major sporting events with flexible scheduling and premium accommodations for athletes
            and staff.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Sports Charter Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Team Transport",
                  description: "Comfortable group charters for entire sports teams and delegations",
                },
                {
                  title: "Flexible Scheduling",
                  description: "Adapt travel schedules to match tournament and competition calendars",
                },
                {
                  title: "Equipment Handling",
                  description: "Specialized cargo capacity for sports equipment and gear",
                },
                {
                  title: "Premium Amenities",
                  description: "Catering, entertainment, and rest facilities for athletes",
                },
                {
                  title: "Multi-Stop Routing",
                  description: "Complex itineraries for tournament circuit travel",
                },
                {
                  title: "Professional Coordination",
                  description: "Dedicated charter coordinator for seamless operations",
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
          <QuoteForm
            charterType="sports"
            title="Sports Team Charter - Get a Quote"
            description="Contact our sports charter specialists to arrange transport for your team or athletic delegation."
          />
        </div>
      </section>
    </>
  )
}
