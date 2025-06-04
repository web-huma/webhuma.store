import Link from "next/link"
import { Zap, MessageCircle, Globe } from "lucide-react"

export function Footer() {
  const footerLinks = {
    products: [
      { name: "Adobe Products", href: "#services" },
      { name: "Microsoft Office", href: "#services" },
      { name: "VPN Services", href: "#services" },
      { name: "Design Tools", href: "#services" },
      { name: "AI Tools", href: "#services" },
      { name: "Video Editing", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "FAQ", href: "#faq" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Refund Policy", href: "/refund" },
    ],
    support: [
      { name: "Customer Support", href: "/support" },
      { name: "Installation Help", href: "/support/installation" },
      { name: "Technical Issues", href: "/support/technical" },
      { name: "Billing Support", href: "/support/billing" },
      { name: "Product Updates", href: "/support/updates" },
    ],
  }

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Webhuma
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for premium digital products and subscriptions at unbeatable prices.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MessageCircle className="h-4 w-4 text-blue-400" />
                <Link
                  href="https://t.me/webhumacom"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  @webhumacom
                </Link>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Globe className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">Available Worldwide</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Webhuma. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🛡️ 100% Secure</span>
              <span>🚀 Instant Delivery</span>
              <span>💬 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
