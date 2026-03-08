import { redirect } from "next/navigation";

export default async function LegacyGuavaBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/zh/blog/${slug}`);
}
