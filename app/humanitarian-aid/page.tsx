import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import Link from "next/link"
import { ArrowRight, Heart, Users, Globe, Zap } from "lucide-react"

export const metadata: Metadata = generatePageMetadata('humanitarianCharters')

export default function HumanitarianAidPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Humanitarian Aid Charter</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Emergency support and rapid delivery of relief supplies in crisis situations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Operations Gallery */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance text-foreground">Humanitarian Operations in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Loading Operations */}
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-24%20at%203.20.03%20PM-3qwhpUYvTNZBX2YzE9uWCjlmgaVjyw.png"
                  alt="Humanitarian cargo loading at airport"
                  className="w-full h-80 object-cover"
                />
                <div className="bg-white p-4">
                  <h3 className="font-bold text-foreground mb-2">Rapid Loading Operations</h3>
                  <p className="text-sm text-foreground/70">Swift cargo preparation and loading to ensure rapid deployment of relief supplies</p>
                </div>
              </div>

              {/* Cargo Hold */}
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-24%20at%203.20.04%20PM-WmLEjGGihzuhqW8cFWBflhSFe3CUNz.jpeg"
                  alt="Cargo loading inside aircraft hold"
                  className="w-full h-80 object-cover"
                />
                <div className="bg-white p-4">
                  <h3 className="font-bold text-foreground mb-2">Food & Supply Loading</h3>
                  <p className="text-sm text-foreground/70">Professional cargo management ensuring safe transport of food, medicines, and essential supplies</p>
                </div>
              </div>

              {/* Partnership with NGOs */}
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-24%20at%203%2C20%2C14%20P-Picsart-AiImageEnhancer-8Ls8Olk64mIuX6lfWGjIVvUHvPt8be.jpeg"
                  alt="Médecins Sans Frontières partnership"
                  className="w-full h-80 object-cover"
                />
                <div className="bg-white p-4">
                  <h3 className="font-bold text-foreground mb-2">NGO Coordination</h3>
                  <p className="text-sm text-foreground/70">Working directly with trusted humanitarian organizations like Doctors Without Borders</p>
                </div>
              </div>

              {/* Equipment Loading */}
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-24%20at%203.20.17%20P-PyI8nb39J7loSFIVTCqe6Ng5aqyZNN.png"
                  alt="Equipment and supply loading into aircraft"
                  className="w-full h-80 object-cover"
                />
                <div className="bg-white p-4">
                  <h3 className="font-bold text-foreground mb-2">Medical & Equipment Transport</h3>
                  <p className="text-sm text-foreground/70">Secure loading of medical equipment, generators, and emergency response machinery</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-balance">Delivering Hope When It Matters Most</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Emergency support and rapid delivery of humanitarian aid in crisis situations. We work with governments,
                NGOs and aid agencies to quickly deliver relief operations with our specialist knowledge and global
                connections.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                When disaster strikes, we understand that speed and reliability are critical. Our team is ready to
                mobilize quickly to support humanitarian missions across the globe.
              </p>

              <h3 className="text-2xl font-bold mb-4">Our Humanitarian Services</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Emergency Response</p>
                    <p className="text-sm text-foreground/70">Rapid deployment within hours of crisis</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">NGO & Government Support</p>
                    <p className="text-sm text-foreground/70">Working with established relief organizations</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Global Network</p>
                    <p className="text-sm text-foreground/70">Access to aircraft and logistics worldwide</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Compassionate Service</p>
                    <p className="text-sm text-foreground/70">Special rates for humanitarian missions</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6">What We Transport</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-foreground/80">
                  <p className="font-semibold">Medical Supplies & Equipment</p>
                  <p className="text-sm">Medicines, vaccines, diagnostic equipment</p>
                </li>
                <li className="text-foreground/80">
                  <p className="font-semibold">Food & Water</p>
                  <p className="text-sm">Emergency rations and drinking water</p>
                </li>
                <li className="text-foreground/80">
                  <p className="font-semibold">Shelter Materials</p>
                  <p className="text-sm">Tents, blankets, and temporary housing</p>
                </li>
                <li className="text-foreground/80">
                  <p className="font-semibold">Personnel Deployment</p>
                  <p className="text-sm">Medical staff, rescue teams, coordinators</p>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-foreground/80 text-sm mb-4">
                We believe in making a difference. Special humanitarian rates are available for qualifying relief
                operations with recognized NGOs and government agencies.
              </p>
              <p className="text-foreground/80 text-sm">
                Contact us to discuss your humanitarian logistics needs and how we can support your mission.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Humanitarian Logistics Support?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Contact our team to arrange emergency relief transport for your organization.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Request Support
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
  </section>
  </main>
  )
}
