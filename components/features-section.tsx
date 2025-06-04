import { Shield, Zap, Users, Headphones, CreditCard, Globe } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100% Secure & Guaranteed",
      description:
        "All our products come with full warranty and money-back guarantee. Your satisfaction is our priority.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Delivery",
      description: "Get your digital products delivered instantly to your email. No waiting, no delays.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "10,000+ Happy Customers",
      description: "Join thousands of satisfied customers who trust us for their digital product needs.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available round the clock to assist you with any queries.",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Secure Payment",
      description: "Multiple secure payment options available. Your financial information is always protected.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Availability",
      description: "Our services are available worldwide. Get premium software no matter where you are.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Webhuma</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide premium digital products with unmatched quality, security, and customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-background border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <div className="text-blue-600 dark:text-blue-400">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
