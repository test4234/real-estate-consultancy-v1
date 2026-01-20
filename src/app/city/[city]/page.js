import cities from "../../../data/cities";
import siteConfig from "../../../data/siteConfig";
import { buildMeta } from "../../../lib/seo";
import LeadForm from "../../../components/LeadForm";

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const { city: slug } = await params;
  const city = cities.find(c => c.slug === slug);
  if (!city) return {};
  
  const title = `Bespoke Real Estate Consultancy in ${city.name} | ${siteConfig.companyName}`;
  const meta = buildMeta({
    title,
    description: city.description,
    path: `/city/${city.slug}`,
  });
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

export default async function CityPage({ params }) {
  const { city: slug } = await params;
  const city = cities.find(c => c.slug === slug);
  
  if (!city) {
    return <div className="container py-24 text-serif italic text-center">Location profile not found.</div>;
  }

  return (
    <main className="bg-white pb-24">
      {/* 1. LOCAL AUTHORITY HERO */}
      <header className="bg-soft-beige pt-32 pb-20 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-luxury-gold text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">
            Regional Expertise
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-luxury-charcoal italic leading-tight max-w-4xl">
            Strategic Real Estate <br />Consultancy in {city.name}
          </h1>
          <div className="h-[1px] w-24 bg-luxury-gold mt-10 mb-10" />
          <p className="mt-8 text-lg text-gray-500 font-light max-w-2xl leading-relaxed">
            {city.description || `Navigating the high-value property landscape of ${city.name} with precision marketing and local buyer intelligence.`}
          </p>
        </div>
      </header>

      {/* 2. LOCAL INTELLIGENCE & CONVERSION */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Content Column */}
          <div className="lg:col-span-7">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-12">
              The {city.name} Advantage
            </h2>
            
            <div className="space-y-16">
              <div className="group border-l border-gray-100 pl-8 hover:border-luxury-gold transition-colors duration-500">
                <h3 className="text-2xl font-serif text-luxury-charcoal mb-4 italic">Hyper-Local Project Marketing</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Our launch strategies are tailored to the specific micro-markets within {city.name}, ensuring your development reaches the right HNI and NRI investors.
                </p>
              </div>

              <div className="group border-l border-gray-100 pl-8 hover:border-luxury-gold transition-colors duration-500">
                <h3 className="text-2xl font-serif text-luxury-charcoal mb-4 italic">Channel Management</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  We manage and incentivize the strongest local sales channels and broker networks in {city.name} to accelerate inventory liquidation.
                </p>
              </div>

              <div className="group border-l border-gray-100 pl-8 hover:border-luxury-gold transition-colors duration-500">
                <h3 className="text-2xl font-serif text-luxury-charcoal mb-4 italic">Strategic Outreach</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  From high-end buyer events to targeted digital funnels, we create a bespoke presence for your project in the local market.
                </p>
              </div>
            </div>

            {/* Geographic SEO Text Block */}
            <div className="mt-24 p-10 bg-gray-50 rounded-sm">
              <h4 className="text-sm font-bold text-luxury-charcoal uppercase tracking-widest mb-4">Market Overview: {city.name}</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                As a leading real estate consultant in {city.name}, {siteConfig.companyName} provides data-driven insights into the region's fastest-growing residential and commercial corridors. Our local office understands the nuances of {city.name}'s real estate regulations and buyer behavior.
              </p>
            </div>
          </div>

          {/* Sticky Conversion Sidebar */}
          <aside className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <div className="text-center mb-8">
                <h3 className="text-lg font-serif italic text-luxury-charcoal">Local Inquiries</h3>
                <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold mt-2">Connect with our {city.name} Team</p>
              </div>
              <LeadForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}