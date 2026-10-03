import { links, profile } from "@/lib/data";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="section-paper section-pad contact-section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">06 / Contact</p>
          <h2>Have a hard problem?<br /><span>Let&apos;s make it clearer.</span></h2>
        </Reveal>
        <div className="contact-bottom">
          <Reveal delay={0.06} className="contact-copy">
            <p>
              I&apos;m interested in AI and software work, research, ambitious products, and conversations that start with a genuinely interesting problem.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a>
          </Reveal>
          <Reveal delay={0.12} className="contact-links">
            <a href={links.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a href={links.kaggle} target="_blank" rel="noreferrer">Kaggle <span>↗</span></a>
            <a href={links.medium} target="_blank" rel="noreferrer">Medium <span>↗</span></a>
            <a href={links.cal} target="_blank" rel="noreferrer">Book a 15-minute call <span>↗</span></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
