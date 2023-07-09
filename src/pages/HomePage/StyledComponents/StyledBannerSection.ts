import { styled } from "styled-components";

export const StyledBannerSection = styled.section`
  display: flex;
  gap: 60px;
  align-items: center;
  flex-wrap: wrap;

  div:first-child {
    width: 100%;
    max-width: 941px;
    max-height: 691px;
    overflow: hidden;
    img {
      width: 100%;
      max-height: 100%;
    }
  }
  div:last-child {
    text-transform: uppercase;
    max-width: 338px;

    h1 {
      font-size: clamp(40px, 6vw, 100px);
      font-family: var(--Font-Secundary);
      font-weight: 500;
    }
    button {
      margin-top: 94px;
      width: clamp(240px, 100%, 272px);
      height: 60px;
      background-color: var(--Color-Black);
      color: var(--Color-White);
      color: var(--white, #fff);
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 2.16px;
      text-transform: uppercase;
    }
  }
  @media (max-width: 1488px) {
    div:last-child {
      min-width: 90%;
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    text-align: center;

    button {
      min-width: 80%;
    }
  }
`;
