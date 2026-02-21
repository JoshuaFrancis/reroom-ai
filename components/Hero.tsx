import BeforeAfterSlider from "./BeforeAfterSlider";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-mesh pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              AI-Powered Room Design
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-charcoal">
              Redesign Any Room in{" "}
              <span className="text-primary">Seconds</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg">
              Upload a photo of any space, describe your vision, and watch AI
              transform it instantly. No design skills needed.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="bg-primary text-white font-semibold text-base px-8 py-3.5 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                Start Redesigning
              </a>
              <a
                href="#how-it-works"
                className="text-muted font-medium text-base hover:text-charcoal transition-colors group"
              >
                Watch it work
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
                  &darr;
                </span>
              </a>
            </div>
          </div>

          {/* Right: Before/After Slider */}
          <div className="animate-fade-in-up">
            <BeforeAfterSlider
              beforeClass="room-before-1"
              afterClass="room-after-1"
              beforeLabel="Dated Living Room"
              afterLabel="Modern Minimalist"
              height="h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
