import Link from "next/link"
import { ArrowRight, AlertCircle, CheckCircle, Clock, Home } from "lucide-react"

export const metadata = {
  title: "Live Animal Transport Charter - Transafrican Air",
  description:
    "Specialized live animal cargo charter with climate control and veterinary support for safe animal transportation",
}

export default function LiveAnimalTransportPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                Live Animal Transport
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Safe and humane transportation of livestock and animals with specialized climate control and expert care.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/race-horse-is-loading-to-the-airplane-TIUve1uc6J6ECWEyWQWhubWnroBsbi.jpg"
                alt="Live animal cargo transport"
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
            Specialized Animal Care in Transit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Climate Control</h3>
              </div>
              <p className="text-sm text-foreground/80">
                Temperature and humidity controlled environments for optimal animal comfort and health maintenance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Veterinary Support</h3>
              </div>
              <p className="text-sm text-foreground/80">
                Licensed veterinary professionals and emergency medical protocols for all live animal shipments.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Minimal Transit Time</h3>
              </div>
              <p className="text-sm text-foreground/80">
                Direct routing and minimal handling to reduce stress and ensure animal welfare throughout transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">Our Animal Transport Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Livestock Transportation",
              "Exotic Animal Relocation",
              "Zoo & Wildlife Transfers",
              "Breeding Stock Movement",
              "Pet & Companion Animal Transport",
              "Agricultural Animal Shipments"
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Transport Your Animals Safely</h2>
            <p className="text-sm md:text-base text-primary-foreground/95 max-w-2xl mx-auto mb-6 leading-relaxed">
              Get a specialized quote for live animal charter with full veterinary and care support throughout transit.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Request Animal Transport Charter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
