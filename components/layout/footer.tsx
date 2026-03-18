import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[rgb(12,34,26)] text-white">
      <div className="max-w-[1820px] mx-auto px-5 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-4">Ape Water</h3>
            <p className="text-sm md:text-base text-white/80 font-medium">
              100% Natural Spring Water
              <br />
              Locally Sourced in America
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold uppercase mb-3 md:mb-4 text-[rgb(255,200,0)] text-sm md:text-base">
              Shop
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/collections/new-collection"
                  className="text-sm md:text-base text-white/80 hover:text-white transition-colors font-medium"
                >
                  Water
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/shop-merch"
                  className="text-sm md:text-base text-white/80 hover:text-white transition-colors font-medium"
                >
                  Merch
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold uppercase mb-3 md:mb-4 text-[rgb(255,200,0)] text-sm md:text-base">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pages/about-us"
                  className="text-sm md:text-base text-white/80 hover:text-white transition-colors font-medium"
                >
                  Story of Ape
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/news"
                  className="text-sm md:text-base text-white/80 hover:text-white transition-colors font-medium"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold uppercase mb-3 md:mb-4 text-[rgb(255,200,0)] text-sm md:text-base">
              Help
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pages/faq"
                  className="text-sm md:text-base text-white/80 hover:text-white transition-colors font-medium"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/contact"
                  className="text-sm md:text-base text-white/80 hover:text-white transition-colors font-medium"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/b2b-wholesale"
                  className="text-sm md:text-base text-white/80 hover:text-white transition-colors font-medium"
                >
                  Wholesale
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/shipping-policy"
                  className="text-sm md:text-base text-white/80 hover:text-white transition-colors font-medium"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/refund-policy"
                  className="text-sm md:text-base text-white/80 hover:text-white transition-colors font-medium"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/privacy-policy"
                  className="text-sm md:text-base text-white/80 hover:text-white transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/terms-of-service"
                  className="text-sm md:text-base text-white/80 hover:text-white transition-colors font-medium"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm md:text-base text-white/60 font-medium">
          <p>&copy; {new Date().getFullYear()} Ape Water. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
