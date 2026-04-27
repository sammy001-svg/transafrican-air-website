import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import WhoWeAreSection from "@/components/who-we-are"

export const metadata: Metadata = generatePageMetadata('about')

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <WhoWeAreSection />
    </main>
  )
}
