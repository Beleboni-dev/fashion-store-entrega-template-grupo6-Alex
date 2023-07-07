import { ReactNode } from "react";
import { StyledMainLogin } from "./styles";
import loginImg from "../../../../assets/img/homemax.png"

interface IMainLoginProps {
    children: ReactNode;
}

export const MainLogin = ({ children }: IMainLoginProps) => {
    return (
        <StyledMainLogin>
        <img src={ loginImg } alt="" />
        { children }
        </StyledMainLogin>
    )
}