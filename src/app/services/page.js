import services from "../../data/services";
import { buildMeta } from "../../lib/seo";
import ServiceCard from "../../components/ServiceCard";
import siteConfig from "../../data/siteConfig";

export async function generateMetadata() {
  const meta = buildMeta({
    title: "Services",
    description: `Strategic real estate marketing and consultancy services by ${siteConfig.companyName}.`,
    path: "/services",
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* 1. PAGE INTRO */}
      <header className="bg-soft-beige px-6 sm:px-10 lg:px-20 xl:px-28 pt-10 pb-20 border-b border-gray-100">
        <div className="max-w-3xl">
          <span className="block text-[11px] uppercase tracking-[0.35em] text-luxury-gold mb-4">
            What We Do
          </span>

          <h1 className="text-4xl md:text-6xl font-serif text-luxury-charcoal leading-tight">
            Our Services
          </h1>

          <p className="mt-6 text-gray-500 text-lg font-light leading-relaxed">
            We partner with developers and investors to design, position,
            and market real estate projects with clarity, credibility, and performance.
          </p>
        </div>
      </header>

      {/* 2. SERVICES GRID */}
      <section className="px-6 sm:px-10 lg:px-20 xl:px-28 py-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* 3. CTA STRIP */}
      <section className="bg-luxury-charcoal py-16">
        <div className="px-6 sm:px-10 lg:px-20 xl:px-28 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl md:text-3xl font-serif text-white">
            Need a tailored strategy for your next project?
          </h2>

          <a
            href="/contact"
            className="px-10 py-4 bg-luxury-gold text-black text-[11px] font-bold uppercase tracking-widest hover:bg-white transition"
          >
            Request Consultation
          </a>
        </div>
      </section>

    </main>
  );
}
