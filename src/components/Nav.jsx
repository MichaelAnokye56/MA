import { useState } from "react";
import { profile, honors, references } from "../data/content";
import "./Nav.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "honors", label: "Honors" },
  { id: "references", label: "References" },
  { id: "contact", label: "Contact" },
].filter((link) => {
  if (link.id === "honors") return honors.length > 0;
  if (link.id === "references") return references.length > 0;
  return true;
});

export default function Nav({ active }) {
  const [open, setOpen] = useState(false);

  const handleNavigate = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-mark" onClick={handleNavigate}>
          {profile.initials}
        </a>

        <nav className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "nav-link nav-link-active" : "nav-link"}
              onClick={handleNavigate}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
