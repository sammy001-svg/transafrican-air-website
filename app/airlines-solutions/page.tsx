"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function AirlinesSolutionsPage() {
  const services = [
    "Aircraft leasing and wet leasing",
    "Cargo charter solutions for airlines",
    "Interline partnership arrangements",
    "Fleet expansion solutions",
  ]

  const benefits = [
    "Flexible lease terms",
    "Comprehensive cargo capacity",
    "Reliable interline partner",
    "Cost-effective fleet solutions",
    "Dedicated airline support",
    "24/7 operational coordination",
  ]

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Airlines Solutions</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Aircraft leasing and cargo charter solutions designed for airline partners and interline operations.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Our Solutions</h2>
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
              <h2 className="text-2xl font-bold mb-6 text-foreground">Airline Partnership</h2>
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
            <h2 className="text-3xl font-bold mb-6 text-foreground">Aircraft Leasing & Cargo Solutions</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Transafrican Air provides flexible aircraft leasing and cargo charter solutions for airlines. Whether you
              need fleet expansion, seasonal capacity, or dedicated cargo services, we deliver reliable, cost-effective
              solutions.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Our modern fleet and experienced operations team ensure seamless interline coordination, full regulatory
              compliance, and 24/7 operational support for all airline partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Discuss Airline Solutions</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact our airline relations team to explore leasing and charter opportunities.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
