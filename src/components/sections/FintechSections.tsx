import Image from "next/image";
import {
  RiArrowRightLine,
  RiBankCardLine,
  RiCodeSSlashLine,
  RiDashboard3Line,
  RiLinkM,
  RiQrCodeLine,
  RiShieldCheckLine,
  RiWallet3Line,
  RiExchangeLine,
} from "@remixicon/react";

import { Card, Container, LinkButton, Para } from "@/components/shared";

const accent = "#BAD24A";

const trustedLogos = [
  "ZyraPay",
  "BharatMart",
  "QuickKart",
  "DilliFoods",
  "UPIHub",
  "FinEdge",
  "TradeSetu",
  "NovaRetail",
];

const productCards = [
  {
    title: "Payment Links",
    description:
      "Collect payments instantly through secure links, UPI, cards, and wallets.",
    preview: "link",
  },
  {
    title: "Pages",
    description:
      "Create branded checkout pages for campaigns, invoices, and online stores.",
    preview: "page",
  },
  {
    title: "Plug-Ins",
    description:
      "Integrate Pentacore with your ecommerce stack and start accepting payments faster.",
    preview: "plugin",
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
    description: "Give teams live visibility across payins, payouts, and refunds.",
  },
];

const securityFeatures = [
  {
    title: "Built for secure transactions",
    text: "Protect UPI, card, and payout workflows with monitoring, access controls, and clean status trails.",
  },
  {
    title: "Encrypted communication",
    text: "Keep payment events, KYC data, API requests, and webhook payloads protected in transit.",
  },
  {
    title: "Secure-by-design integrations",
    text: "Use signed webhooks, scoped keys, role-based access, and traceable dashboard actions.",
  },
  {
    title: "India-ready compliance",
    text: "Support payment operations with transaction logs, merchant checks, payout records, and reviews.",
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

function LearnMoreButton() {
  return (
    <LinkButton
      href="/contact"
      variant="navy"
      size="sm"
      className="mt-6 rounded-lg"
    >
      Learn More
    </LinkButton>
  );
}

function ProductPreview({ type }: { type: string }) {
  if (type === "page") {
    return (
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        {["Course checkout", "D2C campaign", "Invoice page"].map(
          (item, index) => (
            <div
              key={item}
              className="flex items-center justify-between border-b border-dashed border-slate-200 py-3 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF6EA] text-xs font-bold text-[#0B4A3A]">
                  {index + 1}
                </span>
                <span className="text-xs font-semibold text-[#062E25]">
                  {item}
                </span>
              </div>
              <span className="text-xs font-bold text-[#0B4A3A]">₹{(index + 1) * 799}</span>
            </div>
          ),
        )}
      </div>
    );
  }

  if (type === "plugin") {
    return (
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <p className="text-2xl font-bold text-[#0B4A3A]">₹519.75</p>
        <p className="mt-1 text-xs text-[#6B7D74]">Cart ready for checkout</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {["UPI", "Cards", "Wallet", "Netbanking"].map((item) => (
            <span
              key={item}
              className="rounded-lg bg-[#EEF6EA] px-3 py-2 text-xs font-semibold text-[#062E25]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="rounded-xl bg-[#0B4A3A] p-4 text-white">
        <p className="text-xs text-white/70">Payment link</p>
        <p className="mt-2 text-lg font-bold">₹12,400.00</p>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-[#EEF6EA] px-3 py-2">
        <span className="text-xs font-semibold text-[#062E25]">upi.pentacore.in/r/7K2</span>
        <span className="h-3 w-3 rounded-full bg-[#22C55E]" />
      </div>
    </div>
  );
}

function MiniTransactionCard({
  label,
  amount,
}: {
  label: string;
  amount: string;
}) {
  return (
    <div className="rounded-xl bg-white px-4 py-3 text-[#062E25] shadow-lg">
      <p className="text-xs font-medium text-[#6B7D74]">{label}</p>
      <p className="mt-1 text-lg font-bold">{amount}</p>
    </div>
  );
}

export function TrustedBusinesses() {
  return (
    <section className="bg-[#FFFDF4] py-10">
      <Container>
        <p className="text-center text-sm font-semibold text-[#6B7D74]">
          Trusted by growing Indian businesses
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
    <section id="products" className="bg-[#FAFAF3] py-20 sm:py-24">
      <Container>
        <SectionIntro title="Your business, powered by smarter payments and finances" />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {productCards.map((product) => (
            <Card
              key={product.title}
              className="rounded-xl bg-[#EEF6EA] p-7 shadow-[0_18px_55px_rgba(2,44,34,0.08)]"
            >
              <h3 className="text-2xl font-bold text-[#062E25]">
                {product.title}
              </h3>
              <div className="mt-6">
                <ProductPreview type={product.preview} />
              </div>
              <Para className="mt-6 text-sm">{product.description}</Para>
              <LearnMoreButton />
            </Card>
          ))}
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platformProducts.map((product) => (
            <Card key={product.title} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#BAD24A] text-[#062E25]">
                <product.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#062E25]">
                {product.title}
              </h3>
              <Para className="mt-2 text-sm">{product.description}</Para>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FinancialServices() {
  return (
    <section className="bg-[#FFFDF4] py-20 sm:py-24">
      <Container>
        <SectionIntro title="Financial services for growing and managing your business" />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Card className="relative overflow-hidden rounded-xl bg-[#DDF95A] p-8 lg:col-span-2 lg:min-h-[420px]">
            <div className="relative z-10 max-w-md pt-8">
              <h3 className="text-3xl font-bold text-[#062E25]">Wallet</h3>
              <p className="mt-4 text-base leading-7 text-[#36564b]">
                Send and receive money to merchants, vendors, and teams
                instantly.
              </p>
              <LearnMoreButton />
            </div>
            <div className="relative mt-8 h-[310px] lg:absolute lg:bottom-0 lg:right-10 lg:mt-0 lg:w-[520px]">
              <Image
                src="/10114034.jpg"
                alt="Indian business woman managing wallet payments"
                fill
                className="rounded-t-[2rem] object-cover object-top"
              />
              <div className="absolute left-4 top-4 grid gap-3 sm:left-[-90px]">
                <MiniTransactionCard label="Sent to supplier" amount="₹230,000.00" />
                <MiniTransactionCard label="Cash in" amount="₹480,000.00" />
              </div>
            </div>
          </Card>

          <Card className="relative overflow-hidden rounded-xl bg-[#102A38] p-8 text-white lg:min-h-[410px]">
            <h3 className="text-2xl font-bold">Capital</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
              Fund your business with fast, flexible working capital.
            </p>
            <LearnMoreButton />
            <div className="mt-10 rounded-2xl bg-white p-5 text-[#062E25] shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-[#BAD24A] text-lg font-bold">
                  25%
                </div>
                <div>
                  <p className="text-xs text-[#6B7D74]">How much do you need?</p>
                  <p className="text-xl font-bold">₹5,00,000</p>
                  <div className="mt-3 h-2 w-40 rounded-full bg-[#EEF6EA]">
                    <div className="h-2 w-3/5 rounded-full bg-[#22C55E]" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="relative overflow-hidden rounded-xl bg-[#0B806A] p-8 text-white lg:min-h-[410px]">
            <h3 className="text-2xl font-bold">Platforms</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
              Offer financial services directly inside your platform.
            </p>
            <LearnMoreButton />
            <div className="absolute bottom-0 right-0 h-64 w-72 opacity-95">
              <Image
                src="/business-use-cases.png"
                alt="Indian business team using platform payments"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative z-10 mt-20 grid max-w-xs gap-3">
              <MiniTransactionCard label="Split payouts" amount="₹82,400" />
              <MiniTransactionCard label="GST-ready reports" amount="Live" />
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
          title={
            <>
              An API that moves <span className="text-[#3BA43B]">as fast as you do</span>
            </>
          }
          description="Build reliable payment experiences with developer-friendly APIs, webhooks, and real-time transaction status."
        />

        <div className="mx-auto mt-8 flex justify-center">
          <LinkButton href="/contact" variant="navy" className="rounded-lg">
            Learn More
          </LinkButton>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl items-center gap-6 lg:grid-cols-[0.8fr_1fr_0.8fr]">
          <div className="rounded-xl bg-[#052E25] p-5 shadow-[0_28px_80px_rgba(2,44,34,0.2)]">
            <p className="mb-4 inline-flex rounded-full bg-[#BAD24A] px-3 py-1 text-xs font-bold text-[#062E25]">
              API Routes
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
              src="/api-infrastructure.png"
              alt="Indian professional reviewing API payments"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid gap-4">
            <Card className="p-5 shadow-soft">
              <p className="text-xs font-bold text-[#6B7D74]">Configure API</p>
              <div className="mt-4 space-y-3">
                {["Sandbox", "Live payments", "Webhook retries"].map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#062E25]">
                      {item}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-5 shadow-soft">
              <p className="text-xs font-bold text-[#6B7D74]">Shop</p>
              {["Paid", "Paid", "Paid"].map((status, index) => (
                <div
                  key={index}
                  className="mt-3 flex items-center justify-between text-sm"
                >
                  <span className="text-[#062E25]">Order #{812 + index}</span>
                  <span className="rounded-full bg-[#EEF6EA] px-3 py-1 text-xs font-bold text-[#0B4A3A]">
                    {status}
                  </span>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FintechSecurity() {
  return (
    <section id="security" className="bg-[#FAFAF3] pb-20 sm:pb-24">
      <Container>
        <SectionIntro title="Trusted payments, secured by design" />

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
            Trusted by <span className="text-[#BAD24A]">industry leaders</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#B7D0C6]">
            Indian businesses use Pentacore to manage payments, payouts, and
            financial operations at scale.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="pricing" className="bg-[#FFFDF4] py-20">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-[#063F32] px-6 py-16 text-center text-white shadow-[0_28px_80px_rgba(2,44,34,0.18)] sm:px-12">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full border-[28px] border-[#BAD24A]/25" />
          <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full border-[30px] border-white/10" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Supercharge your business today with Pentacore
            </h2>
            <div className="mt-8 flex justify-center">
              <LinkButton
                href="/contact"
                variant="outline"
                className="rounded-lg border-white bg-white text-[#062E25] hover:bg-[#BAD24A]"
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
