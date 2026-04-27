'use client'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Page Header */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90">Your privacy matters to us</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
            <div className="space-y-3">
              <h2 className="text-xl font-bold mb-4 text-foreground">Privacy Policy</h2>
              
              <p className="text-xs text-foreground/70 mb-3">
                Last Updated: January 2024
              </p>

              <div className="border-2 border-primary/10 rounded-lg p-3">
                <h3 className="text-sm font-bold mb-2 text-foreground">1. Introduction</h3>
                <p className="text-xs text-foreground/70">
                  Transafrican Air Limited ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              <div className="border-2 border-primary/10 rounded-lg p-3">
                <h3 className="text-sm font-bold mb-2 text-foreground">2. Information We Collect</h3>
                <p className="text-xs text-foreground/70 mb-2">
                  We may collect information about you in a variety of ways:
                </p>
                <ul className="list-disc list-inside text-xs text-foreground/70 space-y-1">
                  <li>Personal Data: Name, email address, phone number, and company name</li>
                  <li>Travel Information: Flight preferences, passenger details, and booking information</li>
                  <li>Technical Data: IP address, browser type, and browsing patterns</li>
                </ul>
              </div>

              <div className="border-2 border-primary/10 rounded-lg p-3">
                <h3 className="text-sm font-bold mb-2 text-foreground">3. Use of Your Information</h3>
                <p className="text-xs text-foreground/70 mb-2">
                  We use collected information to:
                </p>
                <ul className="list-disc list-inside text-xs text-foreground/70 space-y-1">
                  <li>Process your transactions and fulfill your requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Improve our website and services</li>
                </ul>
              </div>

              <div className="border-2 border-primary/10 rounded-lg p-3">
                <h3 className="text-sm font-bold mb-2 text-foreground">4. Disclosure of Your Information</h3>
                <p className="text-xs text-foreground/70">
                  We do not sell, trade, or otherwise transfer your personally identifiable information unless we provide advance notice. We may share information with website hosting partners and service providers who assist us in operating our website, provided they agree to keep this information confidential.
                </p>
              </div>

              <div className="border-2 border-primary/10 rounded-lg p-3">
                <h3 className="text-sm font-bold mb-2 text-foreground">5. Security of Your Information</h3>
                <p className="text-xs text-foreground/70">
                  We implement various security measures to maintain the safety of your personal information when you submit or access your data.
                </p>
              </div>

              <div className="border-2 border-primary/10 rounded-lg p-3">
                <h3 className="text-sm font-bold mb-2 text-foreground">6. Contact Us</h3>
                <p className="text-xs text-foreground/70">
                  Email: <a href="mailto:privacy@transafricanair.com" className="text-primary hover:underline">info@transafricanair.com</a><br />
                  Phone: <a href="tel:+254206822285" className="text-primary hover:underline">+254 206 822 285</a>
                </p>
              </div>
            </div>
          </div>
        </div>
  </section>
  </main>
  )
}
