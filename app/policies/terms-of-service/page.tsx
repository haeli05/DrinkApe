import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-[rgb(12,34,26)] mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Agreement to Terms
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Products and Services
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                All products and services offered through this website are subject to availability. We reserve the right to discontinue any product or service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Orders and Payment
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                All orders are subject to acceptance and availability. Payment must be received before products are shipped. We accept major credit cards and other payment methods as indicated on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Returns and Refunds
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                Please refer to our Return Policy for information about returns and refunds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Contact Information
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                Questions about the Terms of Service should be sent to us at{" "}
                <a href="mailto:legal@drinkape.com" className="text-[rgb(255,200,0)] hover:underline">
                  legal@drinkape.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
