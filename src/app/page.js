import HeroSection from "../sections/HeroSection";
import AuthoritySection from "../sections/AuthoritySection";
import ServicesSection from "../sections/ServicesSection";
import PropertiesSection from "../sections/PropertiesSection"; // ✅ NEW
import ProjectsSection from "../sections/ProjectsSection";
import VideosSection from "../sections/VideosSection";
import BlogSection from "../sections/BlogSection";
import LeadSection from "../sections/LeadSection";
import HeroPropertySearch from "../components/HeroPropertySearch";

import siteConfig from "../data/siteConfig";
import { buildMeta } from "../lib/seo";

/* -----------------------------------------
   PAGE METADATA
------------------------------------------ */
export async function generateMetadata() {
  const meta = buildMeta({
    title: "Home",
    description: siteConfig.description,
    path: "/",
  });

  return {
    title: meta.title,
    description: meta.description,
    openGraph: meta.openGraph,
    alternates: {
      canonical: meta.canonical,
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
      {/* <HeroSection /> */}
      < HeroPropertySearch />

      {/* Authority / Trust */}
      <AuthoritySection />

      {/* Services */}
      <ServicesSection />

      {/* ✅ Property Listings */}
      {/* <PropertiesSection /> */}

      {/* Projects / Developments */}
      <ProjectsSection />

      {/* Videos */}
      <VideosSection />

      {/* Blog */}
      <BlogSection />

      {/* Lead / CTA */}
      <LeadSection />

      {/* WebPage Schema (Page-specific) */}
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
