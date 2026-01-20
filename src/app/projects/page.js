import projects from "../../data/projects";
import { buildMeta } from "../../lib/seo";
import ProjectCard from "../../components/ProjectCard";

/* -----------------------------------------
   METADATA
------------------------------------------ */
export async function generateMetadata() {
  const meta = buildMeta({
    title: "Completed & Ongoing Projects",
    description:
      "Explore residential and commercial real estate projects developed in Machilipatnam and nearby regions, including apartments, independent houses, plots, and commercial buildings.",
    path: "/projects",
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

/* -----------------------------------------
   PROJECTS PAGE
------------------------------------------ */
export default function Projects() {
  return (
    <main className="bg-white">

      {/* 1. PAGE HEADER */}
      <header className="bg-soft-beige pt-12 pb-16 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-end">

          {/* Left */}
          <div>
            <span className="text-luxury-gold text-[11px] font-bold uppercase tracking-[0.35em] block mb-4">
              Our Work
            </span>

            <h1 className="text-4xl md:text-6xl font-serif text-luxury-charcoal leading-tight">
              Real Estate <br />Projects
            </h1>

            <p className="mt-6 text-gray-600 text-sm max-w-xl leading-relaxed">
              A selection of residential, commercial, and plotted developments
              executed across Machilipatnam and surrounding areas, delivered
              with a focus on quality construction, approvals, and long-term value.
            </p>
          </div>

          {/* Right */}
          <div className="md:text-right">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
              Primary Locations
            </p>
            <p className="text-sm text-luxury-charcoal">
              Machilipatnam • Challapally • Nearby Regions
            </p>
          </div>

        </div>
      </header>

      {/* 2. PROJECT GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        {projects.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-gray-300">
            <h3 className="text-2xl font-serif text-luxury-charcoal mb-4">
              Projects Coming Soon
            </h3>
            <p className="text-gray-500 text-sm">
              Our completed and ongoing projects will be listed here shortly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        )}

      </section>

      {/* 3. TRUST CTA */}
      <section className="border-t border-gray-100 py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-luxury-charcoal mb-6">
            Planning a New Project?
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            From land identification and municipal approvals to construction
            coordination and execution, we support projects at every stage.
          </p>

          <a
            href="/contact"
            className="inline-block bg-luxury-charcoal text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-luxury-gold transition"
          >
            Discuss Your Requirement
          </a>
        </div>
      </section>

    </main>
  );
}
