import { styled } from "styled-components";

export const StyledTextAreaAdmin = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    align-items: flex-start;
    margin-bottom: 1.1875rem;

    > textarea {
        width: 100%;
        height: 9.375rem;
        background-color: var(--Color-Grey);
        font-size: 1.3125rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        outline: none;
        padding: 1.3125rem 1.3125rem 1.3125rem 2rem;
        resize: none;
        border: none;

        &::placeholder {
            text-transform: uppercase;
            font-size: clamp(17px,1vw,1.3125rem);
        }
    }

    

`