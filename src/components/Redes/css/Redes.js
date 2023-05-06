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
    font-size: 2.5rem;
    transition: all 0.3s ease-in-out;
    :hover {
      color: var(--primary-color);
      transform: scale(1.2);
    }
  }
`;