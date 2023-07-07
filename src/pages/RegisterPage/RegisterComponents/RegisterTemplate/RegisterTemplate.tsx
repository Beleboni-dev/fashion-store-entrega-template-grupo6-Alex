import { ReactNode } from "react"
import { Footer } from "../../../../components/Footer"
import { HeaderAdmin } from "../../../../components/Header/HeaderAdmin";
import { StyledRegisterTemplate } from "./styles";

interface IRegisterTemplateProps {
    children: ReactNode;
}

export const RegisterTemplate = ({ children }: IRegisterTemplateProps) => {
    return (
        <StyledRegisterTemplate>
            <HeaderAdmin />
            { children }
            <Footer />
        </StyledRegisterTemplate>
    );
};