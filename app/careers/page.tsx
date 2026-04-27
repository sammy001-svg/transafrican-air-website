'use client'

import { ArrowRight, Briefcase, Users, MapPin, DollarSign } from 'lucide-react'
import Link from 'next/link'

const jobOpenings = [
  {
    id: 1,
    title: 'Flight Operations',
    description: 'Lead our flight operations team with expertise in scheduling, compliance, and crew management across African routes.',
    requirements: ['Commercial pilot license or operations experience', '5+ years in aviation', 'Knowledge of African airspace regulations'],
    location: 'Nairobi, Kenya',
  },
  {
    id: 2,
    title: 'Engineering',
    description: 'Maintain and optimize our diverse aircraft fleet with cutting-edge maintenance and engineering expertise.',
    requirements: ['Aircraft maintenance certification', 'Troubleshooting expertise', 'Component overhaul experience'],
    location: 'Nairobi, Kenya',
  },
  {
    id: 3,
    title: 'Cargo Logistics',
    description: 'Manage cargo operations, logistics planning, and supply chain optimization for time-critical deliveries.',
    requirements: ['Logistics management background', 'Customs and import/export knowledge', 'Warehouse management systems'],
    location: 'Nairobi, Kenya',
  },
  {
    id: 4,
    title: 'Aviation Management',
    description: 'Shape the future of Transafrican Air through strategic management, operations oversight, and business development.',
    requirements: ['MBA or business degree', 'Aviation industry experience', 'P&L management expertise'],
    location: 'Nairobi, Kenya',
  },
  {
    id: 5,
    title: 'Commercial Sales',
    description: 'Drive revenue growth by building relationships with corporate clients, freight forwarders, and government agencies.',
    requirements: ['B2B sales experience', 'Aviation or logistics background', 'Strong negotiation skills'],
    location: 'Nairobi, Kenya',
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                Join Transafrican Air
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Be part of a dynamic team revolutionizing aviation connectivity across Africa. We're looking for talented professionals passionate about excellence and innovation.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/happy-business-people-and-applause-with-congratulations-for-winning-promotion-or-success-at-7FqlhEpHlGWhVsjEMTWPRy5FRTvgrx.jpg"
                alt="Transafrican Air careers"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Talented Team</h3>
              <p className="text-sm text-foreground/80">
                Work alongside aviation professionals committed to excellence and innovation.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Growth Opportunities</h3>
              <p className="text-sm text-foreground/80">
                Advance your career with continuous learning and professional development.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">African Impact</h3>
              <p className="text-sm text-foreground/80">
                Make a real difference in connecting Africa and supporting economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-balance text-foreground">Open Positions</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{job.title}</h3>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-foreground/80 leading-relaxed mb-4">{job.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-foreground mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="mailto:careers@transafricanair.com"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded font-semibold hover:opacity-90 transition"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">Our Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Submit', desc: 'Send your resume and cover letter' },
              { step: 2, title: 'Review', desc: 'Our team evaluates your qualifications' },
              { step: 3, title: 'Interview', desc: 'Connect with our hiring managers' },
              { step: 4, title: 'Join', desc: 'Start your aviation career' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Ready to Transform Aviation in Africa?</h2>
          <p className="text-sm md:text-base text-primary-foreground/95 max-w-2xl mx-auto mb-6 leading-relaxed">
            Submit your application today and join the team building the future of African aviation connectivity.
          </p>
          <Link
            href="mailto:careers@transafricanair.com"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
          >
            Contact Human Resources
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
