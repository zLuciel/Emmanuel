import React, { useEffect,useRef } from "react";
import { PortafolioContainer } from "./css/Portafolio";
import Card from "./Card";
import Title from "../Title/Title";
import { ExperienciaAnimate } from "./gsap";
const Trabajo = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardivRef = useRef(null);
  const subtitleRef = useRef(null);
  const containerExperienciaRef = useRef(null);

  useEffect(()=>{
    ExperienciaAnimate(titleRef,descriptionRef,cardivRef,subtitleRef,containerExperienciaRef)
  },[])

  return (
    <PortafolioContainer ref={containerExperienciaRef}>
      <div className="container-title">
        <Title
          titleRef={titleRef}
          descriptionRef={descriptionRef}
          parrafo="Con experiencia en proyectos de 
          desarrollo web y una pasantía en una organización 
          comunitaria, he adquirido habilidades para trabajar 
          en equipo y cumplir con altos estándares de calidad en 
          cada proyecto."
          subtitle={"Our Awards"}
          title={"Experiencia realizadas"}
        />
      </div>
      <Card  cardivRef={cardivRef} />
    </PortafolioContainer>
  );
};

export default Trabajo;
