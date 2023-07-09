import { useState } from "react"
import { Footer } from "../../components/Footer"
import { HeaderAdmin } from "../../components/Header/HeaderAdmin"
import { AdminHome } from "./AdminComponents/AdminHome"
import { AdminProduct } from "./AdminComponents/AdminProducts"
import { StyledAdminPage } from "./styles"

export const AdminPage = () => {
    const [ isHomeAdmin, setIsHomeAdmin ] = useState(true)

    

    return (
        <StyledAdminPage>
            <HeaderAdmin />
            <main>
                <nav>
                    <button onClick={() => {setIsHomeAdmin(true)}}>Início</button>
                    <button onClick={() => {setIsHomeAdmin(false)}}>Produtos</button>
                </nav>
                {isHomeAdmin ? <AdminHome /> : <AdminProduct />}
            </main>
            <Footer />
        </StyledAdminPage>
    )
}