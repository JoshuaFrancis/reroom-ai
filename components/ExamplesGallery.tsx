import BeforeAfterSlider from "./BeforeAfterSlider";

const examples = [
  {
    beforeClass: "room-before-1",
    afterClass: "room-after-1",
    beforeLabel: "Dated Living Room",
    afterLabel: "Modern Minimalist",
  },
  {
    beforeClass: "room-before-2",
    afterClass: "room-after-2",
    beforeLabel: "Plain Kitchen",
    afterLabel: "Warm Scandinavian",
  },
  {
    beforeClass: "room-before-3",
    afterClass: "room-after-3",
    beforeLabel: "Cluttered Bedroom",
    afterLabel: "Cozy Bohemian",
  },
  {
    beforeClass: "room-before-4",
    afterClass: "room-after-4",
    beforeLabel: "Old Tile Bathroom",
    afterLabel: "Spa-like Modern",
  },
  {
    beforeClass: "room-before-5",
    afterClass: "room-after-5",
    beforeLabel: "Bland Office",
    afterLabel: "Industrial Chic",
  },
  {
    beforeClass: "room-before-6",
    afterClass: "room-after-6",
    beforeLabel: "Empty Dining Room",
    afterLabel: "Mid-Century Warm",
  },
];

export default function ExamplesGallery() {
  return (
    <section id="examples" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal">
            See the Transformations
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Real rooms, real results. Drag the slider to reveal the AI-powered
            redesign.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((ex) => (
            <BeforeAfterSlider
              key={ex.beforeLabel}
              beforeClass={ex.beforeClass}
              afterClass={ex.afterClass}
              beforeLabel={ex.beforeLabel}
              afterLabel={ex.afterLabel}
              height="h-64"
            />
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-8">
          These are placeholder visuals. Replace with real AI-generated
          before/after images for your product.
        </p>
      </div>
    </section>
  );
}
