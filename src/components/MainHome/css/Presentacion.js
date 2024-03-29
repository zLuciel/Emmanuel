"use client";
import styled from "styled-components";

export const PresentacionGrid = styled.div`
  margin-bottom: 145px;
  position: relative;
  display: grid;
  grid-template-areas: "Presentacion "; //Imagen
  /* "section section";*/
  place-content: center;
  height: calc(100vh - 77px);
  gap: 20px 56px;
  //**Responsive */
  @media screen and (max-width: 875px){
    min-height: 100vh ;
  }
`;
export const Nombre = styled.div`
  max-width: 800px;
  padding: 0 20px;
  grid-area: Presentacion;
  /* border-radius: 10px;
  background: rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(1.5px);
  padding: 60px;*/
  h1 {
    text-align: center;
    font-size: 9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140px;
    text-align: center;
    color: transparent;
    //text-stroke: 2px black;
    -webkit-text-stroke: 2px white;
     //**Responsive */
  @media screen and (max-width: 712px){
    font-size: 8rem;
  }
  @media screen and (max-width: 629px){
    font-size: 6rem;
    line-height: 100px;
  }
  @media screen and (max-width: 484px){
    font-size: 5rem;
    line-height: 80px;
  }
  @media screen and (max-width: 375px){
    font-size: 3.5rem;
    line-height: 60px;
  }
  }
  .stack {
    color: var(--primary-color);
    -webkit-text-stroke: 0px;
    text-shadow: -4px 4px 8px #000000;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.3;
    color: white;
    text-align: center;
    //padding: 10px 30px;
    //**Responsive */
    @media screen and (max-width: 375px){
    font-size: 1rem;  
  }
  }
`;


export const CardSectionContainer = styled.div`
  padding: 0 20px;
 // display: flex;
  //align-items: center;
 // justify-content: center;
  width: 100%;
  max-width: 1400px;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 100%);
  z-index: 4;
    //**Responsive */
    @media screen and (max-width: 1293px){
      max-width: 900px;
  }
  @media screen and (max-width: 543px){
    max-width: 500px;
  }
`;

