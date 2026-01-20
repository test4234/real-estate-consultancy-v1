/**
 * Simple blog loader: reads Markdown files from /content/blog
 * Uses gray-matter to parse frontmatter and remark -> HTML for content.
 *
 * This runs on the server at build time.
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_PATH = path.join(process.cwd(), "content", "blog");

export async function getAllBlogs() {
  const files = fs.readdirSync(BLOG_PATH).filter((f) => f.endsWith(".md"));
  const posts = await Promise.all(
    files.map(async (file) => {
      const fullPath = path.join(BLOG_PATH, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(raw);
      const slug = file.replace(/\.md$/, "");
      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        author: data.author || "",
        excerpt: data.excerpt || "",
        seo: data.seo || {},
      };
    })
  );

  // Sort by date desc if date available
  posts.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date) - new Date(a.date);
  });

  return posts;
}

export async function getBlogBySlug(slug) {
  const fullPath = path.join(BLOG_PATH, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content || "");
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    author: data.author || "",
    excerpt: data.excerpt || "",
    seo: data.seo || {},
    contentHtml,
  };
}