import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../Title/Title";
import { SkillContainer } from "./css/Skill";
import Card from "./Card";
import Habilidades from "./data";

import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


const Skill = () => {
  const SkillRef = useRef(null)
  const CardRefChildre = useRef(null)
  const descriptionRef = useRef(null)

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const children = CardRefChildre.current.children;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: SkillRef.current,
        start: "top 80%", //50 sin scroll o 150 con
        end: "bottom 60%",
        //scrub: true,///HACE LA ANIMACION DEFRENTE SIN SCROLL
       // once: true,//SOLO UNA VEZ
      },
    });
    tl.fromTo(
      descriptionRef.current,
      { 
        x: -550,
        opacity: 0,
      },
      {
        duration: 1,
        x: 0,
        opacity: 1,
       // ease: "power3.out",
      },
      "-=1.5"
    )
    
    .fromTo(children, {
      opacity: 0,
      x: 50,
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: children,
        start: "top 150%",
        once: true,
      },
    });
  },[])

  return (
    <SkillContainer ref={SkillRef}>
      <Title
        descriptionRef={descriptionRef}
        subtitle={"ourd wards"}
        parrafo="This is the main factor that 
        sets us apart from our competition and allows us to deliver 
        a specialist business consultancy service. Our team applies
         its wide-ranging experience to"
        title={"Skill And Aptitudes"}
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
          />
        ))}
      </div>
    </SkillContainer>
  );
};

export default Skill;
