import { Droplet, MapPin, Sparkles, Recycle, Waves, Shield } from "lucide-react";

const features = [
  {
    icon: Droplet,
    title: "100% Natural Spring Water",
    description: "Pure spring water from pristine natural sources",
  },
  {
    icon: MapPin,
    title: "Locally Sourced in America",
    description: "Supporting local communities and sustainability",
  },
  {
    icon: Sparkles,
    title: "Natural Electrolytes & Minerals",
    description: "Essential minerals for optimal hydration",
  },
  {
    icon: Recycle,
    title: "Infinitely Recyclable Cans",
    description: "Sustainable aluminum packaging, no plastic ever",
  },
  {
    icon: Waves,
    title: "Tap Water Free Forever",
    description: "Never from municipal water sources",
  },
  {
    icon: Shield,
    title: "Fluoride & Sulfate Free Forever",
    description: "Nothing but pure spring water",
  },
];

export function ValueProposition() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1820px] mx-auto px-5">
        <h2 className="text-2xl md:text-6xl font-bold text-center uppercase mb-16 tracking-tight text-[rgb(12,34,26)]">
          Don't be thirsty. Ape DRINK water
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="mb-4">
                <feature.icon className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] text-[rgb(255,200,0)]" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase">{feature.title}</h3>
              <p className="text-muted-foreground font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
