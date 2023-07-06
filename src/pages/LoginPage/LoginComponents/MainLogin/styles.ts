import { styled } from "styled-components";

export const StyledMainLogin = styled.main`
    display: flex;
    align-items: center;
    gap: 3.75rem;
    max-width: 90.625rem;
    margin: 1rem auto;
    padding: 0 1rem;
    width: 100%;
    flex-wrap: wrap;

    > img {
        width: 100%;
        max-width: 51.25rem;
        max-height: 43.1875rem;
        flex: 1;
    }

    > form {
        width: 100%;
        max-width: 35.5rem;
        flex: 1;
    }
`