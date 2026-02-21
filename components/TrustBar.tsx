export default function TrustBar() {
  const stats = [
    { value: "10,000+", label: "Rooms Redesigned" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "50+", label: "Countries" },
    { value: "<30s", label: "Generation Time" },
  ];

  return (
    <section className="border-y border-gray-100 bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-charcoal">
                {stat.value}
              </div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
