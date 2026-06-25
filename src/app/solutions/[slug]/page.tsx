import { notFound } from "next/navigation";

import { SolutionPageLayout } from "@/components/solutions-component/SolutionPageLayout";
import { solutionItems, solutionPageContent } from "@/data/solutions";

export function generateStaticParams() {
  return solutionItems.map((solution) => ({
    slug: solution.slug,
  }));
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = solutionPageContent[slug];

  if (!page) {
    notFound();
  }

  return <SolutionPageLayout page={page} />;
}
