
import { FormLogin } from "./LoginComponents/FormLogin"
import { LoginTemplate } from "./LoginComponents/LoginTemplate/LoginTemplate"
import { MainLogin } from "./LoginComponents/MainLogin"

export const LoginPage = () => {
    return (
        <LoginTemplate>
            <MainLogin>
                <FormLogin />
            </MainLogin>   
        </LoginTemplate>
    )
}