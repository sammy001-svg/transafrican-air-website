"use client"

import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of African Aviation: Trends and Opportunities",
      excerpt:
        "Exploring emerging trends in African aviation including digital transformation, sustainability initiatives, and regional growth.",
      date: "February 2026",
      author: "Transafrican Air",
      category: "Industry",
      slug: "future-african-aviation",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "How Cold Chain Logistics Are Revolutionizing Healthcare Distribution",
      excerpt:
        "Understanding the critical role of temperature-controlled cargo in pharmaceutical and vaccine distribution across remote regions.",
      date: "January 2026",
      author: "Transafrican Air",
      category: "Logistics",
      slug: "cold-chain-logistics-healthcare",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Safety First: Transafrican Air's Commitment to Aviation Excellence",
      excerpt:
        "An in-depth look at our safety protocols, certifications, and the rigorous standards that keep our operations world-class.",
      date: "December 2025",
      author: "Transafrican Air",
      category: "Safety",
      slug: "safety-excellence",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Humanitarian Aid Operations: Getting Relief Where It's Needed Most",
      excerpt:
        "How rapid air cargo services enable humanitarian organizations to deliver critical aid during crisis situations across Africa.",
      date: "November 2025",
      author: "Transafrican Air",
      category: "Humanitarian",
      slug: "humanitarian-operations",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Charter vs Commercial: Choosing the Right Air Transport Solution",
      excerpt:
        "A comprehensive guide to understanding when charter flights make sense for your cargo, passengers, or emergency transport needs.",
      date: "October 2025",
      author: "Transafrican Air",
      category: "Charter",
      slug: "charter-vs-commercial",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Behind the Scenes: A Day in the Life of our Flight Operations Team",
      excerpt:
        "Meet the dedicated professionals who work around the clock to ensure every Transafrican Air flight operates safely and on schedule.",
      date: "September 2025",
      author: "Transafrican Air",
      category: "Company",
      slug: "operations-team-profile",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const categories = ["All", "Industry", "Logistics", "Safety", "Humanitarian", "Charter", "Company"]

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Blog & Insights</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Stay informed with the latest news, insights, and updates from Transafrican Air and the aviation industry.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Browse by Category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  {/* Featured Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{post.title}</h3>

                    {/* Excerpt */}
                    <p className="text-foreground/70 leading-relaxed mb-4 flex-grow line-clamp-3">{post.excerpt}</p>

                    {/* Meta */}
                    <div className="border-t border-foreground/10 pt-4 flex items-center justify-between text-sm text-foreground/60">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition">
              Load More Articles
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Get the latest aviation industry insights, company updates, and charter tips delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded border border-foreground/20 focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded font-bold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
