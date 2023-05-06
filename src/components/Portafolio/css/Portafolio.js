"use client";
import styled from "styled-components";

export const PortafolioContainer = styled.section`
  padding: 0px 30px ;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: minmax(600px, 700px) 1fr;
  place-content: center;
  column-gap: 20px;
    //**Responsive  */
    @media screen and (max-width: 1293px) {
    grid-template-columns:1fr;
    grid-template-rows: max-content 1fr;
    max-width: 900px;
    row-gap:50px;
    place-content: start;
  }
  @media screen and (max-width: 675px){
    grid-template-columns: minmax(1fr, 700px);
  }
  @media screen and (max-width: 579px){
    max-width: 500px;
  }
`;

export const PrincipalImg = styled.div`
height: max-content;
  p {
    max-width: 700px;
    margin-bottom: 20px;
  }
  h1 {
    color: var(--primary-color);
    font-size: var(--size-title-section);
    font-style: normal;
    font-weight: 400;
    line-height: 77px;
  }
 .img {
    border-radius: 5px;
    object-fit: cover;
    object-position: center;
    filter: brightness(50%)
  }
  .div-img {
    position: relative;
    filter: drop-shadow(-10px 10px 10px #000000);
  }
  .title-img {
    position: absolute;
    bottom: 20px;
    margin: 0 20px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(7.5px);
    /* Note: backdrop-filter has minimal browser support */
    padding: 10px;
    border-radius: 5px;
  }
`;
