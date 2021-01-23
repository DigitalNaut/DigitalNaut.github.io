import React from "react";

interface ShowcaseProps {
  title: string;
}

const Showcase: React.FC<ShowcaseProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col max-h-full overflow-hidden text-base text-white bg-blue-800 shadow-md place-content-start rounded-tr-3xl rounded-bl-3xl">
      <div className="px-4 mx-auto my-2 text-2xl md:my-4 text-shadow-lg">
        {title}
      </div>
      <div className="flex flex-col p-4 text-gray-900 bg-blue-50">
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
};

export default Showcase;
