import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ValueProposition } from "@/components/sections/value-proposition";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { MarketingTagline } from "@/components/sections/marketing-tagline";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <FeaturedProducts />
        <MarketingTagline />
      </main>
      <Footer />
    </div>
  );
}
