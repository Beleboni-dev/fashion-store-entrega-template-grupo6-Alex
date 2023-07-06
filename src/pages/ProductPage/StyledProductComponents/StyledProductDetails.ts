import { styled } from "styled-components";

export const StyledProductDetails = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  gap: 22px;

  h2 {
    color: var(--Color-Black);
    font-size: 24px;
    font-weight: 700;
  }

  span {
    color: var(--Color-Black);
    font-family: var(--Font-Secundary);
    font-size: 32px;
    font-weight: 400;
  }

  div {
    margin-top: 23px;
    width: 60%;
    height: 60px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    span {
      color: var(--Color-White);
      font-family: var(--Font-Primary);
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 2.16px;
      text-transform: uppercase;
    }
  }
`;