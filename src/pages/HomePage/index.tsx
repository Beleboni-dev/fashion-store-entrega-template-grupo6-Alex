import { HomeTemplate } from "./HomeComponents/HomeTemplate";
import { StyledHomePage } from "./style";
import homeMax from "../../assets/img/homemax.png";
import { ProductList } from "./HomeComponents/ProductsList";
import { StyledBannerSection } from "./StyledComponents/StyledBannerSection";
import { useContext, useRef } from "react";
import { UserContext } from "../../providers/UserContext";
import { CartComponent } from "./HomeComponents/CartComponent";

export const HomePage = () => {
  const productListRef = useRef<HTMLDivElement | null>(null);
  const { isCartOpen } = useContext(UserContext);

  const scrollToProductList = () => {
    if (productListRef.current) {
      const offset = 200;

      window.scrollTo({
        top: productListRef.current.offsetTop + offset,
        behavior: "smooth",
      });
    }
  };
  return (
    <HomeTemplate>
      {isCartOpen && <CartComponent/>}
      <StyledHomePage>
        <StyledBannerSection>
          <div>
            <img src={homeMax} alt="banner" />
          </div>
          <div>
            <h1>kenzie fashion store</h1>
            <button onClick={scrollToProductList}>Confira as ofertas</button>
          </div>
        </StyledBannerSection>
        <div ref={productListRef}>
          <ProductList />
        </div>
      </StyledHomePage>
    </HomeTemplate>
  );
};
