import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { Images, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

export const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<'Tous' | 'Ambiance' | 'Plats' | 'Moments'>('Tous');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const categories: ('Tous' | 'Ambiance' | 'Plats' | 'Moments')[] = ['Tous', 'Ambiance', 'Plats', 'Moments'];

  const filteredItems = selectedCategory === 'Tous'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
        setIsZoomed(false);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
        setIsZoomed(false);
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
    setIsZoomed(false);
  };

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
      setIsZoomed(false);
    }
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
      setIsZoomed(false);
    }
  };

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div id="gallery-page-view" className="min-h-screen pt-24 pb-20 bg-[#2B211B]">
      
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 bg-[#2B211B] border-b border-[#7A5B45]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A5B45]/30 border border-[#C08A2E]/30 text-[#C08A2E] text-xs font-mono uppercase tracking-widest mb-4">
              <Images className="w-3.5 h-3.5" />
              <span>Photothèque & Ambiance</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-medium text-[#F2E9DA] leading-tight mb-4">
              Notre <span className="italic-wonky text-[#C08A2E]">Galerie</span>
            </h1>

            <p className="text-base sm:text-lg text-[#F2E9DA]/85 leading-relaxed">
              Explorez les coulisses, la terrasse en rotin, les plats mijotés et la chaleur du lieu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`gallery-tab-${cat.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C08A2E] ${
                  isSelected
                    ? 'bg-[#C08A2E] text-[#2B211B] font-semibold shadow-md scale-105'
                    : 'bg-[#7A5B45]/20 text-[#F2E9DA]/80 hover:bg-[#7A5B45]/40 hover:text-[#F2E9DA] border border-[#7A5B45]/30'
                }`}
              >
                {cat}
                {cat === 'Tous' && ` (${GALLERY_ITEMS.length})`}
              </button>
            );
          })}
        </div>

        {/* Mosaic Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const isWide = item.sizeSpan === 'wide';
              const isTall = item.sizeSpan === 'tall';

              return (
                <motion.div
                  key={item.id}
                  id={`gallery-item-${item.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.03 * index }}
                  onClick={() => openLightbox(index)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#7A5B45]/30 bg-[#7A5B45]/15 shadow-lg ${
                    isWide ? 'sm:col-span-2' : ''
                  } ${isTall ? 'sm:row-span-2' : ''}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/90 via-[#2B211B]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Hover Caption */}
                  <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#C08A2E] bg-[#2B211B]/80 px-2 py-0.5 rounded backdrop-blur-sm">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-display font-medium text-[#F2E9DA] mt-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#F2E9DA]/70 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-[#2B211B]/90 border border-[#C08A2E]/50 flex items-center justify-center text-[#C08A2E] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal (PhotoSwipe Experience) */}
      <AnimatePresence>
        {activeLightboxIndex !== null && currentItem && (
          <motion.div
            id="gallery-lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between text-[#F2E9DA]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono bg-[#7A5B45]/40 px-3 py-1 rounded-full border border-[#7A5B45]/50">
                  {activeLightboxIndex + 1} / {filteredItems.length}
                </span>
                <span className="text-sm font-display font-semibold hidden sm:inline">
                  {currentItem.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                  className="p-2.5 rounded-full bg-[#7A5B45]/30 hover:bg-[#7A5B45]/60 text-[#F2E9DA] transition-colors"
                  aria-label={isZoomed ? "Dézoomer" : "Zoomer"}
                >
                  {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-2.5 rounded-full bg-[#7A5B45]/30 hover:bg-[#B8472E] text-[#F2E9DA] transition-colors"
                  aria-label="Fermer la vue"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Left Navigation Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#7A5B45]/40 hover:bg-[#C08A2E] text-[#F2E9DA] hover:text-[#2B211B] transition-colors"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#7A5B45]/40 hover:bg-[#C08A2E] text-[#F2E9DA] hover:text-[#2B211B] transition-colors"
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center Image Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center"
            >
              <motion.img
                key={currentItem.id}
                src={currentItem.image}
                alt={currentItem.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: isZoomed ? 1.4 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl border border-[#7A5B45]/40"
              />

              {/* Bottom Caption */}
              <div className="mt-4 text-center max-w-lg">
                <h4 className="text-base font-display font-medium text-[#F2E9DA]">
                  {currentItem.title}
                </h4>
                <p className="text-xs text-[#F2E9DA]/70 font-mono mt-1">
                  {currentItem.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
