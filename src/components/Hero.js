import Link from "next/link";
import TrustStats from "./TrustStats";

export default function Hero({
  title,
  subtitle,
  ctaText = "Book Site Visit",
  ctaHref = "/contact",
  backgroundImage = "/hero-main.jpg",
  sideImage = "/hero-side.jpg",
}) {
  return (
    <section className="relative bg-black overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Property in Machilipatnam"
          className="h-full w-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[70vh] flex items-center py-[60px]">
        <div className="w-full px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">

            {/* LEFT */}
            <div className="max-w-3xl">

              {/* Badge */}
              <span className="inline-flex px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-white/10 text-luxury-gold border border-white/20 mb-6">
                Real Estate & Property Services
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {title}
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
                {subtitle}
              </p>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href={ctaHref}
                  className="px-10 py-4 bg-luxury-gold text-black text-xs font-bold uppercase tracking-widest transition hover:bg-white"
                >
                  {ctaText}
                </Link>
              </div>

              {/* Trust */}
              <TrustStats />
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden lg:flex justify-end">
              <div className="relative w-[420px] aspect-[3/4] overflow-hidden border border-white/20">
                <img
                  src={sideImage}
                  alt="Property services"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 px-5 py-4 border border-white/20">
                  <p className="text-xs uppercase tracking-widest text-luxury-gold">
                    Local Expertise
                  </p>
                  <p className="text-sm text-white mt-1">
                    Property, approvals & construction support
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
