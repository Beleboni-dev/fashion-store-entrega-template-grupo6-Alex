import { useContext } from "react"
import { AdminContext } from "../../../../../providers/AdminContext"
import { HiOutlineTrash } from "react-icons/hi"
import { Overlay, StyledModal } from "./style"






export const DeleteProduct = () => {
    

const {modalDeleteProduct, setModalDeleteProduct, selectedProduct, deleteProduct} = useContext(AdminContext)

if(modalDeleteProduct)
    return(
        <Overlay role="dialog">
            <StyledModal>
                <header>
                    <h2>EXCLUIR PRODUTO</h2>
                    <button onClick={() => setModalDeleteProduct(false)}>X</button>
                </header>
                <p>Deseja realmente excluir esse produto?</p>
                <div>
                    <button onClick={() => {deleteProduct(selectedProduct?.id)}}><HiOutlineTrash/>EXCLUIR PRODUTO</button>
                </div>
            </StyledModal>
        </Overlay>

    )
}