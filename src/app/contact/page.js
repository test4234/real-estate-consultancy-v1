import siteConfig from "../../data/siteConfig";
import { buildMeta } from "../../lib/seo";
import LeadForm from "../../components/LeadForm";

export async function generateMetadata() {
  const meta = buildMeta({
    title: "Contact Us",
    description: `Get in touch with ${siteConfig.companyName} for property inquiries, site visits, approvals, and real estate services in ${siteConfig.defaultCity}.`,
    path: "/contact",
  });

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function Contact() {
  return (
    <main className="bg-white pb-24">

      {/* Header */}
      <header className="bg-soft-beige pt-10 pb-20 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">

          <span className="text-luxury-gold text-[11px] font-bold uppercase tracking-[0.35em] block mb-6">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-6xl font-serif text-luxury-charcoal leading-tight">
            Let’s Plan Your Property<br />or Site Visit
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl">
            Reach out to {siteConfig.companyName} for property details, site visits,
            municipal approvals, construction coordination, and interior services
            across Machilipatnam and nearby areas.
          </p>

        </div>
      </header>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left Column */}
          <div className="lg:col-span-6 space-y-16">

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Office Address
                </h4>
                <p className="text-luxury-charcoal text-sm leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Call Us
                  </h4>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-luxury-charcoal hover:text-luxury-gold transition text-lg font-serif"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Email
                  </h4>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-luxury-charcoal hover:text-luxury-gold transition text-sm border-b border-luxury-gold pb-1"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-soft-beige p-8 border border-gray-100">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-luxury-charcoal mb-4">
                Quick WhatsApp Inquiry
              </h4>

              <p className="text-gray-600 text-sm mb-6">
                Ideal for quick property questions, site visit scheduling,
                and service-related inquiries.
              </p>

              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-3 bg-luxury-charcoal text-white px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-luxury-gold transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                Location
              </h4>

              <div className="relative h-80 w-full overflow-hidden border border-gray-100">
                <iframe
                  title="Office Location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    siteConfig.address
                  )}&output=embed`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <aside className="lg:col-span-6">
            <div className="sticky top-32">

              <div className="mb-10">
                <h3 className="text-2xl font-serif text-luxury-charcoal">
                  Book a Site Visit
                </h3>
                <p className="text-gray-500 text-sm mt-3 max-w-md">
                  Share your requirements and our team will contact you to
                  arrange a site visit or provide relevant property details.
                </p>
              </div>

              <LeadForm />
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}
