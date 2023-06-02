import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList data-aos="fade-right">
        <LinkColumn>
          <LinkTitle>LinkedIn profile</LinkTitle>
          <LinkItem href="https://www.linkedin.com/in/gautham-r-vanjre-72b858228/">
            Gautham R Vanjre
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:vanjregautham@gmail.com">
            vanjregautham@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer data-aos="fade-right">
          <Slogan>Learning is a never ending process</Slogan>
        </CompanyContainer>
        <SocialContainer data-aos="fade-left">
          <SocialIcons href="https://github.com/GauthamRVanjre/">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/gautham-r-vanjre-72b858228/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/vanjregautham/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
