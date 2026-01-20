import LeadForm from "../../components/LeadForm";
import siteConfig from "../../data/siteConfig";

export async function generateMetadata() {
  return {
    title: `Property Enquiry | ${siteConfig.companyName}`,
    description:
      "Submit a property enquiry or request a site visit with Machilipatnam Properties.",
  };
}

export default function Enquire() {
  return (
    <main className="min-h-screen bg-soft-beige flex flex-col items-center justify-center py-16 px-6">

      {/* Brand */}
      <div className="mb-12 text-center">
        <h2 className="text-[11px] font-bold uppercase tracking-[0.45em] text-luxury-gold">
          {siteConfig.companyName}
        </h2>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white border border-gray-100 shadow-premium overflow-hidden">

        {/* Left: Information */}
        <div className="p-10 lg:p-16 bg-luxury-charcoal text-white flex flex-col justify-center">
          <span className="text-luxury-gold text-[11px] font-bold uppercase tracking-[0.35em] mb-6">
            Property Enquiry
          </span>

          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            Plan Your Property<br />or Site Visit
          </h1>

          <ul className="space-y-5">
            {[
              "Property details and availability",
              "Site visit scheduling",
              "Municipal approval guidance",
              "Construction and interior services support",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-5 h-5 rounded-full border border-luxury-gold flex items-center justify-center shrink-0 mt-1">
                  <svg
                    className="w-3 h-3 text-luxury-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                </span>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-10 border-t border-white/10">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest leading-relaxed">
              Serving Machilipatnam, Challapally & Vijayawada
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-10 lg:p-16 bg-white flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-xl font-serif text-luxury-charcoal">
              Book a Site Visit
            </h3>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">
              Share your requirements below
            </p>
          </div>

          <LeadForm />

          <p className="mt-8 text-[10px] text-center text-gray-400">
            Your information will be used only to respond to your enquiry.  
            Read our{" "}
            <a
              href="/privacy"
              className="underline hover:text-luxury-gold transition"
            >
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>

      {/* Back link */}
      <div className="mt-12">
        <a
          href="/"
          className="text-gray-400 hover:text-luxury-charcoal text-[10px] font-bold uppercase tracking-[0.25em] transition"
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
