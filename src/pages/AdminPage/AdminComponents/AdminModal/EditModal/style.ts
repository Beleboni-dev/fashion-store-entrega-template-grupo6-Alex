import styled from "styled-components"


export const Overlay = styled.div`
    position: fixed;

    display: flex;
    align-items:center;
    justify-content:center;
 
    inset:0;
    width: 100%;
    height: 100vh;

    background-color: rgb(0, 0, 0, 0.7);

    z-index: 1000;
`

export const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--Color-White);
   
    width: clamp(9.375rem, 95%, 25rem);

    border: none;
    border-radius: .3125rem;
    
`