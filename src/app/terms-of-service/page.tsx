import type { Metadata } from "next";
import {
  RiBankCardLine,
  RiFileList3Line,
  RiLockPasswordLine,
  RiRefund2Line,
  RiShieldCheckLine,
} from "@remixicon/react";

import { Container, FinalCta } from "@/components/shared";

export const metadata: Metadata = {
  title: "Terms of Service | Pentacore",
  description:
    "Read Pentacore's terms for payment gateway services, payins, payouts, settlements, dashboard access, APIs, webhooks, refunds, and transaction operations.",
};

const termsHighlights = [
  {
    icon: RiBankCardLine,
    title: "Payment services",
    description:
      "Pentacore helps approved businesses collect payments, send payouts, and manage transaction operations.",
  },
  {
    icon: RiLockPasswordLine,
    title: "Secure usage",
    description:
      "You are responsible for protecting dashboard access, API keys, webhook endpoints, and account activity.",
  },
  {
    icon: RiRefund2Line,
    title: "Operational rules",
    description:
      "Refunds, disputes, holds, settlements, and account reviews may follow partner, risk, and compliance rules.",
  },
];

const termsSections = [
  {
    title: "Using Pentacore",
    description:
      "Pentacore provides payment infrastructure for approved businesses, including online collections, payout operations, transaction tracking, settlement visibility, dashboard access, APIs, and webhook-based updates.",
  },
  {
    title: "Account approval and verification",
    description:
      "Your business must complete onboarding before using live services. Pentacore may request business documents, PAN, GST details, bank account proof, ownership information, website or app details, and any additional verification required by law or payment partners.",
  },
  {
    title: "Payins and payment collection",
    description:
      "Payin services allow your business to accept supported payment methods such as UPI, cards, net banking, payment links, QR flows, checkout pages, or API-led payment experiences, subject to eligibility and availability.",
  },
  {
    title: "Payouts and money movement",
    description:
      "Payout services help businesses transfer funds to approved beneficiaries, vendors, partners, users, or business accounts. Payouts may be subject to balance checks, limits, beneficiary validation, partner availability, and risk review.",
  },
  {
    title: "Pricing, settlements, and deductions",
    description:
      "Transaction charges, taxes, payout fees, settlement cycles, reserve requirements, refunds, chargebacks, and deductions may vary based on business category, risk profile, payment method, service usage, and your agreement with Pentacore.",
  },
  {
    title: "APIs, webhooks, and dashboard access",
    description:
      "Pentacore may provide APIs, webhooks, and dashboard tools for payment creation, payout initiation, status updates, reporting, and reconciliation. Your team is responsible for secure integration, correct webhook handling, and safe access management.",
  },
  {
    title: "Business responsibilities",
    description:
      "You must provide accurate information, use Pentacore only for approved business activities, keep customer communication clear, monitor transactions, comply with applicable laws, and avoid prohibited, fraudulent, misleading, or high-risk activity.",
  },
  {
    title: "Risk reviews and restricted activity",
    description:
      "Pentacore may review, delay, reject, hold, suspend, or block transactions or accounts where fraud, policy violation, chargeback risk, suspicious activity, incorrect information, regulatory concern, or partner instruction is identified.",
  },
  {
    title: "Refunds, failed payments, and disputes",
    description:
      "Refunds, failed transactions, customer disputes, chargebacks, and reversals may be handled according to banking partner rules, payment network rules, applicable law, operational timelines, and your merchant agreement.",
  },
  {
    title: "Service availability",
    description:
      "Pentacore aims to provide reliable services, but payment processing can be affected by banks, networks, payment partners, scheduled maintenance, third-party interruptions, integration issues, or events outside our control.",
  },
  {
    title: "Suspension or termination",
    description:
      "Pentacore may suspend, restrict, or terminate access if a business violates these terms, creates risk, provides false information, misuses services, breaches security, or uses the platform for unauthorized activities.",
  },
  {
    title: "Changes to these terms",
    description:
      "Pentacore may update these Terms of Service when required for product, legal, compliance, partner, or operational reasons. Continued use of Pentacore after changes means you accept the updated terms.",
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#FAFAF3]">
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0B806A]">
              Terms of Service
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-6xl">
              Terms for using Pentacore payment services.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B7D74]">
              These terms explain how approved businesses may use Pentacore for
              collections, payouts, settlements, refunds, APIs, webhooks,
              dashboard access, and transaction operations.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {termsHighlights.map((item) => {
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
                Built for responsible payment operations.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#B7D0C6] sm:text-base">
                Pentacore services are designed for legitimate business use.
                Clear account ownership, secure API usage, accurate records,
                and compliant transaction activity help keep the platform safe.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Use services only for approved business activities",
                "Protect API keys, dashboard access, and webhook endpoints",
                "Monitor refunds, disputes, payouts, and settlements",
                "Follow applicable laws, partner rules, and platform policies",
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
              Service terms
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-5xl">
              Terms that guide your Pentacore account.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5">
            {termsSections.map((item, index) => (
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
                <RiFileList3Line className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#123D34]">
                  Merchant agreement may also apply
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6B7D74]">
                  These website terms provide a general framework. Your final
                  pricing, settlement cycle, transaction limits, reserve terms,
                  supported services, and operational conditions may also be
                  governed by your merchant agreement with Pentacore.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCta
        title="Need help with Pentacore terms?"
        description="Speak with our team about onboarding, payins, payouts, settlements, API access, refunds, and account operations."
        buttonText="Contact Pentacore"
        buttonHref="/contact"
        className="py-16 sm:py-20"
      />
    </main>
  );
}
