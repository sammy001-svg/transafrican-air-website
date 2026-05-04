"use client"

import { useEffect, useRef } from "react"
import { MaskedTextReveal } from "./masked-text-reveal"
import { ParallaxElement } from "./parallax-element"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const contentRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!contentRef.current || !sectionRef.current) return

    const ctx = gsap.context(() => {
      // Any additional animations can go here
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 md:py-24 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Sticky */}
          <div ref={contentRef} className="space-y-6 sticky top-24 self-start">
            <MaskedTextReveal
              as="h2"
              className="text-4xl md:text-5xl font-bold text-foreground text-balance"
            >
              About Us
            </MaskedTextReveal>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                <MaskedTextReveal
                  as="span"
                  className="font-bold text-black"
                >
                  Transafrican Air
                </MaskedTextReveal>
                <MaskedTextReveal
                  as="span"
                  className="text-lg text-foreground/80 leading-relaxed"
                >
                  {" "}specializes in tailored air cargo and passenger transport solutions for urgent Humanitarian requirements, the United Nations and
                government institutions. We support both regional cargo consolidators, freight forwarders and airline partners as well as corporates and
                individuals with short term, long term, scheduled and ad-hoc needs for aircraft provision.
                </MaskedTextReveal>
              </p>
            </div>
          </div>

          {/* Right Image with Parallax */}
          <ParallaxElement speed={0.3} className="relative h-96">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-24%20at%203.20.14%20PM-Yfsc70TAMjZ2qdpFqiB0rlkDKePKnP.png"
              alt="About Transafrican Air"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </ParallaxElement>
        </div>
      </div>
    </section>
  )
}
