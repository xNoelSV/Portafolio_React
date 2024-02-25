import { useState, useEffect } from "react";
import Header from "./components/Header"
import HeaderTelefono from "./components/HeaderTelefono"
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
    const headerNavegador = () => {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            return (
                <HeaderTelefono
                    setPagina={setPagina}
                />
            )
        }
        else {
            return (
                <Header
                    setPagina={setPagina}
                />
            )
        }
    }

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
            {headerNavegador()}
            {cargarPagina()}
            <Footer />
        </>
    )
}

export default App
