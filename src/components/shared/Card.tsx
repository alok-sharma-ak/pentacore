import Link from "next/link";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "group block rounded-2xl bg-white transition hover:shadow-soft",
          className,
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <div className={cn("rounded-2xl bg-white", className)}>{children}</div>
  );
}
