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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Card 1 — Any Room, Any Style (2 cols) */}
          <div className="col-span-2 bg-[#f5f5f7] rounded-3xl p-8 overflow-hidden relative min-h-[260px] flex flex-col justify-between">
            {/* Room grid graphic */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                { label: "Living Room", bg: "bg-amber-100", accent: "bg-amber-300" },
                { label: "Kitchen",     bg: "bg-sky-100",   accent: "bg-sky-300" },
                { label: "Bedroom",     bg: "bg-purple-100",accent: "bg-purple-300" },
                { label: "Bathroom",    bg: "bg-teal-100",  accent: "bg-teal-300" },
                { label: "Office",      bg: "bg-rose-100",  accent: "bg-rose-300" },
                { label: "Basement",    bg: "bg-orange-100",accent: "bg-orange-300" },
              ].map((r) => (
                <div key={r.label} className={`${r.bg} rounded-xl p-3 flex flex-col gap-1.5`}>
                  <div className={`h-1.5 ${r.accent} rounded-full w-3/4`} />
                  <div className={`h-1.5 ${r.accent} rounded-full w-1/2 opacity-60`} />
                  <p className="text-[10px] font-semibold text-gray-500 mt-1">{r.label}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-1">Any Room, Any Style</h3>
              <p className="text-muted text-sm leading-relaxed max-w-md">
                Works with living rooms, kitchens, bathrooms, bedrooms, offices — any indoor space you can photograph.
              </p>
            </div>
          </div>

          {/* Card 2 — HD Quality (1 col) */}
          <div className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col justify-between min-h-[260px] overflow-hidden">
            {/* Pixel vs crisp comparison */}
            <div className="flex gap-2 items-end mb-2">
              <div className="flex-1">
                <p className="text-[10px] font-semibold text-gray-400 mb-1.5">Standard</p>
                <div className="rounded-lg overflow-hidden h-24 grid grid-cols-4 grid-rows-4 gap-px bg-gray-200">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="bg-gray-300" style={{ opacity: 0.4 + Math.random() * 0.6 }} />
                  ))}
                </div>
              </div>
              <div className="text-gray-300 font-bold text-lg mb-10">→</div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold text-primary mb-1.5">HD Output</p>
                <div className="rounded-lg overflow-hidden h-24 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-teal-50 to-sky-100" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-primary/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary/40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-1">HD Quality Output</h3>
              <p className="text-muted text-sm leading-relaxed">
                High-resolution results ready for presentations, social media, or print.
              </p>
            </div>
          </div>

          {/* Card 3 — Instant Results (1 col, dark) */}
          <div className="bg-charcoal rounded-3xl p-8 flex flex-col justify-between min-h-[260px]">
            {/* Circular timer */}
            <div className="flex justify-center mb-2">
              <div className="relative w-28 h-28">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#ffffff10" strokeWidth="8" />
                  <circle
                    cx="50" cy="50" r="42" fill="none"
                    stroke="#0D9488" strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="264"
                    strokeDashoffset="20"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-white leading-none">30s</span>
                  <span className="text-[10px] text-gray-400 font-medium">avg</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Instant Results</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Redesigns generated in under 30 seconds. No waiting, no back-and-forth.
              </p>
            </div>
          </div>

          {/* Card 4 — Keep Your Layout (2 cols) */}
          <div className="col-span-2 bg-[#f5f5f7] rounded-3xl p-8 flex flex-col justify-between min-h-[260px]">
            {/* Floor plan SVG */}
            <div className="flex gap-4 mb-4">
              {/* Before floor plan */}
              <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm">
                <p className="text-[10px] font-semibold text-gray-400 mb-3">Before</p>
                <svg viewBox="0 0 120 80" className="w-full opacity-40">
                  <rect x="5" y="5" width="110" height="70" rx="2" fill="none" stroke="#94a3b8" strokeWidth="2.5"/>
                  <line x1="55" y1="5" x2="55" y2="75" stroke="#94a3b8" strokeWidth="1.5"/>
                  <line x1="55" y1="42" x2="115" y2="42" stroke="#94a3b8" strokeWidth="1.5"/>
                  <rect x="15" y="18" width="28" height="20" rx="2" fill="#e2e8f0"/>
                  <rect x="62" y="12" width="20" height="15" rx="2" fill="#e2e8f0"/>
                  <rect x="65" y="50" width="35" height="18" rx="2" fill="#e2e8f0"/>
                </svg>
              </div>
              {/* Arrow */}
              <div className="flex items-center text-primary font-bold text-xl">→</div>
              {/* After floor plan */}
              <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-primary/20">
                <p className="text-[10px] font-semibold text-primary mb-3">After</p>
                <svg viewBox="0 0 120 80" className="w-full">
                  <rect x="5" y="5" width="110" height="70" rx="2" fill="none" stroke="#0D9488" strokeWidth="2.5"/>
                  <line x1="55" y1="5" x2="55" y2="75" stroke="#0D9488" strokeWidth="1.5"/>
                  <line x1="55" y1="42" x2="115" y2="42" stroke="#0D9488" strokeWidth="1.5"/>
                  <rect x="15" y="18" width="28" height="20" rx="2" fill="#ccfbf1"/>
                  <rect x="62" y="12" width="20" height="15" rx="2" fill="#ccfbf1"/>
                  <rect x="65" y="50" width="35" height="18" rx="2" fill="#ccfbf1"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-1">Keep Your Layout</h3>
              <p className="text-muted text-sm leading-relaxed">
                AI respects your room&apos;s structure and dimensions. Same bones, completely new look.
              </p>
            </div>
          </div>

          {/* Card 5 — Multiple Variations (full width, dark) */}
          <div className="col-span-2 lg:col-span-3 bg-charcoal rounded-3xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 min-h-[200px]">
            <div className="md:max-w-xs">
              <h3 className="text-xl font-bold text-white mb-1">Multiple Variations</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Generate several options from one photo. Compare side by side and pick your favorite.
              </p>
            </div>
            {/* Style variation cards */}
            <div className="flex gap-3 flex-shrink-0">
              {[
                { label: "Minimalist", top: "bg-gray-100", mid: "bg-gray-200", bot: "bg-gray-300" },
                { label: "Japandi",    top: "bg-amber-100", mid: "bg-amber-200", bot: "bg-stone-300" },
                { label: "Coastal",   top: "bg-sky-100",   mid: "bg-sky-200",   bot: "bg-teal-200" },
              ].map((v, i) => (
                <div
                  key={v.label}
                  className={`rounded-2xl overflow-hidden border ${i === 1 ? "border-primary scale-105 shadow-lg shadow-primary/20" : "border-white/10"}`}
                  style={{ width: 90 }}
                >
                  <div className={`h-10 ${v.top}`} />
                  <div className={`h-6 ${v.mid}`} />
                  <div className={`h-4 ${v.bot}`} />
                  <div className="bg-white/5 px-2 py-1.5">
                    <p className="text-[10px] font-semibold text-gray-300">{v.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
