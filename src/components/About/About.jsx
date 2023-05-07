
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AboutContainer, CardDetail, CardGrid } from "./css/About";
import Title from "../Title/Title";
import { BsFillChatSquareHeartFill } from 'react-icons/bs';

const About = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const CardChildren = useRef(null);
  //const imageRef = useRef(null);

  useEffect(() => {
    const children = CardChildren.current.children;
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      [titleRef.current, descriptionRef.current],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1,scrollTrigger: {
        trigger: containerRef.current,
        start: "center bottom",
        once: true
      } }
    );

    gsap.fromTo(
      children,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true
        }
      }
    );
  }, []);
  

  return (
    <AboutContainer ref={containerRef}>
      <Title descriptionRef={descriptionRef} titleRef={titleRef} subtitle="Our Awards" title="Conoceme mejor" />
      <CardGrid ref={CardChildren}>
        <CardDetail>
          <span><h3>¿Quien soy?</h3> <BsFillChatSquareHeartFill className="icon"/></span>
          <p>
            Programador Full Stack con habilidades sólidas en diferentes
            lenguajes de programación y un enfoque en la creación de
            aplicaciones web escalables, eficientes y atractivas. También tengo
            habilidades en diseño web que me permiten crear interfaces de
            usuario intuitivas y atractivas.
          </p>
        </CardDetail>
        <CardDetail>
        <span><h3>¿Porque yo?</h3> <BsFillChatSquareHeartFill className="icon"/></span>
          <p>
            Mi pasión por la tecnología y el desarrollo de software me ha
            llevado a perfeccionar mis habilidades y a aprender continuamente
            las últimas tendencias y herramientas. Además, mi experiencia
            trabajando en proyectos desafiantes y exitosos me ha enseñado la
            importancia de la colaboración, la comunicación efectiva y la
            resolución de problemas.
          </p>
        </CardDetail>
        <CardDetail>
        <span><h3>Experencia</h3> <BsFillChatSquareHeartFill className="icon"/></span>
          <p>
            He trabajado como programador Full Stack en varios proyectos en los
            que he desarrollado aplicaciones web desde cero utilizando
            diferentes lenguajes de programación, frameworks y bases de datos.
            Además, he trabajado en colaboración con otros desarrolladores,
            diseñadores y equipos de negocios para lograr los objetivos del
            proyecto de manera efectiva y eficiente.
          </p>
        </CardDetail>
      </CardGrid>
    </AboutContainer>
  );
};

export default About;
