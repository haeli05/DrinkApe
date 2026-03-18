import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const products = [
  {
    name: "Ape Nice Package",
    description: "1 case of Ape Water + Ape Cooler",
    price: "$49.99",
    image: "/images/Starter-Bundle-Image-1_5a5b0c86-ff50-4d2c-8a2a-b880bf98e2fb.jpg",
  },
  {
    name: "Ape Big Package",
    description: "2 cases of Ape Water + Ape Cooler + Ape Thermos",
    price: "$69.99",
    image: "/images/Ape-Bundle-Image-Main_72ec0622-2ebf-4191-85e7-9d25ae4ea169.jpg",
  },
  {
    name: "Ape Huge Package",
    description: "2 cases of Ape Water + Ape Cooler + Ape Thermos + Don't Be Thirsty Trucker + 2 Ape Banana Suits",
    price: "$99.99",
    image: "/images/Total-Ape-Bundle-Image-Main_2419b1ca-821e-490c-9ec5-87ca58c68717.jpg",
  },
];

export function DripStore() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1820px] mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center uppercase mb-16 tracking-tight text-[rgb(12,34,26)]">
          Ape Drip Store
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all hover:shadow-xl"
            >
              <CardHeader className="p-0">
                <div className="aspect-square bg-white relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-bold uppercase mb-2">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-base font-medium mb-4">
                  {product.description}
                </CardDescription>
                <p className="text-3xl font-bold text-[rgb(12,34,26)]">
                  {product.price}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full font-semibold uppercase">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
