import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { ProductPageTemplate } from "./ProductComponents/ProductPageTemplate"
import { Backdrop } from "../HomePage/HomeComponents/BackDrop";
import { CartComponent } from "../HomePage/HomeComponents/CartComponent";
import { ProductList } from "../HomePage/HomeComponents/ProductsList";
import { ProductDetails } from "./ProductComponents/SelectProduct";
import { StyledMain } from "./StyledProductComponents/StyledMain";


export const ProductPage = () => {

      const { isCartOpen, setCartOpen , selectedProduct} = useContext(UserContext);
    return (
      <ProductPageTemplate>
        <StyledMain>
          {isCartOpen && (
            <>
              <Backdrop onClick={() => setCartOpen(!isCartOpen)} />
              <CartComponent />
            </>
          )}
          <ProductDetails />
          <ProductList selectedProductId={selectedProduct?.id} />
        </StyledMain>
      </ProductPageTemplate>
    );
}