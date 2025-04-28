import { useState } from 'react';
import Header from './components/header';
import About from './components/about';
import Education from './components/education';
import Skills from './components/skills';
import Contact from './components/contact';
import './styles/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="theme-toggle"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
      
      <Header />
      <About />
      <About />
      <Skills />
      <Contact />
      
      <footer className="footer">
        © {new Date().getFullYear()} Matthew Vincentius
      </footer>
    </div>
  );
}

export default App;