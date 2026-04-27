import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useMaskedText() {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const words = elementRef.current.querySelectorAll(".masked-word")
    
    if (words.length === 0) return

    // Create a timeline for the word reveal animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none", // Animation plays on scroll down and stays permanent
      },
    })

    // Animate each word
    words.forEach((word, index) => {
      tl.to(
        word,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        index * 0.05 // Stagger each word by 50ms
      )
    })

    return () => {
      tl.kill()
    }
  }, [])

  return elementRef
}
