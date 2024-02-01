import React, { useState } from "react";
import { Cards } from "../cards/cards";
import Bateria from "../../assets/bateria.PNG";
import Cores from "../../assets/cores.png";
import Dados from "../../assets/dados.png";
import HomemAranha from "../../assets/homemaranha.PNG";
import Calculadora from "../../assets/calculadora.png";
import Gitfinder from "../../assets/gitfinder.PNG";
import Pokedex from "../../assets/pokedex.png";
import Dukeza from "../../assets/appdukeza.PNG";
import port from "../../assets/portifolio.PNG";
import login from "../../assets/login.PNG";
import carrinho from "../../assets/ShoppingCart.PNG"
import './projects.css'

export const ProjectsSession = () => {
  const [displayedProjects, setDisplayedProjects] = useState(3);

  const projectsData = [
    {
      src: carrinho,
      alt: "Carrinho de Compras com React JS",
      description: "Carrinho de compras desenvolvido utilizando React JS.",  
      deploy: "https://shopping-cart-seven-flax.vercel.app/",    
      repositorio: "https://github.com/howtrojan/shopping-cart"
    },
    {
      src: login,
      alt: "Página Login React",
      description: "Página de login feita totalmente em React para fins de aprendizado junto ao canal do Jovem Programador.",      
      repositorio: "https://github.com/howtrojan/Formulario-Login-React/"
    },
    {
      src: Dukeza,
      alt: "App Dukeza",
      description: "Projeto desenvolvido no curso Full Stack Turbo ministrado pelo professor Alisson Suassuna.",
      deploy: "https://howtrojan.github.io/app-dukeza/",
      repositorio: "https://github.com/howtrojan/app-dukeza/"
    },
    {
      src: Pokedex,
      alt: "Projeto Pokedex",
      description: "Projeto Pokedex em JavaScript, CSS e HTML. Desenvolvi um projeto de Pokedex durante um curso da DIO de programação.",
      deploy: "https://howtrojan.github.io/Pokedex-em-Javascript-HTML-CSS/",
      repositorio: "https://github.com/howtrojan/Pokedex-em-Javascript-HTML-CSS"
    },
    {
      src: Gitfinder,
      alt: "Gitfinder",
      description: "Aplicação em React usando Fetch. Busca na API do GitHub.",
      repositorio: "https://github.com/howtrojan/GitFinder-Aplicacao-em-react"
    },
    {
      src: Calculadora,
      alt: "Projeto de Calculadora",
      description: "Projeto de Calculadora feito como aprendizado na formação em React da DIO.",
      repositorio: "https://github.com/howtrojan/Calculadora-em-React"
    },
    {
      src: HomemAranha,
      alt: "Projeto Homem Aranha Multiverso",
      description: "Projeto Homem Aranha Multiverso ministrado pela DIO.",
      deploy: "https://howtrojan.github.io/Projeto-Homem-Aranha/",
      repositorio: "https://github.com/howtrojan/Projeto-Homem-Aranha"
    },
    {
      src: Bateria,
      alt: "Projeto de Bateria",
      description: "Projeto desenvolvido junto ao professor Alisson Suassuna. No módulo avançado de Doom.",
      deploy: "https://howtrojan.github.io/Projeto-Bateria-Animada/",
      repositorio: "https://github.com/howtrojan/Projeto-Bateria-Animada"
    },
    {
      src: Cores,
      alt: "Projeto Qual a cor?",
      description: "Projeto a fim de fixar conhecimentos de HTML, CSS e Javascript.",
      deploy: "https://howtrojan.github.io/Qual-a-cor-CSS/",
      repositorio: "https://github.com/howtrojan/Qual-a-cor-CSS"
    },
    {
      src: port,
      alt: "Criação de uma página de portfolio",
      description: "Criação de uma página de portfolio, curso Ministrado na DIO.",
      deploy: "https://howtrojan.github.io/portfolio/",
      repositorio: "https://github.com/howtrojan/portfolio"
    },
    {
      src: Dados,
      alt: "Jogo Rolar Dados",
      description: "Jogo simples feito no curso FullStackTurbo com o professor Alisson Suassuna a fim de fixar os conceitos.",
      deploy: "https://howtrojan.github.io/Jogo-Rolar-Dados/",
      repositorio: "https://github.com/howtrojan/Jogo-Rolar-Dados"
    }
  ];

  const totalProjects = projectsData.length;

  const showMoreProjects = () => {
    setDisplayedProjects(displayedProjects + 3);
  };

  return (
    <div className="projects">
      <h1 id="projects">PROJETOS</h1>
      <div className="projects-session">
        {projectsData.slice(0, displayedProjects).map((project, index) => (
          <div className="projects-cards" key={index}>
            <Cards
              src={project.src}
              alt={project.alt}
              description={project.description}
              deploy={project.deploy}
              repositorio={project.repositorio}
            />
          </div>
        ))}
      </div>
      {displayedProjects < totalProjects && (
        <button className="btn-vermais" onClick={showMoreProjects}>
          MAIS
        </button>
      )}
    </div>
  );
};



