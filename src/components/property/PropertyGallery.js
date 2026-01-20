"use client";

import { useState } from "react";

export default function PropertyGallery({ images = [] }) {
  const [active, setActive] = useState(0);
  if (!images.length) return null;

  return (
    <section>
      {/* Main Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl border border-gray-200">
        <img
          src={images[active]}
          className="w-full h-[520px] object-cover"
          alt=""
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative shrink-0 rounded-lg overflow-hidden border transition ${
              active === i
                ? "border-luxury-gold"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              className="h-20 w-28 object-cover"
              alt=""
            />
          </button>
        ))}
      </div>
    </section>
  );
}
