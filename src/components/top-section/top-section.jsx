import '../top-section/top-section.css';
import imagem from './assets/imagem-topo.jpg';
import linkedin from './assets/linkedin-square-icon.svg';
import github from './assets/github-icon.svg';




export const TopSection = () => {
    return(<>
        <section className='top-section' id='home'>
            <div className='top-titulo'>
                <h1>Front End Developer</h1>
                <p>Em busca da minha primeira opotunidade como programador Front End.</p>
                <div className='top-icons'>
                    <a href="https://github.com/howtrojan/" target="_blank" rel="noreferrer">
                        <img src={github} alt="Github Imagem" />
                    </a>
                    <a href="https://www.linkedin.com/in/andresantosbraga/" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="Linkedin Imagem" />
                    </a>
                </div>
            </div>
            <div className='top-imagem'>
                <img src={imagem} alt="Imagem de Perfil" />                
            </div>
        </section>    
    </>)
}