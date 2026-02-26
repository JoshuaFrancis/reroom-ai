const plans = [
  {
    name: "Starter",
    price: 19,
    desc: "Perfect for trying things out",
    features: [
      "50 credits / month",
      "All image sizes",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Studio",
    price: 49,
    desc: "For homeowners and professionals",
    features: [
      "200 credits / month",
      "All image sizes",
      "High quality costs 2 credits",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Agency",
    price: 99,
    desc: "For teams and agencies",
    features: [
      "500 credits / month",
      "All image sizes",
      "High quality costs 2 credits",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Pick the plan that works for you. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-charcoal text-white shadow-2xl shadow-charcoal/20 scale-105 z-10"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-charcoal text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-lg font-bold ${
                    plan.highlighted ? "text-white" : "text-charcoal"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    plan.highlighted ? "text-gray-400" : "text-muted"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className={`text-5xl font-extrabold ${
                    plan.highlighted ? "text-white" : "text-charcoal"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    plan.highlighted ? "text-gray-400" : "text-muted"
                  }`}
                >
                  /month
                </span>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-primary-light" : "text-primary"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={
                        plan.highlighted ? "text-gray-300" : "text-muted"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://app.roomlab.ca"
                className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-charcoal text-white hover:bg-charcoal/90"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
