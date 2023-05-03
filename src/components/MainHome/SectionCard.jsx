import React, { useEffect, useRef } from "react";
import {
  CardSectionMain,
  Column1,
  Column2,
  NumberSection,
} from "./css/SectionCard";
import { gsap } from "gsap";
import Image from "next/image";
import SvgSection from "../../assets/svg_section.svg";

const SectionCard = () => {
  const colum1 = useRef();
  const colum2 = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.set([colum1.current, colum2.current], { opacity: 0 }) // establecer opacidad inicial en 0
      .fromTo(
        [colum1.current, colum2.current],
        { x: -100 },
        {
          delay: 3,
          duration: 0.5,
          opacity: 1,
          x: 0,
          stagger: {
            amount: 0.5,
          },
          ease: "expo.out",
        }
      );
  }, []);
  return (
    <CardSectionMain>
      {
          <div className="absolute">
            <svg
              viewBox="0 0 820 288"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.00037 285C18.9467 220.939 89.8464 108.976 245.875 173.605C440.911 254.391 462.99 197.69 506.74 137.979C550.49 78.2669 587.289 21.5658 708.727 89.8078C805.877 144.401 820.896 54.6833 816.262 3"
                stroke="#2222223b"
                stroke-width="5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        }
      <Column1 ref={colum1}>
        <h1>Estadistica</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo
          autem dolor deserunt corrupti! Recusandae tempore cumque quas, tempora
          facilis aspernatur reprehenderit tenetur suscipit expedita mollitia
          sed dolore aut quasi!
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
