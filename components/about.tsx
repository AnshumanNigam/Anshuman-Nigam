import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="section-paper section-pad">
      <div className="container about-grid">
        <Reveal>
          <p className="eyebrow">03 / About</p>
          <h2>Engineering with one foot in systems and the other in science.</h2>
        </Reveal>
        <Reveal delay={0.08} className="about-copy">
          <p>
            I study Mechanical Engineering and Biological Sciences at BITS Pilani, and spend most of my time building software around data, machine learning, and intelligent workflows.
          </p>
          <p>
            That mix has made me comfortable moving between disciplines. I like the part where a vague problem becomes a model, a pipeline, an interface, or a product someone can actually use.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
