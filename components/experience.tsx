"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "@/lib/data";
import { Reveal, ease } from "./motion";
import { SectionHeading } from "./section-heading";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading title="Experience." sub="Banking, healthcare and a few startups in between." />

      <ol ref={ref} className="relative mt-16 md:mt-24">
        {/* The timeline fills in as you scroll */}
        <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-hairline" />
        <motion.span
          aria-hidden
          style={{ scaleY: progress, transformOrigin: "top" }}
          className="absolute bottom-2 left-[5px] top-2 w-px bg-accent"
        />

        {experience.map((job) => (
          <li key={job.role + job.company} className="relative pb-14 pl-10 last:pb-0 md:pb-16">
            <motion.span
              aria-hidden
              initial={{ scale: 0.4, backgroundColor: "var(--canvas)" }}
              whileInView={{ scale: 1, backgroundColor: "var(--accent-fill)" }}
              viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
              transition={{ duration: 0.5, ease }}
              className="absolute left-0 top-[0.55rem] size-[11px] rounded-full border border-accent-fill"
            />
            <Reveal className="grid gap-2 md:grid-cols-[13rem_1fr] md:gap-10">
              <p className="pt-1 text-[15px] text-ink-3">
                {job.from} to {job.to}
              </p>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] md:text-3xl">{job.role}</h3>
                <p className="mt-1 text-lg text-accent">{job.company}</p>
                <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-ink-2">{job.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
