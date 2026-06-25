import Image from "next/image";
import {
  RiArrowDownSLine,
  RiArrowRightLine,
  RiBankCardLine,
  RiCheckLine,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiFlashlightLine,
  RiLinkM,
  RiMessage2Line,
  RiStore2Line,
} from "@remixicon/react";

import { Card, Container, FinalCta, LinkButton } from "@/components/shared";
import type {
  ProductCardContent,
  ProductComparisonCard,
  ProductFeatureCard,
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
      <ProductAppHighlights page={page} />
      <ProductAppTools page={page} />
      <ProductAppTransfers page={page} />
      <ProductAppOperations page={page} />
      <ProductComparison page={page} />
      <ProductFeatureShowcase page={page} />
      <ProductDeveloperHighlight page={page} />
      <ProductCardGrid
        title={page.problems?.title}
        cards={page.problems?.cards}
        tone="problem"
      />
      <ProductCardGrid
        title={page.benefits?.title}
        cards={page.benefits?.cards}
        tone="benefit"
      />
      <ProductOperations page={page} />
      <ProductSetup page={page} />
      <ProductUseCases page={page} />
      <ProductFaq page={page} />
      {page.cta?.title && page.cta.description && page.cta.buttonText ? (
        <FinalCta
          title={page.cta.title}
          description={page.cta.description}
          buttonText={page.cta.buttonText}
          buttonHref="/contact"
          className="py-16 sm:py-20"
        />
      ) : null}
    </main>
  );
}

function ProductAppOperations({ page }: { page: ProductPageContent }) {
  const operations = page.appOperations;

  if (
    !operations ||
    (!operations.title && !operations.description && !operations.cards?.length)
  ) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        {operations.cards?.length ? (
          <div
            className={
              operations.title || operations.description
                ? "grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                : "grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            }
          >
            {operations.cards.map((card, index) => (
              <AppOperationCard key={card.title ?? index} card={card} />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function AppOperationCard({ card }: { card: ProductFeatureCard }) {
  return (
    <Card className="grid min-h-[560px] grid-rows-[auto_1fr] overflow-hidden bg-white p-0 shadow-[0_22px_65px_rgba(0,0,0,0.14)]">
      {(card.title || card.description) && (
        <div className="px-6 pb-6 pt-8 text-center sm:px-8">
          {card.title ? (
            <h3 className="text-2xl font-semibold leading-tight text-[#123D34]">
              {card.title}
            </h3>
          ) : null}
          {card.description ? (
            <p className="mt-4 text-sm leading-7 text-[#5F756C]">
              {card.description}
            </p>
          ) : null}
        </div>
      )}

      {card.imageUrl ? (
        <div className="relative min-h-[320px] overflow-hidden bg-[#FAFAF3]">
          <Image
            src={card.imageUrl}
            alt={
              card.imageAlt ??
              card.title ??
              "Pentacore mobile payment operation"
            }
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 92vw"
            className="object-cover object-top"
          />
        </div>
      ) : null}
    </Card>
  );
}

function ProductAppTransfers({ page }: { page: ProductPageContent }) {
  const transfers = page.appTransfers;

  if (
    !transfers ||
    (!transfers.title &&
      !transfers.accentText &&
      !transfers.description &&
      !transfers.images?.length)
  ) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        {transfers.images?.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {transfers.images.map((image, index) =>
              image.imageUrl ? (
                <Card
                  key={`${image.imageUrl}-${index}`}
                  className="relative aspect-[4/3] overflow-hidden bg-white p-0 shadow-[0_24px_70px_rgba(0,0,0,0.14)]"
                >
                  <Image
                    src={image.imageUrl}
                    alt={
                      image.imageAlt ??
                      "Pentacore mobile business fund transfer"
                    }
                    fill
                    sizes="(min-width: 768px) 46vw, 92vw"
                    className="object-cover object-center"
                  />
                </Card>
              ) : null,
            )}
          </div>
        ) : null}

        {transfers.title || transfers.accentText || transfers.description ? (
          <div className="mx-auto mt-12 max-w-4xl text-center">
            {transfers.title || transfers.accentText ? (
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-5xl">
                {transfers.accentText ? (
                  <span className="text-[#0B806A]">{transfers.accentText}</span>
                ) : null}
                {transfers.accentText && transfers.title ? " " : null}
                {transfers.title}
              </h2>
            ) : null}
            {transfers.description ? (
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#5F756C]">
                {transfers.description}
              </p>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function ProductAppTools({ page }: { page: ProductPageContent }) {
  const tools = page.appTools;

  if (!tools || (!tools.title && !tools.description && !tools.cards?.length)) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        {tools.title || tools.description ? (
          <div className="mx-auto max-w-4xl text-center">
            {tools.title ? (
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-5xl">
                {tools.title}
              </h2>
            ) : null}
            {tools.description ? (
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#123D34]">
                {tools.description}
              </p>
            ) : null}
          </div>
        ) : null}

        {tools.cards?.length ? (
          <div
            className={
              tools.title || tools.description
                ? "mt-12 grid gap-6 lg:grid-cols-2"
                : "grid gap-6 lg:grid-cols-2"
            }
          >
            {tools.cards.map((card, index) => (
              <AppToolCard key={card.title ?? index} card={card} />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function AppToolCard({ card }: { card: ProductFeatureCard }) {
  return (
    <Card className="grid min-h-[560px] grid-rows-[auto_1fr] overflow-hidden bg-white p-0 shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
      {(card.title || card.description) && (
        <div className="px-6 pb-6 pt-8 text-center sm:px-10 sm:pt-10">
          {card.title ? (
            <h3 className="text-2xl font-semibold leading-tight text-[#123D34] sm:text-3xl">
              {card.title}
            </h3>
          ) : null}
          {card.description ? (
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#5F756C] sm:text-base">
              {card.description}
            </p>
          ) : null}
        </div>
      )}

      {card.imageUrl ? (
        <div className="relative min-h-[340px] overflow-hidden bg-[#FAFAF3]">
          <Image
            src={card.imageUrl}
            alt={card.imageAlt ?? card.title ?? "Pentacore mobile app tool"}
            fill
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="object-cover object-top"
          />
        </div>
      ) : null}
    </Card>
  );
}

function ProductAppHighlights({ page }: { page: ProductPageContent }) {
  const highlights = page.appHighlights;

  if (
    !highlights ||
    (!highlights.title && !highlights.description && !highlights.cards?.length)
  ) {
    return null;
  }

  return (
    <section className=" py-16 sm:py-20">
      <Container>
        {highlights.title || highlights.description ? (
          <div className="mx-auto max-w-4xl text-center">
            {highlights.title ? (
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                {highlights.title}
              </h2>
            ) : null}
            {highlights.description ? (
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#B7D0C6]">
                {highlights.description}
              </p>
            ) : null}
          </div>
        ) : null}

        {highlights.cards?.length ? (
          <div
            className={
              highlights.title || highlights.description
                ? "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                : "grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            }
          >
            {highlights.cards.map((card, index) => (
              <AppHighlightCard key={card.title ?? index} card={card} />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function AppHighlightCard({ card }: { card: ProductFeatureCard }) {
  return (
    <Card className="grid min-h-[540px] grid-rows-[auto_1fr] overflow-hidden bg-white p-0 shadow-[0_22px_65px_rgba(0,0,0,0.14)]">
      {(card.title || card.description) && (
        <div className="px-6 pb-6 pt-8 text-center sm:px-8">
          {card.title ? (
            <h3 className="text-[26px] font-semibold leading-tight text-[#123D34]">
              {card.title}
            </h3>
          ) : null}
          {card.description ? (
            <p className="mt-4 text-sm leading-7 text-[#5F756C]">
              {card.description}
            </p>
          ) : null}
        </div>
      )}

      {card.imageUrl ? (
        <div className="relative min-h-[300px] overflow-hidden bg-[#FAFAF3]">
          <Image
            src={card.imageUrl}
            alt={card.imageAlt ?? card.title ?? "Pentacore mobile app feature"}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 92vw"
            className="object-cover object-top"
          />
        </div>
      ) : null}
    </Card>
  );
}

function ProductDeveloperHighlight({ page }: { page: ProductPageContent }) {
  const highlight = page.developerHighlight;

  if (
    !highlight ||
    (!highlight.title &&
      !highlight.description &&
      !highlight.imageUrl &&
      !highlight.items?.length)
  ) {
    return null;
  }

  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-20">
      <Container>
        {highlight.imageUrl && (
          <div className="relative min-h-[460px] overflow-hidden rounded-xl bg-[#EEF6EA] sm:min-h-[560px]">
            <Image
              src={highlight.imageUrl}
              alt={
                highlight.imageAlt ??
                highlight.title ??
                "Pentacore developer platform"
              }
              fill
              sizes="92vw"
              className="object-cover"
            />

            {highlight.title || highlight.description ? (
              <div className="absolute inset-x-4 top-14 max-w-xl rounded-lg bg-[#154036] p-6 text-white shadow-[0_22px_60px_rgba(0,0,0,0.2)] sm:inset-x-auto sm:left-8 sm:top-8 sm:p-8 lg:left-12 lg:top-12 lg:p-10">
                {highlight.title ? (
                  <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                    {highlight.title}
                  </h2>
                ) : null}
                {highlight.description ? (
                  <p className="mt-5 text-sm leading-7 text-[#B7D0C6] sm:text-base sm:leading-8">
                    {highlight.description}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        )}

        {highlight.items?.length ? (
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {highlight.items.map((item, index) => (
              <div key={item.title ?? index} className="text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#22A534] text-white shadow-sm">
                  <RiCheckLine className="h-6 w-6" />
                </span>
                {item.title ? (
                  <h3 className="mt-5 text-xl font-semibold text-[#123D34]">
                    {item.title}
                  </h3>
                ) : null}
                {item.description ? (
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#5F756C]">
                    {item.description}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function ProductFeatureShowcase({ page }: { page: ProductPageContent }) {
  const showcase = page.featureShowcase;

  if (
    !showcase ||
    (!showcase.title && !showcase.description && !showcase.cards?.length)
  ) {
    return null;
  }

  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {showcase.title ? (
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-5xl">
              {showcase.title}
            </h2>
          ) : null}
          {showcase.description ? (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F756C]">
              {showcase.description}
            </p>
          ) : null}
        </div>

        {showcase.cards?.length ? (
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {showcase.cards.map((card, index) => (
              <FeatureShowcaseCard key={card.title ?? index} card={card} />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function FeatureShowcaseCard({ card }: { card: ProductFeatureCard }) {
  return (
    <Card className="grid grid-rows-[auto_1fr] overflow-hidden bg-white p-0 shadow-[0_18px_55px_rgba(2,44,34,0.08)]">
      {(card.title || card.description) && (
        <div className="px-5 pb-5 pt-6 sm:px-7 sm:pt-7">
          {card.title ? (
            <h3 className="text-lg font-semibold leading-tight text-[#08221c] sm:text-xl">
              {card.title}
            </h3>
          ) : null}
          {card.description ? (
            <p className="mt-3 text-sm leading-6 text-[#191c1b] sm:mt-4 sm:leading-7">
              {card.description}
            </p>
          ) : null}
        </div>
      )}

      {card.imageUrl ? (
        <div className="relative min-h-[240px] w-full overflow-hidden sm:min-h-[280px] lg:min-h-[300px]">
          <Image
            src={card.imageUrl}
            alt={card.imageAlt ?? card.title ?? "Pentacore API capability"}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 92vw"
            className="object-cover object-bottom"
          />
        </div>
      ) : null}
    </Card>
  );
}

function ProductComparison({ page }: { page: ProductPageContent }) {
  const comparison = page.comparison;

  if (
    !comparison ||
    (!comparison.title &&
      !comparison.accentText &&
      !comparison.description &&
      !comparison.cards?.length)
  ) {
    return null;
  }

  return (
    <section className="bg-[#154036] py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {comparison.title || comparison.accentText ? (
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              {comparison.title}
              {comparison.title && comparison.accentText ? " " : null}
              {comparison.accentText ? (
                <span className="text-[#DDF95A]">{comparison.accentText}</span>
              ) : null}
            </h2>
          ) : null}
          {comparison.description ? (
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#B7D0C6]">
              {comparison.description}
            </p>
          ) : null}
        </div>

        {comparison.cards?.length ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {comparison.cards.map((card, index) => (
              <ComparisonCard key={card.title ?? index} card={card} />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function ComparisonCard({ card }: { card: ProductComparisonCard }) {
  const isSuccess = card.badgeTone === "success";
  const BadgeIcon = isSuccess ? RiCheckboxCircleFill : RiErrorWarningFill;

  return (
    <article className="flex min-h-[560px] flex-col overflow-hidden rounded-xl bg-[#1C242B] text-center shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
      {(card.title || card.description) && (
        <div className="relative z-10 px-6 pb-4 pt-8 sm:px-10 sm:pt-10">
          {card.title ? (
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              {card.title}
            </h3>
          ) : null}
          {card.description ? (
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#B7D0C6] sm:text-base">
              {card.description}
            </p>
          ) : null}
        </div>
      )}

      <div className="relative mt-auto min-h-[480px] flex-1 overflow-hidden">
        {card.imageUrl ? (
          <Image
            src={card.imageUrl}
            alt={card.imageAlt ?? card.title ?? "Pentacore API comparison"}
            fill
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="object-cover object-[50%_30%]"
          />
        ) : null}

        {card.badge ? (
          <div className="absolute bottom-6 left-1/2 z-10 inline-flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#154036] shadow-[0_16px_45px_rgba(0,0,0,0.2)] sm:text-base">
            <BadgeIcon
              className={
                isSuccess
                  ? "h-5 w-5 shrink-0 text-[#22A534]"
                  : "h-5 w-5 shrink-0 text-[#EF4444]"
              }
            />
            <span className="truncate">{card.badge}</span>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ProductHero({ page }: { page: ProductPageContent }) {
  return (
    <section className="bg-[#FAFAF3] py-16 sm:pt-24 sm:pb-14">
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
            {page.hero.footnote ? (
              <p className="mt-5 max-w-md text-xs leading-6 text-[#6B7D74]">
                {page.hero.footnote}
              </p>
            ) : null}
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
  title?: string;
  cards?: ProductCardContent[];
  tone: "problem" | "benefit";
}) {
  if (!title && !cards?.length) {
    return null;
  }

  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-20">
      <Container>
        {title ? <SectionTitle title={title} /> : null}
        {cards?.length ? (
          <div
            className={
              title
                ? "mt-10 grid gap-5 md:grid-cols-3"
                : "grid gap-5 md:grid-cols-3"
            }
          >
            {cards.map((card) => (
              <ProductInfoCard key={card.title} card={card} tone={tone} />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function ProductOperations({ page }: { page: ProductPageContent }) {
  const operations = page.operations;

  if (
    !operations ||
    (!operations.title &&
      !operations.description &&
      !operations.imageUrl &&
      !operations.metrics?.length)
  ) {
    return null;
  }

  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-20">
      <Container>
        <div
          className={
            operations.imageUrl
              ? "grid items-center gap-8 rounded-xl bg-[#063F32] p-6 text-white shadow-[0_28px_80px_rgba(2,44,34,0.16)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr]"
              : "rounded-xl bg-[#063F32] p-6 text-white shadow-[0_28px_80px_rgba(2,44,34,0.16)] sm:p-10"
          }
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#DDF95A]">
              Pentacore workflow
            </p>
            {operations.title ? (
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {operations.title}
              </h2>
            ) : null}
            {operations.description ? (
              <p className="mt-5 text-sm leading-7 text-[#B7D0C6] sm:text-base">
                {operations.description}
              </p>
            ) : null}
            {operations.metrics?.length ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {operations.metrics.map((metric) => (
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
            ) : null}
          </div>

          {operations.imageUrl ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#DDF95A]">
              <Image
                src={operations.imageUrl}
                alt={
                  operations.imageAlt ??
                  operations.title ??
                  "Pentacore workflow"
                }
                fill
                sizes="(min-width: 1024px) 48vw, 90vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

function ProductSetup({ page }: { page: ProductPageContent }) {
  const setup = page.setup;

  if (!setup?.title && !setup?.steps?.length) {
    return null;
  }

  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-20">
      <Container>
        {setup.title ? <SectionTitle title={setup.title} /> : null}
        {setup.steps?.length ? (
          <div
            className={
              setup.title
                ? "mt-10 grid gap-7 md:grid-cols-3"
                : "grid gap-7 md:grid-cols-3"
            }
          >
            {setup.steps.map((step) => (
              <div key={step.title}>
                <div className="relative aspect-square overflow-hidden rounded-lg">
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
        ) : null}
      </Container>
    </section>
  );
}

function ProductUseCases({ page }: { page: ProductPageContent }) {
  const useCases = page.useCases;

  if (!useCases?.title && !useCases?.items?.length) {
    return null;
  }

  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-20">
      <Container>
        {useCases.title ? <SectionTitle title={useCases.title} /> : null}
        {useCases.items?.length ? (
          <div
            className={
              useCases.title
                ? "mt-10 grid gap-5 md:grid-cols-2"
                : "grid gap-5 md:grid-cols-2"
            }
          >
            {useCases.items.map((item) => (
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
        ) : null}
      </Container>
    </section>
  );
}

function ProductFaq({ page }: { page: ProductPageContent }) {
  const faqs = page.faqs;

  if (!faqs?.title && !faqs?.items?.length) {
    return null;
  }

  return (
    <section className="bg-[#FAFAF3] py-16 sm:py-20">
      <Container>
        {faqs.title ? <SectionTitle title={faqs.title} /> : null}
        {faqs.items?.length ? (
          <div
            className={
              faqs.title
                ? "mx-auto mt-8 max-w-3xl divide-y divide-[#DDE8DF]"
                : "mx-auto max-w-3xl divide-y divide-[#DDE8DF]"
            }
          >
            {faqs.items.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold text-[#123D34]">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DDE8DF] transition group-open:rotate-180">
                    <RiArrowDownSLine className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[#6B7D74]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="mx-auto max-w-4xl text-center text-3xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-5xl">
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
              className="flex gap-2 text-xs font-medium leading-5 text-[#096e56]"
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
