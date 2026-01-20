export default function PropertyOverview({ property }) {
  const o = property.overview || {};
  const category = property.category;

  const Item = ({ label, value }) =>
    value ? (
      <div>
        <p className="text-[11px] uppercase tracking-widest text-gray-400">
          {label}
        </p>
        <p className="text-sm font-medium text-luxury-charcoal mt-1">
          {value}
        </p>
      </div>
    ) : null;

  return (
    <section>
      <span className="text-[11px] uppercase tracking-[0.35em] text-luxury-gold block mb-3">
        Property Details
      </span>

      <h2 className="text-3xl font-serif text-luxury-charcoal mb-10">
        Overview
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-8">
        <Item label="Property ID" value={property.id} />
        <Item label="Type" value={property.type} />

        {category === "residential" && (
          <>
            <Item label="Bedrooms" value={o.bedrooms} />
            <Item label="Bathrooms" value={o.bathrooms} />
          </>
        )}

        {category !== "plot" && <Item label="Parking" value={o.garage} />}
        <Item label="Area" value={o.area || property.area} />
        <Item label="Year Built" value={o.yearBuilt} />
      </div>
    </section>
  );
}
