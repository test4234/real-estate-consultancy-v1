import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function ProjectsSection() {
  return (
    <section className="bg-luxury-charcoal py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-luxury-gold text-[11px] uppercase tracking-[0.35em] block mb-4">
            Our Experience
          </span>

          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Selected Projects & Properties
          </h2>

          <p className="mt-6 text-gray-300 max-w-xl">
            A selection of residential and commercial projects where our team
            has supported property listings, municipal approvals, construction
            coordination, or site visits across Machilipatnam and nearby regions.
          </p>

          <div className="w-20 h-[2px] bg-luxury-gold mt-8" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
