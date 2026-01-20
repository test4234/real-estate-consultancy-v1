import siteConfig from "../data/siteConfig";

export default function robots() {
  const base =
    typeof siteConfig.siteUrl === "string"
      ? siteConfig.siteUrl.replace(/\/$/, "")
      : "";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: base ? `${base}/sitemap.xml` : undefined,
  };
}
