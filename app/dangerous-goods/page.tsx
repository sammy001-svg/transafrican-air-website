import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, FileText } from "lucide-react"

export const metadata = {
  title: "Dangerous Goods Cargo Charter - Transafrican Air",
  description:
    "Expert handling of dangerous goods including explosives, gases, flammables, and radioactive materials with permits and clearances",
}

export default function DangerousGoodsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Dangerous Goods Charter</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Expert handling of hazardous materials with full compliance and regulatory support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-balance">Specialized Hazmat Air Transport</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Expert handling of dangerous goods including explosives, gases, flammables, toxic and infectious
                substances, corrosives and radioactive materials. Our team assists with permits, diplomatic clearances,
                and on-the-ground flight representation.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                We navigate complex international regulations and ensure complete compliance with all hazmat transport
                requirements, allowing you to focus on your business.
              </p>

              <h3 className="text-2xl font-bold mb-4">Materials We Transport</h3>
              <ul className="space-y-2 text-foreground/80 mb-6">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Explosives and ammunition
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Compressed and liquefied gases
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Flammable liquids and solids
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Toxic and infectious substances
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Corrosive materials
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Radioactive materials
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">IATA & IMDG Compliance</p>
                    <p className="text-sm text-foreground/70">Full adherence to international standards</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Permit & Clearance Management</p>
                    <p className="text-sm text-foreground/70">We handle all regulatory documentation</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6">Our Process</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <h4 className="font-bold text-foreground">Documentation Review</h4>
                  </div>
                  <p className="text-foreground/80 text-sm ml-11">
                    Comprehensive assessment of your hazmat classification and requirements.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <h4 className="font-bold text-foreground">Regulatory Guidance</h4>
                  </div>
                  <p className="text-foreground/80 text-sm ml-11">Expert advice on compliance and route options.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <h4 className="font-bold text-foreground">Permit Coordination</h4>
                  </div>
                  <p className="text-foreground/80 text-sm ml-11">
                    We secure all necessary permits and diplomatic clearances.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <h4 className="font-bold text-foreground">Safe Transport</h4>
                  </div>
                  <p className="text-foreground/80 text-sm ml-11">
                    Secure aircraft with full ground support and representation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Dangerous Goods Transport?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Our expert team is ready to handle your hazmat logistics with full compliance and security.
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
