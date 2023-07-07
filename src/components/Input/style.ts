import { styled } from "styled-components";

export const StyledInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    align-items: flex-start;
    margin-bottom: 1.1875rem;

    > div {
        width: 100%;
        position: relative;
        height: fit-content;

        > input {
            width: 100%;
            height: 4.875rem;
            background-color: var(--Color-Grey);
            font-size: 1.3125rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            outline: none;
            padding: 0 1.3125rem 0 2rem;

            &::placeholder {
                text-transform: uppercase;
                font-size: clamp(17px,1vw,1.3125rem);
            }
        }

        >svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 1rem;
        }
    }

    > span {
        font-size: .875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`