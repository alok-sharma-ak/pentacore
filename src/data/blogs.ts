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
    slug: "payment-gateway-for-indian-businesses",
    title: "How Pentacore Helps Indian Businesses Accept Payments Faster",
    excerpt:
      "A practical look at payment gateway flows, UPI collections, checkout, links, and transaction visibility for growing Indian teams.",
    category: "Payments",
    imageUrl: "/images/products/checkout.png",
    publishedAt: "June 2026",
    readTime: "5 min read",
    href: "/blogs/payment-gateway-for-indian-businesses",
    featured: true,
    content: `
<p>Indian customers expect payment to feel instant, familiar, and trustworthy. A growing business needs more than a payment button. It needs checkout, UPI, payment links, QR flows, status tracking, refunds, and settlement visibility working together.</p>

<p>Pentacore is built around that daily reality. It helps businesses collect money through modern payment flows while keeping support, operations, and finance teams aligned on every transaction.</p>

<h2>Why payment experience matters</h2>

<p>Payment friction can show up in small places: a slow checkout, an unclear payment status, a customer sharing screenshots, or a finance team waiting for settlement clarity. These moments affect conversion, trust, and operational time.</p>

<ul>
  <li><strong>Customers want choice:</strong> UPI, cards, wallets, net banking, QR, and links all serve different use cases.</li>
  <li><strong>Teams need status visibility:</strong> Every payment should show whether it is successful, failed, pending, refunded, or settled.</li>
  <li><strong>Finance needs clean records:</strong> Transaction references make reconciliation faster and less manual.</li>
  <li><strong>Support needs quick answers:</strong> Clear payment history helps teams resolve customer questions confidently.</li>
</ul>

<h2>Where Pentacore fits</h2>

<p>Pentacore brings payment collection, transaction tracking, refunds, settlements, and reporting into one connected platform. Businesses can use payment links for chat orders, checkout for websites and apps, QR payments for in-person flows, and APIs for custom product experiences.</p>

<h2>Common use cases</h2>

<ul>
  <li>Ecommerce checkout with UPI, cards, wallets, and net banking.</li>
  <li>Payment links for invoices, WhatsApp orders, deposits, and assisted sales.</li>
  <li>QR payments for retail counters, events, delivery, and field teams.</li>
  <li>API-led payments for SaaS, marketplaces, platforms, and internal systems.</li>
</ul>

<h2>Final thoughts</h2>

<p>A payment gateway should help your business move faster without creating operational confusion. Pentacore gives Indian teams the payment tools and visibility they need to collect, track, refund, settle, and reconcile with more confidence.</p>
    `,
  },
  {
    slug: "upi-payment-collections",
    title: "UPI Collections: Faster Payments for Modern Indian Teams",
    excerpt:
      "UPI is one of the most familiar payment methods in India. Here is how businesses can use it across checkout, QR, links, and mobile flows.",
    category: "Payments",
    imageUrl: "/images/products/payment-qr.png",
    publishedAt: "June 2026",
    readTime: "4 min read",
    href: "/blogs/upi-payment-collections",
    content: `
<p>UPI has changed how India pays. Customers use it every day for shopping, invoices, service payments, bookings, education fees, and in-person collections. For businesses, UPI is powerful because it is fast, familiar, and mobile-first.</p>

<p>But accepting UPI well is not only about showing a QR code. Teams also need payment status, customer references, refund tracking, and settlement visibility.</p>

<h2>Where UPI works best</h2>

<ul>
  <li><strong>Online checkout:</strong> Let customers complete orders through a familiar payment method.</li>
  <li><strong>Payment links:</strong> Share a secure UPI-ready link over WhatsApp, SMS, email, or invoices.</li>
  <li><strong>QR payments:</strong> Collect at counters, field locations, events, and delivery points.</li>
  <li><strong>Mobile operations:</strong> Give teams a way to check payment status while they are away from a desk.</li>
</ul>

<h2>The operational layer matters</h2>

<p>Without proper tracking, UPI collections can still become manual. Teams may ask customers for screenshots, check bank credits repeatedly, or struggle to connect a payment to the correct order.</p>

<p>Pentacore keeps UPI collections connected to transaction references, customer context, status updates, refunds, and settlement movement. This helps teams reduce manual checking and respond faster.</p>

<h2>Best practices</h2>

<ul>
  <li>Use clear order IDs or invoice references for every collection.</li>
  <li>Track payment status from a dashboard instead of screenshots.</li>
  <li>Connect webhooks for automatic system updates.</li>
  <li>Review refunds and settlements regularly for finance clarity.</li>
</ul>

<h2>Final thoughts</h2>

<p>UPI makes payment collection easier for customers. Pentacore makes it easier for businesses to manage those UPI payments professionally across teams, channels, and reports.</p>
    `,
  },
  {
    slug: "payment-links-for-chat-and-invoices",
    title: "Payment Links for WhatsApp Orders, Invoices, and Deposits",
    excerpt:
      "Payment links help teams collect money without building a full checkout, while keeping payment status visible in Pentacore.",
    category: "Payments",
    imageUrl: "/images/products/payment-link.png",
    publishedAt: "May 2026",
    readTime: "4 min read",
    href: "/blogs/payment-links-for-chat-and-invoices",
    content: `
<p>Many Indian businesses close sales outside a website. Orders happen over WhatsApp, phone calls, Instagram messages, invoices, and assisted sales conversations. Payment links make these collections simple.</p>

<p>With Pentacore Payment Links, teams can create a secure link, share it with a customer, and track whether the payment is pending, successful, failed, expired, or refunded.</p>

<h2>Why payment links are useful</h2>

<ul>
  <li><strong>No heavy integration:</strong> Collect payments without building a checkout first.</li>
  <li><strong>Easy sharing:</strong> Send links through WhatsApp, SMS, email, chat, or invoices.</li>
  <li><strong>Clear tracking:</strong> See link status and payment references from one dashboard.</li>
  <li><strong>Better follow-up:</strong> Sales and support teams know exactly which customers have paid.</li>
</ul>

<h2>Common Pentacore use cases</h2>

<ul>
  <li>Invoice payments for service businesses.</li>
  <li>Advance deposits for bookings and appointments.</li>
  <li>Custom order payments collected by sales teams.</li>
  <li>Recovery links for failed checkout payments.</li>
  <li>Course fees, consultation fees, and recurring dues.</li>
</ul>

<h2>How teams should use links</h2>

<p>Add customer details, amount, expiry rules, and an internal reference before sharing a link. This makes it easier to reconcile payments later and reduces confusion between sales, support, and finance.</p>

<h2>Final thoughts</h2>

<p>Payment links are simple for customers and practical for teams. Pentacore makes them stronger by adding status tracking, references, refunds, and reporting around every shared link.</p>
    `,
  },
  {
    slug: "real-time-transaction-monitoring",
    title: "Why Real-Time Transaction Monitoring Matters",
    excerpt:
      "Payment status visibility helps support, operations, and finance teams resolve questions faster and reduce manual checks.",
    category: "Business",
    imageUrl: "/images/products/wallet.png",
    publishedAt: "May 2026",
    readTime: "5 min read",
    href: "/blogs/real-time-transaction-monitoring",
    content: `
<p>Every payment creates a question: did it succeed, fail, stay pending, get refunded, or move to settlement? When that answer is not visible, teams lose time checking systems, asking finance, and replying to customers manually.</p>

<p>Real-time transaction monitoring gives teams a shared view of payment activity. Pentacore helps businesses see payment status, references, refunds, and settlement movement from one connected place.</p>

<h2>Who benefits from transaction visibility?</h2>

<ul>
  <li><strong>Support teams:</strong> Answer customer questions quickly with accurate status.</li>
  <li><strong>Operations teams:</strong> Track daily transaction health and payment flow issues.</li>
  <li><strong>Finance teams:</strong> Reconcile collections, refunds, payouts, and settlements more easily.</li>
  <li><strong>Business leaders:</strong> Understand payment performance and cash movement at a glance.</li>
</ul>

<h2>What teams should monitor</h2>

<ul>
  <li>Successful, failed, and pending payment attempts.</li>
  <li>Refund status and refund references.</li>
  <li>Settlement movement and expected settlement records.</li>
  <li>Webhook delivery for automated system updates.</li>
  <li>Payment method trends across UPI, cards, wallets, and links.</li>
</ul>

<h2>How Pentacore helps</h2>

<p>Pentacore keeps transaction data searchable and connected to payment products such as checkout, links, QR, APIs, wallet activity, and mobile views. This reduces screenshot-based follow-ups and gives every team a clearer way to work.</p>

<h2>Final thoughts</h2>

<p>Transaction monitoring is not just a dashboard feature. It is the operating layer that helps teams protect customer trust, reduce manual work, and keep finance records clean.</p>
    `,
  },
  {
    slug: "settlement-visibility-for-finance-teams",
    title: "Settlement Visibility for Finance Teams",
    excerpt:
      "Understand why settlement tracking matters for cash flow, refunds, payout planning, and payment reconciliation.",
    category: "Business",
    imageUrl: "/images/products/business-capital.png",
    publishedAt: "April 2026",
    readTime: "5 min read",
    href: "/blogs/settlement-visibility-for-finance-teams",
    content: `
<p>Collections are only one part of payment operations. Finance teams also need to know when money moves, what has settled, what is pending, and how refunds or payout activity affect the available balance.</p>

<p>Settlement visibility helps businesses plan cash flow and reconcile payment activity with more confidence.</p>

<h2>Why settlements matter</h2>

<ul>
  <li><strong>Cash flow planning:</strong> Teams can plan vendor payments, inventory, and operating expenses more clearly.</li>
  <li><strong>Refund control:</strong> Finance can understand available movement before processing refunds.</li>
  <li><strong>Reconciliation:</strong> Settlement records help match payment activity with business accounts.</li>
  <li><strong>Reporting:</strong> Leaders get a clearer view of collections and actual money movement.</li>
</ul>

<h2>What creates confusion?</h2>

<p>Settlement confusion often comes from disconnected records: payment status in one place, bank credits in another, refunds in a spreadsheet, and customer references in a support tool. This makes month-end review harder than it needs to be.</p>

<h2>How Pentacore helps</h2>

<p>Pentacore connects payment activity, wallet movement, refunds, settlement status, and transaction references. This gives finance teams a cleaner way to review payment operations without depending only on manual exports.</p>

<h2>Final thoughts</h2>

<p>Settlement visibility helps teams understand what was collected, what moved, what is pending, and what needs review. Pentacore keeps that context closer to the payment flow.</p>
    `,
  },
  {
    slug: "platform-payments-and-split-settlements",
    title: "Platform Payments and Split Settlement Workflows",
    excerpt:
      "Marketplaces, partner networks, and platforms need payment flows that support collections, routing, balances, and payouts.",
    category: "Business",
    imageUrl: "/images/products/platform-solutions.png",
    publishedAt: "April 2026",
    readTime: "6 min read",
    href: "/blogs/platform-payments-and-split-settlements",
    content: `
<p>Platforms often manage payments across more than one party. A customer may pay once, but the money needs to be tracked across sellers, partners, branches, service providers, or business units.</p>

<p>Standard checkout flows are not always enough for this model. Platforms need participant references, split visibility, payout tracking, and reporting that matches how the business actually operates.</p>

<h2>Common platform payment challenges</h2>

<ul>
  <li>Tracking which seller or partner belongs to each collection.</li>
  <li>Understanding split amounts and settlement movement.</li>
  <li>Sending payouts without losing transaction context.</li>
  <li>Reconciling customer collections with partner-level records.</li>
  <li>Keeping support and finance aligned on account-level status.</li>
</ul>

<h2>How Pentacore supports platforms</h2>

<p>Pentacore Platform Solutions help businesses design payment flows around their participant model. Teams can connect collections, routing logic, split visibility, payout movement, and account-level reporting.</p>

<h2>Useful platform models</h2>

<ul>
  <li>Marketplaces that collect from buyers and track seller-level activity.</li>
  <li>Service aggregators that route payments across partners.</li>
  <li>Franchise networks that need branch-level visibility.</li>
  <li>SaaS platforms embedding payments into customer workflows.</li>
</ul>

<h2>Final thoughts</h2>

<p>Platform payments need structure from the beginning. Pentacore helps teams build payment operations that can grow with sellers, partners, branches, and account-level reporting needs.</p>
    `,
  },
  {
    slug: "webhook-callbacks-for-payment-status",
    title: "Webhook Callbacks for Reliable Payment Status Updates",
    excerpt:
      "Webhooks help your systems react automatically when payment, refund, payout, or settlement status changes.",
    category: "Guides",
    imageUrl: "/images/products/payment-api.png",
    publishedAt: "March 2026",
    readTime: "5 min read",
    href: "/blogs/webhook-callbacks-for-payment-status",
    content: `
<p>Webhooks are automatic callbacks sent to your system when a payment event happens. They help your backend stay updated without repeatedly checking payment status manually.</p>

<p>For a payment operation, webhooks can update order status, trigger customer access, notify finance tools, and keep internal dashboards in sync.</p>

<h2>Common webhook events</h2>

<ul>
  <li>Payment successful, failed, or pending.</li>
  <li>Refund initiated, processing, successful, or failed.</li>
  <li>Payout initiated, successful, or failed.</li>
  <li>Settlement movement and payment status changes.</li>
</ul>

<h2>Why webhooks matter</h2>

<p>Without webhooks, teams may rely on manual refreshes or delayed reports. With webhooks, your system can automatically update orders, bookings, subscriptions, wallet records, support views, and finance dashboards.</p>

<h2>Best practices</h2>

<ul>
  <li>Use HTTPS webhook URLs.</li>
  <li>Verify webhook signatures before trusting the payload.</li>
  <li>Make webhook processing idempotent so duplicate callbacks do not create duplicate actions.</li>
  <li>Store payloads and response logs for debugging.</li>
  <li>Respond quickly and move heavy processing into queues where needed.</li>
</ul>

<h2>How Pentacore helps</h2>

<p>Pentacore APIs and webhook callbacks help teams connect payment events to their own products and operations. This creates faster automation and reduces manual status checking.</p>

<h2>Final thoughts</h2>

<p>Webhooks are a core part of reliable payment infrastructure. Pentacore helps teams use them to keep customer, order, refund, and finance systems aligned.</p>
    `,
  },
  {
    slug: "secure-payment-integration-checklist",
    title: "Secure Payment Integration Checklist for Developers",
    excerpt:
      "A practical checklist for API keys, webhook verification, HTTPS, status handling, logs, and access control.",
    category: "Guides",
    imageUrl: "/images/api-infrastructure.png",
    publishedAt: "March 2026",
    readTime: "6 min read",
    href: "/blogs/secure-payment-integration-checklist",
    content: `
<p>A payment integration affects customer experience, business records, refunds, and money movement. That means security and reliability should be part of the integration from day one.</p>

<p>This checklist covers practical controls teams should keep in mind when connecting Pentacore payment APIs and webhooks.</p>

<h2>Integration checklist</h2>

<ul>
  <li><strong>Keep API keys server-side:</strong> Never expose secret keys in frontend code or public repositories.</li>
  <li><strong>Use HTTPS:</strong> Payment pages, API calls, and webhook URLs should use secure connections.</li>
  <li><strong>Verify webhooks:</strong> Validate signatures or trusted headers before updating internal records.</li>
  <li><strong>Handle retries safely:</strong> Make payment and webhook handlers idempotent.</li>
  <li><strong>Store references:</strong> Keep order IDs, payment IDs, refund IDs, and customer references clean.</li>
  <li><strong>Log important events:</strong> Store request and response context for support, debugging, and audit review.</li>
  <li><strong>Control dashboard access:</strong> Give team members access based on their role and responsibility.</li>
</ul>

<h2>Status handling</h2>

<p>Your product should handle successful, failed, pending, expired, refunded, and settled states clearly. Customers and internal teams should not need to guess what happened after a payment attempt.</p>

<h2>Testing before go-live</h2>

<p>Before launch, run test payments, webhook callbacks, refund scenarios, failed payment cases, and reconciliation exports. This helps prevent support pressure later.</p>

<h2>Final thoughts</h2>

<p>A secure integration is not only about protecting keys. It is about building reliable payment behavior across customer experience, backend automation, support workflows, and finance records.</p>
    `,
  },
  {
    slug: "payment-reconciliation-guide",
    title: "Payment Reconciliation Guide for Finance Teams",
    excerpt:
      "Learn how transaction references, settlement data, refunds, and payout records help finance teams close books faster.",
    category: "Guides",
    imageUrl: "/images/products/wallet.png",
    publishedAt: "February 2026",
    readTime: "6 min read",
    href: "/blogs/payment-reconciliation-guide",
    content: `
<p>Payment reconciliation is the process of matching collected payments, refunds, settlements, payout activity, and internal order records. It helps finance teams confirm that every rupee is accounted for correctly.</p>

<p>As transaction volume grows, manual reconciliation becomes harder. Teams need clean references, searchable records, and consistent reports.</p>

<h2>What finance teams should reconcile</h2>

<ul>
  <li>Successful, failed, and pending payment attempts.</li>
  <li>Refunds linked to original transactions.</li>
  <li>Settlement amounts and settlement dates.</li>
  <li>Payout movement to vendors, partners, sellers, or accounts.</li>
  <li>Fees, adjustments, taxes, and internal order references.</li>
</ul>

<h2>Common reconciliation issues</h2>

<p>Reconciliation gets difficult when order IDs are missing, payment screenshots are treated as proof, refunds are tracked separately, or settlement data is reviewed outside the transaction system.</p>

<h2>How Pentacore helps</h2>

<p>Pentacore keeps payment status, wallet movement, refund activity, payout records, and settlement visibility connected. This gives finance teams a stronger starting point for daily and monthly review.</p>

<h2>Best practices</h2>

<ul>
  <li>Use unique order and transaction IDs.</li>
  <li>Review failed and pending transactions daily.</li>
  <li>Keep refunds connected to original payment records.</li>
  <li>Download and review settlement reports regularly.</li>
  <li>Use consistent references across internal systems.</li>
</ul>

<h2>Final thoughts</h2>

<p>Good reconciliation reduces confusion across finance, support, and operations. Pentacore gives teams cleaner transaction visibility so review work becomes easier and more reliable.</p>
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
