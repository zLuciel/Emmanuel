import React from "react";
import Image from "next/legacy/image";
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
    img: gamesapi,
  },

];

const Card = ({ changeImage,cardivRef }) => {

  return (
    <GridImg>
      <Carousel 
        //maw={560}
        align="center"
        mx="auto"
        //height={420}
        withIndicators
        withControls={false}
        slideGap="xl"
      >
        <Carousel.Slide ref={cardivRef} className="grid">
          {data.map((card, i) => (
            <FlexContent key={i} onClick={() => changeImage(card.img)}>
              <h4>{card.title}</h4>
              <p>{card.parrafo}</p>
              
              <Image
                className="img"
                src={card.img}
                alt={card.title}
                width={257}//257
                height={118}//118
                layout="responsive"
                objectFit="cover"
              />
              
            </FlexContent>
          ))}
        </Carousel.Slide>
        <Carousel.Slide className="grid">
          {data.map((card, i) => (
            <FlexContent key={i} onClick={() => changeImage(card.img)}>
              <h4>{card.title}</h4>
              <p>{card.parrafo}</p>
              <Image
                className="img"
                src={card.img}
                alt={card.title}
                width={257}
                height={118}
                layout="responsive"
                objectFit="cover"
              />
            </FlexContent>
          ))}
        </Carousel.Slide>
      </Carousel>
    </GridImg>
  );
};

export default Card;
