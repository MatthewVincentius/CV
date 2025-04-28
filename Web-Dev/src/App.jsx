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
      <Education />
      <Skills />
      <Contact />
      
      <footer className="fixed bottom-4 right-4">
        © {new Date().getFullYear()} Matthew Vincentius
      </footer>
    </div>
  );
}

export default App;