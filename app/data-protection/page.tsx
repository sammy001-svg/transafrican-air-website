'use client'

export default function DataProtectionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Protection & Compliance</h1>
          <p className="text-lg opacity-90">How we protect and manage your data</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Data Protection & Compliance</h2>
              
              <p className="text-sm text-foreground/70 mb-6">
                Last Updated: March 2026
              </p>

              {/* Data Security Practices */}
              <div className="border-2 border-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">1. Data Security Practices</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Transafrican Air implements comprehensive security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 ml-2">
                  <li>End-to-end encryption for data transmission using TLS/SSL protocols</li>
                  <li>Secure password hashing with industry-standard algorithms (bcrypt)</li>
                  <li>Role-based access control (RBAC) to limit data access to authorized personnel</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Secure data storage with encrypted database backups</li>
                  <li>Multi-factor authentication (MFA) for admin access</li>
                  <li>Compliance with PCI DSS standards for payment processing</li>
                </ul>
              </div>

              {/* User Rights */}
              <div className="border-2 border-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">2. Your Data Rights</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Under applicable data protection laws, you have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 ml-2">
                  <li><strong>Right of Access:</strong> Request access to your personal data at any time</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
                  <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Right to Object:</strong> Opt-out of data processing for specific purposes</li>
                  <li><strong>Right to Lodge Complaints:</strong> File complaints with relevant data protection authorities</li>
                </ul>
              </div>

              {/* Data Retention */}
              <div className="border-2 border-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">3. Data Retention Policies</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  We retain personal data for the duration necessary to fulfill the purposes outlined in this policy:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 ml-2">
                  <li><strong>Quote Requests:</strong> Retained for 2 years for business records and compliance</li>
                  <li><strong>Contact Forms:</strong> Retained for 1 year or until inquiry is resolved</li>
                  <li><strong>Account Data:</strong> Retained for the duration of account activity plus 3 years</li>
                  <li><strong>Transaction Records:</strong> Retained for 7 years per accounting regulations</li>
                  <li><strong>Email Communications:</strong> Retained for 2 years for audit purposes</li>
                  <li><strong>Web Analytics:</strong> Aggregated data retained for 24 months</li>
                </ul>
              </div>

              {/* Compliance Standards */}
              <div className="border-2 border-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">4. Compliance Standards</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Transafrican Air complies with the following regulatory frameworks:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 ml-2">
                  <li><strong>Kenya Data Protection Act:</strong> Primary compliance framework</li>
                  <li><strong>GDPR:</strong> Where applicable to EU residents and data</li>
                  <li><strong>PCI DSS Level 1:</strong> For payment card industry standards</li>
                  <li><strong>ISO 27001:</strong> Information security management</li>
                  <li><strong>SOC 2 Type II:</strong> Service organization controls compliance</li>
                </ul>
              </div>

              {/* Data Breach Notification */}
              <div className="border-2 border-primary/10 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">5. Data Breach Notification</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  In the event of a data breach that compromises your personal information, Transafrican Air will:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/70 ml-2">
                  <li>Notify affected individuals within 72 hours where legally required</li>
                  <li>Provide details of the breach and steps being taken to remediate</li>
                  <li>Offer credit monitoring or identity protection services where appropriate</li>
                  <li>Report to relevant regulatory authorities as required by law</li>
                  <li>Maintain a detailed breach register for compliance purposes</li>
                </ul>
              </div>

              {/* Contact for Data Requests */}
              <div className="border-2 border-primary/10 rounded-lg p-4 bg-primary/5">
                <h3 className="text-lg font-bold mb-3 text-foreground">6. Exercising Your Rights</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  To exercise any of your data protection rights, please contact our Data Protection Officer:
                </p>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p><strong>Email:</strong> <a href="mailto:privacy@transafricanair.com" className="text-primary hover:underline">privacy@transafricanair.com</a></p>
                  <p><strong>Postal Address:</strong> Jomo Kenyatta International Airport, Airport Trade Center Building, 2nd Floor-Wing A, P.O Box 19131-00501, Nairobi, Kenya</p>
                  <p><strong>Phone:</strong> <a href="tel:+254206822285" className="text-primary hover:underline">+254 206 822 285</a></p>
                  <p>We will respond to data access requests within 30 days and comply with your rights as outlined above.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
