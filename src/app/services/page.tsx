import { RiArrowRightLine, RiCheckLine } from "@remixicon/react";

import {
  Container,
  FaqItem,
  FaqSection,
  LinkButton,
  SectionHeading,
} from "@/components/shared";
import { methods } from "@/data/services";
import Image from "next/image";

const serviceFaqs: FaqItem[] = [
  {
    question: "What is Payin?",
    answer:
      "Payin means collecting money from your customers into your business account. With Pentacore, you can accept online payments through UPI, cards, net banking, payment links, and other supported payment methods.",
  },
  {
    question: "What is Payout?",
    answer:
      "Payout means sending money from your business account to users, vendors, partners, employees, or bank accounts. Pentacore helps businesses process payouts securely with clear transaction tracking.",
  },
  {
    question: "Do you support UPI collections?",
    answer:
      "Yes. Pentacore supports UPI collections so your customers can pay quickly using UPI apps. UPI is useful for fast checkout, payment links, and high-volume digital payment flows.",
  },
  {
    question: "Can I send vendor/user payouts?",
    answer:
      "Yes. You can send payouts to vendors, users, partners, or other beneficiaries. Pentacore helps you manage payout status, transaction references, and payment records from one platform.",
  },
  {
    question: "Do you provide API integration?",
    answer:
      "Yes. Pentacore provides API integration for payins, payouts, transaction status checks, and webhook callbacks. Your website, mobile app, or internal system can connect directly with Pentacore APIs.",
  },
  {
    question: "Can I track transaction status?",
    answer:
      "Yes. You can track transaction status for both payins and payouts. Pentacore helps you monitor whether a transaction is initiated, pending, successful, failed, refunded, or settled, depending on the transaction flow.",
  },
  {
    question: "Do you support webhook callbacks?",
    answer:
      "Yes. Pentacore supports webhook callbacks so your system can receive automatic transaction updates. This helps you update order status, payout status, and internal records without manually checking every transaction.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading
            label="Pentacore services"
            title="Payment services built for fast-moving businesses."
            description="Explore Pentacore’s payin, payout, wallet, settlement, and payment collection solutions in detail. Every service is designed to help merchants move money faster, track transactions clearly, and manage operations with confidence."
          />
        </Container>
      </section>

      <section className="bg-slate-50 space-y-24">
        <Container>
          <div className="space-y-24">
            {methods.map((service, index) => {
              const isReverse = index % 2 !== 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2"
                >
                  <div className={isReverse ? "lg:order-2" : ""}>
                    <SectionHeading
                      align="left"
                      title={service.title}
                      description={service.description}
                    />

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-mint-200 bg-mint-50 px-4 py-2 text-xs font-semibold text-mint-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 grid gap-3">
                      {service.points.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-500 text-white">
                            <RiCheckLine className="h-3.5 w-3.5" />
                          </div>
                          <p className="text-sm leading-6 text-slate-600">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    <LinkButton href="/contact" size="lg" className="mt-8">
                      {service.btnText}
                      <RiArrowRightLine className="h-5 w-5" />
                    </LinkButton>
                  </div>

                  <div className={isReverse ? "lg:order-1" : ""}>
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
        <FaqSection
          items={serviceFaqs}
          label="Service FAQ"
          title="Questions about payins, payouts, APIs, and webhooks"
          description="Understand how Pentacore helps your business collect payments, send payouts, track transaction status, and automate payment updates through APIs and webhooks."
        />
      </section>
    </main>
  );
}
