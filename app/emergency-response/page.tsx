import { ArrowRight, AlertCircle, Clock, HeartHandshake, CheckCircle } from "lucide-react"
import Link from "next/link"
import { QuoteForm } from "@/components/quote-form"

export const metadata = {
  title: "Emergency Response - Transafrican Air",
  description:
    "Rapid response charter services for immediate personnel movement during emergencies and critical situations.",
}

export default function EmergencyResponsePage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Emergency Response</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Rapid response charter services for immediate personnel movement during emergencies, critical situations,
            and urgent operational requirements.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What We Offer</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              When time is critical, Transafrican Air provides emergency response charter services designed for
              immediate action. Our 24/7 availability, quick turnaround capabilities, and experienced crew ensure your
              personnel reach critical locations when they're needed most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-8 border border-primary/20">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">24/7 Availability</h3>
              <p className="text-foreground/70">
                Round-the-clock availability ensures we can respond to emergencies at any time, day or night.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 border border-primary/20">
              <AlertCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Quick Turnaround</h3>
              <p className="text-foreground/70">
                Rapid mobilization and flight preparation to minimize response time and get personnel in the air fast.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 border border-primary/20">
              <HeartHandshake className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">On-Demand Flexibility</h3>
              <p className="text-foreground/70">
                Complete flexibility in routing, timing, and aircraft selection to meet any emergency scenario.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-primary/5 rounded-lg p-12 border border-primary/20 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-balance">Emergency Response Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Experienced emergency response coordinators",
                "Direct communication lines for rapid authorization",
                "Multiple aircraft options for various scenarios",
                "Expertise in challenging terrain operations",
                "Professional medical evacuation support",
                "Crisis management and logistics coordination",
              ].map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">Need Emergency Response Support?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              For emergency response situations, contact our operations team immediately. We're ready 24/7.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Contact Operations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <QuoteForm
            charterType="medical"
            title="Get Emergency Solutions Quote"
            description="Request a quote for our specialized emergency response and medical charter services including medical charters, ground transport, inflight medical care, life support systems, and family travel arrangements."
          />
        </div>
      </section>
    </>
  )
}
