import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Art Basel",
    slug: "art-basel",
    image: "//drinkape.com/cdn/shop/articles/apetruck.jpg?v=1688441691&width=750",
    excerpt: "Art Basel, a pinnacle event in the art world, celebrates creativity, innovation, and the power of human expression.",
    date: "July 03, 2023",
  },
  {
    title: "World of Water",
    slug: "world-of-water",
    image: "//drinkape.com/cdn/shop/articles/worldwater.jpg?v=1688441307&width=750",
    excerpt: "Discover the story behind our commitment to sustainable hydration.",
    date: "July 03, 2023",
  },
  {
    title: "Lighting in a Bottle Collab",
    slug: "lighting-in-a-bottle-collab",
    image: "//drinkape.com/cdn/shop/articles/lighting.jpg?v=1688441187&width=750",
    excerpt: "Our collaboration with Lightning in a Bottle festival brings pure hydration to the community.",
    date: "July 03, 2023",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <div className="max-w-[1820px] mx-auto px-5 py-16">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-center text-[rgb(12,34,26)] mb-12">
            News
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blogs/news/${post.slug}`}>
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
                    <h2 className="text-xl font-bold text-[rgb(12,34,26)] mb-2">
                      {post.title}
                    </h2>
                    <time className="text-sm text-[rgb(12,34,26)]/70 font-medium block mb-3">
                      {post.date}
                    </time>
                    <p className="text-[rgb(12,34,26)] font-medium">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
