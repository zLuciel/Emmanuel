import React from "react";
import { Carousel } from "@mantine/carousel";
import { FlexContent, GridImg } from "./css/Card";
import data from "./data.json"

const Card = ({cardivRef}) => {
  return (
    <GridImg>
      <Carousel
       // maw={900}
        align="start"
        mx="auto"
        height={"auto"}
        withIndicators
        withControls={false}
        slideGap="xl"
      >
        <Carousel.Slide ref={cardivRef} className="grid">
          {data.map((card, i) => (
            <FlexContent key={i} >
              <h4>{card.subtitle}</h4>
              <h1>{card.title}</h1>
              <p>{card.parrafo}</p>
            </FlexContent>
          ))}
        </Carousel.Slide>
      </Carousel>
    </GridImg>
  );
};

export default Card;
