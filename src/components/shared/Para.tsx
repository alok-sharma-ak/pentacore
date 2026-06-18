import { cn } from "@/lib/utils";

export function Para({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("text-sm leading-7 text-slate-600 sm:text-base", className)}>{children}</p>;
}
