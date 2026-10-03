import { Reveal } from "./motion";

export function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <Reveal className="max-w-3xl">
      <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-6xl">{title}</h2>
      {sub && <p className="mt-5 text-xl leading-relaxed text-ink-2 md:text-2xl">{sub}</p>}
    </Reveal>
  );
}
