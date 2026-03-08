import allPosts from "content-collections/allPosts";
import allPostsEns from "content-collections/allPostsEns";
import type { Locale } from "@/lib/locale";

type ZhPost = (typeof allPosts)[number];
type EnPost = (typeof allPostsEns)[number];

export type BlogPost = ZhPost | EnPost;

export function getPostSlug(path: string): string {
  return path
    .replace(/^en\/guava\//, "")
    .replace(/^guava\//, "")
    .replace(/\.mdx$/, "");
}

export function getSortedPosts(locale: Locale): BlogPost[] {
  const posts = locale === "en" ? allPostsEns : allPosts;
  return [...posts].sort((a, b) =>
    new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
  );
}

export function getLocalizedPostTitle(post: BlogPost): string {
  return post.title;
}

export function getLocalizedPostSummary(post: BlogPost): string {
  return post.summary;
}

export function findPostBySlug(
  locale: Locale,
  slug: string
): BlogPost | undefined {
  return getSortedPosts(locale).find((post) => getPostSlug(post._meta.path) === slug);
}
