import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Art Basel",
    slug: "art-basel",
    image: "//drinkape.com/cdn/shop/articles/apetruck.jpg?v=1688441691&width=750",
    excerpt: "Art Basel, a pinnacle event in the art world, celebrates creativity, innovation, and the power of human expression. Ape Water...elevated the overall experience for attendees and artists alike.",
    date: "July 03, 2023",
  },
  {
    title: "World of Water",
    slug: "world-of-water",
    image: "//drinkape.com/cdn/shop/articles/worldwater.jpg?v=1688441307&width=750",
    excerpt: "World Of Water: March 2023, Ape Beverages produced a full immersive water wonderland pop up featuring aquatic themed digital art, art installations, music, lectures, parties and workshops.",
    date: "July 03, 2023",
  },
  {
    title: "Lighting in a Bottle Collab",
    slug: "lighting-in-a-bottle-collab",
    image: "//drinkape.com/cdn/shop/articles/lighting.jpg?v=1688441187&width=750",
    excerpt: "Thrilled to announce a groundbreaking collaboration between Ape Water and the renowned Lighting in the Bottle 20th Anniversary.",
    date: "July 03, 2023",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <div className="max-w-[1820px] mx-auto px-5 py-10 md:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center text-[rgb(12,34,26)] mb-8 md:mb-12">
            News
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
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
                  <CardContent className="p-4 md:p-5 text-center">
                    <h2 className="text-lg md:text-xl font-bold text-[rgb(12,34,26)] mb-2">
                      {post.title}
                    </h2>
                    <time className="text-xs md:text-sm text-[rgb(12,34,26)]/70 font-medium block mb-2 md:mb-3">
                      {post.date}
                    </time>
                    <p className="text-sm md:text-base text-[rgb(12,34,26)] font-medium">
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
