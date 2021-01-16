import React from "react";
import Section from "../components/Section";
import { Title } from "../components/Formatting";
import { ProjectPreviewFrame } from "../components/ImageFrames";

import LokrProjectPreview from "../assets/images/LokrProjectPreview.png";
import TCRHProjectPreview from "../assets/images/TCRHProjectPreview.png";
import CalcAppProjectPreview from "../assets/images/CalcAppProjectPreview.png";
import RSSFeederProjectPreview from "../assets/images/RSSFeederProjectPreview.png";

interface ProjectsProps {
  innerRef: React.RefObject<HTMLElement>;
}

const Projects: React.FC<ProjectsProps> = ({ innerRef }) => {
  return (
    <Section>
      <span ref={innerRef} />
      <Title>Projects</Title>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8 mb-6">
        <a
          href={process.env.REACT_APP_PROJECT_RSSFEEDER}
          target="_blank"
          rel="noreferrer">
          <ProjectPreviewFrame
            image={RSSFeederProjectPreview}
            title="RSS Feeder"
          />
        </a>
        <a
          href={process.env.REACT_APP_PROJECT_LOKER}
          target="_blank"
          rel="noreferrer">
          <ProjectPreviewFrame image={LokrProjectPreview} title="Loker" />
        </a>
        <a
          href={process.env.REACT_APP_PROJECT_CALCAPP}
          target="_blank"
          rel="noreferrer">
          <ProjectPreviewFrame image={CalcAppProjectPreview} title="Calc App" />
        </a>
        <a
          href={process.env.REACT_APP_PROJECT_TCRH}
          target="_blank"
          rel="noreferrer">
          <ProjectPreviewFrame
            image={TCRHProjectPreview}
            title="Thaumic Research Helper"
          />
        </a>
      </div>
    </Section>
  );
};

export default Projects;
