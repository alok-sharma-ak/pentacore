import { Para } from "./Para";
import { Title } from "./Title";

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {label ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-mint-600">{label}</p> : null}
      <Title>{title}</Title>
      {description ? <Para className="mt-4">{description}</Para> : null}
    </div>
  );
}
