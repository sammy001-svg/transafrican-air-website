import { ArrowRight, Users, Plane, HeartHandshake, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Personnel Logistics - Transafrican Air",
  description:
    "Efficient and reliable personnel transport to remote locations, oil and gas operations, and industrial sites.",
}

export default function PersonnelLogisticsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Personnel Logistics</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Professional personnel transport to remote locations, oil and gas operations, mining sites, and industrial
            environments across Africa.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What We Offer</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Transafrican Air specializes in transporting personnel to Africa's most remote and challenging
              environments. Whether you need planned crew rotations, emergency personnel mobilization, or medical
              evacuation support, we provide reliable, professional service tailored to your operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-8 border border-primary/20">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Planned Crew Rotations</h3>
              <p className="text-foreground/70">
                Scheduled personnel movements for ongoing operations with predictable timing and logistics coordination.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 border border-primary/20">
              <Plane className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Emergency Mobilization</h3>
              <p className="text-foreground/70">
                Rapid response personnel transport for urgent situations and unexpected operational requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 border border-primary/20">
              <HeartHandshake className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Medical Evacuation</h3>
              <p className="text-foreground/70">
                Emergency medical evacuation services for personnel requiring urgent transfer to medical facilities.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-primary/5 rounded-lg p-12 border border-primary/20 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-balance">Why Choose Our Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Direct routing to remote airstrips and unimproved facilities",
                "Experienced crew familiar with challenging terrain and operations",
                "Comprehensive safety protocols and equipment",
                "24/7 availability for emergency response",
                "Flexible scheduling for crew rotation cycles",
                "Professional ground coordination and support",
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
            <h2 className="text-3xl font-bold mb-4 text-balance">Ready to Arrange Personnel Transport?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your personnel logistics requirements and receive a detailed quote.
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
