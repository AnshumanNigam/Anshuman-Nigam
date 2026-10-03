import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="hero section-paper">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <p className="eyebrow hero-eyebrow">{profile.name} · Engineer</p>
        <h1>
          I build <span>intelligent systems</span> that move from idea to execution.
        </h1>
        <div className="hero-bottom">
          <p className="hero-copy">
            I work across AI, machine learning, data, and software, turning messy problems into systems that are clear, useful, and built to ship.
          </p>
          <div className="hero-links">
            <a className="button-primary" href="#work">Explore my work <span>↘</span></a>
            <a className="button-quiet" href="mailto:anshumannigam11@gmail.com">anshumannigam11@gmail.com</a>
          </div>
        </div>
        <a className="scroll-cue" href="#work" aria-label="Scroll to selected work">
          <span>Scroll to explore</span>
          <span className="scroll-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
