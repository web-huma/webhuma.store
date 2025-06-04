import { Award, Users, Shield, Zap } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "10,000+", label: "Happy Customers" },
    { icon: <Award className="h-8 w-8" />, number: "200+", label: "Digital Products" },
    { icon: <Shield className="h-8 w-8" />, number: "99.9%", label: "Uptime Guarantee" },
    { icon: <Zap className="h-8 w-8" />, number: "24/7", label: "Customer Support" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Webhuma
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Webhuma is your trusted partner for premium digital products and subscriptions. We've been serving
              customers worldwide with authentic, affordable software solutions since our inception.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to make premium software accessible to everyone without compromising on quality or
              security. We work directly with authorized distributors to ensure you get genuine products at the best
              prices.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Authorized reseller partnerships</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">100% genuine software licenses</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Instant delivery system</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-background border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl flex items-center justify-center">
                  <div className="text-blue-600 dark:text-blue-400">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
