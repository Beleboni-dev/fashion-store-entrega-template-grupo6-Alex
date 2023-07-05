import { useContext, useEffect, useState } from "react";
import { api } from "../../../services/api";
import { StyledListSection } from "../StyledComponents/StyledListSection";
import { ShowMore } from "./ShowMore";
import { StyledLoading } from "../StyledComponents/StyledLoading";
import { UserContext } from "../../../providers/UserContext";


export const ProductList = () => {
   const { products, setProducts, addToCart } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
        setIsLoading(false); 
      } catch (error) {
        console.error(error);
        setIsLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  return (
    <StyledListSection>
      <h2>Produtos em Destaque</h2>
      {isLoading ? (
        <StyledLoading>
          <div className="tv-loader">
            <div className="tv-loader-screen"></div>
          </div>
        </StyledLoading>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p>R${product.price.toFixed(2).replace(".", ",")}</p>
              <ShowMore product={product} addToCart={addToCart} />
            </li>
          ))}
        </ul>
      )}
    </StyledListSection>
  );
};

