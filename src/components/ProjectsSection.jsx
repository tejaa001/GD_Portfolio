import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const projects = [
  {
    id: 1,
    title: 'Turf Booking System UI',
    type: 'Frontend Design & Development',
    tags: ['React.js', 'Tailwind CSS', 'Figma'],
    description: 'A modern sports turf booking interface with responsive layouts and intuitive user experience. Features visually engaging UI sections including booking cards, schedules, and mobile-friendly screens with clean typography and smooth interaction design.',
    links: {
      live: 'https://turf-booking-system-tejasdev.vercel.app/',
      github: 'https://github.com/tejaa001/turf-booking-system'
    },
    // Using a sleek abstract placeholder for the project image
    gradient: 'from-[rgba(124,92,252,0.8)] to-[rgba(60,20,180,0.4)]'
  },
  {
    id: 2,
    title: 'RentalHub',
    type: 'Rental Management System',
    tags: ['React.js', 'Tailwind CSS', 'ASP.NET', 'Figma'],
    description: 'Responsive and visually engaging UI layouts for property and tenant management workflows. Includes reusable frontend components and dashboard interfaces applying UI/UX principles to improve visual storytelling.',
    links: {
      live: '#',
      github: '#'
    },
    gradient: 'from-[rgba(0,240,255,0.6)] to-[rgba(0,100,255,0.3)]'
  }
];

const ProjectsSection = () => {
  const containerRef = useRef(null);
  
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-background relative z-20 border-t border-white/5" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">Featured</h2>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-accent italic leading-none">Projects</h2>
          </motion.div>
          
          <p className="text-muted max-w-sm text-left md:text-right mt-6 md:mt-0 font-light">
            Showcasing modern interfaces, responsive layouts, and user-centric design solutions.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
            >
              {/* Project Image/Visual */}
              <div className="w-full lg:w-3/5 aspect-[4/3] bg-paper border border-white/10 relative overflow-hidden card-hover">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom_right,white,transparent)]" />
                
                {/* Abstract UI Mockup Representation */}
                <div className="absolute inset-x-8 -bottom-16 top-8 bg-background border border-white/10 rounded-t-xl shadow-2xl overflow-hidden transform group-hover:-translate-y-4 transition-transform duration-700 ease-out">
                  {/* Browser Bar */}
                  <div className="h-8 border-b border-white/5 flex items-center px-4 gap-1.5 bg-white/[0.02]">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  {/* Content placeholder */}
                  <div className="p-6 flex flex-col gap-4 opacity-30">
                    <div className="w-1/3 h-4 bg-white/20 rounded" />
                    <div className="w-full h-32 bg-white/10 rounded" />
                    <div className="flex gap-4">
                      <div className="w-1/2 h-20 bg-white/5 rounded" />
                      <div className="w-1/2 h-20 bg-white/5 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 flex flex-col items-start">
                <p className="font-sans text-xs text-accent uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                  <span className="w-6 h-px bg-accent"></span>
                  {project.type}
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">{project.title}</h3>
                
                <p className="text-muted/80 font-light leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a href={project.links.live} className="flex items-center gap-2 font-sans text-sm tracking-wider uppercase font-semibold hover:text-accent transition-colors group/link">
                    Live Demo
                    <ExternalLink size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                  <a href={project.links.github} className="flex items-center gap-2 font-sans text-sm tracking-wider uppercase font-semibold text-muted hover:text-white transition-colors">
                    <GithubIcon size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
