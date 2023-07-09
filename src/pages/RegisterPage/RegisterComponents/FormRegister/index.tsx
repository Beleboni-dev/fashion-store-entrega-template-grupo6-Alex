import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { StyledFormRegister } from "./style";
import { BsArrowLeftShort } from 'react-icons/bs';
import { zodResolver } from "@hookform/resolvers/zod";
import { TFormRegisterValues, formRegisterSchema } from "./formRegisterSchema";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AdminContext } from "../../../../providers/AdminContext";

export const FormRegister = () => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const { adminRegister } = useContext(AdminContext);
    const { register, handleSubmit,reset, formState: { errors }} =useForm<TFormRegisterValues>({
        resolver: zodResolver(formRegisterSchema),
    })
    const onSubmit: SubmitHandler<TFormRegisterValues> = (data) => {
        adminRegister(data,setIsLoading);
        reset();
    };
    return (
        <StyledFormRegister onSubmit={handleSubmit(onSubmit)}>
            <Link to = "/admin">
                <BsArrowLeftShort size={24} color="#000000" />
                <p>Voltar</p>
            </Link>
            <h2>Cadastrar-se</h2>
            <p>Seja bem vindo, administrador!</p>
            <Input placeholder="nome" helper={errors.name?.message} {...register("name")} />
            <Input placeholder="e-mail" helper={errors.email?.message} {...register("email")} />
            <Input placeholder="senha" password={true} helper={errors.password?.message} {...register("password")} />
            <Input placeholder="confirmar senha" password={true} helper={errors.confirm?.message} {...register("confirm")} />
            <div className="btnContainer">
                <button type="submit"> 
                    {isLoading ? "Cadastrando..." : "Cadastrar-se"}
                </button>
            </div>
        </StyledFormRegister>
    )
}