import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './common/ThemeContext';
import './App.css';
import Header from './components/Header/Header';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Profile from './sections/Profile/Profile';
import Certificates from './sections/Certificates/Certificates';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <>
    <ThemeProvider>
      <Header />
      <main>
        <Hero id="hero" />
       <Experience id="experience" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Certificates id="certificates" />
        <Profile id="profile" />
        <Contact id="contact" />

      </main>
      <Footer />
    </ThemeProvider>
      
    </>
  );
}


export default App;

