import { Footer } from "../../components/Footer"
import { HeaderUser } from "../../components/Header/HeaderUser"
import { StyledHomePage } from "./style"

export const HomePage = () => {
    return (
        <StyledHomePage>
            <HeaderUser />
            <Footer />
        </StyledHomePage>
    )
}