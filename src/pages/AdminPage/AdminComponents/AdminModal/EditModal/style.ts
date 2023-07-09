import styled from 'styled-components';



export const Overlay = styled.div`
    position: fixed;

    display: flex;
    align-items:center;
    justify-content:center;
    padding: 1rem;

    inset:0;
    width: 100vw;
    height: 100vh;

    background-color: #D9D9D960;
`

export const StyledModal = styled.div`
    background-color: var(--Color-White);
   
    width: 100%;
    max-width: 44rem;
    max-height: 100vh;
    padding: 1.5rem 2.8125rem 3.5625rem 1.75rem;
    position: relative;

    overflow-y: auto;


    border: none;
    border-radius: .3125rem;


    > form {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        flex-direction: column;

        > header {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 2.0625rem;

            > h2 {
                font-family: var(--Font-Secundary);
                font-size: 2.375rem;
                font-weight: 500;
                text-transform: uppercase;
            }
        }

        > button {
            position: absolute;
            top: 1.5rem;
            right: 1.4375rem;
        }

        > .btnContainer {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            > button {
                width: 17.625rem;
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
                    letter-spacing: 2.16px;
                    text-transform: uppercase;
                }
            }
        }
    }
`