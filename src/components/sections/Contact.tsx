"use client";

import { FormEvent, useState } from "react";
import {
  RiCheckLine,
  RiMailLine,
  RiTimeLine,
} from "@remixicon/react";

import { Button, Card, Container } from "@/components/shared";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (response.ok) {
      setState("success");
      setMessage("Thank you. Our team will contact you shortly.");
      form.reset();
    } else {
      setState("error");
      setMessage("Something went wrong. Please try again after some time.");
    }
  }

  return (
    <section id="contact" className="pt-4 sm:pt-8">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <div className="py-4 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0B806A]">
              Start a conversation
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#123D34] sm:text-4xl">
              Tell us what your payment operation needs.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-[#5F756C]">
              Share your current payment flow, transaction volume, or
              integration requirements. Our team will help map the right
              Pentacore setup for your business.
            </p>

            <div className="mt-8 grid gap-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#BCD54D]/25 text-[#154036]">
                  <RiMailLine className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#123D34]">
                    Email our team
                  </p>
                  <a
                    href="mailto:info@pentacore.com"
                    className="mt-1 inline-block text-sm text-[#0B806A] hover:text-[#154036]"
                  >
                    info@pentacore.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#BCD54D]/25 text-[#154036]">
                  <RiTimeLine className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#123D34]">
                    What happens next
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#5F756C]">
                    We review your requirements and connect you with the right
                    product or integration specialist.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Product and pricing guidance",
                "API and webhook planning",
                "Onboarding requirement review",
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#36564B]"
                >
                  <RiCheckLine className="h-5 w-5 shrink-0 text-[#0B806A]" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <Card className="rounded-xl p-6 shadow-[0_24px_70px_rgba(2,44,34,0.1)] ring-1 ring-[#DDE8DF] sm:p-9">
            <h2 className="text-2xl font-semibold text-[#123D34]">
              Contact sales
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5F756C]">
              Complete the form and our team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <Field label="Your name">
                  <Input
                    name="name"
                    placeholder="Enter your name"
                    className="rounded-lg border-[#DDE8DF] focus:border-[#0B806A]"
                    required
                  />
                </Field>
                <Field label="Business email">
                  <Input
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    className="rounded-lg border-[#DDE8DF] focus:border-[#0B806A]"
                    required
                  />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone number">
                  <Input
                    name="phone"
                    placeholder="+91"
                    className="rounded-lg border-[#DDE8DF] focus:border-[#0B806A]"
                    required
                  />
                </Field>
                <Field label="Company name">
                  <Input
                    name="company"
                    placeholder="Your company"
                    className="rounded-lg border-[#DDE8DF] focus:border-[#0B806A]"
                    required
                  />
                </Field>
              </div>
              <Field label="Monthly transaction volume">
                <Input
                  name="volume"
                  placeholder="For example: ₹10–25 lakh"
                  className="rounded-lg border-[#DDE8DF] focus:border-[#0B806A]"
                />
              </Field>
              <Field label="Payment requirements">
                <Textarea
                  name="message"
                  placeholder="Tell us about products, payment methods, APIs, payouts, or platform workflows you need."
                  className="min-h-40 rounded-lg border-[#DDE8DF] focus:border-[#0B806A]"
                  required
                />
              </Field>
              <Button
                type="submit"
                size="lg"
                disabled={state === "loading"}
                className="mt-1 rounded-lg bg-[#154036] text-white hover:bg-[#154036]/80"
              >
                {state === "loading" ? "Sending..." : "Send message"}
              </Button>
              {message ? (
                <p
                  className={
                    state === "success"
                      ? "text-sm font-semibold text-[#0B806A]"
                      : "text-sm font-semibold text-red-600"
                  }
                >
                  {message}
                </p>
              ) : null}
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-[#123D34]">{label}</span>
      {children}
    </label>
  );
}
