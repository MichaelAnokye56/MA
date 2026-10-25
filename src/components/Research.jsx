import { publications } from "../data/content";
import Section from "./Section";
import "./Research.css";

const GROUP_LABELS = {
  journal: "Journal Articles",
  conference: "Conference Papers",
  preprint: "Preprints",
};

export default function Research() {
  const groups = publications.reduce((acc, pub) => {
    (acc[pub.type] ||= []).push(pub);
    return acc;
  }, {});

  return (
    <Section id="research" index="04" title="Research & Publications">
      {Object.entries(groups).map(([type, items]) => (
        <div className="pub-group" key={type}>
          <h3 className="pub-group-title">{GROUP_LABELS[type] ?? type}</h3>
          <ul className="pub-list">
            {items.map((pub) => (
              <li className="pub-item" key={pub.title}>
                <span className="pub-year">{pub.year}</span>
                <div className="pub-body">
                  <p className="pub-title">{pub.title}</p>
                  <p className="pub-authors">{pub.authors}</p>
                  <p className="pub-venue">{pub.venue}</p>
                  {pub.links?.length > 0 && (
                    <div className="pub-links">
                      {pub.links.map((link) => (
                        <a key={link.label} href={link.href} className="pub-link">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
