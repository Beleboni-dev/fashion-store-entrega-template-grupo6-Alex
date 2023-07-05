import { StyledCart } from "../StyledComponents/StyledCart";
import closeIcon from "../../../assets/img/close-icon.svg";
import removeIcon from "../../../assets/img/remove-icon.svg";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const CartComponent = () => {
  const {cartItems, setCartOpen, isCartOpen, totalValue, removeFromCart} = useContext(UserContext);

  return (
    <StyledCart open={isCartOpen}>
      <div>
        <h2>Carrinho</h2>
        <img
          src={closeIcon}
          alt="close-icon"
          onClick={() => setCartOpen(!isCartOpen)}
        />
      </div>
      {cartItems.length > 0 ? (
<>
<ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <span>{item.quantity}</span>
                <p>R$ {item.price.toFixed(2).replace(".", ",")}</p>
              </div>
            </div>
            <img src={removeIcon} alt="remove-icon"  onClick={() => removeFromCart(item.id)}/>
          </li>
        ))}
      </ul>
      <div>
        <p>
          <span>TOTAL</span> R$ {totalValue.toFixed(2).replace(".", ",")}
        </p>
      </div>
</>
       ) : <span>Adicione items ao carrinho</span>
      }
    </StyledCart>
  );
};
