import siteConfig from "../data/siteConfig";
import services from "../data/services";
import projects from "../data/projects";
import blogs from "../data/blogs";

export default function sitemap() {
  const base =
    typeof siteConfig.siteUrl === "string"
      ? siteConfig.siteUrl.replace(/\/$/, "")
      : "";

  if (!base) return [];

  const pages = [
    "",
    "about",
    "services",
    "projects",
    "blog",
    "contact",
  ];

  const urls = pages.map((p) => ({
    url: `${base}/${p}`,
  }));

  services.forEach((s) => {
    if (s?.slug) urls.push({ url: `${base}/services/${s.slug}` });
  });

  projects.forEach((p) => {
    if (p?.slug) urls.push({ url: `${base}/projects/${p.slug}` });
  });

  blogs.forEach((b) => {
    if (b?.slug) urls.push({ url: `${base}/blog/${b.slug}` });
  });

  return urls;
}
