import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import ContactPage from "@/components/contact-page"

export const metadata: Metadata = generatePageMetadata('contact')

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ContactPage />
    </main>
  )
}
