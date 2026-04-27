'use client'

import AnimatedWorldMap from "@/components/animated-world-map"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({})

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const faqs = [
    {
      question: "How far in advance should I book a charter flight?",
      answer:
        "We recommend booking charter flights as far in advance as possible, ideally 2-4 weeks before your intended departure date. However, we can accommodate urgent requests on shorter notice depending on aircraft availability. Emergency charters can sometimes be arranged within 24 hours.",
    },
    {
      question: "What is included in the charter price?",
      answer:
        "Our charter prices typically include aircraft rental, crew services, fuel, and basic catering. Additional services such as ground transportation, hotel arrangements, or special catering can be arranged for an additional fee. We provide a detailed breakdown of all costs in your quote.",
    },
    {
      question: "Can you accommodate special requirements like medical equipment or live animals?",
      answer:
        "Yes, we can accommodate various special requirements including medical equipment, pets, and even livestock with proper arrangements. Please inform us of your specific needs when requesting a quote so we can ensure all necessary preparations are made.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy varies depending on how close to the departure date you cancel. Typically, cancellations made more than 7 days in advance have minimal penalties, while cancellations within 72 hours may incur significant charges. Full details are provided in your booking confirmation.",
    },
    {
      question: "Do you offer cargo charter services?",
      answer:
        "Yes, we specialize in cargo charters including urgent shipments, dangerous goods, heavy and outsize cargo, humanitarian aid, and pharmaceutical transport. Our cargo services are available across Africa, Europe, Middle East, and Asia.",
    },
    {
      question: "What safety certifications do you hold?",
      answer:
        "Transafrican Air maintains all required international safety certifications and regulatory compliance. Our operations are fully licensed by the Kenya Civil Aviation Authority and we comply with all IATA and ICAO standards for aviation safety and security.",
    },
    {
      question: "Can I bring my own catering on board?",
      answer:
        "Absolutely! While we offer catering services, you're welcome to arrange your own catering or bring food and beverages on board. We can also work with your preferred catering partner if you have specific preferences or dietary requirements.",
    },
    {
      question: "What areas do you operate to?",
      answer:
        "We operate globally with strong networks across Africa, Europe, Middle East & North Africa (MENA), and Asia. Our main base is at Jomo Kenyatta International Airport in Nairobi, Kenya, but we can arrange flights to virtually any international airport worldwide.",
    },
    {
      question: "How do I request a quote for a charter flight?",
      answer:
        "You can request a quote through our website using the 'Get A Quote' form, or contact our charter specialists directly via email at charters@transafricanair.com or phone at +254 206 822 285. We'll need details about your travel dates, routing, and any special requirements.",
    },
    {
      question: "Do you offer group charter discounts?",
      answer:
        "Yes! We offer competitive rates for group charters. Larger groups and regular bookings often qualify for special rates. Contact our sales team to discuss your specific group travel needs and receive a customized quote.",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Find answers to common questions about our charter services.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 border border-slate-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition"
                >
                  <h3 className="text-lg font-semibold text-left text-slate-900">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 transition-transform ${
                      openItems[index] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openItems[index] && (
                  <div className="px-6 py-4 bg-white border-t border-slate-200">
                    <p className="text-slate-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedWorldMap />
    </main>
  )
}
