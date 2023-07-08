import { IoIosAddCircleOutline } from "react-icons/io"
import { ProductsListAdmin } from "../ListProducts"
import { useContext } from "react"

import { AdminContext } from "../../../../providers/AdminContext"




export const AdminProduct = () => {

    const {setModalCreateProduct} = useContext(AdminContext)

    return(
        <main>
            <section>
                <div>
                    <h1>PRODUTOS</h1>
                    <p>Gerencie os produtos do catálogo</p>
                </div>
                <button onClick={() => setModalCreateProduct(true)}> <IoIosAddCircleOutline/> NOVO PRODUTO</button>
            </section>
            <section>
                <ProductsListAdmin />
            </section>
        </main>
    )
}