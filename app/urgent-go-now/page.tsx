import Link from "next/link"
import { ArrowRight, Zap, Clock, Globe, Shield } from "lucide-react"

export const metadata = {
  title: "Urgent 'Go Now' Cargo Charter - Transafrican Air",
  description:
    "Time-critical air cargo charter solutions with immediate response and aircraft availability within the hour",
}

export default function UrgentGoNowPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Urgent 'Go Now' Cargo Charter</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            When every minute counts, we respond immediately to get your time-critical shipment in the air.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-balance">Rapid Response Air Freight Solutions</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We respond immediately to time-critical air cargo charter requests, offering freight plane and onboard
                courier solutions. Our buying power means we can find the closest available aircraft and have your
                delivery in the air within an hour of confirmation.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Whether you need an urgent overnight delivery or same-day courier service, our dedicated team works
                around the clock to meet your most demanding timelines.
              </p>

              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">One-Hour Turnaround</p>
                    <p className="text-sm text-foreground/70">Aircraft availability confirmed within 60 minutes</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Global Coverage</p>
                    <p className="text-sm text-foreground/70">Access to aircraft worldwide for any route</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Secure Handling</p>
                    <p className="text-sm text-foreground/70">Full tracking and secure delivery assurance</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Flexible Options</p>
                    <p className="text-sm text-foreground/70">Freight plane or onboard courier services</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <h4 className="font-bold text-foreground">Contact Us</h4>
                  </div>
                  <p className="text-foreground/80 text-sm ml-11">
                    Call or email with your urgent cargo requirements and deadline.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <h4 className="font-bold text-foreground">Quote Confirmation</h4>
                  </div>
                  <p className="text-foreground/80 text-sm ml-11">
                    We provide competitive pricing within one hour of your enquiry.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <h4 className="font-bold text-foreground">Aircraft Assignment</h4>
                  </div>
                  <p className="text-foreground/80 text-sm ml-11">
                    Upon confirmation, we assign the nearest available aircraft.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <h4 className="font-bold text-foreground">Departure</h4>
                  </div>
                  <p className="text-foreground/80 text-sm ml-11">
                    Your cargo is in the air, tracked every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Immediate Dispatch?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Contact our urgent cargo team now to arrange your time-critical shipment.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Request Urgent Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
  </section>
  </main>
  )
}
