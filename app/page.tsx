import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ValueProposition } from "@/components/sections/value-proposition";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { MarketingTagline } from "@/components/sections/marketing-tagline";
import { VideoWithText } from "@/components/sections/video-with-text";
import { VerticalVideoEmbeds } from "@/components/sections/vertical-video-embeds";
import { DripStore } from "@/components/sections/drip-store";
import { ImageWithTextOverlay } from "@/components/sections/image-with-text-overlay";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { RichText } from "@/components/sections/rich-text";
import { ImageWithText } from "@/components/sections/image-with-text";
import { BlogPosts } from "@/components/sections/blog-posts";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <FeaturedProducts />
        <MarketingTagline />
        <VideoWithText />
        <VerticalVideoEmbeds />
        <DripStore />
        <ImageWithTextOverlay />
        <ComparisonTable />
        <RichText />
        <ImageWithText />
        <BlogPosts />
        <ImageWithTextOverlay />
      </main>
      <Footer />
    </div>
  );
}
