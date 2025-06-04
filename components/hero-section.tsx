import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Users, Shield, Zap } from "lucide-react"
import { SearchDialog } from "@/components/search-dialog"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <Badge
          variant="secondary"
          className="mb-6 text-sm px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 border-0"
        >
          <Star className="w-4 h-4 mr-2 text-yellow-500" />
          Trusted by 10,000+ customers worldwide
        </Badge>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Premium Digital
          </span>
          <br />
          <span className="text-foreground">Subscriptions</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Get access to premium software and services at unbeatable prices. Adobe Creative Cloud, Microsoft Office, VPN
          services, and 200+ more digital products.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">10,000+ Happy Customers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">100% Secure & Guaranteed</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium">Instant Delivery</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link href="#services">
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-muted/50 transition-all duration-200"
          >
            <Link href="https://t.me/webhumacom" target="_blank">
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Quick Search */}
        <div className="mt-12 max-w-md mx-auto">
          <SearchDialog />
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-sm font-medium">Trusted by professionals worldwide</div>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm">4.9/5 rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
