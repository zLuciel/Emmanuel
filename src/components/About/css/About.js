"use client";
import styled from "styled-components";

export const AboutContainer = styled.section`
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  padding: 50px 30px 0 ;
  margin-bottom: 80px;
  padding-top: 170px;
  h1 {
    color: var(--primary-color);
    font-size: var(--size-title-section);
    font-style: normal;
    font-weight: 400;
    line-height: 77px;
    margin-bottom: 20px;
    //**responsive */
    @media screen and (max-width: 454px){
      font-size: 3rem;
      line-height: 77px;
    }
  }
  //**Responsive */
  @media screen and (max-width: 1293px) {
    padding-top: 320px;
    max-width: 900px;
  }
  @media screen and (max-width: 579px){
   
    max-width: 500px;
  }
  @media screen and (max-width: 543px){
    padding-top: 530px;
    max-width: 500px;
  }
  @media screen and (max-width: 454px){
    padding-top: 450px;
  }
`;
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  place-content: center;
 //**responsive */
  @media screen and (max-width: 1293px) {
    grid-template-columns: 1fr ;
    row-gap: 40px;
  }
`;
export const CardDetail = styled.div`
  span {
    display: flex;
    column-gap: 20px;
    align-items: center;
    margin-bottom: 10px;
    .icon{
      color: var(--primary-color);
      font-size: 2rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
