import Link from "next/link";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMailSendLine,
  RiMapPin2Line,
  RiTwitterXFill,
} from "@remixicon/react";

import { Container } from "@/components/shared";

const footerLinks = [
  {
    title: "Products",
    links: [
      "Payment Links",
      "Checkout Pages",
      "Payouts",
      "API",
      "QR Payments",
      "Wallet",
    ],
  },
  {
    title: "Solutions",
    links: ["Ecommerce", "Gaming", "SaaS", "Marketplaces"],
  },
  {
    title: "Resources",
    links: ["Docs", "Pricing", "Support", "Blog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Compliance"],
  },
];

const bottomLinks = [
  "Terms",
  "Privacy Policy",
  "Refund Policy",
  "Merchant Agreement",
];

export function Footer() {
  return (
    <footer className="bg-[#063F32] py-16 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Pentacore home"
            >
              <span className="text-3xl font-bold tracking-tight">
                pentacore
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#B7D0C6]">
              Pentacore helps Indian businesses accept payments, automate
              payouts, track wallets, and run reliable fintech operations from
              one secure platform.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[#B7D0C6]">
              <p className="flex items-center gap-3">
                <RiMailSendLine className="h-5 w-5 text-[#BAD24A]" />
                <a
                  href="mailto:info@pentacore.com"
                  className="transition hover:text-[#BAD24A]"
                >
                  info@pentacore.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <RiMapPin2Line className="h-5 w-5 text-[#BAD24A]" />
                <span>Bengaluru, Karnataka, India</span>
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.links.map((label) => (
                    <li key={label}>
                      <Link
                        href={label === "Blog" ? "/blogs" : "/contact"}
                        className="text-sm text-[#B7D0C6] transition hover:text-[#BAD24A]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {bottomLinks.map((label) => (
              <Link
                key={label}
                href={label.includes("Privacy") ? "/privacy-policy" : "/terms-of-service"}
                className="text-xs text-[#B7D0C6] transition hover:text-[#BAD24A]"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {[RiTwitterXFill, RiInstagramFill, RiLinkedinBoxFill].map(
              (Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#B7D0C6] transition hover:border-[#BAD24A] hover:text-[#BAD24A]"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ),
            )}
          </div>
        </div>

        <p className="mt-8 text-xs leading-6 text-[#B7D0C6]">
          Copyright © {new Date().getFullYear()} Pentacore. Payment services
          and availability are subject to merchant approval, partner bank rules,
          and applicable Indian regulations.
        </p>
      </Container>
    </footer>
  );
}
