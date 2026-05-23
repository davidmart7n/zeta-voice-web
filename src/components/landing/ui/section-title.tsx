export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10 max-w-3xl space-y-3">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="text-base text-zinc-300 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
