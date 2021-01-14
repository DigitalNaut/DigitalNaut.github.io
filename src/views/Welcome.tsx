import React, { RefObject } from "react";
import FancyButton from "../components/FancyButton";
import Section from "../components/Section";

interface WelcomeProps {
  innerRef: React.RefObject<HTMLElement>;
  scrollTarget: React.RefObject<HTMLElement>;
}

const Welcome: React.FC<WelcomeProps> = ({ innerRef, scrollTarget }) => {
  const scroll = (target: RefObject<HTMLElement> | null) =>
    target && target.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <span ref={innerRef} />
      <Section color="accent" centered>
        <div className="px-8 py-20 m-auto text-2xl bg-red-400 lg:px-72 md:px-24 sm:px-12 rounded-tr-2xl rounded-bl-2xl">
          <p className="mb-12 italic">
            Hello! I'm
            <br />
            <span className="text-5xl not-italic font-display">
              <span className="text-blue-900 text-shadow-md">John Bernal</span>,
            </span>
            <br />
            and this is <Highlight>my journey</Highlight> as a
          </p>
          <p className="mb-12 text-2xl sm:text-3xl">
            Jr.<Highlight>*</Highlight> Full-Stack Web Developer
          </p>
          <p className="text-sm italic">
            <Highlight>
              *We'll see about that! <span className="ml-1 not-italic">😜</span>
            </Highlight>
          </p>
          <FancyButton callback={() => scrollTarget && scroll(scrollTarget)}>
            Let me show you
          </FancyButton>
        </div>
      </Section>
    </>
  );
};

const Highlight: React.FC = ({ children }) => {
  return <span className="text-red-700">{children}</span>;
};

export default Welcome;
