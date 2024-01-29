import React, { useEffect, useState } from "react";
import "../Header/header.css";
import { Link, animateScroll as scroll } from "react-scroll";

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {
        // Adicione um pequeno delay antes de rolar
        const timeout = setTimeout(() => {
          const hash = window.location.hash.substr(1);
          if (hash) {
            scroll.scrollTo(hash, {
              smooth: true,
              duration: 1000,
            });
          }
        }, 100);
    
        // Cleanup do timeout ao desmontar o componente
        return () => clearTimeout(timeout);
      }, []);
  return (
    <>
      <nav className="navigation">
        <div className="nav-primary">
          <div className="hamburger-icon" onClick={() => setShowMenu(!showMenu)}>
            
            
            
          </div>
          <ul>
          <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >INICIO</Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >SOBRE</Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                >CONHECIMENTO</Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                >PROJETOS</Link>
            </li>
          </ul>
        </div>        
        <div className="nav-secundary">
          <ul>
            <li>CONTATO</li>
          </ul>
        </div>
      </nav>
    </>
  );
};
