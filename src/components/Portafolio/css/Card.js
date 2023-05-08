"use client";
import styled from "styled-components";

export const GridImg = styled.div`
  justify-self: end;
  align-self: end;
  max-width: 600px;
  .grid {
    padding-top: 5px;
    display: grid;
    grid-template-columns: repeat(2, 280px);
  
    gap:  30px 30px;
    place-content: center;
    //**responsive */
    @media screen and (max-width: 1293px){
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 675px){
      gap:  30px 10px;
      place-content: start;
    }
  @media screen and (max-width: 579px){
      grid-template-columns: 1fr;
   }
  }
  .mantine-1jkjqkp[data-active] {
    background: greenyellow;
  }
   //**Responsive  */
   @media screen and (max-width: 1293px){
    justify-self: start;
    align-self: start;
    max-width: none;
   }
`;

export const FlexContent = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 8px;
  h4 {
    color: var(--primary-color);
    font-size: 2.2rem;
  }
  .img {
    border-radius: 5px;
    object-fit: cover;
    object-position: center;
    filter: drop-shadow(-4px 4px 4px #000000);
  }
`;
