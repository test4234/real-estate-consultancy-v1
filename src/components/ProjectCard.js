import Link from "next/link";
import Image from "next/image";

/**
 * ProjectCard
 * Compact, premium, and developer-focused
 * Designed for grids (home + projects page)
 */
export default function ProjectCard({ project }) {
  const image = project.gallery?.[0] || "/placeholder.jpg";

  return (
    <article className="bg-white border border-gray-200 rounded-xl overflow-hidden transition hover:shadow-lg">
      <Link href={`/projects/${project.slug}`} className="block group">

        {/* IMAGE */}
        <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
          <Image
            src={image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Status Badge */}
          {project.status && (
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-luxury-charcoal">
              {project.status}
            </span>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-5">

          {/* Meta */}
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-400 mb-2">
            {project.projectType && <span>{project.projectType}</span>}
            {project.year && (
              <>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>{project.year}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-luxury-charcoal leading-snug mb-2">
            {project.title}
          </h3>

          {/* Location */}
          {project.location && (
            <p className="text-sm text-gray-500 mb-3">
              {project.location}
            </p>
          )}

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-luxury-gold group-hover:underline">
              View Project
            </span>

            <span className="text-gray-400 transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>
      </Link>
    </article>
  );
}
