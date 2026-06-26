import { Container, LinkButton } from "@/components/shared";
import { RiArrowRightLine } from "@remixicon/react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#FAFAF3] py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0B806A]">
            404 Error
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-6xl">
            Page not found
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#6B7D74] sm:text-lg">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved or deleted.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton
              href="/"
              size="lg"
              className="h-12 xl:h-14 min-w-[180px] rounded-xl bg-[#154036] text-base font-semibold text-white hover:bg-[#154036]/80"
            >
              Go back home
            </LinkButton>
            <LinkButton
              href="/contact"
              size="lg"
              className="h-12 xl:h-14 min-w-[180px] rounded-xl bg-white text-base font-semibold text-[#154036] hover:bg-white/80"
            >
              Contact Us
              <RiArrowRightLine className="h-5 w-5" />
            </LinkButton>
          </div>
        </div>
      </Container>
    </main>
  );
}
