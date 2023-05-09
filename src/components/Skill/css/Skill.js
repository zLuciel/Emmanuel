"use client";
import styled from "styled-components";

export const SkillContainer = styled.section`
  padding: 0px 30px;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 80px;
  //**Responsive  */
  @media screen and (max-width: 1293px){
    max-width: 900px;
  }
  @media screen and (max-width: 579px){
    max-width: 500px;
  }
  & > p {
    margin-bottom: 20px;
    max-width: 700px;
  }
  h1 {
    color: var(--primary-color);
    font-size: var(--size-title-section);
    font-style: normal;
    font-weight: 400;
    line-height: 77px;
      //**responsive */
      @media screen and (max-width: 454px){
      font-size: 3rem;
      line-height: 55px;
    }
  }
  .grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px,  1fr));
    gap: 25px;
  }
`;
