"use client";
import styled from "styled-components";

export const PortafolioContainer = styled.section`
  padding: 0px 30px;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 40px;
  //**Responsive  */
  @media screen and (max-width: 1293px){
    max-width: 900px;
  }
  @media screen and (max-width: 579px){
    max-width: 500px;
  }
  .container-title {
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
  }
`;
