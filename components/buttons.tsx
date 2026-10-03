import { links } from "@/lib/data";

/** Opens the Cal.com booking popup (falls back to a normal link if the embed hasn't loaded). */
export function BookCall({
  children = "Book a 15-minute call",
  size = "md",
}: {
  children?: React.ReactNode;
  size?: "sm" | "md";
}) {
  const sizing = size === "sm" ? "px-4 py-1.5 text-[13px]" : "px-7 py-3.5 text-[17px]";
  return (
    <a
      href={links.cal}
      target="_blank"
      rel="noreferrer"
      data-cal-link="anshuman-nigam/15min"
      data-cal-namespace="15min"
      data-cal-config='{"layout":"month_view","theme":"auto"}'
      className={`inline-flex items-center justify-center rounded-full bg-accent-fill font-medium text-white transition hover:brightness-110 active:scale-[0.97] ${sizing}`}
    >
      {children}
    </a>
  );
}

/** Apple-style quiet text link with a chevron. */
export function TextLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group inline-flex items-center gap-1 text-[17px] text-accent hover:underline"
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
        ›
      </span>
    </a>
  );
}
