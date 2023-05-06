import styled from "styled-components";

export const ContainerHambruger = styled.div`
position: fixed;
background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(7.5px);
  z-index: 80;
`
export const HamburgerIcon = styled.div`
  position: fixed;
  top: 10px;
  right: 20px;
  display: none;
  //*reponsive*/
  .icon-hamburguer {
    color: var(--primary-color);
    font-size: 2rem;
  }
  @media screen and (max-width: 875px) {
    display: block;
    z-index: 90;
  }
`;