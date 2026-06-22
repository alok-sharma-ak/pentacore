import Image from "next/image";
import {
  RiArrowDownSLine,
  RiArrowRightLine,
  RiBankCardLine,
  RiCheckLine,
  RiFlashlightLine,
  RiLinkM,
  RiMessage2Line,
  RiStore2Line,
} from "@remixicon/react";

import { Card, Container, LinkButton } from "@/components/shared";
import type {
  ProductCardContent,
  ProductPageContent,
} from "@/data/product";

const cardIcons = {
  link: RiLinkM,
  message: RiMessage2Line,
  store: RiStore2Line,
  flash: RiFlashlightLine,
  bank: RiBankCardLine,
};

export function ProductPageLayout({ page }: { page: ProductPageContent }) {
  return (
    <main className="bg-[#FAFAF3]">
      <ProductHero page={page} />
      <ProductCardGrid
        title={page.problems.title}
        cards={page.problems.cards}
        tone="problem"
      />
      <ProductCardGrid
        title={page.benefits.title}
        cards={page.benefits.cards}
        tone="benefit"
      />
      <ProductOperations page={page} />
      <ProductSetup page={page} />
      <ProductUseCases page={page} />
      <ProductFaq page={page} />
      <ProductCta page={page} />
    </main>
  );
}

function ProductHero({ page }: { page: ProductPageContent }) {
  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#0B4A3A]">
              {page.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-6xl">
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
            <p className="mt-5 max-w-md text-xs leading-6 text-[#6B7D74]">
              {page.hero.footnote}
            </p>
          </div>

          <div className="relative mx-auto min-h-[420px] w-full max-w-[600px] overflow-hidden rounded-xl bg-[#DDF95A] sm:min-h-[630px]">
            <Image
              src={page.hero.imageUrl}
              alt={page.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProductCardGrid({
  title,
  cards,
  tone,
}: {
  title: string;
  cards: ProductCardContent[];
  tone: "problem" | "benefit";
}) {
  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-20">
      <Container>
        <SectionTitle title={title} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <ProductInfoCard key={card.title} card={card} tone={tone} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductOperations({ page }: { page: ProductPageContent }) {
  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-8 rounded-xl bg-[#063F32] p-6 text-white shadow-[0_28px_80px_rgba(2,44,34,0.16)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#DDF95A]">
              Pentacore workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {page.operations.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#B7D0C6] sm:text-base">
              {page.operations.description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {page.operations.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg bg-white/10 p-4 ring-1 ring-white/10"
                >
                  <p className="text-2xl font-semibold text-[#E9FF6A]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/70">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-[#DDF95A] sm:min-h-[420px]">
            <Image
              src={page.operations.imageUrl}
              alt={page.operations.imageAlt}
              fill
              sizes="(min-width: 1024px) 48vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProductSetup({ page }: { page: ProductPageContent }) {
  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-20">
      <Container>
        <SectionTitle title={page.setup.title} />
        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {page.setup.steps.map((step) => (
            <div key={step.title}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#EEF6EA]">
                <Image
                  src={step.imageUrl}
                  alt={step.title}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#0B4A3A]">
                {step.step}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-[#123D34]">
                {step.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#6B7D74]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductUseCases({ page }: { page: ProductPageContent }) {
  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-20">
      <Container>
        <SectionTitle title={page.useCases.title} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {page.useCases.items.map((item) => (
            <Card key={item.title} className="p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#123D34]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6B7D74]">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductFaq({ page }: { page: ProductPageContent }) {
  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-20">
      <Container>
        <SectionTitle title={page.faqs.title} />
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-[#DDE8DF]">
          {page.faqs.items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-semibold text-[#123D34]">
                {item.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DDE8DF] transition group-open:rotate-180">
                  <RiArrowDownSLine className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6B7D74]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductCta({ page }: { page: ProductPageContent }) {
  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-[#063F32] px-6 py-16 text-center text-white shadow-[0_28px_80px_rgba(2,44,34,0.18)] sm:px-12">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#E9FF6A] sm:text-5xl">
              {page.cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#B7D0C6] sm:text-base">
              {page.cta.description}
            </p>
            <div className="mt-8 flex justify-center">
              <LinkButton
                href="/contact"
                className="rounded-lg bg-[#154036] text-white hover:bg-[#154036]/80"
              >
                {page.cta.buttonText}
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="mx-auto max-w-4xl text-center text-3xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-4xl">
      {title}
    </h2>
  );
}

function ProductInfoCard({
  card,
  tone,
}: {
  card: ProductCardContent;
  tone: "problem" | "benefit";
}) {
  const Icon = cardIcons[card.icon];

  return (
    <Card key={card.title} className="p-7 shadow-sm">
      <span
        className={
          tone === "problem"
            ? "flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF6EA] text-[#0B4A3A]"
            : "flex h-11 w-11 items-center justify-center rounded-lg bg-[#BCD54D]/25 text-[#123D34]"
        }
      >
        <Icon className="h-5 w-5" />
      </span>
      <h2
        className={
          tone === "problem"
            ? "mt-6 text-base font-semibold leading-7 text-[#123D34]"
            : "mt-6 text-lg font-semibold leading-7 text-[#123D34]"
        }
      >
        {card.title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-[#6B7D74]">
        {card.description}
      </p>
      {card.note ? (
        <p className="mt-6 text-xs font-semibold text-[#0B4A3A]">{card.note}</p>
      ) : null}
      {card.points ? (
        <ul className="mt-6 space-y-2">
          {card.points.map((point) => (
            <li
              key={point}
              className="flex gap-2 text-xs font-medium leading-5 text-[#22A534]"
            >
              <RiCheckLine className="mt-0.5 h-4 w-4 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}
