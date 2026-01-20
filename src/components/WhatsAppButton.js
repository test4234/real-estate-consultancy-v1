"use client";

import { useState, useRef, useEffect } from "react";

/**
 * Floating Contact Button
 * - Button position NEVER moves
 * - Options float above the button
 * - Demo only (no numbers)
 */
export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center"
    >
      {/* Floating Options (ABSOLUTE – no layout shift) */}
      <div
        className={`absolute bottom-16 right-0 flex flex-col items-end gap-3 transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {/* Call */}
        <button
          type="button"
          aria-label="Call (demo)"
          className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg border hover:bg-gray-50 transition"
        >
          <span className="text-sm font-medium text-gray-800">
            Call
          </span>
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg">
            📞
          </span>
        </button>

        {/* WhatsApp */}
        <button
          type="button"
          aria-label="WhatsApp (demo)"
          className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg border hover:bg-gray-50 transition"
        >
          <span className="text-sm font-medium text-gray-800">
            WhatsApp
          </span>
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-green-600 text-white text-lg">
            💬
          </span>
        </button>
      </div>

      {/* Main Floating Button (POSITION NEVER CHANGES) */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Contact options"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-green-600 text-white shadow-xl hover:bg-green-700 transition"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M20.52 3.48a11.9 11.9 0 00-16.85 0 11.9 11.9 0 00-3.5 12.72L2 22l5.97-1.62a11.9 11.9 0 0012.55-4.5 11.9 11.9 0 000-16.9z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}
