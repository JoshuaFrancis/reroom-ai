"use client";

const styles = [
  {
    name: "Modern Minimalist",
    desc: "Clean lines, neutral palette, open space",
    texture: "texture-modern",
    textColor: "text-gray-700",
  },
  {
    name: "Scandinavian",
    desc: "Light wood, cozy textiles, functional beauty",
    texture: "texture-scandinavian",
    textColor: "text-gray-700",
  },
  {
    name: "Industrial",
    desc: "Exposed brick, metal accents, raw character",
    texture: "texture-industrial",
    textColor: "text-white",
  },
  {
    name: "Bohemian",
    desc: "Rich colors, layered textures, eclectic charm",
    texture: "texture-bohemian",
    textColor: "text-white",
  },
  {
    name: "Mid-Century Modern",
    desc: "Retro warmth, organic curves, bold accents",
    texture: "texture-midcentury",
    textColor: "text-white",
  },
  {
    name: "Japandi",
    desc: "Japanese simplicity meets Scandinavian warmth",
    texture: "texture-japandi",
    textColor: "text-gray-700",
  },
  {
    name: "Coastal",
    desc: "Ocean blues, natural textures, breezy vibes",
    texture: "texture-coastal",
    textColor: "text-white",
  },
  {
    name: "Art Deco",
    desc: "Geometric patterns, rich materials, glamour",
    texture: "texture-artdeco",
    textColor: "text-white",
  },
];

export default function StyleShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal">
            20+ Design Styles
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            From minimalist to maximalist. Pick a style or describe your own —
            the AI handles the rest.
          </p>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
          {styles.map((style) => (
            <div
              key={style.name}
              className={`flex-shrink-0 w-56 h-72 rounded-2xl ${style.texture} p-6 flex flex-col justify-end snap-start transition-transform hover:scale-105`}
            >
              <h3 className={`text-lg font-bold ${style.textColor}`}>
                {style.name}
              </h3>
              <p
                className={`text-sm mt-1 ${style.textColor} opacity-80 leading-snug`}
              >
                {style.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
