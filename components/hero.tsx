"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  image: string
  title: string
  subtitle: string
}

const slides: Slide[] = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jet-airplane-landing-4YH0WHRTbFiDo38vlMQygpVGvoF9Ks.jpg",
    title: "Government Projects",
    subtitle: "Reliable air cargo solutions for government operations",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cargo-airplane-flying-above-the-clouds-at-sunrise-8Kj5rKMDt0C7Moal9SRt6sjat4HFar.jpg",
    title: "Charter Specialist & Air Cargo Operations",
    subtitle: "Professional passenger and air cargo solutions for all your needs",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business-jet-taxi-airplane-following-Picsart-AiImageEnhancer-gSh6AQF7zPSRyhk5DCpEjPJYhxLXpA.jpg",
    title: "Premium Jet Charter Services",
    subtitle: "Seamless global connectivity and luxury travel",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jet-airplane-landing-4YH0WHRTbFiDo38vlMQygpVGvoF9Ks.jpg",
    title: "Interline Partnerships",
    subtitle: "Trusted partner for aviation solutions worldwide",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative h-[580px] md:h-[680px] overflow-hidden bg-black -mt-16">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-pretty">{slides[currentSlide].title}</h2>
          <p className="text-lg md:text-xl text-gray-100">{slides[currentSlide].subtitle}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition ${index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}
