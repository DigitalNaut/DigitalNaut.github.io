import React from "react";
import Section from "../components/Section";
import { Title } from "../components/Formatting";
import { ProjectPreviewFrame } from "../components/ImageFrames";

import LokrProjectPreview from "../assets/images/LokrProjectPreview.png";
import TCRHProjectPreview from "../assets/images/TCRHProjectPreview.png";
import CalcAppProjectPreview from "../assets/images/CalcAppProjectPreview.png";
import RSSFeederProjectPreview from "../assets/images/RSSFeederProjectPreview.png";

import RSSFeederShowcase from "./ProjectSummary/RSSFeederProject";
import LokrShowcase from "./ProjectSummary/LokrProject";
import CalcAppShowcase from "./ProjectSummary/CalcAppProject";
import TRHShowcase from "./ProjectSummary/TRHProject";

interface ProjectsProps {
  innerRef: React.RefObject<HTMLElement>;
}

const Projects: React.FC<ProjectsProps> = ({ innerRef }) => {
  const [selected, setSelected] = React.useState(0);

  return (
    <Section>
      <span ref={innerRef} />
      <Title>Projects</Title>
      <div className="mt-6">
        {selected === 0 && <RSSFeederShowcase />}
        {selected === 1 && <LokrShowcase />}
        {selected === 2 && <TRHShowcase />}
        {selected === 3 && <CalcAppShowcase />}
      </div>

      <div className="flex flex-wrap justify-center my-6">
        <Selector callback={setSelected} index={0} scrollRef={innerRef}>
          <ProjectPreviewFrame
            image={RSSFeederProjectPreview}
            title="RSS Feeder"
            selected={selected === 0}
          />
        </Selector>
        <Selector callback={setSelected} index={1} scrollRef={innerRef}>
          <div onClick={() => setSelected(1)}>
            <ProjectPreviewFrame
              image={LokrProjectPreview}
              title="Lokr"
              selected={selected === 1}
            />
          </div>
        </Selector>
        <Selector callback={setSelected} index={2} scrollRef={innerRef}>
          <div onClick={() => setSelected(3)}>
            <ProjectPreviewFrame
              image={TCRHProjectPreview}
              title="Thaumic Research Helper"
              selected={selected === 2}
            />
          </div>
        </Selector>
        <Selector callback={setSelected} index={3} scrollRef={innerRef}>
          <div onClick={() => setSelected(2)}>
            <ProjectPreviewFrame
              image={CalcAppProjectPreview}
              title="Calc App"
              selected={selected === 3}
            />
          </div>
        </Selector>
      </div>
    </Section>
  );
};

interface selectorProps {
  callback: React.Dispatch<React.SetStateAction<number>>;
  scrollRef?: React.RefObject<HTMLElement>;
  index: number;
}

const Selector: React.FC<selectorProps> = ({
  callback,
  index,
  scrollRef,
  children,
}) => {
  return (
    <div
      onClick={() => {
        scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
        callback(index);
      }}>
      {children}
    </div>
  );
};

export default Projects;
