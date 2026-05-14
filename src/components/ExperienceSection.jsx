import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    role: "Frontend Developer Intern",
    company: "Denkfabrik Tech Solutions LLP, Nashik",
    duration: "December 2024 – July 2025",
    points: [
      "Designed and developed responsive web interfaces with a strong focus on visual consistency and user experience.",
      "Collaborated with designers to convert Figma mockups into modern and pixel-perfect UI components.",
      "Created reusable UI sections, banners, layouts, and interactive components using React.js and Tailwind CSS.",
      "Worked on improving interface accessibility, responsiveness, typography, spacing, and overall visual presentation.",
      "Assisted in creating creative assets and UI improvements for web-based projects while following modern design trends.",
      "Participated in Agile team discussions, design reviews, and version control workflows using Git and GitHub."
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Sandip University, Nashik",
    duration: "Sept 2022 – May 2025",
    details: "CGPA: 7.72 / 10.0"
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Mahatma Basveshwar College, Latur",
    duration: "April 2020 – May 2022",
    details: ""
  },
  {
    degree: "Secondary School Certificate",
    institution: "Twinkle Land English School, Latur",
    duration: "June 2019 – March 2020",
    details: ""
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-background relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Experience Column */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent">
              <Briefcase size={20} />
            </div>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight">Experience</h2>
          </motion.div>

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(124,92,252,0.8)]" />
                
                <h3 className="font-display text-2xl font-bold mb-1">{exp.role}</h3>
                <h4 className="font-sans text-sm text-accent tracking-widest uppercase mb-2">{exp.company}</h4>
                <p className="font-mono text-xs text-muted/60 mb-6">{exp.duration}</p>
                
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="text-muted/80 font-light text-sm flex items-start gap-3"
                    >
                      <span className="text-accent/50 mt-1.5 leading-none">▹</span>
                      <span className="leading-relaxed">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-white">
              <GraduationCap size={20} />
            </div>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white/90">Education</h2>
          </motion.div>

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-white/30" />
                
                <h3 className="font-display text-xl font-bold mb-1 text-white/90">{edu.degree}</h3>
                <h4 className="font-sans text-sm text-white/60 tracking-widest uppercase mb-2">{edu.institution}</h4>
                <p className="font-mono text-xs text-muted/50 mb-2">{edu.duration}</p>
                {edu.details && (
                  <p className="inline-block bg-white/5 text-white/80 font-mono text-xs px-2 py-1 mt-1 border border-white/10">
                    {edu.details}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
