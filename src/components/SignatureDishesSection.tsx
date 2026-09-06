import { motion } from 'motion/react';
import { ChevronRight, Flame } from 'lucide-react';
import { SIGNATURE_DISHES, MenuItem } from '../data/restaurantData';

interface SignatureDishesSectionProps {
  onNavigateMenu: () => void;
  onSelectDish?: (dish: MenuItem) => void;
}

export const SignatureDishesSection = ({ onNavigateMenu, onSelectDish }: SignatureDishesSectionProps) => {
  return (
    <section id="signature-dishes-section" className="relative py-24 sm:py-32 bg-[#2B211B] overflow-hidden border-b border-[#7A5B45]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7A5B45]/30 border border-[#C08A2E]/30 text-[#C08A2E] text-xs font-mono uppercase tracking-wider mb-4">
              <Flame className="w-3.5 h-3.5" />
              <span>Spécialités de la maison</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F2E9DA] leading-tight mb-4">
              Nos plats <span className="italic-wonky text-[#C08A2E]">signature</span>
            </h2>
            
            <p className="text-base text-[#F2E9DA]/80 leading-relaxed">
              Une sélection de nos créations les plus appréciées, marinées aux épices traditionnelles et préparées à la commande.
            </p>
          </motion.div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SIGNATURE_DISHES.map((dish, index) => (
            <motion.div
              key={dish.id}
              id={`signature-card-${dish.id}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.08 * index, ease: [0.33, 0, 0.2, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl overflow-hidden bg-[#7A5B45]/15 border border-[#7A5B45]/40 hover:border-[#C08A2E]/60 transition-all duration-300 shadow-xl flex flex-col ${
                index === 1 ? 'md:-translate-y-2' : ''
              }`}
            >
              {/* Image Frame with zoom on hover */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#2B211B]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B] via-transparent to-black/20" />

                {/* Badge */}
                {dish.badge && (
                  <span className="absolute top-4 left-4 bg-[#B8472E] text-[#F2E9DA] text-[11px] font-mono font-medium uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {dish.badge}
                  </span>
                )}

                {/* Price Medallion in JetBrains Mono */}
                <div className="absolute bottom-4 right-4 bg-[#2B211B]/95 border border-[#C08A2E]/50 px-3.5 py-1.5 rounded-xl shadow-lg backdrop-blur-md group-hover:border-[#B8472E] transition-colors">
                  <span className="font-mono text-sm sm:text-base font-semibold text-[#C08A2E] group-hover:text-[#B8472E] transition-colors">
                    {dish.formattedPrice}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F2E9DA] group-hover:text-[#C08A2E] transition-colors mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-[#F2E9DA]/75 leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#7A5B45]/30 flex items-center justify-between text-xs font-mono text-[#F2E9DA]/60">
                  <span className="text-[#C08A2E] font-medium">Braisé au feu de bois</span>
                  <button
                    onClick={() => onSelectDish ? onSelectDish(dish) : onNavigateMenu()}
                    className="inline-flex items-center gap-1 text-[#F2E9DA] hover:text-[#C08A2E] transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Détails</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to Full Menu */}
        <div className="text-center">
          <motion.button
            id="signature-cta-all-menu"
            onClick={onNavigateMenu}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-[#7A5B45]/20 border-2 border-[#C08A2E] text-[#F2E9DA] hover:text-[#C08A2E] font-semibold text-sm uppercase tracking-wider rounded-full transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#C08A2E]"
          >
            <span>Voir tout le menu (9 spécialités)</span>
            <ChevronRight className="w-4 h-4 text-[#C08A2E]" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};
