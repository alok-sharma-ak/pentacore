import type { Metadata } from "next";
import Image from "next/image";
import {
  RiArrowRightLine,
  RiBankCardLine,
  RiCheckLine,
  RiCodeSSlashLine,
  RiEyeLine,
  RiFlashlightLine,
  RiHeart3Line,
  RiLinksLine,
  RiQrCodeLine,
  RiRefund2Line,
  RiRocketLine,
  RiSecurePaymentLine,
  RiSendPlaneLine,
  RiShieldCheckLine,
  RiWallet3Line,
  RiWebhookLine,
} from "@remixicon/react";

import { Card, Container, FinalCta, LinkButton } from "@/components/shared";

export const metadata: Metadata = {
  title: "About Pentacore | Payment Infrastructure for Indian Businesses",
  description:
    "Meet Pentacore, the payment infrastructure platform helping Indian businesses collect payments, manage money movement, and operate with clearer transaction visibility.",
};

const stats = [
  { value: "UPI", label: "India-ready collections" },
  { value: "API", label: "Flexible integrations" },
  { value: "Live", label: "Transaction visibility" },
  { value: "24/7", label: "Payment operations" },
];

const capabilities = [
  {
    icon: RiBankCardLine,
    title: "Accept payments",
    description:
      "Collect through UPI, cards, wallets, net banking, checkout, payment links, and QR flows.",
  },
  {
    icon: RiSendPlaneLine,
    title: "Move business funds",
    description:
      "Support vendor, partner, seller, and account-level money movement with clear status tracking.",
  },
  {
    icon: RiWallet3Line,
    title: "Understand every movement",
    description:
      "Keep collections, refunds, balances, payouts, and settlements visible from one connected platform.",
  },
  {
    icon: RiCodeSSlashLine,
    title: "Build with APIs",
    description:
      "Create custom payment experiences with order APIs, verification, webhooks, and reliable references.",
  },
];

const values = [
  {
    icon: RiEyeLine,
    title: "Clarity over complexity",
    description:
      "Payment status, customer context, refunds, and settlement movement should be easy for every team to understand.",
  },
  {
    icon: RiFlashlightLine,
    title: "Speed with purpose",
    description:
      "We design onboarding, integration, and daily operations to help businesses act quickly without losing control.",
  },
  {
    icon: RiHeart3Line,
    title: "Built around real teams",
    description:
      "Products should work for founders, developers, finance, support, and operations, not just the payment screen.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Trust by design",
    description:
      "Secure access, traceable events, clean records, and dependable infrastructure belong in every workflow.",
  },
];

const differences = [
  {
    icon: RiLinksLine,
    title: "Connected payment products",
    description:
      "Checkout, links, QR, wallet activity, mobile tools, and APIs share one operational view.",
  },
  {
    icon: RiWebhookLine,
    title: "Status that reaches your systems",
    description:
      "APIs and webhooks keep orders, customer experiences, and internal tools updated.",
  },
  {
    icon: RiRefund2Line,
    title: "Operations beyond collection",
    description:
      "Track refunds, payout movement, settlement activity, and transaction references after payment.",
  },
  {
    icon: RiQrCodeLine,
    title: "Built for Indian payment habits",
    description:
      "Support online, chat-led, in-store, field, and platform payment experiences familiar to Indian customers.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#FAFAF3]">
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Container>
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#022C22]">
              About Pentacore
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#022C22] sm:text-6xl">
              Payment infrastructure for businesses building what comes next.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5F756C] sm:text-lg">
              Pentacore helps Indian businesses collect payments, move money,
              connect payment systems, and keep every transaction visible from
              one modern platform.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton
                href="/contact"
                size="lg"
                className="h-14 min-w-[200px] rounded-xl bg-[#154036] text-base font-semibold text-white hover:bg-[#154036]/80 sm:h-16 sm:min-w-[220px] sm:text-lg"
              >
                Talk to Pentacore
                <RiArrowRightLine className="h-5 w-5" />
              </LinkButton>
              <LinkButton
                href="/pricing"
                size="lg"
                className="h-14 min-w-[200px] rounded-xl bg-white text-base font-semibold text-[#154036] hover:bg-white/80 sm:h-16 sm:min-w-[220px] sm:text-lg"
              >
                Explore pricing
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#DDE8DF] py-10 sm:py-12">
        <Container>
          <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={
                  index % 2 === 0
                    ? "text-center lg:border-r lg:border-[#DDE8DF]"
                    : "text-center lg:border-r lg:border-[#DDE8DF] lg:last:border-r-0"
                }
              >
                <p className="text-3xl font-semibold text-[#123D34] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[#5F756C]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0B806A]">
                Why we started
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-5xl">
                Payment operations should not slow down a growing business.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-[#5F756C]">
                <p>
                  Businesses do much more than accept a payment. They confirm
                  orders, answer customer questions, manage refunds, understand
                  settlements, send funds, and reconcile every movement.
                </p>
                <p>
                  When those workflows live across disconnected dashboards, bank
                  statements, screenshots, and spreadsheets, teams lose time and
                  confidence.
                </p>
                <p>
                  Pentacore brings payment products and operational visibility
                  together so businesses can spend less time tracing money and
                  more time serving customers.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#EEF6EA] shadow-[0_24px_70px_rgba(2,44,34,0.1)]">
              <Image
                src="/images/boy-girl.png"
                alt="Indian business team reviewing Pentacore payment operations"
                fill
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#154036] py-16 text-white sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#DDF95A]">
                Our mission
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Make business money movement simple, visible, and dependable.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#B7D0C6]">
                We help teams collect, track, refund, settle, and move funds
                without turning daily payment operations into manual detective
                work.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#DDF95A]">
                Our vision
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Become the trusted payment layer behind ambitious Indian
                businesses.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#B7D0C6]">
                Pentacore is building infrastructure that adapts from a first
                payment link to complex API, platform, wallet, and payout
                operations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionIntro
            eyebrow="What Pentacore powers"
            title="One connected foundation for payment operations."
            description="Use the products your business needs today, then expand into more advanced payment workflows as your team and transaction volume grow."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <Card
                  key={capability.title}
                  className="p-7 shadow-[0_18px_55px_rgba(2,44,34,0.07)] ring-1 ring-[#DDE8DF]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#BCD54D]/25 text-[#154036]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-[#123D34]">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5F756C]">
                    {capability.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className=" py-16 sm:py-20">
        <Container>
          <SectionIntro
            eyebrow=""
            title="Principles that shape every Pentacore product."
            description="Our decisions start with the teams responsible for customer payments, finance records, system reliability, and business growth."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <Card key={value.title} className="p-7 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#BCD54D]/25 text-[#154036]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-[#123D34]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5F756C]">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#DDF95A] shadow-[0_24px_70px_rgba(2,44,34,0.1)]">
              <Image
                src="/images/api-infrastructure.png"
                alt="Pentacore secure API and payment infrastructure"
                fill
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0B806A]">
                The Pentacore difference
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-5xl">
                Designed beyond the payment screen.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#5F756C]">
                Pentacore connects customer payment experiences with the
                systems, people, and records that keep a business operating.
              </p>

              <div className="mt-8 grid gap-5">
                {differences.map((difference) => {
                  const Icon = difference.icon;

                  return (
                    <div
                      key={difference.title}
                      className="grid grid-cols-[44px_1fr] gap-4"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#BCD54D]/25 text-[#154036]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-[#123D34]">
                          {difference.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-[#5F756C]">
                          {difference.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#DDE8DF] py-12">
        <Container>
          <div className="grid gap-6 text-center sm:grid-cols-3">
            {[
              {
                icon: RiRocketLine,
                title: "Built to grow",
                text: "Start with a focused payment flow and expand without replacing your foundation.",
              },
              {
                icon: RiSecurePaymentLine,
                title: "Built to protect",
                text: "Keep payment activity controlled, traceable, and easier to review.",
              },
              {
                icon: RiCheckLine,
                title: "Built to operate",
                text: "Give every team the payment context they need to move with confidence.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title}>
                  <Icon className="mx-auto h-7 w-7 text-[#0B806A]" />
                  <h3 className="mt-4 text-lg font-semibold text-[#123D34]">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm leading-7 text-[#5F756C]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <FinalCta
        title="Build clearer payment operations with Pentacore"
        description="Tell us how your business collects, tracks, and moves money. We will help you find the right Pentacore products."
        buttonText="Contact sales"
        buttonHref="/contact"
        className="py-16 sm:py-20"
      />
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0B806A]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F756C]">
        {description}
      </p>
    </div>
  );
}
