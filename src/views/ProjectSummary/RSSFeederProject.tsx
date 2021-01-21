import React from "react";
import { ProjectPreviewFrame } from "../../components/ImageFrames";
import Showcase from "../../components/Showcase";

import RSSFeederProjectPreview from "../../assets/images/RSSFeederProjectPreview.png";
import { FancyLink, Paragraph, Subtitle } from "../../components/Formatting";

const RSSFeederShowcase: React.FC = ({ children }) => {
  return (
    <Showcase title="RSS Feeder">
      <div className="flex flex-col float-right mb-4">
        <ProjectPreviewFrame image={RSSFeederProjectPreview} />
        <FancyLink href={process.env.REACT_APP_PROJECT_RSSFEEDER || ""}>
          View the source code
        </FancyLink>
      </div>
      <Subtitle small>The Idea</Subtitle>
      <Paragraph>
        I used to be an avid user of{" "}
        <FancyLink href="https://feeder.co/knowledge-base/rss-basics/google-reader/">
          Google Reader
        </FancyLink>{" "}
        which I enjoyed having as a homepage before it was discontinued.
      </Paragraph>
      <Paragraph>
        My goal was to recreate a modern RSS reader with a clean interface that
        I could use as a Firefox add-on.
      </Paragraph>
      <Subtitle small>Tools Used</Subtitle>
      <Paragraph>
        For this project, I used React with an{" "}
        <FancyLink href="https://www.npmjs.com/package/rss-parser">
          RSS parser
        </FancyLink>{" "}
        to convert the XML feeds into JSON objects for easy handling. I also
        took the time to setup Webpack from the ground up without relying on
        Create React App.
      </Paragraph>
      <Subtitle small>Challenges Faced</Subtitle>
      <Paragraph>
        The inconsistencies between RSS feeds formatting as well as it being a
        defunct technology were the biggest obstacles, but I managed wraggle the
        code to where almost any feed could be parsed and its contents displayed
        with minimal issues. One outstanding difficulty, however, was article
        length which was hard to predict.
      </Paragraph>
      <Subtitle small>The Results</Subtitle>
      <Paragraph>I learned about:</Paragraph>
      <ul className="pl-8 text-left list-disc list-outside">
        <li>
          Setting up Webpack from the ground up which took approximately 8 hours
        </li>
        <li>
          The various options for local storage on modern browsers without
          recurring to external databases
        </li>
        <li>
          Adding dynamic features based on the contents of the feed which were
          often unpredictable
        </li>
      </ul>
      <Subtitle small>Conclusions</Subtitle>
      <Paragraph>
        Unfortunately, my development has been discontinued as I quickly learned
        that RSS is a dead-end for content distrubution despite its widespread
        use. There are better alternatives out there for this purpose like
        content aggregators.
      </Paragraph>
    </Showcase>
  );
};

export default RSSFeederShowcase;
