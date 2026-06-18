import Image from "next/image";
import { Container, Title } from "@/components/shared";

const integrations = [
  {
    name: "Yes Bank",
    imageUrl: "/yes-bank.png",
  },
  {
    name: "Razorpay",
    imageUrl: "/razorpay.png",
  },
  {
    name: "Cashfree",
    imageUrl: "/cashfree-payments.png",
  },
  {
    name: "PayU",
    imageUrl: "/payu.png",
  },
  {
    name: "Shopify",
    imageUrl: "/shopify.png",
  },
  {
    name: "WooCommerce",
    imageUrl: "/woo.png",
  },
  {
    name: "Tally",
    imageUrl: "/tally.png",
  },
];

export function Integrations() {
  return (
    <Container className="pb-20">
      <Title className="text-center">
        Integrates with the tools you already use
      </Title>

      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {integrations.map((item) => (
          <div
            key={item.name}
            className="flex h-28 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 transition hover:shadow-soft"
          >
            <div className="relative h-14 w-28">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="mt-4 text-center text-sm font-bold text-ink">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </Container>
  );
}
