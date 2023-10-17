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
          welcome to my portfolio. I specialize in creating exceptional digital
          experiences through the power of code.
        </SectionTitle>
        <SectionText>
          As a dedicated web developer, I am poised to embark on an exciting
          journey within the realm of web development, where I transform
          innovative designs into functional, user-centric websites and
          applications. With a rock-solid foundation in HTML, CSS, and
          JavaScript, I am unceasingly expanding my skill set by immersing
          myself in cutting-edge technologies such as React.js, Next.js,
          TypeScript, React Native, MongoDB, MERN stack and an array of
          invaluable development tools. My unwavering commitment to staying at
          the forefront of this ever-evolving field is paralleled only by my
          discerning eye for design and my unwavering passion for crafting
          seamless, universally accessible digital experiences. Welcome to my
          world, where every pixel matters, and the user's journey takes center
          stage
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
