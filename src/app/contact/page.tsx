import type { Metadata } from "next";
import {
  RiCodeSSlashLine,
  RiCustomerService2Line,
  RiShieldCheckLine,
} from "@remixicon/react";

import { Contact } from "@/components/sections";
import { Container } from "@/components/shared";

export const metadata: Metadata = {
  title: "Contact Pentacore | Talk to Our Payment Team",
  description:
    "Contact Pentacore to discuss payment gateway integration, UPI collections, QR payments, APIs, payouts, settlements, and platform payment workflows.",
};

const contactHighlights = [
  {
    icon: RiCustomerService2Line,
    title: "Business guidance",
    description:
      "Choose the Pentacore products and payment flows that fit your operations.",
  },
  {
    icon: RiCodeSSlashLine,
    title: "Integration support",
    description:
      "Discuss checkout, payment links, QR, APIs, webhooks, and platform requirements.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Clear onboarding",
    description:
      "Understand commercial terms, setup requirements, and the path to going live.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#FAFAF3] pb-16 sm:pb-20">
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0B806A]">
              Contact Pentacore
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-6xl">
              Let&apos;s build the right payment flow for your business.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5F756C] sm:text-lg">
              Tell us how you collect, track, and move money. Our team will help
              you explore the right Pentacore products, integration approach,
              and pricing plan.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {contactHighlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <div
                  key={highlight.title}
                  className="rounded-xl bg-white p-6 text-left shadow-[0_18px_50px_rgba(2,44,34,0.07)] ring-1 ring-[#DDE8DF]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#BCD54D]/25 text-[#154036]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold text-[#123D34]">
                    {highlight.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#5F756C]">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Contact />
    </main>
  );
}
