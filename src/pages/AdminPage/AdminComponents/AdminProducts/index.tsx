import { IoIosAddCircleOutline } from "react-icons/io"
import { ProductsListAdmin } from "../ListProducts"
import { useContext } from "react"
import { AdminContext } from "../../../../providers/AdminContext"
import { StyledAdminProduct } from "./styles"




export const AdminProduct = () => {

    const {setModalCreateProduct} = useContext(AdminContext)

    return(
        <StyledAdminProduct>
            <section>
                <div>
                    <h1>Produtos</h1>
                    <p>Gerencie os produtos do catálogo</p>
                </div>
                <button onClick={() => setModalCreateProduct(true)}> <IoIosAddCircleOutline size={36} /> <p>Novo Produto</p></button>
            </section>
            <ProductsListAdmin />
        </StyledAdminProduct>
    )
}