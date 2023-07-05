import { IProduct } from "../../../providers/UserContext";
import { StyledShowMore } from "../StyledComponents/SyledShowMore";
import { LiaCartPlusSolid } from "react-icons/lia";

interface ShowMoreProps {
  product: IProduct;
  addToCart: (product: IProduct) => void;
}

export const ShowMore: React.FC<ShowMoreProps> = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <StyledShowMore onClick={handleAddToCart}>
      <div>
        <LiaCartPlusSolid size={36} color={"white"} />
      </div>
      <span>Saiba Mais</span>
    </StyledShowMore>
  );
};
