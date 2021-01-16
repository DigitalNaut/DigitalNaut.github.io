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
  const navDetachPoint = React.useRef<HTMLElement>(null);

  const sections: string[] = React.useMemo(
    () => ["Welcome", "About", "Projects", "Résumé", "Contact", "Footer"],
    []
  );
  const elRefs = React.useRef<React.RefObject<HTMLElement>[]>([]);

  elRefs.current = sections.map(
    (_, index) => (elRefs.current[index] = React.createRef<HTMLElement>())
  );

  const elRef = React.useCallback(
    (n: string) => elRefs.current[sections.indexOf(n)],
    [elRefs, sections]
  );

  return (
    <div className="bg-gray-900">
      <Welcome
        innerRef={elRef("Welcome")}
        scrollTarget={elRef("About")}
      />
      <span ref={navDetachPoint} />
      <Navbar detachPoint={navDetachPoint}>
        <NavButton
          name="Top of page" // Alt when used with icon prop
          icon={faAngleDoubleUp}
          scrollRef={elRef("Welcome")}
        />
        <NavButton name="About" scrollRef={elRef("About")} />
        <NavButton name="Projects" scrollRef={elRef("Projects")} />
        <NavButton name="Résumé" scrollRef={elRef("Résumé")} />
        <NavButton name="Contact" scrollRef={elRef("Contact")} />
        <NavButton
          name="Bottom of page"
          icon={faAngleDoubleDown}
          scrollRef={elRef("Footer")}
        />
      </Navbar>
      <About innerRef={elRef("About")} />
      <Projects innerRef={elRef("Projects")} />
      <Resume innerRef={elRef("Résumé")} />
      <Contact innerRef={elRef("Contact")} />
      <Footer scrollTarget={elRef("Welcome")} innerRef={elRef("Footer")} />
    </div>
  );
};

export default App;
