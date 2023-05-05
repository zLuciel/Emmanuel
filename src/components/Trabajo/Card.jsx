import React from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { FlexContent, GridImg } from "./css/Card";
const data = [
  {
    title: "Gogle Wars",
    parrafo: "Sed ut persepecticcion unde omns ste antus error",
    subtitle: 2019,
  },
  {
    title: "Gogle Wars",
    parrafo: "Sed ut persepecticcion unde omns ste antus error",
    subtitle: 2021,
  },
  {
    title: "Gogle Wars",
    parrafo: "Sed ut persepecticcion unde omns ste antus error",
    subtitle: 2022,
  },
  {
    title: "Gogle Wars",
    parrafo: "Sed ut persepecticcion unde omns ste antus error",
    subtitle: 2023,
  },
  {
    title: "Gogle Wars",
    parrafo: "Sed ut persepecticcion unde omns ste antus error",
    subtitle: 2023,
  },
  {
    title: "Gogle Wars",
    parrafo: "Sed ut persepecticcion unde omns ste antus error",
    subtitle: 2023,
  },
  {
    title: "Gogle Wars",
    parrafo: "Sed ut persepecticcion unde omns ste antus error",
    subtitle: 2023,
  },
  {
    title: "Gogle Wars",
    parrafo: "Sed ut persepecticcion unde omns ste antus error",
    subtitle: 2023,
  },
];

const Card = () => {
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
        <Carousel.Slide className="grid">
          {data.map((card, i) => (
            <FlexContent key={i} >
              <h4>{card.subtitle}</h4>
              <h1>{card.title}</h1>
              <p>{card.parrafo}</p>
            </FlexContent>
          ))}
        </Carousel.Slide>
        <Carousel.Slide className="grid">
          {data.map((card, i) => (
            <FlexContent key={i}>
              <h4>{card.subtitle}</h4>
              <h1>{card.title}</h1>
              <p>{card.parrafo}</p>
            </FlexContent>
          ))}
        </Carousel.Slide>
        <Carousel.Slide className="grid">
          {data.map((card, i) => (
            <FlexContent key={i}>
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
