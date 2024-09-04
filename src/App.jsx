import { useEffect } from 'react'
import "../node_modules/aos/dist/aos.css";
import AOS from "aos";
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      // duration: 1200, // You can adjust the duration
    });
  }, []);

  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      if (cursorDot && cursorOutline) {
        cursorDot.style.left = `${clientX}px`;
        cursorDot.style.top = `${clientY}px`;

        cursorOutline.style.left = `${clientX}px`;
        cursorOutline.style.top = `${clientY}px`;

        cursorOutline.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, {duration: 500, fill: 'forwards'});
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
