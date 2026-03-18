"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Main Navigation - White Background */}
      <div className="h-[60px] px-5 max-w-[1820px] mx-auto relative flex items-center">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center mr-8">
          <img
            src="/images/Copy_of_AW.MAIN.LOGO.NS.png"
            alt="Ape Water"
            className="h-[50px] w-auto max-w-[100px] md:max-w-[200px] object-contain"
          />
        </Link>

        {/* Navigation Links - Left */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          {/* Water Dropdown */}
          <div className="relative group">
            <Link
              href="/collections/new-collection"
              className="text-[rgb(12,34,26)] font-medium text-[16px] hover:opacity-70 transition-opacity"
            >
              Water
            </Link>
            {/* Water Dropdown Menu */}
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white shadow-xl rounded-[1rem] p-6 w-[300px] border border-[rgb(12,34,26)]/10">
                <div className="flex flex-col gap-2">
                  <Link href="/products/shopwater" className="flex items-center gap-3 p-2 rounded-xl hover:bg-[rgb(240,249,244)] transition-colors">
                    <img src="/images/Ape-Water---Box-and-Can-1a-OPT.jpg" alt="Natural Spring Water" className="w-16 h-16 object-cover rounded-lg" />
                    <span className="text-sm font-medium text-[rgb(12,34,26)]">Natural Spring Water</span>
                  </Link>
                  <Link href="/products/boho-salon-limited-edition-collab-drop-copy" className="flex items-center gap-3 p-2 rounded-xl hover:bg-[rgb(240,249,244)] transition-colors">
                    <img src="/images/Screenshot_2025-08-14_at_4.31.46_PM.png" alt="Boho Salon Limited Edition" className="w-16 h-16 object-cover rounded-lg" />
                    <span className="text-sm font-medium text-[rgb(12,34,26)]">Boho Salon Limited Edition</span>
                  </Link>
                  <Link href="/products/ape-bundle" className="flex items-center gap-3 p-2 rounded-xl hover:bg-[rgb(240,249,244)] transition-colors">
                    <img src="/images/Ape-Bundle-Image-Main_72ec0622-2ebf-4191-85e7-9d25ae4ea169.jpg" alt="Ape Big Package" className="w-16 h-16 object-cover rounded-lg" />
                    <span className="text-sm font-medium text-[rgb(12,34,26)]">Ape Big Package</span>
                  </Link>
                  <Link href="/products/starter-bundle" className="flex items-center gap-3 p-2 rounded-xl hover:bg-[rgb(240,249,244)] transition-colors">
                    <img src="/images/Starter-Bundle-Image-1_5a5b0c86-ff50-4d2c-8a2a-b880bf98e2fb.jpg" alt="Ape Nice Package" className="w-16 h-16 object-cover rounded-lg" />
                    <span className="text-sm font-medium text-[rgb(12,34,26)]">Ape Nice Package</span>
                  </Link>
                  <Link href="/products/total-ape-bundle" className="flex items-center gap-3 p-2 rounded-xl hover:bg-[rgb(240,249,244)] transition-colors">
                    <img src="/images/Total-Ape-Bundle-Image-Main_2419b1ca-821e-490c-9ec5-87ca58c68717.jpg" alt="Ape Huge Package" className="w-16 h-16 object-cover rounded-lg" />
                    <span className="text-sm font-medium text-[rgb(12,34,26)]">Ape Huge Package</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Merch Dropdown */}
          <div className="relative group">
            <Link
              href="/collections/shop-merch"
              className="text-[rgb(12,34,26)] font-medium text-[16px] hover:opacity-70 transition-opacity"
            >
              Merch
            </Link>
            {/* Merch Dropdown Menu */}
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white shadow-xl rounded-[1rem] p-6 w-[300px] border border-[rgb(12,34,26)]/10">
                <div className="flex flex-col gap-2">
                  <Link href="/products/ape-drop-hoodie-ivory" className="flex items-center gap-3 p-2 rounded-xl hover:bg-[rgb(240,249,244)] transition-colors">
                    <img src="/images/Ape-Water-Sweatshirt-Front-Blue.jpg" alt="Ape Drop Hoodie" className="w-16 h-16 object-cover rounded-lg" />
                    <span className="text-sm font-medium text-[rgb(12,34,26)]">Ape Drop Hoodie</span>
                  </Link>
                  <Link href="/products/ape-cooler-new" className="flex items-center gap-3 p-2 rounded-xl hover:bg-[rgb(240,249,244)] transition-colors">
                    <img src="/images/Ape-Water-NEW-Cooler-Front.jpg" alt="Ape Cooler (NEW)" className="w-16 h-16 object-cover rounded-lg" />
                    <span className="text-sm font-medium text-[rgb(12,34,26)]">Ape Cooler (NEW)</span>
                  </Link>
                  <Link href="/products/dont-be-thirsty-trucker-hat" className="flex items-center gap-3 p-2 rounded-xl hover:bg-[rgb(240,249,244)] transition-colors">
                    <img src="/images/Don_tBeThirstyHat.jpg" alt="Don't Be Thirsty Trucker" className="w-16 h-16 object-cover rounded-lg" />
                    <span className="text-sm font-medium text-[rgb(12,34,26)]">Don't Be Thirsty Trucker</span>
                  </Link>
                  <Link href="/products/reusable-water-bottle-36-oz" className="flex items-center gap-3 p-2 rounded-xl hover:bg-[rgb(240,249,244)] transition-colors">
                    <img src="/images/36oz.1.jpg" alt="Reusable Ape Bottle 36 OZ" className="w-16 h-16 object-cover rounded-lg" />
                    <span className="text-sm font-medium text-[rgb(12,34,26)]">Reusable Ape Bottle 36 OZ</span>
                  </Link>
                  <Link href="/products/product-name" className="flex items-center gap-3 p-2 rounded-xl hover:bg-[rgb(240,249,244)] transition-colors">
                    <img src="/images/Ape.water.logo.trucker.hat1.jpg" alt="Ape Trucker" className="w-16 h-16 object-cover rounded-lg" />
                    <span className="text-sm font-medium text-[rgb(12,34,26)]">Ape Trucker</span>
                  </Link>
                  <Link href="/products/touch-grass-tote" className="flex items-center gap-3 p-2 rounded-xl hover:bg-[rgb(240,249,244)] transition-colors">
                    <img src="/images/touch.grass.tote.bag1.jpg" alt="Touch Grass Tote" className="w-16 h-16 object-cover rounded-lg" />
                    <span className="text-sm font-medium text-[rgb(12,34,26)]">Touch Grass Tote</span>
                  </Link>
                </div>
                <Link href="/collections/shop-merch" className="block mt-4 pt-4 border-t border-[rgb(12,34,26)]/10 text-center text-sm font-bold text-[rgb(12,34,26)] hover:opacity-70">
                  View All
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/pages/about-us"
            className="text-[rgb(12,34,26)] font-medium text-[16px] hover:opacity-70 transition-opacity"
          >
            Story of Ape
          </Link>
          <Link
            href="/pages/b2b-wholesale"
            className="text-[rgb(12,34,26)] font-medium text-[16px] hover:opacity-70 transition-opacity"
          >
            Wholesale
          </Link>
        </nav>

        {/* Right - Account + Cart */}
        <div className="flex items-center gap-4 ml-auto">
          <Link
            href="/account/login"
            className="hidden md:inline-block text-[rgb(12,34,26)] font-medium text-[16px] hover:opacity-70 transition-opacity"
          >
            Log in
          </Link>
          <Link
            href="/cart"
            className="text-[rgb(12,34,26)] hover:opacity-70 transition-opacity"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" strokeWidth={1.5} />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[rgb(12,34,26)] hover:opacity-70 transition-opacity"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-[rgb(12,34,26)]/10 shadow-xl">
          <nav className="max-w-[1820px] mx-auto px-5 py-6">
            <div className="space-y-6">
              {/* Water Section */}
              <div>
                <Link
                  href="/collections/new-collection"
                  className="block text-[rgb(12,34,26)] font-bold text-lg uppercase mb-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Water
                </Link>
                <div className="pl-4 space-y-2 text-sm">
                  <Link
                    href="/products/shopwater"
                    className="block text-[rgb(12,34,26)] font-medium hover:opacity-70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Natural Spring Water
                  </Link>
                  <Link
                    href="/products/boho-salon-limited-edition-collab-drop-copy"
                    className="block text-[rgb(12,34,26)] font-medium hover:opacity-70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Boho Salon x Ape Water Limited Edition
                  </Link>
                  <Link
                    href="/products/ape-bundle"
                    className="block text-[rgb(12,34,26)] font-medium hover:opacity-70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ape Big Package
                  </Link>
                  <Link
                    href="/products/starter-bundle"
                    className="block text-[rgb(12,34,26)] font-medium hover:opacity-70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ape Nice Package
                  </Link>
                  <Link
                    href="/products/total-ape-bundle"
                    className="block text-[rgb(12,34,26)] font-medium hover:opacity-70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ape Huge Package
                  </Link>
                </div>
              </div>

              {/* Merch Section */}
              <div>
                <Link
                  href="/collections/shop-merch"
                  className="block text-[rgb(12,34,26)] font-bold text-lg uppercase mb-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Merch
                </Link>
                <div className="pl-4 space-y-2 text-sm">
                  <Link
                    href="/products/ape-drop-hoodie-ivory"
                    className="block text-[rgb(12,34,26)] font-medium hover:opacity-70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ape Drop Hoodie
                  </Link>
                  <Link
                    href="/products/ape-cooler-new"
                    className="block text-[rgb(12,34,26)] font-medium hover:opacity-70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ape Cooler (NEW)
                  </Link>
                  <Link
                    href="/products/dont-be-thirsty-trucker-hat"
                    className="block text-[rgb(12,34,26)] font-medium hover:opacity-70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Don't Be Thirsty Trucker
                  </Link>
                  <Link
                    href="/products/reusable-water-bottle-36-oz"
                    className="block text-[rgb(12,34,26)] font-medium hover:opacity-70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    REUSABLE APE BOTTLE 36 OZ
                  </Link>
                  <Link
                    href="/products/product-name"
                    className="block text-[rgb(12,34,26)] font-medium hover:opacity-70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ape Trucker
                  </Link>
                  <Link
                    href="/products/touch-grass-tote"
                    className="block text-[rgb(12,34,26)] font-medium hover:opacity-70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Touch Grass Tote
                  </Link>
                  <Link
                    href="/collections/shop-merch"
                    className="block text-[rgb(12,34,26)] font-bold hover:opacity-70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All
                  </Link>
                </div>
              </div>

              {/* Other Links */}
              <Link
                href="/pages/about-us"
                className="block text-[rgb(12,34,26)] font-bold text-lg uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Story of Ape
              </Link>

              <Link
                href="/pages/b2b-wholesale"
                className="block text-[rgb(12,34,26)] font-bold text-lg uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wholesale
              </Link>

              {/* Account Links */}
              <div className="pt-4 border-t border-[rgb(12,34,26)]/10 space-y-3">
                <Link
                  href="/account/login"
                  className="block text-[rgb(12,34,26)] font-medium hover:opacity-70"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/account/register"
                  className="block text-[rgb(12,34,26)] font-medium hover:opacity-70"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Create account
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
