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
  offCentered?: boolean;
}

export const Subtitle: React.FC<Props> = ({ children, small, offCentered }) => {
  return (
    <h2
      className={`font-title ${
        small
          ? "text-2xl pt-3 pb-2"
          : `pt-5 pb-4 text-3xl ${
              offCentered && "sm:-ml-12 md:-ml-28 lg:-ml-36"
            }`
      } text-shadow-sm text-red-700`}>
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

interface FancyLinkProps {
  href: string;
}

export const FancyLink: React.FC<FancyLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-blue-900 underline hover:text-red-700">
      {children}
    </a>
  );
};

export const Highlight: React.FC = ({ children }) => {
  return <span className="font-semibold">{children}</span>;
};
