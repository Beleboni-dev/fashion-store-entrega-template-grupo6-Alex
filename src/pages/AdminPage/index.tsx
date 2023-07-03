import { Footer } from "../../components/Footer"
import { HeaderAdmin } from "../../components/Header/HeaderAdmin"

export const AdminPage = () => {
    return (
        <>
            <HeaderAdmin />
            <main>
                <nav>
                    <button>Início</button>
                    <button>Produtos</button>
                </nav>

            </main>
            <Footer />
        </>
    )
}