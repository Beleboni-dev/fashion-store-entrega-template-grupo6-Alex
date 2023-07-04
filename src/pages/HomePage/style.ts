import styled from "styled-components";

export const StyledHomePage = styled.main`
  width: 80%;
  margin: 0 auto;
  padding: 46px 0px 100px;

  section {
    display: flex;
    gap: 60px;
    justify-content: space-between;
    align-items: center;
    div:first-child {
      width: 65%;
      max-width: 941px;
      border-radius: 40px;
      height: 691px;
      object-fit: cover;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
    div:last-child {
      text-transform: uppercase;
      max-width: 338px;

      h1 {
        font-size: 100px;
        font-family: var(--Font-Secundary);
        font-weight: 500;
      }
      button {
        margin-top: 94px;
        width: 272px;
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
  }
`;
