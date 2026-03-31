import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* ── LAYER 0: Background texture ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 40%, rgba(0,240,255,0.03) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(0,240,255,0.02) 0%, transparent 50%)',
        }}
      />

      {/* ── LAYER 1: "STORIES" background watermark ── */}
      <motion.div
        style={{ y: textY, opacity: heroOpacity }}
        className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="font-display text-[28vw] md:text-[22vw] font-bold uppercase tracking-tighter"
          style={{
            opacity: 0.04,
            WebkitTextStroke: '1px rgba(255,255,255,0.06)',
            color: 'transparent',
          }}
        >
          Stories
        </span>
      </motion.div>

      {/* ── LAYER 2: Portrait image with cinematic treatment ── */}
      <motion.div
        style={{ y: imgY, opacity: heroOpacity }}
        className="absolute inset-0 z-[2] flex justify-end pointer-events-none"
      >
        <div className="relative w-full md:w-[55%] h-full overflow-hidden">
          {/* Cinematic slow-zoom image */}
          <motion.img
            src="/SaquibPic.png"
            alt="Saquib Shaikh"
            style={{ scale: imgScale }}
            className="w-full h-full object-cover object-[center_15%] opacity-50 mix-blend-lighten filter grayscale contrast-[1.15]"
          />

          {/* Rim light / edge glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 65% 30%, rgba(0,240,255,0.08) 0%, transparent 55%)',
            }}
          />

          {/* Left fade to background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/40" />
          {/* Top subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/50 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* ── LAYER 3: Film grain (very subtle) ── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
          backgroundSize: '128px 128px',
        }}
      />

      {/* ── LAYER 4: Foreground content ── */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 h-full w-full flex flex-col justify-end pb-16 md:pb-20 px-6 md:px-12"
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-0"
          >
            {/* Tag line */}
            <motion.span
              variants={fadeUp}
              className="font-sans text-accent tracking-[0.3em] uppercase text-[10px] md:text-xs font-semibold mb-6 md:mb-8 flex items-center gap-3"
            >
              <span className="w-10 h-px bg-accent/60" />
              Director's Cut
            </motion.span>

            {/* Main headline — refined hierarchy */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-[11vw] md:text-[6.5vw] lg:text-[7rem] xl:text-[8.5rem] font-bold leading-[0.9] md:leading-[0.88] tracking-tighter uppercase"
            >
              <span className="block font-medium opacity-90">Crafting</span>
              <span className="block mt-1 md:mt-2">
                <span className="text-transparent border-text-white opacity-60">
                  Stories
                </span>{' '}
                Through
              </span>
              <span className="block mt-1 md:mt-2 italic font-light text-accent/90 drop-shadow-[0_0_30px_rgba(0,240,255,0.25)]">
                Edits
              </span>
            </motion.h1>

            {/* Divider + description + CTAs */}
            <motion.div
              variants={fadeIn}
              className="mt-10 md:mt-14 border-t border-white/8 pt-8 flex flex-col gap-8 max-w-xl"
            >
              <p className="text-muted/80 font-light text-base md:text-lg leading-relaxed tracking-wide">
                Professional Video Editor specializing in cinematic content,
                dynamic reels, and high-impact brand storytelling.
              </p>

              {/* CTAs — aligned left with content */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="group relative flex items-center justify-center gap-2.5 bg-primary text-background px-7 py-4 font-semibold uppercase tracking-[0.15em] text-xs overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(250,250,250,0.15)] active:scale-[0.97]"
                >
                  <span className="relative z-10 flex items-center gap-2.5">
                    View Work
                    <ArrowDownRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-rotate-45"
                    />
                  </span>
                  <span className="absolute inset-0 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" />
                </a>

                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-2.5 border border-white/15 bg-transparent text-primary/90 px-7 py-4 font-semibold uppercase tracking-[0.15em] text-xs transition-all duration-500 hover:border-accent/60 hover:text-accent hover:shadow-[0_0_20px_rgba(0,240,255,0.08)] active:scale-[0.97]"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-muted/50 font-sans">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
