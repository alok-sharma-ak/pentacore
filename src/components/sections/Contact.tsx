"use client";

import { FormEvent, useState } from "react";

import { Button, Card, Container, Para } from "@/components/shared";
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
    <section id="contact" className="pt-20">
      <Container>
        <div className="grid gap-10">
          <Card className="p-5 sm:p-8">
            <h2 className="text-3xl font-bold text-ink mb-4 text-center">
              Get in Touch
            </h2>
            <Para className="text-sm mb-8 text-center">info@pentacore.com</Para>
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Input name="name" placeholder="Your name" required />
                <Input
                  name="email"
                  type="email"
                  placeholder="Business email"
                  required
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Input name="phone" placeholder="Phone number" required />
                <Input name="company" placeholder="Company name" required />
              </div>
              <Input name="volume" placeholder="Monthly transaction volume" />
              <Textarea
                name="message"
                placeholder="Tell us about your payment requirements"
                className="h-60"
                required
              />
              <Button type="submit" size="lg" disabled={state === "loading"}>
                {state === "loading" ? "Sending..." : "Send message"}
              </Button>
              {message ? (
                <p
                  className={
                    state === "success"
                      ? "text-sm font-semibold text-mint-600"
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
