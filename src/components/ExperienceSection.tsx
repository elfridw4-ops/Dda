import { motion } from 'motion/react';
import { IMAGES } from '../data/restaurantData';
import { Users } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience-section" className="relative py-12 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#7A5B45]/35 shadow-2xl min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-end group"
        >
          {/* Authentic Warm Restaurant Interior Background Photo */}
          <div className="absolute inset-0 z-0">
            <img
              src={IMAGES.ambiance}
              alt="Cadre et ambiance conviviale au Délice Africain"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            {/* Atmospheric dark gradient overlay perfectly calibrated from bottom-left to top-right */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#16110E] via-[#16110E]/85 via-50% to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16110E]/95 via-[#16110E]/40 to-transparent pointer-events-none" />
          </div>

          {/* Foreground Content Card on bottom-left */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-2xl">
            {/* Badge: CONVIVIALITÉ & RENCONTRE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D1714]/85 border border-[#C08A2E]/40 text-[#C08A2E] text-[11px] font-mono font-semibold uppercase tracking-wider mb-5 backdrop-blur-sm shadow-md">
              <Users className="w-3.5 h-3.5 text-[#C08A2E]" />
              <span>CONVIVIALITÉ & RENCONTRE</span>
            </div>

            {/* Main Title: L'adresse pour partager */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-[#F2E9DA] leading-tight tracking-tight mb-4">
              L'adresse pour <span className="italic-wonky text-[#C08A2E]">partager</span>
            </h2>

            {/* Subtext description */}
            <p className="text-sm sm:text-base text-[#F2E9DA]/85 font-normal leading-relaxed max-w-xl mb-6">
              Un repas au Délice Africain, c'est un moment à plusieurs — en famille, entre amis, ou en tête-à-tête.
            </p>

            {/* Thin subtle horizontal separator line */}
            <div className="w-full max-w-xl h-px bg-[#F2E9DA]/15 my-5" />

            {/* 3 Horizontal Highlights with Terracotta/Orange Dots */}
            <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#F2E9DA]/85">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B8472E] inline-block shadow-xs shadow-[#B8472E]/50" />
                <span>GRANDES TABLÉES CONVIVIALES</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B8472E] inline-block shadow-xs shadow-[#B8472E]/50" />
                <span>ESPACES INTIMISTES</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B8472E] inline-block shadow-xs shadow-[#B8472E]/50" />
                <span>ÉVÉNEMENTS SUR MESURE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
