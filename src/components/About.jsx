import { profile } from "../data/content";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <p style={{ whiteSpace: "pre-line", maxWidth: 640 }}>{profile.bio}</p>
    </Section>
  );
}
