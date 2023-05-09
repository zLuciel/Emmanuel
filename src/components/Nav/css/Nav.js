import styled from "styled-components";


export const NavContainer = styled.nav`
 display: ${({tipo})=> !tipo ? "none" : "flex"};
  width: max-content;
  padding: 15px;
  @media screen and (max-width: 875px){
    width: 100%;
    height: 100vh;
     justify-content: center;
     align-self: center;
   }
`;

export const ListNav = styled.ul`
   display: flex;
   gap: ${({hambur})=> hambur ? "60px 0px" : "0px 120px"};
   flex-direction: ${({hambur})=> hambur ? "column" : "row"};
   @media screen and (max-width: 875px){
    justify-content: center;
    align-items: center;
   }
  li:first-child {
    border-radius: 3px;
    background: var(--primary-color);
    color: black;
    padding: 5px 10px;
    background: #dbff00;
    box-shadow: -4px 4px 10px #000000;
    transition: transform 0.3s ease-in-out;
    :hover {
      transform: translate(5px, -5px);
    }
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


