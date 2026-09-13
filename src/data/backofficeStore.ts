/**
 * Module de stockage et de gestion du Back-Office pour Le Délice Africain
 * Respecte strictement la charte d'intégrité des données réelles (aucun faux mock)
 */

import { ReceiptData } from '../components/ReceiptModal';

export type ReservationStatus = 'EN_ATTENTE' | 'CONFIRMEE' | 'INSTALLEE' | 'TERMINEE' | 'ANNULEE';
export type PaymentStatus = 'NON_PAYE' | 'ACOMPTE' | 'PAYE';

export interface BackOfficeReservation {
  id: string;
  ticketNumber: string;
  customerName: string;
  customerPhone: string;
  date: string;
  time: string;
  guestsCount: string | number;
  serviceType: string;
  tableNumber?: string;
  specialInstructions?: string;
  items: {
    name: string;
    quantity: number;
    unitPrice: number;
    sides?: string;
    sidesPrice?: number;
  }[];
  totalAmount: number;
  status: ReservationStatus;
  paymentStatus: PaymentStatus;
  prepTimeEstimated?: string;
  createdAt: string;
  notesAdmin?: string;
}

export interface MenuItemCustomization {
  id: string;
  isAvailable: boolean;
  customPrice?: number;
  customPrepTime?: string;
  customBadge?: string;
}

export interface RestaurantConfig {
  maxCoversPerService: number;
  isOpenForBookings: boolean;
  serviceNotice: string;
  adminPin: string;
}

const STORAGE_KEY_RESERVATIONS = 'da_reservations_store';
const STORAGE_KEY_MENU = 'da_menu_customizations';
const STORAGE_KEY_CONFIG = 'da_restaurant_config';
const STORAGE_KEY_AUTH = 'da_admin_auth_session';

const DEFAULT_CONFIG: RestaurantConfig = {
  maxCoversPerService: 40,
  isOpenForBookings: true,
  serviceNotice: 'Service normal midi & soir',
  adminPin: '2026', // Code PIN initial gérant
};

/**
 * Récupère l'ensemble des réservations réelles enregistrées
 */
export const getStoredReservations = (): BackOfficeReservation[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_RESERVATIONS);
    let list: BackOfficeReservation[] = raw ? JSON.parse(raw) : [];

    // Récupérer et migrer les tickets individuels existants s'ils ne sont pas encore indexés
    const indexedTicketNumbers = new Set(list.map((r) => r.ticketNumber));
    let hasNewFromLegacy = false;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('da_ticket_')) {
        try {
          const itemRaw = localStorage.getItem(key);
          if (itemRaw) {
            const ticket: ReceiptData = JSON.parse(itemRaw);
            if (ticket && ticket.ticketNumber && !indexedTicketNumbers.has(ticket.ticketNumber)) {
              list.unshift({
                id: ticket.ticketNumber,
                ticketNumber: ticket.ticketNumber,
                customerName: ticket.customerName || 'Client',
                customerPhone: ticket.customerPhone || '',
                date: ticket.date || new Date().toISOString().split('T')[0],
                time: ticket.time || '19:30',
                guestsCount: ticket.guestsCount || 2,
                serviceType: ticket.serviceType || 'sur-place',
                specialInstructions: ticket.specialInstructions || '',
                items: ticket.items || [],
                totalAmount: ticket.totalAmount || 0,
                status: 'EN_ATTENTE',
                paymentStatus: 'NON_PAYE',
                prepTimeEstimated: ticket.prepTimeEstimated,
                createdAt: new Date().toISOString(),
              });
              indexedTicketNumbers.add(ticket.ticketNumber);
              hasNewFromLegacy = true;
            }
          }
        } catch {
          // Ignorer les clés corrompues
        }
      }
    }

    if (hasNewFromLegacy) {
      localStorage.setItem(STORAGE_KEY_RESERVATIONS, JSON.stringify(list));
    }

    // Tri par date décroissante
    return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (err) {
    console.error('Erreur lecture réservations:', err);
    return [];
  }
};

/**
 * Enregistre ou met à jour une réservation
 */
export const saveReservation = (reservation: BackOfficeReservation): void => {
  if (typeof window === 'undefined') return;
  const list = getStoredReservations();
  const index = list.findIndex((r) => r.id === reservation.id);
  if (index >= 0) {
    list[index] = reservation;
  } else {
    list.unshift(reservation);
  }
  localStorage.setItem(STORAGE_KEY_RESERVATIONS, JSON.stringify(list));
};

/**
 * Ajoute une réservation passée depuis le formulaire client
 */
export const addReservationFromClient = (receipt: ReceiptData): BackOfficeReservation => {
  const newReservation: BackOfficeReservation = {
    id: receipt.ticketNumber,
    ticketNumber: receipt.ticketNumber,
    customerName: receipt.customerName,
    customerPhone: receipt.customerPhone,
    date: receipt.date,
    time: receipt.time,
    guestsCount: receipt.guestsCount,
    serviceType: receipt.serviceType,
    specialInstructions: receipt.specialInstructions,
    items: receipt.items || [],
    totalAmount: receipt.totalAmount,
    status: 'EN_ATTENTE',
    paymentStatus: 'NON_PAYE',
    prepTimeEstimated: receipt.prepTimeEstimated,
    createdAt: new Date().toISOString(),
  };

  saveReservation(newReservation);
  return newReservation;
};

/**
 * Met à jour le statut d'une réservation (ex: Confirmée, Installée, etc.)
 */
export const updateReservationStatus = (
  id: string,
  status: ReservationStatus,
  tableNumber?: string,
  notesAdmin?: string
): void => {
  const list = getStoredReservations();
  const index = list.findIndex((r) => r.id === id);
  if (index >= 0) {
    list[index].status = status;
    if (tableNumber !== undefined) list[index].tableNumber = tableNumber;
    if (notesAdmin !== undefined) list[index].notesAdmin = notesAdmin;
    localStorage.setItem(STORAGE_KEY_RESERVATIONS, JSON.stringify(list));
  }
};

/**
 * Met à jour le statut du règlement
 */
export const updatePaymentStatus = (id: string, paymentStatus: PaymentStatus): void => {
  const list = getStoredReservations();
  const index = list.findIndex((r) => r.id === id);
  if (index >= 0) {
    list[index].paymentStatus = paymentStatus;
    localStorage.setItem(STORAGE_KEY_RESERVATIONS, JSON.stringify(list));
  }
};

/**
 * Supprime une réservation
 */
export const deleteReservation = (id: string): void => {
  const list = getStoredReservations().filter((r) => r.id !== id);
  localStorage.setItem(STORAGE_KEY_RESERVATIONS, JSON.stringify(list));
};

/**
 * Récupère les personnalisations de la carte des plats (disponibilité, prix)
 */
export const getMenuCustomizations = (): Record<string, MenuItemCustomization> => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MENU);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

/**
 * Modifie la disponibilité ou les infos d'un plat dans la carte
 */
export const saveMenuCustomization = (id: string, custom: Partial<MenuItemCustomization>): void => {
  if (typeof window === 'undefined') return;
  const current = getMenuCustomizations();
  current[id] = {
    ...(current[id] || { id, isAvailable: true }),
    ...custom,
  };
  localStorage.setItem(STORAGE_KEY_MENU, JSON.stringify(current));
};

/**
 * Configuration du restaurant
 */
export const getRestaurantConfig = (): RestaurantConfig => {
  if (typeof window === 'undefined') return DEFAULT_CONFIG;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CONFIG);
    return raw ? { ...DEFAULT_CONFIG, ...JSON.parse(raw) } : DEFAULT_CONFIG;
  } catch {
    return DEFAULT_CONFIG;
  }
};

export const saveRestaurantConfig = (config: Partial<RestaurantConfig>): void => {
  if (typeof window === 'undefined') return;
  const current = getRestaurantConfig();
  const updated = { ...current, ...config };
  localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(updated));
};

/**
 * Vérification de session gérant
 */
export const isAdminAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(STORAGE_KEY_AUTH) === 'true';
};

export const setAdminAuthenticated = (auth: boolean): void => {
  if (typeof window === 'undefined') return;
  if (auth) {
    sessionStorage.setItem(STORAGE_KEY_AUTH, 'true');
  } else {
    sessionStorage.removeItem(STORAGE_KEY_AUTH);
  }
};

export type StaffRole = 'GERANT' | 'SALLE' | 'CUISINE';

export const STAFF_ROLES: { id: StaffRole; label: string; description: string; pinFallback?: string }[] = [
  { id: 'GERANT', label: 'Direction & Gérance', description: 'Accès global (réservations, caisse, carte, réglages)' },
  { id: 'SALLE', label: 'Accueil & Maître d’Hôtel', description: 'Gestion des tables, arrivées et encaissements' },
  { id: 'CUISINE', label: 'Cuisine & Brigade Chef', description: 'Écran KDS commandes, braisage et gestion des stocks' },
];

/**
 * Exporte l'historique et les réservations sous forme de fichier CSV compatible Excel (avec BOM UTF-8)
 */
export const exportJournalToCSV = (reservations: BackOfficeReservation[], filenamePrefix = 'journal_delice_africain'): void => {
  if (typeof window === 'undefined' || reservations.length === 0) return;

  const headers = [
    'Numéro Ticket',
    'Date Service',
    'Heure',
    'Nom Client',
    'Téléphone',
    'Couverts',
    'Table',
    'Service',
    'Plats Précommandés',
    'Total (FCFA)',
    'Statut Réservation',
    'Statut Paiement',
    'Instructions Client',
    'Date Création'
  ];

  const escapeCSV = (str: string | number | undefined | null) => {
    if (str === undefined || str === null) return '""';
    const s = String(str).replace(/"/g, '""');
    return `"${s}"`;
  };

  const rows = reservations.map((r) => {
    const dishes = (r.items || [])
      .map((it) => `${it.quantity}x ${it.name}${it.sides ? ` (+ ${it.sides})` : ''}`)
      .join(' | ');

    return [
      escapeCSV(r.ticketNumber),
      escapeCSV(r.date),
      escapeCSV(r.time),
      escapeCSV(r.customerName),
      escapeCSV(r.customerPhone),
      escapeCSV(r.guestsCount),
      escapeCSV(r.tableNumber || 'Non affectée'),
      escapeCSV(r.serviceType),
      escapeCSV(dishes),
      escapeCSV(r.totalAmount || 0),
      escapeCSV(r.status),
      escapeCSV(r.paymentStatus),
      escapeCSV(r.specialInstructions || ''),
      escapeCSV(r.createdAt || ''),
    ].join(';');
  });

  const csvContent = '\uFEFF' + [headers.join(';'), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const todayStr = new Date().toISOString().split('T')[0];
  link.setAttribute('href', url);
  link.setAttribute('download', `${filenamePrefix}_${todayStr}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const verifyAdminPin = (enteredPin: string): boolean => {
  const config = getRestaurantConfig();
  const isValid = enteredPin.trim() === config.adminPin.trim();
  if (isValid) {
    setAdminAuthenticated(true);
  }
  return isValid;
};
