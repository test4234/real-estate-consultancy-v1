const properties = [
  /* ======================================================
     1. RESIDENTIAL APARTMENT – MACHILIPATNAM
  ====================================================== */
  {
    id: "MP01",
    slug: "premium-2bhk-machilipatnam",
    title: "Premium 2 BHK Apartment",
    address: "Pedana Road, Machilipatnam, Andhra Pradesh",

    city: "machilipatnam",
    category: "residential",
    type: "Apartment",
    purpose: "sale",
    featured: true,

    price: "₹48 Lakh",
    pricePerSqft: "₹4,200 / sq ft",

    overview: {
      bedrooms: 2,
      bathrooms: 2,
      garage: 1,
      area: "1150 Sq Ft",
      yearBuilt: 2023,
    },

    description:
      "Well-planned 2 BHK apartment located close to schools, hospitals, and daily amenities. Ideal for families looking for a peaceful residential environment in Machilipatnam.",

    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
    ],

    features: [
      "Lift",
      "Power Backup",
      "Covered Parking",
      "24x7 Water Supply",
    ],
  },

  /* ======================================================
     2. INDEPENDENT HOUSE – MACHILIPATNAM
  ====================================================== */
  {
    id: "MP02",
    slug: "independent-house-machilipatnam",
    title: "Independent Residential House",
    address: "Godugupet Area, Machilipatnam, Andhra Pradesh",

    city: "machilipatnam",
    category: "residential",
    type: "Independent House",
    purpose: "sale",

    price: "₹82 Lakh",
    pricePerSqft: "₹5,100 / sq ft",

    overview: {
      bedrooms: 3,
      bathrooms: 3,
      garage: 1,
      area: "1600 Sq Ft",
      yearBuilt: 2021,
    },

    description:
      "Independent house with clear title, vastu-compliant design, and good road access. Suitable for own living or long-term investment.",

    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    ],

    features: [
      "East Facing",
      "Municipal Water",
      "Good Road Access",
      "Compound Wall",
    ],
  },

  /* ======================================================
     3. COMMERCIAL SHOP – MACHILIPATNAM
  ====================================================== */
  {
    id: "MP03",
    slug: "commercial-shop-main-road",
    title: "Commercial Shop on Main Road",
    address: "Main Bazaar Road, Machilipatnam, Andhra Pradesh",

    city: "machilipatnam",
    category: "commercial",
    type: "Shop",
    purpose: "rent",

    price: "₹25,000 / month",
    pricePerSqft: "₹80 / sq ft",

    overview: {
      area: "320 Sq Ft",
      yearBuilt: 2018,
    },

    description:
      "Road-facing commercial shop suitable for retail store, medical shop, or office use. High footfall area.",

    images: [
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1200&auto=format&fit=crop",
    ],

    features: [
      "High Visibility",
      "Shutter Facility",
      "Power Connection",
    ],
  },

  /* ======================================================
     4. RESIDENTIAL PLOT – CHALLAPALLI
  ====================================================== */
  {
    id: "MP04",
    slug: "residential-plot-challapalli",
    title: "Residential Plot in Gated Layout",
    address: "Challapalli, Krishna District, Andhra Pradesh",

    city: "challapalli",
    category: "plot",
    type: "Residential Plot",
    purpose: "sale",

    price: "₹22 Lakh",
    pricePerSqft: "₹2,900 / sq ft",

    area: "1800 Sq Ft",

    description:
      "Approved residential plot in a gated layout with good drainage, wide roads, and nearby residential development.",

    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    ],

    features: [
      "DTCP Approved",
      "Gated Community",
      "Wide Roads",
      "Electricity Available",
    ],
  },

  /* ======================================================
     5. AGRICULTURAL LAND – AVANIGADDA
  ====================================================== */
  {
    id: "MP05",
    slug: "agricultural-land-avanigadda",
    title: "Agricultural Land Near Canal",
    address: "Avanigadda Mandal, Krishna District, Andhra Pradesh",

    city: "avanigadda",
    category: "plot",
    type: "Agricultural Land",
    purpose: "sale",

    price: "₹35 Lakh",
    pricePerSqft: "₹350 / sq ft",

    area: "10,000 Sq Ft",

    description:
      "Fertile agricultural land with water availability, suitable for farming or long-term holding.",

    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    ],

    features: [
      "Canal Water",
      "Road Access",
      "Clear Ownership",
    ],
  },

  /* ======================================================
     6. COMMERCIAL OFFICE – VIJAYAWADA
  ====================================================== */
  {
    id: "MP06",
    slug: "office-space-vijayawada",
    title: "Office Space Near Benz Circle",
    address: "Benz Circle, Vijayawada, Andhra Pradesh",

    city: "vijayawada",
    category: "commercial",
    type: "Office Space",
    purpose: "rent",

    price: "₹45,000 / month",
    pricePerSqft: "₹65 / sq ft",

    overview: {
      area: "700 Sq Ft",
      yearBuilt: 2020,
    },

    description:
      "Well-maintained office space suitable for consultancy, IT services, or administrative use.",

    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    ],

    features: [
      "Lift",
      "Power Backup",
      "Parking Available",
    ],
  },
];

export default properties;
