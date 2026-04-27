'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useNumberOdometer(finalValue: number, duration = 2) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const startValue = 0

    // Create object to animate
    const obj = { value: startValue }

    gsap.to(obj, {
      value: finalValue,
      duration: duration,
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none none', // Play once and stay permanent
      },
      onUpdate() {
        if (element) {
          element.textContent = Math.floor(obj.value).toString()
        }
      },
      ease: 'power2.out',
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [finalValue, duration])

  return elementRef
}
