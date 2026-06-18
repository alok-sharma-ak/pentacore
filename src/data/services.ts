import {
  RiBankCardLine,
  RiBankLine,
  RiBuilding4Line,
  RiCodeBoxLine,
  RiFlowChart,
  RiLinksLine,
  RiRepeatLine,
  RiWallet3Line,
} from "@remixicon/react";

export const methods = [
  {
    id: "payment-flow",
    icon: RiFlowChart,
    title: "Built for every payment flow",
    imageUrl: "/payment-flow.png",
    shortDescription:
      "From customer payment to webhook updates and settlement tracking, Pentacore keeps the flow clear.",
    btnText: "Discuss payment flows",
    description:
      "Pentacore is designed to support practical payment operations where every transaction can be processed, tracked, updated, and reconciled with better visibility. Merchants can understand how payments move from customer checkout to final settlement.",
    tags: ["Payins", "Webhooks", "Settlement"],
    points: [
      "Customer initiates payment",
      "Transaction is securely processed",
      "Webhook update is sent to merchant system",
      "Transaction status can be tracked",
      "Settlement movement is monitored",
    ],
  },
  {
    id: "business-use-cases",
    icon: RiBuilding4Line,
    title: "Who uses Pentacore services?",
    imageUrl: "/business-use-cases.png",
    shortDescription:
      "Payment solutions for digital businesses that need reliable collection, payout, and tracking flows.",
    btnText: "Find your use case",
    description:
      "Pentacore supports different types of online businesses that need secure payment collection, smooth payout operations, and transaction visibility. It helps merchants manage payments with better control across business models.",
    tags: ["EdTech", "E-commerce"],
    points: [
      "EdTech platforms",
      "E-commerce stores",
      "Travel businesses",
      "Insurance brokers",
      "Vendor payout businesses",
    ],
  },
  {
    id: "api-first-infrastructure",
    icon: RiCodeBoxLine,
    title: "API-first payment infrastructure",
    imageUrl: "/api-infrastructure.png",
    shortDescription:
      "Clean APIs, webhook callbacks, status tracking, and developer support for faster integration.",
    btnText: "Talk to our API team",
    description:
      "Pentacore provides API-first payment infrastructure for merchants and developers who need secure, structured, and reliable payment integration. From payment creation to status checks and webhook updates, the platform is built to support modern digital payment workflows.",
    tags: ["API", "Webhook", "Sandbox"],
    points: [
      "Clean payment APIs",
      "Webhook callbacks for transaction updates",
      "Transaction status APIs",
      "Sandbox testing support",
      "Secure authentication",
      "Developer support for integration",
    ],
  },
  {
    id: "upi",
    icon: RiBankCardLine,
    title: "UPI",
    imageUrl: "/upi.png",
    shortDescription:
      "Accept UPI payments through collect, intent, QR, and AutoPay-ready flows.",
    btnText: "Enable UPI payments",
    description:
      "Pentacore enables businesses to accept fast and secure UPI payments across multiple customer journeys. Merchants can collect payments using UPI Collect, QR codes, UPI Intent, and AutoPay-ready flows while maintaining clear transaction visibility, status tracking, and reconciliation support.",
    tags: ["UPI Collect", "QR", "Intent", "AutoPay"],
    points: [
      "Instant UPI payment collection",
      "QR and intent-based checkout support",
      "Transaction status tracking",
      "Webhook-based payment updates",
      "Easy reconciliation for finance teams",
    ],
  },
  {
    id: "bank-transfer",
    icon: RiBankLine,
    title: "Payouts",
    imageUrl: "/bank-transfer.png",
    shortDescription:
      "Handle bank-transfer-based movement with structured tracking and reconciliation support.",
    btnText: "Set up bank transfers",
    description:
      "Manage bank-transfer payments with structured transaction records and clear settlement visibility. Pentacore helps merchants track IMPS, NEFT, and RTGS-based movement with better operational control and audit-ready reporting.",
    tags: ["IMPS", "NEFT", "RTGS"],
    points: [
      "Support for major bank transfer modes",
      "Clear payment tracking",
      "Settlement visibility",
      "Useful for vendor and merchant payments",
      "Finance-ready transaction records",
    ],
  },
  {
    id: "payment-links",
    icon: RiLinksLine,
    title: "Payment links",
    imageUrl: "/payment-options.png",
    shortDescription:
      "Generate branded payment links for invoices, SMS, WhatsApp, and support teams.",
    btnText: "Create payment links",
    description:
      "Create simple payment links that can be shared with customers through SMS, WhatsApp, email, invoices, or support chats. Payment links help businesses collect payments without building a full checkout experience.",
    tags: ["No code", "WhatsApp ready", "Custom brand"],
    points: [
      "No-code payment collection",
      "Share links on WhatsApp, SMS, or email",
      "Useful for support and sales teams",
      "Track link payment status",
      "Simple checkout experience for customers",
    ],
  },
  {
    id: "recurring-payments",
    icon: RiRepeatLine,
    title: "Recurring payments",
    imageUrl: "/recurring-payments.png",
    shortDescription:
      "Support subscription-style collection using UPI AutoPay and mandate-ready workflows.",
    btnText: "Plan recurring payments",
    description:
      "Pentacore supports recurring payment workflows for subscription-based businesses, membership platforms, renewal payments, and repeat billing use cases. Businesses can create smoother payment experiences for customers with mandate-ready flows.",
    tags: ["Mandates", "Subscriptions", "Renewals"],
    points: [
      "Subscription payment support",
      "UPI AutoPay-ready workflows",
      "Mandate-based collection journeys",
      "Renewal payment tracking",
      "Better customer retention workflows",
    ],
  },
  {
    id: "merchant-wallet",
    icon: RiWallet3Line,
    title: "Merchant wallet",
    imageUrl: "/merchant-wallet.png",
    shortDescription:
      "Track available balance, reserves, settlements, refunds, and operational cash movement.",
    btnText: "Review wallet options",
    description:
      "The merchant wallet gives businesses better visibility over available balance, reserve balance, settlements, refunds, payout movement, and operational cash flow. It helps finance and operations teams understand payment movement in one place.",
    tags: ["Balance", "Reserve", "Ledger"],
    points: [
      "Available balance tracking",
      "Reserve and settlement visibility",
      "Refund and payout movement records",
      "Ledger-style transaction clarity",
      "Useful for audit and reconciliation",
    ],
  },
];
