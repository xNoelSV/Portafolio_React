import myPhoto from './../images/myPhoto.webp'
import blurGreen from '/public/blurGreen.svg'
import blurBlue from '/public/blurBlue.svg'

const _bienvenida = () => {

    return (
        <>
            <div className='w-full'>
                <div className='grid md:grid-cols-2'>
                    <img src={blurGreen} alt="Blur de fondo verde" className='md:h-svh brightness-75 -z-50 absolute md:-top-20 xl:left-40' />
                    <img src={blurBlue} alt="Blur de fondo azul" className='md:h-svh brightness-75 -z-50 absolute md:right-20 top-56 md:top-auto' />
                    <div
                        className='md:h-screen flex justify-end p-7 md:p-0 md:pr-12 items-center md:ml-14 mt-10 md:mt-0'>
                        <div>
                            <p>Buenas, soy</p>
                            <h1 className="text-5xl mt-2">Noel Sariñena</h1>
                            <h2 className="text-2xl mt-2 text-[#4D5BCE]"> &gt; Full-Stack developer</h2>
                            <div>
                                <p className="comentario mt-10">// puedes visitar mi perfil de GitHub</p>
                                <p>
                                    <span className="variable">const </span>
                                    <span className="nombreVariable">githubProfile</span>
                                    <span> = </span>
                                    <a
                                        className="contenido inline-flex"
                                        href="https://github.com/xNoelSV"
                                        rel="noreferrer noopener"
                                        target="_blank">
                                        "https://github.com/xNoelSV"
                                    </a>
                                </p>
                            </div>
                            <div>
                                <p className="comentario mt-5">// o puedes consultar mi Currículium Vitae</p>
                                <p><a
                                    href="https://www.canva.com/design/DAFjpu2KHDw/rCPi95zNFjs4JvYl0wpLnQ/view?utm_content=DAFjpu2KHDw&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                                    rel="noreferrer noopener"
                                    target="_blank">
                                    <span className="variable">const </span>
                                    <span className="nombreVariable">Currículium</span>
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className='md:h-screen pb-10 md:pe-10 flex justify-center items-center'>
                        <img
                            src={myPhoto}
                            alt="Foto de Noel Sariñena"
                            className='md:h-full hover:drop-shadow-xl transition duration-200 ease-in-out hover:scale-105 saturate-50 hover:saturate-100'
                        />
                    </div>
                </div>
            </div >
        </>
    )
}

export default _bienvenida
