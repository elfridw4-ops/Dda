import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS, MenuItem, PRACTICAL_INFO, ACCOMPANIMENTS } from '../data/restaurantData';
import { 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  Send, 
  Utensils, 
  MessageSquare, 
  Sparkles, 
  Check, 
  ArrowRight,
  Flame,
  X,
  Clock,
  Printer,
  Receipt as ReceiptIcon
} from 'lucide-react';
import { ReceiptModal, ReceiptItem } from './ReceiptModal';

interface PreOrderSectionProps {
  onOpenReservationWithOrder?: (
    orderSummary: string, 
    totalAmount: number, 
    items?: ReceiptItem[], 
    prepTime?: string
  ) => void;
}

interface CartItem {
  dish: MenuItem;
  quantity: number;
  sides?: string; // id from ACCOMPANIMENTS
  sidesName?: string;
  sidesPrice?: number;
  spiceLevel?: string;
}

export const PreOrderSection = ({ onOpenReservationWithOrder }: PreOrderSectionProps) => {
  const [cart, setCart] = useState<Record<string, CartItem>>({});

  const [activeCategory, setActiveCategory] = useState<'Tous' | 'Entrées' | 'Plats' | 'Accompagnements' | 'Desserts' | 'Boissons'>('Tous');
  const [diningMode, setDiningMode] = useState<'sur-place' | 'emporter'>('sur-place');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [showReceiptModal, setShowReceiptModal] = useState(false);

  // Cart Management
  const addToCart = (dish: MenuItem) => {
    setCart((prev) => {
      const existing = prev[dish.id];
      if (existing) {
        return {
          ...prev,
          [dish.id]: { ...existing, quantity: existing.quantity + 1 }
        };
      }
      return {
        ...prev,
        [dish.id]: {
          dish,
          quantity: 1,
          sides: dish.category === 'Plats' ? 'none' : undefined,
          sidesName: dish.category === 'Plats' ? 'Sans accompagnement' : undefined,
          sidesPrice: 0,
          spiceLevel: dish.category === 'Plats' ? 'Moyen' : undefined
        }
      };
    });
  };

  const removeFromCart = (dishId: string) => {
    setCart((prev) => {
      const existing = prev[dishId];
      if (!existing) return prev;
      if (existing.quantity > 1) {
        return {
          ...prev,
          [dishId]: { ...existing, quantity: existing.quantity - 1 }
        };
      }
      const next = { ...prev };
      delete next[dishId];
      return next;
    });
  };

  const clearItem = (dishId: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[dishId];
      return next;
    });
  };

  // Dynamic accompaniment selection with actual price modification
  const updateSides = (dishId: string, sideId: string) => {
    const selectedAcc = ACCOMPANIMENTS.find(a => a.id === sideId) || ACCOMPANIMENTS[0];
    setCart((prev) => {
      if (!prev[dishId]) return prev;
      return {
        ...prev,
        [dishId]: { 
          ...prev[dishId], 
          sides: selectedAcc.id,
          sidesName: selectedAcc.name,
          sidesPrice: selectedAcc.price
        }
      };
    });
  };

  // Spice level choice is strictly free of charge (0 FCFA)
  const updateSpice = (dishId: string, spiceLevel: string) => {
    setCart((prev) => {
      if (!prev[dishId]) return prev;
      return {
        ...prev,
        [dishId]: { ...prev[dishId], spiceLevel }
      };
    });
  };

  const clearAll = () => {
    setCart({});
    setSpecialInstructions('');
  };

  // Calculations
  const cartItemsList = useMemo(() => Object.values(cart), [cart]);
  const totalItemsCount = useMemo(() => cartItemsList.reduce((acc, item) => acc + item.quantity, 0), [cartItemsList]);
  
  // Total takes into account dish price + dynamically chosen accompaniment price * quantity
  const totalAmount = useMemo(() => {
    return cartItemsList.reduce((acc, item) => {
      const unitPrice = item.dish.price + (item.sidesPrice || 0);
      return acc + (unitPrice * item.quantity);
    }, 0);
  }, [cartItemsList]);

  const formattedTotal = useMemo(() => new Intl.NumberFormat('fr-FR').format(totalAmount) + ' FCFA', [totalAmount]);

  // Estimated preparation time based on ordered dishes (braising vs fast items)
  const estimatedPrepTime = useMemo(() => {
    if (cartItemsList.length === 0) return null;
    const hasLongBraise = cartItemsList.some(i => i.dish.id === 'poisson-braise' || i.dish.id === 'plat-du-roi');
    if (hasLongBraise) return '25 à 30 min (braisage au feu de bois)';
    const hasStandardBraise = cartItemsList.some(i => i.dish.id === 'tilapia-braise' || i.dish.category === 'Plats');
    if (hasStandardBraise) return '20 à 25 min (braisage minute)';
    const hasSidesOrEntries = cartItemsList.some(i => i.dish.category === 'Accompagnements' || i.dish.category === 'Entrées');
    if (hasSidesOrEntries) return '10 à 15 min';
    return '5 à 10 min';
  }, [cartItemsList]);

  // Order summary string for WhatsApp / Reservation with detailed itemization
  const buildOrderSummary = () => {
    if (cartItemsList.length === 0) return '';
    const header = diningMode === 'sur-place' ? '🍽️ *Pré-commande Table (Sur place)*' : '🛍️ *Commande À Emporter*';
    const itemsLines = cartItemsList.map(item => {
      const sidesText = item.sides && item.sides !== 'none' 
        ? ` + Accompagnement : ${item.sidesName} (+${(item.sidesPrice || 0).toLocaleString('fr-FR')} FCFA)` 
        : '';
      const spiceText = item.spiceLevel ? ` [Piment : ${item.spiceLevel} (inclus)]` : '';
      const unitPrice = item.dish.price + (item.sidesPrice || 0);
      const lineTotal = unitPrice * item.quantity;
      return `• ${item.quantity}x ${item.dish.name}${sidesText}${spiceText}\n  ↳ ${lineTotal.toLocaleString('fr-FR')} FCFA (${unitPrice.toLocaleString('fr-FR')} FCFA/port.)`;
    }).join('\n\n');

    const prepLine = estimatedPrepTime ? `⏱️ *Temps de préparation estimé :* ${estimatedPrepTime}` : '';
    const totalLine = `💰 *TOTAL ESTIMÉ :* ${formattedTotal}`;
    const notesLine = specialInstructions ? `📝 *Instructions spéciales :* ${specialInstructions}` : '';
    
    return `${header}\n\n${itemsLines}\n\n${prepLine ? prepLine + '\n' : ''}${totalLine}${notesLine ? '\n' + notesLine : ''}\n\n📍 _Le Délice Africain - Fidjrossè, Cotonou_`;
  };

  const handleWhatsAppOrder = () => {
    const summary = buildOrderSummary();
    const encoded = encodeURIComponent(summary);
    window.open(`https://wa.me/22961000000?text=${encoded}`, '_blank');
  };

  const receiptItemsList: ReceiptItem[] = useMemo(() => {
    return cartItemsList.map(item => ({
      name: item.dish.name,
      quantity: item.quantity,
      unitPrice: item.dish.price,
      sidesName: item.sidesName,
      sidesPrice: item.sidesPrice,
      spiceLevel: item.spiceLevel
    }));
  }, [cartItemsList]);

  const handleReserveTableWithOrder = () => {
    if (onOpenReservationWithOrder) {
      onOpenReservationWithOrder(
        buildOrderSummary(), 
        totalAmount, 
        receiptItemsList, 
        estimatedPrepTime || undefined
      );
    }
  };

  const filteredMenu = activeCategory === 'Tous'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(m => m.category === activeCategory);

  return (
    <section id="preorder-section" className="relative py-24 sm:py-32 bg-[#2B211B] border-b border-[#7A5B45]/20 overflow-hidden">
      
      {/* Background glow and subtle grain */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C08A2E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A5B45]/30 border border-[#C08A2E]/30 text-[#C08A2E] text-xs font-mono uppercase tracking-wider mb-4">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Composez votre Festin</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F2E9DA] leading-tight mb-4">
              Pré-commande & <span className="italic-wonky text-[#C08A2E]">Tablée gourmande</span>
            </h2>

            <p className="text-base sm:text-lg text-[#F2E9DA]/85 leading-relaxed">
              Sélectionnez vos plats, personnalisez vos accompagnements et transférez directement votre commande en cuisine via WhatsApp ou lors de votre réservation.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Interactive Workspace: Left = Dishes Selector, Right = Dynamic Order Ticket */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Menu Selector (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#7A5B45]/15 border border-[#7A5B45]/30">
              {(['Tous', 'Entrées', 'Plats', 'Accompagnements', 'Desserts', 'Boissons'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                    activeCategory === cat
                      ? 'bg-[#C08A2E] text-[#2B211B] font-semibold shadow-md'
                      : 'text-[#F2E9DA]/75 hover:text-[#F2E9DA] hover:bg-[#7A5B45]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Quick Dish Selection Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredMenu.map((dish) => {
                const cartItem = cart[dish.id];
                const count = cartItem ? cartItem.quantity : 0;

                return (
                  <motion.div
                    key={dish.id}
                    layout
                    className={`group p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                      count > 0
                        ? 'bg-[#7A5B45]/30 border-[#C08A2E] shadow-lg shadow-[#C08A2E]/5'
                        : 'bg-[#7A5B45]/15 border-[#7A5B45]/40 hover:border-[#C08A2E]/50'
                    }`}
                  >
                    <div className="flex gap-3 items-start">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#2B211B] border border-[#7A5B45]/40 relative">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        {count > 0 && (
                          <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-[#C08A2E] text-[#2B211B] text-[10px] font-mono font-bold flex items-center justify-center">
                            {count}
                          </span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="font-display font-medium text-sm text-[#F2E9DA] truncate">
                            {dish.name}
                          </h4>
                          <span className="font-mono text-xs font-semibold text-[#C08A2E] shrink-0">
                            {dish.formattedPrice}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#F2E9DA]/70 line-clamp-2 mt-1 leading-snug">
                          {dish.description}
                        </p>
                      </div>
                    </div>

                    {/* Action & Options */}
                    <div className="mt-3 pt-2.5 border-t border-[#7A5B45]/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {dish.prepTime && (
                          <span className="text-[10px] font-mono text-[#F2E9DA]/60 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#C08A2E]" />
                            <span>{dish.prepTime}</span>
                          </span>
                        )}
                        {dish.category === 'Plats' ? (
                          <span className="text-[10px] font-mono text-[#C08A2E] flex items-center gap-1">
                            <Flame className="w-3 h-3 text-[#B8472E]" />
                            <span>Braisé</span>
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-[#F2E9DA]/50">{dish.category}</span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        {count > 0 ? (
                          <div className="flex items-center gap-1 bg-[#2B211B] rounded-lg p-0.5 border border-[#7A5B45]/50">
                            <button
                              onClick={() => removeFromCart(dish.id)}
                              className="p-1 rounded hover:bg-[#7A5B45]/50 text-[#F2E9DA] transition-colors"
                              aria-label="Diminuer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-mono text-xs px-1.5 font-semibold text-[#C08A2E]">
                              {count}
                            </span>
                            <button
                              onClick={() => addToCart(dish)}
                              className="p-1 rounded hover:bg-[#7A5B45]/50 text-[#F2E9DA] transition-colors"
                              aria-label="Augmenter"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(dish)}
                            className="px-3 py-1.5 rounded-lg bg-[#7A5B45]/30 hover:bg-[#C08A2E] text-[#F2E9DA] hover:text-[#2B211B] text-xs font-mono font-medium transition-colors flex items-center gap-1"
                          >
                            <Plus className="w-3 h-3" />
                            <span>Ajouter</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Interactive Order Ticket / Tablée (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#7A5B45]/15 border-2 border-[#C08A2E]/40 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              
              {/* Ticket Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#7A5B45]/40 mb-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C08A2E] block">
                    Ticket de Dégustation
                  </span>
                  <h3 className="text-xl font-display font-medium text-[#F2E9DA]">
                    Votre Tablée
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {cartItemsList.length > 0 && (
                    <button
                      onClick={clearAll}
                      className="px-2.5 py-1 rounded-lg bg-[#2B211B] border border-[#7A5B45]/50 hover:border-[#B8472E] text-[#F2E9DA]/60 hover:text-[#B8472E] text-[11px] font-mono flex items-center gap-1 transition-colors cursor-pointer"
                      title="Vider la sélection"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Effacer tout</span>
                    </button>
                  )}
                  <div className="px-3 py-1 rounded-full bg-[#C08A2E]/20 border border-[#C08A2E]/40 text-[#C08A2E] font-mono text-xs">
                    {totalItemsCount} article{totalItemsCount > 1 ? 's' : ''}
                  </div>
                </div>
              </div>

              {/* Mode Toggle: Sur Place vs À Emporter */}
              <div className="grid grid-cols-2 gap-2 mb-5 p-1 rounded-xl bg-[#2B211B]/90 border border-[#7A5B45]/40">
                <button
                  type="button"
                  onClick={() => setDiningMode('sur-place')}
                  className={`py-2 text-xs font-mono rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    diningMode === 'sur-place'
                      ? 'bg-[#C08A2E] text-[#2B211B] font-semibold shadow'
                      : 'text-[#F2E9DA]/70 hover:text-[#F2E9DA]'
                  }`}
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Sur place (Table)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDiningMode('emporter')}
                  className={`py-2 text-xs font-mono rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    diningMode === 'emporter'
                      ? 'bg-[#C08A2E] text-[#2B211B] font-semibold shadow'
                      : 'text-[#F2E9DA]/70 hover:text-[#F2E9DA]'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>À emporter</span>
                </button>
              </div>

              {/* Items List in Ticket */}
              {cartItemsList.length === 0 ? (
                <div className="py-12 text-center text-[#F2E9DA]/60 space-y-3">
                  <Utensils className="w-10 h-10 mx-auto opacity-30 text-[#C08A2E]" />
                  <p className="text-sm">Votre tablée est vide.</p>
                  <p className="text-xs font-mono text-[#F2E9DA]/40">
                    Sélectionnez des spécialités sur la gauche pour composer votre festin.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1 mb-5 custom-scrollbar">
                  <AnimatePresence>
                    {cartItemsList.map(({ dish, quantity, sides, sidesName, sidesPrice, spiceLevel }) => {
                      const itemUnitPrice = dish.price + (sidesPrice || 0);
                      const itemTotal = itemUnitPrice * quantity;

                      return (
                        <motion.div
                          key={dish.id}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="p-3.5 rounded-xl bg-[#2B211B]/90 border border-[#7A5B45]/40 space-y-2.5"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-[#C08A2E] bg-[#C08A2E]/10 px-2 py-0.5 rounded">
                                {quantity}x
                              </span>
                              <span className="font-display font-medium text-sm text-[#F2E9DA]">
                                {dish.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs text-[#F2E9DA] font-semibold">
                                {itemTotal.toLocaleString('fr-FR')} FCFA
                              </span>
                              <button
                                onClick={() => clearItem(dish.id)}
                                className="text-[#F2E9DA]/40 hover:text-[#B8472E] p-1 transition-colors cursor-pointer"
                                title="Retirer"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Dynamic Breakdown for Main Dishes */}
                          {dish.category === 'Plats' && (
                            <div className="text-[10px] font-mono text-[#F2E9DA]/65 flex flex-wrap items-center justify-between gap-1 px-1">
                              <span>
                                Plat de base : {dish.formattedPrice}
                                {sidesPrice && sidesPrice > 0 ? (
                                  <span className="text-[#C08A2E] font-medium"> + {sidesName} (+{sidesPrice.toLocaleString('fr-FR')} FCFA)</span>
                                ) : (
                                  <span className="text-[#F2E9DA]/40"> (Sans accompagnement)</span>
                                )}
                              </span>
                              {quantity > 1 && (
                                <span className="text-[#C08A2E]">
                                  {itemUnitPrice.toLocaleString('fr-FR')} FCFA / portion
                                </span>
                              )}
                            </div>
                          )}

                          {/* Plats Options (Accompagnement Payant & Piment Inclus) */}
                          {dish.category === 'Plats' && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#7A5B45]/25 text-[11px] font-mono">
                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[#F2E9DA]/70 text-[10px]">Accompagnement</span>
                                  {sidesPrice && sidesPrice > 0 ? (
                                    <span className="text-[#C08A2E] font-semibold text-[10px]">+{sidesPrice.toLocaleString('fr-FR')} FCFA</span>
                                  ) : (
                                    <span className="text-[#F2E9DA]/40 text-[10px]">0 FCFA</span>
                                  )}
                                </div>
                                <select
                                  value={sides || 'none'}
                                  onChange={(e) => updateSides(dish.id, e.target.value)}
                                  className="w-full px-2 py-1.5 bg-[#2B211B] border border-[#7A5B45]/50 text-[#F2E9DA] rounded-lg text-[10px] focus:outline-none focus:border-[#C08A2E] cursor-pointer"
                                >
                                  {ACCOMPANIMENTS.map((acc) => (
                                    <option key={acc.id} value={acc.id}>
                                      {acc.name} ({acc.formattedPrice})
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[#F2E9DA]/70 text-[10px]">Piment & Force</span>
                                  <span className="text-emerald-400 font-semibold text-[9px]">Inclus (0 FCFA)</span>
                                </div>
                                <select
                                  value={spiceLevel || 'Moyen'}
                                  onChange={(e) => updateSpice(dish.id, e.target.value)}
                                  className="w-full px-2 py-1.5 bg-[#2B211B] border border-[#7A5B45]/50 text-[#F2E9DA] rounded-lg text-[10px] focus:outline-none focus:border-[#C08A2E] cursor-pointer"
                                >
                                  <option value="Doux">Doux (Peu pimenté - 0 FCFA)</option>
                                  <option value="Moyen">Moyen (Traditionnel béninois - 0 FCFA)</option>
                                  <option value="Relevé">Relevé (Piment fort - 0 FCFA)</option>
                                  <option value="À part">Piment servi à part (0 FCFA)</option>
                                </select>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              )}

              {/* Estimated Prep Time Banner */}
              {estimatedPrepTime && (
                <div className="mb-4 p-3 rounded-xl bg-[#2B211B] border border-[#C08A2E]/40 flex items-center gap-2.5 text-xs font-mono text-[#F2E9DA]/90">
                  <Clock className="w-4 h-4 text-[#C08A2E] shrink-0" />
                  <div className="leading-tight">
                    <span className="text-[#C08A2E] font-semibold">Temps de préparation estimé : </span>
                    <span>{estimatedPrepTime}</span>
                  </div>
                </div>
              )}

              {/* Additional notes */}
              {cartItemsList.length > 0 && (
                <div className="mb-5">
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#F2E9DA]/60 mb-1">
                    Précision pour la cuisine (optionnel)
                  </label>
                  <input
                    type="text"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="Ex: cuisson bien dorée, sans oignon..."
                    className="w-full px-3 py-2 bg-[#2B211B] border border-[#7A5B45]/50 rounded-xl text-xs text-[#F2E9DA] placeholder-[#F2E9DA]/30 focus:outline-none focus:border-[#C08A2E]"
                  />
                </div>
              )}

              {/* Total & Action Buttons */}
              <div className="pt-4 border-t-2 border-dashed border-[#7A5B45]/40 space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono uppercase text-[#F2E9DA]/70">Total Estimé</span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#C08A2E]">
                    {formattedTotal}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {/* Primary WhatsApp Action */}
                  <button
                    onClick={handleWhatsAppOrder}
                    disabled={cartItemsList.length === 0}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-[#F2E9DA] font-semibold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <MessageSquare className="w-4 h-4 text-[#F2E9DA]" />
                    <span>Envoyer la commande via WhatsApp</span>
                  </button>

                  {/* Secondary Table Reservation with Order */}
                  <button
                    onClick={handleReserveTableWithOrder}
                    disabled={cartItemsList.length === 0}
                    className="w-full py-3 bg-[#C08A2E] hover:bg-[#a67423] disabled:opacity-50 text-[#2B211B] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C08A2E]"
                  >
                    <Utensils className="w-4 h-4" />
                    <span>Associer à ma réservation de table</span>
                  </button>

                  {/* Option C: Print / Save PDF Receipt Voucher */}
                  <button
                    type="button"
                    onClick={() => setShowReceiptModal(true)}
                    disabled={cartItemsList.length === 0}
                    className="w-full py-2.5 bg-[#7A5B45]/25 hover:bg-[#7A5B45]/45 disabled:opacity-40 border border-[#C08A2E]/30 text-[#F2E9DA] font-mono text-xs rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ReceiptIcon className="w-3.5 h-3.5 text-[#C08A2E]" />
                    <span>Imprimer / Sauvegarder le Ticket (PDF)</span>
                  </button>
                </div>

                <p className="text-center text-[10px] font-mono text-[#F2E9DA]/60">
                  ⚡ Préparation minute au feu de bois • Sans paiement préalable
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Option C Printable Receipt Modal */}
      <ReceiptModal
        isOpen={showReceiptModal}
        onClose={() => setShowReceiptModal(false)}
        data={cartItemsList.length > 0 ? {
          ticketNumber: `DA-2026-${Math.floor(1000 + Math.random() * 9000)}`,
          date: new Date().toLocaleDateString('fr-FR'),
          time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
          serviceType: diningMode,
          customerName: diningMode === 'sur-place' ? 'Client Sur Place' : 'Client À Emporter',
          customerPhone: '',
          specialInstructions: specialInstructions,
          items: receiptItemsList,
          totalAmount: totalAmount,
          prepTimeEstimated: estimatedPrepTime || undefined
        } : null}
      />
    </section>
  );
};
