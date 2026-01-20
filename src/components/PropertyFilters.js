"use client";

import { useState, useEffect } from "react";

export default function PropertyFilters({
  onSearch,
  onChange,
  values,
}) {
  const [draftFilters, setDraftFilters] = useState({
    purpose: "all",
    category: "all",
    city: "all",
  });

  // 🔁 SYNC FROM PARENT (URL → PAGE → FILTER UI)
  useEffect(() => {
    if (values) {
      setDraftFilters(values);
    }
  }, [values]);

  const update = (key, value) => {
    setDraftFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // 🔁 LIVE PREVIEW (Hero only)
  useEffect(() => {
    onChange?.(draftFilters);
  }, [draftFilters, onChange]);

  // ✅ SUBMIT
  const submit = (e) => {
    e.preventDefault();
    onSearch?.(draftFilters);
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white border border-gray-200/80 shadow-premium rounded-xl p-6 lg:p-7"
    >
      {/* Header */}
      <div className="mb-6">
        <span className="text-[10px] uppercase tracking-[0.35em] text-luxury-gold block mb-2">
          Property Search
        </span>
        <h3 className="text-2xl font-serif text-luxury-charcoal">
          Find Properties
        </h3>
      </div>

      {/* Purpose */}
      <div className="flex gap-3 mb-6">
        {["all", "rent", "sale"].map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => update("purpose", p)}
            className={`px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest border transition ${
              draftFilters.purpose === p
                ? "border-luxury-gold text-luxury-gold bg-luxury-gold/5"
                : "border-gray-300 text-gray-500 hover:border-black hover:text-black"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Category */}
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">
            Property Type
          </label>
          <select
            value={draftFilters.category}
            onChange={(e) => update("category", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm"
          >
            <option value="all">All Types</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="plot">Plot / Land</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">
            City
          </label>
          <select
            value={draftFilters.city}
            onChange={(e) => update("city", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm"
          >
            <option value="all">All Cities</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
          </select>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-md bg-luxury-charcoal text-white py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-luxury-gold transition"
      >
        View Properties
      </button>
    </form>
  );
}
