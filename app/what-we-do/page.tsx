import WhatWeDoSection from "@/components/what-we-do"

export const metadata = {
  title: "Services - Transafrican Air",
  description: "Comprehensive air cargo solutions for government, humanitarian, and commercial needs",
}

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <WhatWeDoSection />
    </main>
  )
}
