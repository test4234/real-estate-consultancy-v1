import AuthoritySection from "../sections/AuthoritySection";
import ServicesSection from "../sections/ServicesSection";
import ProjectsSection from "../sections/ProjectsSection";
import VideosSection from "../sections/VideosSection";
import BlogSection from "../sections/BlogSection";
import LeadSection from "../sections/LeadSection";
import HeroPropertySearch from "../components/HeroPropertySearch";

import siteConfig from "../data/siteConfig";

/* -----------------------------------------
   PAGE METADATA (HOME – WHATSAPP FRIENDLY)
------------------------------------------ */
export async function generateMetadata() {
  return {
    // 🔹 Google SEO title (NO "Home |")
    title: siteConfig.seo.defaultTitle,

    // 🔹 Google description (can be long)
    description: siteConfig.description,

    // 🔹 WhatsApp / Social (SHORT & CLEAN)
    openGraph: {
      title: siteConfig.seo.ogTitle,
      description: siteConfig.seo.ogDescription,
      url: siteConfig.siteUrl,
      siteName: siteConfig.companyName,
      type: "website",
      images: [
        {
          url: siteConfig.seo.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.companyName,
        },
      ],
    },

    alternates: {
      canonical: siteConfig.siteUrl,
    },
  };
}

/* -----------------------------------------
   HOME PAGE
------------------------------------------ */
export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroPropertySearch />

      {/* Authority / Trust */}
      <AuthoritySection />

      {/* Services */}
      <ServicesSection />

      {/* Projects / Developments */}
      <ProjectsSection />

      {/* Videos */}
      <VideosSection />

      {/* Blog */}
      <BlogSection />

      {/* Lead / CTA */}
      <LeadSection />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: siteConfig.companyName,
            url: siteConfig.siteUrl,
          }),
        }}
      />
    </>
  );
}
