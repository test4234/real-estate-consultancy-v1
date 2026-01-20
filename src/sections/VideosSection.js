import VideoEmbed from "../components/VideoEmbed";
import videos from "../data/videos";

export default function VideosSection() {
  return (
    <section className="py-[60px] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-luxury-gold text-[11px] uppercase tracking-[0.35em] block mb-4">
            Video Content
          </span>

          <h2 className="text-3xl md:text-4xl font-serif text-luxury-charcoal leading-tight">
            Property Walkthroughs & Insights
          </h2>

          <p className="mt-4 text-gray-600 text-sm max-w-xl">
            Explore property walkthroughs, service explanations, and on-site
            insights to better understand locations, layouts, and processes
            before booking a site visit.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {videos.slice(0, 4).map((video) => (
            <VideoEmbed
              key={video.id}
              id={video.id}
              title={video.title}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
