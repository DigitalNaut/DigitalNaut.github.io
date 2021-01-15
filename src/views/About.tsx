import React from "react";

import Section from "../components/Section";
import { Title, Paragraph, Subtitle } from "../components/Formatting";
import { ProfilePhoto, BookPreview } from "../components/ImageFrames";

import bigote from "../assets/images/Bigote.png";
import JSDefinitiveGuide from "../assets/images/JSDefinitiveGuide.png";
import HeadFirstDesignPatterns from "../assets/images/HeadFirstDesignpatterns.jpg";
import KyleSimpsonAsyncAndBeyond from "../assets/images/KyleSimpsonAsyncAndBeyond.png";

interface AboutProps {
  innerRef: React.RefObject<HTMLElement>;
}

const About: React.FC<AboutProps> = ({ innerRef }) => {
  return (
    <Section color="alt">
      <span ref={innerRef} />
      <Title>
        <span>About</span>
      </Title>
      <Subtitle>It’s-a me, John B.!</Subtitle>
      <ProfilePhoto image={bigote} />
      <Paragraph>
        I’ve been{" "}
        <Highlight>programming as a hobby since I was 13 years-old</Highlight>,
        and now it’s getting serious!
      </Paragraph>
      <Paragraph>
        My goal is to become a <Highlight>Full Stack Web Developer</Highlight>{" "}
        to the <i>fullest</i> extent of the word.
      </Paragraph>
      <Paragraph>
        With formal training and passion for both the
        <Highlight> exact sciences</Highlight> & the
        <Highlight> graphic arts</Highlight>, I believe I can take on the world
        of{" "}
        <Highlight>
          software engineering, web animation, Machine Learning
        </Highlight>{" "}
        and many more challenges ahead.
      </Paragraph>
      <Tag>Detail-oriented</Tag>
      <Tag>Accountable</Tag>
      <Tag>Collaborative</Tag>
      <Subtitle>Hey, John, whatcha up to?</Subtitle>
      <Paragraph>
        My sister and I are working together to define the brand for her new
        business and
        <Highlight> launch her online store</Highlight> soon, which I'm so
        psyched about!
      </Paragraph>
      <Paragraph>
        I’m currently enrolled in{" "}
        <Highlight>
          <a
            href="https://courses.edx.org/courses/course-v1:HarvardX+CS50+X/course/"
            rel="noreferrer"
            className="underline hover:text-red-700">
            CS50 by Harvard
          </a>
        </Highlight>
        , as well as{" "}
        <Highlight>
          <a
            href="https://www.coursera.org/learn/machine-learning/"
            rel="noreferrer"
            className="underline hover:text-red-700">
            Machine Learning from Stanford
          </a>
        </Highlight>
        . For me, self-learning never stops.
      </Paragraph>
      <Subtitle small={true}>Reading list:</Subtitle>
      <BookPreview
        alt="Head First Design Patterns by Eric Freeman et al."
        href="https://www.oreilly.com/library/view/head-first-design/0596007124/"
        status="read"
        image={HeadFirstDesignPatterns}
      />
      <BookPreview
        alt="JavaScript : The Definitive Guide, 7th Edition by David Flanagan"
        href="https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/"
        status="reading"
        image={JSDefinitiveGuide}
      />
      <BookPreview
        alt="You Don't Know JS: Async + Performance by Kyle Simpson"
        href="https://www.goodreads.com/book/show/22221110-you-don-t-know-js"
        status="next"
        image={KyleSimpsonAsyncAndBeyond}
      />
    </Section>
  );
};

const Tag: React.FC = ({ children }) => {
  return (
    <div className="inline-block px-3 py-2 mx-4 my-2 text-white bg-red-400 border-2 border-white select-none rounded-tr-xl rounded-bl-xl">
      {children}
    </div>
  );
};

const Highlight: React.FC = ({ children }) => {
  return <span className="text-blue-900">{children}</span>;
};

export default About;
