"use client";

import { useState, useRef, useEffect } from "react";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const phoneNumber = "1234567890";

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Options Menu */}
      <div
        className={`flex flex-col items-end gap-4 mb-4 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          open 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        {/* WhatsApp Link */}
        <div className={`flex items-center gap-3 transition-all duration-500 delay-[50ms] ${open ? "translate-x-0" : "translate-x-4"}`}>
          <span className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            WhatsApp
          </span>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg hover:scale-110 active:scale-95 transition-all"
            aria-label="Chat on WhatsApp"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </a>
        </div>

        {/* Call Link */}
        <div className={`flex items-center gap-3 transition-all duration-500 delay-[100ms] ${open ? "translate-x-0" : "translate-x-4"}`}>
          <span className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            Call Us
          </span>
          <a
            href={`tel:${phoneNumber}`}
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#007AFF] text-white shadow-lg hover:scale-110 active:scale-95 transition-all"
            aria-label="Call support"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .63 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.63A2 2 0 0 1 22 16.92z"/></svg>
          </a>
        </div>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`relative w-14 h-14 flex items-center justify-center rounded-2xl shadow-xl transition-all duration-300 active:scale-90 z-10 ${
          open ? "bg-gray-900 rotate-90" : "bg-[#25D366] hover:bg-[#20ba5a]"
        }`}
      >
        {/* Simple Pulse Effect when closed */}
        {!open && (
           <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-20"></span>
        )}

        {open ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        )}
      </button>
    </div>
  );
}