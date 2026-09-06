import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar, 
  Users, 
  Clock, 
  Phone, 
  Utensils, 
  CheckCircle2, 
  Loader2, 
  MessageSquare,
  Printer,
  Receipt as ReceiptIcon,
  Download
} from 'lucide-react';
import { MenuItem, PRACTICAL_INFO } from '../data/restaurantData';
import { ReceiptModal, ReceiptData, ReceiptItem } from './ReceiptModal';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDish?: MenuItem | null;
  initialOrderText?: string;
  initialTotalAmount?: number;
  initialItems?: ReceiptItem[];
  prepTimeEstimated?: string;
}

export const ReservationModal = ({ 
  isOpen, 
  onClose, 
  initialDish, 
  initialOrderText, 
  initialTotalAmount,
  initialItems = [],
  prepTimeEstimated
}: ReservationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: '2',
    notes: '',
  });

  const [attachedOrder, setAttachedOrder] = useState<string | null>(null);
  const [attachedTotal, setAttachedTotal] = useState<number | null>(null);
  const [attachedItems, setAttachedItems] = useState<ReceiptItem[]>([]);

  // Receipt Modal State
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (initialOrderText) {
        setAttachedOrder(initialOrderText);
        setAttachedTotal(initialTotalAmount || null);
        setAttachedItems(initialItems || []);
        setFormData(prev => ({
          ...prev,
          notes: ''
        }));
      } else if (initialDish) {
        setAttachedOrder(null);
        setAttachedTotal(initialDish.price);
        setAttachedItems([{
          name: initialDish.name,
          quantity: 1,
          unitPrice: initialDish.price
        }]);
        setFormData(prev => ({
          ...prev,
          notes: `Intérêt pour : ${initialDish.name}`
        }));
      } else {
        setAttachedOrder(null);
        setAttachedTotal(null);
        setAttachedItems([]);
        setFormData(prev => ({
          ...prev,
          notes: ''
        }));
      }
    }
  }, [isOpen, initialOrderText, initialDish, initialTotalAmount, initialItems]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      // Build authentic receipt data
      const generatedTicketNumber = `DA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const itemsToBill: ReceiptItem[] = attachedItems.length > 0 
        ? attachedItems 
        : (initialDish ? [{
            name: initialDish.name,
            quantity: 1,
            unitPrice: initialDish.price
          }] : [{
            name: `Réservation de Table (${formData.guests} couverts)`,
            quantity: 1,
            unitPrice: 0
          }]);

      const calculatedTotal = attachedTotal || (initialDish ? initialDish.price : 0);

      const newReceipt: ReceiptData = {
        ticketNumber: generatedTicketNumber,
        date: formData.date,
        time: formData.time,
        serviceType: 'sur-place',
        customerName: formData.name,
        customerPhone: formData.phone,
        guestsCount: formData.guests,
        specialInstructions: formData.notes,
        items: itemsToBill,
        totalAmount: calculatedTotal,
        prepTimeEstimated: prepTimeEstimated || (initialDish?.prepTime ? initialDish.prepTime : undefined)
      };

      setReceiptData(newReceipt);
      try {
        localStorage.setItem(`da_ticket_${generatedTicketNumber}`, JSON.stringify(newReceipt));
        localStorage.setItem('da_latest_ticket', JSON.stringify(newReceipt));
      } catch (e) {
        console.warn('Could not save ticket to localStorage', e);
      }
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setShowReceipt(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="reservation-modal-overlay"
        onClick={handleResetAndClose}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        <motion.div
          id="reservation-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-[#2B211B] border border-[#C08A2E]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#7A5B45]/30 hover:bg-[#B8472E] text-[#F2E9DA] transition-colors"
            aria-label="Fermer la fenêtre"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess && receiptData ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-4 space-y-4 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#C08A2E] block mb-1">
                  Confirmation Immédiate
                </span>
                <h3 className="text-2xl font-display font-semibold text-[#F2E9DA]">
                  Réservation & Commande Enregistrées !
                </h3>
                <p className="text-xs text-[#F2E9DA]/75 font-mono mt-1">
                  Votre ticket officiel a été généré avec succès.
                </p>
              </div>

              {/* Styled Voucher Preview Card */}
              <div className="bg-[#FAF7F2] text-[#1D1714] rounded-2xl p-4 sm:p-5 text-left font-mono text-xs border border-[#D9CFC4] shadow-md space-y-2">
                <div className="flex justify-between items-center pb-2 border-b border-dashed border-[#1D1714]/20">
                  <span className="font-display font-bold text-sm tracking-tight uppercase">Le Délice Africain</span>
                  <span className="text-xs font-bold text-[#B8472E] bg-[#B8472E]/10 px-2 py-0.5 rounded">
                    {receiptData.ticketNumber}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#594A42]">
                  <div>
                    <span className="block text-[10px] uppercase text-[#8C7D75]">Client</span>
                    <strong className="text-[#1D1714]">{receiptData.customerName}</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#8C7D75]">Service</span>
                    <strong className="text-[#1D1714]">{receiptData.guestsCount} couverts</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#8C7D75]">Date & Heure</span>
                    <strong className="text-[#1D1714]">{receiptData.date} à {receiptData.time}</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#8C7D75]">Total Estimé</span>
                    <strong className="text-[#B8472E]">{receiptData.totalAmount.toLocaleString('fr-FR')} FCFA</strong>
                  </div>
                </div>

                {receiptData.items.length > 0 && (
                  <div className="pt-2 border-t border-dashed border-[#1D1714]/20 text-[10px] text-[#594A42]">
                    <span className="font-bold text-[#1D1714] block mb-0.5">Mets pré-commandés :</span>
                    <div className="max-h-20 overflow-y-auto space-y-1">
                      {receiptData.items.map((item, i) => (
                        <div key={i} className="flex justify-between">
                          <span>{item.quantity}x {item.name}</span>
                          <span>{((item.unitPrice + (item.sidesPrice || 0)) * item.quantity).toLocaleString('fr-FR')} F</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Options C Actions: Print / PDF & WhatsApp */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => setShowReceipt(true)}
                  className="w-full py-3.5 px-4 bg-[#C08A2E] hover:bg-[#a67423] text-[#2B211B] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ReceiptIcon className="w-4 h-4" />
                  <span>Ouvrir & Imprimer le Ticket (PDF)</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/22961000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white font-mono text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={handleResetAndClose}
                    className="py-2.5 px-3 bg-[#7A5B45]/40 hover:bg-[#7A5B45]/60 text-[#F2E9DA] font-mono text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#C08A2E] block mb-1">
                  Table & Dégustation
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#F2E9DA]">
                  Réserver une <span className="italic-wonky text-[#C08A2E]">table</span>
                </h3>
                <p className="text-xs text-[#F2E9DA]/70 font-mono mt-1">
                  Fidjrossè, Cotonou • Service 11h30 – 23h00
                </p>
              </div>

              {attachedOrder && (
                <div className="mb-6 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-emerald-300">🍽️ Pré-commande associée</p>
                    <p className="text-[11px] font-mono text-[#F2E9DA]/80">Transmise directement au Chef pour votre venue</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {attachedTotal && (
                      <span className="font-mono text-xs font-bold text-[#C08A2E] bg-[#2B211B] px-2 py-1 rounded-lg border border-[#C08A2E]/40">
                        {attachedTotal.toLocaleString('fr-FR')} FCFA
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setAttachedOrder(null);
                        setAttachedTotal(null);
                      }}
                      className="p-1 rounded-md text-[#F2E9DA]/40 hover:text-[#B8472E] hover:bg-[#2B211B] transition-colors"
                      title="Détacher la commande"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {initialDish && !attachedOrder && (
                <div className="mb-6 p-3 rounded-xl bg-[#7A5B45]/20 border border-[#C08A2E]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={initialDish.image}
                      alt={initialDish.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-xs font-semibold text-[#F2E9DA]">{initialDish.name}</p>
                      <p className="text-[11px] font-mono text-[#C08A2E]">{initialDish.formattedPrice}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#F2E9DA]/80 mb-1">
                      Votre Nom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean Dossou"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#7A5B45]/15 border border-[#7A5B45]/50 text-[#F2E9DA] placeholder-[#F2E9DA]/30 focus:outline-none focus:border-[#C08A2E] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#F2E9DA]/80 mb-1">
                      Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+229 97 00 00 00"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#7A5B45]/15 border border-[#7A5B45]/50 text-[#F2E9DA] placeholder-[#F2E9DA]/30 focus:outline-none focus:border-[#C08A2E] text-sm font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#F2E9DA]/80 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl bg-[#7A5B45]/15 border border-[#7A5B45]/50 text-[#F2E9DA] text-xs font-mono focus:outline-none focus:border-[#C08A2E]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#F2E9DA]/80 mb-1">
                      Heure
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl bg-[#2B211B] border border-[#7A5B45]/50 text-[#F2E9DA] text-xs font-mono focus:outline-none focus:border-[#C08A2E]"
                    >
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#F2E9DA]/80 mb-1">
                      Couverts
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl bg-[#2B211B] border border-[#7A5B45]/50 text-[#F2E9DA] text-xs font-mono focus:outline-none focus:border-[#C08A2E]"
                    >
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                      <option value="5">5 personnes</option>
                      <option value="6+">6+ personnes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F2E9DA]/80 mb-1">
                    Précisions ou demandes particulières
                  </label>
                  <input
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Terrasse, anniversaire, plat pré-commandé..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#7A5B45]/15 border border-[#7A5B45]/50 text-[#F2E9DA] placeholder-[#F2E9DA]/30 focus:outline-none focus:border-[#C08A2E] text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#C08A2E] hover:bg-[#a67423] disabled:opacity-70 text-[#2B211B] font-semibold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmission en cours...</span>
                    </>
                  ) : (
                    <>
                      <Utensils className="w-4 h-4" />
                      <span>Confirmer la réservation</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>

      {/* Option C: Traditional Addition / Receipt Voucher Modal for print & PDF */}
      <ReceiptModal 
        isOpen={showReceipt} 
        onClose={() => setShowReceipt(false)} 
        data={receiptData} 
      />
    </AnimatePresence>
  );
};
