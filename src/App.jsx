import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import KeyAchievements from './components/KeyAchievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white relative">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Main content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <KeyAchievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;