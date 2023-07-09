import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../../components/Input"
import { StyledFormLogin } from "./style"
import { TFormLoginValues, formLoginSchema } from "./formLoginSchema"
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AdminContext } from "../../../../providers/AdminContext";

export const FormLogin = () => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const { adminLogin } = useContext(AdminContext)
    const { register, handleSubmit, reset, formState: { errors }} =useForm<TFormLoginValues>({
        resolver: zodResolver(formLoginSchema),
    })

    const onSubmit: SubmitHandler<TFormLoginValues> = (data) => {
        adminLogin(data,setIsLoading);
        reset();
    };

    return (
        <StyledFormLogin onSubmit={handleSubmit(onSubmit)}>
            <h2>Entrar</h2>
            <Input placeholder="E-Mail" helper={errors.email?.message} {...register("email")} />
            <Input placeholder="Senha" password={true} helper={errors.password?.message} {...register("password")} />
            <div className="btnContainer">
                <button disabled = {isLoading}>
                    {isLoading ? "Logando..." : "Acessar"}
                </button>
                <Link to = "/register">
                    <p>Cadastre-se</p>
                </Link>
            </div>
        </StyledFormLogin>
    )
}