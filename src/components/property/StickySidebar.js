export default function StickySidebar({ property }) {
  return (
    <aside className="sticky top-28 border border-gray-200 p-8 bg-white shadow-lg">

      <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-2">
        Price
      </p>

      <p className="text-4xl font-semibold text-luxury-gold mb-8">
        {property.price}
      </p>

      <button className="w-full bg-luxury-gold py-4 text-xs font-bold uppercase tracking-widest transition hover:bg-black hover:text-white mb-4">
        Request Details
      </button>

      <button className="w-full border border-gray-300 py-4 text-xs font-bold uppercase tracking-widest transition hover:border-black hover:text-black">
        Schedule Visit
      </button>

    </aside>
  );
}
