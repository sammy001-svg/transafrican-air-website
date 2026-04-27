"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { StaggeredText } from "./staggered-text"
import { MaskedTextReveal } from "./masked-text-reveal"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header with Image */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        {/* Content Container */}
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            {/* Left - Text Content */}
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <MaskedTextReveal as="h1" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                Contact Us
              </MaskedTextReveal>
              <MaskedTextReveal as="p" className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                We would love to hear from you. Reach out to our team for charters, sales, or any inquiries.
              </MaskedTextReveal>
            </div>

            {/* Right - Image */}
            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact%20us%202-MBUbE8cGU1yXrzgZ68fAZToDEqJ6n6.jpg"
                alt="Customer service representative with headphones"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <MaskedTextReveal as="h2" className="text-3xl font-bold text-foreground mb-8">
                We Would Love to Hear from You!
              </MaskedTextReveal>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 206 822 285"
                    required
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry Subject"
                    required
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition stagger-on-hover"
                >
                  <StaggeredText text={submitted ? "Message Sent!" : "Send Message"} delay={0.01} />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Charters Enquiries */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Charters Enquiries</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1 icon-hover" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:charters@transafricanair.com"
                        className="text-sm md:text-base text-foreground hover:text-primary font-semibold transition break-all"
                      >
                        charters@transafricanair.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1 icon-hover" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs md:text-sm text-muted-foreground">Phone</p>
                      <a
                        href="tel:+254206822285"
                        className="text-sm md:text-base text-foreground hover:text-primary font-semibold transition"
                      >
                        +254 206 822 285
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sales and Commercial Enquiries */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Sales and Commercial Enquiries</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1 icon-hover" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:sales@transafricanair.com"
                        className="text-sm md:text-base text-foreground hover:text-primary font-semibold transition break-all"
                      >
                        sales@transafricanair.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1 icon-hover" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs md:text-sm text-muted-foreground">Phone</p>
                      <a
                        href="tel:+254206822285"
                        className="text-sm md:text-base text-foreground hover:text-primary font-semibold transition"
                      >
                        +254 206 822 285
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Enquiries */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Info Enquiries</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1 icon-hover" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:info@transafricanair.com"
                        className="text-sm md:text-base text-foreground hover:text-primary font-semibold transition break-all"
                      >
                        info@transafricanair.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1 icon-hover" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs md:text-sm text-muted-foreground">Phone</p>
                      <a
                        href="tel:+254206822285"
                        className="text-sm md:text-base text-foreground hover:text-primary font-semibold transition"
                      >
                        +254 206 822 285
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Location</h3>
                <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1 icon-hover" />
                  <div>
                    <p className="text-foreground font-semibold">Jomo Kenyatta International Airport</p>
                    <p className="text-foreground">Airport Trade Center Building</p>
                    <p className="text-foreground">2nd Floor - Wing A</p>
                    <p className="text-foreground">P.O Box 19131-00501</p>
                    <p className="text-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Location</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="h-96 w-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.79416845477!2d36.899178939550765!3d-1.3418051000000033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d7dd4558189%3A0xa9a304dde009742f!2sAirport%20Trade%20Centre!5e0!3m2!1sen!2ske!4v1640554878209!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  title="Transafrican Air Location Map"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <a
                href="https://maps.app.goo.gl/YgXEvL4n2bmnTTLv7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-primary-foreground py-2 rounded hover:opacity-90 transition stagger-on-hover text-sm font-medium tracking-tighter gap-1 px-4"
              >
                <MapPin className="w-5 h-5" />
                <StaggeredText text="Open in Google Maps" delay={0.01} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
