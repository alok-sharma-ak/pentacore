import { notFound } from "next/navigation";

import { IndustryDetail } from "@/components/industry-component/IndustryDetail";
import { industryItems } from "@/data/industries";

export function generateStaticParams() {
  return industryItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const industry = industryItems.find(
    (item) => item.slug === resolvedParams.slug,
  );

  if (!industry) {
    notFound();
  }

  const otherIndustries = industryItems.filter(
    (item) => item.slug !== industry.slug,
  );

  return (
    <IndustryDetail
      industry={industry}
      otherIndustries={otherIndustries}
    />
  );
}
