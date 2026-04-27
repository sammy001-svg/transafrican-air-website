'use client'

import { ReactNode } from 'react'
import { useParallax } from '@/hooks/use-parallax'

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  reverse?: boolean
  className?: string
}

export function ParallaxElement({
  children,
  speed = 0.5,
  reverse = false,
  className = '',
}: ParallaxElementProps) {
  const ref = useParallax({ speed, reverse })

  return (
    <div ref={ref as any} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
}
