'use client'

export default function IntellectualPropertyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Intellectual Property Policy</h1>
          <p className="text-lg opacity-90">Content ownership and IP protection</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Intellectual Property Policy</h2>
              
              <p className="text-sm text-foreground/70 mb-6">
                Last Updated: March 2026
              </p>

              {/* Ownership of Content */}
              <div className="border-2 border-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">1. Ownership of Website Content</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  All content on the Transafrican Air website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the exclusive property of Transafrican Air Limited or its content suppliers and is protected by international copyright laws.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 ml-2">
                  <li>Website design and layout are protected by copyright</li>
                  <li>All photographs, illustrations, and graphics are original works or used with proper licensing</li>
                  <li>Written content, articles, and documentation are original or properly attributed</li>
                  <li>Database compilations and collections are protected as collective works</li>
                  <li>Software, code, and technical systems are proprietary intellectual property</li>
                </ul>
              </div>

              {/* Trademark Protection */}
              <div className="border-2 border-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">2. Trademark Protection</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  The Transafrican Air name, logo, and related trademarks are registered and protected under trademark laws:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 ml-2">
                  <li><strong>Transafrican Air®</strong> is a registered trademark</li>
                  <li>All associated logos, slogans, and visual identifiers are trademarked</li>
                  <li>Unauthorized use of these marks is prohibited without written consent</li>
                  <li>Trademark registrations exist in Kenya, East Africa, and international jurisdictions</li>
                  <li>We actively protect our marks against infringement and misuse</li>
                </ul>
              </div>

              {/* Licensed Content */}
              <div className="border-2 border-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">3. Licensed Content</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Some content on our website is used under license or with proper attribution:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 ml-2">
                  <li>Third-party stock photography is licensed for use on this website</li>
                  <li>Icons and design elements may be from licensed icon libraries</li>
                  <li>Third-party software and libraries are used in compliance with their licenses</li>
                  <li>All licensed content maintains proper attribution and copyright notices</li>
                </ul>
              </div>

              {/* User Content */}
              <div className="border-2 border-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">4. User-Generated Content</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  When users submit content (testimonials, inquiries, photos, etc.) to Transafrican Air:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 ml-2">
                  <li>Users retain ownership of their content</li>
                  <li>Users grant Transafrican Air a non-exclusive license to use content for business purposes</li>
                  <li>We may use testimonials and feedback in marketing materials (with permission when required)</li>
                  <li>User content must not infringe on third-party intellectual property rights</li>
                  <li>We reserve the right to remove content that violates this policy</li>
                </ul>
              </div>

              {/* IP Infringement Reporting */}
              <div className="border-2 border-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">5. Reporting IP Infringement</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  If you believe your intellectual property rights have been infringed on our website:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 ml-2">
                  <li>Send a detailed written notice to our legal department</li>
                  <li>Include evidence of ownership and details of the infringement</li>
                  <li>Provide your contact information and preferred resolution</li>
                  <li>We will investigate and respond within 14 business days</li>
                  <li>Provide clear information about the infringing material and its location</li>
                </ul>
              </div>

              {/* DMCA Compliance */}
              <div className="border-2 border-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">6. Copyright Takedown Notices</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Transafrican Air complies with the Digital Millennium Copyright Act (DMCA) and similar copyright protection laws. To file a copyright infringement claim:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 ml-2">
                  <li>Provide your contact information and copyright ownership proof</li>
                  <li>Identify the copyrighted work and the infringing material</li>
                  <li>Specify where on our website the infringing material is located</li>
                  <li>Include a statement affirming good faith belief in the infringement claim</li>
                  <li>Digitally sign or provide a signature in your notice</li>
                </ul>
              </div>

              {/* IP Protection Contact */}
              <div className="border-2 border-primary/10 rounded-lg p-4 bg-primary/5">
                <h3 className="text-lg font-bold mb-3 text-foreground">7. IP Protection Contact</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  To report IP infringement or inquire about intellectual property matters:
                </p>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p><strong>Email:</strong> <a href="mailto:legal@transafricanair.com" className="text-primary hover:underline">legal@transafricanair.com</a></p>
                  <p><strong>Postal Address:</strong> Jomo Kenyatta International Airport, Airport Trade Center Building, 2nd Floor-Wing A, P.O Box 19131-00501, Nairobi, Kenya</p>
                  <p><strong>Phone:</strong> <a href="tel:+254206822285" className="text-primary hover:underline">+254 206 822 285</a></p>
                  <p>Please allow 14-30 days for investigation and response to your inquiry.</p>
                </div>
              </div>

              {/* Fair Use */}
              <div className="border-2 border-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">8. Fair Use</h3>
                <p className="text-sm text-foreground/70">
                  Nothing in this policy restricts legitimate fair use of Transafrican Air content for purposes such as criticism, commentary, news reporting, teaching, scholarship, or research, as permitted under applicable copyright laws. However, reproduction of substantial portions of our website content for any purpose requires prior written permission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
