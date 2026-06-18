import { cn } from "@/lib/utils";

export function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-2xl font-bold tracking-tight text-ink sm:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
