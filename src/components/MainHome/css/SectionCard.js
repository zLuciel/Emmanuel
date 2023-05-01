"use client";
import styled from "styled-components";

export const CardSectionMain = styled.section`
  max-width: 1395px;
  height: 256px;
  background: linear-gradient(270deg, #161616 0%, #0c0c0c 98.73%);
  border-width: 0px 3px 3px 3px;
  border-style: solid;
  border-color: #dbff00;
  box-shadow: -10px 10px 25px rgba(0, 0, 0, 0.93);
  border-radius: 20px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Column1 = styled.div`
  h1 {
    color: var(--primary-color);
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 100px;
  }
  p {
    max-width: 600px;
  }
`;

export const Column2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
`;
export const NumberSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  h4 {
    font-size: 4rem;
    line-height: normal;
  }
  div {
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    justify-content: center;
    span {
      font-size: 1rem;
      color: var(--primary-color);
    }
  }
`;
