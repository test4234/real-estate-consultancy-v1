import blogs from "../../data/blogs";
import { buildMeta } from "../../lib/seo";
import BlogCard from "../../components/BlogCard";
import Link from "next/link";
import siteConfig from "../../data/siteConfig";

export async function generateMetadata() {
  const meta = buildMeta({
    title: `Property Insights & Updates | ${siteConfig.companyName}`,
    description: `Helpful articles on property buying, approvals, construction, and real estate guidance in ${siteConfig.defaultCity}.`,
    path: "/blog",
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

export default function Blog() {
  const featuredPost = blogs[0];
  const remainingPosts = blogs.slice(1);

  return (
    <main className="bg-white">

      {/* HEADER */}
      <section className="pt-10 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-luxury-gold text-[11px] uppercase tracking-[0.35em] block mb-4">
            Knowledge Hub
          </span>

          <h1 className="text-4xl md:text-6xl font-serif text-luxury-charcoal leading-tight">
            Property Insights
          </h1>

          <p className="mt-6 text-gray-500 text-base leading-relaxed">
            Practical guidance on buying property, municipal approvals,
            construction planning, and real estate updates in{" "}
            {siteConfig.defaultCity} and nearby regions.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">

        {/* FEATURED */}
        {featuredPost && (
          <div className="mb-20">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={featuredPost.image || "/blog-placeholder.jpg"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="mt-8 max-w-4xl">
                <h2 className="text-2xl md:text-4xl font-serif text-luxury-charcoal group-hover:text-luxury-gold transition">
                  {featuredPost.title}
                </h2>

                <p className="mt-4 text-gray-500 text-sm max-w-2xl">
                  {featuredPost.excerpt}
                </p>

                <span className="inline-block mt-6 text-[11px] font-bold uppercase tracking-widest border-b border-luxury-gold">
                  Read Article
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {remainingPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-soft-beige py-20">
        <div className="max-w-xl mx-auto text-center px-6">
          <h3 className="text-2xl font-serif text-luxury-charcoal mb-4">
            Need Property Guidance?
          </h3>

          <p className="text-gray-500 text-sm mb-8">
            Get help with site visits, approvals, or construction planning.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-luxury-charcoal text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-luxury-gold transition"
          >
            Book Site Visit
          </Link>
        </div>
      </section>
    </main>
  );
}
