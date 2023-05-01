import { useEffect, useRef,useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PrincipalImg, PortafolioContainer } from "./css/Portafolio";
import Image from "next/legacy/image";
import Card from "./Card";
import Title from "../Title/Title";
import gamesapi from "@/assets/gamesapi.png"
const Portafolio = () => {
  const containerRefx = useRef(null);
  const titleRefxs = useRef(null);
  const descriptionRefx = useRef(null);
  const imageRefx = useRef(null);
  const cardiv = useRef(null);
  const [image, setImage] = useState(gamesapi);
  const [tl2, setTl2] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const children = cardiv.current.children;
    
    // Timeline para los hijos de cardiv
    const tl2 = gsap.timeline({
      paused: true,
    });

    tl2.fromTo(children, {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      delay:1,
    });

    setTl2(tl2);

    // Timeline principal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRefx.current,
        start: "top 100%",
        end: "bottom 100%",
       // scrub: true,
        onEnter: () => {
          tl2.restart();
        },
      },
    });
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRefx.current,
        start: "top 100%",
        end: "bottom 80%",
        //scrub: true,
        onEnter: () => {
          tl2.restart();
        },
      },
    });
    tl.fromTo(
      titleRefxs.current,
      {
        opacity: 0,
        x: -850,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      "-=1.5"
    ) 
    .fromTo(
        descriptionRefx.current,
        { 
          x: -550,
          opacity: 0,
        },
        {
          duration: 1,
          x: 0,
          opacity: 1,
        },
        "-=1.5"
      );
      tl3.fromTo(
        imageRefx.current,
        {
          opacity: 0,
          width: 0,
          height:379,
        },
        {
          opacity: 1,
          width: "100%",
          duration:1,
          ease: "expo.out",
          delay:2,
        },
        "-=0.8"
      )
  }, []);

  return (
    <PortafolioContainer ref={containerRefx}>
      <PrincipalImg>
        <Title
        titleRef={titleRefxs}
        descriptionRef={descriptionRefx}
          parrafo="This is the main factor that sets us apart from our competition and
        allows us to deliver a specialist business consultancy service. Our team
        applies its wide-ranging experience to"
          subtitle={"Our Awards"}
          title={"Mis Proyectos Realizados"}
        />
        <div className="div-img">
         <div ref={imageRefx}>
         <Image
            className="img"
            src={image}
            alt="Descripción de mi imagen"
            layout="responsive"
            width={691}
            height={379}
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
      <Card cardivRef={cardiv} setImage={setImage} />
    </PortafolioContainer>
  );
};

export default Portafolio;
