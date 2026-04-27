"use client"

import { ArrowRight, Heart, Truck, Package, FileText, MapPin, Clipboard, RotateCw } from "lucide-react"
import Link from "next/link"
import { countryCodes } from "@/components/quote-form"
import { StaggeredText } from "./staggered-text"
import { MaskedTextReveal } from "./masked-text-reveal"

export default function CargoChartersSection() {
  const otherCargoServices = [
    {
      id: 1,
      title: "Live Animal Transport",
      description:
        "Air transport that is safe, humane, and focused on protecting the animals whilst handling them with supreme care.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_383851487_DJ1kiZLS9WBPzu5h7FpJnicGbf920wv4-9LHM4ZZKyYpEtwe85MNycdHAbvmv0l.jpg",
      href: "/live-animal-transport",
    },
    {
      id: 2,
      title: "Perishable",
      description:
        "We provide timely and dependable delivery to your destination, prioritizing the freshness of your cargo.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_231839148_JL4JxRQSeJRvkStVUGVUTDj8mIgxjMJt-7sAFFHAFaC0fxgAYogcb2FNnB2Qdte.jpg",
      href: "/perishable-cargo",
    },
    {
      id: 3,
      title: "Pharma",
      description:
        "Pharmaceutical products transported with utmost care, meeting the highest standards of quality, security, and compliance.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_386443524_AgsJM679Fy43dU5DK8b7mxDOK4iJu7mu-16YtYkMJe4G9O9dSzTfsX0FkCDF9X9.jpg",
      href: "/pharma-cargo",
    },
    {
      id: 4,
      title: "Automotive",
      description:
        "Our expertise and resources transport individual or multiple vehicles, ensuring pristine delivery to your destination.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loading-a-car-into-a-cargo-aircraft-gQ4BAok5NMKtXDdvPul4sVR9xYU78H.jpg",
      href: "/automotive-cargo",
    },
    {
      id: 5,
      title: "Dangerous Goods",
      description:
        "Specialized transport of hazardous materials with full compliance to international safety regulations and expert handling.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dangerous-goods-class-2-gases-D2Tuet6W7BtcoXcjmaGsmIcliK2tx3.jpg",
      href: "/dangerous-goods-cargo",
    },
    {
      id: 6,
      title: "General Cargo",
      description:
        "Efficient transport of standard freight and general cargo with reliable service to destinations worldwide.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_110404435_WFM5050YhholTrgoOBsFG9rJUdSdXglu-cTvZSJVJYTCvl81mzns2gIZ35eRiaQ.jpg",
      href: "/general-cargo",
    },
  ]

  const additionalServices = [
    {
      id: 1,
      title: "Customs Clearance",
      description:
        "Our team can assist with import and export customs documentation and procedures.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/custom%20clearance-iIjA6xu5kWWiUchQ8oF7TdDgssE6bI.jpg",
    },
    {
      id: 2,
      title: "Door-to-Door Delivery",
      description:
        "Coordination of ground transportation from the origin to the final destination.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/truck-KFVxpu3xguRKSjdu5Yspf3kv6FfQeu.jpg",
    },
    {
      id: 3,
      title: "Logistics Planning",
      description:
        "We can provide end-to-end logistics management and route optimization for your cargo.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/planning-dDmrn2mBHLIHyOFjxbjTLVDS2ZRumm.jpg",
    },
    {
      id: 4,
      title: "Cargo Handling",
      description:
        "We can source specialized handling for fragile, perishable, or hazardous goods.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_110404435_WFM5050YhholTrgoOBsFG9rJUdSdXglu-cTvZSJVJYTCvl81mzns2gIZ35eRiaQ.jpg",
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        {/* Content Container */}
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            {/* Left - Text Content */}
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <MaskedTextReveal
                as="h1"
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight"
              >
                Cargo Charter Solutions
              </MaskedTextReveal>
              <MaskedTextReveal
                as="p"
                className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed"
              >
                Fast, secure, and reliable air cargo services for urgent shipments, dangerous goods, humanitarian aid, and specialized transport needs across Africa and beyond.
              </MaskedTextReveal>
            </div>

            {/* Right - Image */}
            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_178000133_rSs35nNYXPZcE4NZgz2ejq02z7kFgF6N-cVrjmaSnjInhH1S21bThguisFhmhN9.jpg"
                alt="Cargo Loading Operations"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Charter Types Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Humanitarian Aid Featured Section */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="h-40 md:h-48 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-24%20at%203%2C20%2C14%20P-Picsart-AiImageEnhancer-cypi46Lw5u7zjJH3SFs25odIwnEFwR.jpeg"
                    alt="Humanitarian Aid Operations"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="p-4 md:p-6 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-6 h-6 text-primary icon-hover" />
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">Humanitarian and Relief</h2>
                  </div>
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-3">
                    Emergency support and rapid delivery of humanitarian aid in crisis situations. We work with governments, NGOs and aid agencies to quickly deliver relief operations with our specialist knowledge and global connections.
                  </p>
                  <Link
                    href="/humanitarian-aid"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all w-fit text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Other Cargo Services Grid */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-balance text-primary">Explore Cargo Charter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherCargoServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all w-fit text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cargo Loading Video Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg overflow-hidden shadow-md border border-primary/20">
              
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-balance text-primary">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Cargo Charters */}
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
              Why Choose Cargo Charters with Transafrican Air?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Speed & Efficiency</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Time-critical shipments require immediate action. Our rapid response capabilities ensure your cargo
                  reaches its destination without delay.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Specialized Handling</h4>
                <p className="text-foreground/80 leading-relaxed">
                  From dangerous goods to outsize cargo, our expert team has the knowledge and experience to handle any
                  shipping challenge safely and compliantly.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Global Network</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Our extensive connections with aircraft operators and logistics partners ensure we can source the
                  right aircraft for any route or requirement.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">End-to-End Support</h4>
                <p className="text-foreground/80 leading-relaxed">
                  We handle every aspect of your charter, from permits and clearances to on-ground representation and
                  delivery coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-primary/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">Heavy & Outsize Air Cargo - Get a Quote</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-sm text-yellow-800">
                <span className="font-semibold">Please Note:</span> This service is for transporting heavy & outsize cargo. For smaller items such as suitcases and parcels, we recommend using standard courier or shipping services, which can better accommodate your needs.
              </p>
            </div>

            {/* Quote Form */}
            <form className="space-y-6">
              {/* Row 1: Fly From, Fly To, Departing */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Fly From</label>
                  <input 
                    type="text" 
                    placeholder="Search by airport, city, ICAO, or IATA" 
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Fly To</label>
                  <input 
                    type="text" 
                    placeholder="Search by airport, city, ICAO, or IATA" 
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Departing</label>
                  <input 
                    type="date"
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                  />
                </div>
              </div>

              {/* Row 2: Payload Type, Weight, Dimensions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Payload Type *</label>
                  <select className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm">
                    <option>Heavy & Outsize</option>
                    <option>Machinery Equipment</option>
                    <option>Construction Materials</option>
                    <option>Industrial Parts</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Weight</label>
                  <input 
                    type="text" 
                    placeholder="If known"
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Dimensions</label>
                  <input 
                    type="text" 
                    placeholder="If known"
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                </div>
              </div>

              {/* Contact Person Section */}
              <div className="border-t border-primary/10 pt-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Contact Person</h3>
                
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <input 
                    type="text"
                    placeholder="First Name*"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                  <input 
                    type="text"
                    placeholder="Last Name*"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                  <input 
                    type="email"
                    placeholder="Email*"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <select className="px-3 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm">
                    <option>Country Code</option>
                    {countryCodes.map((country, index) => (
                      <option key={index} value={country.code}>
                        {country.code} {country.country}
                      </option>
                    ))}
                  </select>
                  <input 
                    type="tel"
                    placeholder="Phone*"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                  <input 
                    type="text"
                    placeholder="Company"
                    className="px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                </div>
              </div>

              {/* Comments and How you found us */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-foreground mb-2">Comments</label>
                  <textarea 
                    placeholder="Please provide any additional information or special requirements for your cargo charter."
                    rows={4}
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">How you found us</label>
                  <select className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm">
                    <option>Google</option>
                    <option>Search Engine</option>
                    <option>Social Media</option>
                    <option>Referral</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* reCAPTCHA Placeholder */}
              <div className="border-2 border-primary/20 rounded-lg p-4 bg-primary/5">
                <p className="text-sm text-foreground/70">reCAPTCHA verification required</p>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="px-8 py-3 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition flex items-center gap-2"
              >
                Submit
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
