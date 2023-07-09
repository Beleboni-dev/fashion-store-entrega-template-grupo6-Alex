
import { useContext, useEffect } from "react"
import { AdminContext } from "../../../../../providers/AdminContext"
import { Overlay, StyledModal } from "./style"
import { HiOutlinePencil } from "react-icons/hi"
import { Input } from "../../Input"
import { TEditProduct, modalEditSchema } from "./modalEditSchema"
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GrClose } from 'react-icons/gr';
import { TextArea } from "../../TextArea";






export const EditProduct = () => {



const {modalEditProduct, setModalEditProduct, selectedProduct, adminEditProduct} = useContext(AdminContext)

const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TEditProduct>({
    resolver: zodResolver(modalEditSchema),
  });

  useEffect(() => {
    if (selectedProduct) {
      setValue("name", selectedProduct.name || "");
      setValue("price", selectedProduct.price ? selectedProduct.price.toString() : "");
      setValue("image", selectedProduct.image || "");
      setValue("description", selectedProduct.description || "");
    }
  }, [selectedProduct, setValue]);

  const submit : SubmitHandler<TEditProduct> = (formData) => {

    if (selectedProduct) {
      adminEditProduct(formData, selectedProduct.id);
    }

    reset();
  };
     
if(modalEditProduct)
    return(
        <Overlay role="dialog">
            <StyledModal>
                <form onSubmit={handleSubmit(submit)}>
                    <header>
                        <h2>EDITAR PRODUTO</h2>
                    </header>
                    <button type="button" onClick={() => setModalEditProduct(false)}><GrClose size={24} /></button>
                    <Input type="text" error={errors.name} {...register("name")}/>
                    <Input type="text" error={errors.price} {...register("price")}/>
                    <Input type="text" error={errors.image} {...register("image")}/>                    
                    <TextArea type="text" error={errors.description}{...register("description")}/>

                    <div className="btnContainer">
                        <button type="submit"><HiOutlinePencil/>EDITAR PRODUTO</button>
                    </div>
                </form>
            </StyledModal>
        </Overlay>

    )
}
