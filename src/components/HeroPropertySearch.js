"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import properties from "../data/properties";
import PropertyCard from "./PropertyCard";
import PropertyFilters from "./PropertyFilters";

const HERO_LIMIT = 5;

export default function HeroPropertySearch() {
  const router = useRouter();

  // LOCAL PREVIEW FILTERS (UNCHANGED BEHAVIOR)
  const [filters, setFilters] = useState({
    purpose: "all",
    category: "all",
    city: "all",
  });

  // FULL SCREEN SPINNER STATE
  const [loading, setLoading] = useState(false);

  // FILTERED PREVIEW (UNCHANGED)
  const filtered = useMemo(() => {
    return properties.filter((p) => {
      return (
        (filters.purpose === "all" || p.purpose === filters.purpose) &&
        (filters.category === "all" || p.category === filters.category) &&
        (filters.city === "all" || p.city === filters.city)
      );
    });
  }, [filters]);

  const visible = filtered.slice(0, HERO_LIMIT);

  // 🔑 ONLY CALLED ON FORM SUBMIT
  const handleSearchSubmit = (finalFilters) => {
    setLoading(true);

    const params = new URLSearchParams(finalFilters).toString();

    setTimeout(() => {
      router.push(`/properties?${params}`);
    }, 1000);
  };

  return (
    <>
      {/* ===================== */}
      {/* FULL SCREEN SPINNER */}
      {/* ===================== */}
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-2 border-black border-t-transparent" />
          <p className="mt-6 text-xs uppercase tracking-widest text-gray-500">
            Searching Properties
          </p>
        </div>
      )}

      {/* ===================== */}
      {/* HERO SECTION */}
      {/* ===================== */}
      <section className="relative bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-main.jpg"
            alt="Property listings"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

            {/* LEFT */}
            <div className="lg:col-span-6 text-white">
              <span className="text-[11px] uppercase tracking-[0.35em] text-luxury-gold">
                Property Search
              </span>

              <h1 className="text-4xl md:text-6xl font-serif leading-tight mt-6">
                Discover Properties <br />in Machilipatnam
              </h1>

              <p className="mt-6 text-gray-300 max-w-md">
                Verified residential, commercial & land listings with
                local expertise, approvals, and guided site visits.
              </p>
            </div>

            {/* RIGHT – FILTER CARD */}
            <div className="lg:col-span-6">
              <div className="bg-white shadow-2xl border border-gray-200">
                <PropertyFilters
                  onSearch={handleSearchSubmit}
                  onChange={setFilters} // 👈 local preview updates
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* DEFAULT / PREVIEW RESULTS */}
      {/* ===================== */}
      {visible.length > 0 && (
        <section className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <div className="mb-12">
              <span className="text-[11px] uppercase tracking-[0.35em] text-luxury-gold block mb-3">
                Featured
              </span>
              <h2 className="text-3xl font-serif text-luxury-charcoal">
                Available Properties
              </h2>
            </div>

            {/* MOBILE */}
            <div className="lg:hidden">
              <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
                {visible.map((property) => (
                  <div
                    key={property.id}
                    className="snap-center w-[90%] shrink-0"
                  >
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:flex gap-8 overflow-x-auto pb-6 scrollbar-hide">
              {visible.map((property) => (
                <div key={property.id} className="min-w-[360px]">
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/properties"
                className="inline-flex items-center gap-3 px-12 py-4 border border-luxury-charcoal text-luxury-charcoal text-xs font-bold uppercase tracking-widest transition hover:bg-luxury-charcoal hover:text-white"
              >
                View All Properties
                <span className="text-lg">→</span>
              </Link>
            </div>

          </div>
        </section>
      )}
    </>
  );
}
