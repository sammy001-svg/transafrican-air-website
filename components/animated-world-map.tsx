'use client'

import React from 'react'
import Image from 'next/image'

export default function AnimatedWorldMap() {
  return (
    <div className="relative w-full h-auto bg-white rounded-2xl overflow-hidden shadow-lg p-8">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_b6qms3b6qms3b6qm-2epIm4fFkHr1ZSB09DI8HjeuhYWuQF.png"
        alt="World map showing global charter operations with flights from Kenya"
        width={1400}
        height={600}
        className="w-full h-auto"
      />

      {/* Information Text */}
      <div className="mt-6 text-center">
        <p className="text-sm font-semibold text-foreground">Global Operations Hub</p>
        <p className="text-xs text-foreground/60">Worldwide charter flights originating from Kenya</p>
      </div>
    </div>
  )
}
