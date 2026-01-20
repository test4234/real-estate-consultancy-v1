export default function PropertyVideo({ url }) {
  if (!url) return null;

  return (
    <section>
      <span className="text-[11px] uppercase tracking-[0.35em] text-luxury-gold block mb-3">
        Media
      </span>

      <h2 className="text-3xl font-serif text-luxury-charcoal mb-8">
        Property Video
      </h2>

      <div className="overflow-hidden rounded-xl border border-gray-200">
        <iframe
          src={url}
          className="w-full h-[420px]"
          allowFullScreen
        />
      </div>
    </section>
  );
}
