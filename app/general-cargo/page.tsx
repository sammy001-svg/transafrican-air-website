"use client"

import { ArrowRight, Truck, Globe, Clock, DollarSign, BarChart3, Zap } from "lucide-react"
import Link from "next/link"

export default function GeneralCargoPage() {
  const services = [
    {
      icon: Truck,
      title: "Standard Freight",
      description: "Reliable transport of general cargo with flexible scheduling and competitive pricing for worldwide destinations.",
    },
    {
      icon: Globe,
      title: "International Routes",
      description: "Established connections across Africa, Europe, Asia, and beyond with extensive customs and clearance support.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Consistent and punctual service with real-time tracking and proactive communication throughout your shipment journey.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions",
      description: "Competitive rates and flexible cargo consolidation options to optimize your freight costs.",
    },
  ]

  const cargoCategories = [
    "Commercial goods and merchandise",
    "Industrial equipment and machinery",
    "Electronics and technology products",
    "Textiles and apparel",
    "Building materials and supplies",
    "Consumer products",
    "Spare parts and components",
    "Raw materials",
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
                General Cargo Air Transport
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Efficient and reliable air transport of standard freight and general cargo. Connect your business to markets worldwide with our flexible cargo solutions and competitive pricing.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_110404435_WFM5050YhholTrgoOBsFG9rJUdSdXglu-cTvZSJVJYTCvl81mzns2gIZ35eRiaQ.jpg"
                alt="General Cargo Transport"
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
              Reliable General Cargo Solutions
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6 max-w-3xl">
              Whether you're shipping commercial goods, industrial equipment, or consumer products, our general cargo services provide reliable, cost-effective air transport to destinations worldwide. We handle a wide variety of freight types with professional care and attention to detail.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
              From small shipments to full charter capacity, we offer flexible solutions tailored to your specific logistics requirements with transparent pricing and exceptional service.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-primary">Why Choose Our General Cargo Services</h2>
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

          {/* Cargo Categories */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-primary">Types of Cargo We Transport</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cargoCategories.map((category, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <BarChart3 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-semibold text-sm">{category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 border border-primary/20 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
              Advantages of Air General Cargo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Speed & Efficiency
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Significantly faster than sea or surface transport, ensuring your cargo reaches its destination quickly and efficiently.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Global Coverage
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Extensive network connecting major markets and remote destinations with regular service schedules.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Flexible Capacity
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  From partial charter to full aircraft capacity, we adapt to your cargo volume and budget requirements.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Predictable Transit
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Reliable scheduled service with minimal delays, allowing better inventory management and planning.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-primary/10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Ship Your General Cargo Today
            </h2>
            <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
              Get competitive quotes for your general cargo shipment with our transparent pricing and reliable service.
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
