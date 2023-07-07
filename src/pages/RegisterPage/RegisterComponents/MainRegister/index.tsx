import { ReactNode } from "react";
import { StyledMainRegister } from "./style";
import registreImg from "../../../../assets/img/imgRegister.png"

interface IMainRegisterProps {
    children: ReactNode;
}

export const MainRegister = ({ children }: IMainRegisterProps) => {
    return (
        <StyledMainRegister>
            <img src={registreImg} alt="Foto com duas modelos vestindo roupas FashionStore de cor clara na frente de uma parede branca" />
            { children } 
        </StyledMainRegister>
    )
}