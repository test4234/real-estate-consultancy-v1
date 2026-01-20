import ServiceCard from "../components/ServiceCard";
import services from "../data/services";

export default function ServicesSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-luxury-gold text-[11px] uppercase tracking-[0.35em] block mb-4">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal leading-tight">
            Property & Construction Services
          </h2>

          <p className="mt-6 text-gray-500 max-w-xl">
            Practical real estate and property-related services supporting
            site visits, approvals, construction coordination, and interior works.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
