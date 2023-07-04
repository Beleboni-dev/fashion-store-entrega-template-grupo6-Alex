import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { StyledListSection } from "../StyledComponents/StyledListSection";
import { ShowMore } from "./ShowMore";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get<Product[]>("/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <StyledListSection>
      <h2>Produtos em Destaque</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>R${parseFloat(product.price).toFixed(2).replace(".", ",")}</p>
          <ShowMore />
          </li>
        ))}
      </ul>
    </StyledListSection>

  );
};

