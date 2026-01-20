import BlogCard from "../components/BlogCard";
import blogs from "../data/blogs";
import Link from "next/link";

export default function BlogSection() {
  return (
    <section className="bg-soft-beige py-[60px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">

          <div className="max-w-2xl">
            <span className="text-luxury-gold text-[11px] uppercase tracking-[0.35em] block mb-4">
              Insights
            </span>

            <h2 className="text-3xl md:text-4xl font-serif text-luxury-charcoal leading-tight">
              Property Insights & Updates
            </h2>

            <p className="mt-4 text-gray-600 text-sm max-w-xl">
              Practical insights on property buying, approvals, construction,
              and interior works to help you make informed decisions.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center text-[11px] font-bold uppercase tracking-widest text-luxury-charcoal border-b border-luxury-charcoal hover:text-luxury-gold hover:border-luxury-gold transition w-fit"
          >
            View All Articles
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogs.slice(0, 4).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}
