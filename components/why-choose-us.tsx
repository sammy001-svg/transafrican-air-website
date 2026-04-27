import { Globe, Plane, Phone, Award } from "lucide-react"
import { OdometerNumber } from "./odometer-number"

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      stat: "15+",
      title: "Years of Excellence",
      description:
        "Proven track record serving government institutions,the United Nations Missions, humanitarian agencies and corporate clients across Africa, Europe,MENA and Asia .",
    },
    {
      icon: Globe,
      stat: "40+",
      title: "Global Coverage",
      description: "Pan-African presence with reliable operations across multiple countries and continents.",
    },
    {
      icon: Plane,
      stat: "25+",
      title: "Diverse Fleet",
      description: "Access to a comprehensive range of aircrafts for every operational requirement.",
    },
    {
      icon: Phone,
      stat: "24/7",
      title: "Personal Service",
      description: "Dedicated account managers and operational teams available any time to support you.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance uppercase tracking-tight">
            Why Choose Transafrican Air
          </h2>
        </div>

        {/* Benefits Grid with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className={`px-6 md:px-8 py-8 text-center ${index !== benefits.length - 1 ? "md:border-r border-slate-300" : ""}`}
              >
                <div className="mb-6 flex justify-center">
                  <Icon className="w-12 h-12 text-primary icon-hover" />
                </div>
                <OdometerNumber value={benefit.stat} className="text-4xl md:text-5xl font-bold text-primary mb-3" />
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
