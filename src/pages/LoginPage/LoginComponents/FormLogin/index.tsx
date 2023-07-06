import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../../components/Input"
import { StyledFormLogin } from "./style"
import { TFormLoginValues, formLoginSchema } from "./formLoginSchema"
import { zodResolver } from "@hookform/resolvers/zod";

export const FormLogin = () => {
    const { register, handleSubmit, formState: { errors }} =useForm<TFormLoginValues>({
        resolver: zodResolver(formLoginSchema),
    })

    const onSubmit: SubmitHandler<TFormLoginValues> = (data) => console.log(data);
    return (
        <StyledFormLogin onSubmit={handleSubmit(onSubmit)}>
            <h2>Entrar</h2>
            <Input placeholder="E-Mail" helper={errors.email?.message} {...register("email")} />
            <Input placeholder="Senha" password={true} helper={errors.password?.message} {...register("password")} />
            <div className="btnContainer">
                <button>Acessar</button>
                <button type="button">Cadastre-se</button>
            </div>
        </StyledFormLogin>
    )
}