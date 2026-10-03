"use client";

import { motion } from "framer-motion";
import { toolkit } from "@/lib/data";
import { ease } from "./motion";
import { SectionHeading } from "./section-heading";

export function Toolkit() {
  return (
    <section id="toolkit" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading title="Toolkit." sub="What I reach for when a problem turns into data." />
      <dl className="mt-16 grid gap-x-12 gap-y-12 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
        {toolkit.map((g, i) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease }}
            className="border-t border-hairline pt-6"
          >
            <dt className="text-xl font-semibold tracking-[-0.015em]">{g.group}</dt>
            <dd className="mt-3 text-[17px] leading-relaxed text-ink-2">{g.items.join(", ")}</dd>
          </motion.div>
        ))}
      </dl>
    </section>
  );
}
