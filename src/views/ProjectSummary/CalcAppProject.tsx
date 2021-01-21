import React from "react";
import { ProjectPreviewFrame } from "../../components/ImageFrames";
import Showcase from "../../components/Showcase";

import CalcAppProjectPreview from "../../assets/images/CalcAppProjectPreview.png";
import { FancyLink, Paragraph, Subtitle } from "../../components/Formatting";

const CalcAppShowcase: React.FC = () => {
  return (
    <Showcase title="Calc App">
      <div className="flex flex-col float-right mb-4">
        <ProjectPreviewFrame image={CalcAppProjectPreview} />
        <FancyLink href={process.env.REACT_APP_PROJECT_CALCAPP || ""}>
          View the app
        </FancyLink>
      </div>
      <Subtitle small>The Idea</Subtitle>
      <Paragraph>
        I needed to create a small app for an introductory class on HTML, CSS
        and JavaScript that demonstrated my progress. A small calculator app
        would be an acceptable exercise.
      </Paragraph>
      <Subtitle small>Tools Used</Subtitle>
      <Paragraph>
        For simplicity and practicality, I used{" "}
        <FancyLink href="https://getbootstrap.com/">Bootstrap</FancyLink>,{" "}
        <FancyLink href="https://fonts.google.com/">Google Fonts</FancyLink>,{" "}
        and <FancyLink href="https://mathjs.org/">MathJs</FancyLink>.
      </Paragraph>
      <Subtitle small>Challenges Faced</Subtitle>
      <Paragraph>
        I needed to learn how to integrate all the tools using vanilla HTML,
        including the styling sheets, the fonts, and the consumption of the math
        library.
      </Paragraph>
      <Paragraph>
        The CSS for the interface needed particular attention to make it flush
        without breaking as it's made up of buttons of various sizes.
      </Paragraph>
      <Subtitle small>The Results</Subtitle>
      <Paragraph>I learned how to:</Paragraph>
      <ul className="pl-8 text-left list-disc list-outside">
        <li>Integrate basic tools in HTML5 markup</li>
        <li>Import and consume a library with vanilla JavaScript</li>
        <li>Format content with CSS Flexbox and Bootstrap</li>
      </ul>
      <Subtitle small>Conclusions</Subtitle>
      <Paragraph>
        Although it seems simple, it took me some time to get used to the basic
        setup and I had to get my feet wet in all the various technologies used
        with their particular learning curves.
      </Paragraph>
    </Showcase>
  );
};

export default CalcAppShowcase;
