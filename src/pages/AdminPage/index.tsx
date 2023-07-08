import { useContext, useState } from "react"
import { Footer } from "../../components/Footer"
import { HeaderAdmin } from "../../components/Header/HeaderAdmin"
import { AdminHome } from "./AdminComponents/AdminHome"
import { AdminProduct } from "./AdminComponents/AdminProducts"
import { LuLogOut } from "react-icons/lu"
import { UserContext } from "../../providers/UserContext"


export const AdminPage = () => {
    const [ isHomeAdmin, setIsHomeAdmin ] = useState(true)

    const { userLogout } = useContext(UserContext)

    return (
        <>
            <HeaderAdmin />
            <main>
                <nav>
                    <div>
                        <button onClick={() => {setIsHomeAdmin(true)}}>Início</button>
                        <button onClick={() => {setIsHomeAdmin(false)}}>Produtos</button>
                    </div>
                    <button onClick={()=>userLogout()}><LuLogOut/>Sair</button>
                </nav>
                {isHomeAdmin ? <AdminHome /> : <AdminProduct />}
            </main>
            <Footer />
        </>
    )
}