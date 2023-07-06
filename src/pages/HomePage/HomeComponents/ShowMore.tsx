import { Link } from "react-router-dom";
import { IProduct, UserContext } from "../../../providers/UserContext";
import { StyledShowMore } from "../StyledComponents/SyledShowMore";
import { LiaCartPlusSolid } from "react-icons/lia";
import { useContext } from "react";
import { StyledLink } from "../StyledComponents/StyledLink";

interface ShowMoreProps {
  product: IProduct;
  addToCart: (product: IProduct) => void;
}

export const ShowMore: React.FC<ShowMoreProps> = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };
  const { setSelectedProduct} = useContext(UserContext)
  return (
    <StyledShowMore onClick={handleAddToCart}>
      <div>
        <LiaCartPlusSolid size={36} color={"white"} />
      </div>
      <StyledLink to={`/home/product/${encodeURIComponent(product.name)}`} onClick={()=> setSelectedProduct(product)}>
        Saiba Mais
      </StyledLink>
    </StyledShowMore>
  );
};
