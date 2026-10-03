"use client";

import { useState } from "react";
import Script from "next/script";
import { profile, links } from "@/lib/data";
import { BookCall } from "./buttons";
import { Reveal } from "./motion";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "theme-fade w-full rounded-xl border border-hairline bg-canvas px-4 py-3 text-[17px] text-ink placeholder:text-ink-3 outline-none transition focus:border-accent-fill focus:ring-4 focus:ring-accent-fill/20";

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(links.formspree, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        const body = await res.json().catch(() => null);
        setError(body?.errors?.[0]?.message ?? "The message couldn't be sent. Please email me directly.");
        setStatus("error");
      }
    } catch {
      setError("There's a network problem. Please email me directly.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-2">Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={field} />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-2">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-2">Message</label>
        <textarea id="message" name="message" required rows={5} placeholder="What would you like to talk about?" className={`${field} resize-none`} />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-accent-fill px-7 py-3.5 text-[17px] font-medium text-white transition hover:brightness-110 active:scale-[0.99] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p role="status" aria-live="polite" className={`min-h-6 text-[15px] ${status === "error" ? "text-red-500" : "text-ink-2"}`}>
        {status === "sent" && "Message sent. I'll get back to you soon."}
        {status === "error" && error}
      </p>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <Reveal>
          <h2 className="text-5xl font-semibold tracking-[-0.035em] md:text-7xl">Let&rsquo;s talk.</h2>
          <p className="mt-6 max-w-md text-xl leading-relaxed text-ink-2 md:text-2xl">
            I&rsquo;m open to machine learning roles, research collaborations, freelance data science and good conversations about AI.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <BookCall />
            <a href={`mailto:${profile.email}`} className="text-[17px] text-accent hover:underline">
              {profile.email}
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-[17px] text-ink-2">
            {[
              ["GitHub", links.github],
              ["LinkedIn", links.linkedin],
              ["Kaggle", links.kaggle],
              ["Medium", links.medium],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="theme-fade rounded-[28px] bg-surface p-7 md:p-10">
          <ContactForm />
        </Reveal>
      </div>

      {/* Cal.com booking popup */}
      <Script id="cal-embed" strategy="lazyOnload">{`
        (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "15min", { origin: "https://cal.com" });
      `}</Script>
    </section>
  );
}
