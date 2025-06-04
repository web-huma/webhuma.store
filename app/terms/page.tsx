import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfService() {
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
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
                <p className="text-muted-foreground">Last updated: December 2024</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="bg-muted/30 border rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Important Notice</h3>
                  <p className="text-sm text-muted-foreground">
                    By using Webhuma's services, you agree to these terms. Please read them carefully before making any
                    purchases.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using Webhuma's services, you accept and agree to be bound by the terms and provision
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
              <p className="mb-4">
                Webhuma provides digital product subscriptions and licenses for various software applications including
                but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Adobe Creative Cloud products</li>
                <li>Microsoft Office and Windows licenses</li>
                <li>VPN and security software</li>
                <li>Design and productivity tools</li>
                <li>Educational and learning platforms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Product Authenticity</h2>
              <p className="mb-4">
                All products sold through Webhuma are genuine and legally obtained through authorized distributors and
                resellers. We guarantee the authenticity of all our digital products and licenses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="mb-4">
                Payment is required in full before product delivery. We accept various payment methods including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Credit and debit cards</li>
                <li>PayPal</li>
                <li>Cryptocurrency</li>
                <li>Bank transfers</li>
              </ul>
              <p className="mb-4">All prices are listed in USD and are subject to change without notice.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Delivery Policy</h2>
              <p className="mb-4">
                Digital products are delivered via email within 24 hours of payment confirmation. Most products are
                delivered instantly. Delivery times may vary based on product availability and verification
                requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Refund Policy</h2>
              <p className="mb-4">
                We offer refunds within the warranty period specified for each product. Refund requests must be
                submitted with valid reasons. Please refer to our separate Refund Policy for detailed information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. User Responsibilities</h2>
              <p className="mb-4">Users are responsible for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing accurate contact and payment information</li>
                <li>Using products in accordance with their respective license agreements</li>
                <li>Not sharing or reselling purchased licenses</li>
                <li>Maintaining the security of their account credentials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Prohibited Uses</h2>
              <p className="mb-4">You may not use our services for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Illegal activities or purposes</li>
                <li>Reselling or redistributing purchased products</li>
                <li>Attempting to reverse engineer or crack software</li>
                <li>Violating any applicable laws or regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="mb-4">
                Webhuma shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Privacy Policy</h2>
              <p className="mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                service, to understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting. Your continued use of the service constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
              <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
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
                <li>Email: support@webhuma.com</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
