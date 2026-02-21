import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — ReRoom",
  description: "Terms and conditions governing your use of the ReRoom platform.",
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-muted text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose-custom">
          <Section title="1. Acceptance of Terms">
            <p>
              By creating an account or using the ReRoom platform
              (&ldquo;Service&rdquo;), you agree to be bound by these Terms of
              Service (&ldquo;Terms&rdquo;). If you do not agree, do not use
              the Service.
            </p>
            <p>
              These Terms apply to all visitors, users, and others who access
              or use the Service. We reserve the right to update these Terms at
              any time. Continued use of the Service after changes are posted
              constitutes your acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              ReRoom is an AI-powered room redesign platform that allows users
              to upload photographs of interior spaces and receive
              AI-generated redesign suggestions based on text prompts. The
              Service is available on a subscription basis as described in
              Section 4.
            </p>
            <p>
              ReRoom is a tool to assist with creative visualisation. Outputs
              are AI-generated and should not be relied upon as professional
              architectural, structural, or interior design advice.
            </p>
          </Section>

          <Section title="3. Account Registration">
            <ul>
              <li>
                You must be at least 16 years old to create an account.
              </li>
              <li>
                You agree to provide accurate, current, and complete information
                during registration and to keep it up to date.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                password and for all activity that occurs under your account.
              </li>
              <li>
                You must notify us immediately at{" "}
                <a
                  href="mailto:support@reroom.ai"
                  className="text-primary hover:underline"
                >
                  support@reroom.ai
                </a>{" "}
                if you suspect unauthorised access to your account.
              </li>
              <li>
                We reserve the right to terminate accounts that violate these
                Terms.
              </li>
            </ul>
          </Section>

          <Section title="4. Subscriptions and Payment">
            <Subsection title="4.1 Plans">
              <p>
                ReRoom offers the following monthly subscription plans:
              </p>
              <div className="bg-surface rounded-xl p-5 my-4 space-y-3 text-sm">
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <div>
                    <p className="font-semibold text-charcoal">Starter</p>
                    <p className="text-muted">10 redesigns/month, standard quality, 5 styles</p>
                  </div>
                  <p className="font-bold text-charcoal">$9/mo</p>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <div>
                    <p className="font-semibold text-charcoal">Pro</p>
                    <p className="text-muted">100 redesigns/month, HD quality, all styles</p>
                  </div>
                  <p className="font-bold text-charcoal">$29/mo</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-charcoal">Business</p>
                    <p className="text-muted">Unlimited redesigns, 4K quality, API access, 5 seats</p>
                  </div>
                  <p className="font-bold text-charcoal">$79/mo</p>
                </div>
              </div>
              <p>
                Plan features and pricing are subject to change. We will
                provide at least 30 days&apos; notice of any price changes to
                existing subscribers.
              </p>
            </Subsection>

            <Subsection title="4.2 Billing">
              <p>
                Subscriptions are billed monthly in advance. Payment is
                processed by Stripe, Inc. By subscribing, you authorise us to
                charge your payment method on a recurring basis until you
                cancel.
              </p>
            </Subsection>

            <Subsection title="4.3 Free Trial">
              <p>
                New subscribers receive a 7-day free trial. No credit card
                charge occurs during the trial. If you do not cancel before the
                trial ends, you will be charged for the selected plan.
              </p>
            </Subsection>

            <Subsection title="4.4 Cancellation">
              <p>
                You may cancel your subscription at any time from your account
                dashboard. Cancellation takes effect at the end of the current
                billing period. You will retain access to the Service until
                then. We do not provide prorated refunds for partial months.
              </p>
            </Subsection>

            <Subsection title="4.5 Refunds">
              <p>
                Except where required by law, all payments are non-refundable.
                If you believe you were charged in error, contact us within 14
                days at{" "}
                <a
                  href="mailto:billing@reroom.ai"
                  className="text-primary hover:underline"
                >
                  billing@reroom.ai
                </a>
                .
              </p>
            </Subsection>
          </Section>

          <Section title="5. Acceptable Use">
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>
                Upload images you do not have the right to use, including
                images that infringe third-party copyrights or privacy rights
              </li>
              <li>
                Upload images containing explicit, illegal, or harmful content
              </li>
              <li>
                Upload images of individuals without their consent, or use
                outputs to harass, defame, or harm any person
              </li>
              <li>
                Attempt to reverse-engineer, scrape, or extract our AI models
                or proprietary systems
              </li>
              <li>
                Use automated scripts, bots, or other means to access the
                Service in a way that exceeds normal usage patterns
              </li>
              <li>
                Resell or sublicense access to the Service without our written
                consent
              </li>
              <li>
                Use the Service for any unlawful purpose or in violation of any
                applicable laws
              </li>
            </ul>
            <p>
              Violation of these rules may result in immediate termination of
              your account without refund.
            </p>
          </Section>

          <Section title="6. Your Content and Outputs">
            <Subsection title="6.1 Your Uploaded Images">
              <p>
                You retain ownership of images you upload. By uploading, you
                grant ReRoom a limited, non-exclusive licence to process your
                images solely to provide the Service. We do not claim ownership
                of your uploaded content.
              </p>
            </Subsection>

            <Subsection title="6.2 AI-Generated Outputs">
              <p>
                Subject to your compliance with these Terms and payment of
                applicable fees, you own the AI-generated redesign images
                produced from your uploads. You may use these outputs for
                personal or commercial purposes.
              </p>
              <p>
                AI-generated outputs may occasionally be similar to outputs
                generated for other users. We make no guarantee of uniqueness.
              </p>
            </Subsection>

            <Subsection title="6.3 Feedback">
              <p>
                Any feedback, suggestions, or ideas you submit about the Service
                may be used by us freely without compensation or attribution.
              </p>
            </Subsection>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              The ReRoom name, logo, platform, and all underlying technology,
              software, and content (excluding your uploads) are the
              intellectual property of ReRoom and are protected by applicable
              copyright, trademark, and other laws. You may not copy, modify,
              distribute, or create derivative works from our platform without
              our express written consent.
            </p>
          </Section>

          <Section title="8. Disclaimers">
            <p>
              THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
              AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
              NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the Service will be uninterrupted,
              error-free, or that AI outputs will meet your expectations. AI
              outputs are generated algorithmically and may contain errors,
              inaccuracies, or unexpected results.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, REROOM SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL,
              ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE.
            </p>
            <p>
              OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING FROM OR RELATED
              TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE GREATER OF (A)
              THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM,
              OR (B) $100 USD.
            </p>
          </Section>

          <Section title="10. Indemnification">
            <p>
              You agree to indemnify and hold harmless ReRoom, its officers,
              directors, employees, and agents from any claims, damages,
              losses, or expenses (including legal fees) arising from your use
              of the Service, your violation of these Terms, or your
              infringement of any third-party rights.
            </p>
          </Section>

          <Section title="11. Termination">
            <p>
              We may suspend or terminate your account at any time for violation
              of these Terms, non-payment, or at our discretion with reasonable
              notice. Upon termination, your right to use the Service ceases
              immediately. Sections 6, 7, 8, 9, and 10 survive termination.
            </p>
          </Section>

          <Section title="12. Governing Law">
            <p>
              These Terms are governed by the laws of the State of Delaware,
              United States, without regard to conflict of law principles. Any
              disputes shall be resolved exclusively in the courts of Delaware.
            </p>
          </Section>

          <Section title="13. Contact">
            <p>
              Questions about these Terms? Contact us at:
            </p>
            <div className="bg-surface rounded-xl p-5 mt-4 text-sm text-muted space-y-1">
              <p className="font-semibold text-charcoal">ReRoom</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:legal@reroom.ai"
                  className="text-primary hover:underline"
                >
                  legal@reroom.ai
                </a>
              </p>
            </div>
          </Section>

          <div className="mt-10 p-5 border border-amber-200 bg-amber-50 rounded-xl text-sm text-amber-800">
            <strong>Note:</strong> These Terms of Service are provided as a
            starting template. You should have a qualified attorney review and
            customise them for your specific business before launching
            commercially.
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex gap-6 text-sm text-muted">
          <Link href="/" className="hover:text-charcoal transition-colors">
            ← Back to ReRoom
          </Link>
          <Link
            href="/privacy"
            className="hover:text-charcoal transition-colors"
          >
            Privacy Policy →
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
