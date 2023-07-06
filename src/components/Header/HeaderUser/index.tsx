import { Logomarca } from "../../Logomarca"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { StyledHeaderUser } from "./style"
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const HeaderUser = () => {
  const {setCartOpen, cartItems} = useContext(UserContext);
    return (
      <StyledHeaderUser>
        <Logomarca />
        <AiOutlineShoppingCart size={30} style={{ cursor: "pointer" }} onClick={()=> setCartOpen(true)}/>
        <div><span>{cartItems.length}</span></div>
      </StyledHeaderUser>
    );
}