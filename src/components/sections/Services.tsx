import { Container, SectionHeading, ServiceCard } from "@/components/shared";
import { methods } from "@/data/services";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[hsl(var(--background))] py-20 sm:py-24"
    >
      <Container>
        <div className="relative">
          <SectionHeading
            label="Payin and payout services"
            title="Everyday India pays, in one integration."
            description="Accept payments, manage payouts, track settlements, and monitor transactions with secure APIs built for growing businesses."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {methods.slice(0, 6).map((method, index) => (
              <ServiceCard
                key={method.id}
                icon={method.icon}
                title={method.title}
                description={method.shortDescription}
                tags={method.tags}
                href={`/services#${method.id}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
