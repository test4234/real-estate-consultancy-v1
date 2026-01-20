import LeadForm from "../components/LeadForm";
import siteConfig from "../data/siteConfig";

export default function LeadSection() {
  return (
    <section className="py-10 relative overflow-hidden bg-white">

      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-soft-beige -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">

        {/* Content */}
        <div className="lg:w-1/2">

          <span className="text-luxury-gold text-[11px] uppercase tracking-[0.35em] block mb-4">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal leading-tight">
            Ready to plan your<br />property or site visit?
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
            Connect with {siteConfig.companyName} to discuss property options,
            site visits, municipal approvals, construction coordination, or
            interior services across Machilipatnam and surrounding areas.
          </p>

        </div>

        {/* Form */}
        <div className="lg:w-1/2 w-full max-w-xl">
          <LeadForm />
        </div>

      </div>
    </section>
  );
}
