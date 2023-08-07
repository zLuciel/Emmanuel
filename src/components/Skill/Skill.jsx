import { useEffect, useRef } from "react";
import Title from "../Title/Title";
import { SkillContainer } from "./css/Skill";
import Card from "./Card";
import Habilidades from "./data";
import { SkillAnimate } from "./gsap";

const Skill = () => {
  const SkillRef = useRef(null)
  const CardRefChildre = useRef(null)
  const descriptionRef = useRef(null)

  useEffect(()=>{
   SkillAnimate(SkillRef,CardRefChildre,descriptionRef)
  },[])

  return (
    <SkillContainer id="skill" ref={SkillRef}>
      <Title
        descriptionRef={descriptionRef}
        subtitle={""}
        parrafo=" Estoy familiarizado con herramientas y 
        tecnologías modernas para el desarrollo y estoy 
        comprometido a seguir aprendiendo y mejorando mis
         habilidades continuamente."
        title={"Skill y Aptitudes"}
      />
      {/*<button>Skill</button>
      <button>Aptitud</button>*/}
      <div className="grid" ref={CardRefChildre} >
        {Habilidades.map((skill, i) => (
          <Card
            key={i}
            icon={skill.icon}
            title={skill.name}
            color={skill.color}
            info={skill.info}
          />
        ))}
      </div>
    </SkillContainer>
  );
};

export default Skill;
