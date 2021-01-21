import React from "react";
import { ProjectPreviewFrame } from "../../components/ImageFrames";
import Showcase from "../../components/Showcase";

import TCRHProjectPreview from "../../assets/images/TCRHProjectPreview.png";
import { FancyLink, Paragraph, Subtitle } from "../../components/Formatting";

const TRHShowcase: React.FC = ({ children }) => {
  return (
    <Showcase title="Thaumic Research Helper">
      <div className="flex flex-col float-right mb-4">
        <ProjectPreviewFrame image={TCRHProjectPreview} />
        <FancyLink href={process.env.REACT_APP_PROJECT_TCRH || ""}>
          Download the Air app
        </FancyLink>
      </div>
      <Subtitle small>The Idea</Subtitle>
      <Paragraph>
        Years ago, when I used to play Minecraft with mods, a lot of effort was
        spent in gathering resources. One particular extension that added magic
        elements to the game called Thaumcraft 4 was particularly
        resource-intensive.
      </Paragraph>
      <Paragraph>
        The main mechanism of "research"{" "}
        <FancyLink href="https://youtu.be/ReOlcmkkNu8?t=100">
          involved a minigame
        </FancyLink>{" "}
        that I was sure I could crack with an algorithm.
      </Paragraph>
      <Subtitle small>Tools Used</Subtitle>
      <Paragraph>
        Back then, Action Script 3 used to be in vogue. However, the main
        algorithm for linking up the various research aspects was created in a
        Java and then ported to ease the development of the user interface.
      </Paragraph>
      <Subtitle small>The Results</Subtitle>
      <Paragraph>I learned about:</Paragraph>
      <ul className="pl-8 text-left list-disc list-outside">
        <li>
          Creating a complex algorithm with nested for-loops to solve a
          particular task
        </li>
        <li>
          Optimize the computation steps to improve speed and avoid duplicate
          results
        </li>
        <li>
          Create an interface using algebra to position elements on the screen
          dynamically
        </li>
        <li>
          Create my own UI elements, including a scrollbar that mimicked the
          Windows theme
        </li>
      </ul>
      <Subtitle small>Conclusions</Subtitle>
      <Paragraph>
        This is by far one of the most complicated algoritms I've made. It may
        look deceptively simple, but the inner workigns of the algorithm took
        much patience and reasoning to build. Its performance is surprising,
        able to compute thousands of permutations and display the results within
        seconds.
      </Paragraph>
    </Showcase>
  );
};

export default TRHShowcase;
