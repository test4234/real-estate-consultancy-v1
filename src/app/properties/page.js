"use client";

import PropertiesSection from "../../sections/PropertiesSection";

/**
 * Properties Page
 * Client-side page because it contains filters, interactions,
 * and possibly browser-only logic.
 * Metadata is handled globally in app/layout.js
 */
export default function PropertiesPage() {
  return <PropertiesSection mode="page" />;
}
