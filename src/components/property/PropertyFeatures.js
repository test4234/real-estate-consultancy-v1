export default function PropertyFeatures({ features }) {
  if (!Array.isArray(features) || features.length === 0) return null;

  return (
    <section>
      {/* Header */}
      <span className="text-[11px] uppercase tracking-[0.35em] text-luxury-gold block mb-3">
        Highlights
      </span>

      <h2 className="text-3xl font-serif text-luxury-charcoal mb-10">
        Amenities & Features
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-sm text-gray-600">
        {features.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-luxury-gold text-xs mt-[2px]">◆</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
