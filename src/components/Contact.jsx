import { profile, socials, honors } from "../data/content";
import Section from "./Section";
import "./Contact.css";

export default function Contact() {
  return (
    <Section id="contact" index={honors.length > 0 ? "07" : "06"} title="Contact">
      <p className="contact-lead">
        I'm always happy to talk about research collaborations, speaking opportunities, or
        just energy systems in general. The fastest way to reach me is email.
      </p>
      <a className="contact-email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="contact-socials">
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>
    </Section>
  );
}
