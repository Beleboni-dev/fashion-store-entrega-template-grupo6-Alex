import { useContext } from "react";
import { AdminContext } from "../../../../../providers/AdminContext";
import { HiOutlineTrash } from "react-icons/hi";
import { Overlay, StyledModal } from "./style";
import { GrClose } from 'react-icons/gr';






export const DeleteProduct = () => {
    

const {modalDeleteProduct, setModalDeleteProduct, selectedProduct, deleteProduct} = useContext(AdminContext)

if(modalDeleteProduct)
    return(
        <Overlay role="dialog">
            <StyledModal>
                <header>
                    <h2>EXCLUIR PRODUTO</h2>
                </header>
                <button onClick={() => setModalDeleteProduct(false)}><GrClose size={24} /></button>
                <p>Deseja realmente excluir esse produto?</p>
                <div className="btnContainer">
                    <button onClick={() => {selectedProduct && deleteProduct(selectedProduct?.id)}}><HiOutlineTrash size={26} /><p>Excluir produto</p></button>
                </div>
            </StyledModal>
        </Overlay>

    )
}