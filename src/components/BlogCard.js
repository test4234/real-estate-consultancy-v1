import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  return (
    <article className="group cursor-pointer bg-white overflow-hidden transition-all duration-500">
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Image Container with Editorial Zoom */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={post.image || "https://images.unsplash.com/photo-1630061712710-2539eb457c55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVhbCUyMGVzdGF0ZSUyMGJ1aWxkaW5nfGVufDB8MnwwfHx8MA%3D%3D"} // Prop enhancement suggestion
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle overlay for category/tag if available */}
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-luxury-charcoal">
              Lifestyle
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-luxury-gold">
              {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-gray-400">
              {post.author}
            </span>
          </div>

          <h3 className="font-serif text-2xl text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300 leading-tight mb-3">
            {post.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6 font-light">
            {post.excerpt}
          </p>

          <div className="inline-flex items-center text-[12px] font-bold uppercase tracking-[0.2em] text-luxury-charcoal">
            <span className="relative">
              Read Article
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-luxury-charcoal/20 group-hover:bg-luxury-gold transition-colors" />
            </span>
            <svg 
              className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}