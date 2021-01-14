import React from "react";
import Section from "../components/Section";
import Title from "../components/Formatting";
import { ProjectFrame } from "../components/ImageFrames";

import ProjectImage from "../assets/images/ProjectImage.png";
import LokrProjectPreview from "../assets/images/LokrProjectPreview.png";
import TCRHProjectPreview from "../assets/images/TCRHProjectPreview.png";
import CalcAppProjectPreview from "../assets/images/CalcAppProjectPreview.png";

interface ProjectsProps {
  innerRef: React.RefObject<HTMLElement>;
}

const Projects: React.FC<ProjectsProps> = ({ innerRef }) => {
  return (
    <Section>
      <span ref={innerRef} />
      <Title>Projects</Title>
      <div className="grid grid-flow-row grid-cols-2 gap-4 mt-8 mb-6 overflow-y-auto">
        <ProjectFrame image={ProjectImage} title="RSS Feeder" />
        <a href={process.env.REACT_APP_PROJECT_LOKER} target="_blank" rel="noreferrer">
          <ProjectFrame image={LokrProjectPreview} title="Loker" />
        </a>
        <a href={process.env.REACT_APP_PROJECT_CALCAPP} target="_blank" rel="noreferrer">
          <ProjectFrame image={CalcAppProjectPreview} title="Calc App" />
        </a>
        <a href={process.env.REACT_APP_PROJECT_TCRH} target="_blank" rel="noreferrer">
          <ProjectFrame image={TCRHProjectPreview} title="Thaumic Research Helper" />
        </a>
      </div>
    </Section>
  );
};

export default Projects;
