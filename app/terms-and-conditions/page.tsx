'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditionsPage() {
  const sections = [
    {
      number: 1,
      title: 'Agreement to Terms',
      content: 'These Terms and Conditions constitute a legally binding agreement between you ("User" or "you") and Transafrican Air Limited ("Company," "we," "us," or "our"), a registered aviation enterprise operating under Kenyan law. By accessing, browsing, or using our website (transafricanair.com), mobile applications, or any related services, you agree to be bound by these terms. If you do not agree to any part of these terms, you must discontinue using our services immediately.',
    },
    {
      number: 2,
      title: 'Use License',
      content: 'Permission is granted to temporarily download materials (text, graphics, information) from our website for personal, non-commercial viewing only. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works, or otherwise use materials for any commercial purpose without prior written consent from Transafrican Air. Prohibited activities include:',
      list: [
        'Modifying, copying, or distributing materials without authorization',
        'Using materials for commercial or competitive purposes',
        'Attempting to decompile, reverse engineer, or disassemble any software or systems',
        'Removing copyright, trademark, or proprietary notations',
        'Transferring materials to other servers or mirroring content',
        'Accessing or searching our website through unauthorized means or bots',
        'Interfering with website functionality or security',
      ],
    },
    {
      number: 3,
      title: 'Disclaimer of Warranties',
      content: 'Materials and services on our website are provided on an "as-is" and "as-available" basis. Transafrican Air makes no warranties, express or implied, regarding the website, services, materials, or any products or services obtained through the website. We specifically disclaim all implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, and freedom from errors. We do not warrant that our website will be uninterrupted, error-free, secure, or free from viruses or other harmful components.',
    },
    {
      number: 4,
      title: 'Limitation of Liability',
      content: 'To the fullest extent permitted by law, Transafrican Air shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, goodwill, business interruption, or cost of cover, arising from or related to your use of our website or services, regardless of the form of action (contract, tort, strict liability, or otherwise) and whether or not we have been advised of the possibility of such damages. Our total liability for any claim shall not exceed the fees paid by you in the 12 months preceding the claim.',
    },
    {
      number: 5,
      title: 'Accuracy of Materials',
      content: 'While we strive to maintain accurate and current information, materials on our website may contain technical, typographical, or photographic errors. Transafrican Air does not warrant that materials are accurate, complete, current, or error-free. Information about flight schedules, pricing, aircraft specifications, and services is subject to change without notice. We recommend verifying critical information directly with our customer service team before making decisions based on website content.',
    },
    {
      number: 6,
      title: 'External Links and Third-Party Content',
      content: 'Our website may contain links to third-party websites and services. Transafrican Air is not responsible for the content, accuracy, or practices of linked websites. Inclusion of links does not imply endorsement or affiliation. Your use of third-party websites is at your own risk and subject to their terms and conditions. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites.',
    },
    {
      number: 7,
      title: 'User-Generated Content',
      content: 'If you submit, post, or display content on our website or services, you grant Transafrican Air a royalty-free, worldwide, perpetual license to use, reproduce, modify, and distribute such content. You warrant that you own or have the necessary rights to all submitted content and that it does not violate any third-party rights or applicable laws. You agree that we may remove any content that violates these terms or applicable law.',
    },
    {
      number: 8,
      title: 'Intellectual Property Rights',
      content: 'All content on our website, including text, graphics, logos, images, videos, software, and trademarks, is the property of Transafrican Air or our licensors and is protected by international copyright and trademark laws. You may not use, reproduce, or distribute our intellectual property without explicit written permission.',
    },
    {
      number: 9,
      title: 'Modifications to Terms',
      content: 'Transafrican Air reserves the right to modify these Terms and Conditions at any time without prior notice. Modifications become effective immediately upon posting to our website. Your continued use of our services following any modification constitutes your acceptance of the updated terms. We recommend reviewing these terms periodically to stay informed of any changes.',
    },
    {
      number: 10,
      title: 'Governing Law and Jurisdiction',
      content: 'These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Kenya, without regard to its conflict of law principles. You irrevocably submit to the exclusive jurisdiction of the courts located in Nairobi, Kenya, for resolution of any disputes arising from or related to these terms or your use of our website and services.',
    },
    {
      number: 11,
      title: 'Privacy and Data Protection',
      content: 'Your use of our website is also governed by our Privacy Policy, which outlines how we collect, use, protect, and share your personal information. We comply with the Data Protection Act of Kenya and international data protection standards. Please review our Privacy Policy for comprehensive information about our data practices.',
    },
    {
      number: 12,
      title: 'Limitation on Time to File Claims',
      content: 'Any claim or action arising from or related to these Terms and Conditions or your use of our website must be filed within one (1) year after the cause of action arises. Any claim filed after this period shall be permanently barred.',
    },
    {
      number: 13,
      title: 'Severability',
      content: 'If any provision of these Terms and Conditions is found to be invalid, illegal, or unenforceable, such provision shall be modified to the minimum extent necessary to make it valid and enforceable. If modification is not possible, the provision shall be severed, and the remaining provisions shall continue in full force and effect.',
    },
    {
      number: 14,
      title: 'Contact Information',
      content: 'For questions about these Terms and Conditions or to report violations, please contact us:',
      contact: {
        email: 'legal@transafricanair.com',
        phone: '+254 206 822 285',
        address: 'Jomo Kenyatta International Airport, Nairobi, Kenya',
      },
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Terms & Conditions</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Please read our terms carefully before using Transafrican Air services and website.
          </p>
          <p className="text-sm text-primary-foreground/80 mt-4">Last Updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.number} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 border-l-4 border-primary">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {section.number}
                    </span>
                    {section.title}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-foreground/80 leading-relaxed mb-4">{section.content}</p>
                  {section.list && (
                    <ul className="space-y-2 mb-4 ml-4">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.contact && (
                    <div className="bg-muted rounded-lg p-4 space-y-2 text-sm text-foreground/80">
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground min-w-fit">Email:</span>
                        <a href={`mailto:${section.contact.email}`} className="text-primary hover:underline">
                          {section.contact.email}
                        </a>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground min-w-fit">Phone:</span>
                        <a href={`tel:${section.contact.phone.replace(/\s+/g, '')}`} className="text-primary hover:underline">
                          {section.contact.phone}
                        </a>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground min-w-fit">Address:</span>
                        <span>{section.contact.address}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-8 bg-accent/10 border border-accent rounded-lg p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Important Notice</h3>
            <p className="text-foreground/80 leading-relaxed">
              By using Transafrican Air services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you have any questions or concerns about these terms, please contact our legal team immediately. These terms apply to all users regardless of how they access our services.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded font-bold hover:opacity-90 transition"
            >
              Return to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
