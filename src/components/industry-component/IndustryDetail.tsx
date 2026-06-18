import type { IndustryItem } from "@/data/industries";

import { IndustryFeatures } from "./IndustryFeatures";
import { IndustryHero } from "./IndustryHero";
import { IndustryContent } from "./industry-content";

type IndustryDetailProps = {
  industry: IndustryItem;
  otherIndustries: IndustryItem[];
};

export function IndustryDetail({
  industry,
  otherIndustries,
}: IndustryDetailProps) {
  return (
    <main className="overflow-hidden">
      <IndustryHero industry={industry} />
      <IndustryFeatures industry={industry} />
      <IndustryContent industry={industry} />
    </main>
  );
}
