import {
  RiArrowRightLine,
  RiBankCardLine,
  RiCheckLine,
  RiCodeSSlashLine,
  RiFlashlightLine,
  RiLinkM,
  RiQuestionLine,
  RiQrCodeLine,
  RiSendPlaneLine,
  RiShieldCheckLine,
} from "@remixicon/react";

import { Card, Container, FinalCta, LinkButton } from "@/components/shared";

const pricingOptions = [
  {
    icon: RiBankCardLine,
    title: "Payment Gateway",
    label: "Transaction based",
    description:
      "Accept UPI, cards, wallets, and net banking through a checkout built for Indian businesses.",
    features: [
      "UPI and card collections",
      "Checkout and payment status",
      "Refund and settlement visibility",
      "Dashboard access",
    ],
  },
  {
    icon: RiLinkM,
    title: "Payment Links & QR",
    label: "Pay as you collect",
    description:
      "Collect through invoices, WhatsApp, counters, deliveries, events, and assisted sales.",
    features: [
      "Unlimited link creation",
      "Static and dynamic QR flows",
      "Customer payment tracking",
      "Shareable collection records",
    ],
  },
  {
    icon: RiSendPlaneLine,
    title: "Payouts & Platforms",
    label: "Volume based",
    description:
      "Move money to vendors, partners, sellers, and accounts with structured payment operations.",
    features: [
      "Payout status tracking",
      "Platform and partner workflows",
      "Split settlement visibility",
      "API and webhook support",
    ],
  },
];

const includedFeatures = [
  {
    icon: RiCodeSSlashLine,
    title: "Developer-ready APIs",
    description:
      "Use sandbox keys, clear API resources, and webhooks to connect Pentacore with your product.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Security-focused workflows",
    description:
      "Protect payment operations with scoped access, traceable events, and secure communication.",
  },
  {
    icon: RiFlashlightLine,
    title: "Real-time visibility",
    description:
      "Track successful, failed, pending, refunded, and settled payment activity from one place.",
  },
  {
    icon: RiQrCodeLine,
    title: "India-ready methods",
    description:
      "Support familiar customer payment experiences across UPI, cards, links, QR, and checkout.",
  },
];

const pricingFactors = [
  {
    title: "Payment methods",
    description:
      "Rates can vary based on the mix of UPI, domestic cards, international cards, wallets, and net banking.",
  },
  {
    title: "Monthly volume",
    description:
      "Higher and more predictable transaction volume can qualify for a customized commercial plan.",
  },
  {
    title: "Product requirements",
    description:
      "API complexity, platform workflows, payout operations, and support needs shape the final plan.",
  },
];

const pricingFaqs = [
  {
    question: "Does Pentacore charge a setup fee?",
    answer:
      "Your commercial plan depends on the products and integration support your business needs. The Pentacore team will share all applicable charges before activation.",
  },
  {
    question: "Can I get custom pricing for higher transaction volume?",
    answer:
      "Yes. Businesses with growing or predictable payment volume can speak with Pentacore about a customized commercial plan.",
  },
  {
    question:
      "Are refunds, payouts, and international cards priced separately?",
    answer:
      "They may follow different commercial terms depending on your payment flow, method mix, and operational requirements. Your proposal will clearly outline them.",
  },
  {
    question: "Can I start with one product and add more later?",
    answer:
      "Yes. You can begin with the payment products your team needs today and expand into links, QR, APIs, payouts, or platform workflows as you grow.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-[#FAFAF3]">
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0B806A]">
              Pentacore Pricing
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-6xl">
              Pricing that grows with your payment operations.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B7D74] sm:text-lg">
              Choose the products your business needs and get a transparent
              commercial plan based on payment methods, transaction volume, and
              workflow complexity.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton
                href="/contact"
                size="lg"
                className="h-14 min-w-[200px] rounded-xl bg-[#154036] text-base font-semibold text-white hover:bg-[#154036]/80 sm:h-16 sm:min-w-[220px] sm:text-lg"
              >
                Get a pricing plan
                <RiArrowRightLine className="h-5 w-5" />
              </LinkButton>
              <LinkButton
                href="/products/payment-api"
                size="lg"
                className="h-14 min-w-[200px] rounded-xl bg-white text-base font-semibold text-[#154036] hover:bg-white/80 sm:h-16 sm:min-w-[220px] sm:text-lg"
              >
                Explore products
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingOptions.map((option) => {
              const Icon = option.icon;

              return (
                <Card
                  key={option.title}
                  className="flex h-full flex-col p-7 shadow-sm sm:p-8"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#BCD54D]/25 text-[#123D34]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B806A]">
                    {option.label}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#123D34]">
                    {option.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#6B7D74]">
                    {option.description}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {option.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm leading-6 text-[#36564B]"
                      >
                        <RiCheckLine className="mt-0.5 h-5 w-5 shrink-0 text-[#0B806A]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <LinkButton
                      href="/contact"
                      className="w-full rounded-lg bg-[#154036] text-white hover:bg-[#154036]/80"
                    >
                      Talk to sales
                    </LinkButton>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#154036] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#DDF95A]">
              Included with Pentacore
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              More than payment processing.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#B7D0C6]">
              Every plan is supported by the tools teams need to integrate,
              monitor, and manage payment activity professionally.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {includedFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card key={feature.title} className="h-full p-7 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#BCD54D]/25 text-[#123D34]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold leading-7 text-[#123D34]">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#6B7D74]">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0B806A]">
                How pricing works
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-5xl">
                A plan built around how your business moves money.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#6B7D74]">
                Pentacore keeps commercials clear by matching your plan to the
                payment methods, volume, and operational support you actually
                use.
              </p>
            </div>

            <div className="grid gap-4">
              {pricingFactors.map((factor, index) => (
                <Card
                  key={factor.title}
                  className="grid gap-5 p-6 shadow-sm sm:grid-cols-[48px_1fr] sm:p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BCD54D]/25 text-lg font-semibold text-[#154036]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#123D34]">
                      {factor.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#6B7D74]">
                      {factor.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#BCD54D]/25 text-[#154036]">
                <RiQuestionLine className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#123D34] sm:text-4xl">
                Pricing questions
              </h2>
            </div>

            <div className="mt-8 divide-y divide-[#DDE8DF]">
              {pricingFaqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold text-[#123D34]">
                    {faq.question}
                    <span className="text-xl text-[#0B806A] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-[#6B7D74]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCta
        title="Get a Pentacore plan built for your business"
        description="Tell us how you collect, move, and track money. We will help you choose the right products and commercial plan."
        buttonText="Talk to Pentacore"
        buttonHref="/contact"
        className="py-16 sm:py-20"
      />
    </main>
  );
}
