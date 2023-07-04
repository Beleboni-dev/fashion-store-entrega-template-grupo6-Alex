import { useState } from "react"
import { Footer } from "../../components/Footer"
import { HeaderAdmin } from "../../components/Header/HeaderAdmin"
import { AdminHome } from "./AdminComponents/AdminHome"
import { AdminProduct } from "./AdminComponents/AdminProducts"

export const AdminPage = () => {
    const [ isHomeAdmin, setIsHomeAdmin ] = useState(true)

    

    return (
        <>
            <HeaderAdmin />
            <main>
                <nav>
                    <button onClick={() => {setIsHomeAdmin(true)}}>Início</button>
                    <button onClick={() => {setIsHomeAdmin(false)}}>Produtos</button>
                </nav>
                {isHomeAdmin == true ? <AdminHome /> : <AdminProduct />}
            </main>
            <Footer />
        </>
    )
}