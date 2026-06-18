import type { IndustryItem } from "@/data/industries";
import { Container, SectionHeading, ServiceCard } from "@/components/shared";

type IndustryFeaturesProps = {
  industry: IndustryItem;
};

export function IndustryFeatures({ industry }: IndustryFeaturesProps) {
  return (
    <section className="relative py-10">
      <Container>
        <div className="relative">
          <SectionHeading
            label="Industry specific features"
            title={`Built for ${industry.label} operations`}
            description="Pentacore gives your team the infrastructure needed to collect payments, manage payouts, track transaction status, and simplify reconciliation."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.features.map((feature) => (
              <ServiceCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                arrow={false}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
