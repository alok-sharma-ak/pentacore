import { notFound } from "next/navigation";

import { ProductPageLayout } from "@/components/products-component/ProductPageLayout";
import { productItems, productPageContent } from "@/data/product";

export function generateStaticParams() {
  return productItems.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const page = productPageContent[resolvedParams.slug];

  if (!page) {
    notFound();
  }

  return <ProductPageLayout page={page} />;
}
