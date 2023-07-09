import { LiaCartPlusSolid } from "react-icons/lia";
import { UserContext } from "../../../providers/UserContext";
import { StyledSelected } from "../StyledProductComponents/StyledSelected";
import { useContext } from "react";
import { StyledProductWrapper } from "../StyledProductComponents/StyledProductWrapper";
import { StyledProductDetails } from "../StyledProductComponents/StyledProductDetails";

export const ProductDetails = () => {
  const { selectedProduct, addToCart } = useContext(UserContext);

  if (!selectedProduct) {
    return null;
  }

  const { image, name, description, price } = selectedProduct;

  return (
    <StyledSelected>
          <span>Home &gt; {name}</span>
          <StyledProductWrapper>
          <img src={image} alt={name} />
            <StyledProductDetails>
              <h2>{name}</h2>
              <span>{`R$ ${price}`}</span>
              <p>{description}</p>
              <div>
                <LiaCartPlusSolid size={36} color={"white"} />
                <span onClick={() => addToCart(selectedProduct)}>
                  Adicionar ao carrinho
                </span>
              </div>
            </StyledProductDetails>
            </StyledProductWrapper>
    </StyledSelected>
  );
};
