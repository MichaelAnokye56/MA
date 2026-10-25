import { skills } from "../data/content";
import Section from "./Section";
import "./Skills.css";

export default function Skills() {
  return (
    <Section id="skills" index="05" title="Skills">
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skills-group" key={group.category}>
            <h3 className="skills-category">{group.category}</h3>
            <div className="skills-tags">
              {group.items.map((item) => (
                <span className="skill-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
