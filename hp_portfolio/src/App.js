import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Projects from "./projects";
import { useMediaQuery } from "react-responsive";

function App() {
  return (
    <div className="App">
      {/* This is the main viewport */}
      <div className="landing">
        <Navbar />
        <Header />
      </div>

      {/* About Me Section */}
      <div className="about">
        <Body />
      </div>

      {/* Project Section */}
      <div className="projects">
        <Projects />
      </div>

      {/* Contact Section */}
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
