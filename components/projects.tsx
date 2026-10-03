"use client";

import { motion } from "framer-motion";
import { projects, links, type Project } from "@/lib/data";
import { CountUp, ease } from "./motion";
import { SectionHeading } from "./section-heading";
import { TextLink } from "./buttons";
import { ForecastChart, NeighboursVisual, TreeVisual } from "./visuals";

function Visual({ id }: { id: Project["id"] }) {
  return (
    <div className="theme-fade rounded-2xl bg-canvas p-5 md:p-7">
      {id === "forecastrx" && <ForecastChart />}
      {id === "decision-tree" && <TreeVisual />}
      {id === "watch-next" && <NeighboursVisual />}
    </div>
  );
}

function Tile({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease }}
      className={`theme-fade overflow-hidden rounded-[28px] bg-surface p-7 md:p-12 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={featured ? "grid items-center gap-10 md:grid-cols-2 md:gap-14" : "flex h-full flex-col"}>
        <div className="flex flex-col">
          <h3 className="text-3xl font-semibold tracking-[-0.025em] md:text-4xl">{project.title}</h3>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-ink-2">{project.description}</p>
          <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <dd className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                  <CountUp to={m.value} prefix={m.prefix} suffix={m.suffix} />
                </dd>
                <dt className="mt-1 text-sm text-ink-3">{m.label}</dt>
              </div>
            ))}
          </dl>
          <div className="mt-9">
            <TextLink href={project.href} external>
              View on GitHub
            </TextLink>
          </div>
        </div>
        <div className={featured ? "" : "mt-auto pt-10"}>
          <Visual id={project.id} />
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading
        title="Selected work."
        sub="Projects built end to end, from the model to the interface. All of the code is open source."
      />
      <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2">
        {projects.map((p, i) => (
          <Tile key={p.id} project={p} featured={i === 0} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <TextLink href={links.github} external>
          Browse every repository on GitHub
        </TextLink>
      </div>
    </section>
  );
}
