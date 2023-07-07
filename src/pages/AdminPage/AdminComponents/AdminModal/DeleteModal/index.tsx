import { useContext } from "react"
import { AdminContext } from "../../../../../providers/AdminContext"
import { HiOutlineTrash } from "react-icons/hi"
import { Overlay, StyledModal } from "./style"






export const DeleteProduct = () => {


const {modalDeleteProduct, closeDeleteModal} = useContext(AdminContext)
     
if(modalDeleteProduct)
    return(
        <Overlay role="dialog">
            <StyledModal>
                <header>
                    <h2>EXCLUIR PRODUTO</h2>
                    <button onClick={() => closeDeleteModal()}>X</button>
                </header>
                <p>Deseja realmente excluir esse produto?</p>
                <div>
                    <button><HiOutlineTrash/>EXCLUIR PRODUTO</button>
                </div>
            </StyledModal>
        </Overlay>

    )
}