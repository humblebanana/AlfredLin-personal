import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";
import type { BlogPost } from "@/lib/blog";
import { getSortedPosts, getPostSlug } from "@/lib/blog";
import { getProjectStaticParams } from "@/lib/projects";

function getPostLastModified(post: BlogPost) {
  return new Date(
    "updatedAt" in post && typeof post.updatedAt === "string"
      ? post.updatedAt
      : post.publishedAt
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zh/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const projectPages = getProjectStaticParams().flatMap(({ slug }) => [
    {
      url: `${baseUrl}/projects/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zh/projects/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]);

  const enPosts = getSortedPosts("en").map((post) => ({
    url: `${baseUrl}/blog/${getPostSlug(post._meta.path)}`,
    lastModified: getPostLastModified(post),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const zhPosts = getSortedPosts("zh").map((post) => ({
    url: `${baseUrl}/zh/blog/${getPostSlug(post._meta.path)}`,
    lastModified: getPostLastModified(post),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...enPosts, ...zhPosts];
}
