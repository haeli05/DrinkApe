"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    title: "Unleash Your Primal Thirst",
    subtitle: "",
    cta: "Shop The Water",
    ctaLink: "/products/shopwater",
    bgDesktop: "//drinkape.com/cdn/shop/files/Ape-Water-pure-hydration-ape-colorado-dark_c088fd6e-6a2c-4a7f-8b52-ce213c67ea2c.jpg?v=1729608817&width=2000",
    bgMobile: "//drinkape.com/cdn/shop/files/Ape-Water-pure-hydration-ape-colorado-mobile.jpg?v=1727820111&width=1200",
  },
  {
    title: "Join the Tribe",
    subtitle: "",
    cta: "SHOP THE DRIP",
    ctaLink: "/collections/shop-merch",
    bgDesktop: "//drinkape.com/cdn/shop/files/Ape-Water-pure-hydration-ape-colorado-dark_c088fd6e-6a2c-4a7f-8b52-ce213c67ea2c.jpg?v=1729608817&width=2000",
    bgMobile: "//drinkape.com/cdn/shop/files/Ape-Water-pure-hydration-ape-colorado-mobile.jpg?v=1727820111&width=1200",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[rgb(12,34,26)] -mt-[95px]" style={{ minHeight: '100vh' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={slides[currentSlide].bgDesktop} />
          <img
            src={slides[currentSlide].bgMobile}
            alt=""
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content Container - Center Aligned */}
      <div className="relative h-full min-h-[100vh] flex items-center justify-center pt-[95px]">
        <div className="w-full max-w-[1820px] mx-auto px-5 py-24 text-center">
          <div className="max-w-[800px] mx-auto">
            {/* Main Heading - Center Aligned - Responsive */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-none font-bold uppercase mb-8 text-center" style={{ letterSpacing: 0 }}>
              {slides[currentSlide].title}
            </h1>

            {/* CTA Button - Centered */}
            <a
              href={slides[currentSlide].ctaLink}
              className="inline-block bg-[rgb(255,200,0)] text-[rgb(12,34,26)] px-8 md:px-10 py-3 md:py-4 rounded-[9999px] font-bold text-sm md:text-base uppercase hover:bg-[rgb(255,200,0)]/90 transition-all shadow-[5px_5px_0px_rgba(12,34,26,0.3)]"
            >
              {slides[currentSlide].cta}
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 flex gap-2 md:gap-3 z-10">
        <button
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-all text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-all text-white"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
        </button>
      </div>

      {/* Rotating Sticker Badge - Exact Position */}
      <div
        className="absolute hidden md:block"
        style={{
          top: '79%',
          left: '80%',
          transform: 'none'
        }}
      >
        <div className="relative w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]">
          <div className="absolute inset-0 bg-[rgb(255,200,0)] rounded-full flex items-center justify-center shadow-lg" style={{ animation: 'rotate 3s linear infinite' }}>
            <span className="text-[rgb(12,34,26)] font-bold text-sm lg:text-2xl text-center leading-tight uppercase px-4">
              100%<br />Natural<br />Spring<br />Water
            </span>
          </div>
        </div>
      </div>

      {/* Shape Divider - Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
