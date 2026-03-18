import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ImageWithText() {
  return (
    <section className="py-20 bg-[rgb(240,249,244)]">
      <div className="max-w-[1820px] mx-auto px-5">
        <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-[10px_10px_0px_rgba(12,34,26,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-start-7 lg:col-end-13">
              <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <img
                  src="//drinkape.com/cdn/shop/files/our.mission.jpg?v=1704738567&width=1200"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 flex items-center">
              <div className="text-left w-full">
                <h2 className="text-4xl md:text-5xl font-bold uppercase mb-5 text-[rgb(12,34,26)]">
                  Apes Together Strong
                </h2>
                <div className="text-base text-[rgb(12,34,26)] space-y-4 mb-8">
                  <p className="font-bold">
                    Fuel your organization, school, or event with the power of APE
                  </p>
                  <p>
                    Join us in keeping schools, businesses, and events refreshed with pure, sustainable hydration.
                  </p>
                  <p>
                    Partner with Ape Water and make a positive impact—providing clean water and promoting wellness wherever it's needed.
                  </p>
                  <p>Ready to grow together?</p>
                </div>
                <Link href="/pages/contact">
                  <Button className="bg-[rgb(255,200,0)] hover:bg-[rgb(255,200,0)]/90 text-[rgb(12,34,26)] py-5 px-12 rounded-[9999px] font-bold text-lg uppercase shadow-[5px_5px_0px_rgba(12,34,26,0.3)]">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
