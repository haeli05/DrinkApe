import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

const posts = [
  {
    title: "Art Basel",
    image: "//drinkape.com/cdn/shop/articles/apetruck.jpg?v=1688441691&width=750",
    url: "/blogs/news/art-basel",
  },
  {
    title: "World of Water",
    image: "//drinkape.com/cdn/shop/articles/worldwater.jpg?v=1688441307&width=750",
    url: "/blogs/news/world-of-water",
  },
  {
    title: "Lighting in a Bottle Collab",
    image: "//drinkape.com/cdn/shop/articles/lighting.jpg?v=1688441187&width=750",
    url: "/blogs/news/lighting-in-a-bottle-collab",
  },
];

export function BlogPosts() {
  return (
    <section className="py-20 bg-[rgb(240,249,244)]">
      <div className="max-w-[1820px] mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center uppercase mb-16 tracking-tight text-[rgb(12,34,26)]">
          Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <Link key={index} href={post.url}>
              <Card className="overflow-hidden transition-all hover:shadow-xl">
                <CardHeader className="p-0">
                  <div className="aspect-[3/2] bg-white relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-5 text-center">
                  <h3 className="text-xl font-bold text-[rgb(12,34,26)]">
                    {post.title}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
