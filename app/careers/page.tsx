'use client'

import { ArrowRight, Briefcase, Users, MapPin, DollarSign } from 'lucide-react'
import Link from 'next/link'



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

            {/* Right - Blank Space */}
            <div className="relative h-full overflow-hidden bg-primary/10">
              {/* Subtle gradient overlay */}
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

      {/* Job Openings - Blank Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-balance text-foreground">Open Positions</h2>
          <div className="bg-muted p-8 rounded-lg max-w-2xl mx-auto border border-foreground/10">
            <p className="text-lg text-foreground/80 mb-4">There are no open positions at this time.</p>
            <p className="text-sm text-foreground/60 leading-relaxed mb-6">
              We are always looking for exceptional talent to join our team. Feel free to submit your resume for future consideration.
            </p>
            <Link
              href="mailto:careers@transafricanair.com"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Send Resume to Human Resources <ArrowRight className="w-4 h-4" />
            </Link>
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
