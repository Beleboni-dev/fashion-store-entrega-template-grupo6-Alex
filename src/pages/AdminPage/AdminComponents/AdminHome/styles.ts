import { styled } from "styled-components";

export const StyledAdminHome = styled.div`
    > h1 {
        font-family: var(--Font-Secundary);
        font-size: clamp(2.1875rem,3.5vw,3.75rem);
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 1.8125rem;
    }
    > p {
        font-size: clamp(1.125rem,1.1vw,1.25rem);
        font-weight: 400;
        line-height: 2rem;
    }
`