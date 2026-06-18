"use client";

import { useState, useEffect } from "react";
import {
  RiBankCardLine,
  RiBarChartGroupedLine,
  RiCheckLine,
  RiFingerprintLine,
  RiFlashlightLine,
  RiShieldCheckLine,
  RiArrowRightSLine,
  RiWallet3Line,
  RiBankLine,
  RiShoppingCartLine,
  RiRouteLine,
} from "@remixicon/react";

import { Container, SectionHeading } from "@/components/shared";
import { cn } from "@/lib/utils";
import Image from "next/image";

const features = [
  {
    icon: RiFlashlightLine,
    title: "Blazing Fast Payments",
    description:
      "Deliver a smooth checkout experience with fast UPI and online payment flows, built for quick confirmations and better customer experience.",
  },
  {
    icon: RiBankCardLine,
    title: "Multiple Ways to Pay",
    description:
      "Support UPI, cards, net banking, and popular payment options so your customers always have a convenient way to complete payments.",
  },
  {
    icon: RiBarChartGroupedLine,
    title: "Industry-leading success rates",
    description:
      "Improve payment reliability with smart routing, operational visibility, and better transaction handling across supported channels.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Enterprise-Level Security",
    description:
      "Protect every transaction with secure authentication, webhook verification, controlled access, and merchant-grade payment safeguards.",
  },
];

function FastPaymentsVisual() {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-3xl p-4">
      {/* Animated gradient orbs */}
      <div className="absolute -left-12 top-12 h-48 w-48 rounded-full bg-white/15 blur-3xl animate-pulse" />
      <div
        className="absolute -right-12 bottom-12 h-56 w-56 rounded-full bg-white/10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative mx-auto mt-6 max-w-sm rounded-[3rem] border-[12px] border-slate-900 bg-white p-4 shadow-2xl">
        <div className="overflow-hidden rounded-[2.5rem] bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-4">
            <span className="text-sm font-bold text-slate-800">3:22</span>
            <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-sm">
              ✓ Secure
            </span>
          </div>

          <div className="bg-gradient-to-br rounded-xl from-mint-500 to-navy-900 px-6 py-8 text-white">
            <p className="text-xs font-semibold text-white/80 tracking-wider">
              PENTACORE CHECKOUT
            </p>
            <h3 className="mt-3 text-2xl font-black leading-tight">
              E-commerce Store
            </h3>
            <p className="mt-2 text-sm text-white/80 font-medium">
              UPI • Cards • Net Banking
            </p>
          </div>

          <div className="px-6 pb-8 pt-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg">
              <RiCheckLine className="h-8 w-8 text-white" />
            </div>

            <p className="mt-6 text-3xl font-black text-slate-900">₹1,530.00</p>
            <p className="mt-2 text-base font-semibold text-emerald-700">
              Paid Successfully
            </p>
            <p className="mt-1 text-xs text-slate-400 font-medium">
              Payment completed in 2 seconds
            </p>

            <div className="mt-8 space-y-3">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-left">
                <p className="text-xs text-slate-600 font-semibold">STATUS</p>
                <p className="mt-1.5 text-sm font-bold text-emerald-700">
                  ✓ Success
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left">
                <p className="text-xs text-slate-600 font-semibold">
                  SETTLEMENT
                </p>
                <p className="mt-1.5 text-sm font-bold text-slate-800">
                  Tracked & Instant
                </p>
              </div>
            </div>

            <p className="mt-8 text-xs font-bold tracking-widest text-slate-400 uppercase">
              Secured by Pentacore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentOptionsVisual() {
  const upiMethods = [
    {
      name: "PhonePe",
      logo: "/phonepe.png",
      className: "bg-purple-100 text-purple-700",
    },
    {
      name: "GPay",
      logo: "/gpay.png",
      className: "bg-blue-100 text-blue-600",
    },
    {
      name: "Paytm",
      logo: "/paytm.png",
      className: "bg-sky-100 text-sky-700",
    },
    {
      name: "UPI",
      logo: "/bhim.png",
      className: "bg-emerald-100 text-emerald-700",
    },
  ];

  const paymentOptions = [
    {
      title: "Card",
      icon: RiBankCardLine,
    },
    {
      title: "Wallet",
      icon: RiWallet3Line,
    },
    {
      title: "Net Banking",
      icon: RiBankLine,
    },
  ];

  return (
    <div className="relative h-[500px] overflow-hidden rounded-3xl p-4 sm:p-8">
      <div className="relative mx-auto max-w-[430px] overflow-hidden rounded-[2rem] border border-white/40 bg-white/95 p-6 shadow-2xl backdrop-blur-xl">
        <h3 className="text-lg font-semibold tracking-tight text-slate-950">
          Payment Method Options
        </h3>

        <div className="mt-5 rounded-2xl bg-[#2d3148] px-4 py-4 text-white shadow-lg">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                <RiBankCardLine className="h-5 w-5 text-white" />
              </div>

              <div>
                <p className="text-base font-bold leading-none">
                  Your Credit Card
                </p>
                <span className="mt-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90">
                  No CVV Required
                </span>
              </div>
            </div>

            <span className="shrink-0 text-base font-black tracking-wide text-white">
              •••• 8080
            </span>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-4 gap-3">
            {upiMethods.map((method) => (
              <div key={method.name} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src={method.logo}
                    alt={method.name}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                </div>

                <p className="mt-3 text-sm font-bold leading-5 text-slate-900">
                  {method.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {paymentOptions.map((option) => {
            const Icon = option.icon;

            return (
              <button
                key={option.title}
                type="button"
                className="flex w-full items-center justify-between border-b border-dashed border-slate-200 px-5 py-4 text-left last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <Icon className="h-6 w-6 text-rose-700" />
                  <span className="text-base font-bold text-slate-900">
                    {option.title}
                  </span>
                </div>

                <RiArrowRightSLine className="h-6 w-6 text-slate-900" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SuccessRatesVisual() {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-3xl p-6">
      <div className="relative mx-auto flex h-full max-w-[430px] flex-col items-center justify-center">
        {/* Top source */}
        <div className="relative z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg">
          <RiShoppingCartLine className="h-8 w-8 text-slate-800" />
        </div>

        {/* Top vertical animated line */}
        <div className="relative h-14 w-[2px] overflow-hidden bg-slate-200">
          <div
            className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]"
            style={{ animation: "travelDown 2s linear infinite" }}
          />
        </div>

        {/* Center hub */}
        <div className="relative z-20 flex h-28 w-28 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xl">
          <RiRouteLine className="h-10 w-10 text-[hsl(var(--primary))]" />
        </div>

        {/* Bottom vertical animated line */}
        <div className="relative h-16 w-[2px] overflow-hidden bg-slate-200">
          <div
            className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]"
            style={{ animation: "travelDown 2s linear infinite 0.4s" }}
          />
        </div>

        {/* Horizontal animated line */}
        <div className="relative mt-1 h-[2px] w-[280px] bg-slate-200">
          <div
            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[hsl(var(--primary))]"
            style={{ animation: "travelAcross 2.4s linear infinite" }}
          />
        </div>

        {/* Bottom cards */}
        <div className="relative z-20 mt-5 grid w-full grid-cols-3 gap-4 px-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
              <RiBankLine className="h-5 w-5 text-slate-700" />
            </div>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
              Bank A
            </p>
            <p className="mt-1 text-sm font-black text-slate-900">Live</p>
          </div>

          <div className="rounded-2xl border-2 border-[hsl(var(--primary))] bg-white p-4 text-center shadow-sm">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
              <RiFlashlightLine className="h-5 w-5 text-[hsl(var(--primary))]" />
            </div>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
              Smart Route
            </p>
            <p className="mt-1 text-sm font-black text-[hsl(var(--primary))]">
              Highest SR
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
              <RiBankLine className="h-5 w-5 text-slate-700" />
            </div>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
              Bank B
            </p>
            <p className="mt-1 text-sm font-black text-slate-900">Live</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes travelDown {
          0% {
            top: -8px;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes travelAcross {
          0% {
            left: -6px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            left: calc(100% - 6px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

function SecurityVisual() {
  const badges = [
    {
      label: "PCI DSS",
      className: "left-4 top-16",
    },
    {
      label: "Risk Controls",
      className: "right-4 top-16",
    },
    {
      label: "RBI Ready",
      className: "left-4 bottom-16",
    },
    {
      label: "Webhook Security",
      className: "right-4 bottom-16",
    },
  ];

  return (
    <div className="relative h-[500px] overflow-hidden rounded-3xl p-6">
      <div className="relative mx-auto h-full max-w-[430px]">
        {/* Animated connector lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 430 500"
          fill="none"
        >
          <path
            d="M215 250 C150 210, 115 135, 80 95"
            className="security-line"
          />
          <path
            d="M215 250 C280 210, 315 135, 350 95"
            className="security-line security-line-delay-1"
          />
          <path
            d="M215 250 C150 290, 115 365, 80 405"
            className="security-line security-line-delay-2"
          />
          <path
            d="M215 250 C280 290, 315 365, 350 405"
            className="security-line security-line-delay-3"
          />
        </svg>

        {/* Center security card */}
        <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="relative flex h-44 w-44 items-center justify-center rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <div className="absolute inset-4 rounded-[1.5rem] border border-slate-100" />

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50">
              <RiFingerprintLine className="h-14 w-14 text-[hsl(var(--primary))]" />
            </div>
          </div>

          <div className="mt-5 rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
              Secure Processing
            </p>
          </div>
        </div>

        {/* Badge cards */}
        {badges.map((badge) => (
          <div
            key={badge.label}
            className={cn(
              "absolute z-30 w-[145px] rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center shadow-sm",
              badge.className,
            )}
          >
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
              <RiShieldCheckLine className="h-5 w-5 text-[hsl(var(--primary))]" />
            </div>

            <p className="text-sm font-black text-slate-900">{badge.label}</p>
          </div>
        ))}
      </div>

      <style>{`
        .security-line {
          stroke: hsl(var(--primary));
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 8 12;
          stroke-dashoffset: 80;
          opacity: 0.75;
          animation: securityLineMove 2.8s linear infinite;
        }

        .security-line-delay-1 {
          animation-delay: 0.25s;
        }

        .security-line-delay-2 {
          animation-delay: 0.5s;
        }

        .security-line-delay-3 {
          animation-delay: 0.75s;
        }

        @keyframes securityLineMove {
          from {
            stroke-dashoffset: 90;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}

function FeatureVisual({ activeIndex }: { activeIndex: number }) {
  if (activeIndex === 0) return <FastPaymentsVisual />;
  if (activeIndex === 1) return <PaymentOptionsVisual />;
  if (activeIndex === 2) return <SuccessRatesVisual />;
  return <SecurityVisual />;
}

export function Features() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate features
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % features.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleFeatureClick = (index: number) => {
    setActiveFeatureIndex(index);
    setIsAutoPlaying(false); // Pause autoplay on manual interaction
  };

  return (
    <section id="features" className="bg-[hsl(var(--background))]">
      <Container>
        <SectionHeading
          label="Why Pentacore?"
          title="Best Payment Gateway for Fast, Secure & Seamless Payments"
          description=" Experience industry-leading payment processing with enterprise-grade
            security and the highest success rates in the market."
        />
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual Section */}
          <div className="relative hidden md:block">
            <FeatureVisual activeIndex={activeFeatureIndex} />
          </div>

          {/* Features List */}
          <div className="space-y-4 lg:space-y-0">
            {features.map((feature, index) => {
              const isActive = activeFeatureIndex === index;

              return (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => handleFeatureClick(index)}
                  className={cn(
                    "group w-full rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300",
                    "lg:rounded-none lg:border-x-0 lg:border-t-0 lg:bg-transparent lg:px-6 lg:py-7 lg:shadow-none",
                    isActive
                      ? "border-[hsl(var(--primary))]/50 bg-emerald-50/40 shadow-md lg:border-emerald-200 lg:bg-transparent lg:shadow-none"
                      : "hover:border-slate-300 hover:shadow-md lg:hover:bg-slate-50 lg:hover:shadow-none",
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3
                          className={cn(
                            "text-lg font-bold leading-tight transition-colors duration-300 sm:text-xl",
                            isActive
                              ? "text-[hsl(var(--foreground))]"
                              : "text-slate-800 group-hover:text-slate-900",
                          )}
                        >
                          {feature.title}
                        </h3>

                        <span
                          className={cn(
                            "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition lg:hidden",
                            isActive
                              ? "bg-[hsl(var(--primary))] text-white"
                              : "bg-slate-100 text-slate-500",
                          )}
                        >
                          <RiArrowRightSLine
                            className={cn(
                              "h-5 w-5 transition-transform duration-300",
                              isActive && "rotate-90",
                            )}
                          />
                        </span>
                      </div>

                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          isActive
                            ? "mt-3 max-h-40 opacity-100"
                            : "max-h-0 opacity-0",
                        )}
                      >
                        <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
