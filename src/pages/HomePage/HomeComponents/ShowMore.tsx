import { LiaCartPlusSolid } from "react-icons/lia";
import { StyledShowMore } from "../StyledComponents/SyledShowMore";

export const ShowMore = () => {
  return (
    <StyledShowMore>
      <div>
        <LiaCartPlusSolid size={36} color={"white"} />
      </div>
      <span>Saiba Mais</span>
    </StyledShowMore>
  );
};
