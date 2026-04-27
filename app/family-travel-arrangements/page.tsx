"use client"

import { ArrowRight, Users, Heart, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function FamilyTravelArrangementsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                Family Travel Arrangements
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Complete travel coordination for families accompanying patients during medical charters, ensuring comfortable and stress-free journeys for all family members.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4k-african-family-get-boarding-pass-for-airline-transportation-at-check-in-counter-in-airport-ZZj2zlX92fSym5wceZEcXYMaJtf4fA.jpg"
                alt="Family traveling together on private charter"
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
            Comprehensive Family Support Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Accommodation Coordination</h3>
              <p className="text-foreground/80 leading-relaxed">
                Assistance securing comfortable accommodations near medical facilities for family members staying during patient treatment and recovery periods.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Meal Arrangements</h3>
              <p className="text-foreground/80 leading-relaxed">
                Catering services for in-flight meals and ground-based meal arrangements ensuring family comfort during their journey.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Logistics Support</h3>
              <p className="text-foreground/80 leading-relaxed">
                Ground transportation, visa assistance, travel documentation support, and local orientation for families visiting unfamiliar destinations.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Emotional Support</h3>
              <p className="text-foreground/80 leading-relaxed">
                Compassionate concierge services and counseling resources to support families during stressful medical situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">
            Why Choose Our Family Travel Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Family-Focused Care</h3>
                <p className="text-sm text-foreground/80">
                  Understanding that families need support too. We arrange everything to ease their journey and stress.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Personal Attention</h3>
                <p className="text-sm text-foreground/80">
                  Dedicated coordinators providing personalized assistance for each family's unique needs and requirements.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Global Network</h3>
                <p className="text-sm text-foreground/80">
                  Access to international service providers ensuring quality arrangements regardless of destination.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">24/7 Availability</h3>
                <p className="text-sm text-foreground/80">
                  Round-the-clock support for any family needs or requests during their entire journey and stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Need Family Travel Arrangements?</h2>
          <p className="text-sm md:text-base text-primary-foreground/95 max-w-2xl mx-auto mb-6 leading-relaxed">
            Let us handle all arrangements so your family can focus on being there for your loved one.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
          >
            Request Family Travel Arrangements
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
