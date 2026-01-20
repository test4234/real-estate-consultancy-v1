import Image from "next/image";
import siteConfig from "../../data/siteConfig";
import { buildMeta } from "../../lib/seo";
import LeadForm from "../../components/LeadForm";

export async function generateMetadata() {
  const meta = buildMeta({
    title: "About Us",
    description: `About ${siteConfig.companyName} – ${siteConfig.tagline}`,
    path: "/about",
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

export default function About() {
  const founder = siteConfig.founder;

  return (
    <main className="bg-white">
      {/* =====================================================
         1. HERO HEADER
      ===================================================== */}
      <section className="bg-soft-beige pt-10 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-luxury-gold text-[11px] font-bold uppercase tracking-[0.4em] block mb-6">
            Legacy & Expertise
          </span>

          <h1 className="text-5xl md:text-7xl font-serif text-luxury-charcoal italic leading-tight max-w-4xl">
            About {siteConfig.companyName}
          </h1>

          <p className="mt-8 text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
      </section>

      {/* =====================================================
         2. STATS / TRUST BAR (DATA-DRIVEN)
      ===================================================== */}
      <section className="border-y border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <Stat
            value={`${founder?.experience || "10"}+`}
            label="Years of Experience"
          />
          <Stat
            value={siteConfig.stats?.projects || "50+"}
            label="Projects & Properties Handled"
            bordered
          />
          <Stat
            value={founder?.education || "Certified Professional"}
            label="Professional Background"
          />
        </div>
      </section>

      {/* =====================================================
         3. MAIN CONTENT + SIDEBAR
      ===================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-7 space-y-16">
            {/* Vision */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-luxury-gold mb-4">
                Vision & Mission
              </h3>
              <p className="text-2xl font-serif text-luxury-charcoal italic leading-snug">
                Our vision is to become the most trusted real estate advisory in
                our region by delivering transparent guidance, verified
                properties, and long-term value for every client.
              </p>
            </div>

            {/* Market Focus */}
            <div className="bg-soft-beige p-10 border-l-4 border-luxury-gold">
              <h3 className="text-sm font-bold uppercase tracking-widest text-luxury-charcoal mb-6">
                Regional Expertise
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We specialize in residential, commercial, and land transactions
                across {siteConfig.defaultCity} and surrounding regions. Our
                strength lies in local approvals, on-ground knowledge, and
                end-to-end transaction support.
              </p>
            </div>

            {/* Credentials (Optional) */}
            {siteConfig.certifications?.length > 0 && (
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
                  Certifications & Affiliations
                </h3>
                <div className="flex flex-wrap gap-8 items-center">
                  {siteConfig.certifications.map((c) => (
                    <div key={c} className="text-sm text-gray-500">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* =====================================================
             SIDEBAR (FOUNDER + LEAD FORM)
          ===================================================== */}
          <aside className="lg:col-span-5">
            <div className="sticky top-32 space-y-12">
              {/* Founder Card */}
              {founder && (
                <div className="p-8 border border-gray-100 bg-white shadow-premium rounded-xl">
                  <div className="flex items-center gap-5 mb-6">
                    {founder.image && (
                      <div className="relative h-16 w-16 rounded-full overflow-hidden">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-luxury-gold">
                        {founder.role}
                      </p>
                      <h4 className="text-lg font-serif text-luxury-charcoal">
                        {founder.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              )}

              {/* Lead Form */}
              <LeadForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* -----------------------------------------
   STAT COMPONENT
------------------------------------------ */
function Stat({ value, label, bordered = false }) {
  return (
    <div
      className={`text-center md:text-left ${
        bordered ? "md:border-x md:border-gray-100 md:px-12" : ""
      }`}
    >
      <div className="text-4xl font-serif text-luxury-charcoal">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-2">
        {label}
      </div>
    </div>
  );
}
