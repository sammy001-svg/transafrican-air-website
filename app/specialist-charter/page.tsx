import { ArrowRight, Heart, Zap, Stethoscope, Clapperboard as Clapper, Trophy } from "lucide-react"
import Link from "next/link"
import { QuoteForm } from "@/components/quote-form"

export const metadata = {
  title: "Emergency Charter Solutions - Transafrican Air",
  description:
    "Rapid response charter services for medical evacuations, life support systems, ground transport, inflight medical care, and family travel arrangements.",
}

export default function EmergencyCharterSolutionsPage() {
  const specialties = [
    {
      id: 1,
      title: "Medical Charters",
      icon: Stethoscope,
      description:
        "Rapid response medical evacuations and organ transplant missions with specialized equipment and trained personnel.",
      image: "/medical-charter.jpg",
      href: "/medical-charters",
    },
    {
      id: 2,
      title: "Ground Transportation",
      icon: Trophy,
      description:
        "Coordinated ground transportation to and from the aircraft, ensuring seamless transfer between the medical facility and the air ambulance.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emergency-medical-service-yyNhjW06tOyYz9PPr1yCBZxvwsEi51.jpg",
      href: "/ground-transportation",
    },
    {
      id: 3,
      title: "In-Flight Medical Care",
      icon: Clapper,
      description:
        "Continuous monitoring and treatment during the flight, ensuring the patient receives the highest standard of care.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infusion-on-board-helicoter-of-emergency-medical-service-U1UGYbkZhIkq8TKQbXWkTO74E1IMXq.jpg",
      href: "/inflight-medical-care",
    },
    {
      id: 4,
      title: "Life Support Systems",
      icon: Zap,
      description:
        "Ventilators, defibrillators, and other life support equipment to stabilize critical patients.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inside-of-an-ambulance-high-key-oCkMsC6DoHBAwh7vKwKYGDd8nIGeNC.jpg",
      href: "/life-support-systems",
    },
    {
      id: 5,
      title: "Family Travel Arrangements",
      icon: Heart,
      description:
        "Assistance in arranging travel for family members who wish to accompany the patient or travel separately.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/african-family-at-airport-standing-with-luggage-ZQzPBEeDzBJ5KZGfoI23BIodjZYTR7.jpg",
      href: "/family-travel-arrangements",
    },
  ]

  const sectorServices = [
    {
      id: 1,
      title: "Pharmaceutical Transport",
      description:
        "Temperature-controlled logistics and cold chain compliance for pharmaceutical distribution and clinical trial materials.",
      image: "/pharmaceutical-transport.jpg",
      href: "/pharma-cargo",
    },
    {
      id: 2,
      title: "Government Charters",
      description:
        "Specialized charter solutions for government organizations, delegations, and official missions with secure operations.",
      href: "/government-charter",
    },
    {
      id: 3,
      title: "Travel Companies",
      description:
        "Partnership programs for travel operators and tour companies with flexible pricing and dedicated account management.",
      href: "/travel-companies",
    },
    {
      id: 4,
      title: "Airlines Solutions",
      description:
        "Aircraft leasing and cargo charter solutions designed for airline partners and interline operations.",
      href: "/airlines-solutions",
    },
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
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                 Emergency Charter Solutions
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                {"Providing lifesaving air ambulance services, emergency medical flights, and specialized care wherever it is needed."} 
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/air-rescue-service-zXqAjNkRl0sQd0dFHMwP33F1Mz271u.jpg"
                alt="Specialist Charter Solutions"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance text-foreground">Emergency Response Services</h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {specialties.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="h-40 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg?height=200&width=300"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed mb-3">{service.description}</p>
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Get Quote Section */}
          <section className="py-12 md:py-16">
            <QuoteForm
              charterType="medical"
              title="Emergency Charter Solutions - Get a Quote"
              description="Fill out the form below to get a personalized quote for your emergency response and medical charter needs. Select from our specialized services including medical charters, ground transport, inflight medical care, life support systems, and family travel arrangements."
            />
          </section>

          {/* Services Grid */}
          <div className="bg-primary/5 rounded-lg p-6 md:p-8 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-balance text-foreground">
              Why Choose Emergency Charter Solutions with Transafrican Air?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">24/7 Availability</h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Round-the-clock availability ensures we can respond to medical emergencies at any time, day or night.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">Rapid Response</h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Rapid mobilization and flight preparation to minimize response time and get critical care in the air fast.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">Medical Expertise</h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Specialized expertise in medical evacuations, organ transplants, and critical patient care during transport.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">Flexible & Responsive</h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Flexible scheduling, rapid deployment, and comprehensive logistics coordination for all emergency operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      null
    </>
  )
}
