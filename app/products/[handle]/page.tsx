"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

// Mock product data
const products: Record<string, any> = {
  "shopwater": {
    title: "Natural Spring Water",
    price: "$16.99",
    description: "Canned Spring Water California - Natural Drinking Water",
    longDescription: "Sourced from pristine, natural springs right here in the USA including Mt. Shasta in California, Palomar Mountain, and the Blue Ridge Mountains. Bottled at the source and delivered to you in eco-friendly, BPA-free cans.",
    images: [
      "/images/Ape-Water---Box-and-Can-1a-OPT.jpg",
    ],
    details: [
      "100% Natural Spring Water",
      "Sourced from Mt. Shasta in Siskiyou County, California, Palomar Mountain and the Blue Ridge Mountains",
      "Bottled at the source in eco-friendly, BPA-free aluminum cans",
      "Natural Electrolytes & Minerals",
      "Infinitely recyclable",
      "Tap Water Free Forever",
      "Fluoride & Sulfate Free Forever",
    ],
    variants: [
      { name: "1", price: "$16.99" },
      { name: "2", price: "$33.99" },
      { name: "4", price: "$75.96" },
      { name: "6", price: "$113.94" },
      { name: "8", price: "$151.92" },
      { name: "10", price: "$189.90" },
    ],
  },
  "ape-bundle": {
    title: "Ape Big Package",
    price: "$69.99",
    description: "2 cases of Ape Water + Ape Cooler + Ape Thermos",
    longDescription: "Sourced from pristine, natural springs right here in the USA including Mt. Shasta in California, Palomar Mountain, and the Blue Ridge Mountains. Bottled at the source and delivered to you in eco-friendly, BPA-free cans.",
    images: [
      "/images/Ape-Bundle-Image-Main_72ec0622-2ebf-4191-85e7-9d25ae4ea169.jpg",
      "/images/Ape-Water-NEW-Cooler-Front.jpg",
      "/images/36oz.1.jpg",
    ],
    details: [
      "100% Natural Spring Water",
      "Locally Sourced in America",
      "Natural Electrolytes & Minerals",
      "Infinitely Recyclable Cans",
      "Tap Water Free Forever",
    ],
  },
  "starter-bundle": {
    title: "Ape Nice Package",
    price: "$49.99",
    description: "1 case of Ape Water + Ape Cooler",
    longDescription: "Sourced from pristine, natural springs right here in the USA including Mt. Shasta in California, Palomar Mountain, and the Blue Ridge Mountains. Bottled at the source and delivered to you in eco-friendly, BPA-free cans.",
    images: [
      "/images/Starter-Bundle-Image-1_5a5b0c86-ff50-4d2c-8a2a-b880bf98e2fb.jpg",
      "/images/36oz.1.jpg",
    ],
    details: [
      "100% Natural Spring Water",
      "Locally Sourced in America",
      "Natural Electrolytes & Minerals",
      "Infinitely Recyclable Cans",
      "Tap Water Free Forever",
    ],
  },
  "total-ape-bundle": {
    title: "Ape Huge Package",
    price: "$99.99",
    description: "2 cases of Ape Water + Ape Cooler + Ape Thermos + Don't Be Thirsty Trucker + 2 Ape Banana Suits",
    longDescription: "Sourced from pristine, natural springs right here in the USA including Mt. Shasta in California, Palomar Mountain, and the Blue Ridge Mountains. Bottled at the source and delivered to you in eco-friendly, BPA-free cans.",
    images: [
      "/images/Total-Ape-Bundle-Image-Main_2419b1ca-821e-490c-9ec5-87ca58c68717.jpg",
      "/images/Ape-Water-NEW-Cooler-Front.jpg",
    ],
    details: [
      "100% Natural Spring Water",
      "Locally Sourced in America",
      "Natural Electrolytes & Minerals",
      "Infinitely Recyclable Cans",
      "Tap Water Free Forever",
    ],
  },
  "ape-cooler-new": {
    title: "Ape Cooler (NEW)",
    price: "$59.99",
    description: "Custom cooler featuring a leather shoulder strap",
    longDescription: "Custom cooler designed by Ape Water featuring a leather shoulder strap. Perfect for keeping your Ape Water cold on the go.",
    images: [
      "/images/Ape-Water-NEW-Cooler-Front.jpg",
    ],
    details: [
      "Custom design by Ape Water",
      "Leather shoulder strap",
      "High-quality insulation",
      "Durable construction",
    ],
  },
  "reusable-water-bottle-36-oz": {
    title: "REUSABLE APE BOTTLE 36 OZ",
    price: "$19.99",
    description: "36oz Reusable Ape Thermos",
    images: [
      "/images/36oz.1.jpg",
    ],
    details: [
      "36oz capacity",
      "Keeps drinks cold for 24 hours",
      "Keeps drinks hot for 12 hours",
      "BPA-free",
      "Durable stainless steel",
    ],
  },
  "ape-drop-hoodie-ivory": {
    title: "Ape Drop Hoodie",
    price: "$59.99",
    description: "Premium Ape Water hoodie",
    images: [
      "/images/Ape-Water-Sweatshirt-Front-Blue.jpg",
    ],
    details: [
      "Premium cotton blend",
      "Comfortable fit",
      "Ape Water branding",
      "Machine washable",
    ],
  },
  "dont-be-thirsty-trucker-hat": {
    title: "Don't Be Thirsty Trucker",
    price: "$33.99",
    description: "Classic trucker hat with Ape Water branding",
    images: [
      "/images/Don_tBeThirstyHat.jpg",
    ],
    details: [
      "Classic trucker style",
      "Adjustable snapback",
      "Breathable mesh back",
      "Ape Water branding",
    ],
  },
  "touch-grass-tote": {
    title: "Touch Grass Tote",
    price: "$29.99",
    description: "Eco-friendly tote bag",
    images: [
      "/images/touch.grass.tote.bag1.jpg",
    ],
    details: [
      "Durable canvas material",
      "Eco-friendly",
      "Large capacity",
      "Ape Water branding",
    ],
  },
  "boho-salon-limited-edition-collab-drop-copy": {
    title: "Boho Salon x Ape Water Limited Edition - Claim Your Spot!",
    price: "$0.00",
    description: "Straight from the game to your doorstep",
    longDescription: "This exclusive collaboration represents a unique crossover between Roblox gaming and real-world commerce. Only available through Boho Solon in Roblox yet ships as an actual product to your home.",
    images: [
      "/images/Screenshot_2025-08-14_at_4.31.46_PM.png",
    ],
    details: [
      "Limited edition cans with restricted availability",
      "Exclusive Roblox integration",
      "Physical product fulfillment",
      "Positioned as a premium collectible experience",
      "Only available through Boho Solon in Roblox",
    ],
  },
  "product-name": {
    title: "Ape Trucker",
    price: "$30.00",
    description: "Classic Ape Water trucker hat",
    images: [
      "/images/Ape.water.logo.trucker.hat1.jpg",
    ],
    details: [
      "Classic trucker style",
      "Adjustable snapback",
      "Breathable mesh back",
      "Ape Water logo branding",
    ],
  },
  "ape-water-varsity-jacket": {
    title: "Varsity Jacket",
    price: "$650.00",
    description: "Premium varsity jacket with Ape Water branding",
    images: [
      "/images/Ape-Water-Sweatshirt-Front-Blue.jpg",
    ],
    details: [
      "Premium quality construction",
      "Classic varsity style",
      "Ape Water embroidered logo",
      "Comfortable fit",
    ],
  },
  "limited-edition-ape-fest-2024-tee-powered-by-ape-water": {
    title: "Limited Edition: Ape Fest Lisbon 2024 Tee",
    price: "$29.99",
    description: "Powered by Ape Water",
    images: [
      "/images/Ape-Water-Sweatshirt-Front-Blue.jpg",
    ],
    details: [
      "Limited edition design",
      "Ape Fest Lisbon 2024 exclusive",
      "Premium cotton blend",
      "Powered by Ape Water branding",
    ],
  },
};

export default function ProductPage({ params }: { params: { handle: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);

  const product = products[params.handle];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Product not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white py-10 md:py-16">
        <div className="max-w-[1820px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-white rounded-[1rem] overflow-hidden shadow-[10px_10px_0px_rgba(12,34,26,0.1)]">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-[rgb(255,200,0)] scale-105"
                          : "border-transparent hover:border-[rgb(12,34,26)]/30"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[rgb(12,34,26)] mb-3 md:mb-4">
                {product.title}
              </h1>

              <p className="text-2xl md:text-3xl font-bold text-[rgb(12,34,26)] mb-4 md:mb-6">
                {product.variants ? product.variants[selectedVariant]?.price || product.price : product.price}
              </p>

              <p className="text-base md:text-lg text-[rgb(12,34,26)] font-medium mb-3 md:mb-4">
                {product.description}
              </p>

              {product.longDescription && (
                <p className="text-sm md:text-base text-[rgb(12,34,26)]/80 font-medium mb-6 md:mb-8 leading-relaxed">
                  {product.longDescription}
                </p>
              )}

              {/* Variant Selector */}
              {product.variants && product.variants.length > 0 && (
                <div className="mb-6 md:mb-8">
                  <label className="block text-sm font-bold uppercase text-[rgb(12,34,26)] mb-2">
                    Quantity
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedVariant(index)}
                        className={`px-6 py-3 rounded-[1rem] font-bold text-sm transition-all border-2 ${
                          selectedVariant === index
                            ? "bg-[rgb(255,200,0)] border-[rgb(255,200,0)] text-[rgb(12,34,26)]"
                            : "bg-white border-[rgb(12,34,26)]/20 text-[rgb(12,34,26)] hover:border-[rgb(12,34,26)]/40"
                        }`}
                      >
                        {variant.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Details List */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold uppercase text-[rgb(12,34,26)] mb-3 md:mb-4">
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {product.details.map((detail: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[rgb(12,34,26)] font-medium"
                    >
                      <span className="text-[rgb(255,200,0)] text-lg md:text-xl">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-[rgb(255,200,0)] text-[rgb(12,34,26)] py-4 md:py-5 px-6 md:px-8 rounded-[9999px] font-bold text-base md:text-lg uppercase hover:bg-[rgb(255,200,0)]/90 transition-all shadow-[5px_5px_0px_rgba(12,34,26,0.3)] hover:shadow-[5px_5px_0px_rgba(12,34,26,0.4)] mb-6 md:mb-8">
                Add to Cart - {product.variants ? product.variants[selectedVariant]?.price || product.price : product.price}
              </button>

              {/* Accordion Sections */}
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[rgb(12,34,26)]/10 space-y-2 md:space-y-4">
                {/* Where's it from? */}
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-[rgb(12,34,26)] text-base md:text-lg py-3 md:py-4">
                    <span>Where's it from?</span>
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="pb-3 md:pb-4 text-sm md:text-base text-[rgb(12,34,26)] font-medium leading-relaxed">
                    <p>Ape Water is sourced from pristine, natural springs right here in the USA. Mt. Shasta in Siskiyou County, California, Palomar Mountain and the Blue Ridge Mountains. The result? Pure, clean hydration that's as refreshing as nature intended.</p>
                  </div>
                </details>

                {/* How's it packaged? */}
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-[rgb(12,34,26)] text-base md:text-lg py-3 md:py-4 border-t border-[rgb(12,34,26)]/10">
                    <span>How's it packaged?</span>
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="pb-3 md:pb-4 text-sm md:text-base text-[rgb(12,34,26)] font-medium leading-relaxed">
                    <p>Bottled at the source and delivered to you in eco-friendly, BPA-free cans. It's water the way it's meant to be: untouched, untamed, and undeniably pure.</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
