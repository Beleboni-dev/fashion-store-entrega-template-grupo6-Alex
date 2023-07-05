import styled, { css, keyframes } from "styled-components";

interface StyledCartProps {
  open: boolean;
}

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
const slideOutAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const StyledCart = styled.div<StyledCartProps>`
  position: absolute;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-512px")};
  width: 512px;
  background: var(--Color-White);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 31px 42px;
  height: 100vh;
  overflow-y: auto;
  animation: ${({ open }) =>
    open
      ? css`
          ${slideInAnimation} 0.3s ease-in-out
        `
      : css`
          ${slideOutAnimation} 0.3s ease-in-out
        `};

  div:nth-child(1) {
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
    img {
      width: 48px;
      height: 48px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
  li {
    width: 100%;
    height: 80px;
    display: flex;
    margin-top: 32px;
    justify-content: space-between;

    img:first-child {
      width: 80px;
      height: 80px;
    }
    img:last-child {
      width: 36px;
      cursor: pointer;
    }
   
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 29px;
      height: 100%;
      span{
        display: flex;
        justify-content: center;
        width: 16px;
        border-radius: 50%;
        background-color: var(--Color-Grey);
        color: var(--Color-Black);
        font-weight: 500;
        font-size: 14px
      }
    }
    
    span{
      color: var(--Color-Black);
      font-size: 14px;
      font-family: var(--Font-Primary);
      font-weight: 700;

    }

    p:first-child {
      color: var(--Color-Black);
      font-size: 19px;
      font-family: var(--Font-Primary);
      font-weight: 700;
    }

    p {
      color: var(--Color-Black);
      font-size: 18px;
      font-family: var(--Font-Secundary);
      font-weight: 400;
    }
  }

  div:nth-child(3) {
    position: absolute;
    bottom: 32px;
    display: flex;

    p {
      color: var(--Color-Black);
      font-size: 18px;
      font-family: var(--Font-Secundary);
      font-weight: 500;
    }
    span {
      color: var(--Color-Black);
      font-size: 18px;
      font-family: var(--Font-Secundary);
      font-weight: 400;
    }
  }
`;
