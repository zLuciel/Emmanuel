"use client";
import styled from "styled-components";

export const GridImg = styled.div`
  .grid {
    padding: 30px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px,  1fr));
    gap:  30px 50px;
  }
  .mantine-1jkjqkp[data-active] {
    background: greenyellow;
  }
`;

export const FlexContent = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 5px;
  h1{
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
  }
  h4 {
    color: var(--primary-color);
    font-size: 2.2rem;
  }
  .img {
    border-radius: 5px;
    object-fit: cover;
    object-position: center;
    filter: drop-shadow(-8px 8px 10px #000000);
  }
`;
