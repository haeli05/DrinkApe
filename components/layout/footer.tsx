import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[rgb(12,34,26)] text-white">
      <div className="max-w-[1820px] mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold uppercase mb-4">Ape Water</h3>
            <p className="text-white/80 font-medium">
              100% Natural Spring Water
              <br />
              Locally Sourced in America
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase mb-4 text-[rgb(255,200,0)]">
              Shop
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/collections/new-collection"
                  className="text-white/80 hover:text-white transition-colors font-medium"
                >
                  Water
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/new-collection"
                  className="text-white/80 hover:text-white transition-colors font-medium"
                >
                  Bundles
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/shop-merch"
                  className="text-white/80 hover:text-white transition-colors font-medium"
                >
                  Merch
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/b2b-wholesale"
                  className="text-white/80 hover:text-white transition-colors font-medium"
                >
                  Wholesale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold uppercase mb-4 text-[rgb(255,200,0)]">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pages/about-us"
                  className="text-white/80 hover:text-white transition-colors font-medium"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/b2b-wholesale"
                  className="text-white/80 hover:text-white transition-colors font-medium"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/about-us"
                  className="text-white/80 hover:text-white transition-colors font-medium"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold uppercase mb-4 text-[rgb(255,200,0)]">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 font-medium">
          <p>&copy; {new Date().getFullYear()} Ape Water. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
