import { Button } from "@/components/ui/button";
import Link from "next/link";

export function RichText() {
  return (
    <section className="py-20 bg-[rgb(240,249,244)]">
      <div className="max-w-[800px] mx-auto px-5 text-center">
        <Link href="/products/shopwater">
          <Button className="bg-[rgb(255,200,0)] hover:bg-[rgb(255,200,0)]/90 text-[rgb(12,34,26)] py-5 px-12 rounded-[9999px] font-bold text-lg uppercase shadow-[5px_5px_0px_rgba(12,34,26,0.3)]">
            Step Your Water Game Up
          </Button>
        </Link>
      </div>
    </section>
  );
}
