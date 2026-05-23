"use client";

import { motion } from "framer-motion";
import { appMockupScreenshotSrc, appMockupSection } from "../landing-data";
import { useScrollReveal } from "../landing-motion";
import { PhoneMockup } from "../ui/phone-mockup";
import { SectionTitle } from "../ui/section-title";
import { sectionClass } from "./constants";

export function AppMockupSection() {
  const scrollReveal = useScrollReveal();

  return (
    <motion.section className={sectionClass} {...scrollReveal}>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow={appMockupSection.eyebrow}
            title={appMockupSection.title}
            subtitle={appMockupSection.subtitle}
          />
        </div>
        <PhoneMockup screenshotSrc={appMockupScreenshotSrc} />
      </div>
    </motion.section>
  );
}
