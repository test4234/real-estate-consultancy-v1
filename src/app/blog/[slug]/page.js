import blogs from "../../../data/blogs";
import { buildMeta } from "../../../lib/seo";
import Link from "next/link";

/* -----------------------------------------
   STATIC PARAMS
------------------------------------------ */
export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

/* -----------------------------------------
   METADATA
------------------------------------------ */
export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ FIX
  const post = blogs.find((b) => b.slug === slug);

  if (!post) return {};

  const meta = buildMeta({
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords || [],
    path: `/blog/${post.slug}`,
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

/* -----------------------------------------
   BLOG POST PAGE
------------------------------------------ */
export default async function BlogPost({ params }) {
  const { slug } = await params; // ✅ FIX
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="container py-24 text-center font-serif italic text-2xl">
        Article not found.
      </div>
    );
  }

  return (
    <main className="bg-white pb-24">

      {/* HEADER */}
      <header className=" pb-16 bg-soft-beige">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/blog"
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold hover:text-luxury-charcoal transition mb-8 inline-block"
          >
            ← Back to Articles
          </Link>

          <h1 className="text-4xl md:text-6xl font-serif text-luxury-charcoal italic leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-luxury-gold">5 Min Read</span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <article className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">

        {/* LEFT SHARE */}
        <aside className="hidden lg:block lg:col-span-2">
          <div className="sticky top-32 space-y-8">
            <div className="h-[1px] w-12 bg-luxury-gold" />
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
              Share
            </p>
            <div className="flex flex-col gap-4">
              <button className="text-[11px] font-bold uppercase tracking-tight text-left hover:text-luxury-gold">
                LinkedIn
              </button>
              <button className="text-[11px] font-bold uppercase tracking-tight text-left hover:text-luxury-gold">
                Twitter
              </button>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <div className="lg:col-span-8">

          {post.image && (
            <div className="mb-12 aspect-[16/9] overflow-hidden rounded-lg shadow-premium">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div
            className="
              prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:italic prose-headings:text-luxury-charcoal
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light
              prose-blockquote:border-l-luxury-gold prose-blockquote:bg-soft-beige
              prose-a:text-luxury-gold prose-a:no-underline hover:prose-a:text-luxury-charcoal
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.seo?.keywords && (
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
              {post.seo.keywords.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest bg-gray-50 px-3 py-1 text-gray-500"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="hidden lg:block lg:col-span-2" />
      </article>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 mt-24 text-center">
        <div className="bg-luxury-charcoal p-12 rounded-lg text-white">
          <h3 className="text-2xl font-serif italic mb-4">
            Need Local Property Guidance?
          </h3>
          <p className="text-gray-400 text-sm mb-8">
            Speak with our team for site visits, approvals, or construction
            planning support.
          </p>
          <Link
            href="/contact"
            className="inline-block border-b border-luxury-gold pb-1 text-luxury-gold uppercase text-[11px] font-bold tracking-[0.2em] hover:text-white transition"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
