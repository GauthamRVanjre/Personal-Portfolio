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
          Hello - {isLoggedIn ? auth.currentUser.displayName : "Guest"}, and
          welcome to my portfolio; I craft exceptional digital experiences with
          code.
        </SectionTitle>
        <SectionText>
          As a dedicated web developer, I create user-centric websites and apps.
          Proficient in HTML, CSS, JavaScript, React.js, Next.js, and more, I
          stay at the forefront of this ever-evolving field. With a discerning
          eye for design, I craft seamless digital experiences. Welcome to my
          world, where every pixel matters.
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
              href="https://drive.google.com/file/d/1kjEuwmaryLYsE4O8uuPGFRH0nFGm2rFh/view?usp=sharing"
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
