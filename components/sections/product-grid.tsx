import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  handle: string;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.handle}`}
          className="group"
        >
          <div className="bg-white rounded-[1rem] overflow-hidden shadow-[10px_10px_0px_rgba(12,34,26,0.1)] hover:shadow-[10px_10px_0px_rgba(12,34,26,0.2)] transition-all hover:-translate-y-1">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden bg-white">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold uppercase text-[rgb(12,34,26)] mb-2 leading-tight">
                {product.title}
              </h3>
              <p className="text-2xl font-bold text-[rgb(12,34,26)]">
                {product.price}
              </p>

              {/* Add to Cart Button */}
              <button className="mt-4 w-full bg-[rgb(255,200,0)] text-[rgb(12,34,26)] py-3 px-6 rounded-[9999px] font-bold text-sm uppercase hover:bg-[rgb(255,200,0)]/90 transition-all shadow-[5px_5px_0px_rgba(12,34,26,0.2)]">
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
