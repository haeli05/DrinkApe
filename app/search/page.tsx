"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductGrid } from "@/components/sections/product-grid";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

// Mock product data
const allProducts = [
  {
    id: "1",
    title: "Natural Spring Water",
    price: "$16.99",
    image: "/images/Ape-Water---Box-and-Can-1a-OPT.jpg",
    handle: "shopwater",
  },
  {
    id: "2",
    title: "Ape Nice Package",
    price: "$49.99",
    image: "/images/Starter-Bundle-Image-1_5a5b0c86-ff50-4d2c-8a2a-b880bf98e2fb.jpg",
    handle: "starter-bundle",
  },
  {
    id: "3",
    title: "Ape Big Package",
    price: "$69.99",
    image: "/images/Ape-Bundle-Image-Main_72ec0622-2ebf-4191-85e7-9d25ae4ea169.jpg",
    handle: "ape-bundle",
  },
  {
    id: "4",
    title: "Ape Huge Package",
    price: "$99.99",
    image: "/images/Total-Ape-Bundle-Image-Main_2419b1ca-821e-490c-9ec5-87ca58c68717.jpg",
    handle: "total-ape-bundle",
  },
  {
    id: "5",
    title: "Ape Cooler (NEW)",
    price: "$59.99",
    image: "/images/Ape-Water-NEW-Cooler-Front.jpg",
    handle: "ape-cooler-new",
  },
  {
    id: "6",
    title: "REUSABLE APE BOTTLE 36 OZ",
    price: "$19.99",
    image: "/images/36oz.1.jpg",
    handle: "reusable-water-bottle-36-oz",
  },
  {
    id: "7",
    title: "Ape Drop Hoodie",
    price: "$59.99",
    image: "/images/Ape-Water-Sweatshirt-Front-Blue.jpg",
    handle: "ape-drop-hoodie-ivory",
  },
  {
    id: "8",
    title: "Touch Grass Tote",
    price: "$29.99",
    image: "/images/touch.grass.tote.bag1.jpg",
    handle: "touch-grass-tote",
  },
  {
    id: "9",
    title: "Don't Be Thirsty Trucker",
    price: "$33.99",
    image: "/images/Don_tBeThirstyHat.jpg",
    handle: "dont-be-thirsty-trucker-hat",
  },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(allProducts);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults(allProducts);
      return;
    }

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        {/* Search Header */}
        <div className="bg-[rgb(240,249,244)] py-16">
          <div className="max-w-[1820px] mx-auto px-5">
            <h1 className="text-4xl md:text-5xl font-bold uppercase text-center text-[rgb(12,34,26)] mb-8">
              Search our site
            </h1>

            {/* Search Input */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-6 py-4 pr-14 border-2 border-[rgb(12,34,26)]/20 rounded-[9999px] focus:outline-none focus:border-[rgb(255,200,0)] transition-colors font-medium text-lg"
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2">
                <SearchIcon className="w-6 h-6 text-[rgb(12,34,26)]/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-w-[1820px] mx-auto px-5 py-16">
          {searchQuery && (
            <p className="text-lg text-[rgb(12,34,26)] font-medium mb-8">
              {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "{searchQuery}"
            </p>
          )}

          {searchResults.length > 0 ? (
            <ProductGrid products={searchResults} />
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-[rgb(12,34,26)] font-medium mb-4">
                No products found
              </p>
              <p className="text-[rgb(12,34,26)]/70 font-medium">
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
