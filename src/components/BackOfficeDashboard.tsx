import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Utensils,
  Calendar,
  Clock,
  Users,
  Phone,
  CheckCircle2,
  AlertCircle,
  Search,
  Plus,
  ArrowLeft,
  LogOut,
  Flame,
  ChefHat,
  DollarSign,
  Printer,
  MessageSquare,
  Trash2,
  Lock,
  KeyRound,
  RefreshCw,
  X,
  Receipt,
  Check,
  Sparkles,
  SlidersHorizontal,
  Download,
  UserCheck,
  Bell,
  HelpCircle
} from 'lucide-react';
import {
  BackOfficeReservation,
  ReservationStatus,
  PaymentStatus,
  StaffRole,
  STAFF_ROLES,
  exportJournalToCSV,
  getStoredReservations,
  saveReservation,
  updateReservationStatus,
  updatePaymentStatus,
  deleteReservation,
  getMenuCustomizations,
  saveMenuCustomization,
  getRestaurantConfig,
  saveRestaurantConfig,
  isAdminAuthenticated,
  setAdminAuthenticated,
  verifyAdminPin
} from '../data/backofficeStore';
import { MENU_ITEMS, formatXOF } from '../data/restaurantData';
import { ReceiptModal, ReceiptData } from './ReceiptModal';

interface BackOfficeDashboardProps {
  onClose: () => void;
  onOpenReceiptModal?: (receipt: ReceiptData) => void;
}

type TabType = 'reservations' | 'cuisine' | 'carte' | 'caisse' | 'parametres';

export const BackOfficeDashboard: React.FC<BackOfficeDashboardProps> = ({
  onClose,
  onOpenReceiptModal
}) => {
  // Session & Auth
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string | null>(null);

  // Role in Brigade (Gérance, Salle, Cuisine)
  const [currentRole, setCurrentRole] = useState<StaffRole>('GERANT');

  // Active sub-tab
  const [activeTab, setActiveTab] = useState<TabType>('reservations');

  // Accessible Toast / Announcement
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = (message: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Safe deletion modal
  const [deleteCandidate, setDeleteCandidate] = useState<BackOfficeReservation | null>(null);

  // Data states
  const [reservations, setReservations] = useState<BackOfficeReservation[]>([]);
  const [menuCustoms, setMenuCustoms] = useState(getMenuCustomizations());
  const [config, setConfig] = useState(getRestaurantConfig());

  // Filter & Search states
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dateFilter, setDateFilter] = useState<string>('ALL'); // 'ALL' | 'TODAY' | 'UPCOMING'

  // Modal manual reservation
  const [isManualModalOpen, setIsManualModalOpen] = useState<boolean>(false);
  const [manualForm, setManualForm] = useState({
    customerName: '',
    customerPhone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guestsCount: '2',
    tableNumber: 'Table 1 (Salle)',
    specialInstructions: '',
    selectedDishId: '',
    notesAdmin: '',
  });

  // Modal inspection receipt
  const [inspectReceipt, setInspectReceipt] = useState<ReceiptData | null>(null);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);

  // Load auth state & data
  useEffect(() => {
    const auth = isAdminAuthenticated();
    setIsAuthenticated(auth);
    if (auth) {
      loadData();
    }
  }, []);

  const loadData = () => {
    setReservations(getStoredReservations());
    setMenuCustoms(getMenuCustomizations());
    setConfig(getRestaurantConfig());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyAdminPin(pinInput)) {
      setIsAuthenticated(true);
      setPinError(null);
      loadData();
      showToast('Espace restaurant déverrouillé avec succès');
    } else {
      setPinError('Code PIN gérant erroné. Veuillez réessayer.');
      setPinInput('');
    }
  };

  const handleLogout = () => {
    setAdminAuthenticated(false);
    setIsAuthenticated(false);
    setPinInput('');
  };

  // Switch brigade role and adapt active view
  const handleRoleChange = (newRole: StaffRole) => {
    setCurrentRole(newRole);
    if (newRole === 'CUISINE') {
      setActiveTab('cuisine');
      showToast('Mode Cuisine activé • Vue grands bons & braisage');
    } else if (newRole === 'SALLE') {
      setActiveTab('reservations');
      setDateFilter('TODAY');
      showToast('Mode Accueil & Salle activé • Arrivées du jour');
    } else {
      showToast('Mode Gérance activé • Accès complet au restaurant');
    }
  };

  // Quick reservation updates with affirmative feedback
  const handleStatusChange = (id: string, newStatus: ReservationStatus) => {
    updateReservationStatus(id, newStatus);
    setReservations(getStoredReservations());
    const labels: Record<ReservationStatus, string> = {
      EN_ATTENTE: 'En attente',
      CONFIRMEE: 'Confirmée',
      INSTALLEE: 'Installée en salle',
      TERMINEE: 'Service Terminé',
      ANNULEE: 'Annulée',
    };
    showToast(`Statut mis à jour : ${labels[newStatus]}`);
  };

  const handlePaymentStatusChange = (id: string, newPayment: PaymentStatus) => {
    updatePaymentStatus(id, newPayment);
    setReservations(getStoredReservations());
    const labels: Record<PaymentStatus, string> = {
      NON_PAYE: 'Non réglé',
      ACOMPTE: 'Acompte versé',
      PAYE: 'Règlement effectué',
    };
    showToast(`Paiement enregistré : ${labels[newPayment]}`);
  };

  const handleTableChange = (id: string, tableNumber: string) => {
    const r = reservations.find((item) => item.id === id);
    if (r) {
      saveReservation({ ...r, tableNumber });
      setReservations(getStoredReservations());
      showToast(`${tableNumber} affectée à ${r.customerName}`);
    }
  };

  const handleConfirmDelete = () => {
    if (!deleteCandidate) return;
    deleteReservation(deleteCandidate.id);
    setReservations(getStoredReservations());
    showToast(`Réservation ${deleteCandidate.ticketNumber} supprimée`);
    setDeleteCandidate(null);
  };

  // Export CSV
  const handleExportCSV = () => {
    if (reservations.length === 0) {
      showToast('Aucune donnée à exporter');
      return;
    }
    exportJournalToCSV(reservations);
    showToast('Fichier CSV généré et téléchargé');
  };

  // Manual reservation submission
  const handleCreateManualReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualForm.customerName) return;

    const ticketNumber = `DA-MAN-${Math.floor(1000 + Math.random() * 9000)}`;
    const chosenDish = MENU_ITEMS.find((d) => d.id === manualForm.selectedDishId);

    const items = chosenDish
      ? [
          {
            name: chosenDish.name,
            quantity: 1,
            unitPrice: chosenDish.price,
          },
        ]
      : [
          {
            name: `Réservation directe (${manualForm.guestsCount} couverts)`,
            quantity: 1,
            unitPrice: 0,
          },
        ];

    const total = chosenDish ? chosenDish.price : 0;

    const newRes: BackOfficeReservation = {
      id: ticketNumber,
      ticketNumber,
      customerName: manualForm.customerName,
      customerPhone: manualForm.customerPhone || 'Direct / Sur place',
      date: manualForm.date,
      time: manualForm.time,
      guestsCount: manualForm.guestsCount,
      serviceType: 'sur-place',
      tableNumber: manualForm.tableNumber,
      specialInstructions: manualForm.specialInstructions,
      items,
      totalAmount: total,
      status: 'CONFIRMEE',
      paymentStatus: 'NON_PAYE',
      prepTimeEstimated: chosenDish?.prepTime,
      createdAt: new Date().toISOString(),
      notesAdmin: manualForm.notesAdmin,
    };

    saveReservation(newRes);
    setReservations(getStoredReservations());
    setIsManualModalOpen(false);
    showToast(`Réservation créée pour ${manualForm.customerName} (${ticketNumber})`);
    setManualForm({
      customerName: '',
      customerPhone: '',
      date: new Date().toISOString().split('T')[0],
      time: '19:30',
      guestsCount: '2',
      tableNumber: 'Table 1 (Salle)',
      specialInstructions: '',
      selectedDishId: '',
      notesAdmin: '',
    });
  };

  // Toggle dish availability
  const handleToggleDish = (dishId: string) => {
    const dish = MENU_ITEMS.find((d) => d.id === dishId);
    const current = menuCustoms[dishId]?.isAvailable ?? true;
    saveMenuCustomization(dishId, { isAvailable: !current });
    setMenuCustoms(getMenuCustomizations());
    showToast(
      !current
        ? `${dish?.name || 'Plat'} rétabli en stock disponible`
        : `${dish?.name || 'Plat'} marqué en rupture temporaire`
    );
  };

  // View full receipt modal
  const handleOpenTicketReceipt = (res: BackOfficeReservation) => {
    const receipt: ReceiptData = {
      ticketNumber: res.ticketNumber,
      date: res.date,
      time: res.time,
      serviceType: res.serviceType === 'emporter' ? 'emporter' : 'sur-place',
      customerName: res.customerName,
      customerPhone: res.customerPhone,
      guestsCount: String(res.guestsCount || '2'),
      specialInstructions: res.specialInstructions,
      items: res.items.map((it) => ({
        name: it.name,
        quantity: it.quantity,
        unitPrice: it.unitPrice,
        sidesName: it.sides,
        sidesPrice: it.sidesPrice,
      })),
      totalAmount: res.totalAmount,
      prepTimeEstimated: res.prepTimeEstimated,
    };

    if (onOpenReceiptModal) {
      onOpenReceiptModal(receipt);
    } else {
      setInspectReceipt(receipt);
      setIsReceiptOpen(true);
    }
  };

  // Filtered reservations logic
  const todayStr = new Date().toISOString().split('T')[0];

  const filteredReservations = useMemo(() => {
    return reservations.filter((r) => {
      // Status
      if (statusFilter !== 'ALL' && r.status !== statusFilter) return false;

      // Date filter
      if (dateFilter === 'TODAY' && r.date !== todayStr) return false;
      if (dateFilter === 'UPCOMING' && r.date < todayStr) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = r.customerName.toLowerCase().includes(q);
        const matchPhone = r.customerPhone.toLowerCase().includes(q);
        const matchTicket = r.ticketNumber.toLowerCase().includes(q);
        const matchTable = r.tableNumber?.toLowerCase().includes(q);
        if (!matchName && !matchPhone && !matchTicket && !matchTable) return false;
      }

      return true;
    });
  }, [reservations, statusFilter, dateFilter, searchQuery, todayStr]);

  // Real statistics computed strictly from real data
  const stats = useMemo(() => {
    const totalCount = reservations.length;
    const pendingCount = reservations.filter((r) => r.status === 'EN_ATTENTE').length;
    const confirmedCount = reservations.filter((r) => r.status === 'CONFIRMEE').length;
    const seatedCount = reservations.filter((r) => r.status === 'INSTALLEE').length;
    const todayCovers = reservations
      .filter((r) => r.date === todayStr && r.status !== 'ANNULEE')
      .reduce((acc, r) => acc + (typeof r.guestsCount === 'number' ? r.guestsCount : parseInt(String(r.guestsCount), 10) || 0), 0);

    const totalRevenue = reservations
      .filter((r) => r.status === 'CONFIRMEE' || r.status === 'INSTALLEE' || r.status === 'TERMINEE' || r.paymentStatus === 'PAYE')
      .reduce((acc, r) => acc + (r.totalAmount || 0), 0);

    return {
      totalCount,
      pendingCount,
      confirmedCount,
      seatedCount,
      todayCovers,
      totalRevenue,
    };
  }, [reservations, todayStr]);

  // Cuisine orders (only reservations with prep items and not completed/cancelled)
  const cuisineOrders = useMemo(() => {
    return reservations.filter(
      (r) => r.status !== 'TERMINEE' && r.status !== 'ANNULEE' && r.items && r.items.length > 0
    );
  }, [reservations]);

  // Security Screen (PIN Lock)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#16110E] text-[#F2E9DA] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="w-full max-w-md bg-[#221814] border border-[#C08A2E]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
        >
          <div className="text-center mb-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#C08A2E]/15 border border-[#C08A2E]/50 flex items-center justify-center text-[#C08A2E] mb-4 shadow-lg">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C08A2E] block mb-1">
              Accès Réservé • Gérance
            </span>
            <h2 className="text-2xl font-display font-medium text-[#F2E9DA]">
              Back-Office Restaurant
            </h2>
            <p className="text-xs text-[#F2E9DA]/70 font-mono mt-1">
              Le Délice Africain • Fidjrossè, Cotonou
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#F2E9DA]/80 mb-2 text-center">
                Code PIN Gérant (Défaut : 2026)
              </label>
              <div className="relative">
                <input
                  type="password"
                  maxLength={6}
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="••••"
                  autoFocus
                  className="w-full text-center tracking-[0.5em] text-2xl py-3 rounded-xl bg-[#16110E] border border-[#7A5B45]/60 text-[#F2E9DA] focus:outline-none focus:border-[#C08A2E] font-mono"
                />
                <KeyRound className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-[#C08A2E]/50 pointer-events-none" />
              </div>
              {pinError && (
                <p className="text-xs text-[#B8472E] font-mono mt-2 text-center flex items-center justify-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{pinError}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#C08A2E] hover:bg-[#d49933] text-[#1C140E] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>Déverrouiller l'Espace Administration</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-transparent hover:bg-white/5 text-[#F2E9DA]/60 hover:text-[#F2E9DA] text-xs font-mono uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour au Site Public</span>
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#140E0A] text-[#F2E9DA] flex flex-col font-sans">
      {/* Top Admin Header */}
      <header className="bg-[#1C140E] border-b border-[#7A5B45]/40 sticky top-0 z-30 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#7A5B45]/20 hover:bg-[#7A5B45]/40 text-[#F2E9DA] transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Retour au site public"
            >
              <ArrowLeft className="w-4 h-4 text-[#C08A2E]" />
              <span className="hidden sm:inline">Site Public</span>
            </button>
            <div className="h-6 w-px bg-[#7A5B45]/40 hidden sm:block" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-display font-medium text-[#F2E9DA] leading-tight">
                  Espace Gérance • <span className="text-[#C08A2E]">Le Délice Africain</span>
                </h1>
                <span className="text-[10px] font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                  En Direct
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#F2E9DA]/60">
                Fidjrossè, Cotonou • Module de gestion globale
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsManualModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-[#C08A2E] hover:bg-[#d49933] text-[#1C140E] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Réservation Manuelle</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-2 rounded-xl bg-[#7A5B45]/20 hover:bg-[#B8472E]/30 text-[#F2E9DA]/70 hover:text-white transition-colors"
              title="Verrouiller l'espace gérant"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Team Role Switcher (Gérance / Salle / Cuisine) */}
        <div className="bg-[#16110E] border-t border-[#7A5B45]/30 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-mono text-[#C08A2E] font-bold flex items-center gap-1 uppercase tracking-wider">
                <Users className="w-3.5 h-3.5 text-[#C08A2E]" />
                Poste actif :
              </span>
              <div className="inline-flex rounded-xl bg-[#221814] p-1 border border-[#7A5B45]/40 flex-wrap gap-1">
                {STAFF_ROLES.map((role) => {
                  const isActive = currentRole === role.id;
                  return (
                    <button
                      key={role.id}
                      onClick={() => handleRoleChange(role.id)}
                      className={`px-3 py-1.5 min-h-[36px] rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                        isActive
                          ? 'bg-[#C08A2E] text-[#1C140E] shadow-sm font-bold'
                          : 'text-[#F2E9DA]/70 hover:text-[#F2E9DA] hover:bg-white/5'
                      }`}
                      title={role.description}
                    >
                      {role.id === 'GERANT' && <ShieldCheck className="w-3.5 h-3.5" />}
                      {role.id === 'SALLE' && <Utensils className="w-3.5 h-3.5" />}
                      {role.id === 'CUISINE' && <ChefHat className="w-3.5 h-3.5" />}
                      <span>{role.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Export Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleExportCSV}
                className="px-3.5 py-1.5 min-h-[36px] rounded-lg bg-[#7A5B45]/25 hover:bg-[#7A5B45]/45 text-[#F2E9DA] text-xs font-mono border border-[#7A5B45]/40 transition-colors flex items-center gap-1.5 cursor-pointer active:scale-95"
                title="Télécharger l'historique complet en fichier Excel / CSV"
              >
                <Download className="w-3.5 h-3.5 text-[#C08A2E]" />
                <span>Exporter le Journal (CSV)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Toast Announcement for All Actions */}
        <AnimatePresence>
          {toastMessage && (
            <motion.aside
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              role="status"
              aria-live="polite"
              className="bg-[#C08A2E] text-[#1C140E] px-4 py-2.5 text-xs font-mono font-bold shadow-md"
            >
              <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#1C140E]" />
                  <span>{toastMessage}</span>
                </div>
                <button
                  onClick={() => setToastMessage(null)}
                  className="p-1 hover:bg-black/10 rounded cursor-pointer"
                  aria-label="Fermer la notification"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Navigation Tabs Bar - Filtered seamlessly by team role */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto gap-1 border-t border-[#7A5B45]/20 scrollbar-none">
          {currentRole !== 'CUISINE' && (
            <button
              onClick={() => setActiveTab('reservations')}
              className={`px-4 py-3 text-xs font-mono uppercase tracking-wider whitespace-nowrap border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
                activeTab === 'reservations'
                  ? 'border-[#C08A2E] text-[#C08A2E] font-bold bg-[#7A5B45]/15'
                  : 'border-transparent text-[#F2E9DA]/60 hover:text-[#F2E9DA]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Réservations & Tables</span>
              {stats.pendingCount > 0 && (
                <span className="bg-[#B8472E] text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                  {stats.pendingCount}
                </span>
              )}
            </button>
          )}

          <button
            onClick={() => setActiveTab('cuisine')}
            className={`px-4 py-3 text-xs font-mono uppercase tracking-wider whitespace-nowrap border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'cuisine'
                ? 'border-[#C08A2E] text-[#C08A2E] font-bold bg-[#7A5B45]/15'
                : 'border-transparent text-[#F2E9DA]/60 hover:text-[#F2E9DA]'
            }`}
          >
            <Flame className="w-4 h-4 text-[#B8472E]" />
            <span>KDS Cuisine ({cuisineOrders.length})</span>
          </button>

          {(currentRole === 'GERANT' || currentRole === 'CUISINE') && (
            <button
              onClick={() => setActiveTab('carte')}
              className={`px-4 py-3 text-xs font-mono uppercase tracking-wider whitespace-nowrap border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
                activeTab === 'carte'
                  ? 'border-[#C08A2E] text-[#C08A2E] font-bold bg-[#7A5B45]/15'
                  : 'border-transparent text-[#F2E9DA]/60 hover:text-[#F2E9DA]'
              }`}
            >
              <ChefHat className="w-4 h-4" />
              <span>CMS Carte & Disponibilités</span>
            </button>
          )}

          {(currentRole === 'GERANT' || currentRole === 'SALLE') && (
            <button
              onClick={() => setActiveTab('caisse')}
              className={`px-4 py-3 text-xs font-mono uppercase tracking-wider whitespace-nowrap border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
                activeTab === 'caisse'
                  ? 'border-[#C08A2E] text-[#C08A2E] font-bold bg-[#7A5B45]/15'
                  : 'border-transparent text-[#F2E9DA]/60 hover:text-[#F2E9DA]'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Caisse & Tickets</span>
            </button>
          )}

          {currentRole === 'GERANT' && (
            <button
              onClick={() => setActiveTab('parametres')}
              className={`px-4 py-3 text-xs font-mono uppercase tracking-wider whitespace-nowrap border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
                activeTab === 'parametres'
                  ? 'border-[#C08A2E] text-[#C08A2E] font-bold bg-[#7A5B45]/15'
                  : 'border-transparent text-[#F2E9DA]/60 hover:text-[#F2E9DA]'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Paramètres</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Dashboard Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* ======================= TAB 1: RESERVATIONS & TABLES ======================= */}
        {activeTab === 'reservations' && (
          <div className="space-y-6">
            {/* Task-Oriented Priority Actions Bar (Section 2.0bis) */}
            <div className="p-4 rounded-2xl bg-[#1C140E] border border-[#C08A2E]/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C08A2E] font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#C08A2E]" />
                  <span>Actions Rapides du Service</span>
                </span>
                <span className="text-[11px] font-mono text-[#F2E9DA]/60">
                  Usage quotidien de l’équipe
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setIsManualModalOpen(true)}
                  className="p-3 rounded-xl bg-[#221814] hover:bg-[#2B211B] border border-[#7A5B45]/40 hover:border-[#C08A2E] transition-all text-left flex items-start gap-3 group cursor-pointer active:scale-98 min-h-[44px]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#C08A2E]/15 text-[#C08A2E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Plus className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs font-semibold text-[#F2E9DA] group-hover:text-[#C08A2E] transition-colors">
                      1. Réservation Téléphone
                    </strong>
                    <span className="text-[11px] font-mono text-[#F2E9DA]/60 block leading-tight">
                      Enregistrer un appel ou arrivée spontanée
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={handleExportCSV}
                  className="p-3 rounded-xl bg-[#221814] hover:bg-[#2B211B] border border-[#7A5B45]/40 hover:border-[#C08A2E] transition-all text-left flex items-start gap-3 group cursor-pointer active:scale-98 min-h-[44px]"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/60 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs font-semibold text-[#F2E9DA] group-hover:text-emerald-400 transition-colors">
                      2. Export Journal (CSV)
                    </strong>
                    <span className="text-[11px] font-mono text-[#F2E9DA]/60 block leading-tight">
                      Clôture comptable en 1 clic pour Excel
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('carte')}
                  className="p-3 rounded-xl bg-[#221814] hover:bg-[#2B211B] border border-[#7A5B45]/40 hover:border-[#C08A2E] transition-all text-left flex items-start gap-3 group cursor-pointer active:scale-98 min-h-[44px]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#7A5B45]/20 text-[#C08A2E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <ChefHat className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs font-semibold text-[#F2E9DA] group-hover:text-[#C08A2E] transition-colors">
                      3. Rupture / Stock Carte
                    </strong>
                    <span className="text-[11px] font-mono text-[#F2E9DA]/60 block leading-tight">
                      Passer un plat indisponible instantanément
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Real KPI Metrics Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 rounded-2xl bg-[#1C140E] border border-[#7A5B45]/30">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C08A2E] block mb-1">
                  Total Réservations
                </span>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-[#F2E9DA]">
                  {stats.totalCount}
                </p>
                <span className="text-[11px] text-[#F2E9DA]/60 font-mono">
                  {stats.pendingCount} en attente de confirmation
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#1C140E] border border-[#7A5B45]/30">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C08A2E] block mb-1">
                  Couverts Aujourd'hui
                </span>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-[#F2E9DA]">
                  {stats.todayCovers}
                </p>
                <span className="text-[11px] text-[#F2E9DA]/60 font-mono">
                  Capacité : {config.maxCoversPerService} par service
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#1C140E] border border-[#7A5B45]/30">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                  Installées en Salle
                </span>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">
                  {stats.seatedCount}
                </p>
                <span className="text-[11px] text-[#F2E9DA]/60 font-mono">
                  En cours de dégustation
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#1C140E] border border-[#7A5B45]/30">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C08A2E] block mb-1">
                  Volume Commandes
                </span>
                <p className="text-xl sm:text-2xl font-mono font-bold text-[#C08A2E] tabular-nums">
                  {formatXOF(stats.totalRevenue)}
                </p>
                <span className="text-[11px] text-[#F2E9DA]/60 font-mono">
                  Calculé sur les commandes réelles
                </span>
              </div>
            </div>

            {/* Filters and Search Bar */}
            <div className="p-4 rounded-2xl bg-[#1C140E] border border-[#7A5B45]/30 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              {/* Status Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                {[
                  { id: 'ALL', label: 'Toutes' },
                  { id: 'EN_ATTENTE', label: 'En attente' },
                  { id: 'CONFIRMEE', label: 'Confirmées' },
                  { id: 'INSTALLEE', label: 'Installées' },
                  { id: 'TERMINEE', label: 'Terminées' },
                  { id: 'ANNULEE', label: 'Annulées' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setStatusFilter(st.id)}
                    className={`px-3 py-2 min-h-[44px] rounded-xl text-xs font-mono transition-colors whitespace-nowrap cursor-pointer active:scale-95 ${
                      statusFilter === st.id
                        ? 'bg-[#C08A2E] text-[#1C140E] font-bold'
                        : 'bg-[#7A5B45]/20 text-[#F2E9DA]/70 hover:bg-[#7A5B45]/35 hover:text-[#F2E9DA]'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* Search & Date Filter */}
              <div className="flex items-center gap-2">
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="px-3 py-2 min-h-[44px] rounded-xl bg-[#221814] border border-[#7A5B45]/50 text-base sm:text-xs font-mono text-[#F2E9DA] focus:outline-none focus:border-[#C08A2E]"
                >
                  <option value="ALL">Toutes les dates</option>
                  <option value="TODAY">Aujourd'hui</option>
                  <option value="UPCOMING">À venir</option>
                </select>

                <div className="relative flex-1 sm:w-60">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#F2E9DA]/40 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Nom, téléphone, ticket..."
                    className="w-full pl-9 pr-3 py-2 min-h-[44px] rounded-xl bg-[#221814] border border-[#7A5B45]/50 text-base sm:text-xs font-mono text-[#F2E9DA] placeholder-[#F2E9DA]/30 focus:outline-none focus:border-[#C08A2E]"
                  />
                </div>
              </div>
            </div>

            {/* Reservations List */}
            {filteredReservations.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-[#1C140E] border border-dashed border-[#7A5B45]/40 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#7A5B45]/20 text-[#C08A2E] flex items-center justify-center mx-auto">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display text-[#F2E9DA]">
                  {reservations.length === 0
                    ? 'Aucune réservation enregistrée pour le moment'
                    : 'Aucune réservation ne correspond à vos filtres'}
                </h3>
                <p className="text-xs text-[#F2E9DA]/60 font-mono max-w-md mx-auto leading-relaxed">
                  {reservations.length === 0
                    ? "Dès qu'un client réserve une table ou passe une commande sur le site public, elle apparaîtra ici instantanément. Vous pouvez aussi enregistrer des réservations manuelles."
                    : 'Modifiez ou réinitialisez vos filtres pour réafficher les réservations.'}
                </p>
                {reservations.length === 0 && (
                  <button
                    onClick={() => setIsManualModalOpen(true)}
                    className="mt-2 px-4 py-2.5 min-h-[44px] bg-[#C08A2E] text-[#1C140E] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#d49933] transition-all inline-flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Enregistrer une première réservation</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredReservations.map((res) => {
                  const isToday = res.date === todayStr;

                  return (
                    <div
                      key={res.id}
                      className="p-4 sm:p-5 rounded-2xl bg-[#1C140E] border border-[#7A5B45]/35 hover:border-[#C08A2E]/50 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-md"
                    >
                      {/* Left: Client & Service details */}
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className="font-mono text-xs font-bold text-[#C08A2E] bg-[#C08A2E]/10 border border-[#C08A2E]/30 px-2.5 py-0.5 rounded-lg">
                            {res.ticketNumber}
                          </span>
                          <span className="text-base font-display font-medium text-[#F2E9DA]">
                            {res.customerName}
                          </span>
                          {isToday && (
                            <span className="text-[10px] font-mono bg-[#B8472E] text-white px-2 py-0.5 rounded-full font-bold">
                              AUJOURD'HUI
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-[#F2E9DA]/80">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#C08A2E]" />
                            <span>{res.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#C08A2E]" />
                            <span>{res.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-[#C08A2E]" />
                            <span>{res.guestsCount} couverts</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-[#C08A2E]" />
                            <a
                              href={`tel:${res.customerPhone}`}
                              className="hover:text-[#C08A2E] underline"
                            >
                              {res.customerPhone}
                            </a>
                          </div>
                        </div>

                        {/* Pre-ordered items badges */}
                        {res.items && res.items.length > 0 && (
                          <div className="pt-1 flex items-center gap-1.5 flex-wrap">
                            <span className="text-[10px] font-mono text-[#C08A2E] uppercase">
                              Plats :
                            </span>
                            {res.items.map((it, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] px-2 py-0.5 rounded-md bg-[#7A5B45]/20 border border-[#7A5B45]/40 text-[#F2E9DA] font-mono"
                              >
                                {it.quantity}x {it.name}
                              </span>
                            ))}
                            {res.totalAmount > 0 && (
                              <span className="text-xs font-mono font-bold text-[#C08A2E] ml-1">
                                ({formatXOF(res.totalAmount)})
                              </span>
                            )}
                          </div>
                        )}

                        {res.specialInstructions && (
                          <p className="text-xs text-[#F2E9DA]/70 italic font-sans bg-[#140E0A] p-2 rounded-lg border border-[#7A5B45]/20">
                            Note client : « {res.specialInstructions} »
                          </p>
                        )}
                      </div>

                      {/* Right: Table assignment, Status, Actions */}
                      <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#7A5B45]/20">
                        {/* Table Selector */}
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-[#F2E9DA]/60">Table :</span>
                          <select
                            value={res.tableNumber || 'À affecter'}
                            onChange={(e) => handleTableChange(res.id, e.target.value)}
                            className="px-2.5 py-1.5 min-h-[44px] rounded-lg bg-[#221814] border border-[#7A5B45]/50 text-base sm:text-xs font-mono text-[#C08A2E] font-semibold focus:outline-none focus:border-[#C08A2E]"
                          >
                            <option value="À affecter">À affecter</option>
                            <option value="Table 1 (Salle)">Table 1 (Salle)</option>
                            <option value="Table 2 (Salle)">Table 2 (Salle)</option>
                            <option value="Table 3 (Salle)">Table 3 (Salle)</option>
                            <option value="Table 4 (Salle)">Table 4 (Salle)</option>
                            <option value="Table 5 (Terrasse)">Table 5 (Terrasse)</option>
                            <option value="Table 6 (Terrasse)">Table 6 (Terrasse)</option>
                            <option value="VIP Saloon">VIP Saloon</option>
                          </select>
                        </div>

                        {/* Status Selectors */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <select
                            value={res.status}
                            onChange={(e) =>
                              handleStatusChange(res.id, e.target.value as ReservationStatus)
                            }
                            className={`px-3 py-2 min-h-[44px] rounded-xl text-base sm:text-xs font-mono font-bold focus:outline-none border ${
                              res.status === 'CONFIRMEE'
                                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
                                : res.status === 'INSTALLEE'
                                ? 'bg-blue-950/60 border-blue-500/50 text-blue-300'
                                : res.status === 'TERMINEE'
                                ? 'bg-[#7A5B45]/30 border-[#7A5B45]/60 text-[#F2E9DA]/70'
                                : res.status === 'ANNULEE'
                                ? 'bg-rose-950/60 border-rose-500/50 text-rose-300'
                                : 'bg-amber-950/60 border-amber-500/50 text-amber-300'
                            }`}
                          >
                            <option value="EN_ATTENTE">En attente</option>
                            <option value="CONFIRMEE">Confirmée</option>
                            <option value="INSTALLEE">Installée en salle</option>
                            <option value="TERMINEE">Service Terminé</option>
                            <option value="ANNULEE">Annulée</option>
                          </select>

                          <select
                            value={res.paymentStatus}
                            onChange={(e) =>
                              handlePaymentStatusChange(res.id, e.target.value as PaymentStatus)
                            }
                            className={`px-2.5 py-2 min-h-[44px] rounded-xl text-base sm:text-xs font-mono font-semibold focus:outline-none border ${
                              res.paymentStatus === 'PAYE'
                                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                                : 'bg-[#1C140E] border-[#7A5B45]/50 text-[#F2E9DA]/60'
                            }`}
                          >
                            <option value="NON_PAYE">Non payé</option>
                            <option value="ACOMPTE">Acompte versé</option>
                            <option value="PAYE">Règlement effectué</option>
                          </select>
                        </div>

                        {/* Quick action buttons with minimum 44px touch targets on mobile */}
                        <div className="flex items-center gap-2">
                          {/* WhatsApp client direct contact */}
                          {res.customerPhone && (
                            <a
                              href={`https://wa.me/${res.customerPhone.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-emerald-900/40 hover:bg-emerald-800/60 text-emerald-300 transition-colors active:scale-95"
                              title="Contacter le client sur WhatsApp"
                            >
                              <MessageSquare className="w-4 h-4" />
                            </a>
                          )}

                          {/* Print / View Ticket */}
                          <button
                            onClick={() => handleOpenTicketReceipt(res)}
                            className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-[#C08A2E]/20 hover:bg-[#C08A2E]/40 text-[#C08A2E] transition-colors active:scale-95 cursor-pointer"
                            title="Voir & Imprimer le reçu"
                          >
                            <Printer className="w-4 h-4" />
                          </button>

                          {/* Delete with isolated confirmation (Safety) */}
                          <button
                            onClick={() => setDeleteCandidate(res)}
                            className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 transition-colors active:scale-95 cursor-pointer"
                            title="Supprimer la réservation"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ======================= TAB 2: KDS CUISINE (KITCHEN DISPLAY) ======================= */}
        {activeTab === 'cuisine' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-display font-medium text-[#F2E9DA] flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#B8472E]" />
                  <span>KDS Cuisine • Braisage & Préparations</span>
                </h2>
                <p className="text-xs font-mono text-[#F2E9DA]/70">
                  Vue opérationnelle des plats pré-commandés pour le Chef Jean Dossou
                </p>
              </div>
              <span className="text-xs font-mono text-[#C08A2E] bg-[#C08A2E]/10 border border-[#C08A2E]/30 px-3 py-1 rounded-xl font-bold">
                {cuisineOrders.length} commande(s) active(s)
              </span>
            </div>

            {cuisineOrders.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-[#1C140E] border border-dashed border-[#7A5B45]/40 space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#7A5B45]/20 text-[#B8472E] flex items-center justify-center mx-auto">
                  <ChefHat className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display text-[#F2E9DA]">
                  Aucun plat en attente de préparation en cuisine
                </h3>
                <p className="text-xs text-[#F2E9DA]/60 font-mono max-w-md mx-auto">
                  Dès qu'un client effectue une réservation avec pré-commande ou que la salle transmet un bon, il apparaîtra ici avec son délai de braisage.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cuisineOrders.map((order) => (
                  <div
                    key={order.id}
                    className="p-5 rounded-2xl bg-[#1C140E] border border-[#C08A2E]/30 shadow-lg flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-[#7A5B45]/30">
                        <div>
                          <span className="text-xs font-mono font-bold text-[#C08A2E]">
                            {order.ticketNumber}
                          </span>
                          <h4 className="text-sm font-semibold text-[#F2E9DA]">
                            {order.customerName}
                          </h4>
                        </div>
                        <span className="text-xs font-mono bg-[#2B211B] px-2 py-1 rounded border border-[#7A5B45]/50 text-[#F2E9DA]">
                          {order.tableNumber || 'Salle'}
                        </span>
                      </div>

                      <div className="py-2 flex items-center justify-between text-xs font-mono text-[#F2E9DA]/70">
                        <span>Heure : <strong>{order.time}</strong></span>
                        <span>{order.guestsCount} pers.</span>
                      </div>

                      {/* Items list */}
                      <div className="space-y-2 pt-2">
                        {order.items.map((it, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-xl bg-[#221814] border border-[#7A5B45]/30 flex items-start justify-between gap-2"
                          >
                            <div>
                              <span className="text-xs font-bold text-[#F2E9DA]">
                                {it.quantity}x {it.name}
                              </span>
                              {it.sides && (
                                <p className="text-[11px] text-[#C08A2E] font-mono">
                                  + {it.sides}
                                </p>
                              )}
                            </div>
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-1.5 py-0.5 rounded">
                              À préparer
                            </span>
                          </div>
                        ))}
                      </div>

                      {order.specialInstructions && (
                        <p className="mt-3 text-xs text-[#F2E9DA]/80 bg-[#16110E] p-2 rounded-lg border border-[#7A5B45]/30 font-sans italic">
                          « {order.specialInstructions} »
                        </p>
                      )}
                    </div>

                    <div className="pt-2 border-t border-[#7A5B45]/30 flex items-center gap-2">
                      <button
                        onClick={() => handleStatusChange(order.id, 'INSTALLEE')}
                        className="flex-1 py-2 bg-[#7A5B45]/30 hover:bg-[#7A5B45]/50 text-[#F2E9DA] text-xs font-mono uppercase tracking-wider rounded-xl transition-colors"
                      >
                        En Cuisson
                      </button>
                      <button
                        onClick={() => handleStatusChange(order.id, 'TERMINEE')}
                        className="flex-1 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-colors font-bold"
                      >
                        Prêt / Servi
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ======================= TAB 3: CMS CARTE & DISPONIBILITES ======================= */}
        {activeTab === 'carte' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-xl font-display font-medium text-[#F2E9DA]">
                  Gestion de la Carte des Mets
                </h2>
                <p className="text-xs font-mono text-[#F2E9DA]/70">
                  Gérez la disponibilité en temps réel (En stock / Rupture de stock) et les prix
                </p>
              </div>
              <span className="text-xs font-mono text-[#C08A2E]">
                {MENU_ITEMS.length} mets enregistrés au restaurant
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {MENU_ITEMS.map((item) => {
                const custom = menuCustoms[item.id];
                const isAvailable = custom?.isAvailable ?? true;

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl bg-[#1C140E] border transition-all flex flex-col justify-between ${
                      isAvailable
                        ? 'border-[#7A5B45]/40 hover:border-[#C08A2E]/50'
                        : 'border-rose-500/40 opacity-75'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#C08A2E] bg-[#C08A2E]/10 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                        <button
                          onClick={() => handleToggleDish(item.id)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                            isAvailable
                              ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40'
                              : 'bg-rose-950/60 text-rose-300 border border-rose-500/40'
                          }`}
                        >
                          {isAvailable ? '✓ Disponible' : '✕ En rupture'}
                        </button>
                      </div>

                      <div className="flex gap-3 items-center mb-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 rounded-xl object-cover bg-[#221814]"
                        />
                        <div>
                          <h4 className="text-sm font-semibold text-[#F2E9DA]">
                            {item.name}
                          </h4>
                          <span className="text-xs font-mono font-bold text-[#C08A2E]">
                            {formatXOF(item.price)}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-[#F2E9DA]/70 line-clamp-2 font-sans mb-2">
                        {item.description}
                      </p>

                      <div className="text-[11px] font-mono text-[#F2E9DA]/60 flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-[#C08A2E]" />
                        <span>Délai estimé : {item.prepTime || '15-20 min'}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#7A5B45]/20 mt-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#F2E9DA]/50">
                        ID: {item.id}
                      </span>
                      <button
                        onClick={() => handleToggleDish(item.id)}
                        className="text-xs font-mono text-[#C08A2E] hover:underline"
                      >
                        {isAvailable ? 'Basculer en rupture' : 'Rétablir en stock'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================= TAB 4: CAISSE & VENTES ======================= */}
        {activeTab === 'caisse' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-display font-medium text-[#F2E9DA] flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-[#C08A2E]" />
                  <span>Caisse & Journal des Additions</span>
                </h2>
                <p className="text-xs font-mono text-[#F2E9DA]/70">
                  Historique certifié des tickets émis et encaissements réels
                </p>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#1C140E] border border-[#7A5B45]/30">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C08A2E] block mb-1">
                  Chiffre d'Affaires Enregistré
                </span>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-[#F2E9DA] tabular-nums">
                  {formatXOF(stats.totalRevenue)}
                </p>
                <span className="text-xs text-[#F2E9DA]/60 font-mono">
                  Commandes réelles validées
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#1C140E] border border-[#7A5B45]/30">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C08A2E] block mb-1">
                  Nombre de Vouchers Émis
                </span>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-[#F2E9DA]">
                  {reservations.length}
                </p>
                <span className="text-xs text-[#F2E9DA]/60 font-mono">
                  Traçabilité QR code active
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#1C140E] border border-[#7A5B45]/30">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                  Moyenne par Couvert
                </span>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 tabular-nums">
                  {stats.totalCount > 0
                    ? formatXOF(Math.round(stats.totalRevenue / Math.max(1, stats.totalCount)))
                    : '0 FCFA'}
                </p>
                <span className="text-xs text-[#F2E9DA]/60 font-mono">
                  Panier moyen calculé
                </span>
              </div>
            </div>

            {/* Invoices and tickets registry */}
            <div className="p-5 rounded-2xl bg-[#1C140E] border border-[#7A5B45]/30 space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#C08A2E] font-bold">
                Registre des Tickets & Additions
              </h3>

              {reservations.length === 0 ? (
                <p className="text-xs text-[#F2E9DA]/60 font-mono py-4 text-center">
                  Aucun ticket n'a encore été généré.
                </p>
              ) : (
                <div className="divide-y divide-[#7A5B45]/20">
                  {reservations.map((res) => (
                    <div
                      key={res.id}
                      className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#C08A2E]">{res.ticketNumber}</span>
                        <span className="text-[#F2E9DA] font-sans font-medium">
                          {res.customerName}
                        </span>
                        <span className="text-[#F2E9DA]/60">
                          {res.date} • {res.time}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#F2E9DA] tabular-nums">
                          {formatXOF(res.totalAmount)}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            res.paymentStatus === 'PAYE'
                              ? 'bg-emerald-950 text-emerald-300'
                              : 'bg-amber-950 text-amber-300'
                          }`}
                        >
                          {res.paymentStatus === 'PAYE' ? 'Réglé' : 'Non réglé'}
                        </span>
                        <button
                          onClick={() => handleOpenTicketReceipt(res)}
                          className="px-2.5 py-1 bg-[#C08A2E]/20 hover:bg-[#C08A2E]/40 text-[#C08A2E] rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>Duplicata Ticket (80mm)</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================= TAB 5: PARAMETRES & CAPACITE ======================= */}
        {activeTab === 'parametres' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="p-6 rounded-3xl bg-[#1C140E] border border-[#7A5B45]/40 space-y-5">
              <h3 className="text-lg font-display font-medium text-[#F2E9DA] flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-[#C08A2E]" />
                <span>Configuration du Restaurant</span>
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block uppercase text-[#F2E9DA]/80 mb-1">
                    Capacité maximale de couverts par service
                  </label>
                  <input
                    type="number"
                    value={config.maxCoversPerService}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10) || 40;
                      saveRestaurantConfig({ maxCoversPerService: val });
                      setConfig(getRestaurantConfig());
                    }}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#221814] border border-[#7A5B45]/50 text-[#F2E9DA] focus:outline-none focus:border-[#C08A2E]"
                  />
                  <p className="text-[11px] text-[#F2E9DA]/50 mt-1 font-sans">
                    Permet d'ajuster le quota d'accueil pour la salle et la terrasse à Cotonou.
                  </p>
                </div>

                <div className="pt-2">
                  <label className="block uppercase text-[#F2E9DA]/80 mb-1">
                    Statut des Réservations en ligne
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        saveRestaurantConfig({ isOpenForBookings: !config.isOpenForBookings });
                        setConfig(getRestaurantConfig());
                      }}
                      className={`px-4 py-2 rounded-xl font-bold transition-colors cursor-pointer ${
                        config.isOpenForBookings
                          ? 'bg-emerald-700 text-white'
                          : 'bg-rose-800 text-white'
                      }`}
                    >
                      {config.isOpenForBookings ? '🟢 Réservations Ouvertes' : '🔴 Service Complet / Fermé'}
                    </button>
                    <span className="text-[#F2E9DA]/60">
                      {config.isOpenForBookings
                        ? 'Les clients peuvent réserver librement'
                        : 'Un message avertit les clients que le service est complet'}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block uppercase text-[#F2E9DA]/80 mb-1">
                    Message d'information / Consigne spéciale
                  </label>
                  <input
                    type="text"
                    value={config.serviceNotice}
                    onChange={(e) => {
                      saveRestaurantConfig({ serviceNotice: e.target.value });
                      setConfig(getRestaurantConfig());
                    }}
                    placeholder="Ex : Soirée spéciale grillades ce vendredi dès 19h"
                    className="w-full px-3 py-2.5 rounded-xl bg-[#221814] border border-[#7A5B45]/50 text-[#F2E9DA] focus:outline-none focus:border-[#C08A2E]"
                  />
                </div>

                <div className="pt-4 border-t border-[#7A5B45]/30">
                  <label className="block uppercase text-[#F2E9DA]/80 mb-1">
                    Code PIN Gérant
                  </label>
                  <input
                    type="password"
                    maxLength={6}
                    value={config.adminPin}
                    onChange={(e) => {
                      saveRestaurantConfig({ adminPin: e.target.value });
                      setConfig(getRestaurantConfig());
                    }}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#221814] border border-[#7A5B45]/50 text-[#F2E9DA] tracking-[0.3em] font-bold focus:outline-none focus:border-[#C08A2E]"
                  />
                  <p className="text-[11px] text-[#F2E9DA]/50 mt-1 font-sans">
                    Code requis pour déverrouiller le Back-Office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ======================= MODAL: MANUAL RESERVATION ======================= */}
      <AnimatePresence>
        {isManualModalOpen && (
          <div
            onClick={() => setIsManualModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-[#221814] border border-[#C08A2E]/50 rounded-3xl p-6 sm:p-7 shadow-2xl relative my-8"
            >
              <button
                onClick={() => setIsManualModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#7A5B45]/30 hover:bg-[#B8472E] text-[#F2E9DA] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4 pr-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C08A2E] block mb-1">
                  Saisie Directe Gérance
                </span>
                <h3 className="text-xl font-display font-medium text-[#F2E9DA]">
                  Nouvelle Réservation Manuelle
                </h3>
                <p className="text-xs text-[#F2E9DA]/60 font-mono">
                  Pour un client par appel téléphonique ou accueil sur place
                </p>
              </div>

              <form onSubmit={handleCreateManualReservation} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#F2E9DA]/80 mb-1">
                      Nom du Client *
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      value={manualForm.customerName}
                      onChange={(e) =>
                        setManualForm({ ...manualForm, customerName: e.target.value })
                      }
                      placeholder="Ex : Koffi Yao"
                      className="w-full px-3 py-2 min-h-[44px] rounded-xl bg-[#140E0A] border border-[#7A5B45]/50 text-[#F2E9DA] text-base sm:text-xs font-mono focus:outline-none focus:border-[#C08A2E]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#F2E9DA]/80 mb-1">
                      Téléphone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={manualForm.customerPhone}
                      onChange={(e) =>
                        setManualForm({ ...manualForm, customerPhone: e.target.value })
                      }
                      placeholder="+229 97 00 00 00"
                      className="w-full px-3 py-2 min-h-[44px] rounded-xl bg-[#140E0A] border border-[#7A5B45]/50 text-[#F2E9DA] text-base sm:text-xs font-mono focus:outline-none focus:border-[#C08A2E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#F2E9DA]/80 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      value={manualForm.date}
                      onChange={(e) => setManualForm({ ...manualForm, date: e.target.value })}
                      className="w-full px-3 py-2 min-h-[44px] rounded-xl bg-[#140E0A] border border-[#7A5B45]/50 text-[#F2E9DA] text-base sm:text-xs font-mono focus:outline-none focus:border-[#C08A2E]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#F2E9DA]/80 mb-1">
                      Heure
                    </label>
                    <select
                      value={manualForm.time}
                      onChange={(e) => setManualForm({ ...manualForm, time: e.target.value })}
                      className="w-full px-3 py-2 min-h-[44px] rounded-xl bg-[#140E0A] border border-[#7A5B45]/50 text-[#F2E9DA] text-base sm:text-xs font-mono focus:outline-none focus:border-[#C08A2E]"
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
                    <label className="block text-[11px] font-mono uppercase text-[#F2E9DA]/80 mb-1">
                      Couverts
                    </label>
                    <select
                      value={manualForm.guestsCount}
                      onChange={(e) =>
                        setManualForm({ ...manualForm, guestsCount: e.target.value })
                      }
                      className="w-full px-3 py-2 min-h-[44px] rounded-xl bg-[#140E0A] border border-[#7A5B45]/50 text-[#F2E9DA] text-base sm:text-xs font-mono focus:outline-none focus:border-[#C08A2E]"
                    >
                      <option value="1">1 pers.</option>
                      <option value="2">2 pers.</option>
                      <option value="3">3 pers.</option>
                      <option value="4">4 pers.</option>
                      <option value="5">5 pers.</option>
                      <option value="6+">6+ pers.</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#F2E9DA]/80 mb-1">
                      Affectation Table
                    </label>
                    <select
                      value={manualForm.tableNumber}
                      onChange={(e) =>
                        setManualForm({ ...manualForm, tableNumber: e.target.value })
                      }
                      className="w-full px-3 py-2 min-h-[44px] rounded-xl bg-[#140E0A] border border-[#7A5B45]/50 text-[#F2E9DA] text-base sm:text-xs font-mono focus:outline-none focus:border-[#C08A2E]"
                    >
                      <option value="Table 1 (Salle)">Table 1 (Salle)</option>
                      <option value="Table 2 (Salle)">Table 2 (Salle)</option>
                      <option value="Table 3 (Salle)">Table 3 (Salle)</option>
                      <option value="Table 4 (Salle)">Table 4 (Salle)</option>
                      <option value="Table 5 (Terrasse)">Table 5 (Terrasse)</option>
                      <option value="Table 6 (Terrasse)">Table 6 (Terrasse)</option>
                      <option value="VIP Saloon">VIP Saloon</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#F2E9DA]/80 mb-1">
                      Plat pré-commandé (Optionnel)
                    </label>
                    <select
                      value={manualForm.selectedDishId}
                      onChange={(e) =>
                        setManualForm({ ...manualForm, selectedDishId: e.target.value })
                      }
                      className="w-full px-3 py-2 min-h-[44px] rounded-xl bg-[#140E0A] border border-[#7A5B45]/50 text-[#F2E9DA] text-base sm:text-xs font-mono focus:outline-none focus:border-[#C08A2E]"
                    >
                      <option value="">Aucun (commande sur place)</option>
                      {MENU_ITEMS.map((dish) => (
                        <option key={dish.id} value={dish.id}>
                          {dish.name} ({formatXOF(dish.price)})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#F2E9DA]/80 mb-1">
                    Instructions ou Préférences
                  </label>
                  <input
                    type="text"
                    value={manualForm.specialInstructions}
                    onChange={(e) =>
                      setManualForm({ ...manualForm, specialInstructions: e.target.value })
                    }
                    placeholder="Terrasse ombragée, anniversaire, vin rouge..."
                    className="w-full px-3 py-2 min-h-[44px] rounded-xl bg-[#140E0A] border border-[#7A5B45]/50 text-[#F2E9DA] text-base sm:text-xs font-mono focus:outline-none focus:border-[#C08A2E]"
                  />
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsManualModalOpen(false)}
                    className="flex-1 py-3 min-h-[44px] rounded-xl bg-[#7A5B45]/20 text-[#F2E9DA]/70 hover:text-white font-mono text-xs uppercase cursor-pointer"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 min-h-[44px] rounded-xl bg-[#C08A2E] hover:bg-[#d49933] text-[#1C140E] font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer active:scale-95 transition-all"
                  >
                    Enregistrer la Réservation
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal (Accidental action protection) */}
      <AnimatePresence>
        {deleteCandidate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-[#221814] border border-rose-500/40 rounded-3xl p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-400 flex items-center justify-center shrink-0">
                  <Trash2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-display font-medium text-[#F2E9DA]">
                    Confirmer la suppression ?
                  </h3>
                  <p className="text-xs font-mono text-[#F2E9DA]/70">
                    Action définitive et irréversible
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#16110E] border border-[#7A5B45]/30 text-xs font-mono space-y-1">
                <p className="text-[#C08A2E] font-bold">
                  Ticket : {deleteCandidate.ticketNumber}
                </p>
                <p className="text-[#F2E9DA]">
                  Client : <strong className="text-white">{deleteCandidate.customerName}</strong>
                </p>
                <p className="text-[#F2E9DA]/70">
                  Date : {deleteCandidate.date} à {deleteCandidate.time} ({deleteCandidate.guestsCount} couverts)
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setDeleteCandidate(null)}
                  className="flex-1 py-3 min-h-[44px] rounded-xl bg-[#7A5B45]/20 hover:bg-[#7A5B45]/30 text-[#F2E9DA]/80 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Annuler
                </button>
                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  className="flex-1 py-3 min-h-[44px] rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-lg transition-colors active:scale-95 cursor-pointer"
                >
                  Supprimer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Embedded Receipt / Addition inspection modal */}
      <ReceiptModal
        isOpen={isReceiptOpen}
        onClose={() => {
          setIsReceiptOpen(false);
          setInspectReceipt(null);
        }}
        data={inspectReceipt}
      />
    </div>
  );
};
