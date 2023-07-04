import { IoIosAddCircleOutline } from "react-icons/io"
import { ProductsListAdmin } from "../ListProducts"




export const AdminProduct = () => {
    return(
        <main>
            <section>
                <div>
                    <h1>PRODUTOS</h1>
                    <p>Gerencie os produtos do catálogo</p>
                </div>
                <button> <IoIosAddCircleOutline/> NOVO PRODUTO</button>
            </section>
            <section>
                <ProductsListAdmin />
            </section>
        </main>
    )
}