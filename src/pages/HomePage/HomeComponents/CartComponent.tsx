import { StyledCart } from "../StyledComponents/StyledCart";
import closeIcon from "../../../assets/img/close-icon.svg";
export const CartComponent = () => {
  return (
    <StyledCart>
      <div>
        <h2>Carrinho</h2>
        <img src={closeIcon} alt="close-icon" />
      </div>
    </StyledCart>
  );
};
