"use client"

import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      company: "UNICEF East Africa",
      role: "Regional Director",
      content:
        "Transafrican Air has been instrumental in our vaccine distribution programs. Their reliability, professionalism, and commitment to our mission have made them an invaluable partner in reaching remote communities.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "James Mwangi",
      company: "Kenyan Petroleum Corporation",
      role: "Logistics Manager",
      content:
        "Working with Transafrican Air for our oil field personnel logistics has transformed our operations. Their punctual service and professional team have reduced our operational downtime significantly.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Emma Davies",
      company: "Global Pharma Solutions",
      role: "Supply Chain Director",
      content:
        "The cold chain logistics and temperature control solutions from Transafrican Air have been critical for our pharmaceutical distribution. We trust them completely with our most sensitive shipments.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Peter Katende",
      company: "Emergency Response Network",
      role: "Operations Chief",
      content:
        "When seconds count, Transafrican Air delivers. Their emergency response charters have saved lives. The speed, professionalism, and compassion of their team is unmatched.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Rachel Okonkwo",
      company: "African Media Productions",
      role: "Executive Producer",
      content:
        "Transporting production equipment across multiple African countries has never been easier. Their film and TV media charter solutions are comprehensive and professional.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      name: "Michael Kipchoge",
      company: "International Sports Federation",
      role: "Operations Director",
      content:
        "For our major sporting events across Africa, Transafrican Air handles all our team transport. Their dedication to excellence and punctuality is exactly what we need.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const caseStudies = [
    {
      id: 1,
      title: "COVAX Vaccine Distribution: Reaching 50,000 Vaccination Sites",
      excerpt:
        "How Transafrican Air's rapid deployment and cold chain logistics enabled successful vaccine distribution across East Africa.",
      category: "Humanitarian",
      slug: "covax-vaccine-distribution",
      image: "/placeholder.svg?height=400&width=600",
      results: ["10,000+ tons delivered", "15 countries served", "Zero cold chain failures"],
    },
    {
      id: 2,
      title: "Emergency Medical Evacuations: Life-Saving Rapid Response",
      excerpt:
        "Real-world examples of how our emergency response charters have provided critical medical transport in urgent situations.",
      category: "Medical",
      slug: "emergency-medical-evacuations",
      image: "/placeholder.svg?height=400&width=600",
      results: ["24/7 availability", "Sub-1 hour response", "100% safety record"],
    },
    {
      id: 3,
      title: "Oil & Gas Personnel Logistics: Streamlining Remote Operations",
      excerpt:
        "A case study on how scheduled and charter services improved efficiency for major petroleum operations in remote regions.",
      category: "Industrial",
      slug: "oil-gas-personnel-logistics",
      image: "/placeholder.svg?height=400&width=600",
      results: ["40% cost reduction", "90% uptime improvement", "2,500+ personnel/month"],
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Testimonials & Case Studies</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            See what our clients say about working with Transafrican Air and how we've made a difference in their
            operations.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">What Our Clients Say</h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl">
            Trusted by humanitarian organizations, government institutions, and leading companies across Africa.
          </p>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md p-8 border border-primary/10 hover:shadow-lg transition-shadow"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-foreground/10">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance text-foreground">Featured Case Studies</h2>

          {/* Case Studies Grid */}
          <div className="space-y-12">
            {caseStudies.map((caseStudy) => (
              <Link key={caseStudy.id} href={`/case-studies/${caseStudy.slug}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="h-64 md:h-96 overflow-hidden">
                      <img
                        src={caseStudy.image || "/placeholder.svg"}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      {/* Category */}
                      <span className="inline-block w-fit bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                        {caseStudy.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{caseStudy.title}</h3>

                      {/* Excerpt */}
                      <p className="text-foreground/70 leading-relaxed mb-6">{caseStudy.excerpt}</p>

                      {/* Results */}
                      <div className="mb-6">
                        <h4 className="font-bold text-foreground mb-3">Key Results</h4>
                        <ul className="space-y-2">
                          {caseStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-foreground/70">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-primary font-semibold group">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Become Our Next Success Story?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join the growing list of organizations that trust Transafrican Air for their aviation and logistics needs.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
