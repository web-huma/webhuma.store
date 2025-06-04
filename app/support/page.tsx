import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Headphones, MessageCircle, Mail, Clock, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CustomerSupport() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
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
                <Headphones className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Customer Support</h1>
                <p className="text-muted-foreground">We're here to help you 24/7</p>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-blue-200 dark:border-blue-800">
              <CardHeader className="text-center">
                <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle>Telegram Support</CardTitle>
                <CardDescription>Fastest response time</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="https://t.me/webhumacom" target="_blank">
                    Chat Now
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">Average response: 5 minutes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Detailed assistance</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" asChild className="w-full">
                  <Link href="mailto:support@webhuma.com">Send Email</Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">Average response: 2 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle>24/7 Availability</CardTitle>
                <CardDescription>Round-the-clock support</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-full py-2 px-4 bg-green-100 dark:bg-green-900 rounded-md">
                  <span className="text-green-800 dark:text-green-200 font-medium">Online Now</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Always available</p>
              </CardContent>
            </Card>
          </div>

          {/* Support Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">How Can We Help You?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Pre-Sales Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Product compatibility</li>
                    <li>• Pricing and packages</li>
                    <li>• Feature comparisons</li>
                    <li>• Custom requirements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Order Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Order status tracking</li>
                    <li>• Payment problems</li>
                    <li>• Delivery delays</li>
                    <li>• Order modifications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Technical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Installation help</li>
                    <li>• Activation issues</li>
                    <li>• Software troubleshooting</li>
                    <li>• System compatibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Account Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Account recovery</li>
                    <li>• Password reset</li>
                    <li>• Profile updates</li>
                    <li>• Subscription management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How quickly will I receive my product?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most digital products are delivered instantly via email after payment confirmation. Some products
                    may take up to 24 hours for manual processing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if my product doesn't work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Contact our support team immediately. We offer full warranty on most products and will provide a
                    replacement or refund if the product doesn't work as described.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer installation assistance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! Our technical support team can guide you through the installation process via Telegram or
                    email. We also provide detailed installation guides for most products.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I get a refund if I'm not satisfied?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer refunds within the warranty period for valid reasons. Please refer to our Refund
                    Policy for detailed information about eligibility and process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Methods</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Telegram</p>
                      <p className="text-sm text-muted-foreground">@webhumacom</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">support@webhuma.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Community</p>
                      <p className="text-sm text-muted-foreground">Join our Telegram group</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Support Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Telegram Support</span>
                    <span className="text-green-600 font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email Support</span>
                    <span className="text-green-600 font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technical Support</span>
                    <span className="text-green-600 font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Response</span>
                    <span className="text-blue-600 font-medium">&lt; 30 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
