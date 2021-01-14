import React from "react";

import FancyButton from "../components/FancyButton";
import Section from "../components/Section";
import Title from "../components/Formatting";
import { ResumePreview } from "../components/ImageFrames";

import ResumeImage from "../assets/images/EN_CV_FSD_1_5_2020.jpg";
import { openInNewTab } from "../utility/utilities";

interface ResumeProps {
  innerRef: React.RefObject<HTMLElement>;
}

const Resume: React.FC<ResumeProps> = ({ innerRef }) => {
  return (
    <Section color="alt">
      <span ref={innerRef} />
      <Title>Résumé</Title>
      <div className="mt-8">
        <ResumePreview image={ResumeImage} width="80%" />
        <FancyButton
          type="down"
          callback={() => openInNewTab(process.env.REACT_APP_RESUME_PDF || "")}>
          Get the PDF
        </FancyButton>
      </div>
    </Section>
  );
};

export default Resume;
