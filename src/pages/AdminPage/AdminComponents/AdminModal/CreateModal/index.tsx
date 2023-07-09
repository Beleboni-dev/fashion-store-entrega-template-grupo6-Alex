import { useContext } from "react";
import { AdminContext } from "../../../../../providers/AdminContext";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Overlay, StyledModal } from "./style";
import { TCreateProduct, modalCreateSchema } from "./modalCreateSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GrClose } from 'react-icons/gr';
import { Input } from "../../Input";
import { TextArea } from "../../TextArea";




export const CreateProduct = () => {

    const { setModalCreateProduct, adminCreateProduct} = useContext(AdminContext)

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
        reset();
      };

    return(
        <Overlay role="dialog">
            <StyledModal>
                <form onSubmit={handleSubmit(submit)}>
                    <header>
                        <h2>Novo produto</h2>
                    </header>
                    <button onClick={() => setModalCreateProduct(false)} type="button"><GrClose size={24} /></button>
                    <Input type="text" placeholder="NOME" error={errors.name} {...register("name")}/>
                    <Input type="text" placeholder="PREÇO (R$)" error={errors.price} {...register("price")}/>
                    <Input type="text" placeholder="IMAGEM (URL)" error={errors.image} {...register("image")}/>                    
                    <TextArea type="text" placeholder="DESCRIÇÃO RESUMIDA" error={errors.description}{...register("description")}/>
                    <div className="btnContainer">
                        <button type="submit"><IoIosAddCircleOutline size={36} /><p>Novo produto</p></button>
                    </div>
                </form>
            </StyledModal>
        </Overlay>

    )
}
