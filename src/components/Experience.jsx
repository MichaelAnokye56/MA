import { experience } from "../data/content";
import Section from "./Section";
import "./Timeline.css";

export default function Experience() {
  return (
    <Section id="experience" index="03" title="Experience">
      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item" key={item.role + item.period}>
            <span className="timeline-period">{item.period}</span>
            <h3 className="timeline-title">{item.role}</h3>
            <p className="timeline-subtitle">{item.organization}</p>
            {item.points && (
              <ul className="timeline-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
