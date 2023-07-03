import { Logomarca } from "../../Logomarca"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { StyledHeaderUser } from "./style"

export const HeaderUser = () => {
    return (
        <StyledHeaderUser>
            <Logomarca />
            <AiOutlineShoppingCart size={30}/>
        </StyledHeaderUser>
    )
}