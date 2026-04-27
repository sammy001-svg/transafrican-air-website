"use client"

import { ArrowRight, Truck, MapPin, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function GroundTransportPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                Ground Transport
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Seamless ground transportation coordination to complement your air charters. From airport transfers to medical facility connections, we ensure reliable end-to-end logistics.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ambulance-VFJIm06K3nuL0B5vSChzo9aTyaJDZa.jpg"
                alt="Professional ground transport vehicles"
                className="w-full h-full object-cover object-top"
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
            Comprehensive Ground Transport Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Airport Transfers</h3>
              <p className="text-foreground/80 leading-relaxed">
                Professional airport pickup and drop-off services coordinated with your flight schedules for seamless connections.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Medical Facility Transport</h3>
              <p className="text-foreground/80 leading-relaxed">
                Specialized transport from airports to hospitals, clinics, or medical facilities with trained staff familiar with patient needs.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Fleet Management</h3>
              <p className="text-foreground/80 leading-relaxed">
                Access to diverse vehicle options from sedans to ambulances, adjusted to your transportation requirements.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Logistics Coordination</h3>
              <p className="text-foreground/80 leading-relaxed">
                Full-service ground logistics including equipment transport, accommodation arrangements, and journey planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">
            Why Choose Our Ground Transport
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Modern Fleet</h3>
                <p className="text-sm text-foreground/80">
                  Well-maintained vehicles with GPS tracking, climate control, and comfort features for all passenger types.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Reliable Timing</h3>
                <p className="text-sm text-foreground/80">
                  Real-time flight monitoring ensures drivers arrive at exact times with zero delays or missed connections.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Local Expertise</h3>
                <p className="text-sm text-foreground/80">
                  Expert drivers with deep knowledge of local routes, traffic patterns, and destination locations.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Professional Service</h3>
                <p className="text-sm text-foreground/80">
                  Courteous, professional drivers trained in customer service and passenger safety protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Need Ground Transport Services?</h2>
          <p className="text-sm md:text-base text-primary-foreground/95 max-w-2xl mx-auto mb-6 leading-relaxed">
            Coordinate ground transport with your charter flights for seamless end-to-end travel solutions.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
          >
            Request Ground Transport
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
