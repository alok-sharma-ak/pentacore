import {
  ApiPreview,
  FinalCta,
  FintechSecurity,
  FinancialServices,
  Hero,
  IndustryTrust,
  ProductCards,
  TrustedBusinesses,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBusinesses />
      <ProductCards />
      <FinancialServices />
      <ApiPreview />
      <FintechSecurity />
      <IndustryTrust />
      <FinalCta />
    </>
  );
}
