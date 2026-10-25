import { education } from "../data/content";
import Section from "./Section";
import "./Timeline.css";

export default function Education() {
  return (
    <Section id="education" index="02" title="Education">
      <div className="timeline">
        {education.map((item) => (
          <div className="timeline-item" key={item.degree + item.period}>
            <span className="timeline-period">{item.period}</span>
            <h3 className="timeline-title">{item.degree}</h3>
            <p className="timeline-subtitle">
              {item.institution} · {item.location}
            </p>
            {item.details && <p className="timeline-details">{item.details}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
