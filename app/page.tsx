import { Code, Palette, Smartphone, Globe, ShoppingCart, Zap } from "lucide-react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const services = [
    {
      title: "تطوير المواقع الإلكترونية",
      description: "مواقع احترافية متجاوبة مع جميع الأجهزة باستخدام أحدث التقنيات",
      icon: <Globe className="h-8 w-8" />,
      price: "من $299",
      features: ["تصميم متجاوب", "سرعة عالية", "SEO محسن", "لوحة تحكم"],
    },
    {
      title: "تطبيقات الجوال",
      description: "تطبيقات iOS و Android بتصميم عصري وأداء متميز",
      icon: <Smartphone className="h-8 w-8" />,
      price: "من $599",
      features: ["iOS & Android", "UI/UX احترافي", "أداء سريع", "دعم فني"],
    },
    {
      title: "تصميم UI/UX",
      description: "تصاميم إبداعية تركز على تجربة المستخدم وسهولة الاستخدام",
      icon: <Palette className="h-8 w-8" />,
      price: "من $199",
      features: ["تصميم إبداعي", "تجربة مستخدم", "نماذج أولية", "دليل العلامة التجارية"],
    },
    {
      title: "برمجة مخصصة",
      description: "حلول برمجية مخصصة لاحتياجاتك الخاصة",
      icon: <Code className="h-8 w-8" />,
      price: "من $399",
      features: ["حلول مخصصة", "تقنيات حديثة", "كود نظيف", "توثيق شامل"],
    },
    {
      title: "متاجر إلكترونية",
      description: "متاجر إلكترونية متكاملة مع أنظمة دفع آمنة",
      icon: <ShoppingCart className="h-8 w-8" />,
      price: "من $499",
      features: ["بوابات دفع", "إدارة المخزون", "تقارير مبيعات", "دعم العملاء"],
    },
    {
      title: "تحسين الأداء",
      description: "تحسين سرعة وأداء المواقع والتطبيقات الحالية",
      icon: <Zap className="h-8 w-8" />,
      price: "من $149",
      features: ["تحسين السرعة", "تحسين SEO", "تحليل الأداء", "تقرير مفصل"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection services={services} />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}
