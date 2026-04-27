import Link from "next/link"
import { ArrowRight, Users, Briefcase, MapPin, Zap } from "lucide-react"

export const metadata = {
  title: "Meetings, Incentives, Conferences & Events - Transafrican Air",
  description:
    "Group charter solutions for corporate meetings, incentive trips, conferences, and special events with bespoke travel arrangements",
}

export default function MeetingsIncentivesEventsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                MICE & Group Events
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Specialized charter solutions for meetings, incentive travel, conferences, and corporate events with seamless logistics.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business-meeting-speaking-and-black-man-with-discussion-planning-and-corporate-proposal-staff-3zHDwN0or9zIryivKcBjKKC1l3z6uH.jpg"
                alt="Corporate group charter"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance">Corporate Events Made Effortless</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Seamless Coordination</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                From booking to arrival, we handle all travel logistics, allowing your attendees to focus on the meeting or event objectives.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Premium Experience</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Impress your participants with luxury travel, professional service, and reliable scheduling that reflects your corporate standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance">Event Solutions We Specialize In</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Corporate Meetings</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Executive retreats, board meetings, and annual conferences with dedicated charter support and on-time performance guarantees.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Incentive Trips</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Reward your top performers with exclusive travel experiences combining comfort, convenience, and unforgettable destinations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Conferences & Forums</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Large-scale group transportation for international conferences, trade shows, and industry forums across Africa and beyond.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Special Events</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Product launches, gala events, and private celebrations with customized charter packages tailored to your vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance">Why Choose Transafrican Air for Your Events?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <h3 className="text-lg font-bold text-primary mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Custom departure and arrival times accommodating your event schedule with no commercial flight constraints.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <h3 className="text-lg font-bold text-primary mb-2">Cost-Effective Groups</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Significant savings when organizing group travel compared to individual bookings on commercial airlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg shadow-lg p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Plan Your Next Corporate Event</h2>
            <p className="text-sm md:text-base text-primary-foreground/95 max-w-2xl mx-auto mb-6 leading-relaxed">
              Contact our team to discuss customized charter solutions for your meetings, incentives, conferences, or special events.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Request Event Charter Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
