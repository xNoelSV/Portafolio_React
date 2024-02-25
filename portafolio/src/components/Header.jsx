const Header = ({ setPagina }) => {

    const cambiarColor = (e) => {
        const parent = e.target.parentNode;
        const children = parent.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove("text-white");
            children[i].classList.remove("border-b-2");
            children[i].classList.remove("border-b-orange-400");
        }
        e.target.classList.add("text-white");
        e.target.classList.add("border-b-2");
        e.target.classList.add("border-b-orange-400");
        setPagina(e.target.id);

    }

    // Estilos

    const estiloHeader = {
        color: "#607b96"
    }

    return (
        <>
            <header style={estiloHeader} className="fixed w-screen z-30 grid md:grid-cols-6 lg:grid-cols-9 border-b border-[#1E2D3D] bg-[#011627]">
                <div
                    className="p-3 border-r lg:col-span-2 border-[#1E2D3D] text-center">
                    noel-sariñena
                </div>
                <button
                    className="p-3 border-r border-[#1E2D3D] text-center cursor-pointer text-white border-b-2 border-b-orange-400"
                    id="_bienvenida"
                    onClick={cambiarColor}>
                    _bienvenida
                </button>
                <button
                    className="p-3 border-r border-[#1E2D3D] text-center cursor-pointer"
                    id="_sobreMi"
                    onClick={cambiarColor}>
                    _sobre-mi
                </button>
                <button
                    className="p-3 border-r border-[#1E2D3D] text-center cursor-pointer"
                    id="_proyectos"
                    onClick={cambiarColor}>
                    _proyectos
                </button>
                <button
                    className="p-3 md:col-start-6 lg:col-start-9 border-l border-[#1E2D3D] text-center cursor-pointer"
                    id="_contacto"
                    onClick={cambiarColor}>
                    _contacto
                </button>
            </header >
        </>
    )
}

export default Header
