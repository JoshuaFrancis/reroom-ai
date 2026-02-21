const features = [
  {
    title: "Any Room, Any Style",
    desc: "Works with living rooms, kitchens, bathrooms, bedrooms, offices — any indoor space you can photograph.",
  },
  {
    title: "HD Quality Output",
    desc: "High-resolution results that are ready for client presentations, social media, or printing.",
  },
  {
    title: "Instant Results",
    desc: "Redesigns generated in under 30 seconds. No waiting, no scheduling, no back-and-forth.",
  },
  {
    title: "Keep Your Layout",
    desc: "AI respects your room's structure and dimensions. Same bones, completely new look.",
  },
  {
    title: "Multiple Variations",
    desc: "Generate several options from one photo. Compare side by side and pick your favorite.",
  },
  {
    title: "Style Library",
    desc: "20+ curated design styles from Minimalist to Art Deco. Or describe your own custom vision.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Powerful features that make room redesign effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:bg-primary/[0.02] transition-all"
            >
              <div className="w-10 h-1 bg-primary rounded-full mb-5" />
              <h3 className="text-lg font-bold text-charcoal mb-2">
                {f.title}
              </h3>
              <p className="text-muted leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
