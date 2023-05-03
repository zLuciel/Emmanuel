"use client";
import styled from "styled-components";

export const CardSectionMain = styled.section`
  position: relative;
  max-width: 1400px;
  height: 256px;
  background: linear-gradient(267.18deg,#161616,#080808);
  //border-width: 0px 3px 3px 3px;
  //border-style: solid;
  //border-color: #dbff00;
 // box-shadow: -10px 10px 25px rgba(0, 0, 0, 0.93);
  border-radius: 20px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  overflow: hidden;
  .absolute{
   /* background-image: url("./svg_section.svg");
    background-position: 100% 100%;
    background-repeat: no-repeat;
    border-radius: inherit;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    font-size: 20rem;*/
    background-image: url("./svg_section.svg");
    background-position: 100% 100%;
    background-repeat: no-repeat;
    border-radius: inherit;
    right: 0;
    position: absolute;
    top: 0;
    width: 55%;
    width: 720px;
    z-index: 1;
}
`;

export const Column1 = styled.div`
  z-index: 4;
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
   position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  z-index: 4;
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
