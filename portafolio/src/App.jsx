import { useState, useEffect } from "react";
import Header from "./components/Header"
import _bienvenida from "./pages/_bienvenida"
import _contacto from "./pages/_contacto"
import _sobreMi from "./pages/_sobreMi"
import _proyectos from "./pages/_proyectos"
import Footer from "./components/Footer"

const App = () => {

    // States
    const [pagina, setPagina] = useState('_bienvenida');

    // Effects
    useEffect(() => {
        console.log(pagina);
    }, [pagina]);

    // Métodos
    const cargarPagina = () => {
        if (pagina === '_contacto') {
            return (
                <_contacto />
            )
        } else if (pagina === '_sobreMi') {
            return (
                <_sobreMi />
            )
        } else if (pagina === '_proyectos') {
            return (
                <_proyectos />
            )
        } else {
            return (
                <_bienvenida />
            )
        }
    }

    return (
        <>
            <Header
                setPagina={setPagina}
            />
            {cargarPagina()}
            <Footer />
        </>
    )
}

export default App
