import Link from "next/link"
import { ArrowRight, Trophy, Users, Zap, Shield } from "lucide-react"

export const metadata = {
  title: "Sports Teams Charter - Transafrican Air",
  description:
    "Dedicated charter solutions for sports teams, tournaments, and athletic events with specialized equipment transport and comfort",
}

export default function SportsTeamsCharterPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                Sports Teams Charter
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Specialized charter services designed for athletic teams, tournaments, and sports events with equipment transport and luxury comfort.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/at-the-check-in-counter-MiGA01MplnZX0HCC4duW9n3I1mK0OT.jpg"
                alt="Sports team charter"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance">Dedicated Sports Team Travel Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Performance-Focused</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                We understand the demands of competitive athletics. Our charters prioritize team comfort, rest, and preparation for optimal performance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Equipment Transport</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Specialized handling for sporting equipment, team gear, and physiotherapy equipment ensuring everything arrives game-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance">Sports Charter Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Trophy className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Tournament Transport</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Complete travel solutions for national and international tournaments with synchronized schedules and dedicated support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Team Accommodations</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Spacious aircraft with comfortable seating, private spaces for team strategizing, and catering options.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Flexible Scheduling</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Custom departure times, last-minute adjustments, and multi-leg itineraries to accommodate competition schedules.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Safety & Reliability</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    On-time performance guarantees, professional crew, and insurance coverage for peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Types */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance">Teams We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-primary mb-3">Professional Teams</h3>
              <p className="text-sm text-foreground/80">
                Football, rugby, cricket, and other professional sports teams requiring reliable, luxury travel solutions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-primary mb-3">University Athletics</h3>
              <p className="text-sm text-foreground/80">
                Collegiate sports programs needing coordinated travel for competitions and championships across regions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-primary mb-3">Youth & Development</h3>
              <p className="text-sm text-foreground/80">
                Junior teams and development squads with cost-effective charter packages for training camps and competitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg shadow-lg p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Get Your Team Tournament-Ready</h2>
            <p className="text-sm md:text-base text-primary-foreground/95 max-w-2xl mx-auto mb-6 leading-relaxed">
              Let us handle your travel logistics so your team can focus on winning. Contact us for customized sports charter solutions.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Request Sports Team Charter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
