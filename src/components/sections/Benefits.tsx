import { RiCheckboxCircleLine } from "@remixicon/react";

import { Card, Container, Para, SectionHeading } from "@/components/shared";

const benefits = [
  "Higher payment success rate with smart failover routing",
  "Faster merchant onboarding and cleaner KYC workflow",
  "Unified payin, payout, refund, wallet, and settlement visibility",
  "Simple pricing, clean reporting, and operational support",
  "Webhook-driven automation for real-time status updates",
  "Responsive dashboard built for finance and support teams",
];

export function Benefits() {
  return (
    <section className="pt-10 pb-20">
      <Container>
        <SectionHeading
          label="Merchant benefits"
          title="Built to help merchants grow without payment friction."
          description="From signup to first payment, Pentacore keeps the payment experience fast, stable, and easy to manage."
        />
        <Card className="mt-12 grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 lg:p-8">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex gap-3 rounded-2xl bg-surface p-4"
            >
              <RiCheckboxCircleLine className="mt-1 h-5 w-5 shrink-0 text-mint-500" />
              <Para className="font-medium text-ink">{benefit}</Para>
            </div>
          ))}
        </Card>
      </Container>
    </section>
  );
}
