import Link from "next/link"
import { ArrowRight, Weight, Truck, Globe, Zap } from "lucide-react"

export const metadata = {
  title: "Heavy & Outsize Cargo Charter - Transafrican Air",
  description:
    "Specialized transport for heavy equipment, oil rigs, power station parts, helicopters, boats, and other oversized cargo",
}

export default function HeavyOutsizeCargoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Heavy & Outsize Cargo Charter</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Expert specialists in transporting heavy equipment and oversized cargo worldwide.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-balance">Moving the Impossible</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Specialists in transporting heavy and outsize goods including oil equipment, power station parts, marine
                diesel engines, satellite communications equipment, helicopters, boats, cars, and aircraft.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Our experience spans decades of moving the world's largest and most complex cargo. From engineering
                expertise to specialized loading procedures, we handle every aspect of your oversized shipment.
              </p>

              <h3 className="text-2xl font-bold mb-4">What We Transport</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Weight className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Oil & Gas Equipment</p>
                    <p className="text-sm text-foreground/70">Drilling rigs, pumps, and machinery</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Truck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Power Generation</p>
                    <p className="text-sm text-foreground/70">Turbines, generators, and components</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Marine & Aerospace</p>
                    <p className="text-sm text-foreground/70">Engines, helicopters, boats, and aircraft</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Communications</p>
                    <p className="text-sm text-foreground/70">Satellite and telecom infrastructure</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6">Our Capabilities</h3>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-bold text-foreground mb-2">Load Planning</p>
                  <p className="text-foreground/80 text-sm">
                    Precise calculations for weight distribution, balance, and aerodynamics.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">Specialized Equipment</p>
                  <p className="text-foreground/80 text-sm">
                    Custom containers, shoring, and securing equipment for your specific cargo.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">International Expertise</p>
                  <p className="text-foreground/80 text-sm">
                    Knowledge of customs, permits, and regulations worldwide.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">Technical Support</p>
                  <p className="text-foreground/80 text-sm">
                    On-site engineers and loading coordinators throughout transport.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li>✓ 30+ years experience with heavy cargo</li>
                <li>✓ Global fleet of specialized aircraft</li>
                <li>✓ Expert engineering and planning</li>
                <li>✓ Full insurance coverage available</li>
                <li>✓ 24/7 tracking and support</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transport Your Heavy Cargo?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Let our specialists handle your most challenging logistics requirements.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Request Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
  </section>
  </main>
  )
}
