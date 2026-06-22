import { bridgeTexts } from "./landing-data";
import { BridgeText } from "./bridge-text";
import { EmailCtaSection } from "./sections/email-cta-section";
import { EnemyComparisonSection } from "./sections/enemy-comparison-section";
import { FaqSection } from "./sections/faq-section";
import { FounderSection } from "./sections/founder-section";
import { HeroSection } from "./sections/hero-section";
import { LandingFooter } from "./sections/landing-footer";
import { NotForSection } from "./sections/not-for-section";
import { PainSection } from "./sections/pain-section";
import { RealitySection } from "./sections/reality-section";
import { ResultsSection } from "./sections/results-section";

export function LandingPage() {
  return (
    <main className="relative overflow-x-clip overflow-y-hidden bg-[#07090d] text-zinc-100">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(70vh,720px)] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,211,238,0.12),transparent_55%)]"
        aria-hidden
      />

      <HeroSection />
      <BridgeText text={bridgeTexts.afterHero} />
      <RealitySection />
      <BridgeText text={bridgeTexts.afterReality} />
      <PainSection />
      <BridgeText text={bridgeTexts.afterPain} />
      <EnemyComparisonSection />
      <BridgeText text={bridgeTexts.afterEnemyComparison} />
      <ResultsSection />
      <BridgeText text={bridgeTexts.afterResults} />
      <FounderSection />
      <NotForSection />
      <FaqSection />
      <EmailCtaSection />
      <LandingFooter />
    </main>
  );
}