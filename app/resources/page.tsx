"use client"

import { ArrowRight, Plane, BookOpen, Briefcase, Shield, FileText, Download } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: "Aircraft Fleet",
      icon: Plane,
      description:
        "Explore our comprehensive fleet of modern aircraft. View detailed specifications, capacity information, and capabilities of each aircraft in our extensive network.",
      href: "/aircraft-guide",
    },
    {
      id: 3,
      title: "Careers",
      icon: Briefcase,
      description:
        "Join our team and become part of Africa's leading aviation service provider. Explore exciting career opportunities and growth potential with Transafrican Air.",
      href: "/careers",
    },
    {
      id: 4,
      title: "Privacy Policy",
      icon: Shield,
      description:
        "Learn how we protect your personal information and maintain your privacy. Read our comprehensive privacy policy and data protection practices.",
      href: "/privacy-policy",
    },
    {
      id: 5,
      title: "Terms & Conditions",
      icon: FileText,
      description:
        "Review our terms and conditions for charter services. Understand the policies and agreements that govern your interactions with Transafrican Air.",
      href: "/terms-and-conditions",
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
                Resources
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Everything you need to know about Transafrican Air. Access our fleet information, explore career opportunities, and review our policies.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_1323549954_WLALISKG0hE8sN5XboDpLZgGh1m2U5PF-U6q3kjtITPNspxPZ18XNXgtSy7TtoS.jpg"
                alt="Resources - Modern business buildings with aircraft"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">Explore Our Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon
              const LinkComponent = resource.isExternal ? 'a' : Link
              const linkProps = resource.isExternal 
                ? { href: resource.href, target: '_blank', rel: 'noopener noreferrer' }
                : { href: resource.href }
              
              return (
                <LinkComponent
                  key={resource.id}
                  {...linkProps}
                  className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-6 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-foreground/80 leading-relaxed flex-grow mb-4">
                      {resource.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      {resource.isExternal ? 'Download' : 'Explore'}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </LinkComponent>
              )
            })}
          </div>
        </div>
  </section>
  </>
  )
}
