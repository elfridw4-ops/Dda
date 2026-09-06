import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';

interface NavbarProps {
  activeTab: 'accueil' | 'menu' | 'galerie' | 'apropos' | 'contact';
  onNavigate: (tab: 'accueil' | 'menu' | 'galerie' | 'apropos' | 'contact', anchor?: string) => void;
  onOpenReservation: () => void;
}

export const Navbar = ({ activeTab, onNavigate, onOpenReservation }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: 'accueil' | 'menu' | 'galerie' | 'apropos' | 'contact'; label: string; anchor?: string }[] = [
    { id: 'accueil', label: 'ACCUEIL' },
    { id: 'menu', label: 'MENU' },
    { id: 'galerie', label: 'GALERIE' },
    { id: 'apropos', label: 'À PROPOS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (tab: 'accueil' | 'menu' | 'galerie' | 'apropos' | 'contact', anchor?: string) => {
    onNavigate(tab, anchor);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      id="main-navbar"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#16110E]/50 backdrop-blur-xl shadow-xl shadow-black/30 border-b border-[#7A5B45]/20'
          : 'py-5 bg-[#16110E]/15 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleLinkClick('accueil')}
          className="group text-left flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A2E] rounded-md transition-transform"
        >
          <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#F2E9DA] leading-none">
            Le Délice <span className="text-[#C08A2E]">Africain</span>
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#C08A2E] font-mono mt-1 font-semibold">
            COTONOU • BÉNIN
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Navigation principale">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id, link.anchor)}
                className={`relative py-1 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 focus:outline-none ${
                  isActive ? 'text-[#C08A2E]' : 'text-[#F2E9DA]/80 hover:text-[#F2E9DA]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C08A2E]"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Button: NOUS CONTACTER */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-cta-contact"
            onClick={() => handleLinkClick('contact')}
            className="px-6 py-2.5 bg-[#C08A2E] hover:bg-[#d49933] text-[#1C140E] text-xs uppercase tracking-wider font-bold rounded-full shadow-lg shadow-[#C08A2E]/20 transition-all duration-200 active:scale-95 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C08A2E]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>NOUS CONTACTER</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#F2E9DA] hover:text-[#C08A2E] hover:bg-[#7A5B45]/20 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#1A130E] border-b border-[#7A5B45]/40 px-4 pt-3 pb-6 space-y-2 overflow-hidden shadow-2xl"
          >
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id, link.anchor)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'bg-[#7A5B45]/30 text-[#C08A2E] border-l-2 border-[#C08A2E]'
                      : 'text-[#F2E9DA]/85 hover:bg-[#7A5B45]/15 hover:text-[#F2E9DA]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#7A5B45]/30 flex flex-col gap-2">
              <button
                id="mobile-nav-cta-contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLinkClick('contact');
                }}
                className="w-full py-3 bg-[#C08A2E] text-[#1C140E] font-bold text-center rounded-full shadow active:scale-95 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>NOUS CONTACTER</span>
              </button>
              <button
                id="mobile-nav-cta-reserve"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-2.5 bg-[#7A5B45]/30 text-[#F2E9DA] text-xs font-mono text-center rounded-full flex items-center justify-center gap-2 hover:text-[#C08A2E]"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#C08A2E]" />
                <span>RÉSERVER UNE TABLE</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
