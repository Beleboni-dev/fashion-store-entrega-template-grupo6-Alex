import { HiOutlinePencil } from "react-icons/hi"
import { HiOutlineTrash } from "react-icons/hi"
import { useContext } from "react"
import { UserContext } from "../../../../../providers/UserContext"




export const Product = () => {

    const {products} = useContext(UserContext)

    return (
        <>
            {
                products.map((product) =>(
                <li key={product.id}>
                    <img src={product.image} alt="" />
                    <div>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                    <div>
                        <button><HiOutlinePencil/></button>
                        <button><HiOutlineTrash/></button>
                    </div>
                </li>
            ))}
        </>
    )
}