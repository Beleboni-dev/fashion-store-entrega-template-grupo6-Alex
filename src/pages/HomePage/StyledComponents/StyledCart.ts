import { styled } from "styled-components";

export const StyledCart = styled.div`
  position: fixed;
  top: 0;
  right: 0;
 
  max-width: 512px;
  background: var(--Color-White);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 31px 42px;
   
  div:first-child {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: var(--Color-Black);
      font-size: 32px;
      font-family: var(--Font-Secundary);
      font-weight: 500;
      text-transform: uppercase;
    }
    img{
        cursor: pointer;
    }
  }
`;
