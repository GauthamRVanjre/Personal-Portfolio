import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { skills } from "../../constants/constants";

const SkillSet = () => {
  return (
    <>
      <Section id="skillSet">
        <SectionDivider />
        <SectionTitle data-aos="fade-right" data-aos-once="false">
          Skills set
        </SectionTitle>
        <SkilledSetBoxes>
          {skills.map((skill, index) => (
            <SkillBox key={index}>{skill}</SkillBox>
          ))}
        </SkilledSetBoxes>
      </Section>
    </>
  );
};

export default SkillSet;
