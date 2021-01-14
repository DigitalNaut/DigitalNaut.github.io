import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faPaperPlane,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  children: React.ReactNode;
  callback?: () => void;
  type?: "down" | "up" | "submit" | undefined;
  title?: string;
}

const FancyButton: React.FC<Props> = ({ children, callback, type, title }) => {
  let icon: IconDefinition;

  function setIcon(type: string | undefined) {
    switch (type) {
      case "down":
        icon = faChevronDown;
        break;
      case "up":
        icon = faChevronUp;
        break;
      case "submit":
        icon = faPaperPlane;
        break;
      default:
        icon = faChevronRight;
    }

    return <FontAwesomeIcon icon={icon} className="ml-3" />;
  }

  return (
    <button
      title={title}
      className="inline-block p-3 my-4 text-base text-white bg-blue-700 border-2 border-white shadow-xl rounded-tr-2xl rounded-bl-2xl"
      onClick={(e) => {
        e.preventDefault();
        callback && callback();
      }}>
      {children}
      {setIcon(type)}
    </button>
  );
};

export default FancyButton;
