import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const faqs = [
  {
    question: "What is Ape Beverages?",
    answer: "Ape Beverages is the water industry's highest quality water and drinking experience wrapped into a minimal carbon footprint that focuses around the Web3 space.",
  },
  {
    question: "What are the benefits of drinking Ape Water?",
    answer: "Ape Water features a perfect mineral profile sourced from Mt. Shasta's renowned natural springs. The water travels through caves and crystals, creating a natural mineral blend. It contains no microplastics since it's canned in sustainable aluminum, allowing consumers to invest in themselves and the future.",
  },
  {
    question: "Where can I buy Ape Water?",
    answer: "Ape Water is available both on our website and at select retailers. Customers can purchase through the website via a subscription program, with limited cases available weekly at select retailers. Follow their social media for availability updates.",
  },
  {
    question: "What is inside Ape Water?",
    answer: "Ape Water is 100% natural pure spring water sourced and canned directly from locally sourced natural springs.",
  },
  {
    question: "What is the PH Balance of Ape Water?",
    answer: "Ape Water's natural-made alkaline level flows between 6.5 & 7.5 with no additives, as it comes directly from nature.",
  },
  {
    question: "What if my package is lost of damaged?",
    answer: "Contact their support team.",
  },
  {
    question: "What forms of payment are accepted?",
    answer: "All major credit cards plus Ethereum.",
  },
  {
    question: "How can I get Ape Water at my event, organization, office, or store?",
    answer: "Send inquiries to ape@apebeverages.com",
  },
  {
    question: "How do I get involved with Ape Beverages?",
    answer: "Contact ape@apebeverages.com",
  },
  {
    question: "What is the customer support contact?",
    answer: "Support@apebeverages.com",
  },
  {
    question: "Do you ship internationally?",
    answer: "We currently are ONLY shipping to the United States.",
  },
  {
    question: "Can I skip a shipment?",
    answer: "",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-center text-[rgb(12,34,26)] mb-12">
            FAQ
          </h1>

          <div className="space-y-8 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[rgb(12,34,26)]/10 pb-6">
                <h2 className="text-xl md:text-2xl font-bold text-[rgb(12,34,26)] mb-3">
                  {faq.question}
                </h2>
                {faq.answer && (
                  <p className="text-base md:text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
