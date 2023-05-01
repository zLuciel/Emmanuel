import React from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { FlexContent, GridImg } from "./css/Card";
import gamesapi from "@/assets/gamesapi.png"
import rickapi from "@/assets/rickapi.png"
import Ong from "@/assets/Ong.png"
const data = [
  {
    title: "Api Gamer",
    parrafo: "Sed ut persepecticcion unde omns ste antus error",
    img: gamesapi,
  },
  {
    title: "Rick and Morty",
    parrafo: "Sed ut persepecticcion unde omns ste antus error",
    img: rickapi,
  },
  {
    title: "AES",
    parrafo: "Sed ut persepecticcion unde omns ste antus error",
    img: Ong,
  },
  {
    title: "Gogle Wars",
    parrafo: "Sed ut persepecticcion unde omns ste antus error",
    img: "https://pa1.narvii.com/7236/90682cd3d55536c756bc867cd20bd94acec1730fr1-800-450_hq.gif",
  },
];

const Card = ({ setImage,cardivRef }) => {

  return (
    <GridImg>
      <Carousel 
        maw={600}
        align="center"
        mx="auto"
        height={420}
        withIndicators
        withControls={false}
        slideGap="xl"
      >
        <Carousel.Slide ref={cardivRef} className="grid">
          {data.map((card, i) => (
            <FlexContent key={i} onMouseOver={() => setImage(card.img)}>
              <h4>{card.title}</h4>
              <p>{card.parrafo}</p>
              <Image
                className="img"
                src={card.img}
                alt={card.title}
                width={257}//257
                height={118}//118
              />
            </FlexContent>
          ))}
        </Carousel.Slide>
        <Carousel.Slide className="grid">
          {data.map((card, i) => (
            <FlexContent key={i} onMouseOver={() => setImage(card.img)}>
              <h4>{card.title}</h4>
              <p>{card.parrafo}</p>
              <Image
                className="img"
                src={card.img}
                alt={card.title}
                width={257}
                height={118}
              />
            </FlexContent>
          ))}
        </Carousel.Slide>
      </Carousel>
    </GridImg>
  );
};

export default Card;
