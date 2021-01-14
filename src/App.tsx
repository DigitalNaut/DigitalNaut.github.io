import React from "react";

import {
  faAngleDoubleUp,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";

import Navbar, { NavButton } from "./components/Navigation";
import Footer from "./components/Footer";

import About from "./views/About";
import Contact from "./views/Contact";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import Welcome from "./views/Welcome";

const App: React.FC = () => {
  const navBreak = React.useRef<HTMLElement>(null);
  const welcomeScrollTarget = React.useRef<HTMLElement>(null);
  const aboutScrollTarget = React.useRef<HTMLElement>(null);
  const projectsScrollTarget = React.useRef<HTMLElement>(null);
  const resumeScrollTarget = React.useRef<HTMLElement>(null);
  const contactScrollTarget = React.useRef<HTMLElement>(null);
  const footerScrollTarget = React.useRef<HTMLElement>(null);

  return (
    <div className="bg-gray-900">
      <Welcome
        innerRef={welcomeScrollTarget}
        scrollTarget={aboutScrollTarget}
      />
      <span ref={navBreak} />
      <Navbar scrollTarget={navBreak}>
        <NavButton
          name="Top"
          icon={faAngleDoubleUp}
          scrollTarget={welcomeScrollTarget}
        />
        <NavButton name="About" scrollTarget={aboutScrollTarget} />
        <NavButton name="Projects" scrollTarget={projectsScrollTarget} />
        <NavButton name="Résumé" scrollTarget={resumeScrollTarget} />
        <NavButton name="Contact" scrollTarget={contactScrollTarget} />
        <NavButton
          name="Footer"
          icon={faAngleDoubleDown}
          scrollTarget={footerScrollTarget}
        />
      </Navbar>
      <About innerRef={aboutScrollTarget} />
      <Projects innerRef={projectsScrollTarget} />
      <Resume innerRef={resumeScrollTarget} />
      <Contact innerRef={contactScrollTarget} />
      <Footer
        scrollTarget={welcomeScrollTarget}
        innerRef={footerScrollTarget}
      />
    </div>
  );
};

export default App;
