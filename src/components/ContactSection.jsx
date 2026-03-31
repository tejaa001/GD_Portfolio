import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

// Youtube & Instagram not exported by installed lucide-react — inline SVGs used
const YoutubeIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.47C18.88 4 12 4 12 4s-6.88 0-8.6.47A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.53C5.12 20 12 20 12 20s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const InstagramIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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
            <span className="w-8 h-px bg-current"></span> Let's Create <span className="w-8 h-px bg-current"></span>
          </span>
          <h2 className="font-display text-[10vw] md:text-8xl font-bold uppercase tracking-tighter mt-6 mb-10 max-w-4xl mx-auto leading-[0.85]">
            Ready to <br />
            <span className="text-transparent border-text-white drop-shadow-md italic">Collaborate?</span>
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
            href="mailto:saquibshaikh471@gmail.com"
            className="group flex items-center justify-center gap-3 bg-primary text-background px-8 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-accent transition-colors duration-500"
          >
            <Mail size={16} />
            Email Me
          </a>

          <a 
            href="tel:+919325149747"
            className="group flex items-center justify-center gap-3 border border-white/10 text-primary px-8 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:border-accent hover:text-accent transition-all duration-500"
          >
            <Phone size={16} />
            Call Me
          </a>
        </motion.div>
        
        {/* Footer / Socials */}
        <div className="w-full border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-sans text-xs text-muted uppercase tracking-widest">
            © {new Date().getFullYear()} Saquib Shaikh. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://www.youtube.com/@0filtertv" target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors flex items-center gap-2 font-sans text-xs uppercase tracking-widest group">
              <YoutubeIcon size={16} className="group-hover:text-red-500 transition-colors" /> YouTube <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
            <a href="https://www.instagram.com/imsaquib2" target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors flex items-center gap-2 font-sans text-xs uppercase tracking-widest group">
              <InstagramIcon size={16} className="group-hover:text-accent transition-colors" /> Instagram <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
