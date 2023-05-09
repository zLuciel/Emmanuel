import styled from "styled-components";

export const ContainerForm = styled.section`
  padding: 0px 30px;
  padding-bottom: 50px;
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 641px 1fr;
  gap: 50px;
  //**Responsive  */
  @media screen and (max-width: 1293px) {
    max-width: 900px;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 579px) {
    max-width: 500px;
  }
  & > div > p {
    margin-bottom: 20px;
    //max-width: 700px;
  }
  h1 {
    color: var(--primary-color);
    font-size: var(--size-title-section);
    font-style: normal;
    font-weight: 400;
    line-height: 77px;
      //**responsive */
      @media screen and (max-width: 454px){
      font-size: 3rem;
      line-height: 55px;
    }
  }
`;

export const FlexForm = styled.form`
  & > label {
    font-family: "Bebas Neue";
    position: relative;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
  }
  input,
  textarea {
    resize: vertical;
    max-width: 100%;
    font-size: 1rem;
    margin-bottom: 30px;
    position: relative;
    background: transparent;
    outline: none;
    border: none;
    color: white;
    padding: 5px 5px;
    border-bottom: 3px solid var(--primary-color);
    ::before {
      position: absolute;
      content: " ";
      bottom: 0px;
      height: 3px;
      width: 100%;
      background: var(--primary-color);
    }
  }
`;

export const FlexPrimer = styled.div`
  display: flex;
  position: relative;
  font-family: "Bebas Neue";
  position: relative;
  font-size: 1.5rem;
  gap: 20px;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
  & > label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const ButtonForm = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  button {
    cursor: pointer;
    background: var(--primary-color);
    padding: 3px 25px;
    font-family: "Bebas Neue";
    font-size: 1.3rem;
    border: none;
  }
`;
