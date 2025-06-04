import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
                <p className="text-muted-foreground">Last updated: December 2024</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="bg-muted/30 border rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Eye className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Your Privacy Matters</h3>
                  <p className="text-sm text-muted-foreground">
                    We are committed to protecting your privacy and ensuring the security of your personal information.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="mb-4">We collect information you provide directly to us, such as:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Account credentials and preferences</li>
                <li>Communication history with our support team</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, features used)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Processing and fulfilling your orders</li>
                <li>Providing customer support and technical assistance</li>
                <li>Sending important updates about your purchases</li>
                <li>Improving our services and user experience</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information. We may share information in these limited
                circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Service Providers:</strong> Third-party companies that help us operate our business
                </li>
                <li>
                  <strong>Payment Processors:</strong> Secure payment gateways for transaction processing
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="mb-4">We implement appropriate security measures to protect your information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking</h2>
              <p className="mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure website security and prevent fraud</li>
              </ul>
              <p className="mb-4">You can control cookie settings through your browser preferences.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Delete your personal information</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="mb-4">
                We retain your information for as long as necessary to provide our services and comply with legal
                obligations. Account information is typically retained for 7 years after account closure for legal and
                business purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. International Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place to protect your data during international transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not intended for children under 13. We do not knowingly collect personal information
                from children under 13. If we become aware of such collection, we will delete the information
                immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Changes to Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically. We will notify you of significant changes via email or
                website notice. Your continued use of our services constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Telegram:{" "}
                  <a
                    href="https://t.me/webhumacom"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                    rel="noreferrer"
                  >
                    @webhumacom
                  </a>
                </li>
                <li>Email: privacy@webhuma.com</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
