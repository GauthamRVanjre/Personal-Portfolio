import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { skills } from "../../constants/constants";
import { SkilledSetBoxes, SkillBox } from "./SkillSetStyles";
import Button from "../../styles/GlobalComponents/Button";

const SkillSet = () => {
  return (
    <>
      <Section id="skillSet">
        <SectionDivider />
        <SectionTitle data-aos="fade-right" data-aos-once="false">
          Skills set
        </SectionTitle>
        <Button>
          {skills.map((skill, index) => (
            <SkillBox key={index}>{skill}</SkillBox>
          ))}
        </Button>
      </Section>
    </>
  );
};

export default SkillSet;
