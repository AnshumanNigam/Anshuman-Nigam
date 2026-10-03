"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookCall, TextLink } from "./buttons";
import { ease } from "./motion";

const headline = ["Machine", "learning", "for", "banking", "and", "healthcare."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section id="top" ref={ref} className="relative isolate overflow-hidden">
      {/* Ambient light */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="orb orb-a left-[8%] top-[12%] size-[38rem] max-w-[90vw]" />
        <div className="orb orb-b bottom-[0%] right-[6%] size-[34rem] max-w-[85vw]" />
      </div>

      <motion.div
        style={{ opacity, y, scale }}
        className="mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 pb-24 pt-32 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="text-xl font-medium text-ink-2 md:text-2xl"
        >
          Anshuman Nigam
        </motion.p>

        <h1 className="mt-5 text-[clamp(2.75rem,8.2vw,6.75rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
          {headline.map((word, i) => (
            <span key={i} className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.35 + i * 0.09, ease }}
              >
                {word}
                {i < headline.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease }}
          className="mt-8 max-w-xl text-xl leading-relaxed text-ink-2 md:text-2xl"
        >
          I&rsquo;m a data engineer at Standard Chartered, building the pipelines and models that turn raw data into decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease }}
          className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8"
        >
          <BookCall />
          <TextLink href="#work">See selected work</TextLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
