import Link from "next/link";
import { sectionClass } from "./constants";

export function LandingFooter() {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#07090d]/80">
      <div className={`${sectionClass} py-10`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">Zeta Voice · Zeta Makers</p>
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-300"
          >
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
