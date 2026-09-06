import { motion } from 'motion/react';
import { TEAM_MEMBERS, IMAGES } from '../data/restaurantData';
import { Award, Calendar, HeartHandshake, Utensils, MessageSquare } from 'lucide-react';

interface AboutTeamSectionProps {
  onNavigateContact: () => void;
}

export const AboutTeamSection = ({ onNavigateContact }: AboutTeamSectionProps) => {
  return (
    <section id="apropos-section" className="relative py-24 sm:py-32 bg-[#2B211B] overflow-hidden border-b border-[#7A5B45]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Chef showcase on left, Story & Team on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Chef Portrait & Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#7A5B45]/20 border border-[#7A5B45]/40 shadow-2xl p-3 sm:p-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <img
                  src={IMAGES.chef}
                  alt="Chef Jean Dossou - Fondateur du Délice Africain"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B] via-transparent to-transparent" />
                
                {/* Chef Info Float */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#2B211B]/95 backdrop-blur-md border border-[#C08A2E]/40 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2 text-[#C08A2E] text-xs font-mono mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Depuis 2020 à Cotonou</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-[#F2E9DA]">Jean Dossou</h3>
                  <p className="text-xs text-[#F2E9DA]/70 font-mono">Chef cuisinier & Fondateur</p>
                </div>
              </div>

              {/* Quality pledge banner */}
              <div className="mt-4 p-4 rounded-xl bg-[#2B211B]/80 border border-[#7A5B45]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C08A2E]/20 flex items-center justify-center text-[#C08A2E]">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F2E9DA]">100% Ingrédients Locaux</h4>
                    <p className="text-[11px] text-[#F2E9DA]/70">Marchés de Cotonou & pêche fraîche</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#C08A2E] font-medium">Bénin</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission Story + Team Mini-Grid */}
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

              {/* Team mini grid */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest font-mono text-[#C08A2E] mb-4 flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4" />
                  <span>L'Équipe du restaurant</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {TEAM_MEMBERS.map((member, i) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="p-4 rounded-2xl bg-[#7A5B45]/15 border border-[#7A5B45]/40 flex items-center gap-4 group hover:border-[#C08A2E]/50 transition-colors"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-xl object-cover border border-[#C08A2E]/30 shrink-0"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-display text-base font-semibold text-[#F2E9DA] group-hover:text-[#C08A2E] transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-xs text-[#C08A2E] font-mono mb-1">{member.role}</p>
                        <p className="text-[11px] text-[#F2E9DA]/70 line-clamp-2 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA button */}
              <button
                id="about-cta-contact"
                onClick={onNavigateContact}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C08A2E] hover:bg-[#a67423] text-[#2B211B] font-semibold text-xs uppercase tracking-wider rounded-full shadow-md transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C08A2E]"
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
