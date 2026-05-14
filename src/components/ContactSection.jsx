import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-background border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="font-sans text-accent tracking-widest uppercase text-xs font-bold mb-6 flex items-center justify-center gap-4 opacity-80">
            <span className="w-8 h-px bg-current"></span> What's Next? <span className="w-8 h-px bg-current"></span>
          </span>
          <h2 className="font-display text-[10vw] md:text-8xl font-bold uppercase tracking-tighter mt-6 mb-10 max-w-4xl mx-auto leading-[0.85]">
            Let's Build <br />
            <span className="text-transparent border-text-white drop-shadow-md italic">Something.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-6 mb-32"
        >
          <a 
            href="mailto:tejasbhaleraodev@gmail.com"
            className="group flex items-center justify-center gap-3 bg-primary text-background px-8 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-accent transition-colors duration-500"
          >
            <Mail size={16} />
            Email Me
          </a>

          <a 
            href="tel:+918793228225"
            className="group flex items-center justify-center gap-3 border border-white/10 text-primary px-8 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:border-accent hover:text-accent transition-all duration-500"
          >
            <Phone size={16} />
            +91 8793228225
          </a>
        </motion.div>
        
        {/* Footer / Socials */}
        <div className="w-full border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-sans text-xs text-muted uppercase tracking-widest">
            © {new Date().getFullYear()} Tejas Bhalerao. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://linkedin.com/in/tejas-bhalerao" target="_blank" rel="noreferrer" className="text-muted hover:text-[#0077B5] transition-colors flex items-center gap-2 font-sans text-xs uppercase tracking-widest group">
              <LinkedinIcon size={16} className="group-hover:text-[#0077B5] transition-colors" /> LinkedIn <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
            <a href="https://github.com/tejaa001" target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors flex items-center gap-2 font-sans text-xs uppercase tracking-widest group">
              <GithubIcon size={16} className="group-hover:text-white transition-colors" /> GitHub <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
