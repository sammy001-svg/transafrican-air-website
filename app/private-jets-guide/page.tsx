"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PrivateAircraftsGuidePage() {
  const aircraftCategories = [
    {
      id: "helicopters",
      title: "Helicopters",
      passengers: "1-8 Passengers",
      description:
        "One of the fastest methods of getting to and from a destination, offering complete discretion and flexibility.",
      image: "/luxury-helicopter.jpg",
    },
    {
      id: "piston-propellers",
      title: "Piston Propellers",
      passengers: "2-5 Passengers",
      description: "Perfect for short routes and regional flights, offering affordable private aviation solutions.",
      image: "/piston-aircraft.jpg",
    },
    {
      id: "turboprops",
      title: "Turboprops",
      passengers: "6-10 Passengers",
      description:
        "Efficient and capable aircraft for business travel across Africa with excellent runway performance.",
      image: "/turboprop-aircraft.jpg",
    },
    {
      id: "very-light-jets",
      title: "Very Light Jets",
      passengers: "4-8 Passengers",
      description: "Compact yet comfortable jets ideal for quick regional business trips with style.",
      image: "/very-light-jet.jpg",
    },
    {
      id: "light-jets",
      title: "Light Jets",
      passengers: "6-8 Passengers",
      description: "Entry-level business jets offering range and comfort for domestic and regional routes.",
      image: "/light-jet-aircraft.jpg",
    },
    {
      id: "super-light-jets",
      title: "Super Light Jets",
      passengers: "8-10 Passengers",
      description: "Enhanced capability light jets with improved range and luxury accommodations.",
      image: "/super-light-jet.jpg",
    },
    {
      id: "mid-size-jets",
      title: "Mid-Size Jets",
      passengers: "8-10 Passengers",
      description: "The most popular choice for intercontinental business travel with superior range and comfort.",
      image: "/mid-size-jet.jpg",
    },
    {
      id: "super-midsize-jets",
      title: "Super Mid-Size Jets",
      passengers: "10-13 Passengers",
      description: "Premium cabin space and advanced technology for executive business aviation.",
      image: "/super-midsize-jet.jpg",
    },
    {
      id: "heavy-jets",
      title: "Heavy Jets",
      passengers: "12-19 Passengers",
      description: "Large cabin jets with intercontinental range, perfect for long-distance executive travel.",
      image: "/heavy-jet-aircraft.jpg",
    },
    {
      id: "vip-airliners",
      title: "VIP/Executive Airliners",
      passengers: "Up to 50+ Passengers",
      description: "Customized large aircraft for premium group travel and special charters.",
      image: "/vip-executive-airliner.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Private Aircraft Categories</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Explore our extensive range of private aircrafts tailored to meet every business travel need and passenger
            requirement.
          </p>
        </div>
      </section>

      {/* Aircraft Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aircraftCategories.map((aircraft) => (
              <div
                key={aircraft.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                {/* Image */}
                <div className="h-40 overflow-hidden bg-gray-100">
                  <img
                    src={aircraft.image}
                    alt={aircraft.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-primary mb-1">{aircraft.title}</h3>
                  <p className="text-sm text-foreground/60 mb-2">{aircraft.passengers}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed flex-grow">{aircraft.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/get-quote"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Request A Quote
            </Link>
          </div>
        </div>
  </section>
  </main>
  )
}
