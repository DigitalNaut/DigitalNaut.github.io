import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { RefObject } from "react";
import { SectionConstraint } from "./Section";

interface NavProps {
  scrollTarget: React.RefObject<HTMLElement>;
}

const Navbar: React.FC<NavProps> = ({ children, scrollTarget }) => {
  const [sticky, setSticky] = React.useState(true);
  const handleScroll = () => {
    if (scrollTarget.current) {
      setSticky(window.pageYOffset > scrollTarget.current.offsetTop);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-red-700 h-9 md:h-12 lg:h-14 ${
        sticky ? "top-0 w-full z-50 shadow-xl sticky" : "shadow-none"
      }`}>
      <SectionConstraint>
        <div className="flex place-items-center justify-evenly">{children}</div>
      </SectionConstraint>
    </nav>
  );
};

interface ButtonProps {
  name: string;
  scrollTarget: React.RefObject<HTMLElement>;
  icon?: IconDefinition;
}

export const NavButton: React.FC<ButtonProps> = ({
  name,
  scrollTarget,
  icon,
}) => {
  const scroll = (target: RefObject<HTMLElement> | null) =>
    target && target.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <button
      title={name}
      className="px-2 pt-1 pb-2 text-sm text-white sm:pt-1.5 md:pt-2 lg:pt-3 sm:pb-2 md:pb-3 md:px-4 lg:px-6 sm:text-base md:text-lg rounded-br-xl rounded-bl-xl hover:shadow-inner hover:text-shadow-sm hover:text-red-700 hover:bg-red-200"
      onClick={() => scrollTarget && scroll(scrollTarget)}>
      {icon ? <FontAwesomeIcon icon={icon} /> : name}
    </button>
  );
};

export default Navbar;
