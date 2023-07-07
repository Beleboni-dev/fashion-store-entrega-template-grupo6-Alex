import React, { createContext, useState } from "react";
import { IProduct, UserContext } from "./UserContext";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useContext } from "react";
import { TCreateProduct } from "../pages/AdminPage/AdminComponents/AdminModal/CreateModal/modalCreateSchema";

interface IAdminProviderProps {
  children: React.ReactNode;
}

interface ModalContextValue {
  modalEditProduct: boolean;
  modalCreateProduct: boolean;
  modalDeleteProduct: boolean;
  openEditModal: () => void;
  closeEditModal: () => void;
  
  openCreateModal: () => void;
  closeCreateModal: () => void;
  
  openDeleteModal: () => void;
  closeDeleteModal: () => void;

  adminCreateProduct: (formData: TCreateProduct) => Promise<void>;
  deleteProduct: (productID: number) => Promise<void>
  adminEditProduct: (formData: TCreateProduct, productID: number) => Promise<void>
  
  selectedProduct: IProduct | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
}

const defaultValue: ModalContextValue = {
  adminCreateProduct: async (formData: TCreateProduct) => {},
  deleteProduct: async (productID: number) => {},
  adminEditProduct: async(formData: TCreateProduct, productID: number) => {},

  modalEditProduct: false,
  modalCreateProduct: false,
  modalDeleteProduct: false,
  setSelectedProduct: () => {}, 
  openEditModal: () => {},
  closeEditModal: () => {},
 selectedProduct: null, 
  openCreateModal: () => {},
  closeCreateModal: () => {},

  openDeleteModal: () => {},
  closeDeleteModal: () => {},
};

export const AdminContext = createContext<ModalContextValue>(defaultValue);

export const AdminProvider = ({ children }: IAdminProviderProps) => {
  const { products, setProducts } = useContext(UserContext);

  const [modalEditProduct, setModalEditProduct] = useState(false);
  const [modalCreateProduct, setModalCreateProduct] = useState(false);
  const [modalDeleteProduct, setModalDeleteProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);


  const adminCreateProduct = async (formData: TCreateProduct) => {
    try {
    //   const token = localStorage.getItem("token");
      const { data } = await api.post("/products", formData, {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAZW1haWwuY29tIiwiaWF0IjoxNjg4NjgxMTY0LCJleHAiOjE2ODg2ODQ3NjQsInN1YiI6IjQifQ.Hy6t2fqN9DLPtj-oYuyQa2rdAIp1yCFULajSfiaMH48"}`,
        },
      });

      setProducts([...products, data]);
      toast.success("Tecnologia adicionada com sucesso!");

      closeCreateModal();
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };


  const deleteProduct = async (productID: number) => {
    try {
    //   const token = localStorage.getItem("token");
      await api.delete(`/products/${productID}`, {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAZW1haWwuY29tIiwiaWF0IjoxNjg4NjgxMTY0LCJleHAiOjE2ODg2ODQ3NjQsInN1YiI6IjQifQ.Hy6t2fqN9DLPtj-oYuyQa2rdAIp1yCFULajSfiaMH48"}`,
        },
      });
    
      setProducts((products) => products.filter((product) => product.id !== productID));
      closeDeleteModal()
      toast.success("Produto deletado com sucesso.")
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };


  const adminEditProduct = async (formData: TCreateProduct, productID: number) => {
    try {
    //   const token = localStorage.getItem("token");
      const { data } = await api.put(`/products/${productID}`, formData, {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAZW1haWwuY29tIiwiaWF0IjoxNjg4NjgxMTY0LCJleHAiOjE2ODg2ODQ3NjQsInN1YiI6IjQifQ.Hy6t2fqN9DLPtj-oYuyQa2rdAIp1yCFULajSfiaMH48"}`,
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
      closeEditModal();
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const openEditModal = () => {
    setModalEditProduct(true);
  };
  const closeEditModal = () => {
    setModalEditProduct(false);
  };

  const openCreateModal = () => {
    setModalCreateProduct(true);
  };
  const closeCreateModal = () => {
    setModalCreateProduct(false);
  };

  const openDeleteModal = () => {
    setModalDeleteProduct(true);
  };
  const closeDeleteModal = () => {
    setModalDeleteProduct(false);
  };

  const value: ModalContextValue = {
    openEditModal,
    openCreateModal,
    openDeleteModal,
    closeEditModal,
    closeCreateModal,
    closeDeleteModal,
    modalEditProduct,
    modalCreateProduct,
    modalDeleteProduct,
    adminCreateProduct,
    deleteProduct,
    selectedProduct,
    setSelectedProduct,
    adminEditProduct,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
