import { useState } from "react";
import Header from "./components/header";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Contact from "./components/contact";
import "./index.css";
import "./styles/App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="toggle-btn"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      
      <Header />
      <About />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;