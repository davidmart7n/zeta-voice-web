"use client";

import { useState } from "react";
import { DemoRequestModal } from "./demo-request-modal";
import { demoModal } from "./landing-data";
import { AppMockupSection } from "./sections/app-mockup-section";
import { BeforeAfterSection } from "./sections/before-after-section";
import { ComparisonSection } from "./sections/comparison-section";
import { FaqSection } from "./sections/faq-section";
import { FinalCtaSection } from "./sections/final-cta-section";
import { HeroSection } from "./sections/hero-section";
import { LandingFooter } from "./sections/landing-footer";
import { PainSection } from "./sections/pain-section";
import { RealitySection } from "./sections/reality-section";
import { ResultsSection } from "./sections/results-section";
import { TransparencySection } from "./sections/transparency-section";

export function LandingPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const openDemo = () => setDemoModalOpen(true);

  return (
    <main className="relative overflow-hidden bg-[#07090d] text-zinc-100">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(70vh,720px)] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,211,238,0.12),transparent_55%)]"
        aria-hidden
      />

      <HeroSection onOpenDemo={openDemo} />
      <RealitySection />
      <PainSection />
      <BeforeAfterSection />
      <AppMockupSection />
      <ResultsSection />
      <ComparisonSection />
      <TransparencySection />
      <FaqSection />
      <FinalCtaSection onOpenDemo={openDemo} />
      <LandingFooter />

      <DemoRequestModal
        open={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        title={demoModal.title}
        description={demoModal.description}
      />
    </main>
  );
}
