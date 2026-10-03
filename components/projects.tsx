import { projects, links, type Project } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function ProjectVisual({ visual }: { visual: Project["visual"] }) {
  if (visual === "forecast") {
    return (
      <div className="project-visual project-visual-forecast" aria-hidden="true">
        <svg viewBox="0 0 620 300" preserveAspectRatio="none">
          <path className="chart-grid" d="M0 65H620M0 145H620M0 225H620" />
          <path className="chart-band" d="M0 230C70 205 110 224 155 175C205 122 225 168 280 140C335 112 362 134 408 96C460 54 500 96 540 54C570 22 600 46 620 16L620 90C600 120 570 88 540 121C500 162 460 118 408 150C362 185 335 158 280 191C225 220 205 179 155 220C110 256 70 238 0 260Z" />
          <path className="chart-line" d="M0 242C70 218 110 238 155 198C205 151 225 186 280 159C335 130 362 155 408 120C460 83 500 114 540 82C570 55 600 70 620 40" />
        </svg>
        <span>forecast window</span>
      </div>
    );
  }

  if (visual === "tree") {
    return (
      <div className="project-visual project-visual-tree" aria-hidden="true">
        <svg viewBox="0 0 620 300">
          <path d="M310 46V94M310 94L175 154M310 94L445 154M175 154L104 218M175 154L238 218M445 154L382 218M445 154L516 218" className="tree-line" />
          {[['310','46','root'],['175','154','branch'],['445','154','branch'],['104','218','leaf'],['238','218','leaf'],['382','218','leaf'],['516','218','leaf']].map(([cx, cy, type]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={type === "leaf" ? "9" : "13"} className={type === "leaf" ? "tree-leaf" : "tree-node"} />
          ))}
        </svg>
        <span>recursive splitting</span>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual-network" aria-hidden="true">
      <svg viewBox="0 0 620 300">
        <g className="network-lines">
          <path d="M310 150L180 80M310 150L198 210M310 150L438 72M310 150L464 207M310 150L315 40M310 150L80 145M310 150L540 136" />
        </g>
        <g className="network-points">
          <circle cx="310" cy="150" r="16" className="network-center" />
          <circle cx="180" cy="80" r="8" /><circle cx="198" cy="210" r="7" /><circle cx="438" cy="72" r="7" /><circle cx="464" cy="207" r="8" /><circle cx="315" cy="40" r="7" /><circle cx="80" cy="145" r="6" /><circle cx="540" cy="136" r="6" />
        </g>
      </svg>
      <span>similarity graph</span>
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="section-night section-pad">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="01"
            title="Selected work"
            description="A few things I've built where algorithms had to survive contact with a real problem."
            invert
          />
        </Reveal>

        <div className="projects-list">
          {projects.map((project) => (
            <Reveal key={project.title} className="project-item">
              <article>
                <div className="project-copy">
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.result && <p className="project-result">{project.result}</p>}
                  <div className="project-footer">
                    <div className="stack-list">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                    <a href={project.href} target="_blank" rel="noreferrer">View project <span>↗</span></a>
                  </div>
                </div>
                <ProjectVisual visual={project.visual} />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="projects-footer">
          <a href={links.github} target="_blank" rel="noreferrer">Browse all repositories <span>↗</span></a>
        </Reveal>
      </div>
    </section>
  );
}
