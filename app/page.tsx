import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import WhyChooseUs from "@/components/why-choose-us"

export const metadata: Metadata = generatePageMetadata('home')

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <AboutSection />
      <WhyChooseUs />
    </main>
  )
}
