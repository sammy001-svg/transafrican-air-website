"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ExecutiveAirlinesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Executive Airlines</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Premium business aviation solutions designed for corporate travel with seamless efficiency and
            executive-class amenities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Executive Airline Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Corporate Scheduling",
                  description: "Flexible booking tailored to corporate travel patterns",
                },
                {
                  title: "Membership Programs",
                  description: "Exclusive benefits and discounted rates for frequent flyers",
                },
                {
                  title: "Global Network",
                  description: "Access to flights across Africa and international destinations",
                },
                {
                  title: "Business-Ready Cabins",
                  description: "WiFi, workstations, and conference facilities on-board",
                },
                {
                  title: "Dedicated Account Managers",
                  description: "Personal support for all your travel requirements",
                },
                { title: "Compliance & Security", description: "Enterprise-grade security and regulatory compliance" },
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Elevate Your Corporate Travel</h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Join leading corporations who trust Transafrican Air for their executive aviation needs.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Get Executive Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
