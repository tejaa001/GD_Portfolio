import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 'siCJX-Gj2T4',
    title: 'Cinematic Travel Reel',
    type: 'Color Grading & Pacing'
  },
  {
    id: 'SXqFn9ss4Yk',
    title: 'Commercial Cut',
    type: 'Dynamic Editing'
  },
  {
    id: '09Gu6--HVow',
    title: 'Brand Storytelling',
    type: 'Narrative Structure'
  }
];

const FeaturedWork = () => {
  const containerRef = useRef(null);
  
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-background relative z-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">SELECTED</h2>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-accent italic leading-none">WORKS</h2>
          </motion.div>
          
          <p className="text-muted max-w-sm text-left md:text-right mt-6 md:mt-0 font-light">
            Highlighting premium edits designed to capture attention and evoke emotion.
          </p>
        </div>

        {/* Asymmetrical Grid (90/10 tension concept) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          
          {/* Main Large Item */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 group relative"
          >
            <div className="w-full aspect-video bg-paper border border-white/5 overflow-hidden relative cursor-pointer">
              <iframe 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                src={`https://www.youtube.com/embed/${videos[0].id}?controls=0&modestbranding=1`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 pointer-events-none">
                <p className="font-sans text-xs text-accent uppercase tracking-widest font-bold bg-background/80 px-2 py-1 inline-block backdrop-blur-sm mb-2">
                  {videos[0].type}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold drop-shadow-lg">{videos[0].title}</h3>
              </div>
            </div>
          </motion.div>

          {/* Staggered Side Items */}
          <div className="md:col-span-4 flex flex-col gap-8 md:gap-4 md:mt-24">
            {videos.slice(1).map((vid, idx) => (
              <motion.div 
                key={vid.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group relative"
              >
                <div className="w-full aspect-video bg-paper border border-white/5 overflow-hidden relative cursor-pointer">
                  <iframe 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
                    src={`https://www.youtube.com/embed/${vid.id}?controls=0&modestbranding=1`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                  
                  <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-end bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none opacity-100 transition-opacity duration-300">
                    <p className="font-sans text-[10px] text-accent uppercase tracking-widest mb-1 shadow-sm">{vid.type}</p>
                    <h3 className="font-display text-xl font-bold drop-shadow-md">{vid.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
