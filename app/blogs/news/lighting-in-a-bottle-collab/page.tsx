import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function LightningInABottlePost() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white py-16">
        <article className="max-w-[1200px] mx-auto px-5">
          <div className="mb-8">
            <Link
              href="/blogs/news"
              className="text-[rgb(255,200,0)] font-bold hover:underline"
            >
              ← Back to News
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold uppercase text-[rgb(12,34,26)] mb-4 text-center">
            Lighting in a Bottle Collab
          </h1>

          <time className="block text-center text-[rgb(12,34,26)]/70 font-medium mb-12">
            July 03, 2023
          </time>

          <div className="mb-12">
            <img
              src="//drinkape.com/cdn/shop/articles/lighting.jpg?v=1688441187&width=1200"
              alt="Lighting in a Bottle Collab"
              className="w-full rounded-[1rem] shadow-[10px_10px_0px_rgba(12,34,26,0.1)]"
            />
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
              Our collaboration with Lightning in a Bottle festival brings pure hydration to the community while supporting sustainability and environmental consciousness.
            </p>

            <p className="text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
              Lightning in a Bottle is more than just a festival - it's a celebration of art, music, and environmental awareness. Ape Water was proud to partner with this incredible event to provide sustainable hydration to thousands of festival-goers.
            </p>

            <p className="text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
              Together, we're proving that festivals can be both amazing experiences and environmentally responsible. No plastic bottles, just pure spring water in recyclable cans.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
