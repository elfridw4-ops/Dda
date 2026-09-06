import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AmbianceSection } from './components/AmbianceSection';
import { SignatureDishesSection } from './components/SignatureDishesSection';
import { PreOrderSection } from './components/PreOrderSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AboutTeamSection } from './components/AboutTeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { MenuPage } from './components/MenuPage';
import { GalleryPage } from './components/GalleryPage';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MenuItem } from './data/restaurantData';
import { UtensilsCrossed } from 'lucide-react';
import { ReceiptItem, ReceiptData, ReceiptModal } from './components/ReceiptModal';
import { TicketVerificationModal } from './components/TicketVerificationModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<'accueil' | 'menu' | 'galerie' | 'apropos' | 'contact'>('accueil');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDishForBooking, setSelectedDishForBooking] = useState<MenuItem | null>(null);
  const [preOrderSummary, setPreOrderSummary] = useState<string>('');
  const [preOrderTotal, setPreOrderTotal] = useState<number>(0);
  const [preOrderItems, setPreOrderItems] = useState<ReceiptItem[]>([]);
  const [preOrderPrepTime, setPreOrderPrepTime] = useState<string | undefined>(undefined);

  // Scanned QR Ticket state
  const [scannedTicketData, setScannedTicketData] = useState<{
    ticketNumber: string;
    client: string;
    phone?: string;
    service: string;
    guests: number;
    date: string;
    time: string;
    total: number;
    items?: { name: string; quantity: number; unitPrice: number }[];
  } | null>(null);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [verifiedFullReceipt, setVerifiedFullReceipt] = useState<ReceiptData | null>(null);
  const [isVerifiedReceiptOpen, setIsVerifiedReceiptOpen] = useState(false);

  // Detect QR Code scan from URL parameters
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      const params = new URLSearchParams(window.location.search);
      const ticketParam = params.get('ticket');
      if (ticketParam) {
        let cachedReceipt: ReceiptData | null = null;
        try {
          const raw = localStorage.getItem(`da_ticket_${ticketParam}`) || localStorage.getItem('da_latest_ticket');
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed.ticketNumber === ticketParam) {
              cachedReceipt = parsed;
            }
          }
        } catch (e) {
          console.warn('Error reading ticket cache:', e);
        }

        if (cachedReceipt) {
          setScannedTicketData({
            ticketNumber: cachedReceipt.ticketNumber,
            client: cachedReceipt.customerName,
            phone: cachedReceipt.customerPhone,
            service: cachedReceipt.serviceType,
            guests: cachedReceipt.guestsCount,
            date: cachedReceipt.date,
            time: cachedReceipt.time,
            total: cachedReceipt.totalAmount,
            items: cachedReceipt.items,
          });
        } else {
          setScannedTicketData({
            ticketNumber: ticketParam,
            client: params.get('client') || 'Client',
            phone: params.get('phone') || undefined,
            service: params.get('service') || 'sur-place',
            guests: parseInt(params.get('guests') || '2', 10),
            date: params.get('date') || new Date().toLocaleDateString('fr-FR'),
            time: params.get('time') || '12:30',
            total: parseInt(params.get('total') || '0', 10),
          });
        }
        setIsVerificationModalOpen(true);
      }
    }
  }, []);

  // Smooth scroll to top when changing views
  const handleNavigate = (tab: 'accueil' | 'menu' | 'galerie' | 'apropos' | 'contact', anchor?: string) => {
    setActiveTab(tab);
    if (tab === 'accueil') {
      if (anchor) {
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenDishBooking = (dish: MenuItem) => {
    setSelectedDishForBooking(dish);
    setPreOrderSummary('');
    setPreOrderTotal(dish.price);
    setPreOrderItems([{
      name: dish.name,
      quantity: 1,
      unitPrice: dish.price
    }]);
    setPreOrderPrepTime(dish.prepTime);
    setIsReservationOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedDishForBooking(null);
    setPreOrderSummary('');
    setPreOrderTotal(0);
    setPreOrderItems([]);
    setPreOrderPrepTime(undefined);
    setIsReservationOpen(true);
  };

  const handleOpenReservationWithOrder = (
    orderSummary: string, 
    totalAmount: number,
    items?: ReceiptItem[],
    prepTime?: string
  ) => {
    setSelectedDishForBooking(null);
    setPreOrderSummary(orderSummary);
    setPreOrderTotal(totalAmount);
    setPreOrderItems(items || []);
    setPreOrderPrepTime(prepTime);
    setIsReservationOpen(true);
  };

  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    if (activeTab !== 'accueil') {
      setActiveTab('accueil');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#16110E] text-[#F2E9DA] flex flex-col justify-between selection:bg-[#B8472E] selection:text-[#F2E9DA]">
      
      {/* Sticky Top Navigation */}
      <Navbar
        activeTab={activeTab}
        onNavigate={(tab) => handleNavigate(tab)}
        onOpenReservation={handleOpenGeneralBooking}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {activeTab === 'accueil' && (
          <div id="home-view-container">
            {/* 1. Hero Section */}
            <HeroSection
              onNavigateMenu={() => handleNavigate('menu')}
              onNavigateAbout={() => scrollToSection('apropos-section')}
            />

            {/* 2. Ambiance Section (Split-screen interior & Adinkra SVG line-draw) */}
            <AmbianceSection />

            {/* 3. Nos Plats Signature (3 items: Tilapia Braisé, Poisson Braisé, Riz Gras) */}
            <SignatureDishesSection
              onNavigateMenu={() => handleNavigate('menu')}
              onSelectDish={handleOpenDishBooking}
            />

            {/* 4. Pré-commande & Tablée Gourmande (Module Interactif) */}
            <PreOrderSection
              onOpenReservationWithOrder={handleOpenReservationWithOrder}
            />

            {/* 5. L'Expérience (Full width convivial dining moment) */}
            <ExperienceSection />

            {/* 6. À propos + Équipe (Jean Dossou & Marie Kouamé) */}
            <AboutTeamSection
              onNavigateContact={() => scrollToSection('contact-section')}
            />

            {/* 7. Témoignages (Koffi Yao & Aminata Diop) */}
            <TestimonialsSection />

            {/* 8. Contact (Form with delay/spinner + address Cotonou Fidjrossè) */}
            <ContactSection />
          </div>
        )}

        {activeTab === 'menu' && (
          <div>
            <MenuPage
              onOpenReservation={handleOpenGeneralBooking}
              onSelectDish={handleOpenDishBooking}
            />
            {/* Embedded interactive pre-order module at bottom of menu */}
            <PreOrderSection
              onOpenReservationWithOrder={handleOpenReservationWithOrder}
            />
          </div>
        )}

        {activeTab === 'galerie' && (
          <GalleryPage />
        )}

        {activeTab === 'apropos' && (
          <div className="pt-20">
            <AboutTeamSection onNavigateContact={() => handleNavigate('contact')} />
            <AmbianceSection />
            <ExperienceSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-20">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer with signature watermark and CTA conversion block */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReservation={handleOpenGeneralBooking}
      />

      {/* Reservation & Booking Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        initialDish={selectedDishForBooking}
        initialOrderText={preOrderSummary}
        initialTotalAmount={preOrderTotal}
        initialItems={preOrderItems}
        prepTimeEstimated={preOrderPrepTime}
      />

      {/* Scanned QR Code Ticket Verification Modal */}
      <TicketVerificationModal
        isOpen={isVerificationModalOpen}
        onClose={() => {
          setIsVerificationModalOpen(false);
          // Clean URL without reloading
          if (typeof window !== 'undefined') {
            window.history.replaceState({}, '', window.location.pathname);
          }
        }}
        ticketData={scannedTicketData}
        onOpenFullReceipt={(full) => {
          setVerifiedFullReceipt(full);
          setIsVerifiedReceiptOpen(true);
        }}
      />

      {/* Scanned Full Receipt View Modal */}
      <ReceiptModal
        isOpen={isVerifiedReceiptOpen}
        onClose={() => {
          setIsVerifiedReceiptOpen(false);
          setVerifiedFullReceipt(null);
          if (typeof window !== 'undefined') {
            window.history.replaceState({}, '', window.location.pathname);
          }
        }}
        data={verifiedFullReceipt}
      />

      {/* Floating Action Button (FAB) for Instant Table Booking */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          id="floating-reserve-btn"
          onClick={handleOpenGeneralBooking}
          className="group relative p-3.5 sm:p-4 bg-[#C08A2E] hover:bg-[#d49933] text-[#1C140E] rounded-full shadow-2xl shadow-black/60 flex items-center justify-center font-bold active:scale-95 border border-[#F2E9DA]/30 transition-all duration-300 hover:shadow-[#C08A2E]/40 focus:outline-none focus:ring-2 focus:ring-[#C08A2E]"
          aria-label="Réserver une table"
        >
          <UtensilsCrossed className="w-5 h-5 transition-transform group-hover:rotate-12" />
          <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-out text-xs uppercase tracking-wider font-bold pl-0 group-hover:pl-2">
            Réserver
          </span>
        </button>
      </div>

    </div>
  );
}
