import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CreditCard, DollarSign, RefreshCw, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BillingSupport() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/support">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Support
              </Link>
            </Button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-xl flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Billing Support</h1>
                <p className="text-muted-foreground">Payment and billing assistance</p>
              </div>
            </div>
          </div>

          {/* Billing Categories */}
          <Tabs defaultValue="payment" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="payment">Payment Issues</TabsTrigger>
              <TabsTrigger value="refunds">Refunds</TabsTrigger>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
              <TabsTrigger value="methods">Payment Methods</TabsTrigger>
            </TabsList>

            <TabsContent value="payment">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      Payment Failed or Declined
                    </CardTitle>
                    <CardDescription>Common payment issues and solutions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Credit/Debit Card Issues</h4>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-6">
                          <li>Insufficient funds in account</li>
                          <li>Card expired or blocked</li>
                          <li>Incorrect card details entered</li>
                          <li>Bank security restrictions</li>
                          <li>International transaction blocked</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Solutions</h4>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-6">
                          <li>Verify card details and expiry date</li>
                          <li>Contact your bank to authorize international payments</li>
                          <li>Try a different payment method</li>
                          <li>Use PayPal or cryptocurrency as alternative</li>
                          <li>Contact support for manual payment processing</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment Processing Delays</CardTitle>
                    <CardDescription>Understanding payment processing times</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Processing Times</h4>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <strong>Credit/Debit Cards:</strong> Instant to 5 minutes
                          </li>
                          <li>
                            <strong>PayPal:</strong> Instant to 2 minutes
                          </li>
                          <li>
                            <strong>Cryptocurrency:</strong> 10-60 minutes
                          </li>
                          <li>
                            <strong>Bank Transfer:</strong> 1-3 business days
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">What to Do</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Wait for confirmation email</li>
                          <li>• Check spam/junk folder</li>
                          <li>• Contact support after 24 hours</li>
                          <li>• Keep payment receipt/transaction ID</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="refunds">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <RefreshCw className="h-5 w-5 text-blue-600" />
                      Refund Process
                    </CardTitle>
                    <CardDescription>How to request and track refunds</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Submit Refund Request</h4>
                          <p className="text-sm text-muted-foreground">
                            Contact support with your order number and reason for refund
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Review Process</h4>
                          <p className="text-sm text-muted-foreground">
                            Our team reviews your request within 24-48 hours
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Refund Processing</h4>
                          <p className="text-sm text-muted-foreground">
                            If approved, refund is processed to your original payment method
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                      <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Refund Timeframes</h4>
                      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                        <li>• Credit/Debit Cards: 3-5 business days</li>
                        <li>• PayPal: 1-3 business days</li>
                        <li>• Cryptocurrency: 1-2 business days</li>
                        <li>• Bank Transfer: 5-7 business days</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Refund Eligibility</CardTitle>
                    <CardDescription>Check if your purchase qualifies for a refund</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-600">Eligible for Refund</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Product doesn't work as described</li>
                          <li>• Invalid or incorrect license received</li>
                          <li>• Technical issues preventing use</li>
                          <li>• Product not delivered within timeframe</li>
                          <li>• Within warranty period</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-red-600">Not Eligible</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Product successfully activated and used</li>
                          <li>• Purchase made over 30 days ago</li>
                          <li>• User error or misuse</li>
                          <li>• Changed mind after activation</li>
                          <li>• Violation of software terms</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="invoices">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      Invoice and Receipt Information
                    </CardTitle>
                    <CardDescription>Getting your purchase documentation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Automatic Invoice Delivery</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Invoices and receipts are automatically sent to your email address after successful payment.
                      </p>

                      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">What's Included</h5>
                        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                          <li>• Order number and date</li>
                          <li>• Product details and pricing</li>
                          <li>• Payment method and transaction ID</li>
                          <li>• Digital product delivery information</li>
                          <li>• Warranty and support details</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Request Invoice Copy</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        If you didn't receive your invoice or need additional copies:
                      </p>
                      <Button asChild>
                        <Link href="https://t.me/webhumacom" target="_blank">
                          Request Invoice Copy
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Business Invoices</CardTitle>
                    <CardDescription>Special invoicing for business customers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      For business purchases requiring specific invoice formats, VAT information, or purchase orders:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                      <li>• Company name and address</li>
                      <li>• VAT/Tax ID numbers</li>
                      <li>• Purchase order references</li>
                      <li>• Custom billing addresses</li>
                      <li>• Department or project codes</li>
                    </ul>
                    <Button variant="outline" asChild>
                      <Link href="https://t.me/webhumacom" target="_blank">
                        Request Business Invoice
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="methods">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-purple-600" />
                      Accepted Payment Methods
                    </CardTitle>
                    <CardDescription>All available payment options</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Credit & Debit Cards</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Visa, Mastercard, American Express</li>
                          <li>• Instant processing</li>
                          <li>• Secure 3D authentication</li>
                          <li>• International cards accepted</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Digital Wallets</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• PayPal (most popular)</li>
                          <li>• Apple Pay & Google Pay</li>
                          <li>• Instant processing</li>
                          <li>• Buyer protection included</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Cryptocurrency</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Bitcoin, Ethereum, USDT</li>
                          <li>• Lower fees</li>
                          <li>• 10-60 minute confirmation</li>
                          <li>• Anonymous payments</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Bank Transfer</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Direct bank transfers</li>
                          <li>• Wire transfers</li>
                          <li>• 1-3 business days</li>
                          <li>• Large order discounts</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment Security</CardTitle>
                    <CardDescription>How we protect your payment information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Security Measures</h4>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-6">
                          <li>SSL encryption for all transactions</li>
                          <li>PCI DSS compliant payment processing</li>
                          <li>No storage of credit card information</li>
                          <li>Fraud detection and prevention</li>
                          <li>Secure payment gateway partners</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                          Your Information is Safe
                        </h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          We use industry-standard security measures and never store your payment details on our
                          servers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Contact Billing Support */}
          <div className="mt-12 bg-muted/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Billing Assistance?</h2>
            <p className="text-muted-foreground mb-6">
              Our billing support team is available 24/7 to help with payment issues, refunds, and invoicing.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              <Link href="https://t.me/webhumacom" target="_blank">
                Contact Billing Support
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
