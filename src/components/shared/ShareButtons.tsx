"use client";

import { useEffect, useState } from "react";
import {
  RiFacebookCircleFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "@remixicon/react";

type ShareButtonsProps = {
  title: string;
};

export function ShareButtons({ title }: ShareButtonsProps) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const shareLinks = [
    {
      icon: RiTwitterXFill,
      label: "Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      icon: RiLinkedinBoxFill,
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      icon: RiFacebookCircleFill,
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="mr-2 hidden text-xs font-black uppercase tracking-widest text-slate-400 sm:inline">
        Share
      </span>
      {shareLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${social.label}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
export default ShareButtons;
