import { styled } from "styled-components";

export const StyledFormLogin = styled.form`
    display: flex;
    flex-direction: column;

    >h2 {
        font-family: var(--Font-Secundary);
        font-size: clamp(2.5rem,3.5vw,3.75rem) ;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        margin-bottom: 1.9375rem;
    }

    >.btnContainer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.125rem;
        flex-wrap: wrap;

        >button:first-child {
            background-color: var(--Color-Black);
            width: 146px;
            height: 60px;
            color: var(--Color-White);
            font-size: 1.125rem;
            font-weight: 500;
            line-height: normal;
            letter-spacing: .135rem;
            text-transform: uppercase;
        }

        >a {
            border: 1px solid var(--Color-Black);
            width: 195px;
            height: 60px;
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 2.16px;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;

            >p {
                color: var(--Color-Black);
            }
        }

        @media screen and (max-width: 1300px) {
               justify-content: center;
          }

    }

    @media screen and (max-width: 1300px) {
               align-items: center;
          }
`