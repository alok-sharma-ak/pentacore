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

export type ProductPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    footnote: string;
    imageUrl: string;
    imageAlt: string;
  };
  problems: {
    title: string;
    cards: ProductCardContent[];
  };
  benefits: {
    title: string;
    cards: ProductCardContent[];
  };
  setup: {
    title: string;
    steps: ProductSetupStep[];
  };
  operations: {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    metrics: ProductMetric[];
  };
  useCases: {
    title: string;
    items: ProductUseCase[];
  };
  faqs: {
    title: string;
    items: ProductFaq[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
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
    label: "Business Wallet",
    slug: "wallet",
    href: "/products/wallet",
    headline: "Keep collections, balances, refunds, and payouts visible.",
    description:
      "Keep collections, balances, refunds, settlements, and payout movement visible from one wallet.",
    imageUrl: "/images/products/wallet.png",
    features: [
      "Balance and settlement visibility",
      "Refund and payout movement tracking",
      "Finance-ready wallet activity",
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
  {
    label: "Platform Solutions",
    slug: "platforms",
    href: "/products/platforms",
    headline: "Run platform-led collections, routing, and payouts.",
    description:
      "Run marketplace collections, seller payouts, split settlements, and platform-led payment flows.",
    imageUrl: "/images/products/platform-solutions.png",
    features: [
      "Marketplace collections and seller payouts",
      "Split settlements and routing support",
      "Platform payment operations visibility",
    ],
  },
  {
    label: "Business Capital",
    slug: "capital",
    href: "/products/capital",
    headline: "Understand business growth through payment activity.",
    description:
      "Give eligible businesses access to growth capital insights powered by their payment activity.",
    imageUrl: "/images/products/business-capital.png",
    features: [
      "Payment activity insights",
      "Working capital visibility",
      "Growth-focused business reporting",
    ],
  },
  {
    label: "Card Issuing",
    slug: "issuing",
    href: "/products/issuing",
    headline: "Manage business spending with card controls and visibility.",
    description:
      "Manage business spending workflows with virtual card controls, limits, and finance visibility.",
    imageUrl: "/images/products/card-issuing.png",
    features: [
      "Virtual card workflow controls",
      "Spend limits and usage visibility",
      "Finance-ready spending records",
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
        imageUrl: "/images/products/payment-link.png",
      },
      {
        step: "Step 2",
        title: "Share the link",
        description:
          "Send it over WhatsApp, SMS, email, invoice, or your sales workflow.",
        imageUrl: "/images/products/mobile-app.png",
      },
      {
        step: "Step 3",
        title: "Track and reconcile",
        description:
          "See payment status, customer details, refunds, and settlement movement from Pentacore.",
        imageUrl: "/images/products/wallet.png",
      },
    ],
  },
  operations: {
    title: "Every shared link becomes a traceable payment record.",
    description:
      "Pentacore keeps link creation, payment status, customer context, and settlement visibility together so sales, support, and finance stay aligned.",
    imageUrl: "/images/products/payment-link.png",
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
    buttonText: "Create a link",
  },
};

const qrPaymentsPage: ProductPageContent = {
  hero: {
    eyebrow: "Pentacore QR Payments",
    title: "Accept scan-and-pay collections in person and on the move.",
    description:
      "Use static and dynamic QR codes for retail counters, events, delivery collections, service visits, and field teams.",
    cta: "Set up QR payments",
    footnote:
      "Made for Indian businesses that need fast UPI collections with clear payment status.",
    imageUrl: "/images/products/payment-qr.png",
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
        imageUrl: "/images/products/payment-qr.png",
      },
      {
        step: "Step 2",
        title: "Display or share",
        description:
          "Use the QR at counters, invoices, delivery slips, events, or staff collection points.",
        imageUrl: "/images/products/mobile-app.png",
      },
      {
        step: "Step 3",
        title: "Monitor collections",
        description:
          "Track paid, pending, refunded, and settled activity from Pentacore.",
        imageUrl: "/images/products/wallet.png",
      },
    ],
  },
  operations: {
    title: "Turn every scan into a visible payment event.",
    description:
      "Pentacore connects scan-based UPI collections with payment status, transaction history, and settlement visibility for every team.",
    imageUrl: "/images/products/payment-qr.png",
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
    footnote:
      "Designed for ecommerce, SaaS, education, services, and digital-first businesses.",
    imageUrl: "/images/products/checkout.png",
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
        imageUrl: "/images/products/checkout.png",
      },
      {
        step: "Step 2",
        title: "Connect your order flow",
        description:
          "Send customer and order details into Pentacore for a smoother checkout handoff.",
        imageUrl: "/images/products/payment-api.png",
      },
      {
        step: "Step 3",
        title: "Review payment activity",
        description:
          "Track paid, failed, refunded, and settled transactions from your dashboard.",
        imageUrl: "/images/products/wallet.png",
      },
    ],
  },
  operations: {
    title: "Checkout data your team can actually use.",
    description:
      "Pentacore keeps payment method, order reference, status, customer context, refunds, and settlements visible across your checkout flow.",
    imageUrl: "/images/products/checkout.png",
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
    footnote:
      "Made for engineering teams building websites, apps, SaaS products, and platforms.",
    imageUrl: "/images/products/payment-api.png",
    imageAlt: "Pentacore payment API preview",
  },
  problems: {
    title: "Payment integrations break down when status is unclear.",
    cards: [
      {
        icon: "flash",
        title: "Payment status needs to be real time",
        description:
          "Teams need reliable callbacks when payments succeed, fail, expire, or require follow-up.",
        note: "Use webhooks for cleaner automation.",
      },
      {
        icon: "bank",
        title: "Reconciliation needs references",
        description:
          "Without clean order IDs and payment IDs, finance spends too much time matching records.",
        note: "Keep IDs consistent across systems.",
      },
      {
        icon: "link",
        title: "Custom flows need flexibility",
        description:
          "Products need APIs that work across checkout, links, wallet movement, and platform payment flows.",
        note: "Build around your own product experience.",
      },
    ],
  },
  benefits: {
    title: "APIs for order creation, verification, and payment operations.",
    cards: [
      {
        icon: "flash",
        title: "Create and verify payments",
        description:
          "Build payment flows using order creation, payment verification, and customer status handling.",
        points: ["Order APIs", "Payment verification", "Status updates"],
      },
      {
        icon: "message",
        title: "Automate with webhooks",
        description:
          "Listen to payment events and sync them into your CRM, ERP, app, or internal tools.",
        points: ["Signed callbacks", "Retry-friendly events", "Operational alerts"],
      },
      {
        icon: "bank",
        title: "Reconcile with confidence",
        description:
          "Use consistent transaction references to connect payment events with orders and finance records.",
        points: ["Transaction IDs", "Settlement visibility", "Export-ready records"],
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
        imageUrl: "/images/products/payment-api.png",
      },
      {
        step: "Step 2",
        title: "Create orders and payments",
        description:
          "Send order details to Pentacore and route customers into the payment flow.",
        imageUrl: "/images/products/checkout.png",
      },
      {
        step: "Step 3",
        title: "Listen to webhooks",
        description:
          "Sync payment events back into your backend, dashboard, or operations system.",
        imageUrl: "/images/products/wallet.png",
      },
    ],
  },
  operations: {
    title: "A developer-friendly layer for payment operations.",
    description:
      "Pentacore APIs help teams connect payments to product logic, customer status, finance workflows, and reporting without messy manual steps.",
    imageUrl: "/images/products/payment-api.png",
    imageAlt: "Payment API operations dashboard",
    metrics: [
      { value: "API", label: "first payment workflows" },
      { value: "Webhook", label: "driven event updates" },
      { value: "INR", label: "ready payment records" },
    ],
  },
  useCases: {
    title: "Where teams use Payment API",
    items: [
      {
        title: "Custom checkout",
        description:
          "Build checkout experiences that match your product while Pentacore handles payment operations.",
      },
      {
        title: "SaaS billing",
        description:
          "Create orders, verify payment status, and update customer access automatically.",
      },
      {
        title: "Internal tools",
        description:
          "Sync payment events into admin panels, finance dashboards, and support workflows.",
      },
      {
        title: "Platform payments",
        description:
          "Use APIs to support multi-party payment flows, routing, and transaction visibility.",
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

const walletPage: ProductPageContent = {
  hero: {
    eyebrow: "Pentacore Business Wallet",
    title: "See your collections, balances, refunds, and payouts in one place.",
    description:
      "Give finance and operations teams a clear view of money movement across payins, settlements, refunds, and business payouts.",
    cta: "Explore wallet",
    footnote:
      "Built for teams that need daily visibility across business payment activity.",
    imageUrl: "/images/products/wallet.png",
    imageAlt: "Pentacore business wallet preview",
  },
  problems: {
    title: "Money movement gets messy when every team sees a different view.",
    cards: [
      {
        icon: "bank",
        title: "Balances are hard to explain",
        description:
          "Collections, refunds, settlements, and payouts can create confusion when teams cannot see the full movement.",
        note: "Give teams a shared source of truth.",
      },
      {
        icon: "message",
        title: "Finance keeps answering status questions",
        description:
          "Support and operations teams need quick answers about payments without waiting for manual checks.",
        note: "Make status visible without extra handoffs.",
      },
      {
        icon: "flash",
        title: "Payout planning needs clarity",
        description:
          "Teams need to understand available balances and movement before planning outgoing payments.",
        note: "Keep payout movement connected to collections.",
      },
    ],
  },
  benefits: {
    title: "A wallet view built for daily finance operations.",
    cards: [
      {
        icon: "bank",
        title: "Track business balances",
        description:
          "See available balances, settlement movement, refunds, and payout activity from one place.",
        points: ["Balance visibility", "Settlement tracking", "Refund records"],
      },
      {
        icon: "flash",
        title: "Move faster with clear status",
        description:
          "Give teams the payment context they need to resolve customer and internal questions.",
        points: ["Searchable transactions", "Status history", "Cleaner handoffs"],
      },
      {
        icon: "store",
        title: "Keep finance records organized",
        description:
          "Use wallet activity as a cleaner operational layer for reporting and review.",
        points: ["Exportable records", "Daily review support", "Reference-based tracking"],
      },
    ],
  },
  setup: {
    title: "Use your wallet as the control room for payments.",
    steps: [
      {
        step: "Step 1",
        title: "Connect collections",
        description:
          "Bring checkout, QR, links, and API payment activity into Pentacore.",
        imageUrl: "/images/products/checkout.png",
      },
      {
        step: "Step 2",
        title: "Review wallet movement",
        description:
          "Monitor balances, refunds, settlements, and outgoing movement from one dashboard.",
        imageUrl: "/images/products/wallet.png",
      },
      {
        step: "Step 3",
        title: "Export and reconcile",
        description:
          "Use transaction references and activity records to support finance reporting.",
        imageUrl: "/images/products/payment-api.png",
      },
    ],
  },
  operations: {
    title: "A cleaner view of what happened to every rupee.",
    description:
      "Pentacore Wallet connects collections, balances, refunds, settlements, and payouts so finance teams can review money movement with less manual digging.",
    imageUrl: "/images/products/wallet.png",
    imageAlt: "Business wallet operations dashboard",
    metrics: [
      { value: "1", label: "wallet view for payment activity" },
      { value: "Live", label: "balance and status visibility" },
      { value: "Daily", label: "finance review support" },
    ],
  },
  useCases: {
    title: "Where teams use Business Wallet",
    items: [
      {
        title: "Finance review",
        description:
          "Review daily collections, refunds, settlements, and payout movement from one place.",
      },
      {
        title: "Support visibility",
        description:
          "Help support teams answer payment questions without waiting for finance checks.",
      },
      {
        title: "Operations planning",
        description:
          "Understand available balances and movement before planning outgoing payments.",
      },
      {
        title: "Multi-channel collections",
        description:
          "Bring payment links, QR, checkout, and API payment activity into a single money view.",
      },
    ],
  },
  faqs: {
    title: "Questions about Business Wallet",
    items: [
      {
        question: "What does the wallet show?",
        answer:
          "It shows payment activity such as balances, collections, refunds, settlements, and payout movement based on your Pentacore setup.",
      },
      {
        question: "Can multiple teams use wallet visibility?",
        answer:
          "Yes. Finance, operations, and support teams can use wallet activity to answer payment and movement questions.",
      },
      {
        question: "Can wallet data help reconciliation?",
        answer:
          "Yes. Transaction references and wallet activity can support finance review and reporting.",
      },
    ],
  },
  cta: {
    title: "Bring payment movement into focus.",
    description:
      "Use Pentacore Wallet to see collections, balances, refunds, settlements, and payout activity more clearly.",
    buttonText: "Explore wallet",
  },
};

const mobileAppPage: ProductPageContent = {
  hero: {
    eyebrow: "Pentacore Mobile App",
    title: "Monitor payments, settlements, and customer status from anywhere.",
    description:
      "Give founders, operators, and finance teams quick access to payment activity when they are away from their desk.",
    cta: "Explore mobile app",
    footnote:
      "Useful for owners, field teams, finance leads, and support managers who need payment visibility on the move.",
    imageUrl: "/images/products/mobile-app.png",
    imageAlt: "Pentacore mobile app preview",
  },
  problems: {
    title: "Payment visibility should not stop at the desktop.",
    cards: [
      {
        icon: "flash",
        title: "Decisions happen on the move",
        description:
          "Teams need to check payment status during calls, visits, meetings, and customer conversations.",
        note: "Keep payment context close.",
      },
      {
        icon: "message",
        title: "Customer questions need fast answers",
        description:
          "Support and sales teams need quick access to transaction status without opening multiple systems.",
        note: "Answer with confidence.",
      },
      {
        icon: "bank",
        title: "Leadership needs daily visibility",
        description:
          "Owners and finance leads want a simple way to review collection activity and settlement movement.",
        note: "Track the business from anywhere.",
      },
    ],
  },
  benefits: {
    title: "A mobile view for everyday payment operations.",
    cards: [
      {
        icon: "flash",
        title: "Check payment status quickly",
        description:
          "Review paid, pending, failed, refunded, and settled payments while away from your desk.",
        points: ["Mobile transaction view", "Quick status checks", "Customer-ready answers"],
      },
      {
        icon: "bank",
        title: "Monitor balances and settlements",
        description:
          "Keep an eye on business money movement without waiting for desktop access.",
        points: ["Settlement visibility", "Wallet activity", "Daily overview"],
      },
      {
        icon: "message",
        title: "Support teams in the field",
        description:
          "Give customer-facing teams a cleaner way to confirm payment status during live conversations.",
        points: ["Reduced follow-ups", "Faster checks", "Team-friendly visibility"],
      },
    ],
  },
  setup: {
    title: "Keep payment activity in your pocket.",
    steps: [
      {
        step: "Step 1",
        title: "Sign in securely",
        description:
          "Access your Pentacore account with the right team permissions.",
        imageUrl: "/images/products/mobile-app.png",
      },
      {
        step: "Step 2",
        title: "Review transactions",
        description:
          "Search customers, orders, statuses, refunds, and settlement movement.",
        imageUrl: "/images/products/wallet.png",
      },
      {
        step: "Step 3",
        title: "Act with context",
        description:
          "Use payment visibility to support customers, field teams, and daily operations.",
        imageUrl: "/images/products/payment-link.png",
      },
    ],
  },
  operations: {
    title: "Payment status for teams that are rarely sitting still.",
    description:
      "The Pentacore Mobile App helps teams check transaction status, wallet movement, and customer payment activity during real business moments.",
    imageUrl: "/images/products/mobile-app.png",
    imageAlt: "Mobile payment operations preview",
    metrics: [
      { value: "Mobile", label: "transaction visibility" },
      { value: "Live", label: "payment status checks" },
      { value: "Team", label: "ready payment context" },
    ],
  },
  useCases: {
    title: "Where teams use the Mobile App",
    items: [
      {
        title: "Founder dashboards",
        description:
          "Keep a quick eye on payments, refunds, and settlement movement throughout the day.",
      },
      {
        title: "Field collections",
        description:
          "Let field teams confirm whether a customer has paid before closing a visit.",
      },
      {
        title: "Support teams",
        description:
          "Give support staff quick transaction context during calls and chat conversations.",
      },
      {
        title: "Finance review",
        description:
          "Help finance leads monitor payment activity even when away from their desktop workflow.",
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

const platformsPage: ProductPageContent = {
  hero: {
    eyebrow: "Pentacore Platform Solutions",
    title: "Power collections, split settlements, and payouts for your platform.",
    description:
      "Build marketplace, partner, franchise, and multi-party payment flows with clearer routing, account-level visibility, and payout operations.",
    cta: "Build platform flows",
    footnote:
      "Built for Indian platforms coordinating payments across customers, sellers, vendors, and business units.",
    imageUrl: "/images/products/platform-solutions.png",
    imageAlt: "Pentacore platform solutions preview",
  },
  problems: {
    title: "Multi-party payments need more than a standard checkout.",
    cards: [
      {
        icon: "store",
        title: "Multiple parties need clear routing",
        description:
          "Platforms often collect once and distribute across sellers, partners, branches, or service providers.",
        note: "Design payment flows around your platform model.",
      },
      {
        icon: "bank",
        title: "Settlement visibility gets complex",
        description:
          "Teams need to know what was collected, what is pending, and what is ready to move.",
        note: "Keep platform payment movement transparent.",
      },
      {
        icon: "flash",
        title: "Manual payout operations do not scale",
        description:
          "As platform volume grows, manual split calculations and payout follow-ups become risky.",
        note: "Reduce repetitive operations work.",
      },
    ],
  },
  benefits: {
    title: "Payment infrastructure for platform-led businesses.",
    cards: [
      {
        icon: "store",
        title: "Support multi-party flows",
        description:
          "Build payment journeys for marketplaces, aggregator models, partner networks, and franchise operations.",
        points: ["Seller-level visibility", "Account references", "Platform-ready workflows"],
      },
      {
        icon: "bank",
        title: "Track split and payout movement",
        description:
          "Give operations and finance teams a clearer view of collections, splits, and outgoing movement.",
        points: ["Split settlement logic", "Payout status", "Finance review support"],
      },
      {
        icon: "flash",
        title: "Automate platform operations",
        description:
          "Use APIs and dashboard tools to reduce manual routing, follow-ups, and reporting gaps.",
        points: ["API support", "Webhook events", "Operational dashboards"],
      },
    ],
  },
  setup: {
    title: "Design payment flows around your platform model.",
    steps: [
      {
        step: "Step 1",
        title: "Map participants",
        description:
          "Define sellers, partners, branches, vendors, or sub-accounts that participate in money movement.",
        imageUrl: "/images/products/platform-solutions.png",
      },
      {
        step: "Step 2",
        title: "Configure routing",
        description:
          "Connect collections, splits, payout rules, references, and reporting needs.",
        imageUrl: "/images/products/payment-api.png",
      },
      {
        step: "Step 3",
        title: "Monitor platform activity",
        description:
          "Track collections, account-level balances, payout status, and settlement movement.",
        imageUrl: "/images/products/wallet.png",
      },
    ],
  },
  operations: {
    title: "Payment operations that match platform complexity.",
    description:
      "Pentacore helps platforms connect customer collections to seller balances, split logic, payout movement, and account-level reporting.",
    imageUrl: "/images/products/platform-solutions.png",
    imageAlt: "Platform payment operations preview",
    metrics: [
      { value: "Multi", label: "party payment flows" },
      { value: "Split", label: "settlement visibility" },
      { value: "API", label: "ready platform operations" },
    ],
  },
  useCases: {
    title: "Where teams use Platform Solutions",
    items: [
      {
        title: "Marketplaces",
        description:
          "Collect from buyers and organize seller-level payment movement from one platform layer.",
      },
      {
        title: "Service aggregators",
        description:
          "Route collections across service partners, operators, and business units.",
      },
      {
        title: "Franchise networks",
        description:
          "Track branch-level payment activity and central reporting without disconnected records.",
      },
      {
        title: "Partner payouts",
        description:
          "Use structured payment references to support partner-level payout operations.",
      },
    ],
  },
  faqs: {
    title: "Questions about Platform Solutions",
    items: [
      {
        question: "Can Pentacore support marketplace-style payments?",
        answer:
          "Yes. Pentacore can support platform payment flows that need participant references, collection tracking, and payout movement.",
      },
      {
        question: "Can I connect platform flows through APIs?",
        answer:
          "Yes. APIs and webhooks can help connect your platform logic with Pentacore payment operations.",
      },
      {
        question: "Is this only for large platforms?",
        answer:
          "No. It is useful for any business that coordinates payments across multiple sellers, partners, branches, or accounts.",
      },
    ],
  },
  cta: {
    title: "Build payments for your platform model.",
    description:
      "Use Pentacore to connect collections, split settlement visibility, participant records, and payout operations.",
    buttonText: "Build platform flows",
  },
};

const capitalPage: ProductPageContent = {
  hero: {
    eyebrow: "Pentacore Business Capital",
    title: "Understand growth needs through payment activity.",
    description:
      "Use payment trends, collection patterns, and business activity insights to understand working capital needs for eligible businesses.",
    cta: "Explore capital insights",
    footnote:
      "Pentacore helps surface useful payment activity insights. Availability of capital options depends on eligibility and review.",
    imageUrl: "/images/products/business-capital.png",
    imageAlt: "Pentacore business capital preview",
  },
  problems: {
    title: "Growth decisions are harder without payment visibility.",
    cards: [
      {
        icon: "bank",
        title: "Cash flow changes quickly",
        description:
          "Fast-moving teams need to understand collection patterns before planning inventory, hiring, or marketing spend.",
        note: "Use payment activity as an operating signal.",
      },
      {
        icon: "flash",
        title: "Manual reports arrive too late",
        description:
          "By the time spreadsheets are updated, teams may have already missed important working capital signals.",
        note: "Review trends closer to real time.",
      },
      {
        icon: "store",
        title: "Eligibility needs context",
        description:
          "Businesses need clearer payment records and consistent activity to support capital conversations.",
        note: "Keep growth context organized.",
      },
    ],
  },
  benefits: {
    title: "Payment activity insights for smarter growth planning.",
    cards: [
      {
        icon: "bank",
        title: "Understand payment trends",
        description:
          "Review collections, settlement movement, and activity patterns that indicate business momentum.",
        points: ["Collection trends", "Settlement visibility", "Business activity context"],
      },
      {
        icon: "flash",
        title: "Plan working capital needs",
        description:
          "Use payment visibility to plan inventory cycles, vendor payments, hiring, or growth campaigns.",
        points: ["Growth planning", "Finance visibility", "Daily operating context"],
      },
      {
        icon: "store",
        title: "Keep records review-ready",
        description:
          "Maintain cleaner payment and transaction history that can support eligibility review when applicable.",
        points: ["Transaction history", "Payment consistency", "Review-friendly records"],
      },
    ],
  },
  setup: {
    title: "Use payment activity to understand growth signals.",
    steps: [
      {
        step: "Step 1",
        title: "Collect through Pentacore",
        description:
          "Use Pentacore payment products so collection activity is captured consistently.",
        imageUrl: "/images/products/checkout.png",
      },
      {
        step: "Step 2",
        title: "Review activity patterns",
        description:
          "Look at transaction volume, settlements, refunds, and customer payment behavior.",
        imageUrl: "/images/products/business-capital.png",
      },
      {
        step: "Step 3",
        title: "Plan with better context",
        description:
          "Use clearer records to support growth planning and eligibility conversations where available.",
        imageUrl: "/images/products/wallet.png",
      },
    ],
  },
  operations: {
    title: "Turn payment activity into business context.",
    description:
      "Pentacore helps teams understand the relationship between collections, settlement movement, refunds, and working capital planning.",
    imageUrl: "/images/products/business-capital.png",
    imageAlt: "Business capital insights preview",
    metrics: [
      { value: "Trends", label: "from payment activity" },
      { value: "Daily", label: "business movement context" },
      { value: "Review", label: "ready transaction records" },
    ],
  },
  useCases: {
    title: "Where teams use Business Capital insights",
    items: [
      {
        title: "Inventory planning",
        description:
          "Review collection patterns before planning new stock, seasonal demand, or bulk purchases.",
      },
      {
        title: "Vendor payments",
        description:
          "Understand incoming money movement before planning outgoing vendor commitments.",
      },
      {
        title: "Growth campaigns",
        description:
          "Use payment activity to plan marketing, expansion, or launch investments more responsibly.",
      },
      {
        title: "Finance review",
        description:
          "Keep transaction history organized for internal planning and capital eligibility review.",
      },
    ],
  },
  faqs: {
    title: "Questions about Business Capital",
    items: [
      {
        question: "Does Pentacore guarantee capital access?",
        answer:
          "No. Capital options, if available, depend on eligibility, review, and applicable terms. Pentacore helps organize useful payment activity insights.",
      },
      {
        question: "What data helps with capital insights?",
        answer:
          "Collection volume, settlement movement, refunds, transaction consistency, and business activity patterns can all provide useful context.",
      },
      {
        question: "Who is this useful for?",
        answer:
          "It is useful for growing businesses that want clearer payment visibility before planning inventory, vendors, hiring, or expansion.",
      },
    ],
  },
  cta: {
    title: "Plan growth with clearer payment context.",
    description:
      "Use Pentacore Business Capital insights to understand collection patterns and working capital needs.",
    buttonText: "Explore insights",
  },
};

const issuingPage: ProductPageContent = {
  hero: {
    eyebrow: "Pentacore Card Issuing",
    title: "Control business spending with virtual card workflows.",
    description:
      "Create structured card-based spending flows with limits, purpose-based controls, visibility, and finance-ready records.",
    cta: "Explore card issuing",
    footnote:
      "Designed for businesses that want cleaner control over team, vendor, campaign, and operational spending.",
    imageUrl: "/images/products/card-issuing.png",
    imageAlt: "Pentacore card issuing preview",
  },
  problems: {
    title: "Business spending needs control before it becomes messy.",
    cards: [
      {
        icon: "bank",
        title: "Shared spending is hard to track",
        description:
          "Teams often use personal cards, shared cards, or manual reimbursements that create unclear records.",
        note: "Move spending into controlled workflows.",
      },
      {
        icon: "flash",
        title: "Limits need to be practical",
        description:
          "Finance teams need spend controls that fit campaigns, departments, vendors, and daily operations.",
        note: "Set purpose-based limits.",
      },
      {
        icon: "store",
        title: "Records need to be finance-ready",
        description:
          "Every spend should have context, owner, category, and status that finance can review.",
        note: "Reduce cleanup after the spend happens.",
      },
    ],
  },
  benefits: {
    title: "Card issuing workflows with control and visibility.",
    cards: [
      {
        icon: "bank",
        title: "Create virtual cards",
        description:
          "Support business spending with virtual cards designed around internal workflows.",
        points: ["Purpose-based cards", "Team-level usage", "Vendor-ready flows"],
      },
      {
        icon: "flash",
        title: "Set limits and controls",
        description:
          "Give finance teams clearer control over how much can be spent and where.",
        points: ["Spend limits", "Usage visibility", "Controlled approvals"],
      },
      {
        icon: "store",
        title: "Keep spend records clean",
        description:
          "Connect card activity with owner, category, and operational context for easier review.",
        points: ["Finance records", "Transaction context", "Cleaner reporting"],
      },
    ],
  },
  setup: {
    title: "Create card workflows around your spending rules.",
    steps: [
      {
        step: "Step 1",
        title: "Define spend use cases",
        description:
          "Map card usage for teams, vendors, software, ads, travel, or operational purchases.",
        imageUrl: "/images/products/card-issuing.png",
      },
      {
        step: "Step 2",
        title: "Set limits and owners",
        description:
          "Assign spending rules, owners, limits, and review expectations.",
        imageUrl: "/images/products/wallet.png",
      },
      {
        step: "Step 3",
        title: "Review card activity",
        description:
          "Track usage, categories, statuses, and finance records from Pentacore.",
        imageUrl: "/images/products/mobile-app.png",
      },
    ],
  },
  operations: {
    title: "Controlled business spending with better visibility.",
    description:
      "Pentacore Card Issuing helps teams move from scattered spending to structured card workflows with limits, ownership, and review-ready records.",
    imageUrl: "/images/products/card-issuing.png",
    imageAlt: "Card issuing operations preview",
    metrics: [
      { value: "Virtual", label: "card workflow support" },
      { value: "Limit", label: "based spend controls" },
      { value: "Clean", label: "finance-ready records" },
    ],
  },
  useCases: {
    title: "Where teams use Card Issuing",
    items: [
      {
        title: "Marketing spend",
        description:
          "Create controlled card workflows for ad platforms, campaign testing, and recurring tools.",
      },
      {
        title: "Vendor payments",
        description:
          "Use purpose-based cards for vendor subscriptions and operational purchases.",
      },
      {
        title: "Team expenses",
        description:
          "Give teams controlled spending access without relying on personal cards.",
      },
      {
        title: "Software subscriptions",
        description:
          "Track SaaS spending with better owner visibility, limits, and records.",
      },
    ],
  },
  faqs: {
    title: "Questions about Card Issuing",
    items: [
      {
        question: "What are virtual cards useful for?",
        answer:
          "Virtual cards are useful for controlled business spending across teams, vendors, subscriptions, campaigns, and operational purchases.",
      },
      {
        question: "Can spending limits be managed?",
        answer:
          "Yes. Card workflows can be designed with limits, owners, and controls that match your finance process.",
      },
      {
        question: "Can finance review card activity?",
        answer:
          "Yes. Pentacore keeps card activity and spending context organized for easier review and reporting.",
      },
    ],
  },
  cta: {
    title: "Put business spending on a cleaner track.",
    description:
      "Use Pentacore Card Issuing to create virtual card workflows with limits, visibility, and finance-ready records.",
    buttonText: "Explore card issuing",
  },
};

export const productPageContent: Record<string, ProductPageContent> = {
  "payment-links": paymentLinksPage,
  "qr-payments": qrPaymentsPage,
  "express-checkout": expressCheckoutPage,
  "payment-api": paymentApiPage,
  wallet: walletPage,
  "mobile-app": mobileAppPage,
  platforms: platformsPage,
  capital: capitalPage,
  issuing: issuingPage,
};
