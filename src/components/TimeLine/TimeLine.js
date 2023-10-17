import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  console.log("timeline", TimeLineData);

  const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle data-aos="fade-right" data-aos-once="false">
        About Me
      </SectionTitle>
      <SectionText data-aos="fade-right" data-aos-once="false">
        As a recent graduate with a degree in Information Science and
        professional experience as a web developer in the industry, I am eager
        to secure a position as a React developer. I am enthusiastic about
        applying my existing skills and knowledge while furthering my
        development expertise. I am keen to join a dynamic team that places a
        high value on collaborative work and fosters both personal and
        professional growth.
      </SectionText>

      <div class="timeline-carousel">
        <div
          class="carousel-container"
          ref={carouselRef}
          data-aos="fade-left"
          data-aos-once="false"
        >
          {TimeLineData.map((item, index) => (
            <div class="carousel-mobile-scroll-node" key={index}>
              <div
                class={`carousel-item ${index === activeItem ? "active" : ""}`}
                id={`carousel__item-${index}`}
                onClick={(e) => handleClick(e, index)}
              >
                <div class="carousel-item-title">
                  {item.year}
                  <svg
                    class="carousel-item-img"
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                </div>
                <div class="carousel-item-text">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />
    </Section>
  );
};

export default Timeline;
