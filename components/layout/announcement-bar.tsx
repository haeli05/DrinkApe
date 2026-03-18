"use client";

const StarIcon = () => (
  <svg className="h-4 w-4 animate-spin-fast" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100.5 3L114.058 58.7724L157.809 21.6208L135.996 74.7109L193.228 70.3708L144.375 100.5L193.228 130.629L135.996 126.289L157.809 179.379L114.058 142.228L100.5 198L86.9419 142.228L43.1909 179.379L65.0044 126.289L7.77197 130.629L56.625 100.5L7.77197 70.3708L65.0044 74.7109L43.1909 21.6208L86.9419 58.7724L100.5 3Z" fill="currentColor"/>
  </svg>
);

const messages = [
  "WELCOME TO THE RE-EVOLUTION",
];

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden text-[rgb(12,34,26)] h-[35px] flex items-center" style={{ background: 'linear-gradient(228deg, rgba(19, 109, 195, 1) 14%, rgba(255, 203, 5, 1) 83%)' }}>
      <div className="animate-scroll-text whitespace-nowrap flex items-center">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0 grow-0">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex items-center shrink-0 grow-0">
                <span className="text-sm font-medium tracking-wide">{msg}</span>
                <span className="flex-shrink-0 px-2 text-current">
                  <StarIcon />
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
