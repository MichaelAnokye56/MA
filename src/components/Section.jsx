import "./Section.css";

export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section-head">
          <span className="mono-label">{index}</span>
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="section-rule" />
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
