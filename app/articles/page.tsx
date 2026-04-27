"use client"

import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 -z-10"></div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
            <div className="px-4 md:px-6 py-6 md:py-8 text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance leading-tight">
                Insights & Articles
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/95 max-w-xl leading-relaxed">
                Explore thought leadership articles about aviation, industry trends, and Transafrican Air's vision for African connectivity.
              </p>
            </div>

            <div className="relative h-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact%20us-Jh5wy2ZB1TplRyOoWFidfZVBqxr2fA.jpg"
                alt="Articles header"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles - Horizontal Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_496138995_lKuYza4Ix2siNRgiXII1crohlStP1cY1%20-%20Copy-0k5Hbd4pldDX1lqPF6nzlS0pG4Zwtl.jpg",
                title: "Charter a Private Jet to the British Grand Prix at Silverstone",
                excerpt: "The British Grand Prix at Silverstone is one of the most iconic races in the Formula 1 calendar - [...]",
                date: "March 12, 2026",
              },
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact%20us-Jh5wy2ZB1TplRyOoWFidfZVBqxr2fA.jpg",
                title: "Why Sports Teams Choose Charter Flights",
                excerpt: "When it comes to moving professional sports teams, every minute counts - and every detail matters. From tight match [...]",
                date: "March 8, 2026",
              },
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_496138995_lKuYza4Ix2siNRgiXII1crohlStP1cY1%20-%20Copy-0k5Hbd4pldDX1lqPF6nzlS0pG4Zwtl.jpg",
                title: "Charter a Private Jet to The Championships, Wimbledon",
                excerpt: "Few sporting events match the elegance, tradition, and prestige of The Championships, Wimbledon. Held each summer in London, Wimbledon [...]",
                date: "March 1, 2026",
              },
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact%20us-Jh5wy2ZB1TplRyOoWFidfZVBqxr2fA.jpg",
                title: "Top Summer Destinations to visit by Private Jet",
                excerpt: "Summer 2025 is set to be one of the most exciting travel seasons in years, with major events, serene [...]",
                date: "February 22, 2026",
              },
            ].map((article, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  {/* Article Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto">
                      <span className="text-xs text-foreground/60">{article.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-balance text-foreground">Related Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "African Aviation Industry Growth Trends",
                excerpt: "Analyzing the factors driving explosive growth in African aviation and what it means for regional connectivity.",
                date: "March 8, 2026",
              },
              {
                title: "Sustainable Aviation Fuels: The Future of Flying",
                excerpt: "Exploring how sustainable aviation fuels are revolutionizing the industry and reducing carbon emissions across Africa.",
                date: "March 1, 2026",
              },
              {
                title: "E-Commerce Logistics: Africa's Digital Revolution",
                excerpt: "How modern air cargo infrastructure is enabling African e-commerce platforms to compete globally.",
                date: "February 22, 2026",
              },
            ].map((article, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-foreground mb-3">{article.title}</h3>
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground/60">{article.date}</span>
                  <Link href="#" className="text-primary text-sm font-semibold hover:gap-2 transition-all inline-flex items-center gap-1">
                    Read More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
