"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "./landing-motion";

export function BridgeText({ text }: { text: string }) {
  const reveal = useScrollReveal();
  return (
    <motion.p
      className="mx-auto max-w-xl px-6 py-4 text-center text-sm italic text-zinc-500 md:text-base"
      {...reveal}
    >
      {text}
    </motion.p>
  );
}