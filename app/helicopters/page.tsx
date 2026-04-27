"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import { QuoteForm } from "@/components/quote-form"
export default function HelicoptersPage() {
  return (
    <>
      {/* Page Header with Image */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">Helicopter Services</h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-6">
                Fast, flexible helicopter charter services for urgent medical evacuations, executive transport, and specialized operations across Africa and beyond.
              </p>
              <p className="text-foreground/70 mb-8">
                Our helicopter fleet provides quick response times, remote location access, and direct point-to-point travel when you need it most.
              </p>
            </div>
            <div className="relative h-80 md:h-96 lg:h-full lg:min-h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_445406531_iny9BntJtXX5esYM51sfayS2l4vrNsZp-CdMQWqgKiWX7Dhv26a9gZ4l2ukHyB2.jpg"
                alt="Modern blue helicopter in flight"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Helicopter Charter Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Quick Response Times", description: "Immediate availability for urgent transport needs" },
                {
                  title: "Remote Location Access",
                  description: "Land anywhere with minimal infrastructure requirements",
                },
                { title: "Point-to-Point Travel", description: "Direct routes avoiding traditional air routes" },
                { title: "Medical Evacuation", description: "Equipped for emergency medical transport operations" },
                { title: "Executive Transport", description: "VIP helicopter services for city-to-city travel" },
                { title: "Cargo Operations", description: "Lift heavy cargo to hard-to-reach locations" },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <QuoteForm
            charterType="helicopter"
            title="Helicopter Charter - Get a Quote"
            description="Contact us for fast, reliable helicopter charter with experienced crews and modern aircraft."
          />
        </div>
      </section>
    </>
  )
}
