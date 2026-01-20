import PropertyCard from "../PropertyCard";

export default function SimilarProperties({ current, properties }) {
  const similar = properties
    .filter(
      (p) =>
        p.slug !== current.slug &&
        p.category === current.category
    )
    .slice(0, 3);

  if (!similar.length) return null;

  return (
    <section className="mt-28">
      <span className="text-[11px] uppercase tracking-[0.35em] text-luxury-gold block mb-4">
        You May Also Like
      </span>

      <h2 className="text-4xl font-serif text-luxury-charcoal mb-14">
        Similar Properties
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {similar.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </section>
  );
}
