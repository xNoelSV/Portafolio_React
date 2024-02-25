import menu from '../../public/menu.svg'

const HeaderTelefono = ({ setPagina }) => {

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

    const abrirMenu = () => {
        const menu = document.querySelector('#menu');
        menu.classList.toggle('hidden');
        const separacion = document.querySelector('#separacion');
        if (separacion.classList.contains('pb-3')) {
            separacion.classList.remove('pb-3');
            separacion.classList.add('pb-52');
        } else {
            separacion.classList.remove('pb-52');
            separacion.classList.add('pb-3');
        }
    }

    // Estilos
    const estiloHeader = {
        color: "#607b96"
    }

    return (
        <>
            <header
                style={estiloHeader}
                className='fixed w-screen grid grid-cols-2 z-30 border-b border-[#1E2D3D] bg-[#011627]'>
                <p
                    className='p-3 w-fit inline-block'>
                    noel-sariñena
                </p>
                <button
                    onClick={abrirMenu}
                    className='inline-flex items-center justify-end'>
                    <img
                        src={menu}
                        alt="Menú de navegación"
                        className='inline-block p-3 pe-5 cursor-pointer'
                    />
                </button>

                <div id="menu" className='hidden w-screen'>
                    <button
                        className="w-screen p-3 border-t border-[#1E2D3D] text-start cursor-pointer text-white border-b-2 border-b-orange-400"
                        id="_bienvenida"
                        onClick={cambiarColor}>
                        _bienvenida
                    </button>
                    <button
                        className="w-screen p-3 border-r border-[#1E2D3D] text-start cursor-pointer"
                        id="_sobreMi"
                        onClick={cambiarColor}>
                        _sobre-mi
                    </button>
                    <button
                        className="w-screen p-3 border-r border-[#1E2D3D] text-start cursor-pointer"
                        id="_proyectos"
                        onClick={cambiarColor}>
                        _proyectos
                    </button>
                    <button
                        className="w-screen p-3 md:col-start-6 lg:col-start-9 border-l border-[#1E2D3D] text-start cursor-pointer"
                        id="_contacto"
                        onClick={cambiarColor}>
                        _contacto
                    </button>
                </div>
            </header >
            <div
                id="separacion"
                className='pb-3 pb'>
            </div>
        </>
    )
}

export default HeaderTelefono
