import Image from "next/image";
import Link from "next/link";
import {
  RiArrowRightLine,
  RiCalendarLine,
  RiTimeLine,
} from "@remixicon/react";

import { blogPosts } from "@/data/blogs";
import { Container, SectionHeading } from "@/components/shared";

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[hsl(var(--background))] py-20 sm:py-24">
      <Container>
        <div className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              align="left"
              label="Resources"
              title="Latest payment insights from Pentacore."
              description="Read practical guides on payment collection, payouts, settlements, refunds, and reconciliation for growing businesses."
            />

            <Link
              href="/blogs"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 shadow-sm transition hover:border-[hsl(var(--primary))]/30 hover:text-[hsl(var(--primary))]"
            >
              View all blogs
              <RiArrowRightLine className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-[hsl(var(--primary))]/40 hover:shadow-lg"
              >
                <Link href={post.href} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-[hsl(var(--primary))] backdrop-blur">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                      <span className="inline-flex items-center gap-1.5">
                        <RiCalendarLine className="h-4 w-4" />
                        {post.publishedAt}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <RiTimeLine className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-black leading-tight tracking-tight text-slate-950 transition group-hover:text-[hsl(var(--primary))]">
                      {post.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[hsl(var(--primary))]">
                      Read article
                      <RiArrowRightLine className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
