import React, { createContext, useState } from "react";
import { UserContext } from "./UserContext";
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
}

const defaultValue: ModalContextValue = {
  adminCreateProduct: async (formData: TCreateProduct) => {},
  deleteProduct: async (productID: number) => {},
  modalEditProduct: false,
  modalCreateProduct: false,
  modalDeleteProduct: false,

  openEditModal: () => {},
  closeEditModal: () => {},

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

  const adminCreateProduct = async (formData: TCreateProduct) => {
    try {
    //   const token = localStorage.getItem("token");
      const { data } = await api.post("/products", formData, {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAZW1haWwuY29tIiwiaWF0IjoxNjg4NjYzNjY5LCJleHAiOjE2ODg2NjcyNjksInN1YiI6IjQifQ.4jf8dUv9309Htj3CCOUWfjGJX60eir3CWoayu17x48Q"}`,
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
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAZW1haWwuY29tIiwiaWF0IjoxNjg4NjYzNjY5LCJleHAiOjE2ODg2NjcyNjksInN1YiI6IjQifQ.4jf8dUv9309Htj3CCOUWfjGJX60eir3CWoayu17x48Q"}`,
        },
      });

      setProducts((products) => products.filter((product) => product.id !== productID));
      toast.success("Tecnologia removida com sucesso!");
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
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
