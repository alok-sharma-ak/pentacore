import Image from "next/image";

import { Container, LinkButton, Para } from "@/components/shared";

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
                className="h-14 min-w-[200px] rounded-xl bg-white text-base font-semibold text-[#154036] hover:bg-white/80 sm:h-16 sm:min-w-[220px] sm:text-lg"
              >
                Sign Up For Free
              </LinkButton>
              <LinkButton
                href="/contact"
                variant="navy"
                size="lg"
                className="h-14 min-w-[180px] rounded-xl bg-[#154036] text-base font-semibold text-white hover:bg-[#154036]/80 sm:h-16 sm:min-w-[200px] sm:text-lg"
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
