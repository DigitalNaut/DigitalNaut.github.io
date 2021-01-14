import React from "react";

interface Props {
  children: React.ReactNode;
  color?: "alt" | "accent";
  centered?: boolean;
  fit?: boolean;
}

const Section: React.FC<Props> = ({ children, color, centered, fit }) => {
  return (
    <div
      className={`flex flex-col ${
        centered && "justify-center"
      } mx-auto font-body ${!fit && "min-h-screen"} text-center ${
        color === "accent" ? "bg-red-700 text-white" : color ==="alt" ? "bg-red-200 text-gray-900" : "bg-red-400 text-white"
      }`}>
      <SectionConstraint>{children}</SectionConstraint>
    </div>
  );
};

export const SectionConstraint: React.FC<Props> = ({ children }) => {
  return (
    <div className="max-w-screen-sm px-6 mx-auto lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm lg:px-20 md:px-14 sm:px-8">
      {children}
    </div>
  );
};

export default Section;
