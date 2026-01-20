"use client";

import dynamic from "next/dynamic";

/**
 * ❗ IMPORTANT
 * This disables static prerendering for this page.
 * Required because PropertiesSection uses browser-only logic.
 */
export const dynamic = "force-dynamic";

// Dynamically import to avoid SSR execution
const PropertiesSection = dynamic(
  () => import("../../sections/PropertiesSection"),
  { ssr: false }
);

export default function PropertiesPage() {
  return <PropertiesSection mode="page" />;
}
