import { useEffect, useRef, useState } from "react";


import { PrincipalImg, PortafolioContainer } from "./css/Portafolio";
import Image from "next/legacy/image";
import Card from "./Card";
import Title from "../Title/Title";
import gamesapi from "@/assets/gamesapi.png";
import { PortafolioAnimate } from "./gsap";

const Portafolio = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const cardivRef = useRef(null);
  const [image, setImage] = useState(gamesapi);

  useEffect(() => {
    PortafolioAnimate(containerRef,titleRef,descriptionRef,imageRef,cardivRef)
  }, []);

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
        <div className="div-img">
          <div ref={imageRef}>
            <Image
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
  </div>*/}
        </div>
      </PrincipalImg>
      <Card cardivRef={cardivRef} setImage={setImage} />
    </PortafolioContainer>
  );
};

export default Portafolio;
