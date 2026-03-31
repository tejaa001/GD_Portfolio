import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDownRight } from 'lucide-react';

// Instagram not exported by installed lucide-react — inline SVG used instead
const InstagramIcon = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const reelCodes = [
  'DSkak4DDD3N', 'DSnAGjciBP8', 'DSpYi35kbHf', 
  'DSsAY5eiB12', 'DSug_4UiKQK', 'DSye-5GCOII',
  'DSzzZVACG0i', 'DS2XM-CCF3Q', 'DS5NDyiiFLO',
  'DS7mxAziCQt', 'DS-Qq02kQbk', 'DTBAqlBk4UZ'
];

const ReelsSection = () => {
  return (
    <section className="py-24 bg-paper px-6 md:px-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-none bg-background border border-accent/20 flex items-center justify-center text-accent mb-6 shadow-[0_0_15px_rgba(0,240,255,0.1)]"
          >
            <InstagramIcon size={24} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight"
          >
            Dynamic Reels
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted mt-4 max-w-lg font-light text-sm md:text-base"
          >
            Optimized for maximum engagement. Fast cuts, perfect pacing, and sound design that keeps viewers watching.
          </motion.p>
        </div>

        {/* CSS Columns for Masonry effect */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {reelCodes.map((code, index) => (
            <motion.div
              key={code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="relative break-inside-avoid bg-background overflow-hidden group border border-white/5 cursor-pointer"
              style={{ aspectRatio: index % 3 === 0 ? '9/16' : index % 2 === 0 ? '4/5' : '1/1' }}
            >
              <a 
                href={`https://www.instagram.com/reel/${code}/`}
                target="_blank"
                rel="noreferrer"
                className="block w-full h-full"
              >
                <div className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-[2px]">
                  <div className="w-12 h-12 bg-primary text-background flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)]">
                    {/* <Play size={20} className="ml-1" fill="currentColor" /> */}
                  </div>
                </div>
                
                {/* Fallback pattern to give UI depth even if thumbnail fails to load cross-origin immediately */}
                <div className="w-full h-full bg-[#151515] flex items-center justify-center absolute -z-10">
                   <InstagramIcon size={32} className="text-white/10" />
                </div>
                
                <img 
                  src={`https://instagram.com/p/${code}/media/?size=l`} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  alt="Reel Thumbnail" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="https://www.instagram.com/imsaquib2" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-3 border-b border-white/30 hover:border-accent text-white hover:text-accent pb-2 font-mono uppercase text-sm tracking-widest transition-colors"
          >
            Follow @imsaquib2
            <ArrowDownRight size={16} className="-rotate-90 group-hover:rotate-0 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
