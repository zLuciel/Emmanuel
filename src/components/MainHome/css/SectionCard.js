"use client";
import styled from "styled-components";

export const CardSectionMain = styled.section`
  position: relative;
  max-width: 1400px;
  height: 256px;
  background: linear-gradient(267.18deg, #161616, #080808);
  //border-width: 0px 3px 3px 3px;
  //border-style: solid;
  //border-color: #dbff00;
  //box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.93);
  border-radius: 20px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  overflow: hidden;
  //**Responsive  */
  @media screen and (max-width: 1293px) {
    gap: 10px;
    max-width: 900px;
    flex-direction: column;
    height: max-content;
  }
  @media screen and (max-width: 400px){
    padding: 20px 30px;
  }
  .absolute {
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
    //**Responsive  */
    @media screen and (max-width: 1293px){
        width: 100%;
    }
  h1 {
    color: var(--primary-color);
    font-style: normal;
    font-weight: 400;
    font-size: 5rem;
    line-height: 85px;
    //**Responsive  */
    @media screen and (max-width: 414px){
      font-size: 3rem;
      line-height: 60px;
    }
  }
  p {
    max-width: 600px;
    @media screen and (max-width: 414px){
      font-size: 0.9rem;
    }
  }
`;

export const Column2 = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 45px;
  z-index: 4;
  //**Responsive  */
  @media screen and (max-width: 1293px) {
    width: 100%;
    
  }
  @media screen and (max-width: 530px) {
    gap: 10px 15px;
  }
  @media screen and (max-width: 543px) {
    grid-template-columns: 1fr;
  }
`;
export const NumberSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  h4 {
    font-size: 4rem;
    line-height: normal;
    //*Responsive*/
    @media screen and (max-width: 414px){
      font-size: 3rem;
    }
  }
  div {
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    justify-content: center;
    //**responsive */
    @media screen and (max-width: 635px) {
      gap: 0;
    }
    span {
      font-size: 1rem;
      color: var(--primary-color);
    }
    p {
      @media screen and (max-width: 414px){
      font-size: 1rem;
    }
    }
  }
`;
