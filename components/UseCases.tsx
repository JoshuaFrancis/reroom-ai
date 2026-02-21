export default function UseCases() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal">
            Built for Everyone Who Cares About Space
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Whether you&apos;re renovating your first home or staging your
            hundredth listing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Homeowners */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mb-6">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <path
                  d="M32 8 L56 28 L56 56 L8 56 L8 28 Z"
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <rect
                  x="24"
                  y="38"
                  width="16"
                  height="18"
                  rx="2"
                  fill="#0D9488"
                  opacity="0.15"
                  stroke="#0D9488"
                  strokeWidth="2"
                />
                <circle
                  cx="36"
                  cy="48"
                  r="1.5"
                  fill="#0D9488"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">
              Homeowners
            </h3>
            <p className="text-muted leading-relaxed">
              Visualize your dream renovation before spending a dime. Try
              different styles, compare options, and commit with confidence.
            </p>
          </div>

          {/* Interior Designers */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mb-6">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                {/* Pencil/ruler design tool */}
                <rect
                  x="10"
                  y="10"
                  width="44"
                  height="44"
                  rx="4"
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth="2.5"
                />
                <line
                  x1="10"
                  y1="22"
                  x2="54"
                  y2="22"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
                <line
                  x1="10"
                  y1="34"
                  x2="54"
                  y2="34"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
                <line
                  x1="22"
                  y1="10"
                  x2="22"
                  y2="54"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
                <line
                  x1="34"
                  y1="10"
                  x2="34"
                  y2="54"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
                {/* Color swatches */}
                <rect
                  x="14"
                  y="26"
                  width="6"
                  height="6"
                  rx="1"
                  fill="#0D9488"
                  opacity="0.4"
                />
                <rect
                  x="26"
                  y="14"
                  width="6"
                  height="6"
                  rx="1"
                  fill="#F59E0B"
                  opacity="0.4"
                />
                <rect
                  x="38"
                  y="38"
                  width="6"
                  height="6"
                  rx="1"
                  fill="#0D9488"
                  opacity="0.6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">
              Interior Designers
            </h3>
            <p className="text-muted leading-relaxed">
              Present multiple concepts to clients in minutes, not days. Iterate
              on ideas faster and close more projects.
            </p>
          </div>

          {/* Real Estate Agents */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mb-6">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                {/* Building/listing */}
                <rect
                  x="12"
                  y="20"
                  width="40"
                  height="36"
                  rx="3"
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth="2.5"
                />
                {/* Windows */}
                <rect
                  x="18"
                  y="26"
                  width="10"
                  height="8"
                  rx="1"
                  fill="#0D9488"
                  opacity="0.15"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                />
                <rect
                  x="36"
                  y="26"
                  width="10"
                  height="8"
                  rx="1"
                  fill="#0D9488"
                  opacity="0.15"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                />
                <rect
                  x="18"
                  y="40"
                  width="10"
                  height="8"
                  rx="1"
                  fill="#0D9488"
                  opacity="0.15"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                />
                {/* Door */}
                <rect
                  x="36"
                  y="42"
                  width="10"
                  height="14"
                  rx="1"
                  fill="#0D9488"
                  opacity="0.25"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                />
                {/* Price tag */}
                <circle cx="48" cy="16" r="8" fill="#F59E0B" opacity="0.2" />
                <text
                  x="48"
                  y="19"
                  textAnchor="middle"
                  fontSize="8"
                  fill="#D97706"
                  fontWeight="700"
                >
                  $
                </text>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">
              Real Estate Agents
            </h3>
            <p className="text-muted leading-relaxed">
              Stage any listing virtually and sell faster. Show buyers the
              potential of empty or outdated spaces without hiring a stager.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
