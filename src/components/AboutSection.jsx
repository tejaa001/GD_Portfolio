import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skills = [
  "Premiere Pro", "After Effects", "CapCut", "Color Grading", "Motion Graphics", "Sound Design", "Pacing & Rhythm", "Narrative Structure"
];

const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.4, 0.8], [200, -200]);

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden flex items-center min-h-[80vh]">
      {/* Decorative large background text */}
      <motion.div 
        style={{ x }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[200%] overflow-hidden pointer-events-none opacity-[0.02] flex z-0"
      >
        <h2 className="font-display text-[25vw] font-bold whitespace-nowrap uppercase tracking-tighter">
          VISIONARY EDIT VISIONARY EDIT
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
              I transform raw footage into visual <span className="text-accent italic">stories.</span>
            </h2>
            <div className="space-y-6 text-muted font-light text-lg">
              <p>
                Every frame matters. I don't just cut clips together; I craft tempo, build tension, and establish rhythm to ensure the viewer's eyes are locked on the screen.
              </p>
              <p>
                From YouTube documentaries to high-paced Instagram reels, my editing philosophy revolves around <span className="text-white font-medium">keeping attention</span> and <span className="text-white font-medium">evoking emotion</span>.
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
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    key={i} 
                    className="px-4 py-3 bg-background border border-white/5 text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-300 font-sans tracking-wide"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-muted uppercase tracking-wider font-sans">Workflow Integration</span>
                <div className="flex gap-2">
                  {/* Indicators mimicking an editing timeline */}
                  <span className="w-3 h-1 bg-white/20"></span>
                  <span className="w-8 h-1 bg-white/40"></span>
                  <span className="w-4 h-1 bg-white/70"></span>
                  <span className="w-6 h-1 bg-accent shadow-[0_0_10px_rgba(0,240,255,0.5)]"></span>
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
