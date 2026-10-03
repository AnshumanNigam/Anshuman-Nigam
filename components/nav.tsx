import { profile, links } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

const items = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

export function Nav() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="#top" className="brand" aria-label={`${profile.name}, home`}>
          <span className="brand-mark">AN</span>
          <span className="brand-text">{profile.tagline}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {items.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <a className="nav-contact" href={`mailto:${profile.email}`}>Email me</a>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><span /><span /></summary>
          <div className="mobile-panel">
            {items.map(([label, href]) => (
              <a href={href} key={href}>{label}</a>
            ))}
            <a href={`mailto:${profile.email}`}>Email me</a>
            <a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </details>
      </div>
    </header>
  );
}
