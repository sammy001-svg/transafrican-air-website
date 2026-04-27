import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import Link from "next/link"
import { ArrowRight, Shield, Users, Briefcase, Lock, Clock, Globe } from "lucide-react"

export const metadata: Metadata = generatePageMetadata('officialTrips')

export default function OfficialTripsPage() {
  const capabilities = [
    {
      icon: Shield,
      title: "Protocol Compliance",
      description: "Full adherence to diplomatic protocols, government regulations, and security requirements"
    },
    {
      icon: Lock,
      title: "Confidentiality & Security",
      description: "Discretion guaranteed with secure communications and restricted access procedures"
    },
    {
      icon: Clock,
      title: "Reliability & Punctuality",
      description: "Mission-critical scheduling with backup contingencies and real-time coordination"
    },
    {
      icon: Users,
      title: "Professional Crew",
      description: "Experienced personnel trained in protocol, discretion, and government travel requirements"
    }
  ]

  const useCases = [
    {
      title: "Government Delegations",
      description: "Official state visits, ministerial missions, and government delegations requiring secure, professional transport"
    },
    {
      title: "Diplomatic Missions",
      description: "Embassy operations, diplomatic conferences, and international negotiations with confidential support"
    },
    {
      title: "Official Events",
      description: "State ceremonies, official launches, and government events requiring coordinated transport logistics"
    },
    {
      title: "Inter-African Travel",
      description: "Travel between African nations for official purposes with seamless regional coordination"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">
                Official Delegation & Government Charter Flights
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-6">
                Professional aircraft charter services for government delegations, diplomatic missions, and official travel. Security, protocol, and reliability you can depend on.
              </p>
              <p className="text-foreground/70 mb-8">
                Transafrican Air provides specialized charter solutions designed specifically for official and government travel requirements across Africa and internationally.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                Request Official Transport <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-80 md:h-96 lg:h-full lg:min-h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business-travel-TyBCnNeT7FmVFVGNVABJofWdgZwNN3.jpg"
                alt="Professional business traveler at private jet"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground text-balance">
            Government-Grade Service Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{capability.title}</h3>
                      <p className="text-foreground/70">{capability.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground text-balance">
            Official Travel Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-slate-200 p-6 rounded-lg hover:border-primary transition">
                <div className="flex items-start gap-3 mb-3">
                  <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-bold text-foreground">{useCase.title}</h3>
                </div>
                <p className="text-foreground/70">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground text-balance">
              Why Government Organizations Choose Transafrican Air
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-foreground">Protocol Expertise</h3>
                <p className="text-foreground/70 mb-3">
                  Years of experience with government delegations, diplomatic requirements, and official travel protocols. Our team understands the nuances of official missions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-foreground">Security First</h3>
                <p className="text-foreground/70 mb-3">
                  Advanced security protocols, restricted communications, confidential handling procedures, and secure ground operations. Your mission integrity is paramount.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-foreground">African Regional Expertise</h3>
                <p className="text-foreground/70 mb-3">
                  Extensive knowledge of African airspace, landing permissions, customs procedures, and regional regulations. Seamless inter-African coordination.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-foreground">Dedicated Support</h3>
                <p className="text-foreground/70 mb-3">
                  Assigned mission coordinators, 24/7 availability, contingency planning, and complete mission oversight from planning through completion.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-foreground">International Standards</h3>
                <p className="text-foreground/70 mb-3">
                  Full compliance with ICAO regulations, IOSA certification, and international safety standards. Professional operations you can trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground text-balance">
            Comprehensive Service Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-foreground">Pre-Mission Planning</h3>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>✓ Route optimization</li>
                <li>✓ Documentation coordination</li>
                <li>✓ Security briefings</li>
                <li>✓ Protocol confirmation</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-foreground">Ground Services</h3>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>✓ VIP lounge access</li>
                <li>✓ Priority handling</li>
                <li>✓ Secure transfers</li>
                <li>✓ Confidential check-in</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-foreground">In-Flight Support</h3>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>✓ Secure communications</li>
                <li>✓ Professional crew</li>
                <li>✓ Catering services</li>
                <li>✓ Real-time updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Trusted Partner for Official Travel
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Professional government and diplomatic travel solutions with security, reliability, and protocol expertise.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Contact Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
