import { motion } from 'motion/react';
import { ArrowRight, Compass } from 'lucide-react';
import { IMAGES } from '../data/restaurantData';

interface HeroSectionProps {
  onNavigateMenu: () => void;
  onNavigateAbout: () => void;
}

export const HeroSection = ({ onNavigateMenu, onNavigateAbout }: HeroSectionProps) => {
  return (
    <section id="hero-section" className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-12">
      {/* Background Image with Parallax / Scale Entrance & Dark Culinary Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full relative"
        >
          <img
            src={IMAGES.hero}
            alt="Grillades braisées au feu de bois - Le Délice Africain à Cotonou"
            className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
            loading="eager"
          />
          {/* Warm dark restaurant overlay reduced by 35% for higher visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#17110C]/60 via-[#17110C]/50 to-[#17110C]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17110C]/65 via-transparent to-[#17110C]/45" />
          {/* Subtle dot matrix culinary texture */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'radial-gradient(#C08A2E 0.75px, transparent 0.75px)',
              backgroundSize: '8px 8px'
            }}
          />
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="max-w-3xl">
          {/* Eyebrow line */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-6 sm:w-8 h-[1px] bg-[#C08A2E]/70" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#C08A2E] font-semibold flex items-center gap-2">
              FIDJROSSÈ • COTONOU, BÉNIN
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8472E] inline-block shadow-sm shadow-[#B8472E]" />
            </span>
          </motion.div>

          {/* Main Title: Le goût de l'Afrique, authentique. */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-display font-medium text-[#F2E9DA] leading-[1.05] tracking-tight mb-6"
          >
            Le goût de l'Afrique, <br />
            <span className="italic-wonky text-[#B8472E] font-serif font-normal tracking-normal inline-block mt-1">
              authentique.
            </span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.33, 0, 0.2, 1] }}
            className="text-base sm:text-lg text-[#F2E9DA]/85 font-normal leading-relaxed max-w-xl mb-9"
          >
            Cuisine traditionnelle préparée avec des ingrédients frais et locaux.
            <br className="hidden sm:inline" />
            Une escale gourmande au cœur de Fidjrossè.
          </motion.p>

          {/* Action Buttons + Reservation Phone Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* Button 1: VOIR LE MENU with circular arrow */}
            <button
              id="hero-cta-menu"
              onClick={onNavigateMenu}
              className="group px-6 py-3.5 bg-[#2B211B]/80 hover:bg-[#2B211B] border border-[#C08A2E]/60 hover:border-[#C08A2E] text-[#F2E9DA] font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-200 active:scale-95 flex items-center gap-3.5 shadow-xl backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#C08A2E]"
            >
              <span className="w-7 h-7 rounded-full border border-[#C08A2E] flex items-center justify-center text-[#C08A2E] group-hover:bg-[#C08A2E] group-hover:text-[#17110C] transition-colors">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span>VOIR LE MENU</span>
            </button>

            {/* Button 2: NOTRE HISTOIRE */}
            <button
              id="hero-cta-about"
              onClick={onNavigateAbout}
              className="px-6 py-3.5 bg-[#4A382A]/40 hover:bg-[#4A382A]/70 border border-[#F2E9DA]/20 text-[#F2E9DA] font-semibold text-xs uppercase tracking-[0.2em] rounded-full backdrop-blur-sm transition-all duration-200 active:scale-95 flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#F2E9DA]/40"
            >
              <Compass className="w-4 h-4 text-[#C08A2E]" />
              <span>NOTRE HISTOIRE</span>
            </button>

            {/* Reservation Phone Callout */}
            <div className="flex flex-col justify-center sm:pl-4 sm:border-l sm:border-[#F2E9DA]/20">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F2E9DA]/60">
                RÉSERVATIONS
              </span>
              <a
                href="tel:+22997000000"
                className="text-sm sm:text-base font-mono font-bold text-[#C08A2E] hover:text-[#d49933] tracking-wider transition-colors"
              >
                +229 97 00 00 00
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Value Proposition Bar at Bottom with 3 Columns */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="border-t border-[#F2E9DA]/15 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Column 1 */}
          <div className="group">
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#C08A2E] mb-1 tracking-tight">
              100%
            </div>
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#F2E9DA]/75 font-medium leading-snug">
              INGRÉDIENTS FRAIS & TERROIR
            </div>
          </div>

          {/* Column 2 */}
          <div className="group">
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#C08A2E] mb-1 tracking-tight">
              Feu de Bois
            </div>
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#F2E9DA]/75 font-medium leading-snug">
              BRAISAGE TRADITIONNEL
            </div>
          </div>

          {/* Column 3 */}
          <div className="group">
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#C08A2E] mb-1 tracking-tight">
              Fidjrossè
            </div>
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#F2E9DA]/75 font-medium leading-snug">
              CADRE INTIMISTE & CHALEUREUX
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
