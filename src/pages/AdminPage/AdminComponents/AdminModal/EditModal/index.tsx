import { useContext } from "react"
import { AdminContext } from "../../../../../providers/AdminContext"
import { Overlay, StyledModal } from "./style"
import { HiOutlinePencil } from "react-icons/hi"
import { Input } from "../../Input"
import { TEditProduct, modalEditSchema } from "./modalEditSchema"
import { SubmitHandler, useForm } from "react-hook-form";






export const EditProduct = () => {


const {modalEditProduct, closeEditModal} = useContext(AdminContext)

const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TEditProduct>({
    resolver: zodResolver(modalEditSchema),
  });


  const submit : SubmitHandler<TEditProduct> = (formData) => {
    // adminEditProduct(formData);
    console.log(formData)
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
                    <Input type="text" placeholder="NOME" error={errors.name} {...register("name")}/>
                    <Input type="text" placeholder="PREÇO (R$)" error={errors.price} {...register("price")}/>
                    <Input type="text" placeholder="IMAGEM (URL)" error={errors.image} {...register("image")}/>                    
                    <Input type="text" placeholder="DESCRIÇÃO RESUMIDA" error={errors.description}{...register("description")}/>
                    <div>
                        <button type="submit"><HiOutlinePencil/>EDITAR PRODUTO</button>
                    </div>
                </form>
            </StyledModal>
        </Overlay>

    )
}
