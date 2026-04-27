"use client"

import { ArrowRight, Zap, Shield, Heart, Users } from "lucide-react"
import Link from "next/link"

export default function LifeSupportSystemsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                Life Support Systems
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Advanced intensive care equipment and life support systems available on all medical charter flights for critical care patients requiring continuous monitoring.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/close-up-of-hospitalized-patients-hand-with-pulse-oximeter-yvbbijzP3GqQR00Educ47QGOU5RJvz.jpg"
                alt="Advanced medical life support equipment"
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
            Comprehensive Life Support Equipment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Ventilation Systems</h3>
              <p className="text-foreground/80 leading-relaxed">
                Portable mechanical ventilators and oxygen delivery systems with backup power and multiple oxygen sources for respiratory support.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Cardiac Monitoring</h3>
              <p className="text-foreground/80 leading-relaxed">
                Advanced cardiac monitoring systems, defibrillators, and pacing equipment for continuous heart rate and rhythm monitoring.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Dialysis Support</h3>
              <p className="text-foreground/80 leading-relaxed">
                Mobile dialysis units and renal support systems for patients requiring continuous renal replacement therapy during transport.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">ECMO/Extracorporeal Support</h3>
              <p className="text-foreground/80 leading-relaxed">
                Extracorporeal membrane oxygenation systems for extreme critical care cases requiring full circulatory support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">
            Why Choose Our Life Support Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">State-of-the-Art Equipment</h3>
                <p className="text-sm text-foreground/80">
                  Latest medical technology with redundant power systems and backup equipment for complete reliability.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Safety Certified</h3>
                <p className="text-sm text-foreground/80">
                  All equipment meets international aviation and medical certification standards with regular maintenance and testing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Expert Operation</h3>
                <p className="text-sm text-foreground/80">
                  Specialized medical technicians trained in operating advanced life support systems in flight environments.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">ICU-Level Care</h3>
                <p className="text-sm text-foreground/80">
                  In-flight intensive care comparable to hospital ICU capabilities for most critical care scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Need Life Support for Air Transport?</h2>
          <p className="text-sm md:text-base text-primary-foreground/95 max-w-2xl mx-auto mb-6 leading-relaxed">
            Arrange critical care transport with our advanced life support systems and experienced medical teams.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
          >
            Request Life Support Transport
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
