import '../src/global.css';
import './App.css';
import { Header } from './components/Header/header';
import { TopSection } from './components/top-section/top-section';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import {ProjectsSession} from './components/projects/projects'




function App() {
  return (   <>
   <Header/> 
   <TopSection/>
   <About/>
   <Skills/>   
   <ProjectsSession/>
  </>
  )}

export default App;
