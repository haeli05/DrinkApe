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
    <div className="bg-white text-[rgb(12,34,26)] overflow-hidden relative" style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
      <div className="animate-scroll-horizontal whitespace-nowrap inline-block">
        <span className="uppercase tracking-wider px-4" style={{ fontSize: '16px', fontWeight: 500 }}>
          {repeatedTaglines}
        </span>
        <span className="uppercase tracking-wider px-4" style={{ fontSize: '16px', fontWeight: 500 }}>
          {repeatedTaglines}
        </span>
      </div>
    </div>
  );
}
