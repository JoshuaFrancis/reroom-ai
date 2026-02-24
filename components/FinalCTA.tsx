export default function FinalCTA() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Ready to reimagine your space?
        </h2>
        <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
          Join thousands of homeowners and designers transforming rooms with AI.
          Start redesigning today.
        </p>
        <div className="mt-10">
          <a
            href="#pricing"
            className="inline-block bg-primary text-white font-semibold text-lg px-10 py-4 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
