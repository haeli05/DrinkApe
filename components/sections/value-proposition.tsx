import { Droplet, MapPin, Sparkles, Recycle, Waves, Shield } from "lucide-react";

const features = [
  {
    icon: Droplet,
    title: "100% Natural Spring Water",
  },
  {
    icon: MapPin,
    title: "Locally Sourced in America",
  },
  {
    icon: Sparkles,
    title: "Natural Electrolytes & Minerals",
  },
  {
    icon: Recycle,
    title: "Infinitely Recyclable Cans",
  },
  {
    icon: Waves,
    title: "Tap Water Free Forever",
  },
  {
    icon: Shield,
    title: "Fluoride & Sulfate Free Forever",
  },
];

export function ValueProposition() {
  return (
    <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-[1820px] mx-auto px-5">
        <h2 className="font-bold text-center uppercase leading-none text-[rgb(12,34,26)]" style={{ fontSize: '48px', marginBottom: '64px' }}>
          Don't be thirsty. Ape DRINK water
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <feature.icon className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] text-[rgb(12,34,26)]" strokeWidth={1.1} />
              </div>
              <h3 className="font-semibold uppercase text-[rgb(12,34,26)]" style={{ fontSize: '18px', fontWeight: 600, lineHeight: 1.4 }}>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
