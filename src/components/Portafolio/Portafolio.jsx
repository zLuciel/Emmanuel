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
import Redes from "../Redes/Redes";

const Portafolio = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const cardivRef = useRef(null);

  const imageanimeRef = useRef(null);
  const [image, setImage] = useState(gamesapi);
  const [urlWeb, setUrlWeb] = useState("");
  const [github, setUrlGithub] = useState("");

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

  const changeImage = (newImage,urlWeb,github) => {
    if (isAnimating) return;
    setUrlWeb(urlWeb)
    setUrlGithub(github)
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
    <PortafolioContainer id="portfolio" ref={containerRef}>
      <PrincipalImg>
        <Title
          titleRef={titleRef}
          descriptionRef={descriptionRef}
          parrafo="Durante mi carrera como desarrollador web 
          he tenido la oportunidad de trabajar en diversos 
          proyectos que han requerido de habilidades técnicas y creativas."
          subtitle={""}
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
            <div className="title-img">
              <Redes proyect={true} urlgit={github} urlweb={urlWeb}/>
            </div>
          </div>
        </div>
      </PrincipalImg>
      <Card cardivRef={cardivRef} changeImage={changeImage} />
    </PortafolioContainer>
  );
};

export default Portafolio;
