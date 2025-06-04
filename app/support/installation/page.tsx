import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, Settings, CheckCircle, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function InstallationHelp() {
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
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-xl flex items-center justify-center">
                <Download className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Installation Help</h1>
                <p className="text-muted-foreground">Step-by-step installation guides</p>
              </div>
            </div>
          </div>

          {/* Installation Categories */}
          <Tabs defaultValue="adobe" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="adobe">Adobe Products</TabsTrigger>
              <TabsTrigger value="microsoft">Microsoft</TabsTrigger>
              <TabsTrigger value="vpn">VPN & Security</TabsTrigger>
              <TabsTrigger value="general">General Guide</TabsTrigger>
            </TabsList>

            <TabsContent value="adobe">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Adobe Creative Cloud Installation
                    </CardTitle>
                    <CardDescription>Complete guide for installing Adobe Creative Cloud</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Download Creative Cloud Desktop</h4>
                          <p className="text-sm text-muted-foreground">
                            Visit adobe.com and download the Creative Cloud desktop app
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Sign in with provided credentials</h4>
                          <p className="text-sm text-muted-foreground">
                            Use the email and password we provided in your order
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Install desired applications</h4>
                          <p className="text-sm text-muted-foreground">
                            Choose and install the Adobe apps you need from the Creative Cloud interface
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Important Note</h4>
                          <p className="text-sm text-amber-700 dark:text-amber-300">
                            Do not change the password or account settings. Contact support if you encounter any issues.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Adobe Photoshop Standalone</CardTitle>
                    <CardDescription>Installing individual Adobe applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      For standalone Adobe applications, follow the same process but you may receive direct download
                      links or installer files instead of Creative Cloud access.
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="https://t.me/webhumacom" target="_blank">
                        Get Installation Help
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="microsoft">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Microsoft Office Installation
                    </CardTitle>
                    <CardDescription>Installing Office 2019, 2021, or Office 365</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-green-600 dark:text-green-400">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Download Office installer</h4>
                          <p className="text-sm text-muted-foreground">
                            Visit office.com or use the provided download link
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-green-600 dark:text-green-400">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Run the installer</h4>
                          <p className="text-sm text-muted-foreground">Follow the installation wizard prompts</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-green-600 dark:text-green-400">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Activate with product key</h4>
                          <p className="text-sm text-muted-foreground">
                            Enter the product key we provided when prompted
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Windows License Activation</CardTitle>
                    <CardDescription>Activating Windows 10/11 with product key</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Open Settings</h4>
                          <p className="text-sm text-muted-foreground">
                            Go to Settings &gt; Update &amp; Security &gt; Activation
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Change product key</h4>
                          <p className="text-sm text-muted-foreground">
                            Click &quot;Change product key&quot; and enter the provided key
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Activate Windows</h4>
                          <p className="text-sm text-muted-foreground">Follow the prompts to complete activation</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="vpn">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      VPN Setup Guide
                    </CardTitle>
                    <CardDescription>Setting up NordVPN, Surfshark, and other VPN services</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Download VPN app</h4>
                          <p className="text-sm text-muted-foreground">
                            Download the official app from the provider&#39;s website
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Login with credentials</h4>
                          <p className="text-sm text-muted-foreground">
                            Use the email and password provided in your order
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Connect to server</h4>
                          <p className="text-sm text-muted-foreground">Choose a server location and connect</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="general">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      General Installation Tips
                    </CardTitle>
                    <CardDescription>Best practices for installing digital products</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Before Installation</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Disable antivirus temporarily</li>
                          <li>• Close all running applications</li>
                          <li>• Ensure stable internet connection</li>
                          <li>• Have admin privileges</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">During Installation</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Follow instructions carefully</li>
                          <li>• Don&#39;t skip important steps</li>
                          <li>• Keep credentials handy</li>
                          <li>• Be patient with downloads</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Troubleshooting Common Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Installation fails or stops</h4>
                        <p className="text-sm text-muted-foreground">
                          Try running the installer as administrator, disable antivirus, or restart your computer and
                          try again.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Product key not working</h4>
                        <p className="text-sm text-muted-foreground">
                          Double-check the key for typos, ensure you&#39;re using the correct product version, or
                          contact support.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Login credentials rejected</h4>
                        <p className="text-sm text-muted-foreground">
                          Verify the email and password, check for extra spaces, or contact support for assistance.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Contact Support */}
          <div className="mt-12 bg-muted/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Personal Assistance?</h2>
            <p className="text-muted-foreground mb-6">
              Our technical support team is available 24/7 to help you with installation and setup.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="https://t.me/webhumacom" target="_blank">
                Get Installation Help
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
