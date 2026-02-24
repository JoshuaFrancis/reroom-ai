"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How realistic are the results?",
    a: "ReRoom uses state-of-the-art AI trained on millions of interior design images. Results are photorealistic and respect your room's actual dimensions, lighting, and structure — not a rough concept sketch.",
  },
  {
    q: "What types of rooms does it work with?",
    a: "Any indoor space: living rooms, bedrooms, kitchens, bathrooms, home offices, dining rooms, and more. If you can photograph it, we can redesign it.",
  },
  {
    q: "Do I need any design experience?",
    a: "None at all. Just describe what you want in plain language — \"bright Scandinavian with warm wood\" — and the AI handles everything else.",
  },
  {
    q: "How long does a redesign take?",
    a: "Under 30 seconds from upload to result. You can generate multiple variations and compare them side by side instantly.",
  },
  {
    q: "Will it change my room's layout or structure?",
    a: "No. The AI keeps your room's walls, windows, doors, and dimensions exactly as they are. It only changes the furnishings, colors, textures, and décor.",
  },
  {
    q: "Can I use the results for commercial projects?",
    a: "Yes. Pro and Studio plan subscribers get full commercial usage rights for client presentations, listings, and publications.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — you get 3 free redesigns when you sign up, no credit card required. Upgrade anytime to unlock unlimited generations.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            Everything you need to know before your first redesign.
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-5 flex items-center justify-between gap-4 group"
              >
                <span className="text-base font-semibold text-charcoal group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center transition-all ${
                    open === i
                      ? "border-primary bg-primary text-white rotate-45"
                      : "text-gray-400"
                  }`}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M5 2V8M2 5H8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              {open === i && (
                <p className="pb-5 text-muted leading-relaxed text-sm pr-10">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
