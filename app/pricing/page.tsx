"use client"

import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Cargo Charter",
      description: "One-time cargo shipments and specialized transport",
      features: [
        "Flexible scheduling",
        "Multiple aircraft options",
        "Dangerous goods handling available",
        "Real-time tracking",
        "Dedicated support",
        "Flexible payment terms",
      ],
      cta: "Get Quote",
      highlighted: false,
    },
    {
      name: "Series Charter",
      description: "Regular scheduled flights for ongoing needs",
      features: [
        "Predictable costs",
        "Priority booking",
        "Dedicated aircraft slot",
        "Volume discounts",
        "Flexible schedule adjustment",
        "Account management",
      ],
      cta: "Contact Sales",
      highlighted: true,
    },
    {
      name: "Private Charter",
      description: "Luxury travel with complete customization",
      features: [
        "Premium aircraft selection",
        "Personalized service",
        "Flexible departure times",
        "Custom amenities",
        "Aircraft branding available",
        "Priority support",
      ],
      cta: "Get Quote",
      highlighted: false,
    },
  ]

  const rateGuides = [
    {
      category: "Cargo Rates (Per Flight Hour)",
      items: [
        { aircraft: "Dornier 228", capacity: "1.5 tonnes", rateRange: "$3,500 - $4,500" },
        { aircraft: "British Aerospace ATP", capacity: "5 tonnes", rateRange: "$6,000 - $8,000" },
        { aircraft: "Boeing 737", capacity: "15 tonnes", rateRange: "$10,000 - $14,000" },
      ],
    },
    {
      category: "Private Charter Rates (Per Flight Hour)",
      items: [
        { aircraft: "Citation XLS", capacity: "9 passengers", rateRange: "$4,000 - $5,500" },
        { aircraft: "Bombardier Global", capacity: "13 passengers", rateRange: "$6,500 - $8,500" },
        { aircraft: "Custom Configuration", capacity: "20+ passengers", rateRange: "Contact for quote" },
      ],
    },
    {
      category: "Additional Services",
      items: [
        { aircraft: "Dangerous Goods Handling", capacity: "Premium Service", rateRange: "20-30% surcharge" },
        { aircraft: "Pharmaceutical Cold Chain", capacity: "Temperature Control", rateRange: "15-25% surcharge" },
        { aircraft: "Medical Equipment Setup", capacity: "Medical Transport", rateRange: "10-20% surcharge" },
      ],
    },
  ]

  const discountStructure = [
    { volume: "1-3 flights", discount: "Negotiable pricing" },
    { volume: "4-10 flights/month", discount: "5-10% discount" },
    { volume: "11-20 flights/month", discount: "10-15% discount" },
    { volume: "20+ flights/month", discount: "15-25% discount" },
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Pricing & Rate Guide</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Transparent pricing for all our charter and cargo services. Get a quote tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Charter Plans */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance text-foreground">Charter Service Plans</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-lg shadow-md overflow-hidden transition-all ${
                  plan.highlighted
                    ? "ring-2 ring-primary bg-primary/5 transform md:scale-105"
                    : "bg-white hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-foreground/70 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/get-quote"
                    className={`w-full py-3 rounded font-bold transition flex items-center justify-center gap-2 ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Guide */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance text-foreground">Rate Guide</h2>

          <div className="space-y-8 mb-16">
            {rateGuides.map((guide, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary/10 px-6 py-4">
                  <h3 className="text-lg font-bold text-foreground">{guide.category}</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-foreground/10">
                        <th className="px-6 py-4 text-left font-bold text-foreground">Aircraft / Service</th>
                        <th className="px-6 py-4 text-left font-bold text-foreground">Capacity</th>
                        <th className="px-6 py-4 text-left font-bold text-foreground">Rate Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {guide.items.map((item, itemIdx) => (
                        <tr
                          key={itemIdx}
                          className="border-b border-foreground/5 hover:bg-foreground/2 transition"
                        >
                          <td className="px-6 py-4 text-foreground font-semibold">{item.aircraft}</td>
                          <td className="px-6 py-4 text-foreground/70">{item.capacity}</td>
                          <td className="px-6 py-4 text-foreground/70">{item.rateRange}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Discount Structure */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary/10 px-6 py-4">
              <h3 className="text-lg font-bold text-foreground">Volume Discount Structure</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-foreground/10">
                    <th className="px-6 py-4 text-left font-bold text-foreground">Monthly Flight Volume</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">Discount Applied</th>
                  </tr>
                </thead>
                <tbody>
                  {discountStructure.map((item, idx) => (
                    <tr key={idx} className="border-b border-foreground/5 hover:bg-foreground/2 transition">
                      <td className="px-6 py-4 text-foreground font-semibold">{item.volume}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                          {item.discount}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance text-foreground">What's Included</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "Standard Inclusions",
                items: [
                  "Aircraft lease and fuel",
                  "Experienced flight crew",
                  "Basic ground handling",
                  "Standard catering",
                  "Flight documentation",
                ],
              },
              {
                title: "Additional Services",
                items: [
                  "Specialized catering",
                  "VIP ground support",
                  "Premium amenities",
                  "Aircraft customization",
                  "Dedicated coordination",
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="py-16 md:py-24 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Important Pricing Information</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              All rates are per flight hour and subject to change based on market conditions, fuel surcharges, and
              operational requirements. Final pricing will be confirmed in your quote.
            </p>
            <p>
              Surcharges may apply for: dangerous goods handling, medical equipment setup, specialized catering, ground
              support services, and non-standard routing.
            </p>
            <p>
              Multiple aircraft combinations and customized solutions are available for large operations. Contact our
              sales team for enterprise pricing.
            </p>
            <p>
              All clients are required to maintain a minimum monthly activity level to qualify for volume discounts. Terms
              and conditions apply.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Request a customized quote based on your specific charter, cargo, or private aviation needs.
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
