import { HiOutlinePencil } from "react-icons/hi"
import { HiOutlineTrash } from "react-icons/hi"
import { useContext, useState } from "react"
import { UserContext } from "../../../../../providers/UserContext"
import { AdminContext } from "../../../../../providers/AdminContext"



export const Product = () => {

    const {products} = useContext(UserContext)
    const {openEditModal, openDeleteModal} = useContext(AdminContext)

    

    return (
        <>
            {
                products.map((product) =>(
                <li key={product.id}>
                    <img src={product.image} alt="" />
                    <div>
                        <h3>{product.name}</h3>
                        <p>R${product.price}</p>
                    </div>
                    <div>
                        <button onClick={() => {openEditModal(), console.log(product)}}><HiOutlinePencil/></button>
                        <button onClick={() => openDeleteModal()}><HiOutlineTrash/></button>
                    </div>
                </li>
            ))}
        </>
    )
}