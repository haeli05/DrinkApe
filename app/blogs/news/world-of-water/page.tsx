import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function WorldOfWaterPost() {
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
            World of Water
          </h1>

          <time className="block text-center text-[rgb(12,34,26)]/70 font-medium mb-12">
            July 03, 2023
          </time>

          <div className="mb-12">
            <img
              src="//drinkape.com/cdn/shop/articles/worldwater.jpg?v=1688441307&width=1200"
              alt="World of Water"
              className="w-full rounded-[1rem] shadow-[10px_10px_0px_rgba(12,34,26,0.1)]"
            />
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
              Discover the story behind our commitment to sustainable hydration and why we believe in the power of natural spring water.
            </p>

            <p className="text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
              At Ape Water, we're not just selling water - we're part of a movement to reconnect people with pure, natural hydration while protecting our planet from plastic pollution.
            </p>

            <p className="text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
              Our aluminum cans are infinitely recyclable, and our water comes from pristine natural springs. It's water the way nature intended.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
