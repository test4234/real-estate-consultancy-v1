import Link from "next/link";
import Image from "next/image";

/**
 * Service card – clean, functional, clearly different from projects
 */
export default function ServiceCard({ service }) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden transition hover:shadow-md">

      {/* Image (Small & Functional) */}
      <div className="relative h-40 w-full bg-gray-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-lg font-semibold text-luxury-charcoal mb-3">
          {service.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {service.short}
        </p>

        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-[11px] font-bold uppercase tracking-widest text-luxury-gold hover:underline"
        >
          View Details →
        </Link>

      </div>
    </article>
  );
}
