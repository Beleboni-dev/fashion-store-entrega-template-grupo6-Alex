import { styled } from "styled-components";

export const StyledInputAdmin = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    align-items: flex-start;
    margin-bottom: 1.1875rem;

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

    

`