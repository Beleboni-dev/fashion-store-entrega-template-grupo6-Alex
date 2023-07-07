import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { StyledFormRegister } from "./style";
import { BsArrowLeftShort } from 'react-icons/bs';
import { zodResolver } from "@hookform/resolvers/zod";
import { TFormRegisterValues, formRegisterSchema } from "./formRegisterSchema";
import { Link } from "react-router-dom";

export const FormRegister = () => {
    const { register, handleSubmit, formState: { errors }} =useForm<TFormRegisterValues>({
        resolver: zodResolver(formRegisterSchema),
    })
    const onSubmit: SubmitHandler<TFormRegisterValues> = (data) => console.log(data);
    return (
        <StyledFormRegister onSubmit={handleSubmit(onSubmit)}>
            <Link to = "/login">
                <BsArrowLeftShort size={24} color="#000000" />
                <p>Voltar</p>
            </Link>
            <h2>Cadastrar-se</h2>
            <p>Seja bem vindo, administrador!</p>
            <Input placeholder="nome" helper={errors.name?.message} {...register("name")} />
            <Input placeholder="e-mail" helper={errors.email?.message} {...register("email")} />
            <Input placeholder="senha" password={true} helper={errors.password?.message} {...register("password")} />
            <Input placeholder="confirmar senha" password={true} helper={errors.confirm?.message} />
            <div className="btnContainer">
                <button type="submit"> Cadastrar-se </button>
            </div>
        </StyledFormRegister>
    )
}