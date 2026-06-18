import { Container, LinkButton } from "@/components/shared";
import { RiArrowRightLine } from "@remixicon/react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[hsl(var(--background))] py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-black uppercase tracking-[0.2em] text-[hsl(var(--primary))]">
            404 Error
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved or deleted.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <LinkButton href="/" size="lg">
              Go back home
            </LinkButton>
            <LinkButton href="/contact" size="lg" variant="outline">
              Contact Us <RiArrowRightLine />
            </LinkButton>
          </div>
        </div>
      </Container>
    </main>
  );
}
