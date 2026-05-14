import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-background text-primary min-h-screen font-sans selection:bg-accent selection:text-background flex flex-col items-center">
      <div className="noise-bg"></div>
      
      <Navbar />
      
      <main className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <AwardsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
