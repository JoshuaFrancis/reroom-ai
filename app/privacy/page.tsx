import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ReRoom",
  description: "How ReRoom collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "February 20, 2026";

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            <span className="text-primary">Re</span>
            <span className="text-charcoal">Room</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-charcoal mb-3">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose-custom">
          <Section title="1. Introduction">
            <p>
              ReRoom (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              operates the ReRoom platform, an AI-powered room redesign service
              accessible at reroom.ai (the &ldquo;Service&rdquo;). This Privacy
              Policy explains how we collect, use, disclose, and protect your
              personal information when you use our Service.
            </p>
            <p>
              By using ReRoom, you agree to the collection and use of
              information in accordance with this policy. If you disagree with
              any part, please discontinue use of the Service.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <Subsection title="2.1 Information You Provide">
              <ul>
                <li>
                  <strong>Account information:</strong> Your name and email
                  address when you create an account.
                </li>
                <li>
                  <strong>Payment information:</strong> Billing details
                  processed securely by Stripe, Inc. We do not store your full
                  credit card number on our servers.
                </li>
                <li>
                  <strong>Images you upload:</strong> Photos of rooms you
                  submit for AI redesign. These are used solely to generate
                  your requested redesign output.
                </li>
                <li>
                  <strong>Prompts and instructions:</strong> Text descriptions
                  you provide to guide the AI redesign.
                </li>
              </ul>
            </Subsection>
            <Subsection title="2.2 Information Collected Automatically">
              <ul>
                <li>
                  <strong>Usage data:</strong> Pages visited, features used,
                  redesigns generated, and time spent on the Service.
                </li>
                <li>
                  <strong>Device and log data:</strong> IP address, browser
                  type, operating system, and referring URLs.
                </li>
                <li>
                  <strong>Cookies:</strong> We use cookies and similar tracking
                  technologies to maintain your session and improve the
                  Service. You may disable cookies in your browser, though some
                  features may not function correctly.
                </li>
              </ul>
            </Subsection>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and improve the ReRoom Service</li>
              <li>Process payments and manage your subscription</li>
              <li>
                Generate AI-powered room redesigns from your uploaded images
              </li>
              <li>
                Send you transactional emails (receipts, account alerts) and,
                with your consent, product updates
              </li>
              <li>
                Respond to your support requests and communicate with you
              </li>
              <li>
                Monitor usage patterns to detect and prevent fraud or abuse
              </li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="4. AI Processing of Your Images">
            <p>
              When you upload an image, it is transmitted to our AI model
              provider for processing. Images are used solely to generate the
              redesign output you requested and are not used to train AI models
              without your explicit consent.
            </p>
            <p>
              We retain uploaded images for a limited period to allow you to
              access your redesign history. You may delete your images at any
              time from your account dashboard. Upon deletion, images are
              removed from our systems within 30 days.
            </p>
            <p>
              <strong>Important:</strong> Please do not upload images
              containing sensitive personal information (faces of individuals,
              documents, financial information, etc.).
            </p>
          </Section>

          <Section title="5. Sharing Your Information">
            <p>
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul>
              <li>
                <strong>Stripe, Inc.</strong> — payment processing. Stripe&apos;s
                privacy policy applies to payment data:{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  stripe.com/privacy
                </a>
              </li>
              <li>
                <strong>AI model providers</strong> — to process your uploaded
                images and generate redesign outputs
              </li>
              <li>
                <strong>Cloud infrastructure providers</strong> — for hosting,
                storage, and content delivery
              </li>
              <li>
                <strong>Analytics providers</strong> — to understand how the
                Service is used (data is aggregated and anonymised where
                possible)
              </li>
              <li>
                <strong>Law enforcement or regulators</strong> — if required by
                applicable law or to protect our legal rights
              </li>
            </ul>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain your personal data for as long as your account is
              active or as needed to provide the Service. If you close your
              account, we will delete or anonymise your personal data within 90
              days, except where retention is required by law (e.g., financial
              records).
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              We implement industry-standard security measures including
              encryption in transit (TLS), encrypted storage, and access
              controls. However, no method of transmission over the internet is
              100% secure. We cannot guarantee absolute security of your data.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of the data we hold
                about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                data
              </li>
              <li>
                <strong>Portability:</strong> Request your data in a
                machine-readable format
              </li>
              <li>
                <strong>Objection:</strong> Object to processing of your data
                for certain purposes
              </li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@reroom.ai"
                className="text-primary hover:underline"
              >
                privacy@reroom.ai
              </a>
              . We will respond within 30 days.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              The Service is not directed to individuals under the age of 16.
              We do not knowingly collect personal information from children. If
              you believe we have inadvertently collected data from a child,
              please contact us immediately.
            </p>
          </Section>

          <Section title="10. International Data Transfers">
            <p>
              Your data may be transferred to and processed in countries other
              than your own. We ensure appropriate safeguards are in place for
              such transfers in accordance with applicable data protection laws.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes by email or by posting a notice
              on the Service. Your continued use of the Service after changes
              become effective constitutes acceptance of the revised policy.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className="bg-surface rounded-xl p-5 mt-4 text-sm text-muted space-y-1">
              <p className="font-semibold text-charcoal">ReRoom</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:privacy@reroom.ai"
                  className="text-primary hover:underline"
                >
                  privacy@reroom.ai
                </a>
              </p>
            </div>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex gap-6 text-sm text-muted">
          <Link href="/" className="hover:text-charcoal transition-colors">
            ← Back to ReRoom
          </Link>
          <Link href="/terms" className="hover:text-charcoal transition-colors">
            Terms of Service →
          </Link>
        </div>
      </div>

      <style>{`
        .prose-custom p {
          color: #475569;
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .prose-custom ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          color: #475569;
          line-height: 1.75;
        }
        .prose-custom ul li {
          margin-bottom: 0.4rem;
        }
      `}</style>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-charcoal mb-4">{title}</h2>
      {children}
    </div>
  );
}

function Subsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <h3 className="text-base font-semibold text-charcoal mb-2">{title}</h3>
      {children}
    </div>
  );
}
