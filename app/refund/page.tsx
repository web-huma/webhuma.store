import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RefreshCw, CheckCircle, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RefundPolicy() {
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
              <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 rounded-xl flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Refund Policy</h1>
                <p className="text-muted-foreground">Last updated: December 2024</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="bg-muted/30 border rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">100% Satisfaction Guarantee</h3>
                  <p className="text-sm text-muted-foreground">
                    We stand behind our products and offer refunds within the warranty period for valid reasons.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Refund Eligibility</h2>
              <p className="mb-4">You may be eligible for a refund if:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>The product does not work as described</li>
                <li>You received an incorrect or invalid license</li>
                <li>The product was not delivered within the specified timeframe</li>
                <li>Technical issues prevent you from using the product</li>
                <li>The product does not meet the specifications advertised</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Refund Timeframes</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold">Full Warranty</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Most products</p>
                  <p className="text-sm">30 days from purchase</p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <h3 className="font-semibold">Limited Warranty</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Some products</p>
                  <p className="text-sm">7-25 days from purchase</p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <RefreshCw className="h-5 w-5 text-blue-500" />
                    <h3 className="font-semibold">Lifetime Products</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Permanent licenses</p>
                  <p className="text-sm">30 days from purchase</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Non-Refundable Items</h2>
              <p className="mb-4">The following items are generally not eligible for refunds:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Products that have been successfully activated and used</li>
                <li>Digital products downloaded and verified as working</li>
                <li>Products purchased more than 30 days ago (unless lifetime warranty)</li>
                <li>Products damaged due to user error or misuse</li>
                <li>Products that violate the original software's terms of service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Refund Process</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Contact Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Reach out to our support team via Telegram (@webhumacom) or email with your order details and
                      reason for refund.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Provide Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Submit your order number, purchase date, and detailed explanation of the issue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Review Process</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team will review your request within 24-48 hours and may request additional information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Refund Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      If approved, refunds are processed within 3-7 business days to your original payment method.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Refund Methods</h2>
              <p className="mb-4">Refunds are issued using the same payment method used for the original purchase:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Credit/Debit Cards:</strong> 3-5 business days
                </li>
                <li>
                  <strong>PayPal:</strong> 1-3 business days
                </li>
                <li>
                  <strong>Cryptocurrency:</strong> 1-2 business days
                </li>
                <li>
                  <strong>Bank Transfer:</strong> 5-7 business days
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Partial Refunds</h2>
              <p className="mb-4">In some cases, we may offer partial refunds for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Products that partially meet expectations</li>
                <li>Subscription services used for a portion of the term</li>
                <li>Bundle products where only some items have issues</li>
                <li>Products with minor defects that don't affect core functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Exchanges and Replacements</h2>
              <p className="mb-4">Before processing a refund, we may offer to exchange or replace the product if:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>A different version or edition would better meet your needs</li>
                <li>The issue can be resolved with a replacement license</li>
                <li>Technical problems can be fixed with a different product variant</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Dispute Resolution</h2>
              <p className="mb-4">If you're not satisfied with our refund decision, you can:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Request escalation to a senior support manager</li>
                <li>Provide additional evidence or documentation</li>
                <li>Seek mediation through your payment provider</li>
                <li>Contact us for alternative resolution options</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
              <p className="mb-4">For refund requests or questions about this policy, contact us:</p>
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
                <li>Email: refunds@webhuma.com</li>
                <li>Response time: Within 24 hours</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
