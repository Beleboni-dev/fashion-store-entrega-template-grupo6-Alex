import { createContext, ReactNode, Dispatch, SetStateAction, useContext, useState } from "react";
import { toast } from 'react-toastify';
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { TFormLoginValues } from "../pages/LoginPage/LoginComponents/FormLogin/formLoginSchema";
import { TFormRegisterValues } from "../pages/RegisterPage/RegisterComponents/FormRegister/formRegisterSchema";
import { UserContext, IProduct } from "./UserContext";
import { TCreateProduct } from "../pages/AdminPage/AdminComponents/AdminModal/CreateModal/modalCreateSchema";


interface AdminProviderProps {
  children: ReactNode;
}

interface AdminContextProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  adminRegister: (formData: TFormRegisterValues, setIsLoading: Dispatch<SetStateAction<boolean>>) => Promise<void>;
  adminLogin: (formData: TFormLoginValues, setIsLoading: Dispatch<SetStateAction<boolean>>) => Promise<void>;
  modalEditProduct:boolean;
  setModalEditProduct: Dispatch<SetStateAction<boolean>>;
  modalCreateProduct:boolean;
  setModalCreateProduct: Dispatch<SetStateAction<boolean>>;
  modalDeleteProduct:boolean;
  setModalDeleteProduct: Dispatch<SetStateAction<boolean>>;
  selectedProduct: IProduct | null;
  setSelectedProduct: Dispatch<SetStateAction<IProduct | null>>;
  adminCreateProduct: (formData: TCreateProduct) => Promise<void>;
  deleteProduct: (productID: number) => Promise<void>;
  adminEditProduct: (formData: TCreateProduct, productID: number) => Promise<void>;
}

export const AdminContext = createContext<AdminContextProps>({} as AdminContextProps);

export const AdminProvider = ({ children }: AdminProviderProps) => {
  const {setProducts,products} = useContext(UserContext);
  const [modalEditProduct, setModalEditProduct] = useState<boolean>(false);
  const [modalCreateProduct, setModalCreateProduct] = useState<boolean>(false);
  const [modalDeleteProduct, setModalDeleteProduct] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const token = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();

  const adminRegister = async (formData: TFormRegisterValues, setIsLoading: Dispatch<SetStateAction<boolean>>) => {
    try {
      setIsLoading(true);
      await api.post("/users", formData);
      toast.success("Conta criada com sucesso!");
      navigate("/admin");
    } catch (error) {
      toast.error("Opa! Algo deu errado ao registrar!");
    } finally {
      setIsLoading(false);
    }
  };

  const adminLogin = async (formData: TFormLoginValues, setIsLoading: Dispatch<SetStateAction<boolean>>) => {
    try {
      setIsLoading(true);
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      toast.success("Login realizado com sucesso!");
      navigate("/adminpage");
    } catch {
      toast.error("Opa! Algo deu errado ao logar!");
    } finally {
      setIsLoading(false);
    }
  };

  const adminCreateProduct = async (formData: TCreateProduct) => {
    try {
      const { data } = await api.post("/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts([...products, data]);
      toast.success("Produto adicionado com sucesso!");
      setModalCreateProduct(false);

    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const deleteProduct = async (productID: number) => {
    try {
      await api.delete(`/products/${productID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    
      setProducts((products) => products.filter((product) => product.id !== productID));
      toast.success("Produto deletado com sucesso.");
      setModalDeleteProduct(false);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const adminEditProduct = async (formData: TCreateProduct, productID: number) => {
    try {
      const { data } = await api.put(`/products/${productID}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts((products) =>
        products.map((product) => {
          if (product.id === productID) {
            return data;
          } else {
            return product;
          }
        })
        );
        toast.success("Produto atualizado com sucesso!");
        setModalEditProduct(false);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <AdminContext.Provider value={{ 
      isLoading: false, setIsLoading: () => {}, 
      adminLogin, 
      adminRegister,
      modalEditProduct,
      setModalEditProduct,
      modalCreateProduct, 
      setModalCreateProduct,
      modalDeleteProduct, 
      setModalDeleteProduct,
      selectedProduct, 
      setSelectedProduct,
      adminCreateProduct,
      deleteProduct,
      adminEditProduct,
      }}>
      {children}
    </AdminContext.Provider>
  );
};