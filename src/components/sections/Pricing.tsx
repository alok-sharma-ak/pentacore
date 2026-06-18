import { RiCheckboxCircleLine } from "@remixicon/react";

import {
  Card,
  Container,
  LinkButton,
  SectionHeading,
} from "@/components/shared";

const plans = [
  {
    name: "Pay As You Grow",
    price: "2%",
    text: "Simple pricing for businesses accepting online payments.",
    features: [
      "Payment collection API",
      "Real-time reporting",
      "Full API access",
      "Webhook support",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Payouts & Settlements",
    price: "1%",
    text: "For merchants who need smooth payout and settlement management.",
    features: [
      "Merchant payout management",
      "Settlement tracking",
      "Dedicated integration support",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Custom Requirements",
    price: "Custom",
    text: "For unique payment flows and high-volume operations.",
    features: [
      "Custom payment flows",
      "Dedicated account management",
      "SLA guarantees",
      "Advanced compliance features",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white/60 py-20">
      <Container>
        <SectionHeading
          label="Pricing"
          title="Simple, transparent pricing. No surprises."
          description="No monthly fees for getting started. Pay only for what your business processes."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.popular ? "relative border-mint-500 p-6" : "p-6"}
            >
              {plan.popular ? (
                <span className="absolute right-6 top-6 rounded-full bg-mint-50 px-3 py-1 text-xs font-bold text-mint-600">
                  Popular
                </span>
              ) : null}
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                {plan.name}
              </p>
              <h3 className="mt-5 text-4xl font-black text-navy-900">
                {plan.price}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {plan.text}
              </p>
              <div className="my-6 h-px bg-navy-900/10" />
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-medium text-ink"
                  >
                    <RiCheckboxCircleLine className="h-5 w-5 text-mint-500" />{" "}
                    {feature}
                  </li>
                ))}
              </ul>
              <LinkButton
                href="/contact"
                className="mt-8 w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.price === "Custom" ? "Contact sales" : "Get started"}
              </LinkButton>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
