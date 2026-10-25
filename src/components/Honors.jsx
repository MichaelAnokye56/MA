import { honors } from "../data/content";
import Section from "./Section";
import "./Honors.css";

export default function Honors() {
  if (honors.length === 0) return null;

  return (
    <Section id="honors" index="06" title="Honors & Awards">
      <ul className="honors-list">
        {honors.map((item) => (
          <li className="honors-item" key={item.title}>
            <span className="honors-year">{item.year}</span>
            <div>
              <p className="honors-title">{item.title}</p>
              <p className="honors-issuer">{item.issuer}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
