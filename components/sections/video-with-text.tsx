"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function VideoWithText() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-20 bg-[rgb(240,249,244)]">
      <div className="max-w-[1820px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-start-9 lg:col-end-13">
            <div className="relative aspect-video bg-white rounded-[2rem] overflow-hidden">
              {showVideo ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/placeholder"
                  title="Ape Water Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <button
                  onClick={() => setShowVideo(true)}
                  className="relative w-full h-full cursor-pointer group"
                >
                  <img
                    src="//drinkape.com/cdn/shop/files/preview_images/3f4969d665a34b309df2d42865d6a7e5.thumbnail.0000000000.jpg?v=1727977476&width=750"
                    alt="Play video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full p-5 shadow-lg group-hover:scale-110 transition-transform">
                      <svg
                        className="w-10 h-10 text-[rgb(12,34,26)]"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 8L36 24L12 40V8Z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
