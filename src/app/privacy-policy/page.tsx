import type { Metadata } from "next";
import {
  RiBankCardLine,
  RiDatabase2Line,
  RiFileShield2Line,
  RiLockPasswordLine,
  RiShieldCheckLine,
} from "@remixicon/react";

import { Container, FinalCta } from "@/components/shared";

export const metadata: Metadata = {
  title: "Privacy Policy | Pentacore",
  description:
    "Learn how Pentacore collects, uses, protects, and retains business, KYC, transaction, API, and payment operations data.",
};

const privacyHighlights = [
  {
    icon: RiFileShield2Line,
    title: "Business verification",
    description:
      "We collect onboarding and KYC details required to verify and activate payment services.",
  },
  {
    icon: RiBankCardLine,
    title: "Payment operations",
    description:
      "We process transaction, payout, refund, settlement, and reconciliation data to run your payment flows.",
  },
  {
    icon: RiLockPasswordLine,
    title: "Security controls",
    description:
      "We use operational and technical safeguards to protect dashboard, API, and transaction activity.",
  },
];

const privacySections = [
  {
    title: "Information we collect",
    description:
      "Pentacore may collect business name, registered address, PAN, GST details, bank account information, authorized user details, website or app information, support conversations, and documents required for onboarding or compliance checks.",
  },
  {
    title: "KYC and account verification",
    description:
      "To activate and maintain payment services, we may process identity documents, business proof, ownership details, director or proprietor information, cancelled cheque, bank statements, and other verification records requested by banking or payment partners.",
  },
  {
    title: "Transaction and payment data",
    description:
      "When you use Pentacore, we may process payin, payout, refund, settlement, payment link, QR, API, and dashboard records. This can include order IDs, transaction IDs, customer references, amount, payment method, UTR, status, timestamps, and failure reasons.",
  },
  {
    title: "API, device, and usage information",
    description:
      "We may collect API request and response logs, webhook delivery data, IP address, browser or device details, dashboard activity, authentication events, and integration metadata for security, troubleshooting, analytics, and service improvement.",
  },
  {
    title: "How we use information",
    description:
      "We use data to onboard businesses, process payments, send payouts, manage refunds and settlements, monitor risk, prevent fraud, provide support, improve product reliability, and meet legal, tax, audit, and compliance obligations.",
  },
  {
    title: "Sharing with service partners",
    description:
      "We may share required information with banks, payment processors, acquirers, payout partners, technology vendors, auditors, legal authorities, or compliance providers when needed to deliver Pentacore services or comply with applicable requirements.",
  },
  {
    title: "Fraud, disputes, and compliance",
    description:
      "Pentacore may use business and transaction information to review suspicious activity, manage chargebacks, investigate disputes, enforce platform policies, respond to legal requests, and reduce financial or operational risk.",
  },
  {
    title: "Data retention",
    description:
      "We retain records for as long as required to provide services, support reconciliation, resolve disputes, prevent fraud, comply with legal or tax obligations, support audits, and maintain payment operations history.",
  },
  {
    title: "Your choices and requests",
    description:
      "You may contact Pentacore to request updates or corrections to business, account, or contact information. Some records may continue to be retained where required for compliance, audits, transaction history, disputes, or legal obligations.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#FAFAF3]">
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0B806A]">
              Privacy Policy
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-6xl">
              How Pentacore handles payment and business data.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B7D74]">
              This policy explains how Pentacore collects, uses, shares,
              secures, and retains information while helping businesses manage
              collections, payouts, settlements, APIs, and transaction records.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {privacyHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl bg-white p-7 shadow-sm"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#BCD54D]/25 text-[#123D34]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-6 text-lg font-semibold leading-7 text-[#123D34]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#6B7D74]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 rounded-xl bg-[#063F32] p-6 text-white shadow-[0_28px_80px_rgba(2,44,34,0.16)] sm:p-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-[#DDF95A] ring-1 ring-white/10">
                <RiShieldCheckLine className="h-6 w-6" />
              </span>
              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Privacy built around payment operations.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#B7D0C6] sm:text-base">
                Pentacore uses data to run secure payment services, support
                business verification, keep transaction records clear, and help
                teams operate with confidence.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Data used for payment services and compliance",
                "Transaction records protected for reconciliation",
                "API and dashboard activity monitored for security",
                "Retention aligned with operational and legal needs",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-white/10 p-5 text-sm leading-6 text-white/85 ring-1 ring-white/10"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0B806A]">
              Details
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-5xl">
              What this policy covers.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5">
            {privacySections.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-5 rounded-xl bg-white p-6 shadow-sm sm:grid-cols-[56px_1fr] sm:p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BCD54D]/25 text-sm font-semibold text-[#154036]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-[#123D34]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6B7D74]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-xl bg-white p-7 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF6EA] text-[#0B4A3A]">
                <RiDatabase2Line className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#123D34]">
                  Contact Pentacore about privacy
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6B7D74]">
                  For privacy questions, correction requests, or concerns about
                  business, KYC, API, transaction, payout, refund, or settlement
                  records, contact the Pentacore team through our contact page.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCta
        title="Questions about data handling?"
        description="Talk to Pentacore about privacy, business verification, transaction records, and payment operations data."
        buttonText="Contact Pentacore"
        buttonHref="/contact"
        className="py-16 sm:py-20"
      />
    </main>
  );
}
