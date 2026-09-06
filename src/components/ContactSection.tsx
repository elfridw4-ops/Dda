import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRACTICAL_INFO } from '../data/restaurantData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2, MessageCircle } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact-section" className="relative py-24 sm:py-32 bg-[#2B211B] overflow-hidden border-b border-[#7A5B45]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#C08A2E] mb-3 block">
              Nous Joindre
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F2E9DA] leading-tight mb-4">
              Contactez-<span className="italic-wonky text-[#C08A2E]">nous</span>
            </h2>
            <p className="text-base text-[#F2E9DA]/80 leading-relaxed">
              Une question ou une réservation ? N'hésitez pas à nous contacter. Nous serons ravis de vous accueillir.
            </p>
          </motion.div>
        </div>

        {/* 2 Columns: Practical Info + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Info & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.33, 0, 0.2, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Practical Contact Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#7A5B45]/15 border border-[#7A5B45]/40 shadow-xl space-y-6">
              <h3 className="font-display text-xl font-medium text-[#F2E9DA] flex items-center gap-2">
                <span>Informations du restaurant</span>
              </h3>

              <div className="space-y-4 text-sm text-[#F2E9DA]/85">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#C08A2E]/20 text-[#C08A2E] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#F2E9DA] font-semibold">{PRACTICAL_INFO.address}</strong>
                    <span className="text-xs text-[#F2E9DA]/70">{PRACTICAL_INFO.landmark}</span>
                    <span className="block text-[11px] font-mono text-[#C08A2E] mt-0.5">GPS : {PRACTICAL_INFO.coordinates}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="p-2 rounded-lg bg-[#C08A2E]/20 text-[#C08A2E] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <a href="tel:+22997000000" className="font-mono text-sm hover:text-[#C08A2E] transition-colors block">
                      {PRACTICAL_INFO.phone}
                    </a>
                    <a
                      href="https://wa.me/22961000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-400 font-mono flex items-center gap-1 mt-0.5 hover:underline"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp : {PRACTICAL_INFO.whatsapp}</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="p-2 rounded-lg bg-[#C08A2E]/20 text-[#C08A2E] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <a href={`mailto:${PRACTICAL_INFO.email}`} className="font-mono text-sm hover:text-[#C08A2E] transition-colors">
                      {PRACTICAL_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours snippet */}
              <div className="pt-6 border-t border-[#7A5B45]/30">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#C08A2E] mb-3 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Horaires d'ouverture</span>
                </h4>
                <div className="space-y-2 text-xs font-mono">
                  {PRACTICAL_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center text-[#F2E9DA]/80">
                      <span>{h.days}</span>
                      <span className={h.hours.includes('Fermé') ? 'text-[#B8472E] font-medium' : 'text-[#F2E9DA]'}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.33, 0, 0.2, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#7A5B45]/15 border border-[#7A5B45]/40 shadow-xl relative">
              <h3 className="font-display text-xl font-medium text-[#F2E9DA] mb-6">
                Envoyez-nous un message
              </h3>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success-banner"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 rounded-xl bg-[#7A5B45]/30 border border-emerald-500/40 text-center space-y-3 my-8"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h4 className="text-lg font-display font-semibold text-[#F2E9DA]">
                      Merci pour votre message !
                    </h4>
                    <p className="text-sm text-[#F2E9DA]/80 max-w-sm mx-auto">
                      Nous vous répondrons sous 24h. À très bientôt au Délice Africain !
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-5 py-2 rounded-full bg-[#7A5B45]/40 hover:bg-[#7A5B45]/60 text-xs font-mono text-[#F2E9DA] transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#F2E9DA]/80 mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Jean Houndégnon"
                        className="w-full px-4 py-3 rounded-xl bg-[#2B211B]/90 border border-[#7A5B45]/50 text-[#F2E9DA] placeholder-[#F2E9DA]/30 focus:outline-none focus:border-[#B8472E] focus:ring-1 focus:ring-[#B8472E] transition-all text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#F2E9DA]/80 mb-1.5">
                          Adresse Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="votre@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#2B211B]/90 border border-[#7A5B45]/50 text-[#F2E9DA] placeholder-[#F2E9DA]/30 focus:outline-none focus:border-[#B8472E] focus:ring-1 focus:ring-[#B8472E] transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-mono uppercase tracking-wider text-[#F2E9DA]/80 mb-1.5">
                          Téléphone <span className="text-[10px] text-[#F2E9DA]/40">(optionnel)</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+229 97 00 00 00"
                          className="w-full px-4 py-3 rounded-xl bg-[#2B211B]/90 border border-[#7A5B45]/50 text-[#F2E9DA] placeholder-[#F2E9DA]/30 focus:outline-none focus:border-[#B8472E] focus:ring-1 focus:ring-[#B8472E] transition-all text-sm font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#F2E9DA]/80 mb-1.5">
                        Message ou demande de réservation *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Votre message, nombre de couverts souhaité, date..."
                        className="w-full px-4 py-3 rounded-xl bg-[#2B211B]/90 border border-[#7A5B45]/50 text-[#F2E9DA] placeholder-[#F2E9DA]/30 focus:outline-none focus:border-[#B8472E] focus:ring-1 focus:ring-[#B8472E] transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#B8472E] hover:bg-[#a13b24] disabled:opacity-70 text-[#F2E9DA] font-semibold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#B8472E]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
