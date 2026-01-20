"use client";

import { useState } from "react";
import siteConfig from "../data/siteConfig";

export default function LeadForm({ hidden = false }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !phone) {
      setStatus({ ok: false, msg: "Please enter your name and phone number." });
      return;
    }

    const payload = {
      name,
      phone,
      message,
      source: typeof window !== "undefined" ? window.location.pathname : "/",
      date: new Date().toISOString(),
      company: siteConfig.companyName,
      city: siteConfig.defaultCity,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      setSubmitted(true);
      setStatus(null);
      setName("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus({ ok: false, msg: "Something went wrong. Please try again." });
    }
  }

  /* SUCCESS STATE */
  if (submitted) {
    return (
      <div
        className={`${hidden ? "hidden" : ""} bg-soft-beige/60 backdrop-blur-sm p-10 lg:p-12 rounded-2xl border border-gray-200 text-center`}
      >
        <div className="mb-6 text-green-600 text-3xl">✓</div>

        <h4 className="text-xl font-medium text-gray-900 mb-3">
          Inquiry Sent Successfully
        </h4>

        <p className="text-sm text-gray-600 leading-relaxed">
          Thank you for reaching out. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  /* FORM */
  return (
    <form
      onSubmit={handleSubmit}
      className={`${hidden ? "hidden" : ""} bg-soft-beige/60 backdrop-blur-sm p-10 lg:p-12 rounded-2xl border border-gray-200`}
    >
      {/* Header */}
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-widest text-gray-500 block mb-2">
          Private Inquiry
        </span>
        <h4 className="text-xl text-gray-900 font-medium">
          Request a Confidential Consultation
        </h4>
      </div>

      {/* Fields */}
      <div className="space-y-5">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          className="w-full border border-gray-300 px-4 py-3 text-sm"
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone / WhatsApp"
          className="w-full border border-gray-300 px-4 py-3 text-sm"
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Message (optional)"
          className="w-full border border-gray-300 px-4 py-3 text-sm resize-none"
        />
      </div>

      {/* Error */}
      {status && !status.ok && (
        <p className="mt-4 text-sm text-red-600">
          {status.msg}
        </p>
      )}

      <button
        type="submit"
        className="mt-8 w-full bg-gray-900 text-white py-3 text-xs uppercase tracking-widest"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
