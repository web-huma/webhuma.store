import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Get Started?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of satisfied customers and get access to premium digital products at unbeatable prices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            asChild
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link href="https://t.me/webhumacom" target="_blank">
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us on Telegram
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-xl transition-all duration-200"
          >
            <Link href="#services">
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-blue-100 text-sm">
          <p>💬 Available 24/7 • 🚀 Instant Delivery • 🛡️ 100% Secure</p>
        </div>
      </div>
    </section>
  )
}
