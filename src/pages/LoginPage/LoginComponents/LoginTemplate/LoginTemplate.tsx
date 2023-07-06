import { ReactNode } from "react";
import { HeaderAdmin } from "../../../../components/Header/HeaderAdmin";
import { Footer } from "../../../../components/Footer";
import { StyledLoginTemplate } from "./styles";

interface ILoginTemplateProps {
    children: ReactNode;
}

export const LoginTemplate = ({ children }: ILoginTemplateProps) => {
    return (
        <StyledLoginTemplate>
            <HeaderAdmin />
                { children }
            <Footer />
        </StyledLoginTemplate>
    )
}