import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import FeaturedWork from './components/FeaturedWork';
import ReelsSection from './components/ReelsSection';
import AboutSection from './components/AboutSection';
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
      
      <main className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <FeaturedWork />
        <ReelsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
