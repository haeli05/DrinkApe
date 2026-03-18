import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-[rgb(12,34,26)] mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Information We Collect
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, make a purchase, sign up for our newsletter, or contact us for support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                How We Use Your Information
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                We use the information we collect to process orders, communicate with you, improve our products and services, and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Information Sharing
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                We do not sell or rent your personal information to third parties. We may share your information with service providers who help us operate our business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Contact Us
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@drinkape.com" className="text-[rgb(255,200,0)] hover:underline">
                  privacy@drinkape.com
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
