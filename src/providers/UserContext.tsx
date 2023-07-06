import { createContext, useEffect } from "react";
import { api } from "../services/api";
import { useState } from "react";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  isCartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProduct: IProduct | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
  totalValue: number;
}

interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const addToCart = (product: IProduct) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    }
  };
  const removeFromCart = (productId: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return [...acc, { ...item, quantity: item.quantity - 1 }];
          }
          return acc;
        }
        return [...acc, item];
      }, [] as IProduct[])
    );
  };

  const totalValue = cartItems.reduce(
    (acc, value) => acc + value.price * value.quantity,
    0
  );

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (error) {}
    };
    getProduct();
  }, []);

  return (
    <UserContext.Provider
      value={{
        products,
        setProducts,
        cartItems,
        addToCart,
        removeFromCart,
        isCartOpen,
        setCartOpen,
        totalValue,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
