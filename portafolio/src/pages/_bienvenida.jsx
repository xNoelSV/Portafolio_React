import myPhoto from './../images/myPhoto.webp'

const _bienvenida = () => {

    return (
        <>
            <div className='w-full'>
                <div className='grid md:grid-cols-2'>
                    <div className='h-[90vh] flex justify-end pr-12 items-center md:ml-14'>
                        <div>
                            <p>Buenas, soy</p>
                            <h1 className="text-5xl mt-2">Noel Sariñena</h1>
                            <h2 className="text-2xl mt-2 text-[#4D5BCE]"> &gt; Full-Stack developer</h2>
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
                    </div>
                    <div className='h-[90vh] flex justify-center pl-12 items-center'>
                        <img
                            src={myPhoto}
                            alt="Foto de Noel Sariñena"
                            className='h-full '
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default _bienvenida
