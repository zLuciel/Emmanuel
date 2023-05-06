import React, { useState } from "react";
import { PortafolioContainer } from "./css/Portafolio";
import Image from "next/legacy/image";
import Card from "./Card";
import Title from "../Title/Title";
import Paisaje from "@/assets/emmanuelAbregu.jpg";
const Trabajo = () => {
  return (
    <PortafolioContainer>
      <div className="container-title">
        <Title
          parrafo="Con experiencia en proyectos de 
          desarrollo web y una pasantía en una organización 
          comunitaria, he adquirido habilidades para trabajar 
          en equipo y cumplir con altos estándares de calidad en 
          cada proyecto."
          subtitle={"Our Awards"}
          title={"Experencia realizadas"}
        />
      </div>
      <Card />
    </PortafolioContainer>
  );
};

export default Trabajo;
