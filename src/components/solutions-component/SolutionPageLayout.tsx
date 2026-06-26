import Image from "next/image";
import {
  RiArrowDownSLine,
  RiArrowRightLine,
  RiBankCardLine,
  RiBarChartBoxLine,
  RiCheckLine,
  RiCodeSSlashLine,
  RiLinksLine,
  RiShieldCheckLine,
  RiWallet3Line,
} from "@remixicon/react";

import { Card, Container, FinalCta, LinkButton } from "@/components/shared";
import type { SolutionCard, SolutionPageContent } from "@/data/solutions";

const icons = {
  payment: RiBankCardLine,
  link: RiLinksLine,
  api: RiCodeSSlashLine,
  wallet: RiWallet3Line,
  shield: RiShieldCheckLine,
  insight: RiBarChartBoxLine,
};

export function SolutionPageLayout({ page }: { page: SolutionPageContent }) {
  return (
    <main className="bg-[#FAFAF3]">
      <SolutionHero page={page} />
      <SolutionCards
        title={page.challenges.title}
        description={page.challenges.description}
        cards={page.challenges.cards}
        imageUrl={page.challenges.imageUrl}
        imageAlt={page.challenges.imageAlt}
        tone="soft"
      />
      <SolutionCards
        title={page.capabilities.title}
        description={page.capabilities.description}
        cards={page.capabilities.cards}
        tone="white"
      />
      <SolutionWorkflow page={page} />
      <SolutionUseCases page={page} />
      <SolutionFaq page={page} />
      <FinalCta
        title={page.cta.title}
        description={page.cta.description}
        buttonText={page.cta.buttonText}
        buttonHref="/contact"
        className="py-16 sm:py-20"
      />
    </main>
  );
}

function SolutionHero({ page }: { page: SolutionPageContent }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0B806A]">
              {page.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#5F756C]">
              {page.hero.description}
            </p>
            <div className="mt-8">
              <LinkButton
                href="/contact"
                size="lg"
                className="h-14 min-w-[200px] rounded-xl bg-[#154036] text-base font-semibold text-white hover:bg-[#154036]/80 sm:h-16 sm:min-w-[220px] sm:text-lg"
              >
                {page.hero.cta}
                <RiArrowRightLine className="h-5 w-5" />
              </LinkButton>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-xl bg-[#DDF95A]">
            <Image
              src={page.hero.imageUrl}
              alt={page.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function SolutionCards({
  title,
  description,
  cards,
  imageUrl,
  imageAlt,
  tone,
}: {
  title: string;
  description: string;
  cards: SolutionCard[];
  imageUrl?: string;
  imageAlt?: string;
  tone: "soft" | "white";
}) {
  return (
    <section
      className={
        tone === "soft" ? "bg-[#fafaf3] py-16 sm:py-20" : "py-16 sm:py-20"
      }
    >
      <Container>
        <SectionIntro title={title} description={description} />
        <div
          className={
            cards.length === 3
              ? "mt-12 grid gap-5 md:grid-cols-3"
              : "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          }
        >
          {cards.map((card) => (
            <SolutionInfoCard key={card.title} card={card} />
          ))}
        </div>
        {imageUrl ? (
          <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-xl bg-[#DDF95A] shadow-[0_22px_70px_rgba(2,44,34,0.1)]">
            <Image
              src={imageUrl}
              alt={imageAlt ?? title}
              fill
              sizes="(min-width: 1024px) 80vw, 92vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function SolutionInfoCard({ card }: { card: SolutionCard }) {
  const Icon = icons[card.icon];

  return (
    <Card className="h-full p-7 shadow-[0_18px_55px_rgba(2,44,34,0.07)] ring-1 ring-[#DDE8DF]">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#BCD54D]/25 text-[#154036]">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-6 text-xl font-semibold text-[#123D34]">
        {card.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#5F756C]">
        {card.description}
      </p>
    </Card>
  );
}

function SolutionWorkflow({ page }: { page: SolutionPageContent }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 rounded-xl bg-[#154036] p-6 text-white shadow-[0_28px_80px_rgba(2,44,34,0.16)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#DDF95A]">
              {page.workflow.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {page.workflow.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#B7D0C6]">
              {page.workflow.description}
            </p>
            <ul className="mt-7 space-y-3">
              {page.workflow.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-6 text-white/85"
                >
                  <RiCheckLine className="mt-0.5 h-5 w-5 shrink-0 text-[#DDF95A]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#DDF95A]">
            <Image
              src={page.workflow.imageUrl}
              alt={page.workflow.imageAlt}
              fill
              sizes="(min-width: 1024px) 48vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function SolutionUseCases({ page }: { page: SolutionPageContent }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionIntro title={page.useCases.title} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {page.useCases.items.map((item, index) => (
            <Card
              key={item.title}
              className="grid grid-cols-[48px_1fr] gap-5 p-6 shadow-sm ring-1 ring-[#DDE8DF]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BCD54D]/25 font-semibold text-[#154036]">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[#123D34]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5F756C]">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SolutionFaq({ page }: { page: SolutionPageContent }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionIntro title={page.faqs.title} />
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-[#DDE8DF]">
          {page.faqs.items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-semibold text-[#123D34] sm:text-base">
                {item.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DDE8DF] transition group-open:rotate-180">
                  <RiArrowDownSLine className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5F756C]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SectionIntro({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F756C]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
