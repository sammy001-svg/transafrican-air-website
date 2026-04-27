"use client"

import { ArrowRight, Zap, TrendingDown, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export default function DealsPage() {
  const emptyLegs = [
    {
      id: 1,
      route: "Nairobi (NBO) to Mombasa (MBA)",
      aircraft: "Boeing 737 Freighter",
      date: "February 15-20, 2026",
      capacity: "15,000 kg available",
      regularPrice: "$12,000",
      dealPrice: "$6,800",
      savings: "43% off",
      status: "Available",
    },
    {
      id: 2,
      route: "Kampala (EBB) to Kigali (KGL)",
      aircraft: "British Aerospace ATP",
      date: "February 18-22, 2026",
      capacity: "5,000 kg available",
      regularPrice: "$6,500",
      dealPrice: "$3,250",
      savings: "50% off",
      status: "Available",
    },
    {
      id: 3,
      route: "Dar es Salaam (DAR) to Nairobi (NBO)",
      aircraft: "Dornier 228",
      date: "February 21-25, 2026",
      capacity: "1,500 kg available",
      regularPrice: "$3,800",
      dealPrice: "$2,280",
      savings: "40% off",
      status: "Limited",
    },
    {
      id: 4,
      route: "Kigali (KGL) to Kampala (EBB)",
      aircraft: "British Aerospace ATP",
      date: "February 25-28, 2026",
      capacity: "5,000 kg available",
      regularPrice: "$6,500",
      dealPrice: "$3,900",
      savings: "40% off",
      status: "Available",
    },
  ]

  const promotions = [
    {
      id: 1,
      title: "Early Bird Discount",
      description: "Book your charter 30+ days in advance and save 15-20%",
      validUntil: "March 31, 2026",
      icon: Zap,
    },
    {
      id: 2,
      title: "Repeat Customer Loyalty",
      description: "Existing clients receive 10% discount on repeat bookings",
      validUntil: "Ongoing",
      icon: TrendingDown,
    },
    {
      id: 3,
      title: "Group Travel Bundle",
      description: "Book 5+ flights in a month and receive volume discounts up to 25%",
      validUntil: "April 30, 2026",
      icon: Calendar,
    },
    {
      id: 4,
      title: "Off-Peak Pricing",
      description: "Fly on weekdays and save 10-15% compared to weekend rates",
      validUntil: "Ongoing",
      icon: Zap,
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Special Deals & Empty Legs</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Save up to 50% on select charter flights and empty leg flights. Limited time offers available now.
          </p>
        </div>
      </section>

      {/* Empty Legs Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">Empty Leg Flights</h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              When we reposition aircraft between charters, you can take advantage of significantly reduced rates on
              empty leg flights. These one-time opportunities offer savings of 40-50% off standard charter prices.
            </p>
          </div>

          {/* Empty Legs Grid */}
          <div className="space-y-4 mb-12">
            {emptyLegs.map((leg) => (
              <div
                key={leg.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-primary"
              >
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Route Info */}
                    <div>
                      <div className="flex items-center gap-2 text-foreground/60 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>Route</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{leg.route}</h3>
                      <p className="text-sm text-foreground/70 mt-1">{leg.aircraft}</p>
                    </div>

                    {/* Date & Capacity */}
                    <div>
                      <div className="flex items-center gap-2 text-foreground/60 text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>Dates Available</span>
                      </div>
                      <p className="font-semibold text-foreground">{leg.date}</p>
                      <p className="text-sm text-foreground/70 mt-1">{leg.capacity}</p>
                    </div>

                    {/* Pricing */}
                    <div className="md:text-right">
                      <div className="text-sm text-foreground/60 mb-2">
                        <span className="inline-block bg-red-500/20 text-red-700 px-2 py-1 rounded text-xs font-bold">
                          {leg.savings}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/70 line-through">{leg.regularPrice}</p>
                      <p className="text-2xl font-bold text-primary">{leg.dealPrice}</p>
                    </div>
                  </div>

                  {/* Status and CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-foreground/10">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        leg.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {leg.status}
                    </span>
                    <Link
                      href="/get-quote"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Empty Legs */}
          <div className="text-center mb-16">
            <button className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded font-bold hover:bg-primary/20 transition">
              View All Empty Leg Flights
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance text-foreground">Current Promotions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {promotions.map((promo) => {
              const Icon = promo.icon
              return (
                <div
                  key={promo.id}
                  className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border-t-4 border-primary"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{promo.title}</h3>
                      <p className="text-sm text-foreground/60 mt-1">Valid until {promo.validUntil}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{promo.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Empty Legs Work */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance text-foreground">How Empty Legs Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: "1",
                title: "Aircraft Repositioning",
                description:
                  "When an aircraft completes a charter, it often needs to reposition to the next location. Instead of flying empty, we offer these flights at reduced rates.",
              },
              {
                number: "2",
                title: "Significant Savings",
                description:
                  "Empty leg flights are offered at 40-50% discount compared to standard charter prices, as the aircraft is already flying the route.",
              },
              {
                number: "3",
                title: "Limited Availability",
                description:
                  "These flights are available on a first-come, first-served basis. Subscribe to our empty leg alerts to never miss an opportunity.",
              },
            ].map((step) => (
              <div key={step.number} className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Alerts */}
      <section className="py-16 md:py-24 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-foreground">
            Never Miss an Empty Leg Opportunity
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Subscribe to our empty leg alerts and be notified of new deals instantly. Get early access to our best
            offerings.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded border border-foreground/20 focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded font-bold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Important Information</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed bg-white p-8 rounded-lg">
            <p>
              <strong>Empty Leg Availability:</strong> Empty leg flights are available on a first-come, first-served
              basis and may be subject to change or cancellation based on operational requirements.
            </p>
            <p>
              <strong>Route Flexibility:</strong> Most empty leg flights have fixed routes and times. Limited customization
              may be available; contact our team to discuss options.
            </p>
            <p>
              <strong>Booking Requirements:</strong> Empty leg flights typically require 48-72 hours notice. Rush bookings
              may incur additional fees.
            </p>
            <p>
              <strong>Promotion Terms:</strong> All promotions are subject to terms and conditions. Discounts cannot be
              combined. Some restrictions may apply to specific routes or aircraft types.
            </p>
            <p>
              <strong>Prices:</strong> All prices are quoted in USD and subject to fuel surcharges and applicable taxes.
              Final pricing will be confirmed upon booking.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Take Advantage of These Deals?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today to book your empty leg flight or discuss our current promotions.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
          >
            Book Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
