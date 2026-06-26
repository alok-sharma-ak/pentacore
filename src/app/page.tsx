import {
  ApiPreview,
  FintechSecurity,
  FinancialServices,
  Hero,
  ProductCards,
} from "@/components/sections";
import { FinalCta } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TrustedBusinesses /> */}
      <ProductCards />
      <FinancialServices />
      <ApiPreview />
      <FintechSecurity />
      {/* <IndustryTrust /> */}
      <FinalCta
        id="pricing"
        title="Start building with Pentacore payments today"
        buttonText="Get Started"
        buttonHref="/contact"
      />
    </>
  );
}
