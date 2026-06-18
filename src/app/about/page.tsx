import type { Metadata } from "next";
import {
  RiBankCardLine,
  RiCodeBoxLine,
  RiDashboard3Line,
  RiExchangeDollarLine,
  RiExchangeLine,
  RiEyeLine,
  RiRefund2Line,
  RiRocketLine,
  RiSettings3Line,
  RiShieldKeyholeLine,
  RiStore2Line,
  RiWallet3Line,
  RiWebhookLine,
} from "@remixicon/react";

import {
  Card,
  Container,
  CTA,
  LinkButton,
  Para,
  SectionHeading,
  ServiceCard,
} from "@/components/shared";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Pentacore | Modern Payment Gateway for Indian Businesses",
  description:
    "Learn about Pentacore, a modern fintech payment gateway helping Indian businesses accept payins, manage payouts, and move money faster.",
};

const stats = [
  { value: "Payins", label: "Online collections" },
  { value: "Payouts", label: "Vendor & user payments" },
  { value: "API", label: "Developer-first integration" },
  { value: "24/7", label: "Transaction visibility" },
];

const values = [
  {
    icon: RiEyeLine,
    title: "Clarity first",
    description:
      "Payment status, payout movement, settlement records, and refund information should be easy to understand.",
  },
  {
    icon: RiRocketLine,
    title: "Built for speed",
    description:
      "From onboarding to integration and daily transaction monitoring, every workflow should help teams move faster.",
  },
  {
    icon: RiStore2Line,
    title: "Merchant focused",
    description:
      "Our platform is built around real merchant problems: payment failures, refunds, settlements, reconciliation, and support queries.",
  },
  {
    icon: RiShieldKeyholeLine,
    title: "Reliable by design",
    description:
      "Secure APIs, webhook verification, transaction tracking, and controlled access are core to how Pentacore operates.",
  },
];

const capabilities = [
  {
    icon: RiBankCardLine,
    title: "Payin collections",
    description:
      "Accept customer payments through UPI, cards, net banking, payment links, and online checkout flows.",
  },
  {
    icon: RiExchangeDollarLine,
    title: "Payout operations",
    description:
      "Send money to vendors, sellers, users, agents, partners, and business accounts with clear payout tracking.",
  },
  {
    icon: RiWallet3Line,
    title: "Settlement visibility",
    description:
      "Track collected money, settlement movement, and finance-ready transaction records from one dashboard.",
  },
  {
    icon: RiCodeBoxLine,
    title: "Developer integration",
    description:
      "Use clean APIs, webhook callbacks, predictable responses, and transaction status endpoints for faster integration.",
  },
];

const differences = [
  {
    icon: RiBankCardLine,
    text: "Payins and payouts in one platform",
  },
  {
    icon: RiDashboard3Line,
    text: "Transaction status visibility",
  },
  {
    icon: RiRefund2Line,
    text: "Refund and settlement tracking",
  },
  {
    icon: RiWebhookLine,
    text: "Webhook-based system updates",
  },
  {
    icon: RiDashboard3Line,
    text: "Merchant dashboard for daily operations",
  },
  {
    icon: RiSettings3Line,
    text: "Support for business-specific payment flows",
  },
];

export default function AboutPage() {
  return (
    <main className="space-y-12 md:space-y-20 lg:space-y-28 pt-10 md:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface ">
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-mint-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-navy-900/10 blur-3xl" />

        <Container>
          <SectionHeading
            label="About Pentacore"
            title="We help India’s fastest-growing businesses collect and move money online."
            description="Pentacore is a modern payment gateway built for businesses that need fast payins, reliable payouts, secure payment flows, and clean transaction visibility from one powerful platform."
          />
          <div className="mx-auto max-w-4xl text-center">
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton href="/contact" size="lg">
                Contact sales
              </LinkButton>
              <LinkButton href="/#pricing" variant="outline" size="lg">
                View pricing
              </LinkButton>
            </div>
          </div>

          <Card className="mt-12 md:mt-20 grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-4 text-center lg:border-r lg:border-navy-900/10 last:border-r-0"
              >
                <p className="text-3xl font-black text-navy-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </Card>
        </Container>
      </section>

      {/* Story */}
      <section className="">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-mint-600">
                Our story
              </p>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Payment infrastructure designed for modern Indian businesses.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Pentacore was built to simplify payment operations for Indian
                  businesses that need more than just a checkout page.
                </p>

                <p>
                  Modern businesses collect money from customers, send payouts
                  to vendors, track refunds, manage settlement cycles, and
                  answer transaction-related customer queries every day. When
                  these operations are split across multiple systems, teams lose
                  visibility and waste time on manual follow-ups.
                </p>

                <p>
                  Pentacore brings payins, payouts, transaction status, refunds,
                  settlements, and reporting into one payment infrastructure
                  layer so merchants can operate with more clarity and control.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-surface overflow-hidden shadow-soft">
              <div className="rounded-[1.5rem] bg-white p-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint-600">
                      Pentacore platform
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-ink">
                      Built for payment teams
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-500 text-white">
                    <RiExchangeLine className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    "Accept payments online",
                    "Send secure payouts",
                    "Track transaction status",
                    "Monitor settlement visibility",
                    "Support business scale",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-mint-500" />
                      <p className="text-sm font-medium text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Vision */}
      <section className="">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-mint-600">
                Our mission
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-ink">
                Make payment operations simple, secure, and visible.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                We help businesses collect payments, send payouts, track
                transaction status, manage refunds, and understand settlements
                without operational confusion.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-navy-900 p-8 text-white shadow-soft sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-mint-400">
                Our vision
              </p>
              <h2 className="mt-4 text-3xl font-extrabold">
                Become the payment operations layer for growing businesses.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                We want to power reliable payment movement for Indian businesses
                with infrastructure that is easy to integrate, secure to
                operate, and simple to manage.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What we provide */}
      <section className="bg-surface ">
        <Container>
          <SectionHeading
            label="What we provide"
            title="Everything your business needs to manage payments"
            description="Pentacore helps merchants handle collections, payouts, settlements, transaction tracking, and operational visibility from one place."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              return (
                <ServiceCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  arrow={false}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-surface ">
        <Container>
          <SectionHeading
            label="Our values"
            title="Built around trust, speed, and merchant success"
            description="Every product decision at Pentacore is focused on helping merchants operate with more control and less friction."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              return (
                <ServiceCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  arrow={false}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* difference */}
      <section className="bg-surface">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Left image / visual */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <Image
                  src="/payment-operations.png"
                  alt="Pentacore payment operations dashboard"
                  width={900}
                  height={680}
                  className="h-[340px] w-full rounded-3xl object-cover object-left sm:h-[440px]"
                />
              </div>
            </div>

            {/* Right content */}
            <div>
              <SectionHeading
                label="What makes us different"
                title="Built beyond payment collection"
                description="Pentacore is not only focused on accepting payments. It is built around complete payment operations, helping merchants manage collections, payouts, refunds, settlements, and transaction visibility from one connected system."
                align="left"
              />

              <div className="mt-8">
                {differences.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.text} className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-[hsl(var(--primary))]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <Para>{item.text}</Para>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to simplify your payment operations?"
        description="Accept payments, send payouts, track transaction status, manage refunds, and monitor settlements from one platform."
        primaryText="Contact sales"
        primaryHref="/contact"
        secondaryText="Explore pricing"
        secondaryHref="/#pricing"
      />
    </main>
  );
}
