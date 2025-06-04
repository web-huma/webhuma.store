import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Are your products genuine and legal?",
      answer:
        "Yes, all our products are 100% genuine and legal. We work with authorized distributors and resellers to ensure you receive authentic licenses and subscriptions.",
    },
    {
      question: "How quickly will I receive my product?",
      answer:
        "Most products are delivered instantly via email after payment confirmation. Some products may take up to 24 hours for manual processing.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit cards, PayPal, cryptocurrency, and bank transfers. All payments are processed securely.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a money-back guarantee. If you're not satisfied with your purchase or encounter any issues, contact us within the warranty period for a full refund.",
    },
    {
      question: "Can I use these products for commercial purposes?",
      answer:
        "It depends on the specific product and license type. Personal licenses are for individual use, while commercial licenses allow business use. Check the product description for details.",
    },
    {
      question: "Do you provide customer support?",
      answer:
        "Yes, we provide 24/7 customer support via Telegram, email, and live chat. Our team is always ready to help with any questions or issues.",
    },
    {
      question: "How do I know if a product is compatible with my system?",
      answer:
        "Each product listing includes system requirements and compatibility information. If you're unsure, contact our support team before purchasing.",
    },
    {
      question: "Can I share my account with others?",
      answer:
        "This depends on the license type. Personal licenses are typically for single-user use, while some products offer family or team sharing options. Check the specific terms for each product.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
