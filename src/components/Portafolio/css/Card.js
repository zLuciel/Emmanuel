"use client";
import styled from "styled-components";

export const GridImg = styled.div`
  justify-self: end;
  align-self: end;
  .grid {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap:  30px 30px;
    place-content: center;
  }
  .mantine-1jkjqkp[data-active] {
    background: greenyellow;
  }
   //**Responsive  */
   @media screen and (max-width: 1293px){
    justify-self: center;
    align-self: start;
   }
`;

export const FlexContent = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  h4 {
    color: var(--primary-color);
    font-size: 2.2rem;
  }
  p {
    max-width: 200px;
  }
  .img {
    border-radius: 5px;
    object-fit: cover;
    object-position: center;
    //filter: drop-shadow(-8px 8px 10px #000000);
  }
`;
