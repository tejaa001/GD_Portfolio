import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Rocket, Code2 } from 'lucide-react';

const awards = [
  {
    id: 1,
    title: "NASA Space Apps Challenge",
    year: "2024",
    icon: Rocket,
    description: "Participated in the global hackathon and contributed innovative frontend solutions for real-world space and earth challenges.",
    gradient: "from-blue-500/20 to-purple-500/10"
  },
  {
    id: 2,
    title: "Winjit Tech Fest",
    year: "2024",
    icon: Code2,
    description: "Represented the university and showcased frontend prototyping skills during high-pressure team-based tech challenges.",
    gradient: "from-emerald-500/20 to-teal-500/10"
  }
];

const AwardsSection = () => {
  return (
    <section className="py-24 bg-paper px-6 md:px-12 border-y border-white/5 relative z-20 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-none bg-background border border-white/10 flex items-center justify-center text-white mb-6 shadow-xl"
          >
            <Trophy size={24} className="text-accent" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight"
          >
            Awards & Recognition
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted mt-4 max-w-lg font-light text-sm md:text-base"
          >
            Milestones achieved through innovation, problem-solving, and competitive hackathons.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none z-0" />
              
              <div className="relative z-10 bg-background border border-white/5 p-8 md:p-10 h-full flex flex-col justify-between overflow-hidden card-hover">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${award.gradient} rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-700 group-hover:scale-150`} />
                
                <div>
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500">
                      <award.icon size={20} />
                    </div>
                    <span className="font-mono text-xs font-bold px-3 py-1 bg-white/5 border border-white/10 text-white/80">
                      {award.year}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold mb-4 relative z-10 group-hover:text-accent transition-colors duration-300">
                    {award.title}
                  </h3>
                  
                  <p className="text-muted/80 font-light text-sm leading-relaxed relative z-10">
                    {award.description}
                  </p>
                </div>
                
                {/* Visual anchor line */}
                <div className="w-8 h-px bg-white/20 mt-8 group-hover:w-full group-hover:bg-accent/50 transition-all duration-700 relative z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
