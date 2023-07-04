import { useContext } from "react"
import { AdminContext } from "../../../../../providers/AdminContext"





export const EditProduct = () => {

    const {editProduct, setEditProduct} = useContext(AdminContext)

    

    if(editProduct)
    return(
        <div role="dialog">
            <div>
                <header>
                    <h2>EDITAR PRODUTO</h2>
                    <button onClick={() => {setEditProduct(false)}}>X</button>
                </header>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
        </div>

    )
}