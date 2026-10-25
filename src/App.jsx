import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Honors from "./components/Honors";
import References from "./components/References";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useActiveSection } from "./hooks/useActiveSection";
import { profile } from "./data/content";

const SECTION_IDS = [
  "about",
  "education",
  "experience",
  "research",
  "skills",
  "honors",
  "references",
  "contact",
];

function App() {
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    document.title = `${profile.name} — Portfolio`;
  }, []);

  return (
    <>
      <Nav active={active} />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Research />
      <Skills />
      <Honors />
      <References />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
