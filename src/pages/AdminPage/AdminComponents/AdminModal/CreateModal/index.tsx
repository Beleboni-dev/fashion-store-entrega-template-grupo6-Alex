import { useContext } from "react"
import { AdminContext } from "../../../../../providers/AdminContext"
import { IoIosAddCircleOutline } from "react-icons/io"
import { Overlay, StyledModal } from "./style"
import { TCreateProduct, modalCreateSchema } from "./modalCreateSchema"
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../Input"




export const CreateProduct = () => {

    const {modalCreateProduct, closeCreateModal, adminCreateProduct} = useContext(AdminContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<TCreateProduct>({
        resolver: zodResolver(modalCreateSchema),
      });
    
    
      const submit : SubmitHandler<TCreateProduct> = (formData) => {
        adminCreateProduct(formData);
        console.log(formData)
        reset();
      };

   
if(modalCreateProduct)
    return(
        <Overlay role="dialog">
            <StyledModal>
                <form onSubmit={handleSubmit(submit)}>
                    <header>
                        <h2>EDITAR PRODUTO</h2>
                        <button onClick={() => closeCreateModal()}>X</button>
                    </header>
                    <Input type="text" placeholder="NOME" error={errors.name} {...register("name")}/>
                    <Input type="text" placeholder="PREÇO (R$)" error={errors.price} {...register("price")}/>
                    <Input type="text" placeholder="IMAGEM (URL)" error={errors.image} {...register("image")}/>                    
                    <Input type="text" placeholder="DESCRIÇÃO RESUMIDA" error={errors.description}{...register("description")}/>
                    <div>
                        <button type="submit"><IoIosAddCircleOutline/>NOVO PRODUTO</button>
                    </div>
                </form>
            </StyledModal>
        </Overlay>

    )
}
