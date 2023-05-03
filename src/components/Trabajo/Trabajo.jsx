import React, { useState } from "react";
import { PrincipalImg, PortafolioContainer } from "./css/Portafolio";
import Image from "next/legacy/image";
import Card from "./Card";
import Title from "../Title/Title";
import Paisaje from "@/assets/emmanuelAbregu.jpg"
const Trabajo = () => {
  return (
    <PortafolioContainer>
      <PrincipalImg>
        <Title
          parrafo="This is the main factor that sets us apart from our competition and
        allows us to deliver a specialist business consultancy service. Our team
        applies its wide-ranging experience to"
          subtitle={"Our Awards"}
          title={"Mis Proyectos Realizados"}
        />
         <div className="xd">
         <Image
            className="img"
            src={Paisaje}
            alt="Descripción de mi imagen"
            width={691}
            height={350}
            layout="responsive"
          />
         </div>
      </PrincipalImg>
      <Card />
    </PortafolioContainer>
  );
};

export default Trabajo;
