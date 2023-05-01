import React, { useEffect,useRef } from "react";
import { CardSectionMain, Column1, Column2, NumberSection } from "./css/SectionCard";
import { gsap } from 'gsap';
const SectionCard = () => {
  const colum1 = useRef();
  const colum2 = useRef();
  useEffect(()=>{
    const tl = gsap.timeline();
    tl.set([colum1.current, colum2.current], { opacity: 0 }) // establecer opacidad inicial en 0
      .fromTo(
        [colum1.current, colum2.current],
        { x: -100 },
        {
          delay:3,
          duration: 0.5,
          opacity: 1,
          x: 0,
          stagger: {
            amount: 0.5,
          },
          ease: "expo.out",
        }
      );
  },[])
  return (
    <CardSectionMain>
      <Column1 ref={colum1}>
      <h1>Estadistica</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo autem
        dolor deserunt corrupti! Recusandae tempore cumque quas, tempora facilis
        aspernatur reprehenderit tenetur suscipit expedita mollitia sed dolore
        aut quasi!
      </p>
      </Column1>
      <Column2 ref={colum2}>
        <NumberSection>
            <h4>40k</h4>
            <div>
            <span>+</span>
            <p>Global Happy Clients</p>
            </div>
        </NumberSection>
        <NumberSection>
            <h4>30k</h4>
            <div>
            <span>+</span>
            <p>Global Happy Clients</p>
            </div>
        </NumberSection>
        <NumberSection>
            <h4>20k</h4>
            <div>
            <span>+</span>
            <p>Global Happy Clients</p>
            </div>
        </NumberSection>
        <NumberSection>
            <h4>10k</h4>
            <div>
            <span>+</span>
            <p>Global Happy Clients</p>
            </div>
        </NumberSection>
      </Column2>
    </CardSectionMain>
  );
};

export default SectionCard;
