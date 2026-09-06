import { motion } from 'motion/react';
import { BogolanPattern } from './BogolanPattern';
import { IMAGES } from '../data/restaurantData';
import { Palette, Music, Lamp, HeartHandshake } from 'lucide-react';

export const AmbianceSection = () => {
  return (
    <section id="ambiance-section" className="relative py-24 sm:py-32 bg-[#2B211B] overflow-hidden border-b border-[#7A5B45]/20">
      {/* Background Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-15 pointer-events-none">
        <BogolanPattern variant="watermark" className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Desktop 60% = 7 cols) - Visual Showcase */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden border border-[#7A5B45]/40 shadow-2xl group"
            >
              <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                <img
                  src={IMAGES.ambiance}
                  alt="Décoration intérieure et statues artisanales au Délice Africain"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/80 via-transparent to-transparent pointer-events-none" />

              {/* Artisan Badge overlay */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#2B211B]/90 backdrop-blur-md border border-[#C08A2E]/40 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C08A2E]/20 flex items-center justify-center text-[#C08A2E]">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#F2E9DA]">Artisanat & Décor sculpté</p>
                  <p className="text-[10px] text-[#F2E9DA]/70 font-mono">Bambou, rotin & bois noble</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Desktop 40% = 5 cols) - Copy + Animated Bogolan SVG Motif */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Signature Bogolan animated motif */}
            <div className="mb-6">
              <BogolanPattern variant="inline" color="#C08A2E" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 0, 0.2, 1] }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#C08A2E] mb-3 block">
                Immersion & Convivialité
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F2E9DA] leading-tight mb-6">
                Plus qu'un repas, <br />
                une <span className="italic-wonky text-[#C08A2E]">ambiance</span>
              </h2>

              <p className="text-base sm:text-lg text-[#F2E9DA]/85 leading-relaxed mb-8">
                Décoration artisanale, lumière tamisée, musique douce — chaque détail du 
                <strong className="text-[#F2E9DA] font-semibold"> Délice Africain</strong> est pensé pour prolonger le plaisir du repas dans une atmosphère chaleureuse et feutrée.
              </p>

              {/* Sensory highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#7A5B45]/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#7A5B45]/20 text-[#C08A2E]">
                    <Lamp className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-[#F2E9DA]/90 font-medium">Lumière tamisée</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#7A5B45]/20 text-[#C08A2E]">
                    <Music className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-[#F2E9DA]/90 font-medium">Musique douce</span>
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <div className="p-2 rounded-lg bg-[#7A5B45]/20 text-[#B8472E]">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-[#F2E9DA]/90 font-medium">Hospitalité béninoise authentique</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
