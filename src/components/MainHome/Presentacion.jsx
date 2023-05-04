import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
//import Emmanuel from "@/assets/emmanuelAbregu.jpg";
import { CardSectionContainer, Nombre, PresentacionGrid } from "./css/Presentacion";
import SectionCard from "./SectionCard";
import Redes from "../Redes/Redes";

const Presentacion = () => {
  gsap.registerPlugin();
  const ref = useRef();
  const reff = useRef();
  const image = useRef();

  useEffect(() => {
     
    gsap.fromTo(
      ref.current,
      { y: 100, opacity: 0 },
      { duration: 1, y: 0, opacity: 1 ,delay:2}
    );

    gsap.fromTo(
      reff.current,
      { x: 100, opacity: 0 ,width:0},
      { duration: 1, x: 0, opacity: 1 ,delay:2,width:"1400px",ease: "expo.out"}
    );

   
    // Animación de la imagen
    gsap.fromTo(
      image.current,
      { width: 0,height:353},
      { duration: 1,delay:2.5, width: 685, ease: "expo.out" }
    );

  }, []);

  return (
    <PresentacionGrid >
      <Nombre ref={ref}>
        <h1>Emmanuel </h1>
        <h1 className="stack">Full Stack</h1>
        <p  >
          Tengo conocimientos solidos en distintos lenguajes, con habilidadeS
          que me hacen destacar del resto. Ademas, de la programación tengo
          conocimientos en el area de diseño web.
        </p>
        <Redes/>
      </Nombre>
      {<CardSectionContainer >
       <SectionCard/>
      </CardSectionContainer>}
      
    </PresentacionGrid>
  );
};

export default Presentacion;
