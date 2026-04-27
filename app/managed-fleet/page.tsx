import Link from "next/link"
import { ArrowRight, Zap, Clock, DollarSign, BarChart3 } from "lucide-react"

export const metadata = {
  title: "Managed Fleet Services - Transafrican Air",
  description:
    "Professional managed fleet services handling aircraft operations, maintenance, and crew management for aviation operators",
}

export default function ManagedFleetPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                Managed Fleet Services
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Complete fleet management solutions handling operations, maintenance, crew coordination, and regulatory compliance.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aircraft-mechanic-holding-a-tablet-in-the-hangar-uELwlTiaZw2xr2YMSgEkgRhpIlUKkb.jpg"
                alt="Managed fleet operations"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance">Complete Fleet Management Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Operational Excellence</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                We handle every operational aspect of your fleet, from flight scheduling and crew management to regulatory compliance and incident reporting.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Cost Efficiency</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Reduce operational overhead by consolidating management functions. Our economies of scale translate to better maintenance pricing and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance">Our Management Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Flight Operations</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Comprehensive scheduling, dispatch coordination, and real-time operational monitoring ensuring seamless flights.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Maintenance Management</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Predictive maintenance scheduling, vendor coordination, and parts inventory management.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Analytics & Reporting</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Detailed performance metrics, utilization reports, and financial analysis for informed decision-making.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Cost Optimization</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Fuel efficiency strategies, vendor negotiations, and operational streamlining to reduce expenses.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Simplify Your Fleet Operations</h2>
            <p className="text-sm md:text-base text-primary-foreground/95 max-w-2xl mx-auto mb-6 leading-relaxed">
              Let us manage your fleet operations while you focus on your core business objectives.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Request Fleet Management Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
