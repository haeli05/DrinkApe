import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[rgb(12,34,26)] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/Ape-Water---Box-and-Can-1a-OPT.jpg"
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative max-w-[1820px] mx-auto px-5 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold uppercase mb-4 md:mb-6">
              Awaken Your Primal Power
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto">
              A sip of Ape Water changed everything. <strong>Now, it's your turn.</strong>
            </p>
          </div>

          {/* Rotating Sticker */}
          <div className="absolute top-[85%] left-[85%] hidden md:block">
            <div className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] bg-[rgb(255,200,0)] rounded-full flex items-center justify-center animate-spin-slow shadow-lg">
              <span className="text-[rgb(12,34,26)] font-bold text-sm lg:text-3xl text-center leading-tight uppercase">
                100%<br />Natural
              </span>
            </div>
          </div>

          {/* Wave Divider */}
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

        {/* The Awakening Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center text-[rgb(12,34,26)] mb-8 md:mb-12">
              The Awakening of Bingo the Ape
            </h2>

            <div className="prose prose-lg max-w-none space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
                Bingo was once just another human, living in a world driven by greed and waste. People drank "purified" tap water from plastic without a second thought, disconnected from nature. In search of something real, Bingo journeyed far and wide, but everywhere he went, the behavior of humanity left him feeling empty and disillusioned.
              </p>

              <p className="text-base md:text-lg text-[rgb(12,34,26)] font-medium leading-relaxed">
                His path eventually led him deep into nature, where he discovered the pure springs of Mount Shasta. As he drank from the untouched waters, something profound happened—his mind awakened to the truth. He was part of something far greater than the hollow world of human consumption he left behind. In that moment of clarity, Bingo was transformed into his true, primal self—an Ape.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-20 bg-[rgb(240,249,244)]">
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center text-[rgb(12,34,26)] mb-8 md:mb-12">
              Spreading the Power of Clean Hydration
            </h2>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-[rgb(12,34,26)] font-medium leading-relaxed text-center mb-8">
                Bingo has made it his mission to bring pure, natural hydration to the world. He seeks out the best springs, reconnecting humanity to its roots, and fighting back against the corporate-driven, plastic-filled water industry. Ape Water isn't just about questioning thirst; it's about reimagining water as a vessel for change.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="text-center p-6 md:p-8 bg-white rounded-[1rem] shadow-[10px_10px_0px_rgba(12,34,26,0.1)]">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">🌊</div>
                <h3 className="text-xl md:text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-3 md:mb-4">
                  Pure Spring Water
                </h3>
                <p className="text-sm md:text-base text-[rgb(12,34,26)] font-medium">
                  Sourced from pristine natural springs, filtered by nature itself through layers of ancient rock.
                </p>
              </div>

              <div className="text-center p-6 md:p-8 bg-white rounded-[1rem] shadow-[10px_10px_0px_rgba(12,34,26,0.1)]">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">♻️</div>
                <h3 className="text-xl md:text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-3 md:mb-4">
                  Zero Plastic
                </h3>
                <p className="text-sm md:text-base text-[rgb(12,34,26)] font-medium">
                  Infinitely recyclable aluminum cans. No single-use plastic. No compromise with the planet.
                </p>
              </div>

              <div className="text-center p-6 md:p-8 bg-white rounded-[1rem] shadow-[10px_10px_0px_rgba(12,34,26,0.1)]">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">🦍</div>
                <h3 className="text-xl md:text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-3 md:mb-4">
                  The Movement
                </h3>
                <p className="text-sm md:text-base text-[rgb(12,34,26)] font-medium">
                  Reconnecting humanity to its roots, fighting back against the corporate-driven, plastic-filled water industry.
                </p>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-[rgb(12,34,26)] font-bold mb-6 md:mb-8">
                <strong>Join the Ape Movement—to awaken, hydrate, and rebel against a system that has enslaved our thirst for something real. No more corporate trickery. We choose a better future together that supports the NOW generation and the planet</strong>
              </p>
              <a
                href="/collections/new-collection"
                className="inline-block bg-[rgb(255,200,0)] text-[rgb(12,34,26)] py-4 md:py-5 px-8 md:px-12 rounded-[9999px] font-bold text-base md:text-lg uppercase hover:bg-[rgb(255,200,0)]/90 transition-all shadow-[5px_5px_0px_rgba(12,34,26,0.3)]"
              >
                JOIN THE TRIBE
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
