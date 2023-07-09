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
    gap: 40px;
    justify-content: space-between;
    flex-wrap: wrap;

    > li {
      width: 100%;
      max-width: 20.75rem;
      
      


      >div {
        width: 100%;
        > img {
          width: 100%;
          max-height: 23.9375rem;
          border-radius: 20px;
        }
      }

      > h3 {
        font-size: 1.1875rem;
        font-weight: 700;
      }

      > p {
        font-size: 1.125rem;
        font-weight: 400;
      }

      @media screen and (max-width: 770px) {
        height: 25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
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
    margin-top: 22px;
    color: var(--Color-Black);
    font-size: 18px;
    font-family: var(--Font-Secundary);
    font-weight: 400;
  }
  @media (max-width: 768px) {
    ul {
      flex-wrap: nowrap;
      overflow-x: scroll;
    }
  }
`;
