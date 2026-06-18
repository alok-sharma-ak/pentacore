import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine, RiCalendarLine } from "@remixicon/react";

import { Container, CTA, SectionHeading } from "@/components/shared";
import {
  blogCategories,
  blogPosts,
  blogSections,
  recentPosts,
  type BlogCategory,
  type BlogPost,
} from "@/data/blogs";

type BlogPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

function getSelectedCategory(category?: string): BlogCategory {
  if (!category) {
    return "All";
  }

  const decodedCategory = decodeURIComponent(category);

  return blogCategories.includes(decodedCategory as BlogCategory)
    ? (decodedCategory as BlogCategory)
    : "All";
}

function BlogCard({
  post,
  large = false,
}: {
  post: BlogPost;
  large?: boolean;
}) {
  return (
    <article className="group">
      <Link href={post.href} className="block">
        <div
          className={
            large
              ? "overflow-hidden rounded-[2rem] bg-white shadow-sm"
              : "border-b border-slate-200 pb-8"
          }
        >
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={900}
              height={560}
              className={
                large
                  ? "h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
                  : "h-[220px] w-full object-cover transition duration-500 group-hover:scale-105"
              }
            />

            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-[hsl(var(--primary))] backdrop-blur">
              {post.category}
            </div>
          </div>

          <div className={large ? "p-7" : "pt-5"}>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <RiCalendarLine className="h-4 w-4" />
                {post.publishedAt}
              </span>
            </div>

            <h2
              className={
                large
                  ? "mt-4 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl"
                  : "mt-4 text-xl font-black leading-tight tracking-tight text-slate-950"
              }
            >
              {post.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {post.excerpt}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[hsl(var(--primary))]">
              Read More
              <RiArrowRightLine className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

function SmallPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={post.href}
      className="group block border-b border-slate-200 py-5 first:pt-0 last:border-b-0 last:pb-0"
    >
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[hsl(var(--primary))]">
        {post.category}
      </p>

      <h3 className="mt-2 text-base font-black leading-6 text-slate-950 group-hover:text-[hsl(var(--primary))]">
        {post.title}
      </h3>

      <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
        {post.publishedAt}
      </p>
    </Link>
  );
}

export default async function BlogsPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const selectedCategory = getSelectedCategory(resolvedSearchParams?.category);
  const visiblePosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);
  const visibleSections =
    selectedCategory === "All"
      ? blogSections
      : blogSections.filter((section) => section.title === selectedCategory);
  const featuredPost =
    visiblePosts.find((post) => post.featured) ?? visiblePosts[0];
  const topPosts = featuredPost
    ? visiblePosts.filter((post) => post.slug !== featuredPost.slug).slice(0, 2)
    : [];

  return (
    <main className="overflow-hidden bg-[hsl(var(--background))]">
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Pentacore Blog"
            title={
              selectedCategory === "All"
                ? "Payments, payouts and business growth insights."
                : `Latest ${selectedCategory} insights.`
            }
            description="Practical guides and product insights for Indian businesses building better payment operations with Pentacore."
            align="center"
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {blogCategories.map((category) => (
              <Link
                key={category}
                href={
                  category === "All"
                    ? "/blogs"
                    : `/blogs?category=${encodeURIComponent(category)}`
                }
                className={
                  category === selectedCategory
                    ? "rounded-full bg-[hsl(var(--primary))] px-5 py-2.5 text-sm font-black text-white shadow-sm"
                    : "rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-black text-slate-600 transition hover:border-[hsl(var(--primary))]/30 hover:text-[hsl(var(--primary))]"
                }
              >
                {category}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {featuredPost ? (
        <section className="py-10">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
              <BlogCard post={featuredPost} large />

              <aside className="lg:border-l lg:border-slate-200 lg:pl-8">
                <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                  <h2 className="text-xl font-black text-slate-950">
                    Recent Posts
                  </h2>
                  <Link
                    href="/blogs"
                    className="text-sm font-black text-[hsl(var(--primary))]"
                  >
                    View All
                  </Link>
                </div>

                <div className="mt-6">
                  {recentPosts.map((post) => (
                    <SmallPostCard key={post.slug} post={post} />
                  ))}
                </div>
              </aside>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {topPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {visibleSections.map((section) => (
        <section key={section.title} className="py-12">
          <Container>
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-slate-200 pb-5">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[hsl(var(--primary))]">
                  {section.title}
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                  Latest in {section.title}
                </h2>
              </div>

              <Link
                href={`/blogs?category=${encodeURIComponent(section.title)}`}
                className="hidden text-sm font-black text-[hsl(var(--primary))] sm:inline-flex"
              >
                View All
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {section.posts.slice(0, 3).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="pt-20">
        <CTA
          title="Pentacore Resources"
          description="Explore guides on payment gateway integration, UPI collections, payouts, settlements, refunds, webhooks and reconciliation."
          primaryText="Talk to Pentacore"
          primaryHref="/contact"
        />
      </section>
    </main>
  );
}
