import projects from "../../../data/projects";
import siteConfig from "../../../data/siteConfig";
import { buildMeta } from "../../../lib/seo";
import VideoEmbed from "../../../components/VideoEmbed";
import Image from "next/image";
import Link from "next/link";

/* -----------------------------------------
   STATIC PARAMS
------------------------------------------ */
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

/* -----------------------------------------
   METADATA (FIXED)
------------------------------------------ */
export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ FIX HERE

  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const meta = buildMeta({
    title: project.seo?.title || project.title,
    description: project.seo?.description || project.description,
    keywords: project.seo?.keywords || [],
    path: `/projects/${project.slug}`,
    image: project.gallery?.[0],
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
    },
  };
}

/* -----------------------------------------
   PAGE
------------------------------------------ */
export default async function ProjectPage({ params }) {
  const { slug } = await params; // ✅ FIX HERE

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-24 text-center text-2xl font-serif text-gray-500">
        Project not found.
      </div>
    );
  }

  return (
    <main className="bg-white pb-24">

      {/* HERO */}
      <section className="relative h-[70vh] bg-luxury-charcoal overflow-hidden">
        <Image
          src={project.gallery[0]}
          alt={project.title}
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-luxury-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
            {project.builder}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            {project.title}
          </h1>
          <p className="mt-6 text-white/80 text-xs uppercase tracking-widest">
            {project.location} • {project.projectType}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* MAIN */}
          <div className="lg:col-span-8 space-y-16">
            <div>
              <h2 className="text-[11px] uppercase tracking-widest text-luxury-gold mb-6">
                Project Overview
              </h2>
              <p className="text-xl font-serif text-luxury-charcoal leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* GALLERY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.slice(1).map((img, i) => (
                <div key={i} className="relative h-80 overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title} image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* VIDEOS */}
            {project.videos?.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">
                  Project Video
                </h3>
                {project.videos.map((id) => (
                  <VideoEmbed key={id} id={id} title={project.title} />
                ))}
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 bg-soft-beige p-8">
              <h3 className="text-lg font-serif text-luxury-charcoal mb-6">
                Project Details
              </h3>

              <div className="space-y-4 text-sm">
                <p><strong>Developer:</strong> {project.builder}</p>
                <p><strong>Location:</strong> {project.location}</p>
                <p><strong>Type:</strong> {project.projectType}</p>
              </div>

              <div className="mt-8 space-y-4">
                <Link
                  href="/contact"
                  className="block text-center bg-luxury-charcoal text-white py-3 text-xs uppercase tracking-widest hover:bg-luxury-gold transition"
                >
                  Enquire Now
                </Link>

                <Link
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                  className="block text-center border border-luxury-charcoal py-3 text-xs uppercase tracking-widest hover:bg-luxury-charcoal hover:text-white transition"
                >
                  Book Site Visit
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}
