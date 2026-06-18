import { RiCheckboxCircleLine } from "@remixicon/react";

import { Card, Container, Para, SectionHeading } from "@/components/shared";
import Image from "next/image";

const items = [
  "Single dashboard for payins, payouts, refunds, and settlements",
  "Merchant-friendly onboarding and fast API integration",
  "Built for high-volume fintech and digital businesses",
];

export function About() {
  return (
    <section id="about" className="pb-10">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              label="About Pentacore"
              title="Payment infrastructure made for modern Indian businesses."
              description="Pentacore helps merchants accept payments, move funds, monitor balances, and scale their payment operations without managing multiple vendors or fragmented dashboards."
            />
            <div className="mt-8 space-y-4">
              {items.map((item) => (
                <div key={item} className="flex gap-3">
                  <RiCheckboxCircleLine className="mt-1 h-5 w-5 shrink-0 text-mint-500" />
                  <Para>{item}</Para>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 h-full items-center">
            <Card className="transition hover:shadow-soft overflow-hidden sm:-mt-10">
              <Image
                src="/card-mobile.jpg"
                alt="Merchants"
                width={500}
                height={500}
                className="object-contain"
              />
            </Card>
            <Card className="transition hover:shadow-soft overflow-hidden sm:mt-36">
              <Image
                src="/circle-arrow.jpg"
                alt="Merchants"
                width={500}
                height={500}
                className="object-contain"
              />
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
