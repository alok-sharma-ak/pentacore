import Image from "next/image";
import { RiArrowRightLine } from "@remixicon/react";

import type { IndustryItem } from "@/data/industries";
import { Container, LinkButton, Para } from "@/components/shared";

type IndustryHeroProps = {
  industry: IndustryItem;
};

export function IndustryHero({ industry }: IndustryHeroProps) {
  return (
    <section className="relative py-6">
      <Container>
        <div className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10">
            <h1 className="max-w-3xl text-4xl font-black text-ink sm:text-5xl">
              {industry.headline}
            </h1>

            <Para className="mt-6 max-w-2xl">{industry.description}</Para>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/contact" size="lg">
                Start Integration <RiArrowRightLine className="h-5 w-5" />
              </LinkButton>
              <LinkButton href="/services" variant="outline" size="lg">
                Explore Services
              </LinkButton>
            </div>
          </div>
          <div className="relative hidden aspect-square w-full max-w-lg justify-center lg:block">
            <Image
              src={industry.imageUrl}
              alt={industry.label}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
