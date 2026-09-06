import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TEAM_MEMBERS } from '../data/restaurantData';
import { Award, Calendar, HeartHandshake, Utensils, MessageSquare, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';

interface AboutTeamSectionProps {
  onNavigateContact: () => void;
}

export const AboutTeamSection = ({ onNavigateContact }: AboutTeamSectionProps) => {
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);
  const activeMember = TEAM_MEMBERS[activeMemberIndex] || TEAM_MEMBERS[0];

  const handleNextMember = () => {
    setActiveMemberIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
  };

  const handlePrevMember = () => {
    setActiveMemberIndex((prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length);
  };

  return (
    <section id="apropos-section" className="relative py-24 sm:py-32 bg-[#2B211B] overflow-hidden border-b border-[#7A5B45]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Team Showcase on left, Story & Interactive Team on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Portrait & Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#7A5B45]/20 border border-[#7A5B45]/40 shadow-2xl p-3 sm:p-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMember.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={activeMember.image}
                      alt={`${activeMember.name} - ${activeMember.role}`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B] via-transparent to-transparent" />
                    
                    {/* Active Member Info Float */}
                    <div className="absolute bottom-4 left-4 right-4 bg-[#2B211B]/95 backdrop-blur-md border border-[#C08A2E]/40 p-4 rounded-xl shadow-lg">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-1.5 text-[#C08A2E] text-xs font-mono">
                          {activeMemberIndex === 0 ? (
                            <>
                              <Award className="w-3.5 h-3.5" />
                              <span>Depuis 2020 à Cotonou</span>
                            </>
                          ) : (
                            <>
                              <HeartHandshake className="w-3.5 h-3.5" />
                              <span>Service & Convivialité</span>
                            </>
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-[#F2E9DA]/50">
                          {activeMemberIndex + 1} / {TEAM_MEMBERS.length}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-medium text-[#F2E9DA]">{activeMember.name}</h3>
                      <p className="text-xs text-[#C08A2E] font-mono">{activeMember.role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Carousel Controls */}
                <button
                  type="button"
                  onClick={handlePrevMember}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1A130E]/80 backdrop-blur-md border border-[#7A5B45]/50 text-[#F2E9DA] hover:bg-[#C08A2E] hover:text-[#1A130E] flex items-center justify-center transition-all shadow-lg active:scale-95 cursor-pointer z-10"
                  aria-label="Membre précédent"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextMember}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1A130E]/80 backdrop-blur-md border border-[#7A5B45]/50 text-[#F2E9DA] hover:bg-[#C08A2E] hover:text-[#1A130E] flex items-center justify-center transition-all shadow-lg active:scale-95 cursor-pointer z-10"
                  aria-label="Membre suivant"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Direct Dot Selectors */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A130E]/70 backdrop-blur-md border border-[#7A5B45]/40 z-10">
                  {TEAM_MEMBERS.map((m, idx) => (
                    <button
                      key={m.name}
                      type="button"
                      onClick={() => setActiveMemberIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeMemberIndex === idx
                          ? 'w-6 bg-[#C08A2E]'
                          : 'w-2 bg-[#F2E9DA]/40 hover:bg-[#F2E9DA]/80'
                      }`}
                      aria-label={`Afficher ${m.name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Dynamic pledge banner matching active member */}
              <div className="mt-4 p-4 rounded-xl bg-[#2B211B]/80 border border-[#7A5B45]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C08A2E]/20 flex items-center justify-center text-[#C08A2E] shrink-0">
                    {activeMemberIndex === 0 ? (
                      <Utensils className="w-4 h-4" />
                    ) : (
                      <HeartHandshake className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F2E9DA]">
                      {activeMemberIndex === 0 ? '100% Ingrédients Locaux' : 'Accueil & Attention aux Tables'}
                    </h4>
                    <p className="text-[11px] text-[#F2E9DA]/70">
                      {activeMemberIndex === 0 
                        ? 'Marchés de Cotonou & pêche fraîche du jour'
                        : 'Chaque tablée servie avec chaleur et prévenance'}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#C08A2E] font-medium shrink-0">
                  {activeMemberIndex === 0 ? 'Cuisine' : 'Service'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission Story + Interactive Team Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 0, 0.2, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7A5B45]/30 border border-[#C08A2E]/30 text-[#C08A2E] text-xs font-mono uppercase tracking-widest mb-4">
                <Calendar className="w-3.5 h-3.5" />
                <span>Notre Histoire</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F2E9DA] leading-tight mb-6">
                À propos de nous
              </h2>

              <p className="text-base sm:text-lg text-[#F2E9DA]/85 leading-relaxed mb-6">
                <strong className="text-[#F2E9DA] font-semibold">Le Délice Africain</strong> est un restaurant dédié à la cuisine africaine authentique. Fondé en 2020 par <strong>Jean Dossou</strong>, notre chef passionné, nous mettons un point d'honneur à utiliser des ingrédients frais et locaux pour préparer des plats savoureux et équilibrés.
              </p>

              <p className="text-base sm:text-lg text-[#F2E9DA]/85 leading-relaxed mb-8">
                Notre mission est de faire découvrir les richesses culinaires de l'Afrique à travers des recettes traditionnelles revisitées avec modernité, dans un cadre raffiné et accueillant.
              </p>

              {/* Team selection grid */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs uppercase tracking-widest font-mono text-[#C08A2E] flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4" />
                    <span>L'Équipe du restaurant</span>
                  </h3>
                  <span className="text-[11px] font-mono text-[#F2E9DA]/60 hidden sm:inline-block">
                    Touchez une carte pour afficher le portrait
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {TEAM_MEMBERS.map((member, i) => {
                    const isActive = activeMemberIndex === i;
                    return (
                      <motion.div
                        key={member.name}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        onClick={() => setActiveMemberIndex(i)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 relative overflow-hidden ${
                          isActive
                            ? 'bg-[#7A5B45]/35 border-[#C08A2E] shadow-lg ring-1 ring-[#C08A2E]/50'
                            : 'bg-[#7A5B45]/15 border-[#7A5B45]/40 hover:bg-[#7A5B45]/25 hover:border-[#C08A2E]/50'
                        }`}
                      >
                        {isActive && (
                          <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] font-mono text-[#C08A2E] bg-[#C08A2E]/15 px-2 py-0.5 rounded-full border border-[#C08A2E]/30">
                            <UserCheck className="w-3 h-3" />
                            <span>En vue</span>
                          </div>
                        )}
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`w-16 h-16 rounded-xl object-cover shrink-0 transition-transform ${
                            isActive ? 'border-2 border-[#C08A2E] scale-105' : 'border border-[#C08A2E]/30'
                          }`}
                          loading="lazy"
                        />
                        <div className="pr-12">
                          <h4 className={`font-display text-base font-semibold transition-colors ${
                            isActive ? 'text-[#C08A2E]' : 'text-[#F2E9DA]'
                          }`}>
                            {member.name}
                          </h4>
                          <p className="text-xs text-[#C08A2E] font-mono mb-1">{member.role}</p>
                          <p className="text-[11px] text-[#F2E9DA]/70 line-clamp-2 leading-relaxed">
                            {member.bio}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* CTA button */}
              <button
                id="about-cta-contact"
                onClick={onNavigateContact}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C08A2E] hover:bg-[#a67423] text-[#2B211B] font-semibold text-xs uppercase tracking-wider rounded-full shadow-md transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C08A2E] cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contactez-nous</span>
              </button>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
