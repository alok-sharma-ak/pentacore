"use client";

import { useEffect, useRef } from "react";
import {
  RiDoubleQuotesL,
  RiShieldCheckLine,
  RiStarFill,
} from "@remixicon/react";

import { Container, Para, SectionHeading } from "@/components/shared";

const testimonials = [
  {
    name: "Rahul Sharma",
    quote:
      "We were processing payments through multiple providers. With Pentacore, success rates improved from day one and reconciliation became much easier for our finance team.",
  },
  {
    name: "Priya Verma",
    quote:
      "The dashboard gives us complete visibility of payins, payouts, settlements, and merchant activity. It saves our operations team hours every week.",
  },
  {
    name: "Amit Kapoor",
    quote:
      "Pentacore helped us move money faster while keeping transaction records clean, traceable, and audit-ready. Our reconciliation process is now much more structured.",
  },
  {
    name: "Neha Singh",
    quote:
      "Before Pentacore, tracking failed payments and payout status was a manual task. Now our team can monitor every transaction clearly from one place.",
  },
  {
    name: "Vikram Mehta",
    quote:
      "Pentacore gave us a reliable payment setup for high-volume transactions. The payin and payout flows are simple, fast, and easy for our team to manage.",
  },
  {
    name: "Ananya Rao",
    quote:
      "The API integration was smooth and the transaction status updates helped us improve our customer experience. Pentacore feels built for growing fintech businesses.",
  },
  {
    name: "Rohit Malhotra",
    quote:
      "We needed a payment platform that could support quick collections, merchant payouts, and clean reporting. Pentacore delivered exactly what we needed.",
  },
  {
    name: "Sneha Iyer",
    quote:
      "Settlement tracking is much simpler now. Our finance team can review transaction details, payout records, and payment status without depending on multiple systems.",
  },
  {
    name: "Karan Gupta",
    quote:
      "For a business like ours, payment speed and reliability are very important. Pentacore helped us manage collections and payouts with better control.",
  },
  {
    name: "Meera Nair",
    quote:
      "Pentacore made our payment operations more transparent. The team can quickly check transaction history, merchant activity, and settlement information whenever needed.",
  },
];

export function MerchantStories() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);

  const scrollingTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    let animationFrameId: number;

    const autoScroll = () => {
      if (!isPausedRef.current) {
        scrollContainer.scrollLeft += 0.7;

        const halfScrollWidth = scrollContainer.scrollWidth / 2;

        if (scrollContainer.scrollLeft >= halfScrollWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      id="merchant-stories"
      className="relative overflow-hidden bg-white/60 py-10"
    >
      <Container>
        <div className="relative">
          <SectionHeading
            label="Merchant stories"
            title="Trusted by Growing Businesses Across India"
            description="Merchants, platforms, and service businesses use Pentacore to manage payins, payouts, settlements, and payment visibility from one place."
          />

          <div className="relative mt-14">
            <div
              ref={scrollRef}
              onMouseEnter={() => {
                isPausedRef.current = true;
              }}
              onMouseLeave={() => {
                isPausedRef.current = false;
              }}
              className="overflow-x-auto pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex w-max gap-6 px-1">
                {scrollingTestimonials.map((item, index) => (
                  <article
                    key={`${item.name}-${index}`}
                    className="group relative w-[300px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-[hsl(var(--primary))]/40 hover:shadow-lg sm:w-[340px] lg:w-[380px] xl:w-[420px]"
                  >
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-emerald-50 transition group-hover:bg-emerald-100" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <div className="flex gap-1 text-[hsl(var(--primary))]">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <RiStarFill key={starIndex} className="h-4 w-4" />
                          ))}
                        </div>

                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-[hsl(var(--primary))]">
                          <RiShieldCheckLine className="h-4 w-4" />
                          Verified Merchant
                        </div>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--primary))] text-white shadow-md">
                        <RiDoubleQuotesL className="h-6 w-6" />
                      </div>
                    </div>

                    <Para className="mt-4">“{item.quote}”</Para>

                    <div className="relative mt-5 flex items-center gap-4 border-t border-slate-100 pt-5">
                      <div>
                        <h3 className="text-base font-medium text-slate-950">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
