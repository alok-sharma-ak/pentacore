"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDownSLine, RiCloseLine, RiMenu3Line } from "@remixicon/react";

import { Button, Container, LinkButton } from "@/components/shared";
import { productItems, type DropdownItem } from "@/data/product";
import { solutionItems } from "@/data/solutions";
import { cn } from "@/lib/utils";

const resourceItems: DropdownItem[] = [
  {
    label: "Blog",
    href: "/blogs",
  },
  {
    label: "Support",
    href: "/contact",
  },
];

const dropdowns = [
  { label: "Products", items: productItems },
  { label: "Solutions", items: solutionItems },
  { label: "Resources", items: resourceItems },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <nav className="grid h-14 grid-cols-[1fr_auto] items-center gap-4 lg:h-16 lg:grid-cols-[1fr_auto_1fr] xl:h-[4.6rem]">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Pentacore home"
          >
            <Image
              src="/images/pentacore-logo.png"
              alt="Pentacore"
              width={180}
              height={48}
              priority
              className="h-10 w-44 object-cover object-center"
            />
          </Link>

          <div className="hidden items-center gap-6 xl:gap-10 lg:flex">
            {dropdowns.slice(0, 2).map((group) => (
              <div key={group.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-sm font-medium text-[#25443b] transition hover:text-[#BCD54D] xl:text-base"
                >
                  {group.label}
                  <RiArrowDownSLine className="h-5 w-5 transition group-hover:rotate-180" />
                </button>

                <div
                  className={cn(
                    "invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-7 opacity-0 transition group-hover:visible group-hover:opacity-100",
                    group.label === "Solutions" || group.label === "Products"
                      ? "w-[360px]"
                      : "w-[430px]",
                  )}
                >
                  <div className="rounded-2xl border border-navy-900/10 bg-white p-3 shadow-soft">
                    <div
                      className={cn(
                        "grid gap-1",
                        (group.label === "Solutions" ||
                          group.label === "Products") &&
                          "grid-cols-1 gap-2",
                      )}
                    >
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block rounded-xl px-4 py-3 transition hover:bg-[#BCD54D]/15",
                            (group.label === "Solutions" ||
                              group.label === "Products") &&
                              "py-2.5",
                          )}
                        >
                          <p
                            className={cn(
                              "text-sm text-navy-900",
                              "font-medium",
                            )}
                          >
                            {item.label}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Link
              href="/blogs"
              className="text-sm font-medium text-[#25443b] transition hover:text-[#BCD54D] xl:text-base"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#25443b] transition hover:text-[#BCD54D] xl:text-base"
            >
              Support
            </Link>

            {/* <Link
              href="/pricing"
              className="text-sm font-medium text-[#25443b] transition hover:text-[#BCD54D] xl:text-base"
            >
              Pricing
            </Link> */}
            {/* {dropdowns.slice(2).map((group) => (
              <div key={group.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-sm font-medium text-[#25443b] transition hover:text-[#BCD54D] xl:text-base"
                >
                  {group.label}
                  <RiArrowDownSLine className="h-5 w-5 transition group-hover:rotate-180" />
                </button>

                <div className="invisible absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-7 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-navy-900/10 bg-white p-3 shadow-soft">
                    <div className="grid gap-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-xl px-4 py-3 transition hover:bg-[#BCD54D]/15"
                        >
                          <p className="text-sm font-medium text-navy-900">
                            {item.label}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
          </div>

          <div className="hidden items-center justify-end gap-5 xl:gap-6 lg:flex">
            <LinkButton
              href="/contact"
              size="lg"
              className="h-12 xl:h-14 min-w-[100px] rounded-xl bg-white text-base font-semibold text-[#154036] hover:bg-white/80"
            >
              Sign In
            </LinkButton>
            <LinkButton
              href="/contact"
              className="h-12 min-w-[100px] rounded-xl text-sm xl:h-14 xl:min-w-[112px] xl:text-base"
            >
              Sign Up
            </LinkButton>
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="justify-self-end lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <RiCloseLine className="h-5 w-5" />
            ) : (
              <RiMenu3Line className="h-5 w-5" />
            )}
          </Button>
        </nav>
      </Container>

      <div
        className={cn(
          "fixed inset-x-0 top-14 z-40 origin-top border-b border-navy-900/10 bg-white px-4 py-6 shadow-soft transition lg:hidden",
          isOpen
            ? "scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {dropdowns.map((group) => (
            <div key={group.label}>
              <button
                type="button"
                onClick={() =>
                  setOpenMobileGroup((value) =>
                    value === group.label ? null : group.label,
                  )
                }
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-navy-900 transition hover:bg-[#BCD54D]/15 hover:text-[#BCD54D]"
              >
                {group.label}
                <RiArrowDownSLine
                  className={cn(
                    "h-4 w-4 transition",
                    openMobileGroup === group.label && "rotate-180",
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid overflow-hidden transition-all",
                  openMobileGroup === group.label
                    ? "max-h-[520px] opacity-100"
                    : "max-h-0 opacity-0",
                )}
              >
                <div className="grid gap-2 pb-2 pl-3">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        setOpenMobileGroup(null);
                      }}
                      className="rounded-xl px-4 py-3 transition hover:bg-[#BCD54D]/15"
                    >
                      <p className="text-sm font-medium text-navy-900">
                        {item.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {[{ label: "Pricing", href: "/pricing" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-navy-900 transition hover:bg-[#BCD54D]/15 hover:text-[#BCD54D]"
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-4 grid grid-cols-2 gap-3">
            <LinkButton
              href="/contact"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="rounded-xl h-12 xl:h-14"
            >
              Sign In
            </LinkButton>
            <LinkButton
              href="/contact"
              className="h-12 min-w-[100px] rounded-xl text-sm xl:h-14 xl:min-w-[112px] xl:text-base"
            >
              Sign Up
            </LinkButton>
          </div>
        </div>
      </div>
    </header>
  );
}
