import { styled } from "styled-components";

export const StyledAdminPage =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100vw;
    min-height: 100vh;
    
    > main {
        flex-grow: 1;
        flex-shrink: 0;
        width: 100%;
        max-width: 90.5rem;
        padding: 2.875rem 1rem 0;
        margin: 0 auto;

        > nav {
            margin-bottom: 1.875rem;
            display: flex;
            align-items: center;
            gap: 2.125rem;
            justify-content: space-between;

            > div {
                display: flex;
                align-items: center;
                gap: 2.125rem;
                > button {
                    font-family: var(--Font-Secundary);
                    font-size: 1.25rem;
                    font-weight: 500;
                    text-transform: uppercase;
                }
            }

            > button {
                display: flex;
                align-items: center;
                gap: .5rem;

                > p {
                    font-family: var(--Font-Secundary);
                    font-size: 1rem;
                    font-weight: 500;
                    text-transform: uppercase;
                }
            }

            @media screen and (max-width: 300px) {
                flex-direction: column-reverse;
                align-items: flex-end;

                > div {
                    width: 100%;
                }
            }
        }
    }
`