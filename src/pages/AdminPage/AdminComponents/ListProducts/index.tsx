// import { Product } from "./Product"


import { AdminContext } from "../../../../providers/AdminContext"
import { CreateProduct } from "../AdminModal/CreateModal"
import { DeleteProduct } from "../AdminModal/DeleteModal"
import { EditProduct } from "../AdminModal/EditModal"
import { Product } from "./Product"
import { useContext } from "react"


export const ProductsListAdmin = () => {

    const {modalCreateProduct,modalDeleteProduct,modalEditProduct} = useContext(AdminContext);

    return(
        <ul>
            {modalEditProduct ? <EditProduct /> : null}
            {modalDeleteProduct ? <DeleteProduct /> : null}
            {modalCreateProduct ? <CreateProduct /> : null}          
            <Product />
        </ul>
    )
}