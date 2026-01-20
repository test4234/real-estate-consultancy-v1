import videos from "../../data/videos";
import { buildMeta } from "../../lib/seo";
import VideoEmbed from "../../components/VideoEmbed";
import siteConfig from "../../data/siteConfig";

export async function generateMetadata() {
  const meta = buildMeta({
    title: `Property Videos & Site Walkthroughs | ${siteConfig.companyName}`,
    description: `Watch property walkthroughs, site visit videos, and project highlights across ${siteConfig.defaultCity} and nearby regions.`,
    path: "/videos",
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

export default function Videos() {
  const featuredVideo = videos[0];
  const galleryVideos = videos.slice(1);

  return (
    <main className="bg-white pb-24">

      {/* HEADER */}
      <header className="bg-soft-beige pt-10 pb-10 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto max-w-3xl">

          <span className="text-luxury-gold text-[11px] font-bold uppercase tracking-[0.35em] block mb-6">
            Property Media
          </span>

          <h1 className="text-4xl md:text-6xl font-serif text-luxury-charcoal leading-tight">
            Property Videos & <br />Site Walkthroughs
          </h1>

          <p className="mt-8 text-gray-500 leading-relaxed">
            Explore real on-site videos, property walkthroughs, and project
            highlights to better understand locations, layouts, and surroundings
            before scheduling a visit.
          </p>

        </div>
      </header>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10">

        {/* FEATURED VIDEO */}
        {featuredVideo && (
          <div className="mb-24">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-6">
              Featured Property
            </h3>

            <div className="aspect-video w-full bg-black overflow-hidden rounded-sm shadow-premium">
              <VideoEmbed
                id={featuredVideo.id}
                title={featuredVideo.title}
              />
            </div>

            <h2 className="mt-6 text-2xl font-serif text-luxury-charcoal">
              {featuredVideo.title}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              {featuredVideo.category || "Site Walkthrough"}
            </p>
          </div>
        )}

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {galleryVideos.map((video) => (
            <div key={video.id}>
              <div className="aspect-video w-full bg-black overflow-hidden rounded-sm shadow">
                <VideoEmbed
                  id={video.id}
                  title={video.title}
                />
              </div>

              <h4 className="mt-4 text-lg font-serif text-luxury-charcoal">
                {video.title}
              </h4>

              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                Property Video
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 py-20">
        <div className="max-w-3xl mx-auto text-center px-6">

          <h2 className="text-3xl font-serif text-luxury-charcoal mb-6">
            Want to visit the site in person?
          </h2>

          <p className="text-gray-500 mb-10">
            Contact {siteConfig.companyName} to arrange a site visit or get
            complete property details.
          </p>

          <a
            href="/contact"
            className="inline-block bg-luxury-charcoal text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-luxury-gold transition"
          >
            Book Site Visit
          </a>

        </div>
      </section>

    </main>
  );
}
