// import { Product } from "./Product"


import { AdminContext } from "../../../../providers/AdminContext"
import { CreateProduct } from "../AdminModal/CreateModal"
import { DeleteProduct } from "../AdminModal/DeleteModal"
import { EditProduct } from "../AdminModal/EditModal"
import { StyledListProducts } from "./styles"
import { Product } from "./Product"
import { useContext } from "react"


export const ProductsListAdmin = () => {

    const {modalCreateProduct,modalDeleteProduct,modalEditProduct} = useContext(AdminContext);

    return(
        <StyledListProducts>
            {modalEditProduct ? <EditProduct /> : null}
            {modalDeleteProduct ? <DeleteProduct /> : null}
            {modalCreateProduct ? <CreateProduct /> : null}          
            <Product />
        </StyledListProducts>
    )
}