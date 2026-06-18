import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RiArrowLeftLine, RiCalendarLine } from "@remixicon/react";

import { Container, CTA, ShareButtons } from "@/components/shared";
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
    <main className="bg-[hsl(var(--background))]">
      <section className="relative pt-12 pb-20 lg:pt-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blogs"
              className="group mb-8 inline-flex items-center gap-2 text-sm font-black text-slate-500 transition hover:text-[hsl(var(--primary))]"
            >
              <RiArrowLeftLine className="h-4 w-4 transition group-hover:-translate-x-1" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.14em] text-[hsl(var(--primary))]">
              <span className="rounded-full bg-emerald-50 px-3 py-1">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <RiCalendarLine className="h-4 w-4" />
                {post.publishedAt}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              {post.excerpt}
            </p>

            <div className="mt-12 flex flex-col gap-6 border-y border-slate-200 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-xl font-black text-slate-400">
                  KP
                </div>
                <div>
                  <p className="text-sm font-black text-slate-950">
                    Pentacore Team
                  </p>
                  <p className="text-xs font-bold text-slate-500">
                    Expert Insights
                  </p>
                </div>
              </div>

              <ShareButtons title={post.title} />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-[13/9] overflow-hidden rounded-2xl">
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

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{
                __html:
                  post.content ??
                  `<p>${post.excerpt}</p><p>Full content coming soon.</p>`,
              }}
            />

            <div className="mt-20 rounded-[2rem] bg-slate-50 p-8 sm:p-12">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-slate-200 text-3xl font-black text-slate-400">
                  KP
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-950">
                    About Pentacore Team
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Helping businesses simplify payment operations with
                    technology-first solutions for UPI, collections, and payouts
                    in India.
                  </p>
                  <Link
                    href="/about"
                    className="mt-4 inline-flex text-sm font-black text-[hsl(var(--primary))] underline underline-offset-4"
                  >
                    Learn more about Pentacore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="border-t border-slate-200 py-20">
          <Container>
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[hsl(var(--primary))]">
                  More Insights
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Related Articles
                </h2>
              </div>
              <Link
                href="/blogs"
                className="hidden text-sm font-black text-[hsl(var(--primary))] sm:inline-flex"
              >
                View All Posts
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={relatedPost.href}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-black leading-tight text-slate-950 group-hover:text-[hsl(var(--primary))]">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                    {relatedPost.publishedAt}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="pt-10">
        <CTA
          title="Ready to scale your payments?"
          description="Use Pentacore to manage payment collection, payouts, settlements, and reconciliation from one place."
          primaryText="Get Started Now"
          primaryHref="/contact"
        />
      </section>
    </main>
  );
}
