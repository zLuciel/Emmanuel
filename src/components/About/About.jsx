import { useEffect, useRef } from "react";
import { HoverCard, Button, Text, Group } from "@mantine/core";

function Demo({text}) {
  return (
    <Group position="center">
      <HoverCard shadow="md" width={400} >
        <HoverCard.Target>
          <p>
           {text}
          </p>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm" style={{color:"black"}}>
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
        subtitle="Our Awards"
        title="Conoceme mejor"
      />
      <CardGrid ref={CardChildren}>
        <CardDetail>
          <span>
            <h3>¿Quien soy?</h3> <BsFillChatSquareHeartFill className="icon" />
          </span>
          <Demo text=" Soy Emmanuel Abregú , un
            Full Stack Developer y Diseñador
            con un enfoque único: crear soluciones personalizadas que superen
            las expectativas. Mi pasión por la tecnología y la innovación me
            lleva a estar siempre buscando nuevos desafíos para hacer crecer mi
            trabajo al siguiente nivel. Tengo una sólida formación en diseño y
            experiencia en proyectos de diseño web y gráfico. Mi enfoque en el
            diseño me permite crear soluciones tecnológicas únicas que son
            atractivas visualmente y fáciles de usar. Si buscas alguien que
            pueda aportar valor a tu empresa con soluciones de diseño y
            tecnología efectivas, ¡hablemos!"/>
          
        </CardDetail>
        <CardDetail>
          <span>
            <h3>¿Porque yo?</h3> <BsFillChatSquareHeartFill className="icon" />
          </span>
         <Demo text="Mi pasión por la tecnología y el desarrollo de software me ha
            llevado a perfeccionar mis habilidades y a aprender continuamente
            las últimas tendencias y herramientas. Además, mi experiencia
            trabajando en proyectos desafiantes y exitosos me ha enseñado la
            importancia de la colaboración, la comunicación efectiva y la
            resolución de problemas." />
        </CardDetail>
        <CardDetail>
        <span>
            <h3>Experencia</h3> <BsFillChatSquareHeartFill className="icon" />
          </span>
          <Demo text=" He trabajado como programador Full Stack en varios proyectos en los
            que he desarrollado aplicaciones web desde cero utilizando
            diferentes lenguajes de programación, frameworks y bases de datos.
            Además, he trabajado en colaboración con otros desarrolladores,
            diseñadores y equipos de negocios para lograr los objetivos del
            proyecto de manera efectiva y eficiente." />
        </CardDetail>
      </CardGrid>
    </AboutContainer>
  );
};

export default About;
/* <span>
            <h3>Experencia</h3> <BsFillChatSquareHeartFill className="icon" />
          </span>
          <p>
            He trabajado como programador Full Stack en varios proyectos en los
            que he desarrollado aplicaciones web desde cero utilizando
            diferentes lenguajes de programación, frameworks y bases de datos.
            Además, he trabajado en colaboración con otros desarrolladores,
            diseñadores y equipos de negocios para lograr los objetivos del
            proyecto de manera efectiva y eficiente.
          </p>*/
