export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Three steps. Thirty seconds. One completely transformed room.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1: Upload */}
          <div className="text-center group">
            <div className="relative mx-auto w-48 h-48 mb-8">
              {/* Camera frame illustration */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Outer frame */}
                <rect
                  x="20"
                  y="40"
                  width="160"
                  height="120"
                  rx="12"
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth="3"
                />
                {/* Viewfinder corners */}
                <path
                  d="M50 60 L50 55 L55 55"
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M150 60 L150 55 L145 55"
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M50 140 L50 145 L55 145"
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M150 140 L150 145 L145 145"
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Room shape inside */}
                <rect
                  x="60"
                  y="70"
                  width="80"
                  height="60"
                  rx="4"
                  fill="#0D9488"
                  opacity="0.1"
                />
                <line
                  x1="60"
                  y1="105"
                  x2="100"
                  y2="85"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
                <line
                  x1="100"
                  y1="85"
                  x2="140"
                  y2="105"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
                {/* Upload arrow */}
                <path
                  d="M100 180 L100 165"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M94 171 L100 165 L106 171"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
              Step 1
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2">Upload</h3>
            <p className="text-muted">
              Snap a photo of any room or upload an existing one. Works with any
              angle, any lighting.
            </p>
          </div>

          {/* Step 2: Describe */}
          <div className="text-center group">
            <div className="relative mx-auto w-48 h-48 mb-8">
              {/* Chat bubble illustration */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Main bubble */}
                <rect
                  x="25"
                  y="35"
                  width="150"
                  height="100"
                  rx="16"
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth="3"
                />
                {/* Bubble tail */}
                <path
                  d="M60 135 L50 155 L80 135"
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                {/* Text lines representing prompt */}
                <rect
                  x="45"
                  y="58"
                  width="90"
                  height="6"
                  rx="3"
                  fill="#0D9488"
                  opacity="0.25"
                />
                <rect
                  x="45"
                  y="74"
                  width="110"
                  height="6"
                  rx="3"
                  fill="#0D9488"
                  opacity="0.25"
                />
                <rect
                  x="45"
                  y="90"
                  width="70"
                  height="6"
                  rx="3"
                  fill="#0D9488"
                  opacity="0.25"
                />
                {/* Style words floating */}
                <rect
                  x="100"
                  y="165"
                  width="60"
                  height="22"
                  rx="11"
                  fill="#F59E0B"
                  opacity="0.15"
                />
                <text
                  x="130"
                  y="180"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#D97706"
                  fontWeight="600"
                >
                  modern
                </text>
                <rect
                  x="40"
                  y="165"
                  width="50"
                  height="22"
                  rx="11"
                  fill="#0D9488"
                  opacity="0.15"
                />
                <text
                  x="65"
                  y="180"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#0F766E"
                  fontWeight="600"
                >
                  minimal
                </text>
              </svg>
            </div>
            <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
              Step 2
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2">Describe</h3>
            <p className="text-muted">
              Tell the AI what you want. &ldquo;Make it modern minimalist&rdquo;
              or &ldquo;Scandinavian with warm wood tones.&rdquo;
            </p>
          </div>

          {/* Step 3: Transform */}
          <div className="text-center group">
            <div className="relative mx-auto w-48 h-48 mb-8">
              {/* Split image illustration */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Left half - before */}
                <rect
                  x="20"
                  y="35"
                  width="75"
                  height="120"
                  rx="10"
                  fill="#a8977d"
                  opacity="0.3"
                />
                <rect
                  x="20"
                  y="35"
                  width="75"
                  height="120"
                  rx="10"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                />
                {/* Right half - after */}
                <rect
                  x="105"
                  y="35"
                  width="75"
                  height="120"
                  rx="10"
                  fill="#0D9488"
                  opacity="0.15"
                />
                <rect
                  x="105"
                  y="35"
                  width="75"
                  height="120"
                  rx="10"
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth="2"
                />
                {/* Arrow between */}
                <path
                  d="M97 95 L108 95"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M104 89 L110 95 L104 101"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Sparkle stars */}
                <circle cx="155" cy="50" r="3" fill="#F59E0B" opacity="0.6" />
                <circle cx="170" cy="65" r="2" fill="#F59E0B" opacity="0.4" />
                <circle cx="145" cy="68" r="2.5" fill="#F59E0B" opacity="0.5" />
                {/* Labels */}
                <text
                  x="57"
                  y="175"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#94a3b8"
                  fontWeight="600"
                >
                  Before
                </text>
                <text
                  x="142"
                  y="175"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#0D9488"
                  fontWeight="600"
                >
                  After
                </text>
              </svg>
            </div>
            <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
              Step 3
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2">Transform</h3>
            <p className="text-muted">
              Get your redesigned room in under 30 seconds. Download, share, or
              generate more variations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
