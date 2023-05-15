import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { SocialIcons } from "../Header/HeaderStyles";
import { LeftSection } from "./HeroStyles";

const handleClick = () => {};

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        As an aspiring front-end developer, I am eager to dive into the world of
        web development and bring my designs to life. I have a strong foundation
        in HTML, CSS, and JavaScript, and I am constantly learning new
        technologies like React.js, Next.js and tools to stay current in this
        ever-evolving field. I have a keen eye for design and a passion for
        creating user-friendly and accessible experiences for all users.
      </SectionText>
      <Button>
        <SocialIcons href="https://www.linkedin.com/in/gautham-r-vanjre-72b858228/">
          Ping me on LinkedIn
        </SocialIcons>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
