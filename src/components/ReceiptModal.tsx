import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import JsBarcode from 'jsbarcode';
import QRCode from 'qrcode';
import { 
  Printer, 
  X, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Utensils, 
  Receipt as ReceiptIcon,
  Download,
  QrCode as QrCodeIcon,
  Barcode as BarcodeIcon
} from 'lucide-react';
import { PRACTICAL_INFO } from '../data/restaurantData';

export interface ReceiptItem {
  name: string;
  quantity: number;
  unitPrice: number;
  sidesName?: string;
  sidesPrice?: number;
  spiceLevel?: string;
}

export interface ReceiptData {
  ticketNumber: string;
  date: string;
  time: string;
  serviceType: 'sur-place' | 'emporter';
  customerName: string;
  customerPhone: string;
  guestsCount?: string;
  specialInstructions?: string;
  items: ReceiptItem[];
  totalAmount: number;
  prepTimeEstimated?: string;
}

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ReceiptData | null;
}

// Helper to generate official standard Code 128 SVG for print & export
const generateCode128Svg = (code: string): string => {
  try {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    JsBarcode(svg, code, {
      format: "CODE128",
      lineColor: "#000000",
      width: 2,
      height: 52,
      displayValue: true,
      text: `*${code}*`,
      font: "monospace",
      fontSize: 12,
      textMargin: 6,
      margin: 14,
      background: "#ffffff"
    });
    svg.setAttribute("style", "display: block; margin: 0 auto; max-width: 100%; height: auto;");
    return svg.outerHTML;
  } catch (err) {
    console.error("Code128 generation error:", err);
    return "";
  }
};

// React component for real scannable Code 128 Barcode
const ScannableBarcode = ({ code }: { code: string }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current && code) {
      try {
        JsBarcode(svgRef.current, code, {
          format: "CODE128",
          lineColor: "#000000",
          width: 2,
          height: 52,
          displayValue: true,
          text: `*${code}*`,
          font: "monospace",
          fontSize: 12,
          textMargin: 6,
          margin: 14,
          background: "#ffffff"
        });
      } catch (err) {
        console.error("JsBarcode error:", err);
      }
    }
  }, [code]);

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-white rounded-lg border border-[#1D1714]/15 shadow-xs mx-auto max-w-full overflow-hidden">
      <svg ref={svgRef} className="block max-w-full h-auto" />
    </div>
  );
};

// Helper to generate full smartphone-scannable web URL for the QR code
export const getQrCodePayload = (data: ReceiptData): string => {
  if (typeof window !== 'undefined' && window.location) {
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    const searchParams = new URLSearchParams({
      ticket: data.ticketNumber,
      client: data.customerName || 'Client',
      phone: data.customerPhone || '',
      service: data.serviceType,
      guests: String(data.guestsCount || 2),
      date: data.date,
      time: data.time,
      total: String(data.totalAmount)
    });
    return `${origin}${pathname}?${searchParams.toString()}`;
  }
  return `https://le-delice-africain.bj/?ticket=${data.ticketNumber}`;
};

// React component for real scannable 2D QR Code
const ScannableQrCode = ({ data }: { data: ReceiptData }) => {
  const [dataUrl, setDataUrl] = useState<string>('');
  const qrUrl = getQrCodePayload(data);

  useEffect(() => {
    if (qrUrl) {
      QRCode.toDataURL(qrUrl, {
        width: 170,
        margin: 1,
        color: { dark: '#000000', light: '#ffffff' },
        errorCorrectionLevel: 'M'
      }).then(setDataUrl).catch(console.error);
    }
  }, [qrUrl]);

  if (!dataUrl) return null;

  return (
    <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-[#1D1714]/15 shadow-xs mx-auto max-w-[220px]">
      <img src={dataUrl} alt={`QR Code ${data.ticketNumber}`} className="w-36 h-36 object-contain" />
      <span className="text-[11px] font-mono font-bold tracking-wider text-[#1D1714] mt-1.5">
        *{data.ticketNumber}*
      </span>
    </div>
  );
};

export const ReceiptModal = ({ isOpen, onClose, data }: ReceiptModalProps) => {
  const receiptRef = useRef<HTMLDivElement>(null);
  const [codeDisplayMode, setCodeDisplayMode] = useState<'barcode' | 'qrcode'>('qrcode');

  if (!isOpen || !data) return null;

  // Tax calculation approximation (18% TVA incluse)
  const tvaAmount = Math.round(data.totalAmount - (data.totalAmount / 1.18));

  const handlePrint = async () => {
    // Generate isolated print document via hidden iframe to ensure ZERO contamination from main page
    let printFrame = document.getElementById('receipt-hidden-iframe') as HTMLIFrameElement;
    if (!printFrame) {
      printFrame = document.createElement('iframe');
      printFrame.id = 'receipt-hidden-iframe';
      printFrame.style.position = 'fixed';
      printFrame.style.right = '0';
      printFrame.style.bottom = '0';
      printFrame.style.width = '0';
      printFrame.style.height = '0';
      printFrame.style.border = '0';
      printFrame.style.opacity = '0';
      printFrame.style.pointerEvents = 'none';
      document.body.appendChild(printFrame);
    }

    const itemsHtml = data.items.length === 0 
      ? `<tr><td colspan="2" style="text-align:center; padding: 12px 0; color: #666; font-style: italic;">Réservation de table sans pré-commande de mets</td></tr>`
      : data.items.map(item => {
          const lineUnit = item.unitPrice + (item.sidesPrice || 0);
          const lineTotal = lineUnit * item.quantity;
          const sidesStr = item.sidesName && item.sidesName !== 'Sans accompagnement' 
            ? `<div style="font-size: 10px; color: #555; padding-left: 8px;">↳ Accomp. : ${item.sidesName} ${item.sidesPrice ? `(+${item.sidesPrice.toLocaleString('fr-FR')} F)` : '(Inclus)'}</div>` 
            : '';
          const spiceStr = item.spiceLevel 
            ? `<div style="font-size: 10px; color: #555; padding-left: 8px;">↳ Piment : ${item.spiceLevel} (Inclus)</div>` 
            : '';
          return `
            <tr style="border-bottom: 1px dotted #ccc;">
              <td style="padding: 6px 0; vertical-align: top;">
                <strong>${item.quantity}x</strong> ${item.name}
                ${sidesStr}
                ${spiceStr}
              </td>
              <td style="padding: 6px 0; vertical-align: top; text-align: right; font-weight: bold; white-space: nowrap;">
                ${lineTotal.toLocaleString('fr-FR')} F
              </td>
            </tr>
          `;
        }).join('');

    // Pre-generate printable codes
    const barcodeSvgHtml = generateCode128Svg(data.ticketNumber);
    const qrPayload = getQrCodePayload(data);
    let qrCodeImgHtml = '';
    try {
      const qrDataUrl = await QRCode.toDataURL(qrPayload, {
        width: 150,
        margin: 1,
        color: { dark: '#000000', light: '#ffffff' },
        errorCorrectionLevel: 'M'
      });
      qrCodeImgHtml = `
        <img src="${qrDataUrl}" style="width: 120px; height: 120px; display: block; margin: 0 auto;" alt="QR Code Ticket" />
        <div style="font-size: 10px; font-family: monospace; font-weight: bold; margin-top: 4px; color: #111;">*${data.ticketNumber}*</div>
        <div style="font-size: 8px; color: #444; margin-top: 2px;">Scannez avec l'appareil photo pour vérifier en ligne</div>
      `;
    } catch (err) {
      console.error(err);
    }

    let codeSectionHtml = '';
    if (codeDisplayMode === 'barcode') {
      codeSectionHtml = `
        <div class="barcode-box" style="text-align: center; margin: 10px auto 4px auto; background: #fff; padding: 4px; border-radius: 4px;">
          ${barcodeSvgHtml}
        </div>
      `;
    } else {
      codeSectionHtml = `
        <div class="qrcode-box" style="text-align: center; margin: 10px auto 4px auto; background: #fff; padding: 6px; border-radius: 4px;">
          ${qrCodeImgHtml}
        </div>
      `;
    }

    const frameDoc = printFrame.contentWindow?.document;
    if (frameDoc) {
      frameDoc.open();
      frameDoc.write(`
        <!DOCTYPE html>
        <html lang="fr">
          <head>
            <meta charset="UTF-8" />
            <title>Ticket - ${data.ticketNumber}</title>
            <style>
              @page {
                size: 80mm auto;
                margin: 4mm;
              }
              body {
                font-family: 'Courier New', Courier, monospace, sans-serif;
                margin: 0;
                padding: 12px 10px;
                color: #111;
                background: #fff;
                font-size: 11px;
                line-height: 1.4;
                width: 100%;
                max-width: 320px;
                margin: 0 auto;
                box-sizing: border-box;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .center { text-align: center; }
              .bold { font-weight: bold; }
              .header-title { font-size: 15px; font-weight: bold; text-transform: uppercase; margin: 0; letter-spacing: 0.5px; }
              .subtitle { font-size: 9.5px; text-transform: uppercase; margin-top: 2px; color: #444; }
              .contact-line { font-size: 8.5px; color: #555; margin-top: 1.5px; }
              .dashed-line { border-bottom: 1px dashed #222; margin: 8px 0; }
              .double-line { border-bottom: 2px dashed #000; margin: 10px 0; }
              .info-row { display: flex; justify-content: space-between; margin-bottom: 3px; font-size: 11px; }
              .table-items { width: 100%; border-collapse: collapse; margin-top: 4px; }
              .total-row { display: flex; justify-content: space-between; font-size: 13px; font-weight: bold; margin-top: 6px; padding-top: 4px; border-top: 1px dotted #333; }
              .barcode { text-align: center; margin: 12px auto 4px auto; width: 100%; }
              .footer { text-align: center; font-size: 9px; color: #555; margin-top: 8px; line-height: 1.3; }
            </style>
          </head>
          <body>
            <div class="center">
              <div style="width: 26px; height: 26px; border-radius: 50%; border: 1.2px solid #8c2e17; color: #8c2e17; margin: 0 auto 5px auto; line-height: 24px; font-size: 12px; text-align: center;">
                🍴
              </div>
              <div class="header-title" style="font-family: Georgia, serif;">LE DÉLICE AFRICAIN</div>
              <div class="subtitle">Saveurs Authentiques & Grillades au Feu de Bois</div>
              <div class="contact-line">Fidjrossè Plage, Rue des Flamboyants • Cotonou, Bénin</div>
              <div class="contact-line">Tél : +229 61 00 00 00 / +229 97 00 00 00</div>
              <div class="contact-line" style="font-size: 8px;">IFU : 0202011482910 • RCCM : RB/COT/20-A-48291</div>
            </div>

            <div class="double-line"></div>

            <div class="info-row">
              <span class="bold">RÉFÉRENCE :</span>
              <span class="bold" style="letter-spacing: 1px; color: #8c2e17;">${data.ticketNumber}</span>
            </div>
            <div class="info-row">
              <span>Date & Heure :</span>
              <span>${data.date} à ${data.time}</span>
            </div>
            <div class="info-row">
              <span>Client :</span>
              <span class="bold">${data.customerName || 'Client de passage'}</span>
            </div>
            ${data.customerPhone ? `
            <div class="info-row">
              <span>Téléphone :</span>
              <span>${data.customerPhone}</span>
            </div>` : ''}
            <div class="info-row">
              <span>Service :</span>
              <span class="bold" style="display: inline-block; padding: 1px 6px; background: #eee; border-radius: 4px; font-size: 10px;">${data.serviceType === 'sur-place' ? `SUR PLACE (${data.guestsCount || 2} COUVERTS)` : 'À EMPORTER'}</span>
            </div>

            <div class="dashed-line"></div>

            <table class="table-items">
              <thead>
                <tr style="border-bottom: 1px dashed #555; font-size: 10px; text-transform: uppercase;">
                  <th style="text-align: left; padding-bottom: 4px;">Désignation</th>
                  <th style="text-align: right; padding-bottom: 4px;">Montant</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>

            <div class="double-line"></div>

            <div class="info-row" style="font-size: 10px; color: #444;">
              <span>Sous-total HT :</span>
              <span>${(data.totalAmount - tvaAmount).toLocaleString('fr-FR')} FCFA</span>
            </div>
            <div class="info-row" style="font-size: 10px; color: #444;">
              <span>TVA (18% incluse) :</span>
              <span>${tvaAmount.toLocaleString('fr-FR')} FCFA</span>
            </div>
            <div class="total-row">
              <span>TOTAL TTC :</span>
              <span style="color: #000;">${data.totalAmount.toLocaleString('fr-FR')} FCFA</span>
            </div>

            ${data.prepTimeEstimated ? `
            <div style="margin-top: 8px; font-size: 10px; color: #333;">
              ⏱️ <strong>Préparation estimée :</strong> ${data.prepTimeEstimated}
            </div>` : ''}

            ${data.specialInstructions ? `
            <div style="margin-top: 4px; font-size: 10px; color: #333; font-style: italic;">
              📝 <strong>Note :</strong> "${data.specialInstructions}"
            </div>` : ''}

            <div class="dashed-line"></div>

            ${codeSectionHtml}

            <div class="footer">
              <strong>Akpé kaká ! Merci de votre dégustation.</strong><br/>
              Veuillez présenter ce ticket à votre arrivée.<br/>
              Le Délice Africain • Service 7j/7 de 11h30 à 23h00
            </div>
          </body>
        </html>
      `);
      frameDoc.close();

      setTimeout(() => {
        try {
          printFrame.contentWindow?.focus();
          printFrame.contentWindow?.print();
        } catch (err) {
          window.print();
        }
      }, 250);
    } else {
      window.print();
    }
  };

  const handleWhatsAppShare = () => {
    const lines = [
      `🧾 *TICKET DÉLICE AFRICAIN - N° ${data.ticketNumber}*`,
      `📅 *Date :* ${data.date} à ${data.time}`,
      `👤 *Client :* ${data.customerName} (${data.customerPhone})`,
      `🪑 *Service :* ${data.serviceType === 'sur-place' ? `Sur place (${data.guestsCount || 2} couverts)` : 'À emporter'}`,
      '',
      `*Détail de la commande :*`,
      ...data.items.map(i => {
        const sides = i.sidesName ? ` (+${i.sidesName})` : '';
        const spice = i.spiceLevel ? ` [Piment : ${i.spiceLevel}]` : '';
        const lineTotal = (i.unitPrice + (i.sidesPrice || 0)) * i.quantity;
        return `• ${i.quantity}x ${i.name}${sides}${spice} = ${lineTotal.toLocaleString('fr-FR')} FCFA`;
      }),
      '',
      `💰 *TOTAL :* ${data.totalAmount.toLocaleString('fr-FR')} FCFA`,
      data.prepTimeEstimated ? `⏱️ *Délai estimé :* ${data.prepTimeEstimated}` : '',
      data.specialInstructions ? `📝 *Note :* ${data.specialInstructions}` : '',
      '',
      `📍 _Le Délice Africain • Fidjrossè Plage, Cotonou_`
    ].filter(Boolean).join('\n');

    const encoded = encodeURIComponent(lines);
    window.open(`https://wa.me/22961000000?text=${encoded}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div 
        id="printable-receipt-modal"
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md max-h-[92dvh] sm:max-h-[88vh] flex flex-col bg-[#1A130E] border border-[#7A5B45]/40 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Action header on top of ticket (always visible) */}
          <div className="no-print shrink-0 px-4 py-3 bg-[#241C17] border-b border-[#7A5B45]/30 flex items-center justify-between gap-2 z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F2E9DA]/90 font-medium">
              <ReceiptIcon className="w-4 h-4 text-[#C08A2E]" />
              <span>Ticket d'Addition & Réservation</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#1A130E] border border-[#7A5B45]/40 text-[#F2E9DA]/70 hover:text-[#F2E9DA] hover:bg-[#B8472E] transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Internal scrollable area: the ticket stays cleanly framed and scrolls if long */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4 bg-[#140E0A]/30">
            {/* Authentic Paper Receipt Container */}
            <div
              id="printable-receipt"
              ref={receiptRef}
              className="bg-[#FAF7F2] text-[#1D1714] rounded-2xl shadow-xl p-6 sm:p-7 relative font-mono text-xs border border-[#D9CFC4]"
            >
              {/* Serrated receipt top edge decoration */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-[radial-gradient(circle,#1A130E_3px,transparent_3.5px)] bg-[length:12px_12px] bg-repeat-x -mt-1.5 opacity-30 no-print" />

            {/* Header Stamp */}
            <div className="text-center pb-4 border-b-2 border-dashed border-[#1D1714]/30">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#C08A2E]/15 border border-[#C08A2E]/40 mb-2">
                <Utensils className="w-4 h-4 text-[#7A5B45]" />
              </div>
              <h2 className="font-display text-xl font-bold tracking-tight text-[#1D1714] uppercase">
                Le Délice Africain
              </h2>
              <p className="text-[11px] text-[#594A42] font-semibold mt-0.5 tracking-wide uppercase">
                Saveurs Authentiques & Grillades au Feu de Bois
              </p>
              <p className="text-[10px] text-[#7A6B63] mt-1">
                Fidjrossè Plage, Rue des Flamboyants • Cotonou, Bénin
              </p>
              <p className="text-[10px] text-[#7A6B63]">
                Tél : +229 61 00 00 00 / +229 97 00 00 00
              </p>
              <p className="text-[9px] text-[#8C7D75] mt-1 font-mono">
                IFU : 0202011482910 • RCCM : RB/COT/20-A-48291
              </p>
            </div>

            {/* Ticket Details Info */}
            <div className="py-3 border-b border-dashed border-[#1D1714]/20 space-y-1 text-[11px]">
              <div className="flex justify-between items-center font-bold">
                <span>RÉFÉRENCE :</span>
                <span className="text-[#B8472E] font-mono tracking-wider">{data.ticketNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#594A42]">DATE & HEURE :</span>
                <span>{data.date} à {data.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#594A42]">CLIENT :</span>
                <span className="font-semibold">{data.customerName || 'Client de passage'}</span>
              </div>
              {data.customerPhone && (
                <div className="flex justify-between items-center">
                  <span className="text-[#594A42]">TÉLÉPHONE :</span>
                  <span>{data.customerPhone}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-1">
                <span className="text-[#594A42]">SERVICE :</span>
                <span className="uppercase font-bold px-2 py-0.5 rounded bg-[#1D1714]/5 text-[#1D1714]">
                  {data.serviceType === 'sur-place' 
                    ? `Sur place (${data.guestsCount || '2'} couverts)` 
                    : 'À emporter'}
                </span>
              </div>
            </div>

            {/* Items Header */}
            <div className="py-2.5 border-b border-dashed border-[#1D1714]/20 flex justify-between text-[10px] font-bold text-[#594A42] uppercase tracking-wider">
              <span>Qté • Désignation</span>
              <span>Montant</span>
            </div>

            {/* Itemized List */}
            <div className="py-2.5 border-b-2 border-dashed border-[#1D1714]/30 space-y-2.5">
              {data.items.length === 0 ? (
                <div className="py-2 text-center text-[#7A6B63] italic">
                  Réservation de table sans pré-commande de plats
                </div>
              ) : (
                data.items.map((item, idx) => {
                  const lineUnit = item.unitPrice + (item.sidesPrice || 0);
                  const lineTotal = lineUnit * item.quantity;
                  return (
                    <div key={idx} className="space-y-0.5">
                      <div className="flex justify-between items-start">
                        <div className="pr-2 font-medium">
                          <span className="font-bold">{item.quantity}x </span>
                          <span>{item.name}</span>
                        </div>
                        <span className="font-bold shrink-0">
                          {lineTotal.toLocaleString('fr-FR')} F
                        </span>
                      </div>
                      {/* Accompaniment details with extra price */}
                      {item.sidesName && item.sidesName !== 'Sans accompagnement' && (
                        <div className="pl-4 text-[10px] text-[#594A42] flex justify-between">
                          <span>↳ Accomp. : {item.sidesName}</span>
                          <span>{item.sidesPrice ? `+${item.sidesPrice.toLocaleString('fr-FR')} F` : '0 F'}</span>
                        </div>
                      )}
                      {/* Spice choice (always included 0 FCFA) */}
                      {item.spiceLevel && (
                        <div className="pl-4 text-[10px] text-[#594A42]">
                          ↳ Piment : {item.spiceLevel} <span className="text-emerald-700 font-semibold">(Inclus)</span>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Financial Summary */}
            <div className="py-3 border-b-2 border-dashed border-[#1D1714]/30 space-y-1.5 text-[11px]">
              <div className="flex justify-between text-[#594A42]">
                <span>Sous-total HT :</span>
                <span>{(data.totalAmount - tvaAmount).toLocaleString('fr-FR')} FCFA</span>
              </div>
              <div className="flex justify-between text-[#594A42] text-[10px]">
                <span>TVA (18% incluse) :</span>
                <span>{tvaAmount.toLocaleString('fr-FR')} FCFA</span>
              </div>
              <div className="flex justify-between items-baseline pt-1.5 text-sm font-bold text-[#1D1714] border-t border-dotted border-[#1D1714]/20">
                <span className="uppercase tracking-wider">Total TTC à régler :</span>
                <span className="text-base font-extrabold text-[#B8472E]">
                  {data.totalAmount.toLocaleString('fr-FR')} FCFA
                </span>
              </div>
            </div>

            {/* Timing and special requests */}
            {(data.prepTimeEstimated || data.specialInstructions) && (
              <div className="py-2.5 border-b border-dashed border-[#1D1714]/20 space-y-1 text-[10px] text-[#594A42]">
                {data.prepTimeEstimated && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#B8472E]" />
                    <span><strong>Temps de cuisson estimé :</strong> {data.prepTimeEstimated}</span>
                  </div>
                )}
                {data.specialInstructions && (
                  <div className="italic text-[#1D1714]">
                    <strong>Note client :</strong> "{data.specialInstructions}"
                  </div>
                )}
              </div>
            )}

            {/* Interactive selector for Code-barres vs QR Code */}
            <div className="no-print pt-3 pb-1 flex items-center justify-center gap-1.5 border-t border-dashed border-[#1D1714]/15 mt-3">
              <button
                type="button"
                onClick={() => setCodeDisplayMode('barcode')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  codeDisplayMode === 'barcode'
                    ? 'bg-[#1D1714] text-[#F2E9DA] shadow-xs'
                    : 'bg-[#1D1714]/10 text-[#594A42] hover:bg-[#1D1714]/20'
                }`}
                title="Format Code 128 lisible par douchette et scanner"
              >
                <BarcodeIcon className="w-3 h-3" />
                <span>Code-barres 1D</span>
              </button>
              <button
                type="button"
                onClick={() => setCodeDisplayMode('qrcode')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  codeDisplayMode === 'qrcode'
                    ? 'bg-[#1D1714] text-[#F2E9DA] shadow-xs'
                    : 'bg-[#1D1714]/10 text-[#594A42] hover:bg-[#1D1714]/20'
                }`}
                title="Flashable directement avec l'appareil photo du téléphone"
              >
                <QrCodeIcon className="w-3 h-3" />
                <span>QR Code (Mobile)</span>
              </button>
            </div>

            {/* Scannable display area */}
            <div className="pt-2 pb-1 text-center">
              {codeDisplayMode === 'barcode' ? (
                <ScannableBarcode code={data.ticketNumber} />
              ) : (
                <ScannableQrCode data={data} />
              )}
            </div>

            {/* Footer Notice */}
            <div className="text-center pt-2 text-[10px] text-[#7A6B63] space-y-1">
              <p className="font-semibold text-[#1D1714]">
                Akpé kaká ! Merci de votre dégustation.
              </p>
              <p className="leading-tight">
                Veuillez présenter ce ticket (sur écran ou papier) à votre arrivée.
              </p>
              <p className="text-[9px] text-[#8C7D75]">
                Le Délice Africain • Service 7j/7 de 11h30 à 23h00
              </p>
            </div>

            {/* Serrated receipt bottom edge decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[radial-gradient(circle,#1A130E_3px,transparent_3.5px)] bg-[length:12px_12px] bg-repeat-x -mb-1.5 opacity-30 no-print" />
          </div>
        </div>

        {/* Action buttons toolbar (Fixed modal footer, always accessible) */}
        <div className="no-print shrink-0 px-4 py-3 bg-[#241C17] border-t border-[#7A5B45]/30 space-y-2 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              onClick={handlePrint}
              className="py-2.5 px-3 rounded-xl bg-[#C08A2E] hover:bg-[#a67423] text-[#2B211B] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimer / Sauvegarder PDF</span>
            </button>

            <button
              onClick={handleWhatsAppShare}
              className="py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs font-mono flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Partager sur WhatsApp</span>
            </button>
          </div>

          <div className="text-center">
            <button
              onClick={onClose}
              className="text-[11px] font-mono text-[#F2E9DA]/60 hover:text-[#F2E9DA] underline underline-offset-4 py-0.5 cursor-pointer"
            >
              Retour au restaurant
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatePresence>
  );
};
