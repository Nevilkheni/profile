import './App.css';
import SkillsSection from './page/skillsection';
import Home from './page/home';
import ProjectCarousel from './page/project';
import Footer from './components/footer';
import CustomCursor from './page/CustomCursor';
import AnimatedCursor from "react-animated-cursor";



function App() {
  return (
    <div className="App">
      <Home />
      <SkillsSection />
      <ProjectCarousel />
      <Footer />
      <CustomCursor />
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="51,255,51"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />



    </div>
  );
}

export default App;
