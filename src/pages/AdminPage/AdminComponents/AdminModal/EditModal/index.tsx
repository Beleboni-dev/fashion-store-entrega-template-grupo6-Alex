import { useContext } from "react"
import { AdminContext } from "../../../../../providers/AdminContext"
import { Overlay, StyledModal } from "./style"
import { HiOutlinePencil } from "react-icons/hi"
import { Input } from "../../Input"
import { TEditProduct, modalEditSchema } from "./modalEditSchema"
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"






export const EditProduct = () => {



const {modalEditProduct, closeEditModal, selectedProduct, adminEditProduct} = useContext(AdminContext)

const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TEditProduct>({
    resolver: zodResolver(modalEditSchema),
  });


  const submit : SubmitHandler<TEditProduct> = (formData) => {

    adminEditProduct(formData, selectedProduct.id);

    reset();
  };
     
if(modalEditProduct)
    return(
        <Overlay role="dialog">
            <StyledModal>
                <form onSubmit={handleSubmit(submit)}>
                    <header>
                        <h2>EDITAR PRODUTO</h2>
                        <button onClick={() => closeEditModal()}>X</button>
                    </header>

                    <Input type="text" placeholder={selectedProduct?.name} error={errors.name} {...register("name")}/>
                    <Input type="text" placeholder={selectedProduct?.price.toString()} error={errors.price} {...register("price")}/>
                    <Input type="text" placeholder={selectedProduct?.image} error={errors.image} {...register("image")}/>                    
                    <Input type="text"   placeholder={selectedProduct?.description} error={errors.description}{...register("description")}/>

                    <div>
                        <button type="submit"><HiOutlinePencil/>EDITAR PRODUTO</button>
                    </div>
                </form>
            </StyledModal>
        </Overlay>

    )
}
