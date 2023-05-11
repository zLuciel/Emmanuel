import { useEffect, useRef } from "react";
//import Emmanuel from "@/assets/emmanuelAbregu.jpg";
import {
  CardSectionContainer,
  Nombre,
  PresentacionGrid,
} from "./css/Presentacion";
import SectionCard from "./SectionCard";
import Redes from "../Redes/Redes";
import { MainAnimate } from "./gsap";

const Presentacion = () => {
  const TextCenter = useRef();
  useEffect(() => {
    MainAnimate(TextCenter);
  }, []);

  return (
    <PresentacionGrid id="home">
      <Nombre ref={TextCenter}>
        <h1>Desarrolador</h1>
        <h1 className="stack">Full Stack</h1>
        <p>
          Mi objetivo es no sólo satisfacer las necesidades del cliente, sino
          superar sus expectativas. Con una sólida formación técnica y una
          amplia experiencia en proyectos de desarrollo web
        </p>
        <Redes />
      </Nombre>
      {
        <CardSectionContainer>
          <SectionCard />
        </CardSectionContainer>
      }
    </PresentacionGrid>
  );
};

export default Presentacion;
