import { MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'accueil' | 'menu' | 'galerie' | 'apropos' | 'contact') => void;
  onOpenReservation?: () => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer id="main-footer" className="relative bg-[#16110E] border-t border-[#7A5B45]/20 pt-16 pb-12 overflow-hidden">
      {/* Background Dot Matrix Texture as in the reference screenshot */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#C08A2E 0.75px, transparent 0.75px)',
          backgroundSize: '10px 10px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12">
          
          {/* Column 1: Brand Info (Left) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#F2E9DA] tracking-tight">
              Le Délice Africain
            </h3>
            <p className="text-xs sm:text-sm text-[#F2E9DA]/75 font-normal leading-relaxed max-w-md">
              Restaurant de cuisine traditionnelle africaine authentique. Saveurs raffinées du Bénin et d'Afrique de l'Ouest dans un cadre chaleureux à Fidjrossè, Cotonou.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#C08A2E] font-mono pt-1">
              <MapPin className="w-4 h-4 text-[#C08A2E] shrink-0" />
              <span>Fidjrossè • Cotonou, Bénin</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Middle) */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C08A2E] font-bold mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F2E9DA]/80">
              <li>
                <button 
                  onClick={() => onNavigate('accueil')} 
                  className="hover:text-[#C08A2E] transition-colors focus:outline-none"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('menu')} 
                  className="hover:text-[#C08A2E] transition-colors focus:outline-none"
                >
                  Nos Plats & Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('galerie')} 
                  className="hover:text-[#C08A2E] transition-colors focus:outline-none"
                >
                  Galerie Photos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('apropos')} 
                  className="hover:text-[#C08A2E] transition-colors focus:outline-none"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-[#C08A2E] transition-colors focus:outline-none"
                >
                  Contact & Réservation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Suivez-nous & Horaires (Right) */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C08A2E] font-bold mb-4">
              SUIVEZ-NOUS
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[#F2E9DA]/85 hover:text-[#C08A2E] hover:border-[#C08A2E]/60 transition-colors shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[#F2E9DA]/85 hover:text-[#C08A2E] hover:border-[#C08A2E]/60 transition-colors shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[#F2E9DA]/85 hover:text-[#C08A2E] hover:border-[#C08A2E]/60 transition-colors shadow-xs"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs font-mono text-[#F2E9DA]/75 pt-2 leading-relaxed">
              Ouvert du Mardi au Dimanche dès 11h30
            </p>
          </div>

        </div>

        {/* Bottom Bar Separator & Copyright Line */}
        <div className="border-t border-[#F2E9DA]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F2E9DA]/60">
          <p>© 2026 Le Délice Africain. Tous droits réservés.</p>
          <p className="flex items-center gap-2">
            <span>Fait avec passion à Cotonou</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8472E] inline-block shadow-xs shadow-[#B8472E]" />
            <span>Bénin</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
