import { references, honors } from "../data/content";
import Section from "./Section";
import "./References.css";

export default function References() {
  if (references.length === 0) return null;

  return (
    <Section id="references" index={honors.length > 0 ? "07" : "06"} title="References">
      <div className="references-grid">
        {references.map((ref) => (
          <div className="reference-card" key={ref.name}>
            <p className="reference-name">{ref.name}</p>
            <p className="reference-title">{ref.title}</p>
            <p className="reference-affiliation">{ref.affiliation}</p>
            <div className="reference-contact">
              <a href={`mailto:${ref.email}`}>{ref.email}</a>
              <a href={`tel:${ref.phone.replace(/\s+/g, "")}`}>{ref.phone}</a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
