import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import imagem from "./assets/imagemperfil.jpg";
import './about.css';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
  });

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const windowHeight = window.innerHeight;
      const rect = aboutSection.getBoundingClientRect();
      const isSectionVisible = rect.top <= windowHeight && rect.bottom >= 0;

      setIsVisible(isSectionVisible);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup do event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={props} className="about-section" >        
    <h1 className='titulo-about' id="about">SOBRE</h1>
      <div className="about-section-img"  >
        <img src={imagem} alt="" />
      </div>
      <div>
        <p>
          Olá, sou André Santos Braga, tenho 31 anos e estou em transição de
          carreira. Apaixonado por tecnologia, foco minha busca por
          oportunidades na área de Front-End. Tenho habilidades em HTML, CSS,
          Javascript, Bootstrap e React. Estudo diariamente, sempre buscando
          evoluir. Meu objetivo é me aperfeiçoar no Front-End e, futuramente,
          aprender Back-End para me tornar um desenvolvedor FullStack. Estou
          aberto a desafios e oportunidades que me permitam crescer
          profissionalmente.
        </p>
      </div>      
    </div>
  );
};
