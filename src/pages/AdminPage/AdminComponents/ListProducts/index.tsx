// import { Product } from "./Product"

import { CreateProduct } from "../AdminModal/CreateModal"
import { DeleteProduct } from "../AdminModal/DeleteModal"
import { EditProduct } from "../AdminModal/EditModal"
import { Product } from "./Product"
import { useState } from "react"

export const ProductsListAdmin = () => {
    const [selectProduct, setSelectProduct] = useState<ISelectProduct>()

    interface IProduct {
        id:string,
        name:string,
        image:string,
        price:string,
        description: string     
    }

    interface ISelectProduct {
        selectProduct: IProduct | null,
        setSelectProduct: React.Dispatch<React.SetStateAction<IProduct | null>>
    }
  

    return(
        <ul>
            <DeleteProduct />
            <EditProduct />
            <CreateProduct/>
            <Product />
        </ul>
    )
}