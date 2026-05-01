import { ArrowRight, Plane, Briefcase } from "lucide-react"
import Link from "next/link"
import { StaggeredText } from "./staggered-text"
import { MaskedTextReveal } from "./masked-text-reveal"

const services = [
  {
    id: 0,
    title: "Group Charter",
    icon: Plane,
    image: "/images/plane-203.jpg",
    description:
      "Professional group charter services for personnel logistics, emergency response, and series charters with flexible scheduling.",
    link: "/group-charter",
  },
  {
    id: 1,
    title: "Private Charters",
    icon: Plane,
    image: "/images/private-jet-hangar.jpg",
    description:
      "Exclusive aircraft charter solutions for executives, groups, and emergency situations with complete flexibility and premium service.",
    link: "/private-jet-charter",
  },
  {
    id: 3,
    title: "Cargo Charters",
    icon: Plane,
    description:
      "Fast and reliable cargo charter solutions for urgent shipments, dangerous goods, heavy cargo, and humanitarian aid operations.",
    link: "/cargo-charters",
  },
]

export default function WhatWeDoSection() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative text-primary-foreground py-16 md:py-24 overflow-hidden -mt-16"
        style={{
          backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bknavtshny11ycgukdv5-HFmuSmTLUibwd8cNMvsVw27TtTZn5T.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <MaskedTextReveal as="h1" className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Services
          </MaskedTextReveal>
          <MaskedTextReveal as="p" className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Comprehensive air cargo solutions designed to meet the diverse needs of government institutions, humanitarian
            organizations, and commercial partners.
          </MaskedTextReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link href={service.link} key={service.id}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full cursor-pointer group">
                    {/* Image */}
                    {service.image && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1 icon-hover" />
                        <MaskedTextReveal as="h3" className="text-xl font-bold text-foreground">
                          {service.title}
                        </MaskedTextReveal>
                      </div>
                      <MaskedTextReveal as="p" className="text-foreground/70 text-sm leading-relaxed">
                        {service.description}
                      </MaskedTextReveal>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Why Choose Us */}
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 border border-primary/20">
            <MaskedTextReveal as="h2" className="text-3xl md:text-4xl font-bold mb-8 text-balance">
              Why Choose Transafrican Air?
            </MaskedTextReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Reliability & Trust</h4>
                <p className="text-foreground/80 leading-relaxed">
                  With years of experience serving government and humanitarian organizations, we understand the critical
                  nature of your cargo operations.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Global Network</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Our extensive network of interline partners ensures seamless connectivity and coverage across Africa
                  and beyond.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Flexible Solutions</h4>
                <p className="text-foreground/80 leading-relaxed">
                  From scheduled services to ad-hoc charters, we offer tailored solutions that fit your specific
                  operational needs.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">Expertise & Support</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Our dedicated team provides comprehensive support throughout your cargo journey, ensuring smooth
                  operations every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Partner with Us?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your air cargo needs and discover how we can support your operations.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center text-accent-foreground py-2 rounded font-medium hover:opacity-90 transition stagger-on-hover text-sm px-5 mx-0 gap-1.5 shadow-xl border-foreground bg-black border-0"
          >
            <StaggeredText text="Get A Quote" delay={0.01} />
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
