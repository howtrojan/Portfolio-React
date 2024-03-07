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
          carreira. Atualmente Curso Análise e desenvolvimento de sistemas. Procuro desafios e oportunidades que me permitam crescer
          profissionalmente. 
        </p>
      </div>      
    </div>
  );
};
