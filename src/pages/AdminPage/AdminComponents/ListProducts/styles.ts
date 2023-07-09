import { styled } from "styled-components";

export const StyledListProducts = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 3.125rem;

    @media screen and (max-width: 700px) {
        justify-content: center;
    }
`