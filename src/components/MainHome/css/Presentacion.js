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
`;
export const Nombre = styled.div`
  border-radius: 10px;
  grid-area: Presentacion;
  background: rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(1.5px);
  padding: 60px;
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
  }
  .stack{
    color: var(--primary-color);
    -webkit-text-stroke: 0px;
    text-shadow: -4px 4px 8px #000000;
  }
  p {
    max-width: 600px;
    text-align: center;
  }
`;

export const Imagen = styled.div`
  // background: red;
  width: 685px;
  height: 353px;
  // overflow: hidden;
  grid-area: Imagen;
  .img {
    box-shadow: rgb(0, 0, 0) -4px 4px 5px;
    border-radius: 15px;
    object-fit: cover;
  }
`;

export const CardSectionContainer = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 100%);
`;
export const RedSocial = styled.div`
display: flex;
gap: 30px;
justify-content: center;
align-items: center;
border: 0px solid red;
padding: 10px 0;
a{
  display: flex;
  font-size: 2rem;
  transform: all 0.8s ease-out;
  :hover{
    transform: all 0.8s ease-out;
    color: var(--primary-color);
    transform: scale(1.2);
  }
}

`