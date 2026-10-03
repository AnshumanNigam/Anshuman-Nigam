"use client";

import { motion } from "framer-motion";
import { ease } from "./motion";

const inView = { once: true, margin: "-60px" } as const;
const f = (n: number) => n.toFixed(1);

/* ── ForecastRx: history, forecast and a widening confidence band ── */
export function ForecastChart() {
  const N = 48;
  const SPLIT = 30;
  const pts = Array.from({ length: N }, (_, i) => ({
    i,
    x: (i * 400) / (N - 1),
    y: 150 - i * 1.2 + 14 * Math.sin(i * 0.5) + 7 * Math.sin(i * 1.3),
  }));
  const hist = pts.slice(0, SPLIT + 1);
  const fore = pts.slice(SPLIT);
  const line = (a: { x: number; y: number }[]) =>
    a.map((p, k) => `${k === 0 ? "M" : "L"}${f(p.x)} ${f(p.y)}`).join(" ");
  const width = (i: number) => (i - SPLIT) * 1.25 + 3;
  const upper = fore.map((p) => ({ x: p.x, y: p.y - width(p.i) }));
  const lower = fore.map((p) => ({ x: p.x, y: p.y + width(p.i) })).reverse();
  const band = `${line(upper)} ${lower.map((p) => `L${f(p.x)} ${f(p.y)}`).join(" ")} Z`;
  const splitX = pts[SPLIT].x;

  return (
    <svg viewBox="0 0 400 200" className="h-auto w-full" role="img" aria-label="Chart of historical demand followed by a forecast with a confidence band">
      {[50, 100, 150].map((y) => (
        <line key={y} x1="0" x2="400" y1={y} y2={y} className="stroke-hairline" strokeWidth="1" />
      ))}
      <motion.path
        d={band}
        className="fill-accent/15"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={inView}
        transition={{ duration: 1, delay: 1.4, ease }}
      />
      <motion.path
        d={line(hist)}
        fill="none"
        className="stroke-ink-2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={inView}
        transition={{ duration: 1.6, ease }}
      />
      <line x1={splitX} x2={splitX} y1="14" y2="186" className="stroke-hairline" strokeDasharray="3 4" />
      <motion.path
        d={line(fore)}
        fill="none"
        className="stroke-accent"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={inView}
        transition={{ duration: 1.2, delay: 1.5, ease }}
      />
      <text x={splitX - 8} y="196" textAnchor="end" className="fill-ink-3" fontSize="10">
        Actual
      </text>
      <text x={splitX + 8} y="196" className="fill-ink-3" fontSize="10">
        Forecast
      </text>
    </svg>
  );
}

/* ── Decision tree: a root split into branches and leaves ── */
const treeNodes = [
  { id: "r", x: 150, y: 26, leaf: false },
  { id: "a", x: 80, y: 88, leaf: false },
  { id: "b", x: 220, y: 88, leaf: false },
  { id: "c", x: 40, y: 152, leaf: true },
  { id: "d", x: 120, y: 152, leaf: true },
  { id: "e", x: 180, y: 152, leaf: true },
  { id: "g", x: 260, y: 152, leaf: true },
];
const treeEdges: [string, string][] = [
  ["r", "a"], ["r", "b"], ["a", "c"], ["a", "d"], ["b", "e"], ["b", "g"],
];

export function TreeVisual() {
  const at = (id: string) => treeNodes.find((n) => n.id === id)!;
  return (
    <svg viewBox="0 0 300 180" className="h-auto w-full" role="img" aria-label="A decision tree splitting into branches and leaves">
      {treeEdges.map(([from, to], k) => {
        const a = at(from);
        const b = at(to);
        return (
          <motion.path
            key={from + to}
            d={`M${a.x} ${a.y} C ${a.x} ${(a.y + b.y) / 2}, ${b.x} ${(a.y + b.y) / 2}, ${b.x} ${b.y}`}
            fill="none"
            className="stroke-ink-3"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={inView}
            transition={{ duration: 0.8, delay: 0.2 + k * 0.12, ease }}
          />
        );
      })}
      {treeNodes.map((n, k) => (
        <motion.circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={n.leaf ? 8 : 10}
          className={n.leaf ? "fill-accent" : "fill-canvas stroke-ink-2"}
          strokeWidth="1.5"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={inView}
          transition={{ duration: 0.6, delay: 0.1 + k * 0.1, ease }}
        />
      ))}
    </svg>
  );
}

/* ── Watch-Next: a film and its nearest neighbours in feature space ── */
const field = [
  [24, 30], [60, 18], [96, 44], [40, 78], [18, 120], [70, 138], [112, 112],
  [200, 24], [248, 40], [270, 82], [236, 118], [276, 142], [196, 150], [60, 96],
  [214, 76], [128, 26], [96, 160], [250, 160], [180, 110], [30, 156],
];
const centre = [150, 90];
const neighbours = [[128, 62], [176, 60], [182, 104], [138, 124], [112, 86]];

export function NeighboursVisual() {
  return (
    <svg viewBox="0 0 300 180" className="h-auto w-full" role="img" aria-label="A film connected to its five most similar films">
      {field.map(([x, y], k) => (
        <motion.circle
          key={k}
          cx={x}
          cy={y}
          r="3"
          className="fill-ink-3/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inView}
          transition={{ duration: 0.8, delay: k * 0.03 }}
        />
      ))}
      {neighbours.map(([x, y], k) => (
        <motion.line
          key={k}
          x1={centre[0]}
          y1={centre[1]}
          x2={x}
          y2={y}
          className="stroke-accent"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={inView}
          transition={{ duration: 0.7, delay: 0.5 + k * 0.12, ease }}
        />
      ))}
      {neighbours.map(([x, y], k) => (
        <motion.circle
          key={k}
          cx={x}
          cy={y}
          r="5"
          className="fill-accent"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={inView}
          transition={{ duration: 0.5, delay: 0.9 + k * 0.12, ease }}
        />
      ))}
      <motion.circle
        cx={centre[0]}
        cy={centre[1]}
        r="9"
        className="fill-canvas stroke-ink"
        strokeWidth="2"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={inView}
        transition={{ duration: 0.6, delay: 0.3, ease }}
      />
    </svg>
  );
}
