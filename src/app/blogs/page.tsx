import Image from "next/image";
import Link from "next/link";
import {
  RiArrowRightLine,
  RiCalendarLine,
  RiTimeLine,
} from "@remixicon/react";

import { Container, LinkButton } from "@/components/shared";
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
    <article className="group h-full">
      <Link href={post.href} className="block">
        <div
          className={
            large
              ? "h-full overflow-hidden rounded-xl bg-white shadow-[0_24px_70px_rgba(2,44,34,0.1)]"
              : "h-full overflow-hidden rounded-xl bg-white shadow-[0_18px_50px_rgba(2,44,34,0.07)] ring-1 ring-[#DDE8DF]"
          }
        >
          <div
            className={
              large
                ? "relative overflow-hidden bg-[#DDF95A]"
                : "relative overflow-hidden bg-[#EEF6EA]"
            }
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={900}
              height={560}
              className={
                large
                  ? "h-[340px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[430px]"
                  : "h-[230px] w-full object-cover transition duration-500 group-hover:scale-105"
              }
            />

            <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#154036] shadow-sm backdrop-blur">
              {post.category}
            </div>
          </div>

          <div className={large ? "p-7 sm:p-8" : "p-6"}>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#6B7D74]">
              <span className="inline-flex items-center gap-1.5">
                <RiCalendarLine className="h-4 w-4" />
                {post.publishedAt}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <RiTimeLine className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <h2
              className={
                large
                  ? "mt-4 text-2xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-4xl"
                  : "mt-4 text-xl font-semibold leading-tight tracking-tight text-[#123D34]"
              }
            >
              {post.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#5F756C]">
              {post.excerpt}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#154036]">
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
      className="group block border-b border-[#DDE8DF] py-5 first:pt-0 last:border-b-0 last:pb-0"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B4A3A]">
        {post.category}
      </p>

      <h3 className="mt-2 text-base font-semibold leading-6 text-[#123D34] transition group-hover:text-[#0B806A]">
        {post.title}
      </h3>

      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7F928A]">
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
    <main className="overflow-hidden bg-[#FAFAF3]">
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[#FAFAF3]" />
        <Container>
          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#022C22] sm:text-6xl">
              {selectedCategory === "All"
                ? "Payment insights for faster-growing Indian businesses."
                : `Latest ${selectedCategory} insights for payment teams.`}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#022C22]/70">
              Practical guides on payment gateway integration, UPI collections,
              payouts, settlements, refunds, webhooks, and reconciliation.
            </p>

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
                      ? "rounded-full bg-[#154036] px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                      : "rounded-full border border-[#154036]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#154036] transition hover:border-[#154036] hover:bg-[#154036] hover:text-white"
                  }
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {featuredPost ? (
        <section className="-mt-6 pb-12 sm:-mt-12 sm:pb-16">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
              <BlogCard post={featuredPost} large />

              <aside className="rounded-xl bg-white p-6 shadow-[0_18px_50px_rgba(2,44,34,0.07)] ring-1 ring-[#DDE8DF] lg:p-7">
                <div className="flex items-center justify-between border-b border-[#DDE8DF] pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B806A]">
                      Fresh reads
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#123D34]">
                      Recent Posts
                    </h2>
                  </div>
                  <Link
                    href="/blogs"
                    className="text-sm font-semibold text-[#154036]"
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

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {topPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {visibleSections.map((section) => (
        <section key={section.title} className="py-12 sm:py-16">
          <Container>
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-[#DDE8DF] pb-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0B806A]">
                  {section.title}
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#123D34]">
                  Latest in {section.title}
                </h2>
              </div>

              <Link
                href={`/blogs?category=${encodeURIComponent(section.title)}`}
                className="hidden items-center gap-2 text-sm font-semibold text-[#154036] sm:inline-flex"
              >
                View All
                <RiArrowRightLine className="h-4 w-4" />
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

      <section className="py-16 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-xl bg-[#063F32] px-6 py-14 text-center text-white shadow-[0_28px_80px_rgba(2,44,34,0.18)] sm:px-12 sm:py-16">
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#E9FF6A] sm:text-5xl">
              Build sharper payment operations with Pentacore.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#B7D0C6] sm:text-base">
              Explore guides on payment gateway integration, UPI collections,
              payouts, settlements, refunds, webhooks, and reconciliation.
            </p>
            <div className="mt-8 flex justify-center">
              <LinkButton
                href="/contact"
                className="rounded-lg bg-white text-[#154036] hover:bg-white/80"
              >
                Talk to Pentacore
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
