import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductGrid } from "@/components/sections/product-grid";

// Mock data - replace with actual data fetching
const collections = {
  "new-collection": {
    title: "Shop Water",
    description: "100% Natural Spring Water",
    products: [
      {
        id: "1",
        title: "Natural Spring Water",
        price: "$16.99",
        image: "/images/Ape-Water---Box-and-Can-1a-OPT.jpg",
        handle: "shopwater",
      },
      {
        id: "1b",
        title: "Boho Salon x Ape Water Limited Edition",
        price: "$0.00",
        image: "/images/Screenshot_2025-08-14_at_4.31.46_PM.png",
        handle: "boho-salon-limited-edition-collab-drop-copy",
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
    ],
  },
  "shop-merch": {
    title: "Shop Merch",
    description: "Ape Water Merchandise",
    products: [
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
        price: "$25.00",
        image: "/images/36oz.1.jpg",
        handle: "reusable-water-bottle-36-oz",
      },
      {
        id: "7",
        title: "Ape Drop Hoodie",
        price: "$65.00",
        image: "/images/Ape-Water-Sweatshirt-Front-Blue.jpg",
        handle: "ape-drop-hoodie-ivory",
      },
      {
        id: "8",
        title: "Touch Grass Tote",
        price: "$20.00",
        image: "/images/touch.grass.tote.bag1.jpg",
        handle: "touch-grass-tote",
      },
      {
        id: "9",
        title: "Don't Be Thirsty Trucker",
        price: "$30.00",
        image: "/images/Don_tBeThirstyHat.jpg",
        handle: "dont-be-thirsty-trucker-hat",
      },
      {
        id: "10",
        title: "Ape Trucker",
        price: "$30.00",
        image: "/images/Ape.water.logo.trucker.hat1.jpg",
        handle: "product-name",
      },
    ],
  },
};

export default function CollectionPage({
  params,
}: {
  params: { handle: string };
}) {
  const collection = collections[params.handle as keyof typeof collections];

  if (!collection) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Collection not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        {/* Collection Header */}
        <div className="max-w-[1820px] mx-auto px-5 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
              {collection.title}
            </h1>
            <p className="text-lg text-[rgb(12,34,26)] font-medium">
              {collection.description}
            </p>
          </div>

          {/* Product Grid */}
          <ProductGrid products={collection.products} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
