import './App.css';
import SkillsSection from './page/skillsection';
import Home from './page/home';
import ProjectCarousel from './page/project';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Home/>
      <SkillsSection/>
      <ProjectCarousel/>
      <Footer/>

     
    </div>
  );
}

export default App;
