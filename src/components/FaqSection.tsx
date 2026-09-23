import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CalendarCheck, Clock, Utensils, MessageCircle, HelpCircle } from 'lucide-react';
import { PRACTICAL_INFO } from '../data/restaurantData';

export interface FaqItem {
  id: string;
  category: 'booking' | 'hours' | 'dietary';
  question: string;
  answer: string;
  highlight?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  // 1. Réservations & Accueil
  {
    id: 'faq-1',
    category: 'booking',
    question: 'Comment fonctionne la réservation en ligne et le ticket QR Code ?',
    answer: 'Notre système de réservation est instantané, sans création de compte requise. Dès la validation, vous recevez un ticket digital unique avec un numéro de référence et un QR Code sécurisé. Vous pouvez le télécharger au format image ou le partager directement via WhatsApp. À votre arrivée au restaurant à Fidjrossè, notre maître d\'hôtel scanne votre ticket pour vous installer immédiatement à la table réservée.',
    highlight: 'Instantané, sans prépaiement obligatoire.',
  },
  {
    id: 'faq-2',
    category: 'booking',
    question: 'Puis-je précommander nos plats à l\'avance pour éviter l\'attente ?',
    answer: 'Oui, c\'est même notre recommandation pour les cuissons au feu de bois (tilapias et poissons braisés nécessitant 25 à 35 minutes de préparation). Grâce à notre module « Tablée Gourmande », vous pouvez composer votre commande à l\'avance en précisant vos accompagnements et le dosage de piment souhaité. Vos plats seront ainsi prêts dès votre installation.',
    highlight: 'Cuissons au feu de bois prêtes dès votre arrivée.',
  },
  {
    id: 'faq-3',
    category: 'booking',
    question: 'Comment organiser un repas de groupe, un anniversaire ou une privatisation ?',
    answer: 'Pour les tablées à partir de 6 personnes ou les demandes de privatisation partielle (VIP Saloon climatisé ou terrasse ombragée), vous pouvez effectuer votre demande en ligne ou contacter directement notre gérance sur WhatsApp au +229 61 00 00 00. Nous composons des menus personnalisés adaptés à vos convives.',
    highlight: 'Privatisation et menus sur mesure disponibles.',
  },
  {
    id: 'faq-4',
    category: 'booking',
    question: 'Est-il possible de modifier ou d\'annuler une réservation sans frais ?',
    answer: 'Absolument. Aucune pénalité n\'est appliquée. Il vous suffit de nous avertir au plus tôt via WhatsApp (+229 61 00 00 00) ou par téléphone (+229 97 00 00 00) en mentionnant votre référence de ticket (ex: DA-XXXXX). Notre équipe réattribuera votre table avec bienveillance.',
    highlight: 'Modification et annulation 100% gratuites.',
  },

  // 2. Horaires & Accès
  {
    id: 'faq-5',
    category: 'hours',
    question: 'Quels sont vos jours et horaires d\'ouverture précis ?',
    answer: 'Le Délice Africain vous accueille du mardi au dimanche : Mardi au Jeudi de 11h30 à 23h00 (service continu déjeuner et dîner), Vendredi et Samedi de 11h30 à 00h00, et Dimanche de 12h00 à 22h30. Le restaurant est fermé le lundi pour permettre l\'approvisionnement direct auprès de la pêche artisanale et des maraîchers locaux.',
    highlight: 'Fermé le lundi pour arrivage frais garanti.',
  },
  {
    id: 'faq-6',
    category: 'hours',
    question: 'Où se situe exactement le restaurant à Cotonou et y a-t-il un parking ?',
    answer: 'Nous sommes situés à Fidjrossè, Cotonou, à seulement 5 minutes de la plage de Fidjrossè (carrefour du club). Le restaurant bénéficie d\'un espace de stationnement réservé et sécurisé avec gardiennage de jour comme de nuit, vous garantissant un accueil en toute tranquillité.',
    highlight: 'Parking gratuit & gardé devant l\'établissement.',
  },
  {
    id: 'faq-7',
    category: 'hours',
    question: 'Proposez-vous le service à emporter ou la livraison sur Cotonou ?',
    answer: 'Oui ! Tous nos plats (braisés, sauces traditionnelles, accompagnements et boissons maison) sont disponibles à emporter dans des emballages thermiques préservant la chaleur et le croustillant. Vous pouvez également commander votre livraison express à domicile ou au bureau en contactant notre équipe via WhatsApp.',
    highlight: 'Emballages thermiques & livraison express.',
  },

  // 3. Régimes Alimentaires & Saveurs
  {
    id: 'faq-8',
    category: 'dietary',
    question: 'Proposez-vous des spécialités végétariennes ou sans gluten ?',
    answer: 'Oui, la richesse de la gastronomie africaine offre de magnifiques options naturellement végétariennes et sans gluten : notre généreuse assiette d\'Attiéké frais de manioc vapeur, nos Frites d\'igname béninoise croustillantes, notre Alloco doré à la banane plantain mûre, notre Salade exotique avocat & mangue fraîche, ainsi que nos beignets traditionnels Kpèssè.',
    highlight: 'Plats végétariens & sans gluten au menu.',
  },
  {
    id: 'faq-9',
    category: 'dietary',
    question: 'Comment choisir le niveau de piment de ses plats ?',
    answer: 'Au Délice Africain, chaque sensibilité est honorée. Vous pouvez sélectionner votre niveau de piment sans aucun surcoût : « Doux » (saveurs aromatiques sans piquant), « Moyen » (la recette béninoise traditionnelle), « Relevé » (piment fort pour les initiés) ou « À part » (piment servi dans une coupelle séparée pour doser vous-même).',
    highlight: 'Choix de 4 niveaux inclus sans supplément.',
  },
  {
    id: 'faq-10',
    category: 'dietary',
    question: 'Vos viandes et volailles sont-elles certifiées Halal ?',
    answer: 'Oui, l\'ensemble de nos viandes (bœuf fermier, pintade du pays, poulet fermier) est rigoureusement approvisionné auprès de bouchers locaux certifiés selon les rites Halal. Nos poissons et crustacés proviennent quant à eux quotidiennement de la pêche côtière locale.',
    highlight: 'Viandes certifiées Halal & poissons de pêche fraîche.',
  },
  {
    id: 'faq-11',
    category: 'dietary',
    question: 'Comment signalez-vous les allergènes alimentaires (arachide, poisson, etc.) ?',
    answer: 'Chaque fiche recette détaille les ingrédients nobles utilisés. Si vous ou l\'un de vos proches présentez une intolérance ou allergie alimentaire (arachide, fruits de mer, sésame...), vous pouvez le préciser dans le champ d\'instructions lors de votre réservation en ligne ou en informer directement notre maître de salle à votre arrivée.',
    highlight: 'Transparence totale et adaptation en cuisine.',
  },
];

interface FaqSectionProps {
  onOpenReservation?: () => void;
}

export const FaqSection = ({ onOpenReservation }: FaqSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'booking' | 'hours' | 'dietary'>('all');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true, // Première question ouverte par défaut pour guider la lecture
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredItems = activeCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Toutes les questions', icon: HelpCircle, count: FAQ_ITEMS.length },
    { id: 'booking', label: 'Réservations & Table', icon: CalendarCheck, count: FAQ_ITEMS.filter((i) => i.category === 'booking').length },
    { id: 'hours', label: 'Horaires & Accès', icon: Clock, count: FAQ_ITEMS.filter((i) => i.category === 'hours').length },
    { id: 'dietary', label: 'Régimes, Épices & Halal', icon: Utensils, count: FAQ_ITEMS.filter((i) => i.category === 'dietary').length },
  ] as const;

  return (
    <section
      id="faq-section"
      className="relative py-24 sm:py-32 bg-[#1A130F] overflow-hidden border-b border-[#7A5B45]/20 text-[#F2E9DA]"
    >
      {/* Decorative Warm Ambient Glows */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#C08A2E]/5 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-10 w-96 h-96 bg-[#B8472E]/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#C08A2E] mb-3 block">
              Foire aux questions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F2E9DA] tracking-tight">
              Tout savoir avant votre <span className="italic-wonky text-[#C08A2E]">visite</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#F2E9DA]/75 font-serif max-w-xl mx-auto leading-relaxed">
              Réservations, composition des tablées, créneaux d'ouverture et régimes alimentaires : retrouvez toutes les réponses pour préparer sereinement votre moment au Délice Africain.
            </p>
          </motion.div>

          {/* Interactive Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#2B211B]/80 border border-[#7A5B45]/30 rounded-2xl max-w-2xl mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#C08A2E] text-[#1C140E] font-bold shadow-md'
                      : 'text-[#F2E9DA]/70 hover:text-[#F2E9DA] hover:bg-[#7A5B45]/20'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-[#1C140E]/20 text-[#1C140E]' : 'bg-[#16110E] text-[#F2E9DA]/50'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredItems.map((item, index) => {
            const isOpen = !!openItems[item.id];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#221814] border-[#C08A2E]/60 shadow-lg'
                    : 'bg-[#221814]/60 hover:bg-[#221814] border-[#7A5B45]/30 hover:border-[#7A5B45]/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 min-h-[56px] flex items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#C08A2E]">
                      {item.category === 'booking' && <span>Réservation</span>}
                      {item.category === 'hours' && <span>Horaires & Lieu</span>}
                      {item.category === 'dietary' && <span>Régimes & Ingrédients</span>}
                      {item.highlight && (
                        <>
                          <span aria-hidden="true" className="text-[#7A5B45]">·</span>
                          <span className="text-[#F2E9DA]/60">{item.highlight}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-display font-medium text-[#F2E9DA] group-hover:text-[#C08A2E] transition-colors">
                      {item.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#C08A2E] text-[#1C140E] border-[#C08A2E] rotate-180'
                      : 'bg-[#16110E] text-[#F2E9DA]/70 border-[#7A5B45]/40 group-hover:text-white group-hover:border-[#C08A2E]/60'
                  }`}>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`content-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-[#7A5B45]/20 mt-1">
                        <p className="text-sm sm:text-base text-[#F2E9DA]/85 font-serif leading-relaxed pt-3">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Fast Contact & Booking Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[#2B211B] border border-[#7A5B45]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-display font-medium text-[#F2E9DA]">
              Vous avez une demande particulière ?
            </h4>
            <p className="text-xs sm:text-sm font-serif text-[#F2E9DA]/70 max-w-lg">
              Notre équipe d'accueil à Fidjrossè est joignable 7j/7 pour adapter votre table, vos horaires ou répondre à vos régimes spécifiques.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${PRACTICAL_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Bonjour%20Le%20D%C3%A9lice%20Africain%2C%20j%27ai%20une%20question%20pour%20ma%20venue%20%3A`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all active:scale-95 shadow-md"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Échanger sur WhatsApp</span>
            </a>

            {onOpenReservation && (
              <button
                type="button"
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-[#C08A2E] hover:bg-[#d49933] text-[#1C140E] text-xs font-mono uppercase tracking-wider font-bold transition-all active:scale-95 shadow-md cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 shrink-0" />
                <span>Réserver une table</span>
              </button>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
