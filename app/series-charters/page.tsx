import { ArrowRight, Plane, Calendar, BarChart3, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Series Charters - Transafrican Air",
  description:
    "Regular scheduled charter flights for consistent personnel movement and ongoing operational requirements.",
}

export default function SeriesChartersPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Series Charters</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Regular scheduled charter flights designed for consistent personnel movement and ongoing operational
            requirements across Africa.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What We Offer</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Series charters provide predictable, regularly scheduled flights tailored to your operational rhythm.
              Perfect for organizations requiring consistent personnel rotation cycles, this service combines
              reliability with cost efficiency, eliminating the uncertainty of one-off charter arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-8 border border-primary/20">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Weekly Rotations</h3>
              <p className="text-foreground/70">
                Consistent weekly crew rotation schedules that align with your operational cycles and personnel needs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 border border-primary/20">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Predictable Scheduling</h3>
              <p className="text-foreground/70">
                Fixed routes and timetables that allow for precise planning and resource allocation for your operations.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 border border-primary/20">
              <Plane className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Customizable Routes</h3>
              <p className="text-foreground/70">
                Tailor flight routes and frequencies to match your specific operational requirements and destinations.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-primary/5 rounded-lg p-12 border border-primary/20 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-balance">Advantages of Series Charters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Cost-effective rates for regular bookings",
                "Dedicated crew familiar with your operations",
                "Priority scheduling and guaranteed slots",
                "Flexible capacity adjustments based on demand",
                "Integrated logistics coordination",
                "Simplified billing and administration",
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
            <h2 className="text-3xl font-bold mb-4 text-balance">Establish Your Series Charter Schedule</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact our team to set up a customized series charter program tailored to your operational needs.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
