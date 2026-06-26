import type { DropdownItem } from "@/data/product";

export type SolutionCard = {
  icon: "payment" | "link" | "api" | "wallet" | "shield" | "insight";
  title: string;
  description: string;
};

export type SolutionPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    imageUrl: string;
    imageAlt: string;
  };
  challenges: {
    title: string;
    description: string;
    cards: SolutionCard[];
    imageUrl?: string;
    imageAlt?: string;
  };
  capabilities: {
    title: string;
    description: string;
    cards: SolutionCard[];
  };
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    points: string[];
  };
  useCases: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  faqs: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
};

export type SolutionItem = DropdownItem & {
  slug: string;
};

export const solutionItems: SolutionItem[] = [
  {
    label: "Education",
    slug: "education",
    href: "/solutions/education",
  },
  {
    label: "Financial Services",
    slug: "financial-services",
    href: "/solutions/financial-services",
  },
  {
    label: "Food Service",
    slug: "food-service",
    href: "/solutions/food-service",
  },
  {
    label: "Retail & Shopping",
    slug: "retail-shopping",
    href: "/solutions/retail-shopping",
  },
  {
    label: "Telco & Utilities",
    slug: "telco-utilities",
    href: "/solutions/telco-utilities",
  },
];

const educationSolution: SolutionPageContent = {
  hero: {
    eyebrow: "Pentacore for Education",
    title: "Simpler fee collections for modern education teams.",
    description:
      "Collect admission fees, tuition, course payments, exam charges, and recurring dues while keeping every student payment easy to track.",
    cta: "Build your education flow",
    imageUrl: "/images/solutions/education-hero.png",
    imageAlt: "Pentacore education fee collection experience",
  },
  challenges: {
    title: "Education payments involve more than a single fee.",
    description:
      "Institutions need flexible collection methods and clear records across students, courses, campuses, and payment schedules.",
    cards: [
      {
        icon: "link",
        title: "Manual fee reminders",
        description:
          "Teams lose time sharing account details, checking screenshots, and following up on overdue payments.",
      },
      {
        icon: "insight",
        title: "Unclear student records",
        description:
          "Payment status becomes difficult to match with students, batches, invoices, and academic periods.",
      },
      {
        icon: "payment",
        title: "Different payment needs",
        description:
          "Admissions, tuition, transport, exams, and courses often require separate collection workflows.",
      },
    ],
    imageUrl: "/images/solutions/education-girl.png",
    imageAlt: "Pentacore education payment challenges",
  },
  capabilities: {
    title: "Payment tools built for every learning journey.",
    description:
      "Give students and parents familiar ways to pay while finance and administration retain clear operational visibility.",
    cards: [
      {
        icon: "link",
        title: "Fee payment links",
        description:
          "Share student-specific links through email, SMS, WhatsApp, portals, or digital invoices.",
      },
      {
        icon: "payment",
        title: "Online checkout",
        description:
          "Accept UPI, cards, wallets, and net banking for courses, admissions, and recurring dues.",
      },
      {
        icon: "api",
        title: "Portal integration",
        description:
          "Connect payment status with student portals, learning platforms, and internal administration systems.",
      },
      {
        icon: "insight",
        title: "Payment visibility",
        description:
          "Track paid, pending, failed, refunded, and settled transactions with student references.",
      },
    ],
  },
  workflow: {
    eyebrow: "Connected education payments",
    title: "Keep student payments and finance records aligned.",
    description:
      "Pentacore connects collection channels with transaction references, payment updates, refunds, and settlement activity.",
    imageUrl: "/images/solutions/education-1.png",
    imageAlt: "Pentacore education payment operations workflow",
    points: [
      "Student, course, and invoice-level references",
      "Payment links, checkout, QR, and API support",
      "Webhook updates for portals and internal systems",
      "Refund and settlement visibility for finance teams",
    ],
  },
  useCases: {
    title: "Built for education businesses of every kind.",
    items: [
      {
        title: "Schools and colleges",
        description:
          "Collect tuition, admission, transport, hostel, and examination fees.",
      },
      {
        title: "Edtech platforms",
        description:
          "Accept course, subscription, counselling, and certification payments.",
      },
      {
        title: "Coaching institutes",
        description:
          "Manage batch fees, installments, deposits, and branch-level collections.",
      },
      {
        title: "Training providers",
        description:
          "Collect workshop, corporate training, and professional program fees.",
      },
    ],
  },
  faqs: {
    title: "Education payment questions",
    items: [
      {
        question: "Can payments be linked to individual students?",
        answer:
          "Yes. Your payment flow can include student, invoice, course, batch, or academic-period references.",
      },
      {
        question: "Can Pentacore connect with our student portal?",
        answer:
          "Yes. APIs and webhooks can connect payment creation and status updates with your portal or administration system.",
      },
      {
        question: "Can we collect different types of fees?",
        answer:
          "Yes. Pentacore can support tuition, admission, exam, transport, course, deposit, and other education payment flows.",
      },
    ],
  },
  cta: {
    title: "Make education payments easier to collect and manage.",
    description:
      "Build a Pentacore payment flow for students, parents, administrators, and finance teams.",
    buttonText: "Talk to Pentacore",
  },
};

const financialServicesSolution: SolutionPageContent = {
  hero: {
    eyebrow: "Pentacore for Financial Services",
    title: "Reliable payment operations for financial products.",
    description:
      "Support collections, repayments, account funding, partner payouts, and transaction updates with secure APIs and clearer operational control.",
    cta: "Discuss your payment flow",
    imageUrl: "/images/solutions/fs-hero.png",
    imageAlt: "Pentacore financial services payment infrastructure",
  },
  challenges: {
    title: "Financial payment flows demand precision and visibility.",
    description:
      "Every money movement needs secure access, reliable status updates, clean references, and operational accountability.",
    cards: [
      {
        icon: "shield",
        title: "Sensitive money movement",
        description:
          "Collections and payouts require controlled access, traceable events, and dependable payment handling.",
      },
      {
        icon: "api",
        title: "Complex integrations",
        description:
          "Products need predictable APIs and webhooks that fit existing customer, account, and finance systems.",
      },
      {
        icon: "insight",
        title: "Operational reconciliation",
        description:
          "Teams must connect payment status, refunds, payouts, and settlements with internal records.",
      },
    ],
  },
  capabilities: {
    title: "Infrastructure for controlled financial workflows.",
    description:
      "Use Pentacore to connect customer payments and business money movement with your product and operations stack.",
    cards: [
      {
        icon: "api",
        title: "API-led collections",
        description:
          "Create payment orders, verify status, and embed payment experiences into financial products.",
      },
      {
        icon: "wallet",
        title: "Account funding visibility",
        description:
          "Track incoming funds, balances, refunds, settlements, and outgoing payment movement.",
      },
      {
        icon: "shield",
        title: "Secure operations",
        description:
          "Use scoped keys, webhook verification, controlled access, and traceable transaction events.",
      },
      {
        icon: "insight",
        title: "Real-time status",
        description:
          "Keep customer systems and internal teams aligned with reliable payment and payout updates.",
      },
    ],
  },
  workflow: {
    eyebrow: "Developer-first infrastructure",
    title: "Connect payments to your financial product architecture.",
    description:
      "Pentacore helps product, engineering, operations, and finance teams work from consistent payment references and status events.",
    imageUrl: "/images/solutions/fs-workflow.png",
    imageAlt: "Pentacore API for financial services",
    points: [
      "Order creation and payment verification APIs",
      "Signed webhooks and transaction status updates",
      "Refund, payout, and settlement activity",
      "References for customer and account reconciliation",
    ],
  },
  useCases: {
    title: "Financial workflows powered by Pentacore.",
    items: [
      {
        title: "Lending platforms",
        description:
          "Collect repayments, processing charges, deposits, and related customer payments.",
      },
      {
        title: "Insurance businesses",
        description:
          "Support premium collections, renewals, refunds, and partner payment workflows.",
      },
      {
        title: "Wealth and investment apps",
        description:
          "Connect account funding and payment status with customer product experiences.",
      },
      {
        title: "Fintech platforms",
        description:
          "Build custom collection, wallet, payout, and account-level payment operations.",
      },
    ],
  },
  faqs: {
    title: "Financial services questions",
    items: [
      {
        question: "Can Pentacore support custom financial product flows?",
        answer:
          "Yes. APIs and webhooks can be used to connect payments with your customer, account, and operations logic.",
      },
      {
        question: "Can payment and payout statuses update our backend?",
        answer:
          "Yes. Event callbacks can help your systems stay aligned with transaction status changes.",
      },
      {
        question: "Can finance teams reconcile activity?",
        answer:
          "Pentacore keeps transaction references, refunds, payouts, and settlement visibility available for operational review.",
      },
    ],
  },
  cta: {
    title: "Build dependable financial payment operations.",
    description:
      "Talk to Pentacore about APIs, collections, payouts, status updates, and reconciliation.",
    buttonText: "Contact our team",
  },
};

const foodServiceSolution: SolutionPageContent = {
  hero: {
    eyebrow: "Pentacore for Food Service",
    title: "Faster payments for restaurants, delivery, and food brands.",
    description:
      "Accept online, counter, QR, delivery, catering, and franchise payments while keeping every location and order easier to track.",
    cta: "Build your food payment flow",
    imageUrl: "/images/solutions/food-s-hero.png",
    imageAlt: "Pentacore QR and mobile payments for food service",
  },
  challenges: {
    title: "Food businesses move quickly. Payments must keep up.",
    description:
      "Peak-hour checkout, delivery collections, refunds, and multi-location reporting all depend on fast, visible payment operations.",
    cards: [
      {
        icon: "payment",
        title: "Peak-hour payment friction",
        description:
          "Slow or unclear checkout creates queues, abandoned orders, and extra work for staff.",
      },
      {
        icon: "link",
        title: "Disconnected order channels",
        description:
          "Counter, delivery, catering, social, and online orders often create fragmented payment records.",
      },
      {
        icon: "insight",
        title: "Location-level visibility",
        description:
          "Finance teams need to understand collections, refunds, and settlements across branches and brands.",
      },
    ],
  },
  capabilities: {
    title: "Flexible payment experiences for every order channel.",
    description:
      "Give customers quick ways to pay while operations teams retain a connected view of transaction activity.",
    cards: [
      {
        icon: "payment",
        title: "Online checkout",
        description:
          "Accept UPI, cards, wallets, and net banking for website and app orders.",
      },
      {
        icon: "link",
        title: "Catering payment links",
        description:
          "Collect deposits, event balances, bulk orders, and custom invoices through secure links.",
      },
      {
        icon: "wallet",
        title: "QR and counter payments",
        description:
          "Support scan-and-pay flows for counters, tables, kiosks, deliveries, and events.",
      },
      {
        icon: "insight",
        title: "Order payment tracking",
        description:
          "Keep payment, refund, and settlement status connected with order references.",
      },
    ],
  },
  workflow: {
    eyebrow: "One view across channels",
    title: "Connect every payment to the right order and location.",
    description:
      "Pentacore helps food businesses organize payment activity across online orders, counters, deliveries, catering, and branches.",
    imageUrl: "/images/solutions/food.png",
    imageAlt: "Pentacore food service payment workflow",
    points: [
      "Order and location-level payment references",
      "Online, link, QR, and counter collections",
      "Refund visibility for cancelled orders",
      "Settlement records for finance and franchise teams",
    ],
  },
  useCases: {
    title: "Made for modern food businesses.",
    items: [
      {
        title: "Restaurants and cafes",
        description:
          "Accept counter, table, takeaway, delivery, and online order payments.",
      },
      {
        title: "Cloud kitchens",
        description:
          "Track digital collections and refunds across brands and order sources.",
      },
      {
        title: "Catering businesses",
        description:
          "Collect booking deposits, milestone payments, and final event balances.",
      },
      {
        title: "Food franchises",
        description:
          "Keep branch-level collections and central payment reporting connected.",
      },
    ],
  },
  faqs: {
    title: "Food service payment questions",
    items: [
      {
        question: "Can Pentacore support both online and in-store payments?",
        answer:
          "Yes. Businesses can combine checkout, payment links, QR, and other supported collection flows.",
      },
      {
        question: "Can transactions include order or branch references?",
        answer:
          "Yes. Payment records can include the references your operations and finance teams need.",
      },
      {
        question: "Can refunds be tracked for cancelled orders?",
        answer:
          "Yes. Refund status can remain connected to the original payment and order reference.",
      },
    ],
  },
  cta: {
    title: "Serve customers faster with simpler payments.",
    description:
      "Create connected collection flows for online orders, counters, deliveries, and catering.",
    buttonText: "Talk to Pentacore",
  },
};

const retailShoppingSolution: SolutionPageContent = {
  hero: {
    eyebrow: "Pentacore for Retail & Shopping",
    title: "Connected payments for every retail channel.",
    description:
      "Unify online checkout, store QR, payment links, refunds, and transaction visibility across modern retail operations.",
    cta: "Build your retail payment flow",
    imageUrl: "/images/solutions/retail-hero.png",
    imageAlt: "Pentacore checkout for retail and shopping",
  },
  challenges: {
    title: "Retail customers move between channels. Payment data should too.",
    description:
      "Stores need consistent customer payment experiences and operational visibility across ecommerce, social selling, branches, and delivery.",
    cards: [
      {
        icon: "payment",
        title: "Checkout drop-off",
        description:
          "Customers abandon purchases when payment options feel slow, unfamiliar, or unclear.",
      },
      {
        icon: "link",
        title: "Social and assisted orders",
        description:
          "Sales teams need a secure way to close orders happening outside the main storefront.",
      },
      {
        icon: "insight",
        title: "Omnichannel reconciliation",
        description:
          "Finance teams need one view across online, in-store, refunds, and settlement activity.",
      },
    ],
  },
  capabilities: {
    title: "Payment products for every retail moment.",
    description:
      "From product discovery to refund completion, Pentacore keeps customer payments and business records connected.",
    cards: [
      {
        icon: "payment",
        title: "Express checkout",
        description:
          "Offer familiar Indian payment methods through a clean online checkout.",
      },
      {
        icon: "link",
        title: "Assisted payment links",
        description:
          "Close WhatsApp, social, phone, and custom orders with traceable links.",
      },
      {
        icon: "wallet",
        title: "In-store QR",
        description:
          "Accept fast UPI-led payments at counters, pop-ups, events, and delivery points.",
      },
      {
        icon: "insight",
        title: "Refund and settlement tracking",
        description:
          "Keep post-purchase money movement visible to support and finance teams.",
      },
    ],
  },
  workflow: {
    eyebrow: "Omnichannel payment operations",
    title: "Keep customer payments connected across every channel.",
    description:
      "Pentacore links orders, payment status, refunds, and settlement movement so retail teams work from consistent records.",
    imageUrl: "/images/solutions/retail-workflow.png",
    imageAlt: "Pentacore retail payment operations dashboard",
    points: [
      "Online, social, assisted, and in-store collections",
      "Customer and order-level payment references",
      "Refund status for support teams",
      "Mobile visibility for owners and operators",
    ],
  },
  useCases: {
    title: "Built for changing retail models.",
    items: [
      {
        title: "Ecommerce brands",
        description:
          "Accept online payments and keep order, refund, and settlement activity connected.",
      },
      {
        title: "Physical stores",
        description:
          "Use QR and digital payment flows at counters, branches, and pop-up locations.",
      },
      {
        title: "Social commerce",
        description:
          "Collect through shareable links for WhatsApp, Instagram, and assisted sales.",
      },
      {
        title: "Marketplaces",
        description:
          "Support platform-led collections, participant records, and payout operations.",
      },
    ],
  },
  faqs: {
    title: "Retail payment questions",
    items: [
      {
        question: "Can Pentacore support online and physical stores?",
        answer:
          "Yes. Checkout, links, QR, APIs, and dashboard tools can support multiple retail channels.",
      },
      {
        question: "Can customer support track refunds?",
        answer:
          "Yes. Refund activity can remain connected to the original transaction and order reference.",
      },
      {
        question: "Can we use payment links for social orders?",
        answer:
          "Yes. Payment links can be shared through chat, social channels, SMS, email, or invoices.",
      },
    ],
  },
  cta: {
    title: "Turn every retail channel into a connected payment experience.",
    description:
      "Use Pentacore for checkout, links, QR, refunds, and retail payment visibility.",
    buttonText: "Contact sales",
  },
};

const telcoUtilitiesSolution: SolutionPageContent = {
  hero: {
    eyebrow: "Pentacore for Telco & Utilities",
    title: "Reliable collections for recurring essential services.",
    description:
      "Collect bills, recharges, subscriptions, deposits, and overdue balances while keeping customer and account payment status visible.",
    cta: "Build your billing flow",
    imageUrl: "/images/solutions/telco-hero.png",
    imageAlt: "Pentacore mobile billing and collection dashboard",
  },
  challenges: {
    title: "High-volume billing needs dependable payment operations.",
    description:
      "Recurring bills, customer accounts, service activation, and reconciliation all rely on timely payment status.",
    cards: [
      {
        icon: "payment",
        title: "Large recurring volume",
        description:
          "Billing teams need payment flows that can handle frequent and time-sensitive customer collections.",
      },
      {
        icon: "api",
        title: "Service status dependencies",
        description:
          "Customer access, recharge, or service continuation often depends on reliable payment confirmation.",
      },
      {
        icon: "insight",
        title: "Account reconciliation",
        description:
          "Payments must connect with customer IDs, bill references, service accounts, and settlement records.",
      },
    ],
  },
  capabilities: {
    title: "Flexible collections for recurring service businesses.",
    description:
      "Give customers simple digital payment options while keeping billing and operations systems updated.",
    cards: [
      {
        icon: "api",
        title: "Billing integration",
        description:
          "Create payments and receive status updates inside customer portals, apps, and internal systems.",
      },
      {
        icon: "link",
        title: "Bill payment links",
        description:
          "Send account-specific collection links through SMS, email, WhatsApp, or digital bills.",
      },
      {
        icon: "payment",
        title: "Customer checkout",
        description:
          "Accept UPI, cards, wallets, and net banking for bills, recharges, and deposits.",
      },
      {
        icon: "insight",
        title: "Real-time status visibility",
        description:
          "Track successful, pending, failed, refunded, and settled payment activity.",
      },
    ],
  },
  workflow: {
    eyebrow: "Account-linked collections",
    title: "Connect every payment to the right customer and service.",
    description:
      "Pentacore helps billing platforms match payment events with account references and operational actions.",
    imageUrl: "/images/solutions/telco-workflow.png",
    imageAlt: "Pentacore API for utility and telecom billing",
    points: [
      "Customer, bill, and service-account references",
      "API, checkout, and payment link collections",
      "Webhook updates for activation and billing systems",
      "Refund and settlement visibility for finance teams",
    ],
  },
  useCases: {
    title: "Support essential service payment flows.",
    items: [
      {
        title: "Telecom providers",
        description:
          "Collect prepaid recharges, postpaid bills, deposits, and service charges.",
      },
      {
        title: "Internet providers",
        description:
          "Accept subscriptions, renewals, installation fees, and overdue balances.",
      },
      {
        title: "Utility services",
        description:
          "Collect electricity, water, gas, maintenance, and account-related payments.",
      },
      {
        title: "Subscription services",
        description:
          "Support recurring plans, renewals, add-ons, and customer account funding.",
      },
    ],
  },
  faqs: {
    title: "Telco and utility payment questions",
    items: [
      {
        question: "Can payments include customer account references?",
        answer:
          "Yes. Transactions can carry the customer, bill, service, or account references your systems require.",
      },
      {
        question: "Can payment status update service systems?",
        answer:
          "Yes. APIs and webhooks can help update billing, activation, and customer systems.",
      },
      {
        question: "Can customers receive payment links for outstanding bills?",
        answer:
          "Yes. Account-specific links can be shared through supported customer communication channels.",
      },
    ],
  },
  cta: {
    title: "Modernize recurring service collections.",
    description:
      "Connect billing, payment status, customer accounts, and finance visibility with Pentacore.",
    buttonText: "Talk to our team",
  },
};

export const solutionPageContent: Record<string, SolutionPageContent> = {
  education: educationSolution,
  "financial-services": financialServicesSolution,
  "food-service": foodServiceSolution,
  "retail-shopping": retailShoppingSolution,
  "telco-utilities": telcoUtilitiesSolution,
};
