import { styled } from "styled-components";

export const StyledAdminProduct = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-bottom: 6.25rem;
    
    > section {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4.375rem;

        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;

            > h1 {
                font-family: var(--Font-Secundary);
                font-size: clamp(2.5rem,3.5vw,3.75rem);
                font-weight: 500;
                text-transform: uppercase;
            }

            > P {
                font-size: 1.25rem;
                font-weight: 400;
                line-height: 2rem; 
            }
        }

        > button {
            width: clamp(15.625rem,16.3vw,17.625rem);
            height: 3.75rem;
            background-color: var(--Color-Black);
            color: var(--Color-White);
            display: flex;
            align-items: center;
            gap: .9375rem;
            justify-content: center;

            > p {
                font-size: 1.125rem;
                font-weight: 500;
                letter-spacing: .135rem;
                text-transform: uppercase;
            }
        }

        @media screen and (max-width: 700px) {
            flex-direction: column;
            align-items: center;
            gap: 2rem;

            > div {
                align-items: center;
            }

        }
    }
`