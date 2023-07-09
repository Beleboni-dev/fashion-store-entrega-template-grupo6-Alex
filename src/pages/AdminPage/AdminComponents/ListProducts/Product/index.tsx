import { HiOutlinePencil } from "react-icons/hi"
import { HiOutlineTrash } from "react-icons/hi"
import { useContext } from "react"
import { UserContext } from "../../../../../providers/UserContext"
import { AdminContext } from "../../../../../providers/AdminContext"
import { StyledProductCard } from "./style"



export const Product = () => {

    const {products} = useContext(UserContext)

    const {setModalEditProduct, setModalDeleteProduct, setSelectedProduct} = useContext(AdminContext)

    

    return (
        <>
            {
                products.map((product) =>(
                <StyledProductCard key={product.id}>
                    <div className="productContainer">
                        <img src={product.image} alt="" />
                        <div>
                            <h3>{product.name}</h3>
                            <p>R${product.price}</p>
                        </div>
                    </div>
                    <div className="btnContainer">

                        <button onClick={() => {setModalEditProduct(true), setSelectedProduct(product)}}><HiOutlinePencil size={36}/></button>
                        <button onClick={() => {setModalDeleteProduct(true), setSelectedProduct(product)}}><HiOutlineTrash size={36}/></button>

                    </div>
                </StyledProductCard>
            ))}
        </>
    )
}