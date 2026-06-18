import {
  RiAlarmWarningLine,
  RiLockPasswordLine,
  RiShieldKeyholeLine,
  RiWebhookLine,
} from "@remixicon/react";

import { Card, Container, Para, SectionHeading } from "@/components/shared";

const security = [
  {
    icon: RiShieldKeyholeLine,
    title: "Secure API access",
    text: "API-key based access, role permissions, and merchant-level isolation.",
  },
  {
    icon: RiWebhookLine,
    title: "Signed webhooks",
    text: "Verify inbound and outbound events using hash-based payload validation.",
  },
  {
    icon: RiLockPasswordLine,
    title: "Data protection",
    text: "Sensitive keys and payment details are handled with strong security practices.",
  },
  {
    icon: RiAlarmWarningLine,
    title: "Risk alerts",
    text: "Detect transaction failures, channel issues, and suspicious operational patterns early.",
  },
];

export function Security() {
  return (
    <section id="security" className="pt-10 pb-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            label="Security and compliance"
            title="Security-first payment operations built for modern businesses."
            description="Pentacore helps businesses manage payment operations with a strong focus on security, reliability, and transparency. The platform is designed to support protected API communication, transaction-level traceability, reliable status updates, webhook-based notifications, reconciliation workflows, and clean audit-ready payment records. Whether you are handling payins, payouts, merchant settlements, or high-volume transaction flows, Pentacore gives your team the visibility and control needed to operate payments safely and efficiently."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {security.map((item) => (
              <Card
                key={item.title}
                className="group p-6 transition hover:shadow-soft"
              >
                <item.icon className="h-9 w-9 text-mint-500" />
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <Para className="mt-3 text-sm">{item.text}</Para>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
