import Image from "next/image";
import { notFound } from "next/navigation";
import { RiArrowRightLine, RiCheckLine } from "@remixicon/react";

import { Card, Container, LinkButton } from "@/components/shared";
import { productItems } from "@/data/product";

export function generateStaticParams() {
  return productItems.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const product = productItems.find(
    (item) => item.slug === resolvedParams.slug,
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-[#FAFAF3]">
      <section className="relative overflow-hidden bg-[#022C22] py-20 text-white sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#BCD54D]">
                Pentacore product
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                {product.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#B7D0C6] sm:text-lg">
                {product.description}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <LinkButton href="/contact" size="lg" className="rounded-lg">
                  Talk to Sales
                  <RiArrowRightLine className="h-5 w-5" />
                </LinkButton>
                <LinkButton
                  href="/#products"
                  variant="outline"
                  size="lg"
                  className="rounded-lg border-white bg-white text-[#062E25] hover:bg-[#BCD54D]"
                >
                  View Products
                </LinkButton>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-xl bg-[#EEF6EA] shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:min-h-[460px]">
              <Image
                src={product.imageUrl}
                alt={`${product.label} preview`}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {product.features.map((feature) => (
              <Card key={feature} className="p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BCD54D]/25 text-[#062E25]">
                  <RiCheckLine className="h-5 w-5" />
                </span>
                <p className="mt-5 text-base font-medium leading-7 text-[#062E25]">
                  {feature}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
