import { Metadata } from 'next'

export const siteConfig = {
  name: 'Transafrican Air',
  description: 'Premium aircraft charter services across Africa. Medical, sports, film, executive, and humanitarian flights.',
  url: 'https://transafricanair.com',
  twitterHandle: '@transafricanair',
  ogImage: 'https://transafricanair.com/og-image.png',
}

export const pageMetadata: Record<string, Metadata> = {
  home: {
    title: 'African Air Charter | Transafrican Air',
    description: 'Premium aircraft charter services across Africa. Book private jet charters for medical, sports, film, and executive transport. Flexible, reliable, professional.',
    openGraph: {
      title: 'Transafrican Air - African Aircraft Charter Services',
      description: 'Flexible aircraft charter solutions for medical, sports, film, executive, and humanitarian missions across Africa.',
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}/og-home.png`,
          width: 1200,
          height: 630,
          alt: 'Transafrican Air Charter Flights',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'African Aircraft Charter | Transafrican Air',
      description: 'Premium charter flights for medical, sports, film, events, and humanitarian missions.',
      images: [`${siteConfig.url}/og-home.png`],
    },
    keywords: ['aircraft charter Africa', 'private jet charter', 'African air charter', 'charter flights Africa', 'aircraft rental Africa'],
  },

  about: {
    title: 'About Transafrican Air | Professional Aircraft Charter',
    description: 'Learn about Transafrican Air. Over 20 years of experience providing reliable, professional aircraft charter services across Africa. Trusted by medical teams, sports organizations, and enterprises.',
    openGraph: {
      title: 'About Transafrican Air',
      description: 'Trusted African aircraft charter provider with 20+ years of experience. Professional, reliable, flexible solutions.',
      url: `${siteConfig.url}/about`,
      siteName: siteConfig.name,
      type: 'website',
    },
    keywords: ['Transafrican Air', 'aircraft charter company', 'professional charter service', 'African aviation', 'charter operator'],
  },

  medicalCharters: {
    title: 'Medical Air Charter & Air Ambulance Services | Transafrican Air',
    description: 'Emergency and non-emergency medical air charter services. Air ambulance transport, patient evacuation, and medical equipment. Fast, professional, equipped.',
    openGraph: {
      title: 'Medical Air Charter & Air Ambulance | Transafrican Air',
      description: 'Emergency medical transport and air ambulance services. Patient evacuation, medical equipment transport, and emergency response flights.',
      url: `${siteConfig.url}/medical-charters`,
      siteName: siteConfig.name,
      type: 'website',
    },
    keywords: ['medical air charter', 'air ambulance', 'emergency medical transport', 'patient evacuation', 'medical flight charter', 'air ambulance Africa'],
  },

  sportsCharters: {
    title: 'Sports Team Charter Flights | Transafrican Air',
    description: 'Professional aircraft charter for sports teams, athletes, and athletic delegations. Group transport for tournaments, competitions, and events.',
    openGraph: {
      title: 'Sports Team Charter Flights | Transafrican Air',
      description: 'Reliable group transport for sports teams, athletes, and delegations. Charter flights for tournaments and competitions.',
      url: `${siteConfig.url}/sports-charters`,
      siteName: siteConfig.name,
      type: 'website',
    },
    keywords: ['sports team charter', 'athlete transport', 'group charter flights', 'sports charter Africa', 'team aircraft charter'],
  },

  filmTvCharters: {
    title: 'Film & TV Production Aircraft Charter | Transafrican Air',
    description: 'Aircraft charter for film and television production. Crew transport, equipment flights, and remote location logistics for productions.',
    openGraph: {
      title: 'Film & TV Production Aircraft Charter | Transafrican Air',
      description: 'Professional charter flights for film and TV productions. Crew transport and production logistics.',
      url: `${siteConfig.url}/film-tv-charters`,
      siteName: siteConfig.name,
      type: 'website',
    },
    keywords: ['film charter', 'TV production charter', 'film crew transport', 'production aircraft charter', 'location filming charter'],
  },

  executiveEventsCharters: {
    title: 'Corporate & Executive Event Charter Flights | Transafrican Air',
    description: 'Corporate aircraft charter for executive events, conferences, and corporate retreats. VIP transport and group charters for business.',
    openGraph: {
      title: 'Corporate & Executive Event Charter | Transafrican Air',
      description: 'Professional charter flights for corporate events, conferences, and executive retreats.',
      url: `${siteConfig.url}/executive-events-charters`,
      siteName: siteConfig.name,
      type: 'website',
    },
    keywords: ['corporate charter', 'executive charter', 'business aircraft charter', 'VIP transport', 'corporate retreat transport'],
  },

  helicopterCharters: {
    title: 'Helicopter Charter Services | Transafrican Air',
    description: 'Helicopter charter for remote locations, emergency transport, and scenic flights. Access areas unreachable by fixed-wing aircraft.',
    openGraph: {
      title: 'Helicopter Charter Services | Transafrican Air',
      description: 'Professional helicopter charter for remote access, emergency transport, and specialized missions.',
      url: `${siteConfig.url}/helicopter-charters`,
      siteName: siteConfig.name,
      type: 'website',
    },
    keywords: ['helicopter charter', 'helicopter transport Africa', 'remote location access', 'helicopter charter services', 'emergency helicopter'],
  },

  humanitarianCharters: {
    title: 'Humanitarian Aircraft Charter | NGO & Relief Flight Services | Transafrican Air',
    description: 'Humanitarian aircraft charter for NGO missions, disaster relief, and emergency response. Supporting humanitarian organizations and relief efforts.',
    openGraph: {
      title: 'Humanitarian Aircraft Charter | Transafrican Air',
      description: 'Professional charter flights for humanitarian missions, NGO transport, and disaster relief operations.',
      url: `${siteConfig.url}/humanitarian-charters`,
      siteName: siteConfig.name,
      type: 'website',
    },
    keywords: ['humanitarian charter', 'NGO transport', 'relief flight charter', 'disaster relief transport', 'emergency humanitarian flights'],
  },

  perishableGoodsCharters: {
    title: 'Refrigerated Cargo & Perishable Goods Air Charter | Transafrican Air',
    description: 'Refrigerated cargo and perishable goods air charter. Cold chain transport for pharmaceuticals, food, and temperature-sensitive cargo.',
    openGraph: {
      title: 'Refrigerated Cargo Charter | Transafrican Air',
      description: 'Professional cold chain transport for perishable goods, pharmaceuticals, and temperature-sensitive cargo.',
      url: `${siteConfig.url}/perishable-goods-charters`,
      siteName: siteConfig.name,
      type: 'website',
    },
    keywords: ['refrigerated cargo charter', 'cold chain transport', 'perishable goods charter', 'pharmaceutical air transport', 'food cargo charter'],
  },

  contact: {
    title: 'Contact Transafrican Air | Charter Quote & Support',
    description: 'Get a quote or contact Transafrican Air. Professional support for all your aircraft charter needs. Flexible, reliable charter solutions.',
    openGraph: {
      title: 'Contact Transafrican Air',
      description: 'Request a charter quote or contact our support team for professional aircraft charter services.',
      url: `${siteConfig.url}/contact`,
      siteName: siteConfig.name,
      type: 'website',
    },
    keywords: ['charter quote', 'aircraft charter contact', 'Transafrican Air contact'],
  },

  wildlifeTrips: {
    title: 'Wildlife & Safari Adventure Charters | Transafrican Air',
    description: 'Fly to Africa\'s most spectacular wildlife destinations. Charter flights for safari expeditions, wildlife tours, and adventure travel.',
    openGraph: {
      title: 'Wildlife & Safari Adventure Charters | Transafrican Air',
      description: 'Access Africa\'s premier wildlife destinations with charter flights. Safari expeditions and adventure travel with professional support.',
      url: `${siteConfig.url}/wildlife-trips`,
      siteName: siteConfig.name,
      type: 'website',
    },
    keywords: ['wildlife charter', 'safari charter flights', 'adventure travel charter', 'African safari', 'wildlife expedition charter'],
  },

  officialTrips: {
    title: 'Official Delegation & Government Charter Flights | Transafrican Air',
    description: 'Professional charter flights for official delegations, government missions, and diplomatic travel. Protocol-compliant aircraft charter services.',
    openGraph: {
      title: 'Official Delegation & Government Charter | Transafrican Air',
      description: 'Professional aircraft charter for government delegations, official missions, and diplomatic travel with full protocol compliance.',
      url: `${siteConfig.url}/official-trips`,
      siteName: siteConfig.name,
      type: 'website',
    },
    keywords: ['official charter', 'government charter flight', 'diplomatic charter', 'delegation transport', 'official mission charter'],
  },
}

export function generatePageMetadata(page: keyof typeof pageMetadata): Metadata {
  return pageMetadata[page]
}
