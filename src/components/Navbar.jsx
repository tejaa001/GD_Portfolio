import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Download } from 'lucide-react';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Name */}
        <a href="#" className="font-display font-bold text-xl tracking-tight group flex items-center gap-2">
          <div className="w-8 h-8 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-sans text-sm group-hover:bg-accent group-hover:text-background transition-colors duration-300">
            TB
          </div>
          <span className="hidden md:block">Tejas Bhalerao</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest uppercase font-medium">
          <a href="#work" className="text-muted hover:text-white transition-colors relative group">
            Work
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-muted hover:text-white transition-colors relative group">
            About
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#experience" className="text-muted hover:text-white transition-colors relative group">
            Experience
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-muted hover:text-white transition-colors relative group">
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* CTA Button */}
        <a 
          href="/Tejas_BhaleraoGD.pdf" 
          download="Tejas_Bhalerao_Resume.pdf"
          className="flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-accent hover:text-background hover:border-accent text-xs font-sans tracking-widest uppercase font-semibold px-5 py-2.5 transition-all duration-300"
        >
          <Download size={14} />
          <span className="hidden sm:block">Resume</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
