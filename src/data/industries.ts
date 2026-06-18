import type { RemixiconComponentType } from "@remixicon/react";
import {
  RiBankCardLine,
  RiBarChartGroupedLine,
  RiExchange2Line,
  RiFileShield2Line,
  RiRefund2Line,
  RiShieldCheckLine,
  RiTimeLine,
  RiWallet3Line,
} from "@remixicon/react";

export type IndustryFeature = {
  title: string;
  description: string;
  icon: RemixiconComponentType;
};

export type IndustryCapability = {
  title: string;
  description: string;
  icon: RemixiconComponentType;
};

export type IndustryChallenge = {
  title: string;
  description: string;
};


export type IndustryItem = {
  slug: string;
  label: string;
  eyebrow: string;
  headline: string;
  description: string;
  imageUrl: string;
  heroStatOne: string;
  heroStatOneLabel: string;
  heroStatTwo: string;
  heroStatTwoLabel: string;
  heroStatThree: string;
  heroStatThreeLabel: string;
  features: IndustryFeature[];
  challenges: IndustryChallenge[];
  useCases: string[];
  workflow: string[];
  capabilities: IndustryCapability[];

  ctaTitle: string;
  ctaDescription: string;
};

export const industryItems: IndustryItem[] = [
  {
    slug: "travel",
    label: "Travel & Hospitality",
    eyebrow: "Payments for travel businesses",
    headline: "Smooth payment collection for bookings, refunds, and vendors.",
    description:
      "Pentacore helps travel platforms, hotels, tour operators, and booking businesses collect payments, manage cancellations, process refunds, and handle vendor payouts with better visibility.",
    imageUrl: "/travel.png",
    heroStatOne: "UPI",
    heroStatOneLabel: "Booking collections",
    heroStatTwo: "INR",
    heroStatTwoLabel: "Vendor payouts",
    heroStatThree: "API",
    heroStatThreeLabel: "Easy integration",
   
    features: [
      {
        title: "Booking Payment Collection",
        description:
          "Accept payments for bookings, reservations, packages, and travel services through simple payin APIs and payment links.",
        icon: RiBankCardLine,
      },
      {
        title: "Cancellation & Refund Flow",
        description:
          "Manage refund visibility and customer payment status clearly when bookings are cancelled or changed.",
        icon: RiRefund2Line,
      },
      {
        title: "Vendor Payout Management",
        description:
          "Send payouts to hotels, agents, drivers, vendors, and travel partners with clean transaction records.",
        icon: RiWallet3Line,
      },
    ],
    challenges: [
  {
    title: "Booking payments need instant confirmation",
    description:
      "Travel customers expect fast confirmation after paying for flights, hotels, tours, or holiday packages. Delayed status updates can create support tickets and booking confusion.",
  },
  {
    title: "Cancellations and refunds are operationally heavy",
    description:
      "Cancelled bookings, failed reservations, partial refunds, and rescheduled trips need clear payment status so support and finance teams can respond faster.",
  },
  {
    title: "Vendor payouts require clean tracking",
    description:
      "Hotels, cab partners, agents, tour guides, and vendors need timely payouts with proper settlement records and booking-wise references.",
  },
],

useCases: [
  "Flight, hotel, and holiday package booking payments",
  "Advance booking collections from customers and agents",
  "Cancellation refunds for failed or changed travel plans",
  "Hotel, cab, guide, and vendor payout management",
  "Travel agent commission and partner settlement tracking",
  "Booking-wise payment status for support and finance teams",
],

workflow: [
  "Customer confirms a booking and completes payment",
  "Pentacore processes the booking payment securely",
  "Booking confirmation is updated through API or webhook",
  "Refunds, vendor payouts, and settlements are tracked from dashboard",
],

capabilities: [
  {
    title: "Booking collections",
    description:
      "Collect payments for flights, hotels, tours, packages, and reservations with clear transaction status.",
    icon: RiBankCardLine,
  },
  {
    title: "Cancellation refunds",
    description:
      "Track refund movement for cancelled bookings, failed reservations, and modified travel plans.",
    icon: RiRefund2Line,
  },
  {
    title: "Vendor payouts",
    description:
      "Send payouts to hotels, travel agents, cab partners, guides, and suppliers with structured records.",
    icon: RiWallet3Line,
  },
  {
    title: "Booking reports",
    description:
      "Review booking payments, refund records, payout status, and settlement movement from one dashboard.",
    icon: RiBarChartGroupedLine,
  },
],

ctaTitle: "Ready to simplify travel payments?",
ctaDescription:
  "Use Pentacore to collect booking payments, manage cancellations, track refunds, and handle vendor payouts for your travel business.",
  },
  {
    slug: "insurance",
    label: "Insurance",
    eyebrow: "Payments for insurance companies",
    headline: "Simplify premium collections and claim-related payouts.",
    description:
      "Pentacore supports insurance companies, brokers, and digital insurance platforms with premium collection, renewal payments, agent payouts, and claim-related fund movement.",
    imageUrl: "/insurance.png",
    heroStatOne: "UPI",
    heroStatOneLabel: "Premium collection",
    heroStatTwo: "24/7",
    heroStatTwoLabel: "Status tracking",
    heroStatThree: "API",
    heroStatThreeLabel: "Webhook updates",
   
    features: [
      {
        title: "Premium Collection",
        description:
          "Collect policy premiums, renewals, and customer payments online with secure transaction status tracking.",
        icon: RiExchange2Line,
      },
      {
        title: "Agent & Broker Payouts",
        description:
          "Process commission payouts and partner settlements with clear records and payout visibility.",
        icon: RiWallet3Line,
      },
      {
        title: "Audit-Ready Records",
        description:
          "Maintain clean transaction trails for payments, refunds, settlement cycles, and operational review.",
        icon: RiShieldCheckLine,
      },
    ],
    challenges: [
    {
      title: "Premium payments are hard to track manually",
      description:
        "Renewals, new policies, partial payments, and failed transactions often create manual reconciliation work for finance teams.",
    },
    {
      title: "Claim payouts need better visibility",
      description:
        "Operations teams need a clear view of payout status, settlement movement, and customer communication touchpoints.",
    },
    {
      title: "Agent commissions need structured records",
      description:
        "Broker and agent payouts require clean transaction trails to avoid disputes and simplify accounting.",
    },
  ],

  useCases: [
    "New policy premium collection",
    "Renewal payment collection",
    "Agent and broker commission payouts",
    "Claim-related customer payouts",
    "Refunds for cancelled or rejected policies",
    "Policy-wise payment reconciliation",
  ],

  workflow: [
    "Customer pays policy premium or renewal amount",
    "Pentacore processes the payment securely",
    "Policy or renewal status updates through webhook",
    "Claims, commissions, refunds, and settlements are tracked",
  ],

  capabilities: [
    {
      title: "Policy-wise payment tracking",
      description:
        "Track premium payments against policy numbers, renewal flows, and customer payment records.",
      icon: RiFileShield2Line,
    },
    {
      title: "Claim payout visibility",
      description:
        "Give teams better visibility into claim payout movement, payout status, and settlement progress.",
      icon: RiRefund2Line,
    },
    {
      title: "Agent commission payouts",
      description:
        "Manage agent, broker, and partner payouts with clear payout history and settlement records.",
      icon: RiWallet3Line,
    },
    {
      title: "Finance reconciliation",
      description:
        "Help finance teams review premium collections, refunds, payouts, and settlement reports from one place.",
      icon: RiBarChartGroupedLine,
    },
  ],

  ctaTitle: "Ready to simplify insurance payment operations?",
  ctaDescription:
    "Use Pentacore to collect premiums, track renewals, manage claim payouts, and maintain cleaner finance records.",
},
  {
    slug: "edtech",
    label: "Education & EdTech",
    eyebrow: "Payments for education platforms",
    headline: "Collect course fees, exam fees, and subscriptions online.",
    imageUrl: "/edtech.png",
    description:
      "Pentacore helps EdTech platforms, coaching institutes, schools, and online learning businesses collect fees, manage subscriptions, and track student payments from one place.",
    heroStatOne: "Fees",
    heroStatOneLabel: "Course payments",
    heroStatTwo: "UPI",
    heroStatTwoLabel: "Student collections",
    heroStatThree: "Dashboard",
    heroStatThreeLabel: "Payment visibility",
    
    features: [
  {
    title: "Student Fee Collection",
    description:
      "Accept course fees, admission fees, exam payments, and online class subscriptions through simple payment flows.",
    icon: RiBankCardLine,
  },
  {
    title: "Subscription & Renewal Support",
    description:
      "Support recurring learning plans, renewals, and paid access models with better payment tracking.",
    icon: RiTimeLine,
  },
  {
    title: "Student Payment Visibility",
    description:
      "Track successful, pending, and failed payments clearly so support teams can resolve student queries faster.",
    icon: RiBarChartGroupedLine,
  },
],

challenges: [
  {
    title: "Student payments are often scattered",
    description:
      "Course fees, exam fees, counselling payments, subscriptions, and renewals can come from different channels, making manual tracking difficult.",
  },
  {
    title: "Access activation depends on payment confirmation",
    description:
      "Students expect instant access after payment. Delayed payment confirmation can affect enrolment, course access, and support experience.",
  },
  {
    title: "Finance teams need student-wise visibility",
    description:
      "Institutes and EdTech platforms need clean records for paid, pending, failed, refunded, and settled payments.",
  },
],

useCases: [
  "Course fee and admission payment collection",
  "Exam fee, test series, and certification payments",
  "Subscription payments for online learning plans",
  "Counselling, webinar, and event registration fees",
  "Teacher, institute partner, and affiliate payouts",
  "Student-wise payment status and reconciliation tracking",
],

workflow: [
  "Student selects a course, test series, or learning plan",
  "Pentacore collects the fee through a secure payment flow",
  "Enrolment, access, or receipt status updates through webhook",
  "Student payments, refunds, partner payouts, and settlements are tracked",
],

capabilities: [
  {
    title: "Fee collection",
    description:
      "Collect course fees, admission fees, exam fees, counselling fees, and certification payments online.",
    icon: RiBankCardLine,
  },
  {
    title: "Learning subscriptions",
    description:
      "Support subscription plans, renewal payments, test series access, and paid learning programs.",
    icon: RiTimeLine,
  },
  {
    title: "Student visibility",
    description:
      "Track paid, pending, failed, and refunded payments for every student or enrollment flow.",
    icon: RiBarChartGroupedLine,
  },
  {
    title: "Partner payouts",
    description:
      "Manage payouts to teachers, counsellors, affiliates, or institute partners with clear records.",
    icon: RiWallet3Line,
  },
],

ctaTitle: "Ready to simplify education payments?",
ctaDescription:
  "Use Pentacore to collect student fees, manage learning subscriptions, track payment status, and support finance operations for your education platform.",
  },
  {
    slug: "d2c-ecommerce",
    label: "E-Commerce",
    eyebrow: "Payments for online sellers",
    headline: "Power checkout, collections, refunds, and seller payouts.",
    description:
      "Pentacore enables D2C brands, online stores, marketplaces, and commerce platforms to collect payments, manage refunds, track settlements, and handle seller or vendor payouts.",
    imageUrl: "/d2c-ecommerce.png",
    heroStatOne: "Checkout",
    heroStatOneLabel: "Payment collection",
    heroStatTwo: "Refunds",
    heroStatTwoLabel: "Customer support",
    heroStatThree: "Payouts",
    heroStatThreeLabel: "Seller settlements",
   
    features: [
  {
    title: "Checkout Payment Collection",
    description:
      "Accept payments from customers through secure online checkout flows, payment links, and UPI collection support.",
    icon: RiBankCardLine,
  },
  {
    title: "Refund & Order Tracking",
    description:
      "Give operations teams clear visibility into payment status, refund status, and order-level transaction records.",
    icon: RiRefund2Line,
  },
  {
    title: "Seller & Vendor Payouts",
    description:
      "Manage payouts to vendors, sellers, suppliers, and partners with structured settlement records.",
    icon: RiWallet3Line,
  },
],

challenges: [
  {
    title: "Every order needs clear payment status",
    description:
      "Online businesses need to know whether an order payment is successful, pending, failed, refunded, or settled without checking multiple systems.",
  },
  {
    title: "Refunds and cancellations create support pressure",
    description:
      "Returns, cancelled orders, failed payments, and refund delays can increase customer support workload if status tracking is not clear.",
  },
  {
    title: "Seller and vendor payouts need structure",
    description:
      "Marketplaces and D2C brands need clean payout records for sellers, suppliers, vendors, logistics partners, and settlement teams.",
  },
],

useCases: [
  "Website and app checkout payment collection",
  "UPI and payment link collections for online orders",
  "Customer refunds for returns, cancellations, and failed orders",
  "Seller, vendor, supplier, and marketplace payouts",
  "Order-wise payment status and settlement tracking",
  "Refund, dispute, and reconciliation visibility for operations",
],

workflow: [
  "Customer places an order and completes checkout payment",
  "Pentacore processes the order payment securely",
  "Order payment status updates through webhook or API",
  "Refunds, seller payouts, vendor settlements, and reports are tracked",
],

capabilities: [
  {
    title: "Checkout payments",
    description:
      "Accept customer payments for online orders through secure checkout, UPI, and payment link flows.",
    icon: RiBankCardLine,
  },
  {
    title: "Refund tracking",
    description:
      "Track refunds for returns, cancellations, failed orders, and customer support cases.",
    icon: RiRefund2Line,
  },
  {
    title: "Seller payouts",
    description:
      "Send payouts to sellers, vendors, suppliers, and marketplace partners with clean records.",
    icon: RiWallet3Line,
  },
  {
    title: "Order reporting",
    description:
      "Monitor order-wise payments, settlements, refund status, and payout movement from one dashboard.",
    icon: RiBarChartGroupedLine,
  },
],

ctaTitle: "Ready to simplify commerce payments?",
ctaDescription:
  "Use Pentacore to power checkout payments, refunds, seller payouts, and settlement tracking for your online business.",
  },
];
