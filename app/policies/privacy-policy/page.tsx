import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-[rgb(12,34,26)] mb-8">
            Privacy policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
              This Privacy Policy describes how apebeverages.com (the 'site' or 'we') collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.
            </p>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Contact
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                After reviewing this policy, if you have additional questions, want more information about our privacy practices, or would like to make a complaint, please contact us by e-mail at ape@apebeverages.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Collecting Personal Information
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Minors
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                The Site is not intended for individuals under the age of 18.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Sharing Personal Information
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Using Personal Information
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                We use your personal Information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up to date on new products, services, and offers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Retention
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                When you place an order through the Site, we will retain your Personal Information for our records unless and until you ask us to erase this information.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
