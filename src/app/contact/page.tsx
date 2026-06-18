import { Contact } from "@/components/sections";
import { Container, SectionHeading } from "@/components/shared";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28">
      <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-mint-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-navy-900/10 blur-3xl" />

      <Container>
        <SectionHeading
          label="About Pentacore"
          title="We help India’s fastest-growing businesses collect and move money online."
          description="Pentacore is a modern payment gateway built for businesses that need fast payins, reliable payouts, secure payment flows, and clean transaction visibility from one powerful platform."
        />
      </Container>

      <Contact />
    </main>
  );
}
