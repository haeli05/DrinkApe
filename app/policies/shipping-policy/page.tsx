import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-[rgb(12,34,26)] mb-12">
            Shipping policy
          </h1>

          <div className="prose prose-lg max-w-3xl">
            <p className="text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
              Shipping is 3 to 7 days depending on location.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
