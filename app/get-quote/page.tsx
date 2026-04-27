"use client"

import type React from "react"
import { QuoteForm } from "@/components/quote-form"

export default function GetQuotePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get Your Quote</h1>
              <p className="text-lg text-foreground/70">
                Fill out the form below to receive a personalized quote for your charter requirements. Our team will respond within 24 hours.
              </p>
            </div>

            <QuoteForm charterType="sports" title="Request Your Charter Quote" description="Provide your travel details and we'll get back to you with a customized quote." />
          </div>
        </div>
      </section>
    </main>
  )
}
