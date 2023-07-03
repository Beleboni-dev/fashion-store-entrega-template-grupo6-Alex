import { useEffect, useState } from "react";
import { api } from "../../../services/api";

interface Product {
  id: number;
  name: string;
  price: number;
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
    <div>
      <h2>Produtos em Destaque</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Preço: R${product.price.toFixed(2)}</p>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "200px" }}
          />
        </div>
      ))}
    </div>
  );
};

