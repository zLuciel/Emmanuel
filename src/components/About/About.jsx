import { useEffect, useRef } from "react";
import { HoverCard, Button, Text, Group } from "@mantine/core";

function Demo({ text }) {
  return (
    <Group position="center">
      <HoverCard shadow="md" width={400}>
        <HoverCard.Target>
          <p>{text}</p>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm" style={{ color: "black" }}>
            {text}
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

import { AboutContainer, CardDetail, CardGrid } from "./css/About";
import Title from "../Title/Title";
import { BsFillChatSquareHeartFill } from "react-icons/bs";
import { AboutAnimate } from "./gsap";

const About = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const CardChildren = useRef(null);
  //const imageRef = useRef(null);

  useEffect(() => {
    AboutAnimate(containerRef, titleRef, descriptionRef, CardChildren);
  }, []);

  return (
    <AboutContainer id="about" ref={containerRef}>
      <Title
        descriptionRef={descriptionRef}
        titleRef={titleRef}
        subtitle=""
        title="Conoceme mejor"
      />
      <CardGrid ref={CardChildren}>
        <CardDetail>
          <span>
            <h3>¿Quien soy?</h3> <BsFillChatSquareHeartFill className="icon" />
          </span>
          <Demo text="Soy un Full Stack Developer y Diseñador comprometido con soluciones personalizadas que sorprenden. Mi pasión por la tecnología y la creatividad me impulsa a superar desafíos y elevar proyectos al siguiente nivel. Mi enfoque en el diseño crea soluciones funcionales y visualmente atractivas. ¡Hablemos y potenciemos tu proyecto con innovación y diseño efectivo!" />
        </CardDetail>
        <CardDetail>
          <span>
            <h3>¿Porque yo?</h3> <BsFillChatSquareHeartFill className="icon" />
          </span>
          <Demo
            text="Mi pasión por la tecnología y el desarrollo de software me ha
            llevado a perfeccionar mis habilidades y a aprender continuamente
            las últimas tendencias y herramientas. Además, mi experiencia
            trabajando en proyectos desafiantes y exitosos me ha enseñado la
            importancia de la colaboración, la comunicación efectiva y la
            resolución de problemas."
          />
        </CardDetail>
        <CardDetail>
          <span>
            <h3>Experencia</h3> <BsFillChatSquareHeartFill className="icon" />
          </span>
          <Demo
            text=" He trabajado como programador Full Stack en varios proyectos en los
            que he desarrollado aplicaciones web desde cero utilizando
            diferentes lenguajes de programación, frameworks y bases de datos.
            Además, he trabajado en colaboración con otros desarrolladores,
            diseñadores y equipos de negocios para lograr los objetivos del
            proyecto de manera efectiva y eficiente."
          />
        </CardDetail>
      </CardGrid>
    </AboutContainer>
  );
};

export default About;

