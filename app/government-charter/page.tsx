"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function GovernmentCharterPage() {
  const services = [
    "Government delegation transport",
    "Official state missions and visits",
    "Emergency response operations",
    "Military and defense logistics",
  ]

  const benefits = [
    "Secure and confidential operations",
    "Compliance with government protocols",
    "Flexible scheduling and routing",
    "Experienced crew trained in government operations",
    "Comprehensive coordination support",
    "Priority scheduling and dedicated resources",
  ]

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Government Charter Solutions</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Specialized air charter services for government organizations, delegations, and official missions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Services</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Why Choose Transafrican Air?</h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 border border-primary/20 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Government Operations Support</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Transafrican Air provides comprehensive charter solutions for government organizations across Africa. We
              understand the unique requirements of government operations including security protocols, diplomatic
              considerations, and operational flexibility.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Our experienced team ensures seamless coordination for delegations, official missions, emergency response
              operations, and specialized logistics requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Request a Government Charter</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact our government relations team to discuss your charter requirements.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
