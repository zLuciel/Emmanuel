import {
  PrincipalImg,
  PortafolioContainer,
  FondoAnimate,
} from "./css/Portafolio";
import Image from "next/legacy/image";
import Card from "./Card";
import Title from "../Title/Title";
import gamesapi from "@/assets/gamesapi.png";
import { PortafolioAnimate } from "./gsap";
import { gsap } from "gsap";
import { useState, useEffect, useRef } from "react";

const Portafolio = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const cardivRef = useRef(null);

  const imageanimeRef = useRef(null);
  const [image, setImage] = useState(gamesapi);

  useEffect(() => {
    PortafolioAnimate(
      containerRef,
      titleRef,
      descriptionRef,
      imageRef,
      cardivRef
    );
  }, []);

  const [isAnimating, setIsAnimating] = useState(false);

  const changeImage = (newImage) => {
    if (isAnimating) return;

    setIsAnimating(true);

    gsap.to(imageanimeRef.current, {
      width: "100%",
      duration: 1,
      onComplete: () => {
        setImage(newImage);

        gsap.to(imageanimeRef.current, {
          width: "0%",
          duration: 1,
          onComplete: () => {
            setIsAnimating(false);
          },
        });
      },
    });
  };

  return (
    <PortafolioContainer ref={containerRef}>
      <PrincipalImg>
        <Title
          titleRef={titleRef}
          descriptionRef={descriptionRef}
          parrafo="Durante mi carrera como desarrollador web 
          he tenido la oportunidad de trabajar en diversos 
          proyectos que han requerido de habilidades técnicas y creativas."
          subtitle={"Our Awards"}
          title={"Mis Proyectos Realizados"}
        />
        <div className="div-img" style={{ position: "relative" }}>
          <FondoAnimate ref={imageanimeRef}></FondoAnimate>

          <div ref={imageRef}>
            <Image
              className="img"
              src={image}
              alt="Descripción de mi imagen"
              layout="responsive"
            />
          </div>
        </div>
      </PrincipalImg>
      <Card cardivRef={cardivRef} changeImage={changeImage} />
    </PortafolioContainer>
  );
};

export default Portafolio;

/*import { useEffect, useRef, useState } from "react";


import { PrincipalImg, PortafolioContainer } from "./css/Portafolio";
import Image from "next/legacy/image";
import Card from "./Card";
import Title from "../Title/Title";
import gamesapi from "@/assets/gamesapi.png";
import { PortafolioAnimate } from "./gsap";
  import { gsap } from "gsap";
const Portafolio = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const cardivRef = useRef(null);

  const imageanimeRef = useRef(null)
  const [image, setImage] = useState(gamesapi);

  useEffect(() => {
    PortafolioAnimate(containerRef,titleRef,descriptionRef,imageRef,cardivRef)
    
  }, []);

  const changeImage = (newImage) => {
    // Actualiza el estado de la imagen
  
    setImage(newImage);
    gsap.to(imageanimeRef, {
      width: "100%",
      duration: 1,
      onComplete: () => {
        gsap.to(imageanimeRef, {
          width: "0%",
          duration: 1,
        });
      },
    });
  };

  return (
    <PortafolioContainer ref={containerRef}>
      <PrincipalImg>
        <Title
          titleRef={titleRef}
          descriptionRef={descriptionRef}
          parrafo="Durante mi carrera como desarrollador web 
          he tenido la oportunidad de trabajar en diversos 
          proyectos que han requerido de habilidades técnicas y creativas."
          subtitle={"Our Awards"}
          title={"Mis Proyectos Realizados"}
        />
        <div className="div-img" style={{position:"relative"}}>
          <div ref={imageanimeRef} style={{position:"absolute",left:"0",background:"black"}}></div>
          <div ref={imageRef}>
            <Image
              //ref={imageanimeRef}
              className="img"
              src={image}
              alt="Descripción de mi imagen"
              layout="responsive"
              //width={691}
              //height={379}
            />
          </div>
          {/*<div className="title-img">
            <Title
              parrafo="This is the main factor that sets us apart from our competition and
        allows us to deliver a specialist business consultancy service. Our team
        applies its wide-ranging experience to"
              title={"Gogle wards"}
            />
  </div>
        </div>
      </PrincipalImg>
      <Card cardivRef={cardivRef} changeImage={changeImage} />
    </PortafolioContainer>
  );
};

export default Portafolio;*/
