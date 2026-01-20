"use client";

import dynamic from "next/dynamic";

// Dynamically import to avoid SSR / prerender execution
const PropertiesSection = dynamic(
  () => import("../../sections/PropertiesSection"),
  { ssr: false }
);

export default function PropertiesPage() {
  return <PropertiesSection mode="page" />;
}
