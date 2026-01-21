"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import PropertyFilters from "../components/PropertyFilters";

const DEFAULT_LIMIT = 3;

export default function PropertiesSection({ mode = "home" }) {
  const isPage = mode === "page";
  const searchParams = useSearchParams();

  // ✅ FIX: Generate cities safely for client components
  const cities = useMemo(() => {
    return Array.from(
      new Set(
        properties
          .map((p) => p.city)
          .filter(Boolean)
      )
    ).sort();
  }, []);

  const [appliedFilters, setAppliedFilters] = useState({
    purpose: searchParams.get("purpose") || "all",
    category: searchParams.get("category") || "all",
    city: searchParams.get("city") || "all",
  });

  const [hasSearched, setHasSearched] = useState(
    searchParams.toString().length > 0 || isPage
  );

  const [loading, setLoading] = useState(false);

  // 🔁 Sync filters when URL changes
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setAppliedFilters({
        purpose: searchParams.get("purpose") || "all",
        category: searchParams.get("category") || "all",
        city: searchParams.get("city") || "all",
      });
      setHasSearched(true);
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [searchParams]);

  // 🔍 Filter logic
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      return (
        (appliedFilters.purpose === "all" ||
          p.purpose === appliedFilters.purpose) &&
        (appliedFilters.category === "all" ||
          p.category === appliedFilters.category) &&
        (appliedFilters.city === "all" ||
          p.city === appliedFilters.city)
      );
    });
  }, [appliedFilters]);

  const visibleProperties =
    hasSearched || isPage
      ? filteredProperties
      : properties.slice(0, DEFAULT_LIMIT);

  // ✅ Search handler
  const handleSearch = (filters) => {
    setLoading(true);

    setTimeout(() => {
      setAppliedFilters(filters);
      setHasSearched(true);
      setLoading(false);
    }, 100);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-luxury-gold text-[11px] uppercase tracking-[0.35em] block mb-4">
            Properties
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal">
            {isPage ? "All Properties" : "Discover Exclusive Listings"}
          </h2>
        </div>

        {/* Filters */}
        <PropertyFilters
          values={appliedFilters}
          onSearch={handleSearch}
          cities={cities}
        />

        {/* Results */}
        <div className="mt-16">
          {loading ? (
            <div className="py-32 text-center">
              <div className="inline-block h-10 w-10 animate-spin rounded-full border-2 border-black border-t-transparent" />
              <p className="mt-4 text-sm uppercase tracking-widest text-gray-500">
                Searching Properties
              </p>
            </div>
          ) : visibleProperties.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {visibleProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              {!isPage &&
                !hasSearched &&
                properties.length > DEFAULT_LIMIT && (
                  <div className="mt-20 text-center">
                    <Link
                      href="/properties"
                      className="inline-flex items-center px-10 py-4 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition"
                    >
                      View All Properties
                    </Link>
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-28 border border-dashed border-gray-300">
      <span className="text-[11px] uppercase tracking-[0.35em] text-luxury-gold block mb-4">
        No Results
      </span>
      <h3 className="text-3xl font-serif text-luxury-charcoal mb-6">
        No Properties Match Your Criteria
      </h3>
      <p className="text-gray-500 max-w-md mx-auto">
        Try adjusting your filters or explore a broader category.
      </p>
    </div>
  );
}
