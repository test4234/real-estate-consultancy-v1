import Link from "next/link";
import {
  MapPin,
  BedDouble,
  Bath,
  Car,
  Ruler,
  Heart,
  ArrowUpRight,
} from "lucide-react";

export default function PropertyCard({ property }) {
  const {
    slug,
    title,
    address,
    price,
    pricePerSqft,
    type,
    purpose,
    featured = false,
    images = [],
    overview = {},
    category = "residential",
    area,
  } = property;

  const isResidential = category === "residential";
  const isCommercial = category === "commercial";

  const mainImage =
    images.length > 0 ? images[0] : "/placeholder-property.jpg";

  return (
    <article className="group bg-white border border-gray-200 transition hover:shadow-2xl">

      {/* IMAGE */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={mainImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Featured */}
        {featured && (
          <span className="absolute top-5 left-5 text-[11px] uppercase tracking-widest text-black bg-luxury-gold px-4 py-1">
            Featured
          </span>
        )}

        {/* Purpose */}
        {purpose && (
          <span className="absolute top-5 right-5 text-[11px] uppercase tracking-widest text-white border border-white/40 px-4 py-1">
            {purpose}
          </span>
        )}

        {/* Price */}
        <div className="absolute bottom-5 left-5">
          {price && (
            <p className="text-white text-2xl font-semibold">
              {price}
            </p>
          )}
          {pricePerSqft && (
            <p className="text-white/70 text-xs mt-1">
              {pricePerSqft}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="absolute bottom-5 right-5 flex gap-2 opacity-0 group-hover:opacity-100 transition">
          <button className="h-9 w-9 flex items-center justify-center border border-white/40 text-white hover:bg-white hover:text-black transition">
            <ArrowUpRight size={16} />
          </button>
          <button className="h-9 w-9 flex items-center justify-center border border-white/40 text-white hover:bg-white hover:text-black transition">
            <Heart size={16} />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* Title */}
        <h3 className="text-xl font-serif text-luxury-charcoal leading-snug mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Address */}
        {address && (
          <p className="flex items-center text-sm text-gray-500 mb-5">
            <MapPin size={14} className="mr-2" />
            {address}
          </p>
        )}

        {/* Meta */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600 mb-6">

          {isResidential && overview.bedrooms && (
            <span className="flex items-center gap-2">
              <BedDouble size={16} className="text-luxury-gold" />
              {overview.bedrooms} Beds
            </span>
          )}

          {isResidential && overview.bathrooms && (
            <span className="flex items-center gap-2">
              <Bath size={16} className="text-luxury-gold" />
              {overview.bathrooms} Baths
            </span>
          )}

          {(isResidential || isCommercial) && overview.garage && (
            <span className="flex items-center gap-2">
              <Car size={16} className="text-luxury-gold" />
              {overview.garage} Parking
            </span>
          )}

          {(overview.area || area) && (
            <span className="flex items-center gap-2">
              <Ruler size={16} className="text-luxury-gold" />
              {overview.area || area}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-100">
          <span className="text-[11px] uppercase tracking-widest text-gray-400">
            {type}
          </span>

          <Link
            href={`/properties/${slug}`}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-luxury-charcoal hover:text-luxury-gold transition"
          >
            View Details
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
