import { styled } from "styled-components";

export const StyledFormRegister = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 16.25rem;
    padding: 0 0.5rem;
    > a {
        display: flex;
        align-items: center;
        gap: .6875rem;
        color: var(--Color-Black);
        margin-bottom: .625rem;
        > p {
            font-size: clamp(.9375rem,1vw,1.125rem);
            font-weight: 500;
            line-height: normal;
            letter-spacing: .135rem;
            text-transform: uppercase;
        }
   } 
   > h2 {
        font-family: var(--Font-Secundary);
        font-size: clamp(2.5rem,3.5vw,3.75rem) ;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        margin-bottom: 1.8125rem;
   }

   > p {
        font-size: clamp(17px,1.17vw,1.25rem);
        font-style: normal;
        font-weight: 400;
        line-height: 2rem;
        margin-bottom: 1.6875rem;
   }

   > .btnContainer {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          margin-top: .3125rem;

          > button {
               width: 209px;
               height: 60px;
               background-color: var(--Color-Black);
               color: var(--Color-White);
               font-size: 1.125rem;
               font-weight: 500;
               line-height: normal;
               letter-spacing: .135rem;
               text-transform: uppercase;
          }

          @media screen and (max-width: 1300px) {
               justify-content: center;
          }
   }

`