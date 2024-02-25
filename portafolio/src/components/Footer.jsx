import logoInstagram from '/public/instagram.svg'
import logoGithub from '/public/github.svg'
import logoLinkedin from '/public/linkedin.svg'

const Footer = () => {
    const estiloFooter = {
        color: "#607b96"
    }

    return (
        <>
            <footer style={estiloFooter} className="md:grid md:grid-cols-2 fixed bottom-0 w-full border-t border-[#1E2D3D] bg-[#011627]">
                <div className='inline-flex items-center'>
                    <p
                        className="w-fit border-r border-[#1E2D3D] p-3">
                        Encuentrame en:
                    </p>
                    <a
                        className='border-r border-[#1E2D3D] p-3 w-fit'
                        href="https://www.instagram.com/_25_noel/"
                        rel='noreferrer noopener'
                        target='_blank'>
                        <img
                            src={logoInstagram}
                            alt="Logo de Instagram"
                            width='25'
                            height='25' />
                    </a>
                    <a
                        className='border-r border-[#1E2D3D] p-3 w-fit'
                        href="https://www.linkedin.com/in/noel-sari%C3%B1ena-varela-5b08bb262/"
                        rel='noreferrer noopener'
                        target='_blank'>
                        <img
                            src={logoLinkedin}
                            alt="Logo de Linkedin"
                            width='25'
                            height='25' />
                    </a>
                </div>
                <div className='inline-flex justify-end'>
                    <a
                        className='border-l w-fit border-[#1E2D3D] p-3'
                        href="https://github.com/xNoelSV"
                        rel='noreferrer noopener'
                        target='_blank'>
                        @xnoelsv
                        <img
                            className='hidden md:inline-block ml-2'
                            src={logoGithub}
                            alt="Logo de Github"
                            width='25'
                            height='25' />
                    </a>
                </div>
            </footer >
        </>
    )
}

export default Footer
