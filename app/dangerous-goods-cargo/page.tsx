"use client"

import { ArrowRight, AlertTriangle, Shield, CheckCircle, Zap, Package } from "lucide-react"
import Link from "next/link"

export default function DangerousGoodsCargoPage() {
  const services = [
    {
      icon: Shield,
      title: "Full Compliance",
      description: "Complete adherence to IATA, IMDG, and local regulations for hazardous materials transport.",
    },
    {
      icon: AlertTriangle,
      title: "Expert Handling",
      description: "Our trained specialists ensure safe loading, storage, and transport of dangerous goods.",
    },
    {
      icon: Zap,
      title: "Emergency Response",
      description: "24/7 support team ready to handle any incidents or urgent situations during transport.",
    },
    {
      icon: CheckCircle,
      title: "Documentation",
      description: "Complete hazmat documentation, certifications, and compliance paperwork managed by our team.",
    },
  ]

  const cargoTypes = [
    "Flammable liquids and gases",
    "Oxidizers and peroxides",
    "Toxic substances",
    "Radioactive materials",
    "Corrosive materials",
    "Biological hazards",
  ]

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                Dangerous Goods Cargo Transport
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Specialized air transport of hazardous materials with full compliance to international safety standards. Our expert team ensures secure and safe delivery of dangerous goods to any destination worldwide.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dangerous-goods-class-2-gases-MGgTMmOzv4lp2jYTYLkUsngDefM47G.jpg"
                alt="Dangerous Goods Transport"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-foreground">
              Safe & Compliant Hazmat Transport
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6 max-w-3xl">
              Transporting dangerous goods requires specialized knowledge, equipment, and compliance expertise. At Transafrican Air, we provide comprehensive hazardous materials charter services that meet the strictest international safety standards including IATA, IMDG, and local regulatory requirements.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
              Our certified team handles all aspects of dangerous goods transport, from proper packaging and labeling to specialized aircraft selection and emergency response protocols.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-primary">Our Hazmat Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <div key={idx} className="bg-white rounded-lg shadow-md p-6 border border-primary/10">
                    <div className="flex items-start gap-4">
                      <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                        <p className="text-foreground/80 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Cargo Types */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-primary">Cargo Types We Transport</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cargoTypes.map((type, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <Package className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-semibold">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose */}
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 border border-primary/20 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
              Why Choose Transafrican Air for Hazmat Transport?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Regulatory Expertise</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Our team is fully trained and certified in all international dangerous goods regulations including IATA, IMDG, and DOT requirements.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Specialized Equipment</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Access to properly equipped aircraft and ground handling facilities designed specifically for hazardous materials transport.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Safety First</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Comprehensive safety protocols, emergency response procedures, and 24/7 support for complete peace of mind.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Global Network</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Extensive connections enabling secure transport to any destination with full compliance at every step.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-primary/10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Need Dangerous Goods Transport?
            </h2>
            <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
              Contact our hazmat specialists to discuss your dangerous goods charter requirements and get a competitive quote.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
