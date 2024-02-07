import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './skills.css';
import { Tecnology } from '../technology/technology';
import HTML from '../../assets/HTML5.png';
import CSS from '../../assets/CSS.png';
import JAVASCRIPT from '../../assets/Javascript.png';
import BOOTSTRAP from '../../assets/Bootstrap.png';
import REACT from '../../assets/React.png';
import TAILWIND from '../../assets/tailwind-css.svg';
import TYPESCRIPT from '../../assets/typescript-icon.svg';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0%)' : 'translateY(20%)',
    config: config.molasses,
  });

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('skills');
      const rect = aboutSection.getBoundingClientRect();
      const isSectionVisible = rect.top >= 0 && rect.top <= window.innerHeight;
  
      setIsVisible(isSectionVisible);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup do event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div style={props} className="skills-section">
      <h1 className='titulo-skills' id='skills'>CONHECIMENTOS</h1>
      <div className='skills'>
      <Tecnology className="skill" img={HTML} alt="HTML5" name="HTML5" />
      <Tecnology className="skill" img={CSS} alt="CSS3" name="CSS3" />
      <Tecnology className="skill" img={JAVASCRIPT} alt="JAVASCRIPT" name="JAVASCRIPT" />
      <Tecnology className="skill" img={TYPESCRIPT} alt="TYPESCRIPT" name="TYPESCRIPT" />
      <Tecnology className="skill" img={REACT} alt="REACT" name="REACT" />
      <Tecnology className="skill" img={BOOTSTRAP} alt="BOOTSTRAP" name="BOOTSTRAP" />
      <Tecnology className="skill" img={TAILWIND} alt="TAILWIND" name="TAILWIND" />            
      </div>
    </div>
  );
};
