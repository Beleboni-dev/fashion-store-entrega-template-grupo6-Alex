import React, { createContext, useState} from "react";


export const AdminContext = createContext({})

interface IAdminProviderProps{
    children: React.ReactNode;
}

interface ModalState{
    modalEditProduct: boolean;
}

export const AdminProvider = ({ children } : IAdminProviderProps) => {
   
    const [modalEditProduct, setModalEditProduct] = useState<ModalState>({modalEditProduct:false})




    return (
        <AdminContext.Provider 
        value={{
            setModalEditProduct,
            modalEditProduct
            }}>
            {children}
        </AdminContext.Provider>
    )
}