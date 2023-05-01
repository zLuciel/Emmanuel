"use client";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  z-index: 80;
  top: 0;
  width: 100%;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(7.5px);
`;

export const Nav = styled.nav`
  width: max-content;
  padding: 15px;
`;

export const ListNav = styled.ul`
  display: flex;
  column-gap: 120px;
  li:first-child {
    border-radius: 3px;
    background: var(--primary-color);
    color: black;
    padding: 5px 10px;
    background: #dbff00;
    box-shadow: -4px 4px 10px #000000;
    //transition: transform 0.3s ease-in-out;
    /*:hover {
      transform: translate(5px, -5px);
    }*/
  }

  li {
    font-family: "Prociono";
    font-size: 1.2rem;
    cursor: pointer;
    list-style: none;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  li:not(:first-child) {
    :hover {
      color: var(--primary-color);
    }
  }
`;
