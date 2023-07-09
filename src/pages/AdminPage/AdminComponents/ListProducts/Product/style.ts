import { styled } from "styled-components";

export const StyledProductCard = styled.li`
    width: clamp(28rem,37vw,40rem);
    height: fit-content;
    display: flex;
    justify-content: space-between;

    > .productContainer {
        display: flex;
        align-items: center;
        gap: 1.8125rem;

        > img {
            border-radius: 20px;
            max-width: 11.25rem;
            max-height: 13.125rem;
        }

        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.375rem;

            > h3 {
                font-size: 1.1875rem;
                font-weight: 700;
            }

            > p {
                font-size: 1.125rem;
                font-weight: 400;
            }
        }

    }

    > .btnContainer {
        display: flex;
        align-items: center;
        gap: 15px;
        justify-content: center;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        width: fit-content;
        max-width: 15rem;
        gap: 2rem;

        > .productContainer {
            flex-direction: column;
            align-items: center;

            > div {
                align-items: center;
            }
        }


    }
`