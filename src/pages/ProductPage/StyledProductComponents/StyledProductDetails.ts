import { styled } from "styled-components";

export const StyledProductDetails = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  gap: 22px;

  h2 {
    color: var(--Color-Black);
    font-size: clamp(18px, 3vw, 24px);
    font-weight: 700;
  }

  span {
    color: var(--Color-Black);
    font-family: var(--Font-Secundary);
    font-size: clamp(18px, 3vw, 32px);
    font-weight: 400;
  }

  div {
    max-width:60%;
    margin-top: 23px;
    min-height: 60px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    span {
      text-align: center;
      color: var(--Color-White);
      font-family: var(--Font-Primary);
      font-size: clamp(10px, 3vw, 18px);
      font-weight: 500;
      letter-spacing: 2.16px;
      text-transform: uppercase;
    }
  }
  @media (max-width: 768px) {
    margin-top: 45px;
    margin-left: 0;
    align-items: center;
    max-width: 90%;
    div{
      flex-direction: column;
      padding: 16px;
      gap: 16px
    }
    p{
      text-align: left;
    }
  }
`;