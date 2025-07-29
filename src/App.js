import ThemeProvider from "./context/ThemeContext";
import MainLayout from "./layout/MainLayout";
import Home from "./page/home";
import About from "./page/about";
import SkillsSection from "./page/skillsection";
import ProjectCarousel from "./page/project";
import CustomCursor from "./page/CustomCursor";
import Contact from "./page/contact";
import Footer from "./components/footer";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <div className="App">
          <Home />
          <About />
          <SkillsSection />
          <ProjectCarousel />
          <CustomCursor />
          <Contact />
          <AnimatedCursor
            innerSize={8}
            outerSize={30}
            color="51,255,51"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
          />
          <Footer />
        </div>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
