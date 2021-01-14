import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

type BaseProps = {
  image: string;
  alt?: string;
  width?: string;
  height?: string;
};

interface PhotoProps extends BaseProps {}

export const ProfilePhoto: React.FC<PhotoProps> = ({ image, alt }) => {
  return (
    <div className="float-right m-2 overflow-hidden bg-blue-500 border-4 border-white bg-clip-content bg-radial-white rounded-tr-2xl rounded-bl-2xl">
      <img
        src={image}
        className="lg:h-52 lg:w-52 md:w-48 md:h-48 sm:w-30 sm:h-30 w-28 h-28"
        alt={alt}
      />
    </div>
  );
};

interface BookProps extends BaseProps {
  status: string;
  href: string;
}

export const BookPreview: React.FC<BookProps> = ({
  image,
  alt,
  status,
  href,
}) => {
  const statusColor = (type: string | undefined) => {
    switch (type) {
      case "read":
        return "bg-green-700 ";
      case "reading":
        return "bg-blue-700";
      case "next":
        return "bg-yellow-700";
      default:
        return "";
    }
  };

  const statusText = (type: string | undefined) => {
    switch (type) {
      case "read":
        return (
          <span>
            Done <FontAwesomeIcon icon={faCheckCircle} />
          </span>
        );

      case "reading":
        return <span>Reading</span>;

      case "next":
        return <span>Up next</span>;

      default:
        return;
    }
  };

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="relative z-0 inline-block mx-2 mb-4 rounded-tr-2xl rounded-bl-2xl">
        {!!status && (
          <div
            className={`absolute z-0 flex items-center text-white text-xs select-none bottom-0 right-0 rounded-tr-xl rounded-bl-xl w-14 h-7 border-2 ${statusColor(
              status
            )}`}>
            <p className="m-auto">{!!status && statusText(status)}</p>
          </div>
        )}
        <img src={image} width="100em" alt={alt} title={alt} />
      </div>
    </a>
  );
};

interface Project extends BaseProps {
  title: string;
}

export const ProjectFrame: React.FC<Project> = ({ image, alt, title }) => {
  return (
    <div className="flex flex-col min-h-full overflow-hidden text-base text-white bg-blue-700 shadow-md place-content-between rounded-tr-3xl rounded-bl-3xl">
      <div className="px-4 mx-auto my-2 text-lg md:my-4">{title}</div>
      <img src={image} alt={alt} className="mx-auto mb-0"></img>
    </div>
  );
};

export const ResumePreview: React.FC<PhotoProps> = ({
  image,
  alt,
  width,
  height,
}) => {
  return (
    <img
      src={image}
      alt={alt}
      width={width}
      height={height}
      className="mx-auto mb-0"></img>
  );
};
