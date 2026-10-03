import { education, recognition, certifications } from "@/lib/data";
import { Reveal } from "./motion";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading
        title="Education and research."
        sub="A dual degree that keeps one foot in biology and the other in engineering."
      />

      <Reveal className="theme-fade mt-14 rounded-[28px] bg-surface p-8 md:mt-20 md:p-12">
        <h3 className="max-w-3xl text-2xl font-semibold tracking-[-0.025em] md:text-4xl">{education.degree}</h3>
        <p className="mt-4 text-lg text-accent">{education.school}</p>
        <p className="mt-1 text-[17px] text-ink-3">{education.years}</p>
      </Reveal>

      <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h3 className="text-xl font-semibold tracking-[-0.015em]">Recognition and publications</h3>
          <ul className="mt-5">
            {recognition.map((r) => (
              <li key={r.title} className="border-t border-hairline py-5">
                <p className="text-[17px] font-medium leading-snug">{r.title}</p>
                <p className="mt-1 text-[15px] text-ink-3">
                  {r.detail}, {r.date}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="text-xl font-semibold tracking-[-0.015em]">Certifications</h3>
          <ul className="mt-5">
            {certifications.map((c) => (
              <li key={c.title} className="border-t border-hairline py-5">
                <p className="text-[17px] font-medium leading-snug">{c.title}</p>
                <p className="mt-1 text-[15px] text-ink-3">{c.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
