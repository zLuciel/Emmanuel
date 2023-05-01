"use client";
import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 322px;
  min-width: 260px;
  height: 55px;
  background: #0d1116;
  border: 1px solid #00000000;
  box-shadow: rgb(0 0 0) -4px 4px 8px 1px;
    // rgb(0, 0, 0) 6px 6px 20px inset, #000000 -6px -6px 20px inset
  font-size: 1.8rem;

  .ico {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: var(--primary-color);
    }
  }
`;

export const LeftTextIcon = styled.div`
 
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  .text-span {
    h5 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
  span:first-child{
    display: flex;
    justify-content: center;
    align-items: center;
  color: ${({color})=> color};
 }
`;
