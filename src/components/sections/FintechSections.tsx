"use client";

import Image from "next/image";
import {
  RiCodeSSlashLine,
  RiDashboard3Line,
  RiLinkM,
  RiQrCodeLine,
  RiShieldCheckLine,
  RiWallet3Line,
  RiExchangeLine,
} from "@remixicon/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card, Container, LinkButton, Para } from "@/components/shared";

const trustedLogos = [
  "D2C brands",
  "Edtech teams",
  "SaaS platforms",
  "Marketplaces",
  "Retail stores",
  "Service firms",
  "Fintech apps",
  "Agencies",
];

const productCards = [
  {
    title: "Payment Links",
    imageUrl: "/images/products/payment-link.png",
    description:
      "Create Pentacore payment links for invoices, WhatsApp orders, subscriptions, and quick UPI collections.",
    buttonUrl: "/products/payment-links",
  },
  {
    title: "QR Payments",
    imageUrl: "/images/products/payment-qr.png",
    description:
      "Accept in-store and field payments with static or dynamic QR codes backed by Pentacore tracking.",
    buttonUrl: "/products/qr-payments",
  },
  {
    title: "Express Checkout",
    imageUrl: "/images/products/checkout.png",
    description:
      "Give customers a branded Pentacore checkout with UPI, cards, net banking, and wallet options.",
    buttonUrl: "/products/express-checkout",
  },
  {
    title: "Payment API",
    imageUrl: "/images/products/payment-api.png",
    description:
      "Use Pentacore APIs to create orders, verify payments, listen to webhooks, and reconcile faster.",
    buttonUrl: "/products/api",
  },
  {
    title: "Business Wallet",
    imageUrl: "/images/products/wallet.png",
    description:
      "Keep collections, balances, refunds, settlements, and payout movement visible from one wallet.",
    buttonUrl: "/products/wallet",
  },
  {
    title: "Mobile App",
    imageUrl: "/images/products/mobile-app.png",
    description:
      "Monitor Pentacore transactions, settlements, and customer payment status from anywhere.",
    buttonUrl: "/products/mobile-app",
  },
  {
    title: "Platform Solutions",
    imageUrl: "/images/products/platform-solutions.png",
    description:
      "Run marketplace collections, seller payouts, split settlements, and platform-led payment flows.",
    buttonUrl: "/products/platforms",
  },
  {
    title: "Business Capital",
    imageUrl: "/images/products/business-capital.png",
    description:
      "Give eligible merchants access to growth capital insights powered by their payment activity.",
    buttonUrl: "/products/capital",
  },
  {
    title: "Card Issuing",
    imageUrl: "/images/products/card-issuing.png",
    description:
      "Manage business spending workflows with virtual card controls, limits, and finance visibility.",
    buttonUrl: "/products/issuing",
  },
];

const platformProducts = [
  {
    icon: RiLinkM,
    title: "Payment Links",
    description: "Send branded links over WhatsApp, SMS, email, and invoices.",
  },
  {
    icon: RiCodeSSlashLine,
    title: "API",
    description: "Create orders, verify webhooks, and reconcile transactions.",
  },
  {
    icon: RiExchangeLine,
    title: "Payouts",
    description: "Automate vendor, seller, partner, and team payouts.",
  },
  {
    icon: RiWallet3Line,
    title: "Wallet",
    description: "Track balances, reserves, and settlement movement.",
  },
  {
    icon: RiQrCodeLine,
    title: "QR Payments",
    description: "Accept UPI QR payments for stores, events, and field teams.",
  },
  {
    icon: RiDashboard3Line,
    title: "Dashboard",
    description:
      "Give teams live visibility across payins, payouts, and refunds.",
  },
];

const securityFeatures = [
  {
    title: "Built for secure transactions",
    text: "Pentacore protects UPI, card, and payout workflows with monitoring, access controls, and clean status trails.",
  },
  {
    title: "Encrypted communication",
    text: "Payment events, KYC data, API requests, and webhook payloads stay protected across Pentacore flows.",
  },
  {
    title: "Secure-by-design integrations",
    text: "Use signed webhooks, scoped API keys, role-based access, and traceable dashboard actions.",
  },
  {
    title: "India-ready compliance",
    text: "Support Indian payment operations with transaction logs, merchant checks, payout records, and reviews.",
  },
];

const portraits = [
  "/images/hero-collage-image.png",
  "/10114034.jpg",
  "/dashboard-industry.png",
  "/payment-operations.png",
  "/business-use-cases.png",
  "/payment-gateway-for-growing-businesses.png",
];

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-4xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#0B4A3A]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#062E25] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6B7D74]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function LearnMoreButton({ href = "/contact" }: { href?: string }) {
  return (
    <LinkButton
      href={href}
      variant="navy"
      size="sm"
      className="mt-6 rounded-lg"
    >
      Learn More
    </LinkButton>
  );
}

function ServiceLearnButton() {
  return (
    <LinkButton
      href="/contact"
      variant="outline"
      size="sm"
      className="mt-6 h-12 min-w-[150px] rounded-lg border-0 bg-white text-[#062E25] shadow-sm hover:bg-white/90"
    >
      Learn More
    </LinkButton>
  );
}

function WalletAmountCard({
  label,
  amount,
  icon,
}: {
  label: string;
  amount: string;
  icon: string;
}) {
  return (
    <div className="min-w-[260px] bg-white px-7 py-5 text-[#062E25] shadow-[0_18px_45px_rgba(2,44,34,0.12)] sm:min-w-[330px]">
      <p className="flex items-center gap-2 text-sm font-semibold text-[#6B7D74] sm:text-base">
        <span className="text-lg text-[#22A534]">{icon}</span>
        {label}
      </p>
      <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {amount}
      </p>
    </div>
  );
}

export function TrustedBusinesses() {
  return (
    <section className="bg-[#FFFDF4] py-10">
      <Container>
        <p className="text-center text-sm font-semibold text-[#6B7D74]">
          Built for Indian teams moving money every day
        </p>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {trustedLogos.map((logo) => (
            <div
              key={logo}
              className="rounded-xl border border-[#062E25]/10 bg-white px-3 py-4 text-center text-sm font-bold text-[#25443b] shadow-sm"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProductCards() {
  return (
    <section id="products" className="bg-[#FAFAF3] py-20 sm:pb-14">
      <Container>
        <SectionIntro
          title="Pentacore products for collections, payouts, and growth"
          description="Launch payment links, checkout, UPI QR, APIs, wallet controls, and platform payment flows from one connected payment gateway."
        />

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1.05}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2.05 },
            1024: { slidesPerView: 3 },
          }}
          className="product-card-swiper mt-12 !pb-14"
        >
          {productCards.map((product, index) => (
            <SwiperSlide key={`${product.title}-${index}`} className="h-auto">
              <Card
                className={`flex h-full min-h-[520px] bg-[#FEFDF8] flex-col rounded-xl p-7 shadow-[0_18px_55px_rgba(2,44,34,0.08)]`}
              >
                <h3 className="text-2xl font-bold text-[#062E25]">
                  {product.title}
                </h3>
                <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={product.imageUrl}
                    alt={`${product.title} product preview`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <Para className="mt-6 text-sm leading-7">
                  {product.description}
                </Para>
                <div className="mt-auto">
                  <LearnMoreButton href={product.buttonUrl} />
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export function FinancialServices() {
  return (
    <section className="bg-[#FAFAF3] py-10 sm:py-14">
      <Container>
        <SectionIntro
          title="Pentacore financial tools for managing business money"
          description="Give your team clearer visibility across balances, capital needs, and platform-led payouts without switching between disconnected systems."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Card className="relative min-h-[500px] overflow-hidden rounded-xl bg-[#DDF95A] p-8 sm:p-12 lg:col-span-2 lg:min-h-[640px]">
            <div className="relative z-20 max-w-sm pt-4 lg:pt-44">
              <h3 className="text-4xl font-medium tracking-tight text-[#062E25]">
                Wallet
              </h3>
              <p className="mt-4 text-lg leading-8 text-[#062E25]">
                Move collected funds, track balances, and manage business
                payouts from your Pentacore wallet.
              </p>
              <ServiceLearnButton />
            </div>

            <div className="absolute bottom-0 right-0 z-10 h-[420px] w-[78%] max-w-[620px] sm:h-[520px] lg:right-10 lg:h-[590px] lg:w-[48%]">
              <Image
                src="/images/girl-with-mobile.png"
                alt="Indian business woman managing wallet payments"
                fill
                sizes="(min-width: 1024px) 46vw, 78vw"
                className="object-contain object-bottom"
              />
            </div>

            <div className="absolute right-8 top-28 z-20 grid gap-4 sm:right-20 lg:right-[30%] lg:top-16">
              <WalletAmountCard
                icon="₹"
                label="Transfer"
                amount="₹230,000.00"
              />
              <WalletAmountCard icon="₹" label="Balance" amount="₹480,000.00" />
            </div>
          </Card>

          <Card className="relative min-h-[760px] overflow-hidden rounded-xl bg-[#0A2534] p-8 text-white sm:min-h-[840px] sm:p-12 lg:min-h-[700px]">
            <div className="relative z-20 max-w-sm">
              <h3 className="text-4xl font-medium tracking-tight">Capital</h3>
              <p className="mt-4 text-lg leading-8 text-white/70">
                Use payment activity and transaction visibility to understand
                your working capital needs.
              </p>
              <ServiceLearnButton />
            </div>

            <Image
              src="/images/girl-with-laptop.png"
              alt="Indian business woman reviewing business capital on laptop"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="z-0 object-contain object-bottom"
            />

            <div className="absolute bottom-8 left-1/2 z-20 w-[280px] -translate-x-1/2 bg-white p-5 text-[#062E25] shadow-[0_18px_45px_rgba(2,44,34,0.18)] sm:left-10 sm:w-[320px] sm:translate-x-0 rounded-lg">
              <p className="text-sm font-semibold">How much do you need?</p>
              <div className="mt-4 rounded-lg border border-[#DDE8DF] px-4 py-3 text-sm font-semibold">
                <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded bg-[#22C55E] text-[10px] text-white">
                  ₹
                </span>
                ₹143,000.00
              </div>
              <div className="mt-5 h-2 rounded-full bg-[#EEF6EA]">
                <div className="h-2 w-1/2 rounded-full bg-[#22A534]" />
              </div>
            </div>
          </Card>

          <Card className="relative min-h-[760px] overflow-hidden rounded-xl bg-[#004A44] p-8 text-white sm:min-h-[840px] sm:p-12 lg:min-h-[700px]">
            <div className="relative z-20 max-w-sm">
              <h3 className="text-4xl font-medium tracking-tight">Platforms</h3>
              <p className="mt-4 text-lg leading-8 text-white/70">
                Embed Pentacore collections, split payouts, and account-level
                money movement inside your platform.
              </p>
              <ServiceLearnButton />
            </div>

            <Image
              src="/images/boy-girl.png"
              alt="Indian platform operators managing split payouts"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="z-0 object-contain object-bottom"
            />

            <div className="absolute bottom-10 left-8 z-20 grid grid-cols-2 gap-4 sm:left-14">
              {["Child account 1", "Child account 2"].map((item, index) => (
                <div
                  key={item}
                  className="w-[155px] rounded-lg bg-white px-4 py-3 text-[#062E25] shadow-[0_14px_34px_rgba(2,44,34,0.14)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EEF6EA] text-sm font-bold text-[#22A534]">
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{item}</p>
                      <p className="text-xs text-[#6B7D74]">
                        {index === 0 ? "5%" : "12%"} of net
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export function ApiPreview() {
  return (
    <section className="bg-[#FAFAF3] py-20 sm:py-24">
      <Container>
        <SectionIntro
          title={<>Pentacore APIs that move as fast as your business</>}
          description="Create orders, accept UPI and card payments, automate payouts, verify webhooks, and sync transaction status in real time."
        />

        <div className="mx-auto mt-14 grid items-center gap-6 lg:grid-cols-[0.8fr_1fr_0.8fr]">
          <div className="rounded-xl bg-[#052E25] p-5 shadow-[0_28px_80px_rgba(2,44,34,0.2)]">
            <p className="mb-4 inline-flex rounded-full bg-[#BAD24A] px-3 py-1 text-xs font-bold text-[#062E25]">
              Pentacore API
            </p>
            <pre className="overflow-x-auto text-xs leading-6 text-[#B7D0C6]">
              <code>{`require "pentacore"

payment = Pentacore.create({
  amount: 249900,
  currency: "INR",
  method: "upi"
})

webhook.verify(payload)`}</code>
            </pre>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-xl bg-[#EEF6EA]">
            <Image
              src="/images/api-infrastructure.png"
              alt="Indian professional reviewing API payments"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid gap-4">
            <Card className="p-5 shadow-soft">
              <p className="text-xs font-bold text-[#6B7D74]">
                Pentacore setup
              </p>
              <div className="mt-4 space-y-3">
                {["Sandbox keys", "Live payins", "Webhook retries"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-semibold text-[#062E25]">
                        {item}
                      </span>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                    </div>
                  ),
                )}
              </div>
            </Card>
            <Card className="p-5 shadow-soft">
              <p className="text-xs font-bold text-[#6B7D74]">
                Pentacore activity
              </p>
              {["Payment captured", "Settlement queued", "Payout sent"].map(
                (status, index) => (
                <div
                  key={index}
                  className="mt-3 flex items-center justify-between text-sm"
                >
                  <span className="text-[#062E25]">
                    Flow #{812 + index}
                  </span>
                  <span className="rounded-full bg-[#EEF6EA] px-3 py-1 text-xs font-bold text-[#0B4A3A]">
                    {status}
                  </span>
                </div>
                ),
              )}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FintechSecurity() {
  return (
    <section id="security" className="bg-[#FAFAF3] pt-6 pb-20 sm:pb-24">
      <Container>
        <SectionIntro
          title="Pentacore security for payment operations"
          description="Protect every collection, payout, API event, and settlement workflow with controls built for Indian payment teams."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {securityFeatures.map((feature) => (
            <Card key={feature.title} className="p-6 shadow-sm">
              <RiShieldCheckLine className="h-8 w-8 text-[#22C55E]" />
              <h3 className="mt-5 text-lg font-bold text-[#062E25]">
                {feature.title}
              </h3>
              <Para className="mt-3 text-sm">{feature.text}</Para>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function IndustryTrust() {
  return (
    <section className="relative overflow-hidden bg-[#063F32] py-24 text-white">
      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          {portraits.map((src, index) => (
            <div
              key={src}
              className="absolute hidden h-16 w-16 overflow-hidden rounded-full border-4 border-[#BAD24A]/40 shadow-xl md:block"
              style={{
                left: `${index % 2 === 0 ? -8 - index * 3 : 88 + index * 2}%`,
                top: `${10 + (index % 3) * 28}%`,
              }}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
          <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
            Trusted by{" "}
            <span className="text-[#BAD24A]">Indian business teams</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#B7D0C6]">
            Merchants, platforms, and service businesses use Pentacore to
            collect payments, automate payouts, and reconcile money movement.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="pricing" className="bg-[#FAFAF3] py-20">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-[#063F32] px-6 py-16 text-center text-white shadow-[0_28px_80px_rgba(2,44,34,0.18)] sm:px-12">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Start building with Pentacore payments today
            </h2>
            <div className="mt-8 flex justify-center">
              <LinkButton
                href="/contact"
                variant="outline"
                className="rounded-lg bg-white text-[#062E25] hover:bg-white/80"
              >
                Get Started
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
