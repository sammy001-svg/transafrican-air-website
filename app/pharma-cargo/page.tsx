import Link from "next/link"
import { ArrowRight, Lock, CheckCircle, Zap, AlertCircle } from "lucide-react"

export const metadata = {
  title: "Pharmaceutical Cargo Charter - Transafrican Air",
  description:
    "Compliant pharmaceutical cargo transport with temperature control, security, and regulatory documentation support",
}

export default function PharmaCargoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                Pharmaceutical Cargo Transport
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Secure, compliant pharmaceutical logistics with advanced temperature control and full regulatory documentation support.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_231839350_3UI7ofPmGaWmlGE5XBfdbLLy99DTqffk-RIfaMIyrwU7SAcg5rqzLxjGu5OfpWB.jpg"
                alt="Pharmaceutical cargo in secure container"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">
            Secure Pharmaceutical Logistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Compliance & Security</h3>
              </div>
              <p className="text-sm text-foreground/80">
                Full GxP compliance, chain of custody tracking, and secure handling for all pharmaceutical shipments.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Temperature Stability</h3>
              </div>
              <p className="text-sm text-foreground/80">
                Validated temperature-controlled environments maintaining critical storage requirements for sensitive medications.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Documentation Support</h3>
              </div>
              <p className="text-sm text-foreground/80">
                Complete regulatory documentation, export/import permits, and compliance certificates included with all shipments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">Our Pharmaceutical Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Clinical Trial Materials Transport",
              "Vaccine & Biologics Shipments",
              "Specialty Pharmacy Products",
              "Medical Device Logistics",
              "Temperature-Controlled Cold Chain",
              "Regulatory Compliance Documentation"
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg shadow-lg p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Transport Pharmaceuticals Safely & Compliantly</h2>
            <p className="text-sm md:text-base text-primary-foreground/95 max-w-2xl mx-auto mb-6 leading-relaxed">
              Request a pharmaceutical cargo charter with full GxP compliance and regulatory support.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Request Pharma Charter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
