'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface OdometerNumberProps {
  value: string
  className?: string
}

export function OdometerNumber({ value, className = '' }: OdometerNumberProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    if (!elementRef.current) return

    // Extract numeric part from value (e.g., "15+" -> 15, "24/7" -> 24)
    const numericMatch = value.match(/^\d+/)
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    const finalValue = parseInt(numericMatch[0], 10)
    // Get the suffix that comes after the first number sequence (e.g., "+", "/7", "")
    const suffix = value.substring(numericMatch[0].length)
    const obj = { value: 0 }

    const t = gsap.to(obj, {
      value: finalValue,
      duration: 2.5,
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none none', // Animation plays once and stays
      },
      onUpdate() {
        setDisplayValue(Math.floor(obj.value) + suffix)
      },
      ease: 'power2.out',
    })

    return () => {
      t.scrollTrigger?.kill()
      t.kill()
    }
  }, [value])

  return (
    <div ref={elementRef} className={`${className}`}>
      {displayValue}
    </div>
  )
}
