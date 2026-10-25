import { useMemo } from "react";
import { profile } from "../data/content";
import "./Footer.css";

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {year} {profile.name}
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
