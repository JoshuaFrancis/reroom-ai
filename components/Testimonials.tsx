const testimonials = [
  {
    quote:
      "We were about to spend $40K on a kitchen remodel. RoomLab let us try five different designs before committing. Saved us from a huge mistake on our first idea.",
    name: "Sarah M.",
    role: "Homeowner",
    initials: "SM",
    color: "bg-primary/10 text-primary",
  },
  {
    quote:
      "I used to spend hours mocking up concepts in Photoshop. Now I generate three options in five minutes and my clients are blown away by the presentations.",
    name: "David K.",
    role: "Interior Designer",
    initials: "DK",
    color: "bg-accent/10 text-accent-dark",
  },
  {
    quote:
      "Virtual staging used to cost us $300 per room. RoomLab does it for a fraction of the price and the results are just as good. Game changer for our listings.",
    name: "Rachel T.",
    role: "Real Estate Agent",
    initials: "RT",
    color: "bg-primary/10 text-primary",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal">
            Loved by Thousands
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            See what homeowners, designers, and agents are saying.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface rounded-2xl p-8 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-text leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-charcoal">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
