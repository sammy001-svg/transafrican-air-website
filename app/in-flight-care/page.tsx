"use client"

import { ArrowRight, Heart, Stethoscope, Zap, Users } from "lucide-react"
import Link from "next/link"

export default function InFlightCarePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                In Flight Care
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Professional medical care and monitoring provided by qualified healthcare professionals throughout your flight, ensuring patient comfort and safety.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/paramedic-emergency-transfer-to-hospital-ward-ZxMnfwcw26NXBsW6qkDWhI5NNlgMjC.jpg"
                alt="Medical staff providing in-flight care"
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
            Professional In-Flight Medical Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Patient Monitoring</h3>
              <p className="text-foreground/80 leading-relaxed">
                Continuous vital signs monitoring including oxygen levels, heart rate, blood pressure, and other critical health parameters throughout the flight.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Medical Interventions</h3>
              <p className="text-foreground/80 leading-relaxed">
                Trained medical personnel capable of administering medications, managing IVs, and performing emergency medical procedures if required.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Comfort Management</h3>
              <p className="text-foreground/80 leading-relaxed">
                Pain management, positioning assistance, and comfort measures to ensure the best experience during your air transport.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Communication</h3>
              <p className="text-foreground/80 leading-relaxed">
                Coordination with ground hospitals and medical facilities, providing real-time updates on patient status during flight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">
            Why Choose Our In Flight Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Qualified Medical Staff</h3>
                <p className="text-sm text-foreground/80">
                  Certified nurses, paramedics, and physicians with extensive experience in air medical transport and emergency care.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Patient-Centered Care</h3>
                <p className="text-sm text-foreground/80">
                  Compassionate care focused on patient comfort, dignity, and medical requirements throughout the journey.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Emergency Ready</h3>
                <p className="text-sm text-foreground/80">
                  Equipped to handle medical emergencies during flight with advanced equipment and trained response protocols.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Companion Support</h3>
                <p className="text-sm text-foreground/80">
                  Accommodations for family members or companions to stay with patients, providing emotional support during transport.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Need In-Flight Medical Care?</h2>
          <p className="text-sm md:text-base text-primary-foreground/95 max-w-2xl mx-auto mb-6 leading-relaxed">
            Arrange professional medical care for your air transport with our experienced medical teams.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
          >
            Request In-Flight Care
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
