'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxOptions {
  speed?: number // 0.5 = half speed, 1 = normal, 2 = double speed
  reverse?: boolean // reverse direction
}

export function useParallax(options: ParallaxOptions = {}) {
  const elementRef = useRef<HTMLElement>(null)
  const { speed = 0.5, reverse = false } = options

  useEffect(() => {
    if (!elementRef.current) return

    const t = gsap.to(elementRef.current, {
      y: reverse ? 100 * speed : -100 * speed,
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1, // smooth scrubbing
        markers: false,
      },
    })

    return () => {
      t.scrollTrigger?.kill()
      t.kill()
    }
  }, [speed, reverse])

  return elementRef
}
