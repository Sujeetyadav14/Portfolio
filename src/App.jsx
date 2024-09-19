import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
