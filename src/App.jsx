import { useEffect } from 'react'
import "../node_modules/aos/dist/aos.css";
import AOS from "aos";
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
// import Navbar from './components/Navbar';
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      // duration: 1200, // You can adjust the duration
    });
  }, []);

  return(
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}

export default App
