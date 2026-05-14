import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code, 
  Layers, 
  PenTool, 
  Smartphone, 
  Monitor, 
  Cpu, 
  Database,
  Globe,
  Layout,
  Type,
  GitBranch
} from 'lucide-react';

const FigmaIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
  </svg>
);

const skills = [
  { name: "React.js", icon: Code },
  { name: "Tailwind CSS", icon: PenTool },
  { name: "JavaScript", icon: Cpu },
  { name: "Figma", icon: FigmaIcon },
  { name: "Canva", icon: Layers },
  { name: "Responsive Design", icon: Smartphone },
  { name: "UI/UX Design", icon: Monitor },
  { name: "HTML5/CSS3", icon: Globe },
  { name: "Typography", icon: Type },
  { name: "Layout Design", icon: Layout },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "Postman", icon: Database },
];

const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.3, 0.8], [150, -300]);

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden flex items-center min-h-[80vh]">
      {/* Decorative large background text */}
      <motion.div 
        style={{ x }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[200%] overflow-hidden pointer-events-none opacity-[0.02] flex z-0"
      >
        <h2 className="font-display text-[20vw] font-bold whitespace-nowrap uppercase tracking-tighter">
          UI · UX · REACT · DESIGN · CODE · 
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="w-16 h-px bg-accent mb-8"></div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
              I craft interfaces that feel <span className="text-accent italic">intuitive</span> and look <span className="text-accent italic">stunning.</span>
            </h2>
            <div className="space-y-6 text-muted font-light text-lg">
              <p>
                As a Frontend & UI Designer, I bridge the gap between design and engineering. I specialize in transforming ideas and mockups into modern, user-friendly interfaces.
              </p>
              <p>
                My approach focuses on <span className="text-white font-medium">clean layouts</span>, <span className="text-white font-medium">accessibility</span>, and <span className="text-white font-medium">brand aesthetics</span> to ensure the user experience is both engaging and seamless across all digital platforms.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="bg-paper p-8 md:p-12 border border-white/5 relative group">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent opacity-50"></div>
              
              <h3 className="font-sans text-xs uppercase tracking-widest text-accent mb-8">Toolkit & Expertise</h3>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.05) }}
                    key={i} 
                    className="flex items-center gap-3 px-5 py-4 bg-background border border-white/5 text-sm font-medium hover:border-accent hover:text-accent transition-all duration-500 font-sans tracking-wide group/skill shadow-sm hover:shadow-[0_0_15px_rgba(124,92,252,0.15)]"
                  >
                    <skill.icon size={16} className="text-accent/60 group-hover/skill:text-accent group-hover/skill:scale-110 transition-all duration-500" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-muted uppercase tracking-wider font-sans">Development Lifecycle</span>
                <div className="flex gap-2">
                  {/* Indicators mimicking process flow */}
                  <span className="w-3 h-1 bg-white/20"></span>
                  <span className="w-8 h-1 bg-white/40"></span>
                  <span className="w-4 h-1 bg-white/70"></span>
                  <span className="w-6 h-1 bg-accent shadow-[0_0_10px_rgba(124,92,252,0.5)]"></span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
