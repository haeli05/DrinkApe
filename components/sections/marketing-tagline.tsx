"use client";

const taglines = [
  "PURIFIED WATER IS JUST FILTERED B.S",
  "PLASTIC BOTTLES ARE A SCAM",
  "TAP WATER: PURE CHEMICAL CHAOS",
  "BREAKING: Bingo smashes banana-eating record!",
];

export function MarketingTagline() {
  const repeatedTaglines = [...taglines, ...taglines].join(" | ");

  return (
    <div className="bg-white text-[rgb(12,34,26)] py-4 overflow-hidden border-y border-[rgb(12,34,26)]/10 relative">
      <div className="animate-scroll-horizontal whitespace-nowrap inline-block">
        <span className="text-base md:text-lg font-bold uppercase tracking-wider px-4">
          {repeatedTaglines}
        </span>
        <span className="text-base md:text-lg font-bold uppercase tracking-wider px-4">
          {repeatedTaglines}
        </span>
      </div>
    </div>
  );
}
