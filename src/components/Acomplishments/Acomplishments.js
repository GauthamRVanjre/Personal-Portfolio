import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const Acomplishments = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const snapshot = await getDocs(collection(db, "AccomplishmentsData"));
    const data = snapshot.docs.map((doc) => doc.data());
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log("accomplishments data", data);

  return (
    <Section>
      <SectionTitle data-aos="fade-right" data-aos-once="false">
        Personal Accomplishments
      </SectionTitle>
      <Boxes data-aos="fade-left" data-aos-once="false">
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
};

export default Acomplishments;
