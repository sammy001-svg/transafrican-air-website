"use client"

import { ArrowRight, CheckCircle, Plane, Building2, Zap, Wind } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { countryCodes } from "@/components/quote-form"
import { MaskedTextReveal } from "@/components/masked-text-reveal"

export default function PrivateJetCharterPage() {
  const [activeTab, setActiveTab] = useState('luxury')

  const charterTypes = [
    {
      id: 'luxury',
      title: 'Luxury Executive Charter',
      description: 'Premium private jet services for discerning executives who demand the highest standards of comfort and discretion.',
      features: ['VIP cabin amenities', 'Gourmet catering', 'Concierge services', 'WiFi and productivity suites']
    },
    {
      id: 'urgent',
      title: 'Urgent Operations Charter',
      description: 'Rapid response charter services for time-critical missions, emergency situations, and urgent business needs.',
      features: ['24/7 availability', 'Rapid deployment', 'Flexible routing', 'Direct airport access']
    },
    {
      id: 'premium',
      title: 'Premium Getaway Charter',
      description: 'Exclusive leisure charter experiences for vacations, special occasions, and memorable adventures.',
      features: ['Scenic routings', 'Resort partnerships', 'Experience coordination', 'Luxury ground services']
    }
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
                Private Charter Solutions
              </MaskedTextReveal>
              <MaskedTextReveal
                as="p"
                className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed"
              >
                No matter the mission, from executive travel to urgent operations or premium getaways, we provide private charter options tailored to your needs, with flexible access to a global network of aircraft at your disposal.
              </MaskedTextReveal>
            </div>

            {/* Right - Blank Space */}
            <div className="relative h-full overflow-hidden bg-primary/10">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Charter Types Section - Service Cards Grid */}
      <section id="charter-types" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <MaskedTextReveal as="h2" className="text-2xl md:text-3xl font-bold mb-8 text-balance text-primary">
            Explore Private Charter
          </MaskedTextReveal>
          
          {/* Services Grid */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Private Jet Charter Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="h-40 bg-primary/5"></div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-foreground mb-2">Private Jet Luxury</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-grow">
                    Experience luxury and flexibility with exclusive private jet charters. Travel on your schedule with complete privacy and premium amenities.
                  </p>
                  <Link href="/private-jets-guide" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all w-fit text-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Official Visits Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="h-40 bg-primary/5"></div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-foreground mb-2">Official Visits</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-grow">
                    It is our privilege to craft tailor-made flights for esteemed Government Officials and Dignitaries.
                  </p>
                  <Link href="/official-trips" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all w-fit text-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Wildlife Trips Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="h-40 bg-primary/5"></div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-foreground mb-2">Wildlife Trips</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-grow">
                    Charter a private jet for your next wildlife adventure, with access to exclusive reserves and parks.
                  </p>
                  <Link href="/wildlife-trips" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all w-fit text-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Helicopters Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="h-40 bg-primary/5"></div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-foreground mb-2">Helicopters</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-grow">
                    Fast helicopter services for medical evacuations, executive transport, and specialized operations with rapid response times.
                  </p>
                  <Link href="/helicopters" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all w-fit text-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Flying Private with Transafrican Air Section */}
      null

      {/* Leisure vs Business Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Leisure Card */}
            <div className="bg-primary text-white p-8 md:p-10 rounded-lg hover:shadow-lg transition border-2 border-primary/80">
              <MaskedTextReveal as="h3" className="text-2xl md:text-3xl font-bold mb-4">
                Flying by Private Jet for Leisure
              </MaskedTextReveal>
              <MaskedTextReveal as="p" className="text-white/95 mb-6 leading-relaxed">
                Traveling by private jet for leisure epitomizes indulgence, flexibility, and exclusivity. With private jet charter, travelers can embark on unforgettable journeys tailored to their desires and preferences. Whether it's a romantic getaway, a family vacation, or an adventure to a remote paradise, private jet travel offers unparalleled convenience and comfort.
              </MaskedTextReveal>
              <button className="font-bold text-white hover:text-white/80 transition inline-flex items-center gap-2">
                Plan your next private charter flight <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Business Card */}
            <div className="bg-primary text-white p-8 md:p-10 rounded-lg hover:shadow-lg transition border-2 border-primary/80">
              <MaskedTextReveal as="h3" className="text-2xl md:text-3xl font-bold mb-4">
                Flying by Private Jet for Business
              </MaskedTextReveal>
              <MaskedTextReveal as="p" className="text-white/95 mb-6 leading-relaxed">
                Private jet travel for business embodies efficiency, opulence, and enhanced productivity. Through private jet charter services, business travelers experience unparalleled flexibility and convenience. This mode of travel affords them the liberty to set their own departure schedule and fly directly to their intended destination.
              </MaskedTextReveal>
              <button className="font-bold text-white hover:text-white/80 transition inline-flex items-center gap-2">
                Plan your next business charter flight <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Private Jet Charter Quote Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg border border-slate-200 shadow-sm">
              <MaskedTextReveal as="h2" className="text-2xl md:text-3xl font-bold mb-2 text-red-600">
                Private Jet Charter - Get a Quote
              </MaskedTextReveal>
              <p className="text-foreground/70 mb-2 text-sm">
                We are committed to offering the most competitive market pricing. If you've received an alternative quote, we'll aim to match or beat it.
              </p>
              <p className="text-red-600 font-semibold mb-6 text-sm">
                Please include your <span className="underline">phone country code</span> when submitting an inquiry.
              </p>
              
              {/* Private Jet Charter Quote Form */}
              <form className="space-y-6">
                {/* Charter Type Selection */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Charter Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center gap-3 p-4 border-2 border-primary/20 rounded-lg cursor-pointer hover:bg-primary/5 transition">
                      <input type="radio" name="charterType" value="luxury" defaultChecked className="w-4 h-4" />
                      <span className="font-semibold text-foreground">Luxury Executive</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border-2 border-primary/20 rounded-lg cursor-pointer hover:bg-primary/5 transition">
                      <input type="radio" name="charterType" value="urgent" className="w-4 h-4" />
                      <span className="font-semibold text-foreground">Urgent Operations</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border-2 border-primary/20 rounded-lg cursor-pointer hover:bg-primary/5 transition">
                      <input type="radio" name="charterType" value="getaway" className="w-4 h-4" />
                      <span className="font-semibold text-foreground">Premium Getaway</span>
                    </label>
                  </div>
                </div>

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

                {/* Row 2: Departing Date/Time and Passengers */}
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
                    <input 
                      type="number"
                      placeholder="Number of passengers"
                      min="1"
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

                {/* Comments */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Comments</label>
                  <textarea 
                    placeholder="Please advise if you have any special requirements for your flight."
                    rows={4}
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder-foreground/40 text-sm resize-none"
                  />
                </div>

                {/* reCAPTCHA Placeholder */}
                <div className="border-2 border-primary/20 rounded-lg p-4 bg-primary/5">
                  <p className="text-sm text-foreground/70">reCAPTCHA verification required</p>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2"
                >
                  Submit Quote Request
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Help Section */}
            <div className="mt-6 text-center text-sm text-foreground/70">
              <p>
                Can't find your perfect jet? <Link href="/contact-us" className="text-red-600 font-bold hover:underline">Contact us</Link> and let our team search for you.
              </p>
              <Link href="#" className="inline-flex items-center gap-1 text-red-600 font-bold hover:underline mt-2">
                📄 Pricing & Aircraft Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
