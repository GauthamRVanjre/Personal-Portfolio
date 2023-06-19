import React from "react";
import { DiAndroid, DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle data-aos="fade-right" data-aos-once="false">
      Technologies
    </SectionTitle>
    <SectionText data-aos="fade-right" data-aos-once="false">
      I've worked with a range of technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List data-aos="fade-left" data-aos-once="false">
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiAndroid size="3rem" />
        <ListContainer>
          <ListTitle>Mobile Apps</ListTitle>
          <ListParagraph>
            Experience with <br />
            React-Native based Development
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
