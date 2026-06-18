import Image from "next/image";

import { Container, LinkButton, Para } from "@/components/shared";

function FloatingCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute rounded-xl bg-white p-4 text-[#062E25] shadow-[0_18px_45px_rgba(2,44,34,0.18)] ${className}`}
    >
      {children}
    </div>
  );
}

function RevenueChart() {
  return (
    <svg viewBox="0 0 160 90" className="mt-3 h-20 w-full text-[#BAD24A]">
      <path
        d="M8 76 C 28 58, 34 43, 54 48 S 78 58, 96 36 S 120 35, 152 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] sm:max-w-[650px] lg:mr-[-4vw] lg:max-w-[760px] xl:mr-[-2vw] xl:max-w-[830px]">
      <Image
        src="/images/hero-collage-image.png"
        alt="Indian business owners using Pentacore payment tools"
        fill
        sizes="(min-width: 1024px) 52vw, 92vw"
        className="object-contain drop-shadow-2xl"
        priority
      />

      {/* <FloatingCard className="right-[10%] top-[9%] hidden w-48 sm:block">
        <p className="text-xs font-semibold text-[#6B7D74]">Your Balance</p>
        <p className="mt-1 text-xl font-bold">₹102,199.00</p>
      </FloatingCard>

      <FloatingCard className="left-[4%] top-[30%] hidden w-40 bg-[#052E25] text-[#B7D0C6] sm:block">
        <p className="font-mono text-[11px] leading-5">
          require &apos;payments&apos;
          <br />
          method: &apos;upi&apos;
          <br />
          currency: INR
        </p>
      </FloatingCard>

      <FloatingCard className="left-[10%] top-[49%] flex items-center gap-3 px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E] text-white">
          ✓
        </span>
        <span className="text-sm font-bold sm:text-base">Payment Successful</span>
      </FloatingCard>

      <FloatingCard className="right-[2%] top-[53%] hidden w-56 sm:block">
        <p className="text-sm font-bold">Transactions</p>
        {[
          ["₹20,000", "Bank Transfer"],
          ["₹12,112", "E-wallet"],
          ["₹8,700", "UPI"],
          ["₹1,299", "QR"],
        ].map(([amount, method]) => (
          <div
            key={amount}
            className="mt-3 flex items-center justify-between border-b border-slate-100 pb-2 last:border-b-0"
          >
            <span className="text-sm font-bold text-[#33852f]">{amount}</span>
            <span className="text-xs text-[#6B7D74]">{method}</span>
          </div>
        ))}
      </FloatingCard>

      <FloatingCard className="bottom-[7%] left-[39%] hidden w-36 bg-[#052E25] text-white sm:block">
        <p className="text-sm font-bold">Revenue ↑</p>
        <RevenueChart />
      </FloatingCard> */}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#06251d] py-16 sm:py-20 lg:min-h-[calc(100vh-4rem)] lg:py-0 xl:min-h-[calc(100vh-4.6rem)]">
      <Image
        src="/images/pentacore-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#06251d]/35" />

      <Container className="relative z-10 flex min-h-[inherit] items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <h1 className="text-3xl font-medium leading-normal text-white lg:text-4xl lg:leading-normal xl:text-5xl xl:leading-normal">
              <span className="text-[#effc7c]">Powerful payment tools</span> for
              fast-growing Indian businesses
            </h1>
            <Para className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl sm:leading-9 lg:mx-0">
              Accept payments, manage transactions, automate payouts, and grow
              your business with one simple fintech platform.
            </Para>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <LinkButton
                href="/contact"
                variant="outline"
                size="lg"
                className="h-14 min-w-[200px] rounded-xl border-white bg-white text-base font-semibold text-[#213f36] hover:bg-[#effc7c] sm:h-16 sm:min-w-[220px] sm:text-lg"
              >
                Sign Up For Free
              </LinkButton>
              <LinkButton
                href="/contact"
                variant="ghost"
                size="lg"
                className="h-14 min-w-[180px] rounded-xl text-base font-semibold text-white/65 hover:bg-white/10 hover:text-white sm:h-16 sm:min-w-[200px] sm:text-lg"
              >
                Contact Sales
              </LinkButton>
            </div>
          </div>

          <HeroCollage />
        </div>
      </Container>
    </section>
  );
}
