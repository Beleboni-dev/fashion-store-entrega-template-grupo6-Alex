import { useContext, useState } from "react"
import { Footer } from "../../components/Footer"
import { HeaderAdmin } from "../../components/Header/HeaderAdmin"
import { AdminHome } from "./AdminComponents/AdminHome"
import { AdminProduct } from "./AdminComponents/AdminProducts"
import { StyledAdminPage } from "./styles"
import { LuLogOut } from "react-icons/lu"
import { UserContext } from "../../providers/UserContext"



export const AdminPage = () => {
    const [ isHomeAdmin, setIsHomeAdmin ] = useState(true)

    const { userLogout } = useContext(UserContext)

    return (
        <StyledAdminPage>
            <HeaderAdmin />
            <main>
                <nav>
                    <div>
                        <button onClick={() => {setIsHomeAdmin(true)}}>Início</button>
                        <button onClick={() => {setIsHomeAdmin(false)}}>Produtos</button>
                    </div>
                    <button onClick={()=>userLogout()}><LuLogOut size={24} /><p>Sair</p></button>
                </nav>
                {isHomeAdmin ? <AdminHome /> : <AdminProduct />}
            </main>
            <Footer />
        </StyledAdminPage>
    )
}