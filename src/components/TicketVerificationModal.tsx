import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, Calendar, Clock, Users, Utensils, Receipt as ReceiptIcon, ShieldCheck } from 'lucide-react';
import { ReceiptData } from './ReceiptModal';

interface TicketVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticketData: {
    ticketNumber: string;
    client: string;
    phone?: string;
    service: string;
    guests: number;
    date: string;
    time: string;
    total: number;
    items?: { name: string; quantity: number; unitPrice: number }[];
  } | null;
  onOpenFullReceipt: (receipt: ReceiptData) => void;
}

export const TicketVerificationModal: React.FC<TicketVerificationModalProps> = ({
  isOpen,
  onClose,
  ticketData,
  onOpenFullReceipt,
}) => {
  if (!isOpen || !ticketData) return null;

  const handleShowFull = () => {
    const fullReceipt: ReceiptData = {
      ticketNumber: ticketData.ticketNumber,
      date: ticketData.date,
      time: ticketData.time,
      serviceType: ticketData.service === 'emporter' || ticketData.service === 'a-emporter' ? 'emporter' : 'sur-place',
      customerName: ticketData.client,
      customerPhone: ticketData.phone,
      guestsCount: ticketData.guests,
      items: ticketData.items && ticketData.items.length > 0 
        ? ticketData.items 
        : [{ name: `Service Table (${ticketData.guests} couverts)`, quantity: 1, unitPrice: ticketData.total }],
      totalAmount: ticketData.total,
    };
    onClose();
    onOpenFullReceipt(fullReceipt);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          className="relative w-full max-w-md bg-[#2B211B] text-[#F2E9DA] rounded-2xl border border-[#7A5B45]/50 shadow-2xl p-6 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#7A5B45]/30 hover:bg-[#B8472E] text-[#F2E9DA] transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Verification Header */}
          <div className="text-center space-y-2 mb-5">
            <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Ticket Officiel Vérifié</span>
            </div>
            <h3 className="text-xl font-display font-bold text-[#F2E9DA]">
              Le Délice Africain
            </h3>
            <p className="text-[11px] text-[#C08A2E] font-mono">
              Fidjrossè Plage • Cotonou, Bénin
            </p>
          </div>

          {/* Verified Data Card */}
          <div className="bg-[#FAF7F2] text-[#1D1714] rounded-xl p-4 font-mono text-xs border border-[#D9CFC4] space-y-2.5">
            <div className="flex justify-between items-center pb-2 border-b border-dashed border-[#1D1714]/20">
              <span className="text-[11px] uppercase text-[#7A6B63] font-bold">Référence</span>
              <span className="text-xs font-extrabold text-[#B8472E] bg-[#B8472E]/10 px-2 py-0.5 rounded">
                {ticketData.ticketNumber}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="block text-[10px] uppercase text-[#7A6B63]">Client</span>
                <strong className="text-[#1D1714] text-xs">{ticketData.client}</strong>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-[#7A6B63]">Service</span>
                <strong className="text-[#1D1714] text-xs">
                  {ticketData.service === 'a-emporter' ? 'À Emporter' : `Sur Place (${ticketData.guests} pers)`}
                </strong>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#C08A2E]" />
                <span className="text-[11px]">{ticketData.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#C08A2E]" />
                <span className="text-[11px]">{ticketData.time}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-dashed border-[#1D1714]/20 flex justify-between items-baseline font-bold text-sm">
              <span className="text-[11px] uppercase text-[#594A42]">Total à régler :</span>
              <span className="text-base font-extrabold text-[#B8472E]">
                {ticketData.total.toLocaleString('fr-FR')} FCFA
              </span>
            </div>

            {ticketData.items && ticketData.items.length > 0 && (
              <div className="pt-2 border-t border-dotted border-[#1D1714]/20 text-[10px] text-[#594A42] space-y-1">
                <span className="font-bold text-[#1D1714] block">Détail des mets :</span>
                {ticketData.items.map((it, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>{it.quantity}x {it.name}</span>
                    <span>{(it.unitPrice * it.quantity).toLocaleString('fr-FR')} F</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="mt-5 space-y-2">
            <button
              onClick={handleShowFull}
              className="w-full py-3 px-4 bg-[#C08A2E] hover:bg-[#a67423] text-[#2B211B] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <ReceiptIcon className="w-4 h-4" />
              <span>Afficher & Imprimer le Ticket Complet</span>
            </button>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-[#7A5B45]/30 hover:bg-[#7A5B45]/50 text-[#F2E9DA] font-mono text-xs rounded-xl transition-colors cursor-pointer"
            >
              Fermer la vérification
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
