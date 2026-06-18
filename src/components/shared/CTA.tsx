import { Container, LinkButton, Para } from "@/components/shared";

type CTAProps = {
  title: string;
  description?: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
};

export function CTA({
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}: CTAProps) {
  return (
    <section className="bg-mint-50 py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-5xl">
            {title}
          </h2>

          {description && (
            <Para className="mx-auto mt-5 max-w-2xl">{description}</Para>
          )}

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href={primaryHref} size="lg">
              {primaryText}
            </LinkButton>

            {secondaryText && secondaryHref && (
              <LinkButton href={secondaryHref} variant="outline" size="lg">
                {secondaryText}
              </LinkButton>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
