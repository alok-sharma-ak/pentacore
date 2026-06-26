import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiCalendarLine,
  RiTimeLine,
} from "@remixicon/react";

import { Container, LinkButton, ShareButtons } from "@/components/shared";
import { blogPosts, getBlogPostBySlug } from "@/data/blogs";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(
      (item) => item.category === post.category && item.slug !== post.slug,
    )
    .slice(0, 3);

  return (
    <main className="bg-[#FAFAF3]">
      <section className="relative overflow-hidden bg-[#FAFAF3] pb-20 pt-12 lg:pb-28 lg:pt-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blogs"
              className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#5F756C] transition hover:text-[#154036]"
            >
              <RiArrowLeftLine className="h-4 w-4 transition group-hover:-translate-x-1" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
              <span className="rounded-full bg-[#DDF95A] px-3 py-1.5 text-[#154036]">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-[#6B7D74]">
                <RiCalendarLine className="h-4 w-4" />
                {post.publishedAt}
              </span>
              <span className="flex items-center gap-1.5 text-[#6B7D74]">
                <RiTimeLine className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[#123D34] sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-7 text-lg leading-8 text-[#5F756C] sm:text-xl">
              {post.excerpt}
            </p>

            <div className="mt-10 flex flex-col gap-6 rounded-xl border border-[#DDE8DF] bg-white p-5 shadow-[0_18px_50px_rgba(2,44,34,0.07)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDF95A] text-lg font-semibold text-[#154036]">
                  PC
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#123D34]">
                    Pentacore Team
                  </p>
                  <p className="text-xs font-semibold text-[#6B7D74]">
                    Payment Operations Insights
                  </p>
                </div>
              </div>

              <ShareButtons title={post.title} />
            </div>
          </div>
        </Container>
      </section>

      <section className="-mt-14 sm:-mt-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#DDF95A] shadow-[0_28px_80px_rgba(2,44,34,0.16)]">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div
              className="blog-content rounded-xl bg-white p-6 shadow-[0_18px_50px_rgba(2,44,34,0.07)] ring-1 ring-[#DDE8DF] sm:p-10 lg:p-12"
              dangerouslySetInnerHTML={{
                __html:
                  post.content ??
                  `<p>${post.excerpt}</p><p>Full content coming soon.</p>`,
              }}
            />

            <div className="mt-10 rounded-xl bg-[#063F32] p-8 text-white shadow-[0_20px_60px_rgba(2,44,34,0.12)] sm:p-10">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#DDF95A] text-2xl font-semibold text-[#154036] sm:h-20 sm:w-20">
                  PC
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    About Pentacore Team
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[#B7D0C6]">
                    Helping businesses simplify payment operations with
                    technology-first solutions for UPI, collections, payouts,
                    settlements, and reconciliation in India.
                  </p>
                  <Link
                    href="/about"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#DDF95A]"
                  >
                    Learn more about Pentacore
                    <RiArrowRightLine className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="border-t border-[#DDE8DF] py-16 sm:py-20">
          <Container>
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0B806A]">
                  More Insights
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#123D34] sm:text-4xl">
                  Related Articles
                </h2>
              </div>
              <Link
                href="/blogs"
                className="hidden items-center gap-2 text-sm font-semibold text-[#154036] sm:inline-flex"
              >
                View All Posts
                <RiArrowRightLine className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={relatedPost.href}
                  className="group block overflow-hidden rounded-xl bg-white shadow-[0_18px_50px_rgba(2,44,34,0.07)] ring-1 ring-[#DDE8DF]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EEF6EA]">
                    <Image
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B806A]">
                      {relatedPost.category}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold leading-tight text-[#123D34] transition group-hover:text-[#0B806A]">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#7F928A]">
                      {relatedPost.publishedAt} · {relatedPost.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="relative overflow-hidden rounded-xl bg-[#063F32] px-6 py-14 text-center text-white shadow-[0_28px_80px_rgba(2,44,34,0.18)] sm:px-12 sm:py-16">
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#E9FF6A] sm:text-5xl">
              Ready to scale your payments?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#B7D0C6] sm:text-base">
              Use Pentacore to manage payment collection, payouts, settlements,
              refunds, and reconciliation from one place.
            </p>
            <div className="mt-8 flex justify-center">
              <LinkButton
                href="/contact"
                className="rounded-lg bg-white text-[#154036] hover:bg-white/80"
              >
                Get Started Now
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
