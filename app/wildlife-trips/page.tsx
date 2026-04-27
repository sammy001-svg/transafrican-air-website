import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import Link from "next/link"
import { ArrowRight, MapPin, Camera, Users, Shield, AlertCircle, Compass } from "lucide-react"

export const metadata: Metadata = generatePageMetadata('wildlifeTrips')

export default function WildlifeTripsPage() {
  const features = [
    {
      icon: Compass,
      title: "Remote Location Access",
      description: "Fly directly to remote safari lodges and conservation areas unreachable by commercial flights"
    },
    {
      icon: Camera,
      title: "Prime Viewing Seasons",
      description: "Time your safari perfectly with flexible charter scheduling for optimal wildlife viewing"
    },
    {
      icon: Users,
      title: "Group Packages",
      description: "Charter flights for adventure groups, photography expeditions, and wildlife enthusiasts"
    },
    {
      icon: Shield,
      title: "Professional Support",
      description: "Experienced crews familiar with safari routes and wildlife conservation protocols"
    }
  ]

  const destinations = [
    {
      name: "Serengeti Migration",
      description: "Witness the iconic wildebeest migration and abundant wildlife across Tanzania's vast plains"
    },
    {
      name: "Masai Mara",
      description: "Experience Kenya's premier wildlife reserve with exceptional game viewing opportunities"
    },
    {
      name: "Okavango Delta",
      description: "Explore Botswana's pristine wilderness and unique water-based safari ecosystem"
    },
    {
      name: "Victoria Falls Region",
      description: "Combine adventure with wildlife viewing in the stunning Zambia-Zimbabwe border region"
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
                Wildlife & Safari Adventure Charters
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-6">
                Experience Africa's most spectacular wildlife destinations with custom charter flights. Direct access to remote lodges, prime viewing locations, and unforgettable safari adventures.
              </p>
              <p className="text-foreground/70 mb-8">
                Whether you're a wildlife photographer, adventure traveler, or safari enthusiast, our charter services provide flexible, comfortable access to Africa's greatest natural treasures.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-80 md:h-96 lg:h-full lg:min-h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/small-aircraft-landing-on-a-bush-airstrip-7a07t2JsamdwPzzkOV8zKej1rQAURE.jpg"
                alt="Small aircraft landing on remote bush airstrip for safari access"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground text-balance">
            Why Charter for Your Safari Adventure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                      <p className="text-foreground/70">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground text-balance">
            Featured Safari Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="border border-slate-200 p-6 rounded-lg hover:border-primary transition">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-bold text-foreground">{destination.name}</h3>
                </div>
                <p className="text-foreground/70">{destination.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Your Safari Charter */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground text-balance">
              Planning Your Wildlife Adventure
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-foreground">Best Time to Visit</h3>
                <p className="text-foreground/70 mb-3">
                  Each destination has optimal viewing seasons. We help coordinate timing for peak wildlife activity—from the Great Migration to calving season.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-foreground">Flexible Scheduling</h3>
                <p className="text-foreground/70 mb-3">
                  Unlike commercial flights, charter flights adapt to your safari itinerary. Extend stays, visit multiple reserves, or follow wildlife patterns.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-foreground">Comfort & Safety</h3>
                <p className="text-foreground/70 mb-3">
                  Professional pilots experienced with wildlife routes, modern aircraft with excellent viewing windows, and full support services throughout your journey.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-foreground">Group Adventures</h3>
                <p className="text-foreground/70 mb-3">
                  Perfect for photography clubs, nature enthusiasts, family adventures, or corporate retreats. Custom group rates and specialized support available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready for Your African Safari Adventure?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Let Transafrican Air handle the transport while you focus on the wildlife experience. Professional, flexible, unforgettable.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Request a Charter Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
