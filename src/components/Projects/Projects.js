import React, { useEffect, useState } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const snapshot = await getDocs(collection(db, "projects"));
    const Projects = snapshot.docs.map((doc) => doc.data());
    setProjects(Projects);
  };

  useEffect(() => {
    getProjects();
  }, []);

  console.log("projects", projects);
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main data-aos="fade-right" data-aos-once="false">
        Projects
      </SectionTitle>
      <GridContainer data-aos="fade-left" data-aos-once="false">
        {projects.map(
          ({
            id,
            imageUrl,
            title,
            description,
            tags,
            source,
            deployedLink,
          }) => (
            <BlogCard key={id}>
              <Img src={imageUrl} alt={imageUrl} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Tech Stack:- </TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={deployedLink}>Demo</ExternalLinks>
                <ExternalLinks href={source}>Code</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
