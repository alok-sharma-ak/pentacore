import type { Metadata } from "next";
import { RiShieldCheckLine } from "@remixicon/react";

import { Container, CTA, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "Privacy Policy | Pentacore",
  description:
    "Read Pentacore's privacy policy to understand how we collect, use, store, and protect merchant, customer, KYC, transaction, API, payin, payout, and settlement information.",
};

const privacyPoints = [
  {
    title: "Merchant and business information",
    description:
      "Pentacore may collect business details such as company name, registered address, PAN, GST, business category, website/app details, contact information, and authorized person details during onboarding.",
  },
  {
    title: "KYC and bank details",
    description:
      "To activate payment services, we may collect KYC documents, director or owner details, bank account information, cancelled cheque, business proof, and other verification documents required for merchant approval.",
  },
  {
    title: "Payin transaction data",
    description:
      "For payment collection services, we may process payin details such as transaction ID, merchant order ID, customer name, customer mobile, customer email, amount, payment method, UTR, transaction status, and settlement references.",
  },
  {
    title: "Payout transaction data",
    description:
      "For payout services, we may process beneficiary details, bank account details, IFSC, payout amount, transaction ID, status, UTR, failure reason, and payout response data from banking or payment partners.",
  },
  {
    title: "API, webhook, and dashboard data",
    description:
      "When you use Pentacore APIs, dashboard, or webhooks, we may collect request logs, response logs, IP address, device details, access activity, API usage data, and webhook delivery information for security and troubleshooting.",
  },
  {
    title: "How we use your information",
    description:
      "We use information to onboard merchants, verify businesses, process payins and payouts, manage settlements, monitor transaction status, prevent fraud, resolve disputes, provide support, and improve Pentacore services.",
  },
  {
    title: "Data sharing with partners",
    description:
      "We may share required information with banks, acquirers, payment processors, payout partners, technology providers, compliance partners, auditors, or legal authorities when needed to provide services or meet legal requirements.",
  },
  {
    title: "Fraud, risk, and compliance",
    description:
      "Pentacore may use merchant and transaction information to detect suspicious activity, prevent fraud, review chargebacks, monitor risk, investigate complaints, and comply with applicable laws and payment partner requirements.",
  },
  {
    title: "Data security",
    description:
      "We use reasonable technical and operational safeguards to protect merchant, customer, KYC, transaction, API, and settlement data from unauthorized access, misuse, loss, or disclosure.",
  },
  {
    title: "Data retention",
    description:
      "We retain information as long as required for payment processing, settlement records, legal compliance, audits, fraud prevention, dispute handling, tax requirements, and business operations.",
  },
  {
    title: "Your rights",
    description:
      "You may contact Pentacore to request correction or update of your business, contact, or account information. Some records may be retained where required for legal, compliance, audit, or dispute purposes.",
  },
  {
    title: "Contact us",
    description:
      "For privacy-related questions, data correction requests, or concerns about how Pentacore handles your information, please contact our team through the contact page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              label="Privacy Policy"
              title="How Pentacore protects your payment data."
              description="This Privacy Policy explains how Pentacore collects, uses, stores, and protects merchant, customer, KYC, transaction, API, payin, payout, and settlement information."
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
                    Pentacore privacy summary
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    Pentacore collects only the information required to onboard
                    merchants, verify businesses, process payins and payouts,
                    manage settlements, monitor risk, prevent fraud, and support
                    secure payment operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {privacyPoints.map((item, index) => (
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
          </div>
        </Container>

        <CTA
          title="Have questions about Pentacore privacy?"
          description="Contact our team for questions about merchant data, KYC information, transaction records, API logs, settlements, or data handling practices."
          primaryText="Contact us"
          primaryHref="/contact"
          secondaryText="Explore pricing"
          secondaryHref="/#pricing"
        />
      </section>
    </main>
  );
}
