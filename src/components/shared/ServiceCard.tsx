import { type ComponentType } from "react";
import { RiArrowRightLine } from "@remixicon/react";

import { Card } from "./Card";
import { Para } from "./Para";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  index?: number;
  arrow?: boolean;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  tags = [],
  href,
  arrow = true,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "group relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 transition-all duration-300",
        "hover:border-[hsl(var(--primary))]/40 hover:shadow-lg",
      )}
      href={href}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[hsl(var(--primary))] via-emerald-300 to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-50 transition duration-300 group-hover:scale-125 group-hover:bg-emerald-100" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[hsl(var(--primary))] ring-1 ring-[hsl(var(--primary))]/15 transition duration-300 group-hover:bg-[hsl(var(--primary))] group-hover:text-white group-hover:shadow-lg">
            <Icon className="h-7 w-7" />
          </div>

          {arrow && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition duration-300 group-hover:border-[hsl(var(--primary))]/40 group-hover:bg-emerald-50 group-hover:text-[hsl(var(--primary))]">
              <RiArrowRightLine className="h-5 w-5 transition duration-300 group-hover:translate-x-0.5" />
            </div>
          )}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold tracking-tight text-slate-950">
            {title}
          </h3>

          <Para className="mt-4 text-sm leading-7 text-slate-600">
            {description}
          </Para>
        </div>

        {tags.length ? (
          <div className="mt-auto pt-7">
            <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-5">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-600 ring-1 ring-slate-200 transition group-hover:bg-emerald-50 group-hover:text-[hsl(var(--primary))] group-hover:ring-emerald-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </Card>
  );
}
