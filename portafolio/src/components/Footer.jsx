import logo from '../../public/instagram.svg'

const Footer = () => {
    const estiloHeader = {
        color: "#607b96"
    }

    return (
        <>
            <footer style={estiloHeader} className="fixed bottom-0 w-full border-t border-[#1E2D3D]">
                <div
                    className="w-fit border-r border-[#1E2D3D] p-3 inline-block">
                    Encuentrame en:
                </div>
                <div
                    className='border-r border-[#1E2D3D] inline-block p-3 w-fit'>
                    <a
                        href="https://www.instagram.com/_25_noel/">
                        <img
                            src={logo}
                            alt="Logo de Instagram"
                            width='30'
                            height='30' />
                    </a>
                </div>

            </footer>
        </>
    )
}

export default Footer
