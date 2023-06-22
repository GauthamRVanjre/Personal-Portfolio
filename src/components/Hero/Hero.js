import React, { useEffect, useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { SocialIcons, Flex } from "../Header/HeaderStyles";
import { LeftSection } from "./HeroStyles";
import { auth } from "../../firebase";

const handleClick = () => {};

const Hero = (props) => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isLogged")) {
      auth.onAuthStateChanged((user) => {
        if (user) {
          localStorage.setItem("isLogged", true);
          setIsLoggedin(true);
        } else {
          localStorage.removeItem("isLogged");
          setIsLoggedin(false);
        }
      });
    }
  }, []);
  return (
    <Section row nopadding>
      <LeftSection data-aos="fade-up">
        <SectionTitle main center>
          Hi - {isLoggedIn ? auth.currentUser.displayName : "Guest"}, Welcome to
          my portfolio. I build applications for real world 
        </SectionTitle>
        <SectionText>
          As an aspiring front-end developer, I am eager to dive into the world
          of web development and bring my designs to life. I have a strong
          foundation in HTML, CSS, and JavaScript, and I am constantly learning
          new technologies like React.js, Next.js, TypeScript, React Native and
          tools to stay current in this ever-evolving field. I have a keen eye
          for design and a passion for creating user-friendly and accessible
          experiences for all users.
        </SectionText>
        <Flex>
          <Button>
            <SocialIcons
              href="https://www.linkedin.com/in/gautham-r-vanjre-72b858228/"
              target="_blank"
            >
              Ping me on LinkedIn
            </SocialIcons>
          </Button>
          <Button>
            <SocialIcons
              href="https://drive.google.com/file/d/1_8x6VXgBUa7wbB6-PPzQs4AEgM6enqm5/view?usp=sharing"
              target="_blank"
            >
              Download Resume
            </SocialIcons>
          </Button>
        </Flex>
      </LeftSection>
    </Section>
  );
};

export default Hero;
