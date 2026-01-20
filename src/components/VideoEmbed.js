/**
 * Refactored VideoEmbed for a cinematic, high-end experience.
 * Luxury-styled YouTube embed component.
 */
export default function VideoEmbed({ id, title }) {
  const src = `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&iv_load_policy=3`;

  return (
    <div className="group relative w-full">
      {/* Decorative Accent */}
      <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-luxury-gold/30 rounded-tr-lg transition-all duration-500 group-hover:-top-2 group-hover:-right-2" />

      {/* Video Container */}
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl bg-luxury-charcoal shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.01]">
        <iframe
          title={title || "Property Cinematic Tour"}
          src={src}
          loading="lazy"
          className="absolute inset-0 w-full h-full z-10"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-luxury-charcoal/10 pointer-events-none">
          <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
          </div>
        </div>
      </div>

      {/* Title */}
      {title && (
        <div className="mt-4 flex items-center justify-between">
          <h4 className="font-serif text-lg text-luxury-charcoal italic tracking-tight">
            {title}
          </h4>
        </div>
      )}
    </div>
  );
}
