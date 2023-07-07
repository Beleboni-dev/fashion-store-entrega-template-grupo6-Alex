import { RegisterTemplate } from "./RegisterComponents/RegisterTemplate/RegisterTemplate";
import { MainRegister } from "./RegisterComponents/MainRegister";
import { FormRegister } from "./RegisterComponents/FormRegister";

export const RegisterPage = () => {
    return (
        <RegisterTemplate >
            <MainRegister>
                <FormRegister />
            </MainRegister>
        </RegisterTemplate>
    )
}