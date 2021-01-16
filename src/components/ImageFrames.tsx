import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import flapImg from "../assets/images/flap.svg";

type BaseProps = {
  image: string;
  alt?: string;
  width?: string;
  height?: string;
};

interface ProfilePhotoProps extends BaseProps {}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ image, alt }) => {
  return (
    <div className="float-right m-2 overflow-hidden bg-blue-500 border-4 border-white bg-clip-content bg-radial-white rounded-tr-2xl rounded-bl-2xl">
      <img
        src={image}
        className="object-cover lg:h-52 lg:w-52 md:w-48 md:h-48 sm:w-30 sm:h-30 w-28 h-28"
        alt={alt}
      />
    </div>
  );
};

interface BookPreviewProps extends BaseProps {
  status: string;
  href: string;
}

export const BookPreview: React.FC<BookPreviewProps> = ({
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

interface ProjectPreviewProps extends BaseProps {
  title: string;
}

export const ProjectPreviewFrame: React.FC<ProjectPreviewProps> = ({
  image,
  alt,
  title,
  children,
}) => {
  const bgStyle: React.CSSProperties = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="flex flex-col max-h-full overflow-hidden text-base text-white bg-blue-700 border-2 border-white shadow-md h-72 place-content-between rounded-tr-3xl rounded-bl-3xl">
      <div className="px-4 mx-auto my-2 text-lg md:my-4">{title}</div>
      <div className="flex-grow bg-local bg-no-repeat bg-fill" style={bgStyle}>
        {children}
      </div>
    </div>
  );
};

interface ResumePhotoProps extends BaseProps {
  flapSize?: number | string | undefined;
}

export const ResumePreview: React.FC<ResumePhotoProps> = ({
  image,
  alt,
  width,
  height,
  flapSize = "100px",
}) => {
  const flapContainerStyle: React.CSSProperties = {
    width,
    height: flapSize,
  };
  const flapContainerStyle2: React.CSSProperties = {
    width: flapSize,
  };

  return (
    <div className="relative flex justify-center mx-auto">
      <div
        className="absolute z-10 flex justify-end"
        style={flapContainerStyle}>
        <div
          className="relative h-full overflow-hidden bg-red-200"
          style={flapContainerStyle2}>
          <img alt="" className="shadow-lg" src={flapImg} width={flapSize} height={flapSize} />
        </div>
      </div>
      <img
        src={image}
        alt={alt}
        width={width}
        height={height}
        className="block mb-0"
      />
    </div>
  );
};
