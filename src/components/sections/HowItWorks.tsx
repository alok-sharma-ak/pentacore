"use client";

import Image from "next/image";

import { Container, LinkButton, SectionHeading } from "@/components/shared";

const steps = [
  {
    label: "STEP 01",
    title: "Create Your Account",
    description:
      "Sign up with your business details and complete a simple onboarding flow to get started with Pentacore.",
    imageUrl: "/step1.png",
    points: [
      "Quick business onboarding",
      "Merchant dashboard access",
      "Secure account setup",
    ],
    cta: "Create Account",
  },
  {
    label: "STEP 02",
    title: "Integrate Our API",
    description:
      "Connect your website, app, or backend system using clean APIs, webhook callbacks, and developer-friendly documentation.",
    imageUrl: "/step2.png",
    points: [
      "Payin and payout APIs",
      "Webhook event support",
      "Sandbox testing flow",
    ],
    cta: "View Integration",
  },
  {
    label: "STEP 03",
    title: "Start Processing Payments",
    description:
      "Accept UPI and online payments, manage payouts, and track every transaction from one simple platform.",
    imageUrl: "/step3.png",
    points: [
      "UPI payment collection",
      "Payout and settlement support",
      "Real-time transaction status",
    ],
    cta: "Start Processing",
  },
  {
    label: "STEP 04",
    title: "Monitor & Optimize",
    description:
      "Use reports, transaction visibility, and payment insights to monitor performance and improve business operations.",
    imageUrl: "/step4.png",
    points: [
      "Live payment dashboard",
      "Success rate tracking",
      "Settlement and report visibility",
    ],
    cta: "Explore Dashboard",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works">
      <Container>
        <SectionHeading
          label="How it works"
          title="From Signup to First Payment in Hours"
          description="No complex onboarding. No weeks of waiting. Start accepting payments and managing payouts quickly."
        />

        <div className="relative mt-12 space-y-10 pb-[20vh]">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="sticky top-6 md:top-20"
              style={{
                zIndex: index + 1,
                transform: `translateY(${index * 14}px)`,
              }}
            >
              <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm lg:p-10">
                <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.28em] text-slate-500">
                      {step.label}
                    </p>

                    <h3 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                      {step.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                      {step.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {step.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full bg-emerald-50 px-5 py-3 text-sm font-bold text-[hsl(var(--primary))]"
                        >
                          {point}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8">
                      <LinkButton href="/contact" size="lg">
                        {step.cta}
                      </LinkButton>
                    </div>
                  </div>

                  <div className="hidden md:block overflow-hidden rounded-[2rem]">
                    <Image
                      src={step.imageUrl}
                      alt={step.title}
                      width={1000}
                      height={760}
                      className="h-[300px] w-full object-contain sm:h-[420px] lg:h-[520px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
