import { toolkit } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Toolkit() {
  return (
    <section id="toolkit" className="section-canvas section-pad section-divider-top">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="04"
            title="Toolkit"
            description="A practical set of tools I reach for when an idea needs to become software."
          />
        </Reveal>
        <div className="toolkit-grid">
          {toolkit.map((group, i) => (
            <Reveal key={group.name} delay={i * 0.05} className="toolkit-group">
              <span className="toolkit-index">0{i + 1}</span>
              <h3>{group.name}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
