import Link from "next/link";
import { Button, type ButtonProps } from "@/components/ui/button";

interface LinkButtonProps extends ButtonProps {
  href: string;
}

export function LinkButton({ href, children, ...props }: LinkButtonProps) {
  return (
    <Button asChild {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
