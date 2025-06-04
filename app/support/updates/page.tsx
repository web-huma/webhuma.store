import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Bell, Download, Star, Calendar, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ProductUpdates() {
  const updates = [
    {
      date: "December 15, 2024",
      title: "Adobe Creative Cloud 2024 Updates",
      description: "New AI features in Photoshop and Illustrator, improved performance across all apps",
      type: "Feature Update",
      status: "Available",
      products: ["Adobe Creative Cloud", "Photoshop", "Illustrator"],
    },
    {
      date: "December 10, 2024",
      title: "Microsoft Office 365 December Update",
      description: "Enhanced collaboration features, new templates, and security improvements",
      type: "Monthly Update",
      status: "Available",
      products: ["Office 365", "Word", "Excel", "PowerPoint"],
    },
    {
      date: "December 8, 2024",
      title: "NordVPN New Server Locations",
      description: "Added 50+ new server locations across Asia and Europe for better connectivity",
      type: "Infrastructure",
      status: "Live",
      products: ["NordVPN"],
    },
    {
      date: "December 5, 2024",
      title: "Filmora 14 Major Release",
      description: "Revolutionary AI editing tools, new effects library, and improved rendering speed",
      type: "Major Release",
      status: "Available",
      products: ["Filmora 14"],
    },
    {
      date: "December 1, 2024",
      title: "Windows 11 24H2 Feature Update",
      description: "New Start menu design, enhanced widgets, and improved performance optimizations",
      type: "OS Update",
      status: "Rolling Out",
      products: ["Windows 11"],
    },
  ]

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
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-xl flex items-center justify-center">
                <Bell className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Product Updates</h1>
                <p className="text-muted-foreground">Latest updates and announcements</p>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Stay Updated
              </CardTitle>
              <CardDescription>Get notified about important product updates and new releases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="https://t.me/webhumacom" target="_blank">
                    <Bell className="mr-2 h-4 w-4" />
                    Join Telegram Updates
                  </Link>
                </Button>
                <Button variant="outline">
                  <Star className="mr-2 h-4 w-4" />
                  Subscribe to Newsletter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Updates */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Recent Updates</h2>
            <div className="space-y-6">
              {updates.map((update, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-lg">{update.title}</CardTitle>
                          <Badge
                            variant={
                              update.status === "Available"
                                ? "default"
                                : update.status === "Live"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {update.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {update.date}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {update.type}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">{update.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {update.products.map((product, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {product}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Update Categories */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Update Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Security Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Critical security patches and vulnerability fixes</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Feature Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">New features and functionality improvements</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Download className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Speed improvements and optimization updates</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Bell className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Announcements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Important news and service announcements</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Update Instructions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How to Update Your Products</CardTitle>
              <CardDescription>General instructions for keeping your software up to date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Automatic Updates</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Most products update automatically</li>
                    <li>• Enable auto-updates in settings</li>
                    <li>• Restart software when prompted</li>
                    <li>• Keep internet connection stable</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Manual Updates</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Check for updates in Help menu</li>
                    <li>• Download from official websites</li>
                    <li>• Follow installation instructions</li>
                    <li>• Contact support if issues occur</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Updates */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Updates?</h2>
            <p className="text-muted-foreground mb-6">
              Need help with updating your products or have questions about new features? Our support team is here to
              help.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Link href="https://t.me/webhumacom" target="_blank">
                Get Update Support
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
