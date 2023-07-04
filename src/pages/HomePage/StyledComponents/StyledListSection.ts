import { styled } from "styled-components";

export const StyledListSection = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--Color-Black);
    font-size: 60px;
    font-family: var(--Font-Secundary);
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 100px;
  }
  ul {
    margin-top: 58px;
    display: flex;
    gap:40px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  h3 {
    margin-top: 45px;
    color: var(--Color-Black);
    font-size: 19px;
    font-family: var(--Font-Primary);
    font-weight: 700;
    text-transform: capitalize;
  }
  p {
    margin-top:22px;
    color: var(--Color-Black);
    font-size: 18px;
    font-family: var(--Font-Secundary);
    font-weight: 400;
  }
`;
