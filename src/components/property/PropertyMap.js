export default function PropertyMap({ address }) {
  if (!address) return null;

  return (
    <section>
      <span className="text-[11px] uppercase tracking-[0.35em] text-luxury-gold block mb-3">
        Neighborhood
      </span>

      <h2 className="text-3xl font-serif text-luxury-charcoal mb-8">
        Location
      </h2>

      <div className="overflow-hidden rounded-xl border border-gray-200">
        <iframe
          className="w-full h-[380px]"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            address
          )}&output=embed`}
          loading="lazy"
        />
      </div>
    </section>
  );
}
