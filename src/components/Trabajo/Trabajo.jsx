import React, { useState } from "react";
import {  PortafolioContainer } from "./css/Portafolio";
import Image from "next/legacy/image";
import Card from "./Card";
import Title from "../Title/Title";
import Paisaje from "@/assets/emmanuelAbregu.jpg"
const Trabajo = () => {
  return (
    <PortafolioContainer>
     <div className="container-title">
     <Title
          parrafo="This is the main factor that sets us apart from our competition and
        allows us to deliver a specialist business consultancy service. Our team
        applies its wide-ranging experience to"
          subtitle={"Our Awards"}
          title={"Mis Proyectos Realizados"}
        /> 
     </div>
      <Card />
    </PortafolioContainer>
  );
};

export default Trabajo;
