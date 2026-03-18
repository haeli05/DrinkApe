import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-[rgb(12,34,26)] mb-8">
            Terms of service
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Overview
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                This website is operated by Ape Beverages. Throughout the site, the terms 'we', 'us' and 'our' refer to Ape Beverages. Ape Beverages offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Section 1
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Section 2
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                We reserve the right to refuse service to anyone for any reason at any time. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service without express written permission by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Section 3
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Section 4
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. Prices for our products are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                Section 5
              </h2>
              <p className="text-[rgb(12,34,26)] font-medium leading-relaxed">
                Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Refund Policy.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
