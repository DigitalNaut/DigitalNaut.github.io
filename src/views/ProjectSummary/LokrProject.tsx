import React from "react";
import { ProjectPreviewFrame } from "../../components/ImageFrames";
import Showcase from "../../components/Showcase";

import LokrProjectPreview from "../../assets/images/LokrProjectPreview.png";
import { FancyLink, Paragraph, Subtitle } from "../../components/Formatting";

const LokrShowcase: React.FC = ({ children }) => {
  return (
    <Showcase title="Lokr">
      <div className="flex flex-col float-right mb-4">
        <ProjectPreviewFrame image={LokrProjectPreview} />
        <FancyLink href={process.env.REACT_APP_PROJECT_Lokr || ""}>
          View the presentation
        </FancyLink>
      </div>
      <Subtitle small>The Idea</Subtitle>
      <Paragraph>
        I saw several opportunities for improvement in a previous job where
        in-house communication was lacking.
      </Paragraph>
      <Paragraph>
        I wanted to shorten the time (from hours and days to minutes) for
        managers to poll users' information for each petty task by implementing
        a petition-request event system.
      </Paragraph>
      <Subtitle small>Tools Used</Subtitle>
      <Paragraph>
        This project needed both a server and a client: For the server, I relied
        on MariaDB and Express.
      </Paragraph>
      <Paragraph>
        For the client, the interface was created with React and Material UI for
        a standardized look and to venture away from Bootstrap. Custom Regex
        needles were crucial in input validation.
      </Paragraph>
      <Subtitle small>Challenges Faced</Subtitle>
      <Paragraph>
        First, I needed to separate the roles of Users and Admins which were
        stored cryptographically. Every action needed to be validated by the
        server to emphasize security.
      </Paragraph>
      <Paragraph>
        Most importantly, I needed to implement dynamic fields to event forms as
        specified by an Admin. This was done by manipulating and storing JSON
        objects for scalability and flexibility.
      </Paragraph>
      <Paragraph>
        User input validation was also a great challenge, which ranged from
        registration, to login forms, private messaging, creation of Admin
        request forms, and User submissions for participation.
      </Paragraph>
      <Subtitle small>The Results</Subtitle>
      <Paragraph>I learned how to:</Paragraph>
      <ul className="pl-8 text-left list-disc list-outside">
        <li>Set up a server with registration and a login system</li>
        <li>Separate and handle user actions based on roles</li>
        <li>
          Query information from a database and cleanse it of sensitive data
        </li>
        <li>Develop a reliable REST API with consistency among requests</li>
      </ul>
      <Subtitle small>Conclusions</Subtitle>
      <Paragraph>
        This project was a great proof-of-concept. It was presented as my final
        project for graduating from the Full-Stack JavaScript course from BEDU.
        This month-long endeavor gave me the confidence I needed in my abilities
        as a full-stack developer.
      </Paragraph>
    </Showcase>
  );
};

export default LokrShowcase;
