import { experience } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="section-canvas section-pad">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="02"
            title="Experience"
            description="Different domains, same habit: understand the system, then make it work better."
          />
        </Reveal>

        <div className="experience-list">
          {experience.map((job) => (
            <Reveal key={`${job.company}-${job.role}`} className="experience-row">
              <div className="experience-period">{job.period}</div>
              <div className="experience-main">
                <div>
                  <h3>{job.role}</h3>
                  <p className="experience-company">{job.company}</p>
                </div>
                <p>{job.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
