"use client";

import { useState } from "react";
import {
  RiAddLine,
  RiArrowRightLine,
  RiCustomerService2Line,
  RiQuestionAnswerLine,
  RiSubtractLine,
} from "@remixicon/react";

import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { LinkButton } from "./LinkButton";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  label?: string;
  title?: string;
  description?: string;
  items: FaqItem[];
  className?: string;
  showSupportCard?: boolean;
};

export function FaqSection({
  label = "FAQ",
  title = "Frequently asked questions",
  description = "Find quick answers to common questions about Pentacore, payments, onboarding, pricing, and support.",
  items,
  className,
  showSupportCard = true,
}: FaqSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className={cn("bg-white/60 pt-8 pb-20", className)}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-mint-100 bg-mint-50 px-4 py-2 text-sm font-bold text-mint-600">
              <RiQuestionAnswerLine className="h-4 w-4" />
              {label}
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
              {description}
            </p>

            {showSupportCard ? (
              <div className="mt-8 rounded-3xl bg-navy-900 p-6 text-white shadow-soft sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-500 text-white">
                  <RiCustomerService2Line className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Still have questions?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Talk to our team and get help with onboarding, API
                  integration, pricing, payins, payouts, and settlements.
                </p>

                <div className="mt-6">
                  <LinkButton href="/contact">
                    Contact support
                    <RiArrowRightLine className="h-4 w-4" />
                  </LinkButton>
                </div>
              </div>
            ) : null}
          </div>

          <div className="space-y-4">
            {items.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={item.question}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white shadow-soft transition-all duration-300",
                    isOpen
                      ? "border-mint-200 ring-4 ring-mint-500/10"
                      : "border-slate-200 hover:border-mint-100",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-ink sm:text-lg">
                      {item.question}
                    </span>

                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors",
                        isOpen
                          ? "bg-mint-500 text-white"
                          : "bg-surface text-slate-700",
                      )}
                    >
                      {isOpen ? (
                        <RiSubtractLine className="h-5 w-5" />
                      ) : (
                        <RiAddLine className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-slate-100 px-5 py-5 text-sm leading-7 text-slate-600 sm:px-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
