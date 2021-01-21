import React, { RefObject } from "react";
import FancyButton from "./FancyButton";

import LinkedInLogo from "../assets/images/LinkedInLogo.svg";
import GitHubLogo from "../assets/images/GitHubLogo.svg";
import { FancyLink, Paragraph } from "./Formatting";

interface FooterProps {
  scrollRef: React.RefObject<HTMLElement>;
  innerRef: React.RefObject<HTMLElement>;
}

const Footer: React.FC<FooterProps> = ({
  scrollRef: scrollTarget,
  innerRef,
}) => {
  const scroll = (target: RefObject<HTMLElement> | null) =>
    target && target.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="flex flex-col flex-grow h-full text-white bg-blue-700 place-items-center">
      <span ref={innerRef} />
      <div className="-mt-10">
        <FancyButton
          type="up"
          callback={() => scrollTarget && scroll(scrollTarget)}>
          Top
        </FancyButton>
      </div>
      <Paragraph centered untabbed>
        You can find me on:
      </Paragraph>
      <div className="flex flex-row justify-center">
        <FancyLink href="https://www.linkedin.com/in/johnbernalfsd/">
          <Logo src={LinkedInLogo} />
        </FancyLink>
        <FancyLink href="https://github.com/DigitalNaut">
          <Logo src={GitHubLogo} />
        </FancyLink>
      </div>
    </footer>
  );
};

interface LogoProps {
  src: string | undefined;
  alt?: string | undefined;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return <img src={src} className="w-16 h-16 m-3 mb-6 shadow-lg" alt={alt} />;
};

export default Footer;
