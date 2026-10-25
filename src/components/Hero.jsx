import { profile, socials } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="mono-label">{profile.affiliation}</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={profile.cvUrl}>
              Download CV
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="hero-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-photo-frame">
          {profile.photoUrl ? (
            <img src={profile.photoUrl} alt={profile.name} />
          ) : (
            <span>{profile.initials}</span>
          )}
        </div>
      </div>
    </section>
  );
}
