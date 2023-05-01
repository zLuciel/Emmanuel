"use client";
import styled from "styled-components";

export const PortafolioContainer = styled.section`
  padding: 0px 20px 50px 20px;
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: minmax(600px, 700px) 1fr;
  place-content: center;
  column-gap: 20px;
`;

export const PrincipalImg = styled.div`
  p {
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
