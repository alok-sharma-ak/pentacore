import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "./Container";
import { LinkButton } from "./LinkButton";

type FinalCtaProps = {
  title: ReactNode;
  description?: ReactNode;
  buttonText: string;
  buttonHref: string;
  id?: string;
  className?: string;
};

export function FinalCta({
  title,
  description,
  buttonText,
  buttonHref,
  id,
  className,
}: FinalCtaProps) {
  return (
    <section id={id} className={cn("bg-[#FAFAF3] py-20", className)}>
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-[#063F32] px-6 py-16 text-center text-white shadow-[0_28px_80px_rgba(2,44,34,0.18)] sm:px-12">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#E9FF6A] sm:text-5xl">
              {title}
            </h2>
            {description ? (
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#B7D0C6] sm:text-base">
                {description}
              </p>
            ) : null}
            <div className="mt-8 flex justify-center">
              <LinkButton
                href={buttonHref}
                variant="outline"
                className="rounded-lg bg-white text-[#154036] hover:bg-white/80"
              >
                {buttonText}
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
