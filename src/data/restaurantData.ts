export interface MenuItem {
  id: string;
  name: string;
  category: 'Entrées' | 'Plats' | 'Accompagnements' | 'Desserts' | 'Boissons';
  price: number;
  formattedPrice: string;
  description: string;
  image: string;
  badge?: string;
  isSignature?: boolean;
  prepTime?: string;
}

export interface AccompanimentOption {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  prepTime?: string;
}

export const ACCOMPANIMENTS: AccompanimentOption[] = [
  { id: 'none', name: 'Sans accompagnement', price: 0, formattedPrice: '+0 FCFA', prepTime: '' },
  { id: 'alloco-dore', name: 'Alloco Doré', price: 1000, formattedPrice: '+1 000 FCFA', prepTime: '10-15 min' },
  { id: 'attieke-frais', name: 'Attiéké Frais', price: 1000, formattedPrice: '+1 000 FCFA', prepTime: '5-10 min' },
  { id: 'frites-igname', name: 'Frites d\'Igname', price: 1500, formattedPrice: '+1 500 FCFA', prepTime: '12-15 min' },
  { id: 'riz-blanc', name: 'Riz Blanc Parfumé', price: 1000, formattedPrice: '+1 000 FCFA', prepTime: '5-10 min' },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  location: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ambiance' | 'Plats' | 'Moments';
  image: string;
  sizeSpan: 'normal' | 'wide' | 'tall';
  description: string;
}

// Authentic imagery from the restaurant collection & curated atmosphere
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop", // Warm artisanal African dining atmosphere with bamboo, rattan lamps & earthy tones
  ambiance: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop", // Warm interior with wooden carved decor, intimate lighting
  experience: encodeURI("/images/l’adresse parfaite pour allier saveurs….jfif"), // Moments partagés - L'adresse parfaite pour allier saveurs...
  chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop", // Chef Jean Dossou
  marie: encodeURI("/images/marie-kouame.jfif"), // Marie Kouamé, Responsable de salle
  client1: encodeURI("/images/koffi-yao.jfif"), // Koffi Yao
  client2: encodeURI("/images/aminata-diop.jfif"), // Aminata Diop

  // Dishes and Accompaniments from /images/
  tilapiaBraise: encodeURI("/images/Tilapia-braisé.jfif"), // Tilapia braisé avec épices
  poissonBraise: encodeURI("/images/poisson-braisé.jfif"), // Poisson braisé garni
  rizGras: encodeURI("/images/riz-au-gras.jfif"), // Riz gras avec alloco et viande
  platDuRoi: encodeURI("/images/plat-du-roi.jfif"), // Plat du Roi (assortiment braisé)
  pastelsSenegalais: encodeURI("/images/pastels-senegalais.jfif"), // Pastels dorés
  beignetsMaison: encodeURI("/images/beignets-maison.jfif"), // Beignets dorés traditionnels
  alloco: encodeURI("/images/alloco-dore.jpg"), // Bananes plantains frites dorées (Alloco)
  attieke: encodeURI("/images/attieke.jpg"), // Semoule de manioc fraîche (Attiéké)
  fritesIgname: encodeURI("/images/frites-d’igname.jpg"), // Bâtonnets d'igname croustillants
  rizBlanc: encodeURI("/images/riz-blanc.jpg"), // Riz blanc parfumé
  dessertsVaries: encodeURI("/images/desserts-variés.jfif"), // Desserts variés
  nougatArachides: encodeURI("/images/nougard-au-arachides.jfif"), // Nougat aux arachides
  bissap: encodeURI("/images/bissap.jfif"), // Verre de Bissap frais
  crepes: encodeURI("/images/crêpes.jfif"), // Crêpes gourmandes
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'pastels-senegalais',
    name: 'Pastels Sénégalais',
    category: 'Entrées',
    price: 500,
    formattedPrice: '500 FCFA',
    description: 'Petits chaussons dorés et croustillants farcis au poisson épicé et herbes fraîches, servis avec notre sauce tomate pimentée maison.',
    image: IMAGES.pastelsSenegalais,
    badge: 'Croustillant',
    prepTime: '10-12 min',
  },
  {
    id: 'beignets-maison',
    name: 'Beignets Maison',
    category: 'Entrées',
    price: 500,
    formattedPrice: '500 FCFA',
    description: 'Beignets traditionnels dorés, moelleux à cœur et délicatement parfumés à la muscade et à la fleur d\'oranger.',
    image: IMAGES.beignetsMaison,
    badge: 'Fait Maison',
    prepTime: '10 min',
  },
  {
    id: 'tilapia-braise',
    name: 'Tilapia Braisé',
    category: 'Plats',
    price: 4000,
    formattedPrice: '4 000 FCFA',
    description: 'Tilapia entier mariné aux épices du Bénin et herbes fraîches, braisé lentement au feu de bois. Piment vert au choix.',
    image: IMAGES.tilapiaBraise,
    badge: 'Incontournable',
    isSignature: true,
    prepTime: '20-25 min',
  },
  {
    id: 'poisson-braise',
    name: 'Poisson Braisé',
    category: 'Plats',
    price: 4000,
    formattedPrice: '4 000 FCFA',
    description: 'Capitaine frais de Cotonou braisé à la braise ardente, nappe de sauce kankankan aux épices secrètes du chef et oignons confits.',
    image: IMAGES.poissonBraise,
    badge: 'Signature',
    isSignature: true,
    prepTime: '25-30 min',
  },
  {
    id: 'riz-gras',
    name: 'Riz Gras',
    category: 'Plats',
    price: 3500,
    formattedPrice: '3 500 FCFA',
    description: 'Riz traditionnel parfumé mijoté dans un bouillon riche de légumes et de viande fondante du terroir.',
    image: IMAGES.rizGras,
    badge: 'Tradition',
    isSignature: true,
    prepTime: '15 min',
  },
  {
    id: 'plat-du-roi',
    name: 'Plat du Roi',
    category: 'Plats',
    price: 10000,
    formattedPrice: '10 000 FCFA',
    description: 'Le grand festin du Délice Africain : assortiment royal de viandes et poissons braisés au feu de bois, sauce graine onctueuse.',
    image: IMAGES.platDuRoi,
    badge: 'Prestige',
    prepTime: '25-30 min',
  },
  {
    id: 'alloco-dore',
    name: 'Alloco Doré',
    category: 'Accompagnements',
    price: 2500,
    formattedPrice: '2 500 FCFA',
    description: 'Bananes plantains mûres découpées en dés et frites à la minute dans une huile pure, fondantes et dorées.',
    image: IMAGES.alloco,
    badge: 'Populaire',
    prepTime: '10-15 min',
  },
  {
    id: 'attieke-frais',
    name: 'Attiéké Frais',
    category: 'Accompagnements',
    price: 4500,
    formattedPrice: '4 500 FCFA',
    description: 'Semoule de manioc cuite à la vapeur, légèrement acidulée et aérée, accompagnement idéal des poissons braisés.',
    image: IMAGES.attieke,
    badge: 'Tradition',
    prepTime: '5-10 min',
  },
  {
    id: 'frites-igname',
    name: 'Frites d\'Igname',
    category: 'Accompagnements',
    price: 1500,
    formattedPrice: '1 500 FCFA',
    description: 'Bâtonnets d\'igname du terroir béninois croustillants à l\'extérieur et tendres à cœur.',
    image: IMAGES.fritesIgname,
    badge: 'Terroir',
    prepTime: '12-15 min',
  },
  {
    id: 'riz-blanc',
    name: 'Riz Blanc Parfumé',
    category: 'Accompagnements',
    price: 1000,
    formattedPrice: '1 000 FCFA',
    description: 'Riz blanc grain long de qualité cuit à la vapeur avec des aromates délicats et feuille de laurier.',
    image: IMAGES.rizBlanc,
    prepTime: '5-10 min',
  },
  {
    id: 'desserts-varies',
    name: 'Desserts Variés',
    category: 'Desserts',
    price: 1500,
    formattedPrice: '1 500 FCFA',
    description: 'Assiette dégustation de douceurs locales revisitées, crêpes moelleuses au miel sauvage et fruits tropicaux tranchés.',
    image: IMAGES.dessertsVaries,
    prepTime: '5 min',
  },
  {
    id: 'nougat-arachides',
    name: 'Nougat aux Arachides',
    category: 'Desserts',
    price: 500,
    formattedPrice: '500 FCFA',
    description: 'Nougat artisanal croustillant préparé à partir d\'arachides du terroir béninois délicatement caramélisées au sucre de canne.',
    image: IMAGES.nougatArachides,
    badge: 'Nouveau',
    prepTime: 'Immédiat',
  },
  {
    id: 'bissap',
    name: 'Bissap',
    category: 'Boissons',
    price: 500,
    formattedPrice: '500 FCFA',
    description: 'Infusion maison de calices d\'hibiscus bio, menthe fraîche cueillie du jour et subtile touche de gingembre piquant.',
    image: IMAGES.bissap,
    badge: 'Rafraîchissant',
    prepTime: 'Immédiat',
  },
];

export const SIGNATURE_DISHES = MENU_ITEMS.filter(item => item.isSignature);

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Jean Dossou',
    role: 'Chef cuisinier & Fondateur',
    bio: 'Passionné de gastronomie africaine depuis plus de 15 ans, le Chef Jean sublime les produits du terroir béninois avec respect et précision.',
    image: IMAGES.chef,
  },
  {
    name: 'Marie Kouamé',
    role: 'Responsable de salle & des tables',
    bio: 'Avec son sourire communicatif et son sens du détail, Marie veille à ce que chaque tablée soit un véritable moment de fête, de partage et de convivialité.',
    image: IMAGES.marie,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Koffi Yao',
    rating: 5,
    comment: 'Un délice ! Les plats sont toujours frais et savoureux. Le Tilapia braisé est sans conteste le meilleur de tout Cotonou. Je recommande vivement.',
    location: 'Cotonou',
    avatar: IMAGES.client1,
  },
  {
    id: '2',
    name: 'Aminata Diop',
    rating: 5,
    comment: 'L\'ambiance est chaleureuse et le service impeccable. J\'adore leurs plats végétariens et la fraîcheur du Bissap maison.',
    location: 'Fidjrossè',
    avatar: IMAGES.client2,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Terrasse & Cadre du restaurant',
    category: 'Ambiance',
    image: IMAGES.hero,
    sizeSpan: 'wide',
    description: 'Espace extérieur aéré avec lampes en fibres tressées et convivialité béninoise.',
  },
  {
    id: 'g2',
    title: 'Tilapia braisé à la braise',
    category: 'Plats',
    image: IMAGES.tilapiaBraise,
    sizeSpan: 'normal',
    description: 'Tilapia grillé aux épices traditionnelles avec piment vert.',
  },
  {
    id: 'g3',
    title: 'Salle intérieure & artisanat',
    category: 'Ambiance',
    image: IMAGES.ambiance,
    sizeSpan: 'normal',
    description: 'Sculptures de musiciens en bois noble et éclairage tamisé.',
  },
  {
    id: 'g4',
    title: 'Moments partagés',
    category: 'Moments',
    image: IMAGES.experience,
    sizeSpan: 'wide',
    description: 'Des tablées conviviales autour des saveurs de l\'Afrique.',
  },
  {
    id: 'g5',
    title: 'Riz au Gras parfumé',
    category: 'Plats',
    image: IMAGES.rizGras,
    sizeSpan: 'normal',
    description: 'Cuisson lente au bouillon aromatique et viandes tendres.',
  },
  {
    id: 'g6',
    title: 'Poisson Braisé du jour',
    category: 'Plats',
    image: IMAGES.poissonBraise,
    sizeSpan: 'tall',
    description: 'Pêche locale fraîchement assaisonnée de kankankan.',
  },
  {
    id: 'g7',
    title: 'Plat du Roi (Festin Royal)',
    category: 'Plats',
    image: IMAGES.platDuRoi,
    sizeSpan: 'wide',
    description: 'Assortiment royal de braisés au feu de bois et sauce graine.',
  },
  {
    id: 'g8',
    title: 'Alloco Doré',
    category: 'Plats',
    image: IMAGES.alloco,
    sizeSpan: 'normal',
    description: 'Bananes plantains mûres frites à la minute, crousti-fondantes.',
  },
  {
    id: 'g9',
    title: 'Attiéké Frais',
    category: 'Plats',
    image: IMAGES.attieke,
    sizeSpan: 'normal',
    description: 'Semoule de manioc vapeur aérée, l\'accompagnement par excellence.',
  },
  {
    id: 'g10',
    title: 'Pastels croustillants',
    category: 'Plats',
    image: IMAGES.pastelsSenegalais,
    sizeSpan: 'normal',
    description: 'Farcis au poisson épicé et herbes du potager.',
  },
  {
    id: 'g11',
    title: 'Beignets & douceurs dorées',
    category: 'Plats',
    image: IMAGES.beignetsMaison,
    sizeSpan: 'normal',
    description: 'Moelleux à souhait, parfumés à la muscade et fleur d\'oranger.',
  },
  {
    id: 'g12',
    title: 'Bissap frais à la menthe',
    category: 'Plats',
    image: IMAGES.bissap,
    sizeSpan: 'normal',
    description: 'Fleurs d\'hibiscus infusées aux herbes fraîches de Fidjrossè.',
  },
  {
    id: 'g13',
    title: 'Crêpes & Miel sauvage',
    category: 'Plats',
    image: IMAGES.crepes,
    sizeSpan: 'normal',
    description: 'Dessert réconfortant arrosé de miel pur de nos terroirs.',
  },
  {
    id: 'g14',
    title: 'Nougat aux Arachides',
    category: 'Plats',
    image: IMAGES.nougatArachides,
    sizeSpan: 'normal',
    description: 'Nougat artisanal caramélisé au sucre roux.',
  },
  {
    id: 'g15',
    title: 'Chef Jean Dossou en cuisine',
    category: 'Moments',
    image: IMAGES.chef,
    sizeSpan: 'normal',
    description: 'Le soin artisanal apporté à chaque assiette servie.',
  },
  {
    id: 'g16',
    title: 'Accueil chaleureux par Marie',
    category: 'Moments',
    image: IMAGES.marie,
    sizeSpan: 'normal',
    description: 'Le sens de l\'hospitalité béninoise au quotidien.',
  },
];

export const PRACTICAL_INFO = {
  address: "Fidjrossè, Cotonou, Bénin",
  landmark: "À 5 minutes de la plage de Fidjrossè, carrefour du club",
  coordinates: "6.3554° N, 2.3907° E",
  phone: "+229 97 00 00 00",
  whatsapp: "+229 61 00 00 00",
  email: "contact@ledeliceafricain.bj",
  hours: [
    { days: "Mardi – Jeudi", hours: "11h30 – 23h00" },
    { days: "Vendredi – Samedi", hours: "11h30 – 00h00" },
    { days: "Dimanche", hours: "12h00 – 22h30" },
    { days: "Lundi", hours: "Fermé (Jour d'approvisionnement frais)" },
  ],
};
