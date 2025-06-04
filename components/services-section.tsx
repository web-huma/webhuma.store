import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const serviceCategories = {
    adobe: {
      title: "Adobe Products",
      description: "Creative Cloud, Photoshop, Illustrator and more",
      services: [
        {
          name: "Adobe Creative Cloud",
          duration: "1 Month",
          type: "Personal",
          price: "$10.99",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Adobe Creative Cloud",
          duration: "3 Months",
          type: "Personal",
          price: "$17.99",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Adobe Creative Cloud",
          duration: "6 Months",
          type: "Personal",
          price: "$25.99",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Adobe Creative Cloud",
          duration: "12 Months",
          type: "Personal",
          price: "$49.99",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Adobe Photoshop",
          duration: "1 Month",
          type: "Personal",
          price: "$6.99",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Adobe Photoshop",
          duration: "12 Months",
          type: "Personal",
          price: "$24.99",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Adobe Illustrator",
          duration: "1 Month",
          type: "Personal",
          price: "$6.99",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Adobe Illustrator",
          duration: "12 Months",
          type: "Personal",
          price: "$24.99",
          warranty: "Full Warranty",
          available: true,
        },
      ],
    },
    microsoft: {
      title: "Microsoft Products",
      description: "Windows, Office, and productivity tools",
      services: [
        {
          name: "Windows 10/11 Pro",
          duration: "Lifetime",
          type: "Retail Key",
          price: "$4.00",
          warranty: "Lifetime",
          available: true,
        },
        {
          name: "Windows 10/11 Home",
          duration: "Lifetime",
          type: "Retail Key",
          price: "$4.00",
          warranty: "Lifetime",
          available: true,
        },
        {
          name: "Office 2021 Pro",
          duration: "Lifetime",
          type: "1 PC",
          price: "$8.00",
          warranty: "Lifetime",
          available: true,
        },
        {
          name: "Office 2024 Pro",
          duration: "Lifetime",
          type: "1 PC",
          price: "$12.00",
          warranty: "Lifetime",
          available: true,
        },
        {
          name: "Office 365",
          duration: "1 Year",
          type: "Personal",
          price: "$16.00",
          warranty: "12 Months",
          available: true,
        },
        {
          name: "Office 365 Family",
          duration: "12 Months",
          type: "6 Users",
          price: "$60.00",
          warranty: "12 Months",
          available: true,
        },
      ],
    },
    design: {
      title: "Design & Creative Tools",
      description: "Canva, Figma, and other creative platforms",
      services: [
        {
          name: "Canva Pro",
          duration: "12 Months",
          type: "500 Users",
          price: "$15.00",
          warranty: "12 Months",
          available: true,
        },
        {
          name: "Figma Professional",
          duration: "1 Month",
          type: "Personal",
          price: "$10.00",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Picsart Premium",
          duration: "6 Months",
          type: "Personal",
          price: "$15.00",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Kittl Pro Plan",
          duration: "1 Month",
          type: "Personal",
          price: "$8.00",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Kittl Expert Plan",
          duration: "1 Month",
          type: "Personal",
          price: "$10.00",
          warranty: "Full Warranty",
          available: true,
        },
      ],
    },
    vpn: {
      title: "VPN & Security",
      description: "Secure your online presence",
      services: [
        {
          name: "NordVPN",
          duration: "12 Months",
          type: "Personal",
          price: "$45.00",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Surfshark VPN",
          duration: "3 Months",
          type: "Personal",
          price: "$12.00",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Kaspersky Internet Security",
          duration: "12 Months",
          type: "Personal",
          price: "$8.00",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Kaspersky Total Security",
          duration: "12 Months",
          type: "5 Devices",
          price: "$20.00",
          warranty: "Full Warranty",
          available: true,
        },
      ],
    },
    ai: {
      title: "AI & Productivity Tools",
      description: "ChatGPT, Grammarly, and AI-powered tools",
      services: [
        {
          name: "ChatGPT Plus",
          duration: "1 Month",
          type: "Personal",
          price: "$15.00",
          warranty: "25 Days",
          available: true,
        },
        {
          name: "Grammarly Premium",
          duration: "1 Month",
          type: "Personal",
          price: "$7.00",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Grammarly Premium",
          duration: "12 Months",
          type: "Personal",
          price: "$45.00",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Notion Pro",
          duration: "12 Months",
          type: "Personal",
          price: "$25.00",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "QuillBot Premium",
          duration: "12 Months",
          type: "Personal",
          price: "$25.00",
          warranty: "Full Warranty",
          available: false,
        },
      ],
    },
    video: {
      title: "Video & Audio Tools",
      description: "Filmora, CapCut, and video editing software",
      services: [
        {
          name: "Filmora 14",
          duration: "1 Year",
          type: "Windows/Mac",
          price: "$8.00",
          warranty: "1 Year",
          available: true,
        },
        {
          name: "Filmora 14 + 2000 AI Credits",
          duration: "Lifetime",
          type: "Windows/Mac",
          price: "$12.50",
          warranty: "Lifetime",
          available: true,
        },
        {
          name: "CapCut Pro",
          duration: "4 Months",
          type: "Shared",
          price: "$12.00",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "CapCut Pro",
          duration: "12 Months",
          type: "Personal",
          price: "$20.00",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Epidemic Sound Personal",
          duration: "1 Month",
          type: "Personal",
          price: "$6.00",
          warranty: "Full Warranty",
          available: true,
        },
        {
          name: "Epidemic Sound Commercial",
          duration: "1 Month",
          type: "Commercial",
          price: "$14.00",
          warranty: "Full Warranty",
          available: true,
        },
      ],
    },
  }

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Premium Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our extensive collection of premium digital products and subscriptions at unbeatable prices.
          </p>
        </div>

        <Tabs defaultValue="adobe" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <TabsTrigger key={key} value={key} className="text-xs md:text-sm">
                {category.title.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(serviceCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg font-semibold leading-tight">{service.name}</CardTitle>
                        {service.available ? (
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Available
                          </Badge>
                        ) : (
                          <Badge
                            variant="secondary"
                            className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          >
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>
                      <CardDescription className="text-sm">
                        {service.duration} • {service.type}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          <span>{service.warranty}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          <span>Instant Delivery</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          <span>24/7 Support</span>
                        </div>
                      </div>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        disabled={!service.available}
                      >
                        <Link href="https://t.me/webhumacom" target="_blank">
                          {service.available ? "Order Now" : "Out of Stock"}
                          {service.available && <ArrowRight className="ml-2 h-4 w-4" />}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
          <Button asChild variant="outline" size="lg" className="border-2 hover:bg-muted/50">
            <Link href="https://t.me/webhumacom" target="_blank">
              Contact us for custom requests
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
