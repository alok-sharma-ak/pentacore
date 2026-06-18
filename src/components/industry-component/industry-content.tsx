import Image from "next/image";
import { RiCheckLine } from "@remixicon/react";

import type { IndustryItem } from "@/data/industries";
import { Container, CTA, SectionHeading } from "@/components/shared";

type IndustryPageContentProps = {
  industry: IndustryItem;
};

export function IndustryContent({ industry }: IndustryPageContentProps) {
  return (
    <main className="overflow-hidden bg-[hsl(var(--background))]">
      {/* Industry Challenges */}
      <section className="py-10 sm:py-12">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2.5rem] bg-slate-50 p-3">
              <Image
                src="/dashboard-industry.png"
                alt={`${industry.label} payment operations`}
                width={1000}
                height={760}
                className="h-[320px] w-full rounded-[2rem] object-cover sm:h-[460px]"
              />
            </div>

            <div>
              <SectionHeading
                label="Industry challenges"
                title="Payment operations should not slow your business down."
                align="left"
              />

              <div className="mt-8 space-y-6">
                {industry.challenges.map((item, index) => (
                  <div
                    key={item.title}
                    className="border-b border-slate-200 pb-6 last:border-b-0"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-black text-[hsl(var(--primary))]">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="text-xl font-black text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Use Cases */}
      <section className="py-10 sm:py-12">
        <Container>
          <SectionHeading
            label="Use cases"
            title="Built for real daily payment flows."
            align="center"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industry.useCases.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[hsl(var(--primary))] shadow-sm">
                  <RiCheckLine className="h-5 w-5" />
                </div>

                <p className="text-sm font-bold leading-6 text-slate-800">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Workflow */}
      <section className="py-10 sm:py-12">
        <Container>
          <SectionHeading
            label="Payment workflow"
            title="From collection to settlement."
            description="A clear payment journey for your operations, product, and finance teams."
          />

          <div className="relative mx-auto mt-16 max-w-6xl">
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-[hsl(var(--primary))] via-slate-200 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-14">
              {industry.workflow.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={item}
                    className="relative grid gap-6 md:grid-cols-[1fr_48px_1fr]"
                  >
                    <div
                      className={
                        isLeft
                          ? "ml-20 pb-10 md:ml-0 md:pr-10 md:text-right"
                          : "hidden md:block"
                      }
                    >
                      {isLeft ? (
                        <>
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
                            Step {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-3 text-2xl font-black text-slate-950">
                            {item}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            Every step stays connected with Pentacore payment
                            status, webhook updates, and settlement visibility.
                          </p>
                        </>
                      ) : null}
                    </div>

                    <div className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-8 ring-white md:static">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-sm font-black text-white shadow-lg shadow-emerald-500/20">
                        {index + 1}
                      </div>
                    </div>

                    <div
                      className={
                        !isLeft
                          ? "ml-20 pb-10 md:ml-0 md:pl-10"
                          : "hidden md:block"
                      }
                    >
                      {!isLeft ? (
                        <>
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
                            Step {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-3 text-2xl font-black text-slate-950">
                            {item}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            Every step stays connected with Pentacore payment
                            status, webhook updates, and settlement visibility.
                          </p>
                        </>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-10 sm:pt-12 sm:pb-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            title={`What Pentacore enables for ${industry.label}`}
            description="Give your team practical tools to manage industry-specific payment operations with confidence."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industry.capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[hsl(var(--primary))]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-lg font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTA
        title={industry.ctaTitle}
        description={industry.ctaDescription}
        primaryText="Get Started Now"
        primaryHref="/contact"
      />
    </main>
  );
}
