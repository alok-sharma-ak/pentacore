export type BlogCategory = "All" | "Payments" | "Business" | "Guides";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: Exclude<BlogCategory, "All">;
  imageUrl: string;
  publishedAt: string;
  readTime: string;
  href: string;
  featured?: boolean;
};

export const blogCategories: BlogCategory[] = [
  "All",
  "Payments",
  "Business",
  "Guides",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "webhook-callbacks",
    title: "Webhook Callbacks: Why They Matter in Payment Systems",
    excerpt:
      "Webhooks help merchants receive real-time transaction status updates for successful, failed, pending, or refunded payments.",
    category: "Guides",
    imageUrl: "/webhook-callbacks.png",
    publishedAt: "March 2026",
    readTime: "5 min read",
    href: "/blogs/webhook-callbacks",
    content: `
<p>Webhook callbacks are one of the most important parts of a payment system. They help your business receive automatic updates when a transaction status changes.</p>

<p>Without webhooks, your team may need to manually check whether a payment is successful, failed, pending, refunded, or settled. With webhooks, your system can receive these updates in real time and act automatically.</p>

<h2>What Is a Webhook Callback?</h2>

<p>A webhook is an automatic message sent from a payment platform to your server when an event happens. In payments, this event could be a successful payin, failed payout, refund update, settlement update, or status change.</p>

<p>For example, when a customer completes a payment, Pentacore can send a webhook callback to your system so your order, booking, policy, or invoice status can be updated automatically.</p>

<h2>Why Webhooks Matter</h2>

<ul>
  <li><strong>Real-time updates:</strong> Your system receives transaction updates without manual checking.</li>
  <li><strong>Better customer experience:</strong> Orders, bookings, or services can be activated faster after payment confirmation.</li>
  <li><strong>Less manual work:</strong> Support and operations teams do not need to repeatedly check payment status.</li>
  <li><strong>Clear reconciliation:</strong> Finance teams can match payment updates with internal records more easily.</li>
  <li><strong>Reliable automation:</strong> Your backend can trigger actions based on successful, failed, or refunded payments.</li>
</ul>

<h2>Common Payment Events Sent Through Webhooks</h2>

<ul>
  <li>Payin successful</li>
  <li>Payin failed</li>
  <li>Payin pending</li>
  <li>Payout successful</li>
  <li>Payout failed</li>
  <li>Refund initiated</li>
  <li>Refund successful</li>
  <li>Settlement update</li>
</ul>

<h2>Example Webhook Flow</h2>

<ol>
  <li>A customer makes a payment on your website or app.</li>
  <li>Pentacore processes the transaction.</li>
  <li>The payment status changes to successful, failed, or pending.</li>
  <li>Pentacore sends a webhook callback to your configured webhook URL.</li>
  <li>Your backend verifies the callback and updates the order or transaction record.</li>
  <li>Your customer or internal team sees the updated status automatically.</li>
</ol>

<h2>Best Practices for Webhooks</h2>

<ul>
  <li><strong>Use a secure HTTPS URL:</strong> Always configure webhook URLs over HTTPS.</li>
  <li><strong>Verify webhook authenticity:</strong> Validate the signature or hash before trusting the payload.</li>
  <li><strong>Make webhook handling idempotent:</strong> If the same webhook is received twice, your system should not create duplicate updates.</li>
  <li><strong>Store webhook payloads:</strong> Keep webhook request data for debugging and audit purposes.</li>
  <li><strong>Respond quickly:</strong> Your webhook endpoint should return a success response after receiving the callback.</li>
  <li><strong>Retry failed processing:</strong> If internal processing fails, use a retry mechanism or queue.</li>
</ul>

<h2>How Pentacore Helps</h2>

<p>Pentacore helps merchants keep their systems updated with webhook callbacks for payment and payout events. This allows your backend to automatically update transaction status, order status, refund records, and payout visibility.</p>

<ul>
  <li><strong>Payin updates:</strong> Receive payment success, failure, and pending status callbacks.</li>
  <li><strong>Payout updates:</strong> Track payout movement and payout status changes.</li>
  <li><strong>Refund updates:</strong> Keep refund status visible for support and finance teams.</li>
  <li><strong>Transaction visibility:</strong> Maintain cleaner records for reconciliation and reporting.</li>
</ul>

<h2>Final Thoughts</h2>

<p>Webhook callbacks make payment systems more reliable, automated, and transparent. They reduce manual status checks, improve customer experience, and help teams maintain accurate transaction records.</p>

<p>For any business accepting online payments, webhooks are not optional. They are a key part of building a professional and scalable payment operation.</p>
  `,
  },
  {
    slug: "secure-payment-processing",
    title: "Security Basics Every Payment Gateway Should Follow",
    excerpt:
      "From API authentication to webhook verification, learn the basic controls that help protect payment operations.",
    category: "Guides",
    imageUrl: "/secure-payment-processing.png",
    publishedAt: "March 2026",
    readTime: "5 min read",
    href: "/blogs/secure-payment-processing",
    content: `
<p>Security is one of the most important parts of any payment gateway. Every online payment involves customer data, transaction details, merchant information, and money movement. A secure payment system protects both the business and the customer.</p>

<p>For merchants, payment security is not only about preventing fraud. It is also about keeping APIs safe, verifying webhook updates, controlling dashboard access, and maintaining clean transaction records.</p>

<h2>Why Payment Security Matters</h2>

<ul>
  <li><strong>Protect customer trust:</strong> Customers expect their payment information and transaction status to be handled safely.</li>
  <li><strong>Reduce fraud risk:</strong> Strong controls help prevent unauthorized payment activity.</li>
  <li><strong>Secure money movement:</strong> Payins, payouts, refunds, and settlements should be protected at every step.</li>
  <li><strong>Improve operational control:</strong> Clear access rules help teams work safely without exposing sensitive actions.</li>
</ul>

<h2>Key Security Controls</h2>

<h3>1. API Authentication</h3>
<p>Every payment API request should be authenticated. API keys, tokens, or signatures help ensure that only authorized systems can create payment requests, check status, or initiate payouts.</p>

<h3>2. Webhook Verification</h3>
<p>Webhooks update your system when payment status changes. Because these updates affect orders, refunds, and payouts, your backend should verify webhook authenticity before trusting the payload.</p>

<h3>3. Role-Based Access</h3>
<p>Not every team member should have access to every payment action. Role-based access helps separate responsibilities for operations, finance, support, and admin users.</p>

<h3>4. Secure Transaction Tracking</h3>
<p>Every transaction should have clear identifiers, timestamps, status history, and references. This helps teams investigate payment issues and maintain audit-ready records.</p>

<h3>5. Safe Payout Controls</h3>
<p>Payouts move money out of the business. Strong validation, approval flows, and status tracking help reduce mistakes and unauthorized fund movement.</p>

<h2>Best Practices for Merchants</h2>

<ul>
  <li>Keep API keys private and never expose them in frontend code.</li>
  <li>Use HTTPS for all payment and webhook endpoints.</li>
  <li>Verify webhook signatures before updating transaction status.</li>
  <li>Limit dashboard access based on user responsibility.</li>
  <li>Monitor failed, suspicious, or repeated transaction activity.</li>
  <li>Store request and response logs safely for debugging and audits.</li>
</ul>

<h2>How Pentacore Helps</h2>

<p>Pentacore is built with security-focused payment operations in mind. It helps merchants manage secure payins, payouts, webhook updates, transaction tracking, refunds, and settlements with better visibility and control.</p>

<ul>
  <li><strong>Secure APIs:</strong> Help protect payment creation, status checks, and payout actions.</li>
  <li><strong>Webhook validation:</strong> Support safer system updates for payment events.</li>
  <li><strong>Transaction visibility:</strong> Track payment status, timestamps, and movement clearly.</li>
  <li><strong>Controlled operations:</strong> Support safer workflows for finance, support, and operations teams.</li>
</ul>

<h2>Final Thoughts</h2>

<p>Security should be part of every payment flow, not an afterthought. With the right controls, businesses can protect customers, reduce risk, and manage payment operations more confidently.</p>

<p>A secure payment gateway gives merchants the foundation to collect payments, send payouts, manage refunds, and track settlements with trust and control.</p>
  `,
  },
  {
    slug: "transaction-monitoring",
    title: "Why Real-Time Transaction Monitoring Matters",
    excerpt:
      "Real-time monitoring helps support, operations, and finance teams quickly identify failed, pending, and successful transactions.",
    category: "Business",
    imageUrl: "/transaction-monitoring.png",
    publishedAt: "March 2026",
    readTime: "4 min read",
    href: "/blogs/transaction-monitoring",
    content: `
<p>Real-time transaction monitoring helps businesses track payment activity as it happens. Instead of waiting for manual reports or customer complaints, teams can quickly see whether a transaction is successful, failed, pending, refunded, or settled.</p>

<p>For payment-heavy businesses, this visibility is important because every transaction affects customer experience, support queries, finance records, and settlement planning.</p>

<h2>Why Real-Time Monitoring Is Important</h2>

<ul>
  <li><strong>Faster issue detection:</strong> Teams can quickly identify failed or pending payments before they become larger support problems.</li>
  <li><strong>Better customer support:</strong> Support teams can check transaction status instantly and respond with more confidence.</li>
  <li><strong>Clear operational visibility:</strong> Operations teams can monitor payins, payouts, refunds, and settlements from one place.</li>
  <li><strong>Improved reconciliation:</strong> Finance teams can match payment records with settlement and refund data more easily.</li>
  <li><strong>Reduced manual checks:</strong> Teams no longer need to depend only on spreadsheets, screenshots, or bank statement checks.</li>
</ul>

<h2>What Businesses Should Monitor</h2>

<ul>
  <li>Successful, failed, and pending payins</li>
  <li>Payout status and payout failures</li>
  <li>Refund initiation and refund completion</li>
  <li>Settlement movement and settlement cycles</li>
  <li>Webhook delivery and payment status updates</li>
  <li>Transaction volume, success rate, and failure trends</li>
</ul>

<h2>Who Benefits From Monitoring?</h2>

<ul>
  <li><strong>Support teams:</strong> Resolve customer payment queries faster.</li>
  <li><strong>Operations teams:</strong> Track transaction health and payment movement.</li>
  <li><strong>Finance teams:</strong> Reconcile collections, refunds, payouts, and settlements.</li>
  <li><strong>Business owners:</strong> Understand cash flow and payment performance clearly.</li>
</ul>

<h2>How Pentacore Helps</h2>

<p>Pentacore gives merchants better visibility into transaction activity through a clear dashboard, status tracking, webhook updates, and payment reports. This helps teams manage daily payment operations with less confusion and more control.</p>

<ul>
  <li><strong>Live transaction status:</strong> Track successful, failed, pending, refunded, and settled transactions.</li>
  <li><strong>Payin and payout visibility:</strong> Monitor money coming in and going out.</li>
  <li><strong>Refund tracking:</strong> Keep customer refund records clear and traceable.</li>
  <li><strong>Settlement reports:</strong> Help finance teams understand money movement.</li>
</ul>

<h2>Final Thoughts</h2>

<p>Real-time transaction monitoring is not just a dashboard feature. It is an important part of running reliable payment operations. With Pentacore, businesses can track every transaction movement and respond faster to payment issues.</p>
  `,
  },
  {
    slug: "payment-gateway-for-growing-businesses",
    title: "What Is a Payment Gateway and Why Growing Businesses Need One?",
    excerpt:
      "Learn how a payment gateway helps businesses collect payments, track transaction status, manage refunds, and simplify settlements.",
    category: "Payments",
    imageUrl: "/payment-gateway-for-growing-businesses.png",
    publishedAt: "May 2026",
    readTime: "4 min read",
    href: "/blogs/payment-gateway-for-growing-businesses",
    featured: true,
    content: `
<p>A payment gateway helps businesses accept online payments from customers through websites, mobile apps, checkout pages, or payment links. It securely connects your business with banks and payment networks so payments can be processed and confirmed.</p>

<p>For growing businesses, a payment gateway is not just a checkout tool. It helps teams collect payments, track transaction status, manage refunds, monitor settlements, and reduce manual payment follow-ups.</p>

<h2>Why Businesses Need a Payment Gateway</h2>

<ul>
  <li><strong>Faster collections:</strong> Accept payments through UPI, cards, net banking, wallets, and payment links.</li>
  <li><strong>Clear transaction status:</strong> Track whether a payment is successful, failed, pending, refunded, or settled.</li>
  <li><strong>Better refund handling:</strong> Link refunds with original transactions and reduce customer support confusion.</li>
  <li><strong>Settlement visibility:</strong> Help finance teams understand when collected money reaches the business account.</li>
  <li><strong>Payout support:</strong> Send money to vendors, sellers, partners, agents, or users from one payment system.</li>
</ul>

<h2>Common Use Cases</h2>

<ul>
  <li><strong>E-Commerce:</strong> Checkout payments, refunds, and seller payouts</li>
  <li><strong>Travel:</strong> Booking payments, cancellation refunds, and vendor payouts</li>
  <li><strong>EdTech:</strong> Course fees, exam fees, subscriptions, and student payments</li>
  <li><strong>Insurance:</strong> Premium collections, renewals, claim payouts, and agent commissions</li>
</ul>

<h2>How Pentacore Helps</h2>

<p>Pentacore helps merchants manage payins, payouts, transaction tracking, refunds, webhooks, settlements, and reports from one place. It is built for businesses that need reliable payment operations with better visibility and control.</p>

<ul>
  <li><strong>Payins:</strong> Accept customer payments securely</li>
  <li><strong>Payouts:</strong> Send funds to vendors, sellers, partners, or users</li>
  <li><strong>Webhooks:</strong> Get real-time payment status updates</li>
  <li><strong>Reports:</strong> Track settlements, refunds, and transaction history</li>
</ul>

<h2>Final Thoughts</h2>

<p>A payment gateway helps your business move from manual payment handling to a structured payment system. With Pentacore, businesses can collect payments, manage payouts, track refunds, and monitor settlements with confidence.</p>
  `,
  },
  {
    slug: "payin-vs-payout",
    title: "Payin vs Payout: What Every Merchant Should Understand",
    excerpt:
      "Understand the difference between collecting payments from customers and sending payouts to vendors, users, or partners.",
    category: "Payments",
    imageUrl: "/payin-vs-payout.png",
    publishedAt: "May 2026",
    readTime: "4 min read",
    href: "/blogs/payin-vs-payout",
    content: `
<p>Payin and payout are two important parts of business payment operations. A payin means money coming into your business, while a payout means money going out from your business.</p>

<p>For merchants, understanding both flows is important because collections, refunds, settlements, vendor payments, and partner payouts all affect cash flow and reconciliation.</p>

<h2>What Is a Payin?</h2>

<p>A payin is the process of collecting money from customers. This can happen through a website checkout, mobile app, UPI payment, card payment, QR code, payment link, or invoice payment.</p>

<p>Common payin examples include:</p>

<ul>
  <li>Customer paying for an online order</li>
  <li>Student paying course or exam fees</li>
  <li>Customer paying insurance premium</li>
  <li>Traveller paying for hotel or flight booking</li>
  <li>Client paying through a payment link</li>
</ul>

<h2>What Is a Payout?</h2>

<p>A payout is the process of sending money from your business to another person or business. This may include vendors, sellers, partners, agents, customers, or service providers.</p>

<p>Common payout examples include:</p>

<ul>
  <li>Sending money to vendors or suppliers</li>
  <li>Paying sellers on a marketplace</li>
  <li>Processing customer refunds</li>
  <li>Sending commissions to agents or partners</li>
  <li>Settling funds to business or merchant accounts</li>
</ul>

<h2>Payin vs Payout: Key Difference</h2>

<ul>
  <li><strong>Payin:</strong> Money comes into your business from customers.</li>
  <li><strong>Payout:</strong> Money goes out from your business to vendors, customers, partners, or users.</li>
</ul>

<p>Both are connected. For example, an e-commerce business collects money from customers as payins and later sends payouts to sellers, vendors, logistics partners, or customers for refunds.</p>

<h2>Why Merchants Should Track Both</h2>

<p>If payins and payouts are tracked separately or manually, finance teams may struggle with reconciliation. Clear tracking helps your business understand how much money was collected, how much was paid out, what was refunded, and what is settled.</p>

<ul>
  <li>Better cash flow visibility</li>
  <li>Easier reconciliation</li>
  <li>Clear refund and settlement tracking</li>
  <li>Better vendor and partner payout management</li>
  <li>Faster support for transaction-related queries</li>
</ul>

<h2>How Pentacore Helps</h2>

<p>Pentacore helps merchants manage both payins and payouts from one platform. Your team can collect customer payments, send payouts, track transaction status, review refunds, monitor settlements, and maintain cleaner payment records.</p>

<ul>
  <li><strong>Payin support:</strong> Accept customer payments securely</li>
  <li><strong>Payout support:</strong> Send funds to vendors, sellers, partners, or users</li>
  <li><strong>Status tracking:</strong> Monitor successful, failed, pending, and refunded transactions</li>
  <li><strong>Reports:</strong> Review collections, payouts, refunds, and settlements</li>
</ul>

<h2>Final Thoughts</h2>

<p>Payins and payouts are two sides of the same payment operation. Businesses that manage both clearly can reduce manual work, improve finance visibility, and provide better support to customers and partners.</p>
  `,
  },
  {
    slug: "upi-collections-for-business",
    title: "How UPI Collections Help Businesses Accept Payments Faster",
    excerpt:
      "UPI has become one of the easiest ways for Indian businesses to collect payments quickly and improve customer payment experience.",
    category: "Payments",
    imageUrl: "/upi-collections-for-business.png",
    publishedAt: "May 2026",
    readTime: "4 min read",
    href: "/blogs/upi-collections-for-business",
    content: `
<p>UPI has changed how Indian customers pay online. It is fast, familiar, and easy to use across mobile apps, websites, payment links, and QR-based flows. For businesses, UPI collections can make payment acceptance faster and simpler.</p>

<p>Whether you are running an online store, service platform, travel business, EdTech platform, or marketplace, UPI helps customers complete payments without entering long card or bank details.</p>

<h2>Why UPI Collections Matter</h2>

<ul>
  <li><strong>Faster checkout:</strong> Customers can pay quickly using their preferred UPI app.</li>
  <li><strong>Better customer experience:</strong> UPI is familiar to Indian users and reduces payment friction.</li>
  <li><strong>Easy payment tracking:</strong> Businesses can track payment status using transaction IDs and order references.</li>
  <li><strong>Useful for many flows:</strong> UPI works for checkout payments, payment links, invoices, bookings, and fee collections.</li>
  <li><strong>Lower manual follow-up:</strong> Real-time status updates help teams avoid checking screenshots or bank credits manually.</li>
</ul>

<h2>Common Business Use Cases</h2>

<ul>
  <li><strong>E-Commerce:</strong> Collect payments for online orders and checkout flows.</li>
  <li><strong>Travel:</strong> Accept booking payments for hotels, flights, tours, and packages.</li>
  <li><strong>EdTech:</strong> Collect course fees, exam fees, counselling fees, and subscriptions.</li>
  <li><strong>Insurance:</strong> Collect premium payments and policy renewals.</li>
  <li><strong>Services:</strong> Accept consultation fees, invoices, and recurring customer payments.</li>
</ul>

<h2>How Pentacore Helps</h2>

<p>Pentacore helps businesses collect UPI payments with better transaction visibility. Your team can track successful, failed, pending, and refunded payments from one place.</p>

<ul>
  <li><strong>UPI collections:</strong> Accept customer payments quickly through supported payment flows.</li>
  <li><strong>Transaction status:</strong> Track every payment with clear status and references.</li>
  <li><strong>Webhooks:</strong> Receive payment updates in your system automatically.</li>
  <li><strong>Reports:</strong> Review collections, refunds, and settlement movement easily.</li>
</ul>

<h2>Final Thoughts</h2>

<p>UPI collections are one of the simplest ways for Indian businesses to accept payments faster. With Pentacore, businesses can use UPI payment flows while maintaining better visibility over transactions, refunds, and settlements.</p>
  `,
  },
  {
    slug: "merchant-onboarding-checklist",
    title: "Merchant Onboarding Checklist for Payment Gateway Setup",
    excerpt:
      "A simple checklist for businesses preparing documents, bank details, GST, PAN, and webhook URLs before going live.",
    category: "Business",
    imageUrl: "/merchant-onboarding-checklist.png",
    publishedAt: "April 2026",
    readTime: "5 min read",
    href: "/blogs/merchant-onboarding-checklist",
    content: `
<p>Merchant onboarding is the first step before a business can start accepting online payments. A smooth onboarding process helps payment teams verify business details, bank information, compliance documents, and integration requirements.</p>

<p>Preparing the right details in advance can reduce delays and help your business go live faster with Pentacore.</p>

<h2>Basic Business Details</h2>

<ul>
  <li><strong>Business name:</strong> Legal or registered business name</li>
  <li><strong>Business type:</strong> Proprietorship, partnership, LLP, private limited company, or other structure</li>
  <li><strong>Business address:</strong> Registered and operating address</li>
  <li><strong>Contact details:</strong> Email, phone number, and authorized person details</li>
  <li><strong>Website or app URL:</strong> Your live business website, app, or platform link</li>
</ul>

<h2>Documents Required</h2>

<p>The required documents may vary based on business type, but most payment gateway onboarding flows require identity, business, and bank verification.</p>

<ul>
  <li>Company PAN or proprietor PAN</li>
  <li>GST certificate, if applicable</li>
  <li>Certificate of Incorporation, for companies</li>
  <li>MOA and AOA, for private limited companies</li>
  <li>Director or owner PAN and Aadhaar</li>
  <li>Cancelled cheque or recent bank statement</li>
</ul>

<h2>Bank and Settlement Details</h2>

<p>Your settlement account should match your business details. This helps avoid payout and settlement delays after payments are collected.</p>

<ul>
  <li>Account holder name</li>
  <li>Bank account number</li>
  <li>IFSC code</li>
  <li>Cancelled cheque or bank proof</li>
  <li>Settlement preference, if available</li>
</ul>

<h2>Integration Details</h2>

<p>Before going live, your technical team should keep API and webhook details ready. This ensures payment status can update automatically in your system.</p>

<ul>
  <li>Payin API integration requirement</li>
  <li>Payout API integration requirement</li>
  <li>Success and failure redirect URLs</li>
  <li>Payin webhook URL</li>
  <li>Payout webhook URL</li>
  <li>Test environment access for sandbox checks</li>
</ul>

<h2>Go-Live Checklist</h2>

<ul>
  <li>Business details verified</li>
  <li>Documents uploaded correctly</li>
  <li>Bank account validated</li>
  <li>API keys configured securely</li>
  <li>Webhook URLs tested</li>
  <li>Test transactions completed</li>
  <li>Settlement and reporting access reviewed</li>
</ul>

<h2>How Pentacore Helps</h2>

<p>Pentacore helps businesses move through onboarding with clear document requirements, API support, webhook setup, transaction tracking, and settlement visibility. Once onboarding is complete, merchants can start collecting payments, managing payouts, and monitoring transactions from one platform.</p>

<h2>Final Thoughts</h2>

<p>A complete onboarding checklist makes payment gateway setup faster and smoother. By preparing business documents, bank details, and integration requirements early, your team can reduce delays and go live with confidence.</p>
  `,
  },
  {
    slug: "settlement-cycle-guide",
    title: "Settlement Cycles Explained: T+0, T+1, and T+2",
    excerpt:
      "Understand how settlement timelines work and how they impact business cash flow, reconciliation, and financial planning.",
    category: "Guides",
    imageUrl: "/settlement-cycle-guide.png",
    publishedAt: "April 2026",
    readTime: "5 min read",
    href: "/blogs/settlement-cycle-guide",
    content: `
<p>Settlement cycle means the time it takes for collected payment money to reach the merchant’s settlement account. When a customer pays online, the amount is first processed through the payment system and then settled to the business based on the agreed settlement timeline.</p>

<p>For growing businesses, settlement timing is important because it directly affects cash flow, vendor payments, inventory planning, refunds, and daily finance operations.</p>

<h2>What Does T+0, T+1, and T+2 Mean?</h2>

<ul>
  <li><strong>T+0 settlement:</strong> Money is settled on the same day.</li>
  <li><strong>T+1 settlement:</strong> Money is settled on the next working day.</li>
  <li><strong>T+2 settlement:</strong> Money is settled after two working days.</li>
</ul>

<p>Here, “T” usually means the transaction day. For example, if a payment is collected on Monday, T+1 means the settlement may happen on Tuesday, and T+2 means it may happen on Wednesday, depending on banking and operational rules.</p>

<h2>Why Settlement Cycles Matter</h2>

<ul>
  <li><strong>Cash flow planning:</strong> Faster settlements help businesses access funds earlier.</li>
  <li><strong>Vendor payments:</strong> Businesses can plan payouts to vendors, sellers, or partners better.</li>
  <li><strong>Refund management:</strong> Finance teams can understand available balance before processing refunds.</li>
  <li><strong>Reconciliation:</strong> Clear settlement reports help match collected payments with bank credits.</li>
  <li><strong>Business forecasting:</strong> Predictable settlement timelines improve financial planning.</li>
</ul>

<h2>Example Settlement Flow</h2>

<ol>
  <li>Customer completes a payment on your website, app, or payment link.</li>
  <li>The payment gateway processes and confirms the transaction status.</li>
  <li>The transaction becomes eligible for settlement based on your cycle.</li>
  <li>The settlement amount is transferred to your merchant account.</li>
  <li>Your finance team reconciles the settlement with transaction reports.</li>
</ol>

<h2>How Pentacore Helps</h2>

<p>Pentacore helps businesses track collected payments, payouts, refunds, and settlements from one place. Clear settlement visibility makes it easier for finance teams to understand money movement and reduce manual reconciliation work.</p>

<ul>
  <li><strong>Settlement tracking:</strong> View settlement status and movement clearly.</li>
  <li><strong>Transaction reports:</strong> Match payments with settlement records.</li>
  <li><strong>Payout visibility:</strong> Track outgoing money movement to vendors or partners.</li>
  <li><strong>Refund records:</strong> Keep refunds linked with original transactions.</li>
</ul>

<h2>Final Thoughts</h2>

<p>Settlement cycles are a key part of payment operations. Whether your business works on T+0, T+1, or T+2, clear settlement visibility helps your team manage cash flow, reconciliation, refunds, and payouts with more confidence.</p>
  `,
  },
  {
    slug: "refund-management",
    title: "How to Manage Refunds Without Losing Customer Trust",
    excerpt:
      "Refunds are part of payment operations. Learn how clear refund tracking can improve customer support and reduce disputes.",
    category: "Payments",
    imageUrl: "/refund-management.png",
    publishedAt: "April 2026",
    readTime: "4 min read",
    href: "/blogs/refund-management",
    content: `
<p>Refunds are a normal part of payment operations. Orders get cancelled, bookings fail, products are returned, or customers may be charged incorrectly. The real challenge is not just processing refunds, but keeping the customer informed and maintaining trust throughout the process.</p>

<p>When refund tracking is unclear, support teams receive repeated customer queries, finance teams struggle with reconciliation, and customers lose confidence in the business.</p>

<h2>Why Refund Management Matters</h2>

<ul>
  <li><strong>Customer trust:</strong> Clear refund status helps customers feel confident that their money is being handled properly.</li>
  <li><strong>Support efficiency:</strong> Teams can quickly answer whether a refund is initiated, processing, completed, or failed.</li>
  <li><strong>Better reconciliation:</strong> Finance teams can match refunds with original transactions and settlement records.</li>
  <li><strong>Lower disputes:</strong> Transparent refund records reduce confusion and payment-related escalations.</li>
</ul>

<h2>Common Refund Scenarios</h2>

<ul>
  <li>Cancelled orders or bookings</li>
  <li>Failed payments where money was debited</li>
  <li>Returned products in e-commerce</li>
  <li>Cancelled subscriptions or services</li>
  <li>Duplicate or incorrect payments</li>
</ul>

<h2>How Pentacore Helps</h2>

<p>Pentacore helps businesses track refunds with better visibility. Refunds can stay linked to the original payment, making it easier to review transaction history, customer details, amount, status, and settlement movement.</p>

<ul>
  <li><strong>Refund status tracking:</strong> Monitor initiated, pending, successful, or failed refunds.</li>
  <li><strong>Original transaction reference:</strong> Keep refunds connected to the payment they belong to.</li>
  <li><strong>Dashboard visibility:</strong> Help support and finance teams review refund activity from one place.</li>
  <li><strong>Clear reports:</strong> Track refund records for reconciliation and internal review.</li>
</ul>

<h2>Best Practices for Refunds</h2>

<ul>
  <li>Share clear refund timelines with customers.</li>
  <li>Keep refund records linked to original payments.</li>
  <li>Give support teams access to refund status.</li>
  <li>Review failed or delayed refunds regularly.</li>
  <li>Use reports to reconcile refunds with settlements.</li>
</ul>

<h2>Final Thoughts</h2>

<p>Refunds can either create frustration or build trust. With clear refund tracking, businesses can reduce support pressure, improve customer communication, and maintain cleaner payment records. Pentacore helps merchants manage refunds as part of a complete payment operation.</p>
  `,
  },
  {
    slug: "payment-links-for-business",
    title: "Payment Links: A Simple Way to Collect Payments Online",
    excerpt:
      "Payment links help businesses collect payments without building a full checkout flow or complex integration.",
    category: "Payments",
    imageUrl: "/payment-options.png",
    publishedAt: "February 2026",
    readTime: "4 min read",
    href: "/blogs/payment-links-for-business",
    content: `
<p>Payment links are one of the simplest ways for businesses to collect money online. Instead of building a full checkout page or complex payment integration, a merchant can create a link and share it with the customer through WhatsApp, SMS, email, chat, or social media.</p>

<p>For small businesses, service providers, institutes, travel agents, and online sellers, payment links make collections faster and easier.</p>

<h2>What Is a Payment Link?</h2>

<p>A payment link is a secure URL that allows a customer to complete payment online. The customer opens the link, chooses a payment method, and pays the required amount.</p>

<p>Payment links can be used for fixed amounts, custom invoices, service payments, booking advances, fee collections, and one-time customer payments.</p>

<h2>Why Businesses Use Payment Links</h2>

<ul>
  <li><strong>No complex integration:</strong> Collect payments without building a full checkout flow.</li>
  <li><strong>Easy sharing:</strong> Send links through WhatsApp, SMS, email, or chat.</li>
  <li><strong>Faster collections:</strong> Customers can pay directly from the link.</li>
  <li><strong>Better tracking:</strong> Track whether a link payment is successful, failed, or pending.</li>
  <li><strong>Useful for many teams:</strong> Sales, support, finance, and operations teams can collect payments easily.</li>
</ul>

<h2>Common Use Cases</h2>

<ul>
  <li>Collecting advance booking payments</li>
  <li>Sending invoices to customers</li>
  <li>Collecting course or counselling fees</li>
  <li>Taking service payments over WhatsApp</li>
  <li>Collecting payment for custom orders</li>
  <li>Recovering failed or pending checkout payments</li>
</ul>

<h2>How Pentacore Helps</h2>

<p>Pentacore helps merchants collect payments through simple and trackable payment flows. Businesses can use payment links to collect money faster while keeping transaction status visible for support and finance teams.</p>

<ul>
  <li><strong>Quick payment collection:</strong> Share payment links directly with customers.</li>
  <li><strong>Status tracking:</strong> Monitor successful, failed, and pending payments.</li>
  <li><strong>Reports:</strong> Review collections, refunds, and settlement movement.</li>
  <li><strong>Customer support:</strong> Help teams answer payment queries faster.</li>
</ul>

<h2>Final Thoughts</h2>

<p>Payment links are a practical option for businesses that want to collect payments quickly without heavy development work. With Pentacore, merchants can use payment links while still maintaining better visibility over transactions, refunds, and settlements.</p>
  `,
  },
  {
    slug: "vendor-payouts",
    title: "Vendor Payouts: How Businesses Can Move Money Better",
    excerpt:
      "Learn how structured payout flows help businesses pay vendors, partners, sellers, and service providers more efficiently.",
    category: "Business",
    imageUrl: "/bank-transfer.png",
    publishedAt: "February 2026",
    readTime: "5 min read",
    href: "/blogs/vendor-payouts",
    content: `
<p>Vendor payouts are the outgoing payments a business sends to vendors, suppliers, sellers, partners, agents, service providers, or users. For businesses that work with multiple partners, payout management is a key part of daily operations.</p>

<p>Without a structured payout flow, teams may depend on manual bank transfers, spreadsheets, and repeated status checks. This can create delays, errors, and reconciliation issues.</p>

<h2>Why Vendor Payouts Matter</h2>

<ul>
  <li><strong>Timely partner payments:</strong> Vendors and partners expect clear and reliable payment movement.</li>
  <li><strong>Better cash flow control:</strong> Businesses can plan outgoing payments more efficiently.</li>
  <li><strong>Clear payout status:</strong> Teams can track whether a payout is initiated, processing, successful, or failed.</li>
  <li><strong>Cleaner records:</strong> Finance teams get structured payout history for reconciliation and audits.</li>
</ul>

<h2>Common Vendor Payout Use Cases</h2>

<ul>
  <li>Seller payouts for marketplaces</li>
  <li>Supplier and vendor payments</li>
  <li>Agent and partner commissions</li>
  <li>Travel vendor or hotel payouts</li>
  <li>Refund-related customer payouts</li>
  <li>Service provider payments</li>
</ul>

<h2>Challenges in Manual Payouts</h2>

<p>Manual payouts become difficult as business volume grows. Teams may struggle with bank account validation, payout tracking, duplicate transfers, failed payouts, and payout reconciliation.</p>

<p>A structured payout system helps reduce these risks by giving every payout a clear reference, status, amount, timestamp, and beneficiary record.</p>

<h2>How Pentacore Helps</h2>

<p>Pentacore helps businesses manage payouts with better visibility and control. Merchants can send money to vendors, sellers, partners, users, or business accounts while tracking payout status from one place.</p>

<ul>
  <li><strong>Payout initiation:</strong> Send funds through secure payout flows.</li>
  <li><strong>Status tracking:</strong> Monitor initiated, processing, successful, and failed payouts.</li>
  <li><strong>Transaction records:</strong> Keep payout history clean and traceable.</li>
  <li><strong>Reports:</strong> Help finance teams review payouts, settlements, and reconciliation data.</li>
</ul>

<h2>Final Thoughts</h2>

<p>Vendor payouts are not just money transfers. They are part of business trust, partner relationships, and finance operations. With Pentacore, businesses can manage payouts in a more structured, visible, and reliable way.</p>
  `,
  },
  {
    slug: "reconciliation-guide",
    title: "Payment Reconciliation Guide for Finance Teams",
    excerpt:
      "Understand how transaction reports, settlement data, refunds, and payout records help simplify reconciliation.",
    category: "Guides",
    imageUrl: "/merchant-wallet.png",
    publishedAt: "February 2026",
    readTime: "6 min read",
    href: "/blogs/reconciliation-guide",
    content: `
<p>Payment reconciliation is the process of matching payment records with settlement records, bank credits, refunds, and payout entries. It helps finance teams confirm that the money collected, settled, refunded, or paid out matches internal business records.</p>

<p>For growing businesses, reconciliation becomes important because payment volume increases, refunds become frequent, and settlements may happen across different cycles.</p>

<h2>Why Reconciliation Matters</h2>

<ul>
  <li><strong>Accurate finance records:</strong> Match collected payments with actual settled amounts.</li>
  <li><strong>Refund clarity:</strong> Track refunds against original transactions.</li>
  <li><strong>Payout visibility:</strong> Confirm outgoing payments to vendors, sellers, or partners.</li>
  <li><strong>Dispute handling:</strong> Investigate failed, pending, or mismatched transactions faster.</li>
  <li><strong>Audit readiness:</strong> Maintain clean records for internal review and compliance checks.</li>
</ul>

<h2>What Finance Teams Should Reconcile</h2>

<ul>
  <li>Successful payin transactions</li>
  <li>Failed and pending transaction records</li>
  <li>Settlement amounts and settlement dates</li>
  <li>Refunds linked to original payments</li>
  <li>Payouts sent to vendors, sellers, users, or partners</li>
  <li>Charges, fees, taxes, and adjustments</li>
</ul>

<h2>Common Reconciliation Challenges</h2>

<p>Manual reconciliation can become difficult when records are spread across dashboards, bank statements, spreadsheets, and internal systems. Teams may spend hours matching transaction IDs, order IDs, settlement dates, and refund entries.</p>

<p>Missing references, delayed settlements, failed payouts, and refund mismatches can make the process even harder.</p>

<h2>How Pentacore Helps</h2>

<p>Pentacore helps finance teams manage reconciliation with clearer transaction records, settlement visibility, refund tracking, payout reports, and dashboard-based search.</p>

<ul>
  <li><strong>Transaction reports:</strong> Review payins, payouts, refunds, and settlement movement.</li>
  <li><strong>Status visibility:</strong> Track successful, failed, pending, refunded, and settled transactions.</li>
  <li><strong>Settlement tracking:</strong> Understand when collected money is settled.</li>
  <li><strong>Linked records:</strong> Keep refunds and payouts connected with transaction references.</li>
</ul>

<h2>Best Practices</h2>

<ul>
  <li>Use unique order IDs and transaction IDs.</li>
  <li>Download transaction and settlement reports regularly.</li>
  <li>Track refunds against original payments.</li>
  <li>Review failed and pending transactions daily.</li>
  <li>Maintain payout records with beneficiary references.</li>
</ul>

<h2>Final Thoughts</h2>

<p>Reconciliation gives finance teams confidence that every rupee is tracked correctly. With Pentacore, businesses can reduce manual effort and manage payment records, settlements, refunds, and payouts with better clarity.</p>
  `,
  },
];

export const recentPosts = blogPosts.slice(1, 5);

export function createBlogSlug(value: string) {
  return decodeURIComponent(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function normalizeBlogSlug(slug: string) {
  return decodeURIComponent(slug)
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .replace(/^blogs?\//, "")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");
}

export function getBlogPostBySlug(slug: string) {
  const normalizedSlug = createBlogSlug(normalizeBlogSlug(slug));

  return blogPosts.find(
    (post) =>
      createBlogSlug(post.slug) === normalizedSlug ||
      createBlogSlug(post.title) === normalizedSlug ||
      createBlogSlug(normalizeBlogSlug(post.href)) === normalizedSlug,
  );
}

export const blogSections = [
  {
    title: "Payments",
    posts: blogPosts.filter((post) => post.category === "Payments"),
  },
  {
    title: "Business",
    posts: blogPosts.filter((post) => post.category === "Business"),
  },
  {
    title: "Guides",
    posts: blogPosts.filter((post) => post.category === "Guides"),
  },
];
