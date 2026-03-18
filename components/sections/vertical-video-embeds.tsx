"use client";

import { useEffect } from "react";

const instagramEmbeds = [
  "https://www.instagram.com/reel/DARK6uwItJB",
  "https://www.instagram.com/p/placeholder1",
  "https://www.instagram.com/p/placeholder2",
];

export function VerticalVideoEmbeds() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1820px] mx-auto">
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-5">
          {instagramEmbeds.map((url, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[325px] snap-center"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "3px",
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: 0,
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
