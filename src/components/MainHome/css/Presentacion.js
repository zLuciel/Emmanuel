"use client";
import styled from "styled-components";

export const PresentacionGrid = styled.div`
  display: grid;
  grid-template-areas:
    "Presentacion Imagen"
    "section section";
  place-content: center;
  height: calc(100vh - 77px);
  gap: 20px 56px;
`;
export const Nombre = styled.div`
  grid-area: Presentacion;
  h1 {
    text-align: center;
    font-size: 9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140px;
    span {
      color: var(--primary-color);
    }
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
  grid-area: section;
`;
