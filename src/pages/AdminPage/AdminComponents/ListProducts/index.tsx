// import { Product } from "./Product"


import { CreateProduct } from "../AdminModal/CreateModal"
import { DeleteProduct } from "../AdminModal/DeleteModal"
import { EditProduct } from "../AdminModal/EditModal"
import { Product } from "./Product"


export const ProductsListAdmin = () => {
    

   

    return(
        <ul>
            <DeleteProduct />
            <EditProduct />
            <CreateProduct/>
            <Product />
        </ul>
    )
}