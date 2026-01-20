// Centralized site configuration.
// Replace these values per client or city.

const siteConfig = {
  companyName: "Machilipatnam Properties",
  shortName: "Machilipatnam Properties",

  tagline:
    "Real Estate & Property Services in Machilipatnam and Surrounding Regions",

  description:
    "Machilipatnam Properties is a local real estate and property services firm offering end-to-end support including property sales, material contracts, municipal approvals, interior works, and construction-related services across Machilipatnam, Challapally, and Vijayawada.",

  phone: "+91-XXXXXXXXXX",
  whatsapp: "+91XXXXXXXXXX",
  email: "info@machilipatnamproperties.com",

  address:
    "Machilipatnam, Krishna District, Andhra Pradesh, India",

  logo: "/logo.png",

  defaultCity: "Machilipatnam",

  // ⚠️ MUST BE REAL DOMAIN IN PRODUCTION
  siteUrl: "https://real-estate-consultancy-v1.vercel.app",

  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },

  seo: {
    defaultTitle:
      "Machilipatnam Properties | Real Estate & Property Services",

    keywords: [
      "Machilipatnam properties",
      "real estate Machilipatnam",
      "property services Machilipatnam",
      "municipal plan approvals",
      "interior and construction services",
      "real estate Vijayawada",
    ],

    // ✅ WHATSAPP IMAGE (VERY IMPORTANT)
    // Place this image inside /public
    // Recommended size: 1200x630
    ogImage: "/og-image.jpg",
  },

  founder: {
    name: "Ravi Teja Reddy",
    role: "Founder & Principal – Real Estate & Property Development",
    experience: 12,
    education: "Diploma in Civil Engineering",
    image: "/owner.jpg",
    bio:
      "Ravi Teja Reddy is a local real estate developer with over 12 years of experience in residential and commercial property development. His work includes independent houses, apartment projects, residential plot developments, and small commercial properties across Machilipatnam and nearby regions. He is actively involved in project planning, municipal approvals, construction coordination, and on-site execution.",
  },

  cta: {
    primary: "Book Site Visit",
  },
};

export default siteConfig;
