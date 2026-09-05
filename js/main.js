/**
 * LE DÉLICE AFRICAIN — Master JavaScript Controller
 * GSAP ScrollTrigger, Lenis Smooth Scroll, Bogolan SVG Line Draw & Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lenis Smooth Scroll if available
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Connect Lenis to GSAP ScrollTrigger if GSAP is loaded
    if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // 2. Register GSAP Plugins
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    initGsapAnimations();
  }

  // 3. Header Scroll Effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 4. Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-nav .nav-link');

  function openDrawer() {
    mobileDrawer?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer?.classList.remove('active');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', openDrawer);
  drawerClose?.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // 5. Signature Technique: Bogolan / Adinkra SVG Line Draw on Scroll
  initBogolanDraw();

  // 6. Interactive FAQ Accordion
  initFaqAccordion();

  // 7. Reservation & Order WhatsApp Integrations
  initFormsAndModals();

  // 8. Gallery Filters & Lightbox (for galerie.html)
  initGallery();

  // 9. Menu Filter Tabs (for resto.html)
  initMenuFilters();
});

/* ==========================================================================
   GSAP ENTRANCE & SCROLL ANIMATIONS
   ========================================================================== */
function initGsapAnimations() {
  // Fade in hero elements
  gsap.from('.hero-badge, .hero-title, .hero-description, .hero-cta-group, .hero-proof', {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out',
  });

  gsap.from('.hero-visual', {
    opacity: 0,
    x: 40,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.2,
  });

  // Animate section titles and headers on scroll
  gsap.utils.toArray('.section-header').forEach((elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: 'top 85%',
      },
      opacity: 0,
      y: 35,
      duration: 0.9,
      ease: 'power3.out',
    });
  });

  // Animate cards on scroll
  gsap.utils.toArray('.dish-card, .ambiance-feature, .testimonial-card, .timeline-step').forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
    });
  });
}

/* ==========================================================================
   SIGNATURE TECHNIQUE: BOGOLAN LINE DRAW ON SCROLL
   ========================================================================== */
function initBogolanDraw() {
  const bogolanPaths = document.querySelectorAll('.bogolan-path, .bogolan-path-terracotta');
  if (bogolanPaths.length === 0) return;

  if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
    bogolanPaths.forEach((path) => {
      const pathLength = path.getTotalLength ? path.getTotalLength() : 1500;
      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;

      gsap.to(path, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: path.closest('section') || path,
          start: 'top 75%',
          end: 'bottom 40%',
          scrub: 1.2,
        },
      });
    });
  } else {
    // Fallback animation if GSAP isn't available
    bogolanPaths.forEach((path) => {
      path.style.strokeDashoffset = '0';
    });
  }
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close all others
      faqItems.forEach((other) => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   FORMS & WHATSAPP ORDERS MODAL
   ========================================================================== */
function initFormsAndModals() {
  // Order Modal Elements
  const orderModal = document.getElementById('orderModal');
  const modalClose = document.getElementById('modalClose');
  const orderButtons = document.querySelectorAll('.btn-order-trigger');
  const orderForm = document.getElementById('orderDishForm');
  const modalDishName = document.getElementById('modalDishName');
  const modalDishPrice = document.getElementById('modalDishPrice');
  const hiddenDishInput = document.getElementById('hiddenDishInput');

  orderButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dishName = btn.getAttribute('data-dish-name') || 'Plat du Roi';
      const dishPrice = btn.getAttribute('data-dish-price') || '7 000 FCFA';

      if (modalDishName) modalDishName.textContent = dishName;
      if (modalDishPrice) modalDishPrice.textContent = dishPrice;
      if (hiddenDishInput) hiddenDishInput.value = dishName;

      orderModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  modalClose?.addEventListener('click', () => {
    orderModal?.classList.remove('active');
    document.body.style.overflow = '';
  });

  orderModal?.addEventListener('click', (e) => {
    if (e.target === orderModal) {
      orderModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Handle Order Form Submit -> WhatsApp Link
  orderForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const dish = hiddenDishInput?.value || 'Commande';
    const side = document.getElementById('orderSide')?.value || 'Alloco';
    const spice = document.getElementById('orderSpice')?.value || 'Piment doux à part';
    const name = document.getElementById('orderCustomerName')?.value || 'Client';
    const address = document.getElementById('orderCustomerAddress')?.value || 'Cotonou';
    const phone = document.getElementById('orderCustomerPhone')?.value || '';

    const textMessage = `*NOUVELLE COMMANDE — LE DÉLICE AFRICAIN*\n` +
      `👑 *Plat :* ${dish}\n` +
      `🍚 *Accompagnement :* ${side}\n` +
      `🌶️ *Piment :* ${spice}\n` +
      `👤 *Client :* ${name}\n` +
      `📍 *Adresse de livraison :* ${address}\n` +
      `📞 *Téléphone :* ${phone}\n\n` +
      `_Envoyé depuis le site officiel Le Délice Africain_`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/22996000000?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
    orderModal?.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Table Reservation Form on Homepage / Contact
  const reservationForm = document.getElementById('tableReservationForm');
  reservationForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('resName')?.value || '';
    const phone = document.getElementById('resPhone')?.value || '';
    const date = document.getElementById('resDate')?.value || '';
    const time = document.getElementById('resTime')?.value || '';
    const guests = document.getElementById('resGuests')?.value || '2';
    const notes = document.getElementById('resNotes')?.value || 'Aucune note particulière';

    const textMessage = `*DEMANDE DE RÉSERVATION DE TABLE*\n` +
      `👑 *Établissement :* Le Délice Africain (Cotonou)\n` +
      `👤 *Nom :* ${name}\n` +
      `📞 *Téléphone :* ${phone}\n` +
      `📅 *Date :* ${date}\n` +
      `⏰ *Heure :* ${time}\n` +
      `👥 *Nombre de convives :* ${guests} personnes\n` +
      `📝 *Notes / Préférences :* ${notes}\n\n` +
      `_Envoyé depuis le site officiel Le Délice Africain_`;

    const encoded = encodeURIComponent(textMessage);
    window.open(`https://wa.me/22996000000?text=${encoded}`, '_blank');
  });
}

/* ==========================================================================
   MENU FILTERS (RESTO.HTML)
   ========================================================================== */
function initMenuFilters() {
  const filterBtns = document.querySelectorAll('.menu-filters .filter-btn');
  const dishCards = document.querySelectorAll('.resto-dishes-grid .dish-card');

  if (filterBtns.length === 0 || dishCards.length === 0) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      dishCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 });
          }
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   GALLERY FILTERS & LIGHTBOX (GALERIE.HTML)
   ========================================================================== */
function initGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  if (!lightbox || galleryItems.length === 0) return;

  let currentIdx = 0;
  const visibleItems = [];

  function updateVisibleItems() {
    visibleItems.length = 0;
    galleryItems.forEach((item) => {
      if (item.style.display !== 'none') {
        visibleItems.push(item);
      }
    });
  }

  updateVisibleItems();

  // Filter functionality
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach((item) => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
      updateVisibleItems();
    });
  });

  // Lightbox show function
  function showLightbox(idx) {
    if (visibleItems.length === 0) return;
    currentIdx = (idx + visibleItems.length) % visibleItems.length;
    const item = visibleItems[currentIdx];
    const img = item.querySelector('img');
    const title = item.getAttribute('data-title') || '';
    const category = item.getAttribute('data-category-label') || '';

    if (lightboxImg && img) lightboxImg.src = img.src;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxCategory) lightboxCategory.textContent = category;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const idx = visibleItems.indexOf(item);
      if (idx !== -1) {
        showLightbox(idx);
      }
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', () => showLightbox(currentIdx - 1));
  lightboxNext?.addEventListener('click', () => showLightbox(currentIdx + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showLightbox(currentIdx - 1);
    if (e.key === 'ArrowRight') showLightbox(currentIdx + 1);
  });
}
