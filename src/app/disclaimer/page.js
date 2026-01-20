import siteConfig from "../../data/siteConfig";

export const metadata = { 
  title: `Disclaimer | ${siteConfig.companyName}`,
  description:
    "Legal disclaimer regarding property information, services, and content provided on this website."
};

export default function Disclaimer() {
  return (
    <main className="bg-white pb-24">

      {/* Header */}
      <header className="bg-soft-beige pt-10 pb-16 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-luxury-gold text-[11px] font-bold uppercase tracking-[0.35em] block mb-4">
            Legal Information
          </span>
          <h1 className="text-4xl font-serif text-luxury-charcoal">
            Disclaimer
          </h1>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div
          className="prose prose-sm md:prose-base max-w-none
          prose-headings:font-serif
          prose-headings:text-luxury-charcoal
          prose-p:text-gray-600
          prose-p:leading-relaxed"
        >

          <h2>General Information</h2>
          <p>
            The information provided on this website is for general informational
            purposes only. While {siteConfig.companyName} strives to keep the
            information accurate and up to date, no representations or warranties
            of any kind are made regarding the completeness, accuracy, reliability,
            or suitability of the information contained on this website.
          </p>

          <h2>Property Information</h2>
          <p>
            Property details such as pricing, availability, layouts, images,
            specifications, and amenities are shared for reference purposes only
            and may be provided by property owners, developers, builders, or third
            parties. All such information is subject to change without prior notice.
            Users are advised to verify all details independently before making
            any property-related decisions.
          </p>

          <h2>Services & Support</h2>
          <p>
            {siteConfig.companyName} offers property-related support services
            including property listings, site visit coordination, municipal
            approval assistance, construction-related coordination, and interior
            service facilitation. We do not provide legal, financial, or investment
            advice, and no guarantees are made regarding outcomes or timelines.
          </p>

          <h2>No Guarantees</h2>
          <p>
            Any references to properties, projects, or services on this website
            do not constitute an offer, commitment, or guarantee. Real estate
            transactions are subject to applicable laws, approvals, and market
            conditions. Users are encouraged to seek professional advice where
            necessary.
          </p>

          <h2>External Links</h2>
          <p>
            This website may contain links to external websites for convenience
            and informational purposes. {siteConfig.companyName} does not have
            control over the content or availability of such external sites and
            does not endorse or accept responsibility for them.
          </p>

          <div className="mt-16 pt-8 border-t border-gray-100">
            <p className="text-[10px] uppercase tracking-widest text-gray-400">
              Last Updated: January 2026
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
