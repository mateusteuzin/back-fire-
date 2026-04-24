import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/backfire/Header";
import { Hero } from "@/components/backfire/Hero";
import { Portfolio } from "@/components/backfire/Portfolio";
import { Team } from "@/components/backfire/Team";
import { Services } from "@/components/backfire/Services";
import { Testimonials } from "@/components/backfire/Testimonials";
import { FAQ } from "@/components/backfire/FAQ";
import { CTA } from "@/components/backfire/CTA";
import { Footer } from "@/components/backfire/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Team />
        <Services />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
