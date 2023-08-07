import React from "react";
import Image from "next/legacy/image";
import { Carousel } from "@mantine/carousel";
import { FlexContent, GridImg } from "./css/Card";
import gamesapi from "@/assets/gamesapi.png";
import rickapi from "@/assets/rickapi.png";
import eventoweb from "@/assets/eventoWeb.png";
import Ong from "@/assets/Ong.png";
const data = [
  {
    title: "Api Gamer",
    parrafo: "Pagina web de informacion de videojuegos",
    img: gamesapi,
    github:"https://github.com/zLuciel/PI-Videogames-main",
    linkWeb:
      "https://www.linkedin.com/posts/emmanuel-abregu-ness_bueno-aprob%C3%A9-el-pi-de-forma-directa-aqu%C3%AD-activity-7041557059816845312-USUL?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Rick and Morty",
    parrafo: "Informacion de todos los personajes de la serie",
    img: rickapi,
    github:"https://github.com/zLuciel/ricky_and_morty",
    linkWeb: "https://ricky-and-morty-zluciel.vercel.app",
  },
  {
    title: "AES",
    parrafo: "Pasantia con informacion y blog sobre la salud sanitaria",
    img: Ong,
    github:"https://github.com/darkfox57/AES",
    linkWeb: "https://www.youtube.com/watch?v=iLCwWOFfPMI",
  },
  {
    title: "Evento",
    parrafo: "Creacion de Diseño Visual administrable",
    img: eventoweb,
    github:"https://github.com/zLuciel/NTF",
    linkWeb: "https://ntf-ashy.vercel.app",
  },
];

const Card = ({ changeImage, cardivRef }) => {
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
            <FlexContent
              key={i}
              onClick={() => changeImage(card.img,card.linkWeb,card.github)}
            >
              <h4>{card.title}</h4>
              <p>{card.parrafo}</p>

              <Image
                className="img"
                src={card.img}
                alt={card.title}
                width={257} //257
                height={118} //118
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
