import { createContext} from "react";
import { api } from "../services/api";
import { useState } from "react";



export const UserContext = createContext({} as IUserContext)

interface IUserContext{
    products: IProduct[];
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;

}

interface IUserProviderProps{
    children: React.ReactNode;
}

interface IProduct {
    "id": number,
    "name": string,
    "price": number,
    "description":string,
    "image":string,
}


export const UserProvider = ({ children } : IUserProviderProps) => {
    const [ products, setProducts] = useState<IProduct[]>([])

    const getProduct = async () =>{
        try {
            const { data } = await api.get("/products")
            setProducts(data)
            
        } catch (error) {
            
        }

    }
    getProduct()

    return (
        <UserContext.Provider 
        value={{
            products, 
            setProducts
            }}>
            {children}
        </UserContext.Provider>
    )
}