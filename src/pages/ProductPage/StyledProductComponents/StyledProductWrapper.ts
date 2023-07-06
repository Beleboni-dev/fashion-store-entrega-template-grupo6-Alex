import { styled } from "styled-components";

export const StyledProductWrapper = styled.div`
    margin-top: 58px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        max-width: 50%;
    }

@media(max-width: 768px){
    flex-direction: column;
    text-align: center;
    img{
        max-width: 100%;
    }
}
`;