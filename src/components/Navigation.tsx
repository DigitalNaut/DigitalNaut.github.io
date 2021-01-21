import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SectionConstraint } from "./Section";

interface NavProps {
  detachPoint: React.RefObject<HTMLElement>;
  elRefs: React.MutableRefObject<React.RefObject<HTMLElement>[]>;
}

const Navbar: React.FC<NavProps> = ({ children, detachPoint, elRefs }) => {
  const [sticky, setSticky] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const childrenWithProps = React.Children.map(
    children,
    (child: React.ReactNode, index: number) =>
      React.cloneElement(child as React.ReactElement<ButtonProps>, {
        isActive: index === activeIndex,
      })
  );

  const handleScrolling = React.useCallback(() => {
    // Make navbar detachable at breakpoint
    if (detachPoint.current) {
      setSticky(window.pageYOffset > detachPoint.current.offsetTop);
    }

    // Highlight navbar buttons based on scroll height
    if (elRefs.current.length) {
      let prevIndex = 0;
      for (const ref of elRefs.current) {
        if (ref.current)
          if (
            window.innerHeight + window.pageYOffset >=
            document.body.offsetHeight
          ) {
            setActiveIndex(elRefs.current.length - 1);
            break;
          } else if (
            ref.current.offsetTop <
            window.pageYOffset + window.innerHeight * 0.5
          ) {
            prevIndex = elRefs.current.indexOf(ref);
            continue;
          } else {
            setActiveIndex(prevIndex);
            break;
          }
      }
    }
  }, [detachPoint, elRefs]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    window.addEventListener("resize", handleScrolling);

    return () => {
      window.removeEventListener("scroll", () => handleScrolling);
      window.removeEventListener("resize", () => handleScrolling);
    };
  }, [handleScrolling]);

  return (
    <nav
      className={`bg-red-700 h-9 md:h-12 lg:h-14 ${
        sticky ? "top-0 w-full z-50 shadow-xl sticky" : "shadow-none"
      }`}>
      <SectionConstraint>
        <div className="flex place-items-center justify-evenly">
          {childrenWithProps}
        </div>
      </SectionConstraint>
    </nav>
  );
};

interface ButtonProps {
  displayName: string;
  scrollRef: React.RefObject<HTMLElement>;
  icon?: IconDefinition;
  isActive?: boolean;
}

export const NavButton: React.FC<ButtonProps> = ({
  displayName: name,
  scrollRef,
  icon,
  isActive,
}) => {
  const scroll = React.useCallback(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [scrollRef]);

  return (
    <button
      title={name}
      className={`px-2 pt-1 pb-2 text-sm focus:outline-none ${
        isActive ? "text-red-700 bg-red-200" : "text-white"
      } sm:pt-1.5 md:pt-2 lg:pt-3 sm:pb-2 md:pb-3 md:px-4 lg:px-6 sm:text-base md:text-lg rounded-br-xl rounded-bl-xl hover:shadow-inner hover:text-shadow-sm hover:text-red-700 hover:bg-red-100`}
      onClick={() => scroll()}>
      {icon ? <FontAwesomeIcon icon={icon} /> : name}
    </button>
  );
};

export default Navbar;
