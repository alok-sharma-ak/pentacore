import type { Metadata } from "next";
import { RiFileList3Line, RiShieldCheckLine } from "@remixicon/react";

import { Container, CTA, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "Terms of Service | Pentacore",
  description:
    "Read Pentacore's terms of service for using our payment gateway, payin, payout, settlement, dashboard, API, and webhook services.",
};

const termsPoints = [
  {
    title: "Using Pentacore",
    description:
      "Pentacore provides payment gateway services that help approved merchants collect payments, process payouts, track transactions, manage settlements, and use payment APIs.",
  },
  {
    title: "Merchant account approval",
    description:
      "To use Pentacore services, your business must complete merchant onboarding and approval. We may ask for company documents, PAN, GST, bank details, owner/director details, and other KYC information.",
  },
  {
    title: "Payin services",
    description:
      "Payin services allow your business to collect customer payments through supported payment modes such as UPI, cards, net banking, payment links, or other available methods.",
  },
  {
    title: "Payout services",
    description:
      "Payout services allow your business to send money to users, vendors, partners, or other beneficiaries through supported payout channels, subject to limits, checks, and service availability.",
  },
  {
    title: "Settlement and charges",
    description:
      "Settlement timelines, transaction charges, taxes, payout fees, reserve rules, and deductions may vary based on your business category, risk profile, payment method, and agreement with Pentacore.",
  },
  {
    title: "Transaction status and webhooks",
    description:
      "Pentacore may provide dashboard, API, and webhook updates for transaction status. Merchants are responsible for correctly integrating APIs and handling webhook responses in their own system.",
  },
  {
    title: "Merchant responsibilities",
    description:
      "You must provide correct business information, keep API keys and dashboard access secure, monitor transactions, handle customer communication, and use Pentacore only for approved business activities.",
  },
  {
    title: "Restricted or suspicious activity",
    description:
      "Pentacore may hold, review, reject, block, or suspend transactions or merchant accounts if fraud, misuse, chargeback risk, suspicious activity, policy violation, or legal concern is detected.",
  },
  {
    title: "Refunds, disputes, and chargebacks",
    description:
      "Refunds, disputes, chargebacks, failed transactions, and customer complaints may be reviewed as per banking partner rules, payment network rules, merchant agreement, and applicable law.",
  },
  {
    title: "Service availability",
    description:
      "Pentacore works to provide reliable services, but payment processing may be affected by banks, acquirers, payment partners, network issues, maintenance, downtime, or third-party service interruptions.",
  },
  {
    title: "Account suspension or termination",
    description:
      "Pentacore may suspend or terminate access if a merchant violates these terms, provides false information, creates risk, misuses services, or uses the platform for unauthorized activities.",
  },
  {
    title: "Updates to these terms",
    description:
      "Pentacore may update these Terms of Service when required. Continued use of our website, dashboard, APIs, or payment services means you accept the updated terms.",
  },
];

export default function TermsOfServicePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              label="Terms of Service"
              title="Terms for using Pentacore payment services."
              description="These Terms of Service explain how approved merchants can use Pentacore for payins, payouts, settlements, dashboard access, APIs, webhooks, and transaction management."
            />
          </div>
        </Container>
      </section>

      <section className="space-y-20 bg-white pt-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-slate-200 bg-surface p-6 shadow-soft sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint-500 text-white">
                  <RiShieldCheckLine className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-2xl font-extrabold text-ink">
                    Pentacore terms summary
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    Pentacore helps approved businesses accept customer payments,
                    send payouts, manage settlements, track transactions, and
                    integrate payment APIs. Merchants must use the platform
                    responsibly, securely, and only for approved business
                    purposes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {termsPoints.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
                >
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint-50 text-sm font-bold text-mint-600">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint-50 text-mint-600">
                  <RiFileList3Line className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ink">
                    Merchant agreement applies
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    These website terms are a simple overview. Your final
                    pricing, settlement cycle, transaction limits, reserve
                    rules, risk conditions, and service access may depend on
                    your merchant agreement with Pentacore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <CTA
          title="Need help understanding Pentacore terms?"
          description="Contact our team for questions about merchant onboarding, payins, payouts, settlements, pricing, API access, or transaction operations."
          primaryText="Contact us"
          primaryHref="/contact"
          secondaryText="Explore pricing"
          secondaryHref="/#pricing"
        />
      </section>
    </main>
  );
}
