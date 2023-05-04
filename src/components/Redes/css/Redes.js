import styled from "styled-components";

export const RedSocial = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  border: 0px solid red;
  padding: 10px 0;
  a {
    display: flex;
    font-size: 2rem;
    transform: all 0.8s ease-out;
    :hover {
      transform: all 0.8s ease-out;
      color: var(--primary-color);
      transform: scale(1.2);
    }
  }
`;