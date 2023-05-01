"use client";
import styled from "styled-components";

export const SkillContainer = styled.section`
  padding: 80px 20px;
  max-width: 1400px;
  margin: auto;
  //**Responsive  */
  @media screen and (max-width: 1293px){
    max-width: 900px;
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
  }
  .grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px,  1fr));
    gap: 25px;
  }
`;
