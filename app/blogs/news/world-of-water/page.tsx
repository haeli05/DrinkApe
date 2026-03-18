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

          <h1 className="text-4xl md:text-5xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
            World of Water
          </h1>

          <div className="mb-8">
            <time className="block text-[rgb(12,34,26)]/70 font-medium">
              July 03, 2023
            </time>
            <p className="text-[rgb(12,34,26)]/70 font-medium">
              By Itai Leffler
            </p>
          </div>

          <div className="mb-8">
            <img
              src="//drinkape.com/cdn/shop/articles/worldwater.jpg?v=1688441307&width=1200"
              alt="World of Water"
              className="w-full rounded-[1rem] shadow-[10px_10px_0px_rgba(12,34,26,0.1)]"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
              World Of Water: March 2023, Ape Beverages produced 'World Of Water'; a full immersive water wonderland pop up featuring aquatic themed digital art, immerse art instillations, music, lectures, parties and workshops.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
