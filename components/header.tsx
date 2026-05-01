"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Bell, ChevronDown } from "lucide-react"
import Image from "next/image"
import { StaggeredText } from "./staggered-text"
import gsap from "gsap"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null)
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const servicesLinks = [
    { title: "Group Charter", href: "/group-charter" },
    { title: "Private Jet Charter", href: "/private-jet-charter" },
    { title: "Cargo Charters", href: "/cargo-charters" },
  ]

  const resourcesLinks = [
    { title: "Aircraft Fleet", href: "/aircraft-guide" },
    { title: "Careers", href: "/careers" },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms & Conditions", href: "/terms-and-conditions" },
  ]

  const toggleDropdown = (dropdown: string) => {
    setExpandedDropdown(expandedDropdown === dropdown ? null : dropdown)
  }

  // Two-step scaling animation for mobile menu
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      // Reset animation state
      gsap.set(menuRef.current, { scale: 0.8, opacity: 0 })
      
      // Two-step animation: scale up with easing
      gsap.to(menuRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.2)",
      })
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
      <div className="w-full px-4 py-4 md:py-6">
        <div className="flex items-center justify-between gap-12">
          {/* Logo - Far Left Edge */}
          <Link href="/" className="flex-shrink-0 -ml-0 md:-ml-0">
            <Image
              src="/images/trans-african-logo-desktop.png"
              alt="Transafrican Air Logo"
              width={200}
              height={80}
              className="drop-shadow-md w-auto h-auto"
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-12 flex-1 justify-center">
            <Link
              href="/"
              className="text-white hover:text-primary transition drop-shadow-sm whitespace-nowrap"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/who-we-are"
              className="text-white hover:text-primary transition drop-shadow-sm whitespace-nowrap"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {/* Services Dropdown - Desktop */}
            <div
              className="relative group"
              onMouseEnter={() => setDesktopDropdown("services")}
              onMouseLeave={() => setDesktopDropdown(null)}
            >
              <Link
                href="/what-we-do"
                className="flex items-center gap-1 text-white hover:text-primary transition drop-shadow-sm whitespace-nowrap"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </Link>
              {desktopDropdown === "services" && (
                <div className="absolute left-0 mt-0 w-48 bg-black/95 rounded-lg shadow-lg border border-white/20 py-2 z-50">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-white hover:text-primary hover:bg-white/10 transition"
                      onClick={() => setDesktopDropdown(null)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown - Desktop */}
            <div
              className="relative group"
              onMouseEnter={() => setDesktopDropdown("resources")}
              onMouseLeave={() => setDesktopDropdown(null)}
            >
              <Link
                href="/resources"
                className="flex items-center gap-1 text-white hover:text-primary transition drop-shadow-sm whitespace-nowrap"
              >
                Resources
                <ChevronDown className="w-4 h-4" />
              </Link>
              {desktopDropdown === "resources" && (
                <div className="absolute left-0 mt-0 w-48 bg-black/95 rounded-lg shadow-lg border border-white/20 py-2 z-50">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.href.endsWith('.pdf') ? '_blank' : undefined}
                      rel={link.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                      className="block px-4 py-2 text-sm text-white hover:text-primary hover:bg-white/10 transition"
                      onClick={() => setDesktopDropdown(null)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className="text-white hover:text-primary transition drop-shadow-sm whitespace-nowrap"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Actions - Far Right Edge */}
          <div className="hidden lg:flex items-center gap-8 mr-0 md:mr-6">
            <Bell className="w-6 h-6 text-white drop-shadow-sm flex-shrink-0" />
            <Link
              href="/get-quote"
              className="bg-primary text-white px-6 py-2 rounded hover:opacity-90 transition font-medium drop-shadow-md whitespace-nowrap flex-shrink-0 text-sm stagger-on-hover"
              onClick={() => setIsMenuOpen(false)}
            >
              <StaggeredText text="Get A Quote" delay={0.01} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 flex-shrink-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white drop-shadow-sm" />
            ) : (
              <Menu className="w-6 h-6 text-white drop-shadow-sm" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            ref={menuRef}
            className="lg:hidden mt-4 pb-4 space-y-3 border-t border-white/20 pt-4 bg-black/30 rounded-lg px-4 origin-top"
          >
            <Link
              href="/"
              className="block text-white hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/who-we-are"
              className="block text-white hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/what-we-do"
                  className="flex-1 text-white hover:text-primary transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <button
                  onClick={() => setExpandedDropdown(expandedDropdown === "services" ? null : "services")}
                  className="p-1"
                >
                  <ChevronDown
                    className={`w-4 h-4 text-white hover:text-primary transition-transform ${
                      expandedDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {expandedDropdown === "services" && (
                <div className="mt-2 ml-4 space-y-2 border-l border-white/20 pl-4">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm text-white/80 hover:text-primary transition"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setExpandedDropdown(null)
                      }}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/resources"
                  className="flex-1 text-white hover:text-primary transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resources
                </Link>
                <button
                  onClick={() => setExpandedDropdown(expandedDropdown === "resources" ? null : "resources")}
                  className="p-1"
                >
                  <ChevronDown
                    className={`w-4 h-4 text-white hover:text-primary transition-transform ${
                      expandedDropdown === "resources" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {expandedDropdown === "resources" && (
                <div className="mt-2 ml-4 space-y-2 border-l border-white/20 pl-4">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.href.endsWith('.pdf') ? '_blank' : undefined}
                      rel={link.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                      className="block text-sm text-white/80 hover:text-primary transition"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setExpandedDropdown(null)
                      }}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className="block text-white hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/get-quote"
              className="block bg-primary text-white px-4 py-2 rounded mt-4 text-center font-medium stagger-on-hover"
              onClick={() => setIsMenuOpen(false)}
            >
              <StaggeredText text="Get A Quote" delay={0.01} />
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
