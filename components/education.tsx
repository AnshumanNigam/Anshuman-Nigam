import { certifications, education, recognition } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section className="section-night section-pad">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="05"
            title="Education & research"
            description="A dual degree that keeps engineering and biological science in the same room."
            invert
          />
        </Reveal>
        <div className="education-hero">
          <Reveal>
            <p className="education-kicker">BITS Pilani · Goa Campus</p>
            <h3>{education.degree}</h3>
            <p>{education.years}</p>
          </Reveal>
        </div>
        <div className="education-columns">
          <Reveal>
            <h4>Recognition & publications</h4>
            <div className="plain-list">
              {recognition.map((item) => (
                <div key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h4>Certifications</h4>
            <div className="plain-list">
              {certifications.map((item) => (
                <div key={item}>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
