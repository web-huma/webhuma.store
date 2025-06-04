import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, Wrench, AlertCircle, CheckCircle, XCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TechnicalIssues() {
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
              <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900 dark:to-orange-900 rounded-xl flex items-center justify-center">
                <Wrench className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Technical Issues</h1>
                <p className="text-muted-foreground">Troubleshooting and problem resolution</p>
              </div>
            </div>
          </div>

          {/* Quick Solutions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-green-200 dark:border-green-800">
              <CardHeader className="text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Product Working</CardTitle>
                <CardDescription>Everything is functioning correctly</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">If your product is working fine, you're all set!</p>
                <Button variant="outline" className="w-full">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  All Good
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 dark:border-yellow-800">
              <CardHeader className="text-center">
                <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <CardTitle>Minor Issues</CardTitle>
                <CardDescription>Small problems or questions</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Check our FAQ section below for quick solutions</p>
                <Button variant="outline" className="w-full">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  View FAQ
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 dark:border-red-800">
              <CardHeader className="text-center">
                <XCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <CardTitle>Major Issues</CardTitle>
                <CardDescription>Product not working at all</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Contact support immediately for assistance</p>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="https://t.me/webhumacom" target="_blank">
                    <XCircle className="mr-2 h-4 w-4" />
                    Get Help Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Common Technical Issues */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Common Technical Issues</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="activation" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Product activation failed or license invalid
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <div className="space-y-3">
                    <p>
                      <strong>Possible causes:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Incorrect product key entry</li>
                      <li>Product key already used on another device</li>
                      <li>Internet connection issues during activation</li>
                      <li>Antivirus blocking activation process</li>
                    </ul>
                    <p>
                      <strong>Solutions:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Double-check the product key for typos</li>
                      <li>Ensure stable internet connection</li>
                      <li>Temporarily disable antivirus software</li>
                      <li>Contact support for a replacement key if needed</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="login" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Cannot login with provided credentials
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <div className="space-y-3">
                    <p>
                      <strong>Common issues:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Extra spaces in email or password</li>
                      <li>Caps Lock enabled</li>
                      <li>Account temporarily locked</li>
                      <li>Using wrong login portal</li>
                    </ul>
                    <p>
                      <strong>Solutions:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Copy and paste credentials exactly as provided</li>
                      <li>Check for extra spaces or special characters</li>
                      <li>Try logging in from a different browser</li>
                      <li>Wait 30 minutes and try again if account is locked</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="download" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Download or installation problems
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <div className="space-y-3">
                    <p>
                      <strong>Common problems:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Slow or interrupted downloads</li>
                      <li>Installation fails or stops</li>
                      <li>Insufficient disk space</li>
                      <li>Antivirus blocking installation</li>
                    </ul>
                    <p>
                      <strong>Solutions:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Use a download manager for large files</li>
                      <li>Free up disk space (at least 5GB recommended)</li>
                      <li>Run installer as administrator</li>
                      <li>Temporarily disable antivirus during installation</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="compatibility" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Software compatibility issues
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <div className="space-y-3">
                    <p>
                      <strong>Compatibility problems:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Operating system not supported</li>
                      <li>Insufficient system requirements</li>
                      <li>Conflicting software installed</li>
                      <li>Outdated drivers or system files</li>
                    </ul>
                    <p>
                      <strong>Solutions:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Check minimum system requirements before purchase</li>
                      <li>Update your operating system</li>
                      <li>Update graphics drivers</li>
                      <li>Uninstall conflicting software versions</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="performance" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Software running slowly or crashing
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <div className="space-y-3">
                    <p>
                      <strong>Performance issues:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>High CPU or memory usage</li>
                      <li>Frequent crashes or freezing</li>
                      <li>Slow startup or response times</li>
                      <li>Graphics rendering problems</li>
                    </ul>
                    <p>
                      <strong>Solutions:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Close unnecessary background applications</li>
                      <li>Increase virtual memory/page file size</li>
                      <li>Update graphics drivers</li>
                      <li>Run software in compatibility mode</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="network" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Network or connectivity issues
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <div className="space-y-3">
                    <p>
                      <strong>Network problems:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Cannot connect to license servers</li>
                      <li>Firewall blocking connections</li>
                      <li>VPN interfering with activation</li>
                      <li>DNS resolution issues</li>
                    </ul>
                    <p>
                      <strong>Solutions:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Temporarily disable firewall and VPN</li>
                      <li>Add software to firewall exceptions</li>
                      <li>Use Google DNS (8.8.8.8, 8.8.4.4)</li>
                      <li>Try activation from a different network</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* System Requirements */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">System Requirements Check</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Minimum Requirements</CardTitle>
                  <CardDescription>Basic requirements for most software</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>OS:</strong> Windows 10/11 or macOS 10.14+
                    </li>
                    <li>
                      <strong>RAM:</strong> 8GB minimum, 16GB recommended
                    </li>
                    <li>
                      <strong>Storage:</strong> 5GB free space
                    </li>
                    <li>
                      <strong>Internet:</strong> Required for activation
                    </li>
                    <li>
                      <strong>Graphics:</strong> DirectX 11 compatible
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Specs</CardTitle>
                  <CardDescription>For optimal performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>OS:</strong> Latest Windows 11 or macOS
                    </li>
                    <li>
                      <strong>RAM:</strong> 32GB for professional work
                    </li>
                    <li>
                      <strong>Storage:</strong> SSD with 50GB+ free space
                    </li>
                    <li>
                      <strong>Internet:</strong> Stable broadband connection
                    </li>
                    <li>
                      <strong>Graphics:</strong> Dedicated GPU recommended
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Support */}
          <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-200">Still Having Issues?</h2>
            <p className="text-red-700 dark:text-red-300 mb-6">
              If none of the above solutions work, our technical support team is ready to help you personally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="https://t.me/webhumacom" target="_blank">
                  Contact Technical Support
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-red-300 text-red-700 hover:bg-red-100 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900"
              >
                <Link href="/support">Back to Support Center</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
