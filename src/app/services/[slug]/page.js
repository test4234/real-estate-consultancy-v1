import services from "../../../data/services";
import { buildMeta } from "../../../lib/seo";
import LeadForm from "../../../components/LeadForm";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return {};
  const meta = buildMeta({
    title: service.seo?.title || service.title,
    description: service.seo?.description || service.short,
    keywords: service.seo?.keywords || [],
    path: `/services/${service.slug}`,
  });
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return (
      <div className="container py-24 text-center font-serif italic text-2xl">
        Service profile not found.
      </div>
    );
  }

  return (
    <main className="bg-white pb-24">
      {/* 1. ARCHITECTURAL HEADER */}
      <header className="bg-soft-beige pb-20 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-luxury-gold text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">
            Bespoke Expertise
          </span>
          <h1 className="text-4xl md:text-7xl font-serif text-luxury-charcoal italic leading-tight max-w-4xl">
            {service.title}
          </h1>
          <div className="h-[1px] w-24 bg-luxury-gold mt-10 mb-10" />
          <p className="mt-8 text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
            {service.short}
          </p>
        </div>
      </header>

      {/* 2. CORE CONTENT & METHODOLOGY */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-7">
            <div className="prose prose-lg max-w-none prose-p:font-light prose-p:text-gray-600 prose-headings:font-serif">
              <h2 className="text-3xl italic text-luxury-charcoal mb-8">Service Overview</h2>
              <p className="mb-12 leading-relaxed">
                {service.content}
              </p>

              {/* Step-by-Step Methodology */}
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-luxury-gold mb-12">Our Delivery Framework</h3>
              
              <div className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gray-100">
                {[
                  { step: "01", title: "Discovery & Analysis", desc: "We begin by auditing the property’s unique DNA and market positioning." },
                  { step: "02", title: "Strategic Blueprint", desc: "A custom roadmap designed to align architectural intent with buyer demand." },
                  { step: "03", title: "Execution & Management", desc: "Deployment of high-performance marketing channels and sales operations." },
                  { step: "04", title: "Optimization", desc: "Continuous scaling based on real-time data and conversion metrics." }
                ].map((item) => (
                  <div key={item.step} className="relative pl-12 group">
                    <div className="absolute left-0 top-0 w-9 h-9 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold text-luxury-gold group-hover:border-luxury-gold transition-colors z-10">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-serif text-luxury-charcoal italic mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. STICKY LEAD CAPTURE */}
          <aside className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <div className="bg-white border border-gray-100 p-10 shadow-premium">
                <h3 className="text-2xl font-serif italic text-luxury-charcoal mb-2">Request Proposal</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">For {service.title} Inquiries</p>
                <LeadForm />
                <div className="mt-8 pt-8 border-t border-gray-50 text-center">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    Direct Response within 24 Hours
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}