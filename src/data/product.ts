export type DropdownItem = {
  label: string;
  href: string;
};

export type ProductItem = DropdownItem & {
  slug: string;
  headline: string;
  description: string;
  imageUrl: string;
  features: string[];
};

export const productItems: ProductItem[] = [
  {
    label: "Accept Payments",
    slug: "accept-payments",
    href: "/products/accept-payments",
    headline: "Accept customer payments across every digital channel.",
    description:
      "Use Pentacore to collect payments through UPI, cards, wallets, net banking, payment links, checkout, and QR flows with clear transaction status.",
    imageUrl: "/images/products/payment-link.png",
    features: [
      "UPI, cards, wallets, and net banking",
      "Payment links, checkout, and QR collections",
      "Live payment status and settlement visibility",
    ],
  },
  {
    label: "Send Payouts",
    slug: "send-payouts",
    href: "/products/send-payouts",
    headline: "Send payouts to vendors, partners, and teams with control.",
    description:
      "Automate outgoing payments, track payout status, and keep finance-ready records for every transfer from your Pentacore dashboard.",
    imageUrl: "/images/products/business-capital.png",
    features: [
      "Vendor, partner, seller, and team payouts",
      "Status tracking for every transfer",
      "Clean records for support and finance teams",
    ],
  },
  {
    label: "Track Transactions",
    slug: "track-transactions",
    href: "/products/track-transactions",
    headline: "Track payments, refunds, payouts, and settlements in one place.",
    description:
      "Give your team a clear view of every money movement so support, operations, and finance can work from the same payment truth.",
    imageUrl: "/images/products/mobile-app.png",
    features: [
      "Searchable transaction activity",
      "Refund, settlement, and payout visibility",
      "Status clarity for operations and support",
    ],
  },
  {
    label: "Create Payment Links",
    slug: "create-payment-links",
    href: "/products/create-payment-links",
    headline: "Create secure payment links for fast collections.",
    description:
      "Share Pentacore payment links over WhatsApp, SMS, email, invoices, and social channels to collect money without building a checkout first.",
    imageUrl: "/images/products/payment-qr.png",
    features: [
      "Share links across WhatsApp, SMS, and email",
      "Collect invoice, order, and subscription payments",
      "Track link status from the dashboard",
    ],
  },
  {
    label: "Connect APIs",
    slug: "connect-apis",
    href: "/products/connect-apis",
    headline: "Connect Pentacore APIs to your website, app, or platform.",
    description:
      "Create orders, verify payments, automate payouts, and receive webhook updates through APIs built for modern Indian payment teams.",
    imageUrl: "/images/products/payment-api.png",
    features: [
      "Order creation and payment verification",
      "Webhook callbacks for real-time updates",
      "API flows for payins, payouts, and reconciliation",
    ],
  },
];
