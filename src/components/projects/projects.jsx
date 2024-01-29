import "./projects.css";
import { Cards } from "../cards/cards";
import Bateria from "../../assets/bateria.PNG";
import Cores from "../../assets/cores.png";
import Dados from "../../assets/dados.png";

export const ProjectsSession = () => {
  return (
    <div className="projects">
      <h1 id="projects">PROJETOS</h1>
      <div className="projects-session">
      <div className="projects-cards">
          <Cards
            src={Bateria}
            alt={"Projeto de Bateria"}
            description={
              "Projeto desenvolvido junto ao professor Alisson Suassuna. No módulo avançado de Doom."
            }
            deploy={"https://howtrojan.github.io/Projeto-Bateria-Animada/"}
            repositorio={"https://github.com/howtrojan/Projeto-Bateria-Animada"}
          />
        </div><div className="projects-cards">
          <Cards
            src={Cores}
            alt={"Projeto Qual a cor?"}
            description={
              "Projeto a fim de fixar conhecimentos de HTML, CSS e Javascript."
            }
            deploy={"https://howtrojan.github.io/Qual-a-cor-CSS/"}
            repositorio={"https://github.com/howtrojan/Qual-a-cor-CSS"}
          />
        </div><div className="projects-cards">
          <Cards
            src={Dados}
            alt={"Jogo Rolar Dados"}
            description={
              "Jogo simples feito no curso FullStackTurbo com o professor Alisson Suassuna a fim de fixar os conceitos."
            }
            deploy={"https://howtrojan.github.io/Jogo-Rolar-Dados/"}
            repositorio={"https://github.com/howtrojan/Jogo-Rolar-Dados"}
          />
        </div>   
      </div>
    </div>
  );
};
