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

export type ProductCardContent = {
  icon: "link" | "message" | "store" | "flash" | "bank";
  title: string;
  description: string;
  note?: string;
  points?: string[];
};

export type ProductSetupStep = {
  step: string;
  title: string;
  description: string;
  imageUrl: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductMetric = {
  value: string;
  label: string;
};

export type ProductUseCase = {
  title: string;
  description: string;
};

export type ProductComparisonCard = {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  badge?: string;
  badgeTone?: "error" | "success";
};

export type ProductFeatureCard = {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export type ProductHighlightItem = {
  title?: string;
  description?: string;
};

export type ProductPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    footnote?: string;
    imageUrl: string;
    imageAlt: string;
  };
  appHighlights?: {
    title?: string;
    description?: string;
    cards?: ProductFeatureCard[];
  };
  appTools?: {
    title?: string;
    description?: string;
    cards?: ProductFeatureCard[];
  };
  appTransfers?: {
    title?: string;
    accentText?: string;
    description?: string;
    images?: {
      imageUrl?: string;
      imageAlt?: string;
    }[];
  };
  appOperations?: {
    title?: string;
    description?: string;
    cards?: ProductFeatureCard[];
  };
  comparison?: {
    title?: string;
    accentText?: string;
    description?: string;
    cards?: ProductComparisonCard[];
  };
  featureShowcase?: {
    title?: string;
    description?: string;
    cards?: ProductFeatureCard[];
  };
  developerHighlight?: {
    title?: string;
    description?: string;
    imageUrl?: string;
    imageAlt?: string;
    items?: ProductHighlightItem[];
  };
  problems?: {
    title?: string;
    cards?: ProductCardContent[];
  };
  benefits?: {
    title?: string;
    cards?: ProductCardContent[];
  };
  setup?: {
    title?: string;
    steps?: ProductSetupStep[];
  };
  operations?: {
    title?: string;
    description?: string;
    imageUrl?: string;
    imageAlt?: string;
    metrics?: ProductMetric[];
  };
  useCases?: {
    title?: string;
    items?: ProductUseCase[];
  };
  faqs?: {
    title?: string;
    items?: ProductFaq[];
  };
  cta?: {
    title?: string;
    description?: string;
    buttonText?: string;
  };
};

export const productItems: ProductItem[] = [
  {
    label: "Payment Links",
    slug: "payment-links",
    href: "/products/payment-links",
    headline: "Create secure payment links for fast collections.",
    description:
      "Create Pentacore payment links for invoices, WhatsApp orders, subscriptions, and quick UPI collections.",
    imageUrl: "/images/products/payment-link.png",
    features: [
      "Share links across WhatsApp, SMS, and email",
      "Collect invoice, order, and subscription payments",
      "Track link status from the dashboard",
    ],
  },
  {
    label: "QR Payments",
    slug: "qr-payments",
    href: "/products/qr-payments",
    headline: "Accept scan-and-pay collections with Pentacore QR.",
    description:
      "Accept in-store and field payments with static or dynamic QR codes backed by Pentacore tracking.",
    imageUrl: "/images/products/payment-qr.png",
    features: [
      "Static and dynamic QR collections",
      "UPI-ready in-store payment flow",
      "Field payment status tracking",
    ],
  },
  {
    label: "Express Checkout",
    slug: "express-checkout",
    href: "/products/express-checkout",
    headline: "Give customers a faster branded checkout experience.",
    description:
      "Give customers a branded Pentacore checkout with UPI, cards, net banking, and wallet options.",
    imageUrl: "/images/products/checkout.png",
    features: [
      "UPI, card, wallet, and net banking options",
      "Branded customer checkout flow",
      "Cleaner payment confirmation experience",
    ],
  },
  {
    label: "Payment API",
    slug: "payment-api",
    href: "/products/payment-api",
    headline: "Connect Pentacore APIs to your website, app, or platform.",
    description:
      "Use Pentacore APIs to create orders, verify payments, listen to webhooks, and reconcile faster.",
    imageUrl: "/images/products/payment-api.png",
    features: [
      "Order creation and payment verification",
      "Webhook callbacks for real-time updates",
      "API flows for payins and reconciliation",
    ],
  },
  {
    label: "Mobile App",
    slug: "mobile-app",
    href: "/products/mobile-app",
    headline: "Monitor Pentacore payment activity from anywhere.",
    description:
      "Monitor Pentacore transactions, settlements, and customer payment status from anywhere.",
    imageUrl: "/images/products/mobile-app.png",
    features: [
      "Mobile transaction monitoring",
      "Customer payment status visibility",
      "Settlement and activity updates",
    ],
  },
];

const paymentLinksPage: ProductPageContent = {
  hero: {
    eyebrow: "Pentacore Payment Links",
    title: "Collect payments with links you can share anywhere.",
    description:
      "Create secure payment links for invoices, WhatsApp orders, deposits, subscriptions, and repeat collections without building a checkout flow.",
    cta: "Create payment links",
    footnote:
      "Built for Indian teams collecting through chat, invoices, social channels, and assisted sales.",
    imageUrl: "/images/products/payment-girl.png",
    imageAlt: "Pentacore payment links preview",
  },
  problems: {
    title: "Manual payment collection slows down growing teams.",
    cards: [
      {
        icon: "message",
        title: "Chat orders are hard to close",
        description:
          "Customers ask for payment options across WhatsApp, Instagram, and email, but manual UPI sharing creates confusion.",
        note: "Turn every conversation into a secure payment flow.",
      },
      {
        icon: "link",
        title: "Invoice follow-ups take too long",
        description:
          "Teams lose time checking screenshots, reminding customers, and matching payments to orders.",
        note: "Send one traceable link per customer or invoice.",
      },
      {
        icon: "bank",
        title: "Collections need better visibility",
        description:
          "Without status tracking, finance and support teams cannot see which links are paid, pending, or expired.",
        note: "Track collection status from one dashboard.",
      },
    ],
  },
  benefits: {
    title: "One link for simple, trackable collections.",
    cards: [
      {
        icon: "link",
        title: "Share payment links anywhere",
        description:
          "Create links for fixed amounts, customer-specific requests, invoices, deposits, and quick collections.",
        points: ["Works across chat, SMS, and email", "Supports UPI, cards, and wallets", "No custom checkout build needed"],
      },
      {
        icon: "flash",
        title: "Collect faster with clear status",
        description:
          "Know when a link is created, opened, paid, expired, or refunded so teams can move without guesswork.",
        points: ["Live payment status", "Cleaner customer follow-up", "Fewer screenshot checks"],
      },
      {
        icon: "store",
        title: "Keep every order organized",
        description:
          "Attach customer details, order notes, and references so finance can reconcile collections cleanly.",
        points: ["Order-level references", "Dashboard search", "Export-ready records"],
      },
    ],
  },
  setup: {
    title: "Create a payment link in minutes.",
    steps: [
      {
        step: "Step 1",
        title: "Enter payment details",
        description:
          "Add amount, customer details, expiry rules, and an internal reference for your team.",
        imageUrl: "/images/products/payment-liink-step-1.png",
      },
      {
        step: "Step 2",
        title: "Share the link",
        description:
          "Send it over WhatsApp, SMS, email, invoice, or your sales workflow.",
        imageUrl: "/images/products/payment-liink-step-2.png",
      },
      {
        step: "Step 3",
        title: "Track and reconcile",
        description:
          "See payment status, customer details, refunds, and settlement movement from Pentacore.",
        imageUrl: "/images/products/payment-liink-step-3.png",
      },
    ],
  },
  operations: {
    title: "Every shared link becomes a traceable payment record.",
    description:
      "Pentacore keeps link creation, payment status, customer context, and settlement visibility together so sales, support, and finance stay aligned.",
    imageUrl: "/images/products/payment-link-workfollow.png",
    imageAlt: "Payment link operations dashboard",
    metrics: [
      { value: "24/7", label: "link-based collections" },
      { value: "UPI", label: "card and wallet support" },
      { value: "Live", label: "payment status tracking" },
    ],
  },
  useCases: {
    title: "Where teams use Pentacore Payment Links",
    items: [
      {
        title: "Invoice payments",
        description:
          "Send customer-specific payment links with references that make reconciliation easier.",
      },
      {
        title: "WhatsApp commerce",
        description:
          "Close chat-based orders with a secure link instead of sharing manual account details.",
      },
      {
        title: "Subscriptions and deposits",
        description:
          "Collect recurring dues, booking deposits, advances, and service fees with less follow-up.",
      },
      {
        title: "Field teams",
        description:
          "Let sales and service teams collect payments while finance sees status centrally.",
      },
    ],
  },
  faqs: {
    title: "Questions about Payment Links",
    items: [
      {
        question: "Can I create links for different amounts?",
        answer:
          "Yes. You can create payment links for fixed amounts, customer-specific requests, invoices, deposits, and repeat collections.",
      },
      {
        question: "Can my team track whether a link is paid?",
        answer:
          "Yes. Pentacore shows link status so teams can see pending, paid, expired, and refunded payments.",
      },
      {
        question: "Do customers need an account to pay?",
        answer:
          "No. Customers can open the link and complete payment using the supported payment methods available on your Pentacore setup.",
      },
    ],
  },
  cta: {
    title: "Start collecting with links.",
    description:
      "Create payment links for invoices, chat orders, deposits, and quick collections from one Pentacore dashboard.",
    buttonText: "Contact Us",
  },
};

const qrPaymentsPage: ProductPageContent = {
  hero: {
    eyebrow: "Pentacore QR Payments",
    title: "Accept scan-and-pay collections in person and on the move.",
    description:
      "Use static and dynamic QR codes for retail counters, events, delivery collections, service visits, and field teams.",
    cta: "Set up QR payments",
    imageUrl: "/images/products/qr-mobile-payment.png",
    imageAlt: "Pentacore QR payments preview",
  },
  problems: {
    title: "In-person payments need speed without losing control.",
    cards: [
      {
        icon: "store",
        title: "Counters get busy during peak hours",
        description:
          "Cashier teams need customers to scan, pay, and move quickly without manual confirmation delays.",
        note: "Keep checkout lines moving.",
      },
      {
        icon: "message",
        title: "Field payments are hard to verify",
        description:
          "Delivery and service teams often rely on screenshots, which makes follow-up and reconciliation harder.",
        note: "Bring field collections into the dashboard.",
      },
      {
        icon: "bank",
        title: "Branches need consistent records",
        description:
          "Multiple locations, counters, or staff members need QR payments that remain traceable.",
        note: "Organize collections by location and reference.",
      },
    ],
  },
  benefits: {
    title: "QR payments that stay simple for customers and clear for teams.",
    cards: [
      {
        icon: "flash",
        title: "Fast UPI-led collections",
        description:
          "Let customers scan and pay with familiar apps while Pentacore records payment activity.",
        points: ["Static QR support", "Dynamic QR support", "UPI-ready customer flow"],
      },
      {
        icon: "store",
        title: "Useful across locations",
        description:
          "Create QR flows for counters, pop-ups, branches, delivery teams, and temporary events.",
        points: ["Store-level references", "Field collection visibility", "Cleaner staff handover"],
      },
      {
        icon: "bank",
        title: "Finance-ready reporting",
        description:
          "Connect QR collections to settlement visibility, refunds, and daily transaction review.",
        points: ["Dashboard tracking", "Status search", "Exportable records"],
      },
    ],
  },
  setup: {
    title: "Launch QR collections for your team.",
    steps: [
      {
        step: "Step 1",
        title: "Create your QR flow",
        description:
          "Set up static or dynamic QR codes with the right labels, locations, and references.",
        imageUrl: "/images/products/qr-step-1.png",
      },
      {
        step: "Step 2",
        title: "Display or share",
        description:
          "Use the QR at counters, invoices, delivery slips, events, or staff collection points.",
        imageUrl: "/images/products/qr-step-2.png",
      },
      {
        step: "Step 3",
        title: "Monitor collections",
        description:
          "Track paid, pending, refunded, and settled activity from Pentacore.",
        imageUrl: "/images/products/qr-step-3.png",
      },
    ],
  },
  operations: {
    title: "Turn every scan into a visible payment event.",
    description:
      "Pentacore connects scan-based UPI collections with payment status, transaction history, and settlement visibility for every team.",
    imageUrl: "/images/products/qr-workflow.png",
    imageAlt: "QR payment operations dashboard",
    metrics: [
      { value: "UPI", label: "scan-and-pay collections" },
      { value: "Multi", label: "location and staff usage" },
      { value: "Live", label: "transaction status updates" },
    ],
  },
  useCases: {
    title: "Where teams use Pentacore QR Payments",
    items: [
      {
        title: "Retail counters",
        description:
          "Place QR codes at billing counters for fast customer payments and cleaner end-of-day review.",
      },
      {
        title: "Delivery collections",
        description:
          "Let field teams collect payments while payment status remains visible to operations.",
      },
      {
        title: "Events and pop-ups",
        description:
          "Set up temporary QR collection points for stalls, registrations, and on-site sales.",
      },
      {
        title: "Service businesses",
        description:
          "Collect fees during visits, repairs, classes, appointments, and consultations.",
      },
    ],
  },
  faqs: {
    title: "Questions about QR Payments",
    items: [
      {
        question: "Can I use QR payments at multiple locations?",
        answer:
          "Yes. You can create QR flows for counters, branches, field teams, events, and temporary collection points.",
      },
      {
        question: "Can QR payments be tracked in Pentacore?",
        answer:
          "Yes. Pentacore records QR payment status so your team can review collections and settlement movement.",
      },
      {
        question: "Are QR payments useful beyond retail?",
        answer:
          "Yes. QR collections work well for delivery, field service, events, education, clinics, and assisted sales.",
      },
    ],
  },
  cta: {
    title: "Make in-person payments easier.",
    description:
      "Use Pentacore QR Payments for fast UPI collections at counters, events, and field locations.",
    buttonText: "Set up QR",
  },
};

const expressCheckoutPage: ProductPageContent = {
  hero: {
    eyebrow: "Pentacore Express Checkout",
    title: "Give customers a faster branded checkout experience.",
    description:
      "Offer UPI, cards, wallets, and net banking through a clean checkout built for Indian customers and modern online businesses.",
    cta: "Launch checkout",
    imageUrl: "/images/products/express-checkout.png",
    imageAlt: "Pentacore express checkout preview",
  },
  problems: {
    title: "A slow checkout makes good customers drop off.",
    cards: [
      {
        icon: "store",
        title: "Payment options feel scattered",
        description:
          "Customers expect familiar payment methods, but disconnected checkout flows create friction.",
        note: "Bring core payment methods into one branded flow.",
      },
      {
        icon: "flash",
        title: "Drop-offs are hard to diagnose",
        description:
          "When payment status, customer context, and order data are separated, teams cannot improve conversion confidently.",
        note: "Give teams cleaner checkout visibility.",
      },
      {
        icon: "bank",
        title: "Finance needs order-level clarity",
        description:
          "Every online payment needs a reference, status, refund path, and settlement trail.",
        note: "Keep order and payment records connected.",
      },
    ],
  },
  benefits: {
    title: "A checkout flow built for conversion and control.",
    cards: [
      {
        icon: "flash",
        title: "Fast customer payment flow",
        description:
          "Give customers a clean checkout with payment methods they already use.",
        points: ["UPI support", "Cards and wallets", "Net banking options"],
      },
      {
        icon: "store",
        title: "Branded experience",
        description:
          "Keep checkout aligned with your business while Pentacore handles the payment flow.",
        points: ["Business-ready checkout", "Clear payment confirmation", "Mobile-friendly design"],
      },
      {
        icon: "bank",
        title: "Operational visibility",
        description:
          "Track orders, payments, refunds, and settlement movement without jumping between systems.",
        points: ["Order references", "Refund tracking", "Settlement visibility"],
      },
    ],
  },
  setup: {
    title: "Set up checkout once. Use it everywhere.",
    steps: [
      {
        step: "Step 1",
        title: "Configure payment methods",
        description:
          "Choose the customer payment options your business wants to offer.",
        imageUrl: "/images/products/express-checkout-step-1.png",
      },
      {
        step: "Step 2",
        title: "Connect your order flow",
        description:
          "Send customer and order details into Pentacore for a smoother checkout handoff.",
        imageUrl: "/images/products/express-checkout-step-2.png",
      },
      {
        step: "Step 3",
        title: "Review payment activity",
        description:
          "Track paid, failed, refunded, and settled transactions from your dashboard.",
        imageUrl: "/images/products/express-checkout-step-3.png",
      },
    ],
  },
  operations: {
    title: "Checkout data your team can actually use.",
    description:
      "Pentacore keeps payment method, order reference, status, customer context, refunds, and settlements visible across your checkout flow.",
    imageUrl: "/images/products/express-checkout-workflow.png",
    imageAlt: "Express checkout operations dashboard",
    metrics: [
      { value: "4+", label: "payment method categories" },
      { value: "Live", label: "checkout status tracking" },
      { value: "1", label: "connected payment dashboard" },
    ],
  },
  useCases: {
    title: "Where teams use Express Checkout",
    items: [
      {
        title: "Online stores",
        description:
          "Accept payments from ecommerce checkout flows with familiar Indian payment options.",
      },
      {
        title: "SaaS signups",
        description:
          "Collect subscription, setup, and onboarding payments through a clear payment flow.",
      },
      {
        title: "Education platforms",
        description:
          "Collect fees, course payments, exam payments, and deposits through a branded checkout.",
      },
      {
        title: "Service booking",
        description:
          "Accept booking fees, consultation charges, and advance payments online.",
      },
    ],
  },
  faqs: {
    title: "Questions about Express Checkout",
    items: [
      {
        question: "Which payment methods can checkout support?",
        answer:
          "Pentacore checkout can support common Indian payment methods such as UPI, cards, wallets, and net banking based on your setup.",
      },
      {
        question: "Can I use checkout from my website or app?",
        answer:
          "Yes. You can connect checkout to your website, app, or order flow using the product setup that fits your stack.",
      },
      {
        question: "Can refunds and statuses be tracked?",
        answer:
          "Yes. Pentacore keeps checkout payment status, refunds, and settlement movement visible for your team.",
      },
    ],
  },
  cta: {
    title: "Make checkout feel effortless.",
    description:
      "Launch a Pentacore checkout flow for UPI, cards, wallets, and net banking without cluttering your operations.",
    buttonText: "Launch checkout",
  },
};

const paymentApiPage: ProductPageContent = {
  hero: {
    eyebrow: "Pentacore Payment API",
    title: "Build payment flows that match your product.",
    description:
      "Use Pentacore APIs to create orders, verify payments, receive webhooks, automate refunds, and reconcile transactions faster.",
    cta: "Connect APIs",
    imageUrl: "/images/products/payment-api-hero.png",
    imageAlt: "Pentacore payment API preview",
  },
  comparison: {
    title: "Secure. Reliable.",
    accentText: "Always connected.",
    description:
      "Focus on building your product while Pentacore keeps payment infrastructure predictable.",
    cards: [
      {
        title: "The manual way",
        description:
          "Disconnected payment methods, repeated status checks, and fragile integrations slow down product and operations teams.",
        imageUrl: "/images/products/payment-api-truct-1.png",
        imageAlt:
          "Indian developer managing disconnected payment integrations",
        badge: "Payment status unclear",
        badgeTone: "error",
      },
      {
        title: "With Pentacore API",
        description:
          "Create orders, accept UPI and cards, verify payments, and receive webhook updates through one developer-friendly API.",
        imageUrl: "/images/products/payment-api-truct-2.png",
        imageAlt: "Pentacore API checkout session and payment status preview",
        badge: "API connected",
        badgeTone: "success",
      },
    ],
  },
  featureShowcase: {
    title: "Why Pentacore API",
    description:
      "Intuitive, fully documented, and ready to integrate within hours, not weeks.",
    cards: [
      {
        title: "Hold then capture",
        description:
          "Authorize a payment first and capture funds only when your order, booking, or service is ready.",
        imageUrl: "/images/products/payment-api-1.png",
        imageAlt: "Pentacore API authorization and capture controls",
      },
      {
        title: "Save cards for repeat purchases",
        description:
          "Create faster returning-customer checkouts with secure card token workflows for repeat payments.",
        imageUrl: "/images/products/payment-api-2.png",
        imageAlt: "Pentacore saved card payment workflow",
      },
      {
        title: "Offer subscriptions",
        description:
          "Set up automatic recurring payments for memberships, SaaS plans, fees, and worry-free renewals.",
        imageUrl: "/images/products/payment-api-3.png",
        imageAlt: "Pentacore subscription and recurring payment webhooks",
      },
      {
        title: "USD card acceptance",
        description:
          "Accept eligible card payments in USD and create a smoother payment experience for international customers.",
        imageUrl: "/images/products/payment-api-4.png",
        imageAlt: "Pentacore API international card payment preview",
      },
      {
        title: "Real-time payment tracking",
        description:
          "Monitor payment status through API responses and webhooks to improve support and operational efficiency.",
        imageUrl: "/images/products/payment-api-5.png",
        imageAlt: "Pentacore real-time payment tracking dashboard",
      },
      {
        title: "Scale effortlessly",
        description:
          "Build reliable payment flows designed to support growing transaction volume without rebuilding your integration.",
        imageUrl: "/images/products/payment-api-6.png",
        imageAlt: "Pentacore scalable and reliable API infrastructure",
      },
    ],
  },
  developerHighlight: {
    title: "Everything your team needs to build, test, and deploy.",
    description:
      "Use clear documentation, test environments, API keys, and webhook support to build payment experiences that scale with your business.",
    imageUrl: "/images/products/payment-api-7.png",
    imageAlt: "Pentacore API infrastructure for payment developers",
    items: [
      {
        title: "Developer-first",
        description:
          "Work with clear API resources, practical integration flows, and support that helps your team move from test to live faster.",
      },
      {
        title: "Secure and reliable",
        description:
          "Protect payment operations with scoped keys, signed webhooks, encrypted communication, and traceable transaction events.",
      },
      {
        title: "Flexible integration",
        description:
          "Customize checkout, order creation, payment verification, refunds, and status handling around your product workflow.",
      },
    ],
  },
  setup: {
    title: "Connect Pentacore to your stack.",
    steps: [
      {
        step: "Step 1",
        title: "Create API keys",
        description:
          "Set up your integration environment and keep keys scoped to your product workflow.",
        imageUrl: "/images/products/payment-api-step-1.png",
      },
      {
        step: "Step 2",
        title: "Create orders and payments",
        description:
          "Send order details to Pentacore and route customers into the payment flow.",
        imageUrl: "/images/products/payment-api-step-2.png",
      },
      {
        step: "Step 3",
        title: "Listen to webhooks",
        description:
          "Sync payment events back into your backend, dashboard, or operations system.",
        imageUrl: "/images/products/payment-api-step-3.png",
      },
    ],
  },
  faqs: {
    title: "Questions about Payment API",
    items: [
      {
        question: "Can developers build custom payment flows?",
        answer:
          "Yes. Pentacore APIs are designed for teams that want payment flows inside their own website, app, or platform.",
      },
      {
        question: "Can webhooks update my backend?",
        answer:
          "Yes. Payment events can be sent to your systems so order status, access, and internal workflows stay updated.",
      },
      {
        question: "Can API payments be reconciled?",
        answer:
          "Yes. Pentacore keeps transaction references, payment status, and settlement visibility connected for reporting.",
      },
    ],
  },
  cta: {
    title: "Build payments into your product.",
    description:
      "Use Pentacore APIs for order creation, payment verification, webhooks, refunds, and reconciliation.",
    buttonText: "Connect APIs",
  },
};

const mobileAppPage: ProductPageContent = {
  hero: {
    eyebrow: "Pentacore Mobile App",
    title: "Monitor payments, settlements, and customer status from anywhere.",
    description:
      "Give founders, operators, and finance teams quick access to payment activity when they are away from their desk.",
    cta: "Explore mobile app",
    imageUrl: "/images/products/mobile-app-hero.png",
    imageAlt: "Pentacore mobile app preview",
  },
  appHighlights: {
    cards: [
      {
        title: "Keep payment activity within reach",
        description:
          "View transactions and confirm customer payment status from one mobile dashboard, wherever your work takes you.",
        imageUrl: "/images/products/mobile-app-1.png",
        imageAlt:
          "Pentacore mobile dashboard showing payments and settlements",
      },
      {
        title: "Stay updated on every money movement",
        description:
          "Monitor incoming collections, settlement progress, and account activity whenever finance or operations needs an update.",
        imageUrl: "/images/products/mobile-app-2.png",
        imageAlt: "Pentacore mobile application controls",
      },
      {
        title: "Collect in-person payments without friction",
        description:
          "Use QR payment flows across counters, deliveries, events, and field teams while keeping every transaction visible.",
        imageUrl: "/images/products/mobile-app-3.png",
        imageAlt: "Pentacore mobile QR payment collection",
      },
    ],
  },
  appTools: {
    title: "Mobile tools built for ambitious teams",
    description:
      "Move faster with timely payment updates and dependable protection across your daily operations.",
    cards: [
      {
        title: "Know when every payment moves",
        description:
          "Receive timely transaction updates without repeatedly refreshing a dashboard, so your team always knows what came in or went out.",
        imageUrl: "/images/products/mobile-app-4.png",
        imageAlt:
          "Pentacore mobile app showing live payment and settlement updates",
      },
      {
        title: "Protection built into every interaction",
        description:
          "Keep mobile payment activity protected with secure access, encrypted communication, and continuous transaction visibility.",
        imageUrl: "/images/products/mobile-app-5.png",
        imageAlt:
          "Pentacore secure API infrastructure and payment protection",
      },
    ],
  },
  appTransfers: {
    accentText: "Send business funds",
    title: "from wherever work happens",
    description:
      "Keep operations moving by transferring funds to your team, suppliers, and business partners directly from the Pentacore mobile app.",
    images: [
      {
        imageUrl: "/images/products/mobile-app-6.png",
        imageAlt:
          "Indian business team reviewing a mobile fund transfer together",
      },
      {
        imageUrl: "/images/products/mobile-app-7.png",
        imageAlt:
          "Indian business professional sending funds from her mobile phone",
      },
    ],
  },
  appOperations: {
    title: "Everyday payment operations, simplified",
    description:
      "Collect payments, manage outgoing funds, and understand business activity from one mobile workspace.",
    cards: [
      {
        title: "Collect payments with less effort",
        description:
          "Accept customer payments through QR codes, payment links, and supported digital methods while keeping sensitive activity protected.",
        imageUrl: "/images/products/mobile-app-8.png",
        imageAlt: "Pentacore mobile app QR payment collection",
      },
      {
        title: "Keep spending and payouts organized",
        description:
          "Review wallet movement, monitor transactions, and send business funds with clear status and records.",
        imageUrl: "/images/products/mobile-app-9.png",
        imageAlt:
          "Pentacore mobile wallet transactions and payout activity",
      },
      {
        title: "See business insights instantly",
        description:
          "Check collections, customers, settlements, and payment activity whenever your team needs a quick operational view.",
        imageUrl: "/images/products/mobile-app-10.png",
        imageAlt:
          "Pentacore mobile dashboard with collections and business insights",
      },
    ],
  },
  faqs: {
    title: "Questions about the Mobile App",
    items: [
      {
        question: "What can I check from mobile?",
        answer:
          "You can review transaction status, customer payment activity, wallet movement, refunds, and settlement visibility based on your setup.",
      },
      {
        question: "Is the mobile app useful for field teams?",
        answer:
          "Yes. Field and customer-facing teams can use it to check payment status during live conversations.",
      },
      {
        question: "Can team access be controlled?",
        answer:
          "Pentacore is designed for team workflows, so access can be aligned with the permissions your business needs.",
      },
    ],
  },
  cta: {
    title: "Take payment visibility with you.",
    description:
      "Use the Pentacore Mobile App to monitor transactions, settlements, refunds, and customer payment status anywhere.",
    buttonText: "Explore mobile app",
  },
};


export const productPageContent: Record<string, ProductPageContent> = {
  "payment-links": paymentLinksPage,
  "qr-payments": qrPaymentsPage,
  "express-checkout": expressCheckoutPage,
  "payment-api": paymentApiPage,
  "mobile-app": mobileAppPage,
};
