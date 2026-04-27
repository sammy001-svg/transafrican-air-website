"use client"

import { ArrowRight, Users, Plane, HeartHandshake, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { countryCodes } from "@/components/quote-form"
import { MaskedTextReveal } from "@/components/masked-text-reveal"

export default function GroupCharterPage() {
  const [activeTab, setActiveTab] = useState("one-way")
  
  const charterServices = [
    {
      id: 1,
      title: "ACMI Leasing",
      icon: Users,
      description:
        "We offer a complete range of short and long-term Aircraft, Crew, Maintenance and Insurance leasing solutions.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_212955118_XPUOmE98LtmIih74iQskIqYPc7j45EoS%20-%20Copy-bxcCpnQIaUETuRkZwSgHu47R0UXIZO.jpg",
      href: "/acmi-leasing",
    },
    {
      id: 3,
      title: "Events Charter",
      icon: HeartHandshake,
      description:
        "Organize a charter to your next corporate event, saving you the time, money and inconvenience of a commercial flight.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/music%20event-nuTxIP8fzAWYjtDrkfulJfwUKdcokz.jpg",
      href: "/events-charter-concepts",
    },
    {
      id: 4,
      title: "Sports Team Charter",
      icon: Users,
      description:
        "Providing every team member with comfort, safety, and on-time service to ensure they are prepared to play and win.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/charter%20group%20plane-ESOE4Avo3Lg7CNUb7bIIY2z8JdFvHd.jpg",
      href: "/sports-team-charter",
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/60 -z-10"></div>
        
        {/* Content Container */}
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            {/* Left - Text Content */}
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <MaskedTextReveal
                as="h1"
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight"
              >
                Group Charter Solutions
              </MaskedTextReveal>
              <MaskedTextReveal
                as="p"
                className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed"
              >
                When you are travelling with 20 or more passengers, comfort and coordination matter. We arrange group charter aircraft suited for corporate travel, events, or urgent situations, with flexible options and custom touches such as branding and aircraft livery to match your purpose.
              </MaskedTextReveal>
            </div>

            {/* Right - Image */}
            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_1113073913_nO3He28x9tq8sopoFLo3xNZBvQ8tEN2M-89VXCs9ManLb93a4mnPeleQvBBfIQn.jpg"
                alt="Group Charter Solutions"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Charter Services Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <MaskedTextReveal as="h2" className="text-2xl md:text-3xl font-bold mb-8 text-balance text-primary">
            Explore Group Charter
          </MaskedTextReveal>

          {/* Services Grid */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {charterServices.map((service) => (
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

          {/* Additional Services Section */}
          <div className="mb-12">
            <MaskedTextReveal as="h2" className="text-2xl md:text-3xl font-bold mb-8 text-balance text-primary">
              Additional Services
            </MaskedTextReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_290144076_F4rmAptBnAOCI04lZLEDgJL5MpkJsXex-Znj1Xd1KTLwy2XOB2gDmE4naoxddb8.jpg"
                    alt="In-Flight Catering"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-2">In-Flight Catering</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Enjoy a freshly-prepared menu tailored to the tastes & dietary requirements of you and your passengers.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_73639306_1hsqERddutYEORXfM6NDdAFg1ilK0sVs-QzYXc2T65Tq7ZDbDR8hVCDC7oKFfmt.jpg"
                    alt="Limousine & Transfers"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-2">Limousine & Transfers</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Why should the luxury and convenience end when you land? Relax in a private vehicle to and from the airport.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_1659652998_o9gTl1BHbpWnK4TQ2TDDyt4sXYXn8Y1i-nypldZhfg1IATg9OMJCWCUPkqGb9FR.jpg"
                    alt="Aircraft Personalization"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-2">Aircraft Personalization</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Include bespoke elements such as embroidered headrests for your sports team crest or company logo.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_334046699_9cbGAs6xo3ybr2pVjZWFo7LaNkpdk3jj-5fP7AXkfN5BcHAYxDDSKZZ1PTB8MXh.jpg"
                    alt="VIP Lounge Access"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-2">VIP Lounge Access</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Relax in plush seating areas, enjoy peaceful surroundings, and unwind before your flight.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 border border-primary/20 mb-16">
            <MaskedTextReveal as="h2" className="text-3xl md:text-4xl font-bold mb-8 text-balance text-foreground">
              Why Choose Group Charter with Transafrican Air?
            </MaskedTextReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Quick Turnaround</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Fast response times and minimal scheduling delays ensure your personnel reach their destination on
                  time.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Capacity & Flexibility</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Various aircraft options to accommodate different group sizes and specialized operational
                  requirements.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Dedicated Support</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Our experienced team provides comprehensive logistics support and coordination throughout your
                  journey.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Reliable Service</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Proven track record with government institutions and major industrial operations across Africa.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Custom Solutions</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Tailored charter arrangements including branding, livery customization, and specialized amenities.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Cost Efficiency</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Competitive pricing on large group movements with volume discounts for series charters and regular
                  operations.
                </p>
              </div>
            </div>
          </div>

          {/* Charter Process */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 border border-primary/20">
            <MaskedTextReveal as="h2" className="text-3xl md:text-4xl font-bold mb-8 text-balance text-foreground">
              Our Group Charter Process
            </MaskedTextReveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { number: "1", title: "Assess", description: "Understand your group size and operational needs" },
                { number: "2", title: "Plan", description: "Design a customized charter solution" },
                { number: "3", title: "Coordinate", description: "Arrange logistics and ground support" },
                { number: "4", title: "Execute", description: "Deliver seamless group transport" },
              ].map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-foreground/70 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-primary/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">Commercial Charter Flights - Get A Quote</h2>
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-6 mb-8 border-b border-primary/10 pb-4">
              <button 
                onClick={() => setActiveTab("one-way")}
                className={`text-sm font-semibold pb-2 border-b-2 transition ${
                  activeTab === "one-way" 
                    ? "text-primary border-primary" 
                    : "text-foreground/50 border-transparent hover:text-foreground/70"
                }`}
              >
                One Way
              </button>
              <button 
                onClick={() => setActiveTab("round-trip")}
                className={`text-sm font-semibold pb-2 border-b-2 transition ${
                  activeTab === "round-trip" 
                    ? "text-primary border-primary" 
                    : "text-foreground/50 border-transparent hover:text-foreground/70"
                }`}
              >
                Round Trip
              </button>
              <button 
                onClick={() => setActiveTab("multi-leg")}
                className={`text-sm font-semibold pb-2 border-b-2 transition ${
                  activeTab === "multi-leg" 
                    ? "text-primary border-primary" 
                    : "text-foreground/50 border-transparent hover:text-foreground/70"
                }`}
              >
                Multi-Leg
              </button>
            </div>

            {/* Quote Form - One Way */}
            {activeTab === "one-way" && (
            <form className="space-y-6">
              {/* Row 1: Fly From and Fly To */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>

              {/* Row 2: Departing and Passengers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Departing</label>
                  <div className="flex flex-col md:flex-row gap-2">
                    <input 
                      type="date"
                      className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                    />
                    <input 
                      type="time"
                      className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Passengers</label>
                  <div className="flex flex-col md:flex-row gap-2">
                    <input 
                      type="number"
                      placeholder="5+ Years"
                      min="0"
                      className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                    />
                    <input 
                      type="number"
                      placeholder="2 - 12 Years"
                      min="0"
                      className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                    />
                  </div>
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

                {/* Country Code and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select className="w-full px-3 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm">
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
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm md:col-span-2"
                  />
                </div>
              </div>

              {/* Comments and How you found us */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-foreground mb-2">Comments</label>
                  <textarea 
                    placeholder="Please advise if you have any special requirements for your flight."
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
                className="w-full md:w-auto px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                Submit
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            )}

            {/* Quote Form - Round Trip */}
            {activeTab === "round-trip" && (
            <form className="space-y-6">
              {/* Row 1: Fly From and Fly To */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>

              {/* Row 2: Outbound and Return Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Outbound - Departing</label>
                  <div className="flex flex-col md:flex-row gap-2">
                    <input 
                      type="date"
                      className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                    />
                    <input 
                      type="time"
                      className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Return - Departing</label>
                  <div className="flex flex-col md:flex-row gap-2">
                    <input 
                      type="date"
                      className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                    />
                    <input 
                      type="time"
                      className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Passengers</label>
                <div className="flex flex-col md:flex-row gap-2">
                  <input 
                    type="number"
                    placeholder="5+ Years"
                    min="0"
                    className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                  <input 
                    type="number"
                    placeholder="2 - 12 Years"
                    min="0"
                    className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
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

                {/* Country Code and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select className="w-full px-3 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm">
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
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm md:col-span-2"
                  />
                </div>
              </div>

              {/* Comments and How you found us */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-foreground mb-2">Comments</label>
                  <textarea 
                    placeholder="Please advise if you have any special requirements for your flight."
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
                className="w-full md:w-auto px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                Submit
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            )}

            {/* Quote Form - Multi-Leg */}
            {activeTab === "multi-leg" && (
            <form className="space-y-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                <p className="text-sm text-foreground/80">Multi-leg flights allow you to plan complex routes with multiple stops. Add each leg with its own departure and arrival cities.</p>
              </div>

              {/* Leg 1 */}
              <div className="border-b border-primary/10 pb-6">
                <h4 className="text-lg font-bold text-foreground mb-4">Leg 1</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
                <div className="mt-4 flex flex-col md:flex-row gap-2">
                  <input 
                    type="date"
                    className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                  />
                  <input 
                    type="time"
                    className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                  />
                </div>
              </div>

              {/* Leg 2 */}
              <div className="border-b border-primary/10 pb-6">
                <h4 className="text-lg font-bold text-foreground mb-4">Leg 2</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
                <div className="mt-4 flex flex-col md:flex-row gap-2">
                  <input 
                    type="date"
                    className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                  />
                  <input 
                    type="time"
                    className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                  />
                </div>
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Passengers</label>
                <div className="flex flex-col md:flex-row gap-2">
                  <input 
                    type="number"
                    placeholder="5+ Years"
                    min="0"
                    className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
                  />
                  <input 
                    type="number"
                    placeholder="2 - 12 Years"
                    min="0"
                    className="flex-1 px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm"
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

                {/* Country Code and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select className="w-full px-3 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm">
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
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm md:col-span-2"
                  />
                </div>
              </div>

              {/* Comments and How you found us */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-foreground mb-2">Comments</label>
                  <textarea 
                    placeholder="Please advise if you have any special requirements for your flight."
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
                className="w-full md:w-auto px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                Submit
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
