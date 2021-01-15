import React from "react";

export const Title: React.FC = ({ children }) => {
  return (
    <h1 className="pt-20 pb-4 text-6xl text-blue-900 font-title text-shadow-md">
      {children}
    </h1>
  );
};

interface Props {
  small?: boolean;
}

export const Subtitle: React.FC<Props> = ({ children, small }) => {
  return (
    <h2
      className={`${!small && "sm:-ml-12 md:-ml-28 lg:-ml-36"} font-title ${
        small ? "text-2xl" : "text-3xl"
      } text-shadow-sm text-red-700 ${small ? "pt-3 pb-2" : "pt-5 pb-4"}`}>
      {children}
    </h2>
  );
};

interface ParagraphProps {
  centered?: boolean;
  untabbed?: boolean;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  centered,
  untabbed,
}) => {
  return (
    <p
      className={`lg:text-xl md:text-md sm:text-base text-sm py-2 ${
        centered ? "text-center" : "text-left"
      } ${!untabbed && "indent-2"}`}>
      {children}
    </p>
  );
};

