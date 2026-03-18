import { Button } from "@/components/ui/button";

export function ImageWithTextOverlay() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <picture>
          <source
            media="(min-width: 990px)"
            srcSet="//drinkape.com/cdn/shop/files/Ape-Water-Spring-Outdoor-Scene.jpg?v=1727978615&width=1920"
          />
          <img
            src="//drinkape.com/cdn/shop/files/Ape-Water-pure-hydration.jpg?v=1727361973&width=1200"
            alt="Ape Water Hydration"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      <div className="absolute inset-0 flex items-start justify-center px-5 py-20">
        <div className="max-w-xl text-center text-white z-10">
          <h2 className="text-5xl md:text-6xl font-bold uppercase mb-5">
            Go Ape for Real Hydration
          </h2>
          <p className="text-lg font-bold mb-5">
            FROM THE SPRING TO YOUR HAND
          </p>
        </div>
      </div>
    </section>
  );
}
