"use client";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(7.5px);
  @media screen and (max-width: 875px){
    display: none;
  }
`;

