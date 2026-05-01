"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1Dgexkyf1J/",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/transafrican-air/",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/TransAfrican_",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/transafrican_air?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram",
    },
  ]

  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* Main Footer Content */}
      <div className="w-full px-0 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 mb-12 md:mb-16 px-4 md:px-6 lg:px-8">
          {/* Column 1: Location & Call Center */}
          <div className="md:border-r border-slate-700 md:pr-6 md:pl-0">
            <div className="mb-6">
              <Image
                src="/images/trans-african-logo-desktop.png"
                alt="Transafrican Air Logo"
                width={150}
                height={80}
                className="mb-6"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold mb-4 text-slate-300">OUR LOCATION (HQ)</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Jomo Kenyatta International Airport,
                <br />
                Airport Trade Center Building,
                <br />
                Nairobi, Kenya
              </p>
              <Link href="/contact-us" className="text-sm text-primary hover:underline mb-6 block">
                View all Contacts &gt;
              </Link>
              
              <h4 className="text-sm font-bold mb-3 text-slate-300">CALL CENTER</h4>
              <div className="space-y-2">
                <p className="text-sm text-slate-400">
                  <a href="tel:+254206822285" className="text-primary hover:underline">
                    +254 206 822 285
                  </a>
                </p>
                <p className="text-sm text-slate-400">
                  <a href="tel:+254769604118" className="text-primary hover:underline">
                    +254 769 604 118
                  </a>
                </p>
                <p className="text-sm text-slate-400">
                  Fax: <a href="tel:+254206212801" className="text-primary hover:underline">+254-20-6212801</a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Private Charter */}
          <div className="md:border-r border-slate-700 md:px-6">
            <h4 className="text-sm font-bold mb-6 text-slate-300">PRIVATE CHARTER</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/private-jet-charter" className="text-sm text-slate-400 hover:text-primary transition">
                  Private Jet Charter
                </Link>
              </li>
              <li>
                <Link href="/official-trips" className="text-sm text-slate-400 hover:text-primary transition">
                  Official Trips
                </Link>
              </li>
              <li>
                <Link href="/wildlife-trips" className="text-sm text-slate-400 hover:text-primary transition">
                  Wildlife Trips
                </Link>
              </li>
              <li>
                <Link href="/helicopters" className="text-sm text-slate-400 hover:text-primary transition">
                  Helicopters
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Group Charter */}
          <div className="md:border-r border-slate-700 md:px-6">
            <h4 className="text-sm font-bold mb-6 text-slate-300">GROUP CHARTER</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/acmi-leasing" className="text-sm text-slate-400 hover:text-primary transition">
                  ACMI Leasing
                </Link>
              </li>

              <li>
                <Link href="/events-charter-concepts" className="text-sm text-slate-400 hover:text-primary transition">
                  Events Charter
                </Link>
              </li>
              <li>
                <Link href="/sports-teams-charter" className="text-sm text-slate-400 hover:text-primary transition">
                  Sports Teams Charter
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Cargo Charter */}
          <div className="md:border-r border-slate-700 md:px-6">
            <h4 className="text-sm font-bold mb-6 text-slate-300">CARGO CHARTER</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/humanitarian-aid" className="text-sm text-slate-400 hover:text-primary transition">
                  Humanitarian & Relief
                </Link>
              </li>
              <li>
                <Link href="/live-animal-transport" className="text-sm text-slate-400 hover:text-primary transition">
                  Live Animal Transport
                </Link>
              </li>
              <li>
                <Link href="/perishable-cargo" className="text-sm text-slate-400 hover:text-primary transition">
                  Perishable
                </Link>
              </li>
              <li>
                <Link href="/pharma-cargo" className="text-sm text-slate-400 hover:text-primary transition">
                  Pharma
                </Link>
              </li>
              <li>
                <Link href="/automotive-cargo" className="text-sm text-slate-400 hover:text-primary transition">
                  Automotive
                </Link>
              </li>
              <li>
                <Link href="/dangerous-goods-cargo" className="text-sm text-slate-400 hover:text-primary transition">
                  Dangerous Goods
                </Link>
              </li>
              <li>
                <Link href="/general-cargo" className="text-sm text-slate-400 hover:text-primary transition">
                  General Cargo
                </Link>
              </li>
            </ul>
          </div>



          {/* Column 5: Sales & Company Profile */}
          <div className="md:pl-6">
            <h4 className="text-sm font-bold mb-4 text-slate-300">SALES & COMMERCIAL</h4>
            <div className="space-y-3 mb-6">
              <p className="text-sm text-slate-400">
                <a href="mailto:sales@transafricanair.com" className="text-primary hover:underline">
                  sales@transafricanair.com
                </a>
              </p>
            </div>
            
            <h4 className="text-sm font-bold mb-3 text-slate-300">CHARTER ENQUIRIES</h4>
            <p className="text-sm text-slate-400 mb-4">
              <a href="mailto:charters@transafricanair.com" className="text-primary hover:underline">
                charters@transafricanair.com
              </a>
            </p>

            <h4 className="text-sm font-bold mb-3 text-slate-300">INFO ENQUIRIES</h4>
            <p className="text-sm text-slate-400 mb-4">
              <a href="mailto:info@transafricanair.com" className="text-primary hover:underline">
                info@transafricanair.com
              </a>
            </p>

            <h4 className="text-sm font-bold mb-3 text-slate-300">CAREERS</h4>
            <p className="text-sm text-slate-400 mb-4">
              <a href="mailto:careers@transafricanair.com" className="text-primary hover:underline">
                careers@transafricanair.com
              </a>
            </p>


            <h4 className="text-sm font-bold mb-3 text-slate-300">LEGAL</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" target="_blank" className="text-sm text-slate-400 hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" target="_blank" className="text-sm text-slate-400 hover:text-primary transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/data-protection" target="_blank" className="text-sm text-slate-400 hover:text-primary transition">
                  Data Protection
                </Link>
              </li>
              <li>
                <Link href="/intellectual-property" target="_blank" className="text-sm text-slate-400 hover:text-primary transition">
                  IP Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex justify-center items-center relative px-4">
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary rounded-full p-3 text-white hover:opacity-80 transition flex items-center justify-center"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
          <button
            onClick={scrollToTop}
            className="hidden md:flex absolute right-6 border-2 border-slate-600 rounded-full p-3 text-slate-400 hover:text-primary hover:border-primary transition items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-slate-950 border-t border-slate-700 py-6">
        <div className="container mx-auto px-4 text-center space-y-2">
          <p className="text-sm text-slate-500">
            All rights reserved. Transafrican Air Limited Copyright © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
