import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-[rgb(12,34,26)] mb-12">
            Refund policy
          </h1>

          <div className="prose prose-lg max-w-3xl space-y-6">
            <p className="text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
              To be eligible for a return, your item must be in the same condition as received, with no cans missing or opened with its original packaging. You also need the receipt or proof of purchase.
            </p>

            <p className="text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
              Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item.
            </p>

            <p className="text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
              Photo proof and email ape@apebeverages.com to confirm a valid request.
            </p>

            <p className="text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
              We will notify you once we've received and inspected your return, and let you know if the refund was approved or not. If approved, you'll be automatically refunded on your original payment method. Please remember it can take some time for your bank or credit card company to process and post the refund too.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
