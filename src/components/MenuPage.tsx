import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS, PRACTICAL_INFO, MenuItem } from '../data/restaurantData';
import { Utensils, MapPin, Clock, Phone, Sparkles, Filter, ChevronDown, Check } from 'lucide-react';

interface MenuPageProps {
  onOpenReservation: () => void;
  onSelectDish?: (dish: MenuItem) => void;
}

type CategoryFilter = 'Tous' | 'Entrées' | 'Plats' | 'Accompagnements' | 'Desserts' | 'Boissons';

export const MenuPage = ({ onOpenReservation, onSelectDish }: MenuPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Tous');

  const categories: CategoryFilter[] = ['Tous', 'Entrées', 'Plats', 'Accompagnements', 'Desserts', 'Boissons'];

  const filteredItems = selectedCategory === 'Tous'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div id="menu-page-view" className="min-h-screen pt-24 pb-20 bg-[#2B211B]">
      
      {/* Menu Hero Banner */}
      <section className="relative py-16 sm:py-24 bg-[#2B211B] border-b border-[#7A5B45]/20 overflow-hidden">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A5B45]/30 border border-[#C08A2E]/30 text-[#C08A2E] text-xs font-mono uppercase tracking-widest mb-4">
              <Utensils className="w-3.5 h-3.5" />
              <span>Carte & Spécialités</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-display font-medium text-[#F2E9DA] leading-tight mb-4">
              Découvrez notre <span className="italic-wonky text-[#C08A2E]">Menu</span>
            </h1>

            <p className="text-base sm:text-lg text-[#F2E9DA]/85 leading-relaxed mb-8">
              Des plats authentiques, préparés avec amour et des ingrédients frais du terroir béninois.
            </p>

            <a
              href="#plats-section"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C08A2E] hover:bg-[#a67423] text-[#2B211B] font-semibold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
            >
              <span>Découvrir la carte complète</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Menu Grid with Interactive Filter Tabs */}
      <section id="plats-section" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-tab-${cat.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C08A2E] ${
                  isSelected
                    ? 'bg-[#C08A2E] text-[#2B211B] font-semibold shadow-md scale-105'
                    : 'bg-[#7A5B45]/20 text-[#F2E9DA]/80 hover:bg-[#7A5B45]/40 hover:text-[#F2E9DA] border border-[#7A5B45]/30'
                }`}
              >
                {cat}
                {cat === 'Tous' && ` (${MENU_ITEMS.length})`}
              </button>
            );
          })}
        </div>

        {/* Dynamic 9-dish Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                id={`menu-card-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: 0.04 * index, ease: [0.33, 0, 0.2, 1] }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden bg-[#7A5B45]/15 border border-[#7A5B45]/40 hover:border-[#C08A2E]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Dominant Dish Photography */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#2B211B]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B] via-transparent to-black/20" />

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-[#2B211B]/90 backdrop-blur-sm border border-[#7A5B45]/40 text-[#F2E9DA] text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full">
                    {item.category}
                  </span>

                  {/* Optional Badge */}
                  {item.badge && (
                    <span className="absolute top-4 right-4 bg-[#B8472E] text-[#F2E9DA] text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow">
                      {item.badge}
                    </span>
                  )}

                  {/* Tabular Price Medallion in JetBrains Mono */}
                  <div className="absolute bottom-4 right-4 bg-[#2B211B]/95 border border-[#C08A2E]/60 px-3.5 py-1.5 rounded-xl shadow-lg backdrop-blur-md group-hover:border-[#B8472E] transition-colors">
                    <span className="font-mono text-sm sm:text-base font-semibold text-[#C08A2E] group-hover:text-[#B8472E] transition-colors">
                      {item.formattedPrice}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-display font-medium text-[#F2E9DA] group-hover:text-[#C08A2E] transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F2E9DA]/75 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#7A5B45]/30 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#C08A2E] flex items-center gap-1.5">
                      {item.prepTime && <Clock className="w-3.5 h-3.5 opacity-80" />}
                      <span>{item.prepTime ? `Prêt en ~${item.prepTime}` : 'Cuisine fraîche & locale'}</span>
                    </span>
                    <button
                      onClick={() => onSelectDish ? onSelectDish(item) : onOpenReservation()}
                      className="px-3 py-1.5 rounded-lg bg-[#7A5B45]/20 hover:bg-[#C08A2E] text-[#F2E9DA] hover:text-[#2B211B] transition-colors"
                    >
                      Commander / Réserver
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Section "L'essentiel pratique" (Horaires + Localisation Cotonou) */}
      <section className="py-16 bg-[#2B211B] border-t border-[#7A5B45]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C08A2E] mb-2 block">
              Venir nous voir
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#F2E9DA]">
              L'essentiel <span className="italic-wonky text-[#C08A2E]">pratique</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Schedule Table & Coordinates */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#7A5B45]/15 border border-[#7A5B45]/40 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-medium text-[#F2E9DA] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C08A2E]" />
                  <span>Horaires d'ouverture</span>
                </h3>

                <div className="divide-y divide-[#7A5B45]/30 text-sm font-mono mb-6">
                  {PRACTICAL_INFO.hours.map((h, i) => (
                    <div key={i} className="py-3 flex justify-between items-center text-[#F2E9DA]/85">
                      <span className="font-medium">{h.days}</span>
                      <span className={h.hours.includes('Fermé') ? 'text-[#B8472E] font-semibold' : 'text-[#C08A2E]'}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#2B211B]/90 border border-[#7A5B45]/40 space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#F2E9DA]">
                    <MapPin className="w-4 h-4 text-[#B8472E]" />
                    <span className="font-semibold">{PRACTICAL_INFO.address}</span>
                  </div>
                  <p className="text-[#F2E9DA]/70 pl-6">{PRACTICAL_INFO.landmark}</p>
                  <p className="text-[#C08A2E] pl-6 font-semibold">GPS: {PRACTICAL_INFO.coordinates}</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#7A5B45]/30 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenReservation}
                  className="flex-1 py-3 bg-[#C08A2E] hover:bg-[#a67423] text-[#2B211B] font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors text-center"
                >
                  Réserver une table
                </button>
                <a
                  href={`tel:${PRACTICAL_INFO.phone}`}
                  className="px-4 py-3 bg-[#7A5B45]/30 hover:bg-[#7A5B45]/50 border border-[#7A5B45]/50 text-[#F2E9DA] font-mono text-xs rounded-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C08A2E]" />
                  <span>Appeler</span>
                </a>
              </div>
            </div>

            {/* Right: Embedded Interactive Map of Cotonou (Fidjrossè) */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#7A5B45]/40 relative min-h-[360px] bg-[#2B211B] shadow-xl">
              <iframe
                title="Carte Le Délice Africain Fidjrossè Cotonou"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.3600%2C6.3400%2C2.4200%2C6.3800&amp;layer=mapnik&amp;marker=6.3554%2C2.3907"
                className="w-full h-full min-h-[380px] border-0 grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#2B211B]/95 border border-[#C08A2E]/50 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-lg pointer-events-none">
                <p className="text-xs font-semibold text-[#F2E9DA]">Fidjrossè Plage, Cotonou</p>
                <p className="text-[10px] font-mono text-[#C08A2E]">Coordonnées : 6.3554° N, 2.3907° E</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
