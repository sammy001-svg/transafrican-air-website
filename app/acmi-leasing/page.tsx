import Link from "next/link"
import { ArrowRight, Plane, TrendingUp, Shield, Globe } from "lucide-react"

export const metadata = {
  title: "ACMI Leasing - Transafrican Air",
  description:
    "Aircraft, Crew, Maintenance and Insurance (ACMI) leasing solutions for airlines and charter operators with full operational support",
}

export default function ACMILeasingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                ACMI Leasing Solutions
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Comprehensive Aircraft, Crew, Maintenance and Insurance leasing to expand your fleet capacity with minimal operational burden.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-row-of-airplanes-parked-in-airport-side-view-of-front-parts-of-tens-of-passenger-aircraft-bRt2TwGuRt1ijtRvGqrWQMNuqyznZ1.jpg"
                alt="ACMI Aircraft leasing"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ACMI Leasing */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance">Understanding ACMI Leasing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-primary mb-3">What We Provide</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                ACMI leasing provides you with a fully equipped aircraft including experienced crew members, comprehensive maintenance services, and insurance coverage. This all-inclusive solution eliminates the complexity of managing multiple vendors.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Your Advantages</h3>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Rapid fleet expansion without capital investment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Expert crew management and scheduling</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Predictable operational costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance">ACMI Leasing Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Plane className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Aircraft</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Modern, well-maintained aircraft meeting international standards and your operational requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Crew & Maintenance</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Qualified pilots, crew members, and comprehensive maintenance support ensuring optimal aircraft performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Insurance Coverage</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Full insurance packages protecting your operations and providing peace of mind during every flight.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Flexible Terms</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Customizable lease periods and terms tailored to your seasonal or permanent capacity needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg shadow-lg p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Ready to Expand Your Fleet?</h2>
            <p className="text-sm md:text-base text-primary-foreground/95 max-w-2xl mx-auto mb-6 leading-relaxed">
              Contact our team to discuss your ACMI leasing requirements and find the perfect aircraft solution.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Request ACMI Leasing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
