import siteConfig from "../../data/siteConfig";

export const metadata = { 
  title: `Terms & Conditions | ${siteConfig.companyName}`,
  description: "Standard terms of service and engagement for our real estate consultancy."
};

export default function Terms() {
  const sections = [
    { id: "engagement", title: "Terms of Engagement" },
    { id: "intellectual", title: "Intellectual Property" },
    { id: "limitations", title: "Limitations of Liability" },
    { id: "governance", title: "Governing Law" },
  ];

  return (
    <main className="bg-white pb-24">
      {/* 1. EDITORIAL HEADER */}
      <header className="bg-soft-beige pt-10 pb-16 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-luxury-gold text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
            Legal Framework
          </span>
          <h1 className="text-4xl font-serif text-luxury-charcoal italic">
            Terms & Conditions
          </h1>
        </div>
      </header>

      {/* 2. STRUCTURED CONTENT WITH SIDE NAV */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:grid lg:grid-cols-12 gap-16">
        
        {/* Quick Jump Sidebar (Visible on Desktop) */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">Contents</p>
            {sections.map((s) => (
              <a 
                key={s.id} 
                href={`#${s.id}`} 
                className="block text-xs uppercase tracking-tighter text-gray-500 hover:text-luxury-gold transition-colors border-l border-gray-100 pl-4 py-1"
              >
                {s.title}
              </a>
            ))}
          </div>
        </aside>

        {/* Main Legal Body */}
        <div className="lg:col-span-9 max-w-3xl">
          <div className="prose prose-slate prose-headings:font-serif prose-p:font-light prose-p:text-gray-600">
            
            <p className="italic text-gray-400 mb-12">
              Last Updated: January 16, 2026. By accessing this portal or engaging our services, you agree to the following framework.
            </p>

            <section id="engagement" className="scroll-mt-32">
              <h2>1. Terms of Engagement</h2>
              <p>
                {siteConfig.companyName} provides specialized marketing and consultancy services 
                to real estate developers and agencies. The scope of work, timelines, and 
                deliverables for any specific project will be governed by a separate, 
                mutually signed Service Level Agreement (SLA).
              </p>
            </section>

            <section id="intellectual" className="scroll-mt-32">
              <h2>2. Intellectual Property</h2>
              <p>
                All content, architectural visualizations (unless provided by the builder), 
                marketing strategies, and proprietary campaign data developed by 
                {siteConfig.companyName} remain our intellectual property until specifically 
                transferred via written agreement upon final payment.
              </p>
            </section>

            <section id="limitations" className="scroll-mt-32">
              <h2>3. Limitations of Liability</h2>
              <p>
                While we strive for market dominance for every client, real estate sales are 
                dependent on various external factors including market volatility, government 
                policy changes (RERA), and developer delivery timelines. {siteConfig.companyName} 
                is not liable for losses resulting from these external shifts.
              </p>
            </section>

            <section id="governance" className="scroll-mt-32">
              <h2>4. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of 
                India. Any disputes arising in connection with these terms shall be subject 
                to the exclusive jurisdiction of the courts in {siteConfig.defaultCity}.
              </p>
            </section>

          </div>
          
          <div className="mt-20 p-8 bg-soft-beige rounded-sm">
            <p className="text-xs text-gray-500 leading-relaxed font-light">
              <strong>Need a physical copy?</strong> Contact our administrative team at 
              <a href={`mailto:${siteConfig.email}`} className="text-luxury-gold font-medium ml-1">
                {siteConfig.email}
              </a> to request a signed hardcopy of our standard engagement terms.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}